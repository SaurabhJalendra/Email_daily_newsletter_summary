---
name: review
description: Reviews code changes for bugs, security, quality, and project convention adherence
allowed-tools: [Read, Grep, Glob, Bash]
---

# Code Review

## Steps
1. Get the diff: `git diff` (unstaged) or `git diff --cached` (staged)
2. Review for:
   - **Bugs**: Logic errors, off-by-one, null/undefined access
   - **Security**: Injection, auth bypass, data exposure
   - **Quality**: Naming, complexity, duplication
   - **Conventions**: Does it follow project patterns?
   - **Tests**: Are changes tested?
3. Check types: run typecheck if available
4. Check lint: run linter if available

## Output Format
For each issue:
- CRITICAL / WARNING / SUGGESTION
- File:line — what's wrong — how to fix

If no issues: "Code looks good. No issues found."
