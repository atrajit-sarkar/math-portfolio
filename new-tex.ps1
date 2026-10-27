# Create a new LaTeX folder with main.tex generated from templates/tex/TA-template.tex.
# Usage:
#   .\new-tex.ps1 -Path "pdfs/Teaching/TA/<course folder>/quiz4-topic" -Title "Quiz 4: Topic - Comments"
param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Title,
    [string]$Course = "Linear Algebra I \& Mathematics Tutorial Ib",
    [string]$Term = "Fall 2026"
)

$template = Join-Path $PSScriptRoot "templates/tex/TA-template.tex"
$target = Join-Path $Path "main.tex"

if ((Test-Path $target) -and (Get-Item $target).Length -gt 0) {
    Write-Error "$target already exists; not overwriting."
    exit 1
}

New-Item -ItemType Directory -Force $Path | Out-Null
$content = (Get-Content -Raw $template).
    Replace("%%TITLE%%", $Title).
    Replace("%%COURSE%%", $Course).
    Replace("%%TERM%%", $Term)
[System.IO.File]::WriteAllText((Resolve-Path $Path).Path + "\main.tex", $content)
Write-Host "Created $target"
