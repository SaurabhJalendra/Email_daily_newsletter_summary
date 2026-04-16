---
name: commit
description: Creates a well-formatted git commit — reviews changes, writes message, commits
allowed-tools: [Bash, Read, Grep]
---

# Smart Commit

## Steps
1. Run `git status` and `git diff --cached` (or `git diff` if nothing staged)
2. Analyze what changed and why
3. Stage relevant files (specific files, not `git add .`)
4. Write commit message:
   - First line: type + imperative description, under 72 chars
   - Types: feat, fix, refactor, docs, test, chore, perf
   - Body (if needed): what changed and why
5. Commit with the message
6. Show the commit hash

## Rules
- Never commit .env, credentials, or secrets
- Never use --no-verify
- Prefer specific file staging over `git add .`
- If nothing changed, say so
