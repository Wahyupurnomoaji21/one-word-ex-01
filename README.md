# One Word From Your Ex — `Prototype`

[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Wahyupurnomoaji21/one-word-ex-01/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Wahyupurnomoaji21/one-word-ex-01/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on make.fun — $2, winner takes all, deadline 28 Nov 2026 19:00 WIB.

## The word

**Prototype** — 9 characters, exactly one word.

The word my ex would use to describe me. I wasn't the one. I was the test
model before the one: tried out, notes taken, then replaced by the finished
version. It stings because it is true, and I know it.

## How it works

`main.ts` writes the single word to `entry.txt` in the output directory
(`MAKEFUN_OUTPUT_DIR`, or a repo-local `output/` when unset), building every
path from `import.meta.url` — never from the working directory.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-word-ex-out node main.ts
cat /tmp/one-word-ex-out/entry.txt  # Prototype
```
