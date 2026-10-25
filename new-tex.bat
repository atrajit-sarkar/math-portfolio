@echo off
REM Wrapper so new-tex.ps1 can be run from cmd: new-tex.bat -Path "..." -Title "..."
powershell -ExecutionPolicy Bypass -File "%~dp0new-tex.ps1" %*
