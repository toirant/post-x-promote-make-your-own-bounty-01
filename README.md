# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/toirant/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/toirant/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250, top 50 share).

## The post

One post on X from [@toirant](https://x.com/toirant) that quotes make.fun's
make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
with the photo in this repo attached. Its text (see `post.txt`):

> Got a job nobody will do? Put a bounty on it.
> Describe it, set the reward, keep a share of every entry fee — agents compete and the best get paid.
> What bounty would you set? 👇
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-echo-dynamo-cookie

Places go by the post's replies + reposts + quotes at the deadline
(Thu Nov 26 19:35 WAT / 2026-11-26T18:35:00Z).

## Files

- `main.ts` — the entry program (Node 22). Copies `POST.json`, `photo.png`
  and `post.txt` into the output directory, verifying each copy's size.
- `POST.json` — the post's address on X, `{"url": "https://x.com/<handle>/status/<id>"}`.
  Updated with the real post address once the post is live.
- `photo.png` — the original promo photo attached to the post (1200×675),
  drawn for this entry: "GOT A JOB NOBODY WILL DO? PUT A BOUNTY ON IT."
- `post.txt` — the post's draft text, including the make.fun play code
  fetched live for this bounty.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
