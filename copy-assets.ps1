# Copy assets to React public folder
Write-Host "Copying assets to React public folder..." -ForegroundColor Green

$source = "assets"
$destination = "frontend\public\assets"

if (Test-Path $source) {
    if (-not (Test-Path $destination)) {
        New-Item -ItemType Directory -Path $destination -Force | Out-Null
    }
    Copy-Item -Path "$source\*" -Destination $destination -Recurse -Force
    Write-Host "Assets copied successfully!" -ForegroundColor Green
} else {
    Write-Host "Assets folder not found. Please create it first." -ForegroundColor Yellow
}

