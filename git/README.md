# GIT version control system

## What is Git?

- A distributed version control system (VCS)
- A tool to manage your source code history
- git is an acyclic graph, meaning the following cannot exist
- in git, each commit is a node in the graph, and each pointer is the child to parent relationship
- if you delete untracked files they are lost forever. commit early, commit often, you can always change history to make it one commit (squashing)
- man git-<op> for the friendly manual

**before we git, we man** - man has all the information

- to see all the git commands, type `git --help` or `man git`

- two types of git commands:
  - high level `procelain` commands
  - low level `plumbing` commands

## terms

- **repo/repository**: a collection of files and folders that are being tracked by git
- **commit**: a snapshot of your repository at a point in time. the sha of the commit is a unique identifier for that commit
- **index/staging area**: a place where you can stage files before committing them
- **squash**: combine multiple commits into one
- **working tree, work tree, working directory**: the directory where you are currently working (git init, git clone)
- untracked files. this means files that are not staged for the first time (indexed) or already committed / tracked by the repo. These files are the easiest to accidentally lose work on since git does not have any information about these files.

- indexed / staged: this is where the changes are to be committed. You must stage before you commit and you stage changes by using the git add command. see man git-add for more information

- tracked. These are files that are already tracked by git. Now a file could be tracked AND have staged changes (changes stored in the index) ready to be committed.

- remote: The same git repo on another computer or directory. You can accept changes from or potentially push changes too. Think github

## commands

- `git init` - initialize a git repository in the current directory
- `git clone <url>` - clone a remote repository into the current directory
- `git status` - show the status of the current repository
- `git add <file>` - stage a file for commit
- `git commit -m "message"` - commit the staged changes with a message
- `git log` - show the commit history
- `git push` - push the changes to a remote repository
- `git pull` - pull the changes from a remote repository
- `git diff` - show the changes between commits, branches, etc
- `git branch` - show the branches in the repository
- `git checkout <branch>` - switch to a different branch
- `git merge <branch>` - merge a branch into the current branch
- `git rebase <branch>` - rebase the current branch onto another branch (rebasing is a way to move the commits of one branch onto another branch)
- `git rerere` - reuse recorded resolution. This is a way to record conflict resolutions and reuse them in the future
- `git reflog` - show the reflog (a log of all the changes to the repository)
- `git reset` - reset the current HEAD to a specific state (HEAD is a reference to the current commit)
- `git revert` - revert a commit (create a new commit that undoes the changes in a previous commit)
- `git cherry-pick` - apply the changes from a specific commit to the current branch
- `git cat-file` - show the contents of a git object (commit, tree, blob, tag)
- `git config` - show or set configuration options for git
- `git remote` - show the remote repositories
- `git fetch` - fetch the changes from a remote repository

## Git State

```bash
git config --get --global init.defaultBranch # get the default branch

master # default branch name
HEAD # the current branch
HEAD^ # the parent of the current branch
## PLEASE DO THIS
git config --global --unset init.defaultBranch # unset the default branch

git config --global rerere.enabled true # enable reuse recorded resolution

git config --global --unset rerere.enabled # disable reuse recorded resolution
git config --global rerere.enabled # check if reuse recorded resolution is enabled
```

## git config

Git comes with a config that is global, for all projects, and local, project level. There are other git config levels, but they are irrelevant for the average git experience. project level config overrides global level config as its more specific.

This would be akin to javascript's Object.assign

`const config = Object.assign({}, globalConfig, localConfig);`

- All git config keys are in the following shape: <section>.<key>.
- `--global` flag will ensure you set this key value for all future uses of git and repos
- user.name and user.email are the key's used in creating a commit tied to you
- to add a key value, execute git config --add --global <key> "<value>"
- you can view any value of git config by executing git config --get <key>

Lets pretend that when i execute:

- `git config --get user.name`
- `git config --get user.email`

I get nothing out, therefore i need to add both my user.name and user.email

- `git config --add --global user.name "ThePrimeagen"`
- `git config --add --global user.email "the.primeagen@aol.com"`

## Creating A New Repo

Create a new git repo at /path/to/new/my-first-git-repo. Replace /path/to/new to your preferred project location.

```bash
mkdir /path/to/new/my-first-git-repo
cd /path/to/new/my-first-git-repo
git init
```

If you have an unconfigured git default branch you may see the following notice

```bash
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /home/ThePrimeagen/personal/my-first-git/.git/
```

## The Files Are IN the Git Repo

```bash
ls -la
```

```bash
find .git
.git
.git/info
.git/info/exclude
.git/HEAD
.git/branches
.git/description
.git/refs
.git/refs/tags
.git/refs/heads
.git/objects
.git/objects/info
.git/objects/pack
.git/config
.git/hooks
.git/hooks/pre-rebase.sample
.git/hooks/prepare-commit-msg.sample
.git/hooks/post-update.sample
.git/hooks/commit-msg.sample
.git/hooks/pre-commit.sample
.git/hooks/pre-applypatch.sample
.git/hooks/pre-merge-commit.sample
.git/hooks/applypatch-msg.sample
.git/hooks/pre-push.sample
.git/hooks/push-to-checkout.sample
.git/hooks/fsmonitor-watchman.sample
.git/hooks/update.sample
.git/hooks/pre-receive.sample
```

Git keeps its state by using a series of files and directories. We will go into more detail shortly

## The Basics

```bash
git add <path-to-file | pattern>  ## will add the file to the staging area (index)
git commit -m "message" ## will commit the staged changes
git status ## will show the status of the repo
git log ## will show the commit history
```

- create a file first.md

```bash
echo "Hello World" > first.md
```

- check the status of git to see that its untracked.

```bash
git status
```

```bash
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        first.md

nothing added to commit but untracked files present (use "git add" to track)
```

- add first.md to the staging area

```bash
git add first.md
```

- check the status of git to see that its now tracked in the staging area

```bash
git status
```

```bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   first.md
```

- commit with a friendly message

```bash
git commit -m "initial commit"
[master (root-commit) 33d6d96] my first commit
 1 file changed, 2 insertions(+)
 create mode 100644 first.md
```

- check the status of git to see there are no changes pending or untracked

```bash
git status
```

```bash
On branch master
nothing to commit, working tree clean
```

## SHAs

- SHAs are the unique identifier for a commit
- git commits come with a sha (a hash with 0-9a-f characters)

1. Find the commit sha of your first commit (copy it to your system clipboard)

```bash
git log
```

```bash
commit 33d6d96b1b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3 (HEAD -> master)
Author: The Primeagen <the>
Date:   Fri Jan 1 00:00:00 2021 -0800

    initial commit
```

2. Why is your sha different than mine?
   sha: SHA stands for Secure Hashing Algorithm. SHA is a modified version of MD5

Second, your sha, if you remember me saying, is the combination of changes you have made, author, time, etc etc

3. Can you find your commit's file(s) of data within .git folder. See if you can cat out any data

- commit's sha is a key piece of information
- The first 2 characters of the commit sha...

```bash
ls -la .git
```

But within the objects directory you should see at least one interesting entry

```bash
ls -la .git/objects
```

```bash
total 12
```

## What's in its Pocketses, Precious?

```bash
 cat .git/objects/5b/a786fcc93e8092831c01e71444b9baa2228a4f

x[ )@͢<41M]V%qP9C'*"iܣUfmA"DqFx3-C(U˅-YIw]0y6y1  @uڟ`V?9r%
```

ALL of git state is stored in files. everything.

## The Tools of the Plumber

- `git cat-file -p <sha>` - show the contents of a git object

1. Can you get git cat-file -p <sha> to echo out the contents of first.md by inspecting the commit sha? You may have to have a few rounds of catting

```bash
   git cat-file -p 33d6d96b1b3b3b3b3b3b3b3b3b3b3b3b3b3b3
```

```bash
tree 5ba786fcc93e8092831c01e71444b9baa2228a4f
author The Primeagen <the>
committer The Primeagen <the>
initial commit
```

You will notice there is no first.md or its contents therefore we must be able to find something... Oh look at that, tree has a sha, lets try that

```bash
   git cat-file -p 5ba786fcc93e8092831c01e71444b9baa2228a4f
```

```bash
100644 blob 41b0f7e1b7b3b3b3b3b3b3b3b3b3b3b3b3b3b3    first.md
```

- `tree`: tree is analagous to directory
- `blob`: blob is analagous to file

**Git does not store diffs, git stores complete version of the entire source at the point of each commit. In other words, each commit contains all the information to completely reconstruct the source code that was tracked.**
