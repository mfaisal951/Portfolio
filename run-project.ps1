# Run Portfolio Project - React + Django
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Portfolio Project - React + Django" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if virtual environment exists
$venvPath = "backend\venv"
if (-not (Test-Path $venvPath)) {
    Write-Host "Creating virtual environment..." -ForegroundColor Yellow
    cd backend
    python -m venv venv
    cd ..
    Write-Host "Virtual environment created!" -ForegroundColor Green
}

# Check if node_modules exists
$nodeModulesPath = "frontend\node_modules"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
    cd frontend
    npm install
    cd ..
    Write-Host "Frontend dependencies installed!" -ForegroundColor Green
}

# Copy assets if needed
if (-not (Test-Path "frontend\public\assets")) {
    Write-Host "Copying assets..." -ForegroundColor Yellow
    .\copy-assets.ps1
}

Write-Host ""
Write-Host "Starting servers..." -ForegroundColor Green
Write-Host ""
Write-Host "Backend (Django) will run on: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend (React) will run on: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C in each terminal to stop the servers" -ForegroundColor Yellow
Write-Host ""

# Start Django backend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; .\venv\Scripts\Activate.ps1; python manage.py migrate; python manage.py runserver"

# Wait a bit for Django to start
Start-Sleep -Seconds 3

# Start React frontend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; npm start"

Write-Host "Both servers are starting in separate windows!" -ForegroundColor Green
Write-Host ""

