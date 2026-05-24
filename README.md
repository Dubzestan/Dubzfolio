# Dubzfolio

A static portfolio website built with pure HTML, CSS, and JavaScript.
Deployed automatically to GitHub Pages via GitHub Actions.

**Live site:** https://dubzestan.github.io/Dubzfolio/

---

## Team

| Member | Tasks |
|--------|-------|
| Parsa | Setup, Navbar, Projects, Global styles, CI, Responsive |
| Arian | Hero, About, Contact, Animations, Form validation, README |

---

## Project Structure

```
Dubzfolio/
├── index.html
├── css/
│   ├── main.css
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── projects.css
│   ├── contact.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── navbar.js
│   └── animations.js
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```
---

## Branching Strategy

- `main` — protected, production-ready. Only receives merges from `dev`.
- `dev` — integration branch. All feature branches merge here first.
- `feature/*` — one branch per feature, merged into `dev` via Pull Request.

---

## Commit History Summary

| # | Commit Message | Branch | Person |
|---|----------------|--------|--------|
| 1 | init: initial project setup and .gitignore | main | 1 |
| 2 | chore: create project folder structure and placeholder files | dev | 1 |
| 3 | feat: add HTML skeleton to index.html | dev | 1 |
| 4 | feat: add Navbar HTML | feature/navbar | 1 |
| 5 | style: add Navbar CSS | feature/navbar | 1 |
| 6 | feat: add Navbar JS (toggle, scroll, smooth scroll) | feature/navbar | 1 |
| 7 | feat: add Hero section HTML | feature/hero | 2 |
| 8 | style: add Hero section CSS | feature/hero | 2 |
| 9 | feat: add About section HTML | feature/about | 2 |
| 10 | style: add About section CSS | feature/about | 2 |
| 11 | feat: add Projects section HTML | feature/projects | 1 |
| 12 | style: add Projects section CSS | feature/projects | 1 |
| 13 | feat: add Contact section and Footer HTML | feature/contact | 2 |
| 14 | style: add Contact section and Footer CSS | feature/contact | 2 |
| 15 | feat: add scroll animation JS | feature/animations | 1 |
| 16 | style: add animations CSS | feature/animations | 1 |
| 17 | style: add global CSS reset and custom properties | feature/styles | 2 |
| 18 | fix: resolve merge conflict in css/main.css | feature/styles | 2 |
| 19 | feat: add Contact form validation JS | feature/form-validation | 2 |
| 20 | style: add responsive CSS | feature/responsive | 1 |
| 21 | ci: add GitHub Actions deploy workflow | feature/ci | 1 |
| 22 | docs: add README | feature/docs | 2 |

---

## Merge Conflicts

### Conflict #1 — `index.html`

**Where:** Merging `feature/hero` into `dev` after `feature/navbar` had already modified `index.html`.

**Why:** Both branches edited overlapping lines in `index.html`. The navbar branch added the `<header>` block and the hero branch added `<section class="hero">` in the same region.

**Resolution:** Kept both sections in correct document order — navbar `<header>` first, then hero `<section>`.

---

### Conflict #2 — `css/main.css`

**Where:** Merging `feature/styles` into `dev`.

**Why:** A previous branch had added a placeholder comment to `css/main.css`, while `feature/styles` replaced the entire file with the full CSS reset and custom properties.

**Resolution:** Kept the full content from `feature/styles`, discarding the placeholder.

---


## Questions

### ۱. پوشه‌ی `.git` چیست؟

پوشه‌ی `.git` قلب هر مخزن Git است. وقتی دستور `git init` را اجرا می‌کنید، Git این پوشه را در ریشه‌ی پروژه می‌سازد و تمام اطلاعات لازم برای مدیریت نسخه‌ها را در آن ذخیره می‌کند.

**دستور ساخت:**
bash
git init

**اطلاعات ذخیره‌شده در `.git`:**

| فایل / پوشه | محتوا |
|-------------|-------|
| `HEAD` | اشاره‌گر به شاخه یا commit جاری |
| `config` | تنظیمات محلی مخزن (remote، user و ...) |
| `objects/` | تمام داده‌های پروژه به صورت blob، tree، commit و tag |
| `refs/` | اشاره‌گرهای شاخه‌ها و tag‌ها |
| `index` | ناحیه‌ی stage (فایل‌های آماده برای commit بعدی) |
| `logs/` | تاریخچه‌ی تغییر HEAD و شاخه‌ها |
| `COMMIT_EDITMSG` | پیام آخرین commit |
| `MERGE_HEAD` | در زمان merge، اشاره‌گر به commit طرف مقابل |

---

### ۲. منظور از Atomic بودن چیست؟

**Atomic** به معنای «تجزیه‌ناپذیر» است — یک عملیات یا کاملاً انجام می‌شود یا اصلاً انجام نمی‌شود.

**Atomic Commit:**
هر commit باید فقط یک تغییر منطقی و مستقل را در بر بگیرد. مثلاً «افزودن دکمه‌ی ورود» یک commit است، نه «افزودن دکمه‌ی ورود + رفع باگ فرم + تغییر رنگ هدر» در یک commit. این کار:
- بررسی تاریخچه را آسان می‌کند
- revert کردن یک تغییر خاص را ممکن می‌سازد
- code review را ساده‌تر می‌کند

**Atomic Pull Request:**
هر PR باید یک feature یا fix مشخص را پیاده‌سازی کند، نه چندین موضوع نامرتبط را با هم. PR اتمیک بررسی، تأیید، و در صورت نیاز revert آن را بسیار ساده‌تر می‌کند.

---

### ۳. تفاوت `fetch`، `pull`، `merge`، `rebase` و `cherry-pick`

**`git fetch`**
تغییرات remote را دانلود می‌کند اما هیچ تغییری در working directory یا شاخه‌ی جاری اعمال نمی‌کند. فقط اطلاعات را به‌روز می‌کند.
bash
git fetch origin

**`git pull`**
معادل `git fetch` + `git merge` است. تغییرات remote را دانلود و بلافاصله در شاخه‌ی جاری ادغام می‌کند.
bash
git pull origin dev

**`git merge`**
دو شاخه را با هم ادغام می‌کند و یک merge commit جدید می‌سازد. تاریخچه‌ی هر دو شاخه حفظ می‌شود.
bash
git merge feature/navbar

**`git rebase`**
commit‌های یک شاخه را از نقطه‌ی انشعاب برمی‌دارد و آن‌ها را روی نوک شاخه‌ی دیگر بازنویسی می‌کند. تاریخچه خطی و تمیز می‌شود اما SHA commit‌ها تغییر می‌کند.
bash
git rebase dev

**`git cherry-pick`**
یک commit خاص از هر شاخه‌ای را انتخاب و روی شاخه‌ی جاری اعمال می‌کند، بدون اینکه کل شاخه را merge کند.
bash
git cherry-pick a3f5c2b

| دستور | دانلود از remote | ادغام | تاریخچه |
|-------|-----------------|-------|---------|
| `fetch` | ✅ | ❌ | دست نخورده |
| `pull` | ✅ | ✅ | merge commit اضافه می‌شود |
| `merge` | ❌ | ✅ | merge commit اضافه می‌شود |
| `rebase` | ❌ | ✅ | خطی، SHA‌ها تغییر می‌کنند |
| `cherry-pick` | ❌ | یک commit | commit جدید اضافه می‌شود |

---

### ۴. تفاوت `reset`، `revert`، `restore`، `switch` و `checkout`

**`git reset`**
HEAD و شاخه‌ی جاری را به یک commit قبلی منتقل می‌کند. سه حالت دارد:
- `--soft`: فقط HEAD جابجا می‌شود؛ تغییرات در stage باقی می‌مانند.
- `--mixed` (پیش‌فرض): HEAD جابجا می‌شود؛ تغییرات از stage خارج می‌شوند اما در فایل‌ها باقی می‌مانند.
- `--hard`: HEAD جابجا می‌شود و تمام تغییرات حذف می‌شوند.
bash
git reset --soft HEAD~1

**`git revert`**
یک commit جدید می‌سازد که تغییرات یک commit قبلی را معکوس می‌کند. تاریخچه دست نخورده باقی می‌ماند — برای شاخه‌های shared ایمن‌تر است.
bash
git revert a3f5c2b

**`git restore`**
فایل‌های working directory یا stage را به حالت قبل برمی‌گرداند. روی تاریخچه‌ی commit تأثیری ندارد.
bash
git restore index.html          # برگرداندن فایل به آخرین commit
git restore --staged index.html # خارج کردن فایل از stage

**`git switch`**
فقط برای جابجایی بین شاخه‌ها استفاده می‌شود. جایگزین مدرن‌تر و واضح‌تر `git checkout` برای این کار است.
bash
git switch dev
git switch -c feature/new-section

**`git checkout`**
دستور قدیمی‌تر و چندمنظوره: هم برای جابجایی شاخه، هم برای بازگرداندن فایل‌ها استفاده می‌شد. امروزه `switch` و `restore` جایگزین آن شده‌اند.
bash
git checkout dev
git checkout -- index.html

| دستور | هدف | تأثیر روی تاریخچه |
|-------|-----|------------------|
| `reset` | جابجایی HEAD | تاریخچه را بازنویسی می‌کند |
| `revert` | معکوس کردن commit | commit جدید اضافه می‌کند |
| `restore` | بازگرداندن فایل | بدون تأثیر |
| `switch` | جابجایی شاخه | بدون تأثیر |
| `checkout` | جابجایی شاخه / فایل | بدون تأثیر |

---

### ۵. Stage (Index) و Stash

**Stage چیست؟**
Stage یا Index یک ناحیه‌ی میانی بین working directory و مخزن است. وقتی `git add` می‌زنید، تغییرات وارد stage می‌شوند و آماده‌ی commit بعدی می‌شوند. این به شما اجازه می‌دهد دقیقاً انتخاب کنید کدام تغییرات در commit بعدی باشند.


Working Directory  →  git add  →  Stage (Index)  →  git commit  →  Repository

**`git stash` چه می‌کند؟**
تغییرات uncommit شده (هم staged و هم unstaged) را موقتاً کنار می‌گذارد تا working directory تمیز شود، بدون اینکه commit بسازید. بعداً می‌توانید آن‌ها را بازگردانید.

bash
git stash           # ذخیره‌ی موقت تغییرات
git stash list      # نمایش لیست stash‌ها
git stash pop       # بازگرداندن آخرین stash و حذف آن از لیست
git stash apply     # بازگرداندن آخرین stash بدون حذف از لیست
git stash drop      # حذف آخرین stash

کاربرد رایج: وقتی در میانه‌ی کار هستید و باید سریع به شاخه‌ی دیگری بروید.

---

### ۶. مفهوم Snapshot

در Git، هر commit یک **snapshot** (عکس فوری) از کل وضعیت پروژه در آن لحظه است — نه فقط تفاوت‌ها (diff).

وقتی commit می‌کنید، Git:
1. محتوای هر فایل را به صورت یک **blob** object ذخیره می‌کند.
2. ساختار پوشه‌ها را به صورت **tree** object ذخیره می‌کند.
3. یک **commit** object می‌سازد که به آن tree اشاره می‌کند، به علاوه‌ی metadata (نویسنده، زمان، پیام، اشاره‌گر به commit قبلی).


Commit Object
├── tree → (snapshot of all files)
├── parent → (previous commit SHA)
├── author
├── message
└── timestamp

برای فایل‌هایی که تغییر نکرده‌اند، Git فقط یک اشاره‌گر به blob قبلی ذخیره می‌کند — پس snapshot‌ها فضای زیادی نمی‌گیرند.

ارتباط با commit: هر commit = یک snapshot. تاریخچه‌ی Git زنجیره‌ای از این snapshot‌هاست که هر کدام به قبلی اشاره می‌کند.

---

### ۷. تفاوت Local Repository و Remote Repository

**Local Repository**
مخزنی که روی ماشین شماست. شامل تمام تاریخچه، شاخه‌ها، و فایل‌های پروژه است. تمام عملیات Git (commit، branch، merge) به صورت آفلاین روی آن انجام می‌شود.

**Remote Repository**
مخزنی که روی یک سرور (مثل GitHub، GitLab، Hamgit) قرار دارد. برای همکاری تیمی و backup استفاده می‌شود. دسترسی به آن نیاز به اینترنت دارد.

| ویژگی | Local | Remote |
|-------|-------|--------|
| محل | ماشین شخصی | سرور (GitHub و ...) |
| دسترسی | آفلاین | نیاز به اینترنت |
| عملیات | commit، branch، merge | push، pull، fetch |
| هدف | کار روزانه | همکاری و backup |
| نمونه | `.git/` در پروژه | `github.com/user/repo` |

```bash
git remote add origin https://github.com/user/repo.git  # اتصال به remote
git push origin main   # ارسال به remote
git pull origin main   # دریافت از remote
git remote -v          # نمایش remote‌های تعریف‌شده

