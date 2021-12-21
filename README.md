# git-bisect-example

The goal of this repository is to be a basis of multiple commits
with a bug introduced purposely in one of them in order to demonstrate
the usage of the [`git-bisect` command](https://git-scm.com/docs/git-bisect).

The `index.js` file is a CLI program. It must be given an integer as first parameter and **will output its square**.

## Commits list

- 0a8f152 - (HEAD -> master, origin/master, origin/HEAD) added another unit test
- 023c33a - **BAD COMMIT** -> updated radix to 16
- f770246 - added unit test
- 010974a - splitted code in modules
- 0becd55 - added usage example
- 9979c51 - forcing radix to 10
- 3ac7a05 - check if argument is a number
- 44ec5be - basic square cli
- 1960218 - added README.md
- 0b873db - create index.js

**The bug is introduced in the penultimate commit (the one marked "BAD COMMIT")**

## Usage

1. Find out there's a bug:

```bash
node index.js 10 # --> 256 🤔 (should be 100)
```

2. Start `git-bisect`, mark last commit as bad, and first as good:

```bash
git bisect start
git bisect bad           # git-bisect starts on HEAD by default
git bisect good 0b873db  # hash of the first commit
```

3. From there, `git-bisect` will place itself on the commit **in the middle** of the last known "good" and the last known "bad", until you **narrow the bug to a single commit**:

```bash
node index.js 10

# if the output of the previous command is `100`:
git bisect good

# if it's something else (probably `256`):
git bisect bad
```

4. Repeat until the end

5. Run `git bisect reset` to cancel the bisect
