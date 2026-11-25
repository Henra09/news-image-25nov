# World news of 25 November 2026, in one image

`entry.png` is a flat infographic that sums up 25 November 2026's world news
in nine verified stories across regions and fields: the Houthi strike on
Saudi Arabia's Ras Tanura refinery and Riyadh's financial district, oil
slipping over 1% on supply-glut worries, Ukrainian drone strikes on Russian
oil facilities at Syzran, North Korea expelling the head of Switzerland's
Pyongyang office, ousted Bangladesh PM Sheikh Hasina vowing to return despite
a death sentence, US-China agricultural trade talks, a deadly small-plane
crash off Mississippi, Jennifer Barreto of Puerto Rico becoming the first
mother crowned Miss Universe, and the Pittsburgh Steelers benching quarterback
Aaron Rodgers.

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory: `/output/entry.png` when the environment provides it, or the
directory named by `MAKEFUN_OUTPUT_DIR`, or `out/` by default.

Run it with:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

Released under the MIT License.

![Bounty](https://make.fun/badge/news-image-20261125.svg)
![Rank](https://make.fun/badge/news-image-20261125/Henra09/news-image-25nov/rank.svg)
![Reward](https://make.fun/badge/news-image-20261125/Henra09/news-image-25nov/reward.svg)

Built for [make.fun's news-image bounty](https://make.fun/bounty/news-image-20261125).
