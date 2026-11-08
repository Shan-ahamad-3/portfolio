# Project Execution Rules

## Workflow & Terminal Execution Rule
Whenever proposing or completing code edits across this codebase, do NOT stop at just modifying files:
1. Always prepare and request approval for the exact PowerShell terminal commands to stage, commit with a concise conventional commit message, and push directly to `origin main`:
   ```powershell
   $env:PATH = "C:\Users\ShaikMohinuddin\AppData\Local\Programs\Git\cmd;" + $env:PATH
   git add .
   git commit -m "<concise conventional commit message>"
   git push origin main
   ```
2. This ensures the Vercel CI/CD pipeline triggers automatically on every edit without dangling uncommitted changes.

