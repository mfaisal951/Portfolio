# Quick Setup Guide

## 🚀 Fast Setup (Windows PowerShell)

### 1. Setup Backend (Terminal 1)

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Setup Frontend (Terminal 2 - New Window)

```powershell
cd frontend
npm install
npm start
```

### 3. Copy Assets (One-time)

Copy the `assets` folder to `frontend/public/assets` or create a symlink:

```powershell
# From project root
New-Item -ItemType SymbolicLink -Path "frontend\public\assets" -Target "assets"
```

## ✅ That's it!

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## 📝 Add Your Profile Image

Place `me.png` in:
- `frontend/public/assets/img/me.png` OR
- `assets/img/me.png` (if using symlink)

