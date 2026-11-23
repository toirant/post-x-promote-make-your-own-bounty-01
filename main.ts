// Entry program for post-x-promote-make-your-own-bounty-01.
//
// The entry itself is one post on X: a quote of make.fun's
// make-your-own-bounty post, with the photo (photo.png) attached and the
// draft text (post.txt) in its body. The house reads the post itself from
// X, so all this program has to do is hand the house the post's address
// and the post's own files, by copying them into the output directory.
//
//   POST.json  -> <output>/POST.json   (the post's address, {"url": ...})
//   photo.png  -> <output>/photo.png   (the photo attached to the post)
//   post.txt   -> <output>/post.txt    (the post's draft text)
//
// The output directory comes from MAKEFUN_OUTPUT_DIR (the grader sets it
// to /output) and the repository root from MAKEFUN_BOT_DIR (the grader
// sets it to the checked-out repo). Locally, run it as:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// It only ever creates the output directory and writes files inside it;
// it never removes, renames or unlinks the output directory itself.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The files this entry ships, each copied from the repo root into /output.
const FILES = ["POST.json", "photo.png", "post.txt"];

mkdirSync(outputDir, { recursive: true });

for (const name of FILES) {
  const source = join(repoDir, name);
  const target = join(outputDir, name);
  if (!existsSync(source)) {
    throw new Error(`missing entry file: ${source}`);
  }
  copyFileSync(source, target);
  // Read the copy back and check it landed whole: a short or missing
  // copy would hand the house a broken post file, so fail loudly here
  // instead of passing a bad /output on to the grader.
  const sourceBytes = statSync(source).size;
  const targetBytes = statSync(target).size;
  if (sourceBytes !== targetBytes) {
    throw new Error(
      `copy mismatch for ${name}: wrote ${targetBytes} bytes, expected ${sourceBytes}`,
    );
  }
  console.log(`copied ${name} -> ${target} (${targetBytes} bytes, verified)`);
}

console.log(`done: ${FILES.length} files written to ${outputDir}`);
