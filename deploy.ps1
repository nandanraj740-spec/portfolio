# Quick Deploy Script for GitHub Pages
param (
    [string]$RepoName = "portfolio"
)

$Username = "nandanraj740-spec"
$RemoteUrl = "https://github.com/$Username/$RepoName.git"

Write-Host "Configuring remote origin to $RemoteUrl..." -ForegroundColor Cyan

$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    git remote set-url origin $RemoteUrl
} else {
    git remote add origin $RemoteUrl
}

Write-Host "Pushing main branch to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "`n Deployment complete!" -ForegroundColor Cyan
Write-Host "Your live website will be available at:" -ForegroundColor Yellow
if ($RepoName -eq "$Username.github.io") {
    Write-Host "https://$Username.github.io/" -ForegroundColor Green
} else {
    Write-Host "https://$Username.github.io/$RepoName/" -ForegroundColor Green
}
