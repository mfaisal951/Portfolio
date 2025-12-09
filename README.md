# Portfolio Website - React + Django

A modern, responsive portfolio website built with React (frontend) and Django REST Framework (backend).

## 🚀 Features

- **React Frontend**: Modern, component-based UI with smooth animations
- **Django Backend**: RESTful API for contact form submissions
- **Dark Theme**: Beautiful dark theme with neon gradients
- **Responsive Design**: Works perfectly on all devices
- **Floating Tech Icons**: Animated tech stack icons around profile image
- **Contact Form**: Integrated with Django backend API

## 📁 Project Structure

```
Portfolio/
├── backend/                 # Django REST API
│   ├── api/                # API app
│   ├── portfolio_backend/  # Django project settings
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service
│   │   └── App.js
│   └── package.json
└── assets/                 # Static assets (images, etc.)
```

## 🛠️ Setup Instructions

### Prerequisites

- Python 3.8+ installed
- Node.js 16+ and npm installed
- Git (optional)

### Step 1: Setup Django Backend

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment (recommended):**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - **Windows (PowerShell):**
     ```powershell
     .\venv\Scripts\Activate.ps1
     ```
   - **Windows (CMD):**
     ```cmd
     venv\Scripts\activate.bat
     ```
   - **Mac/Linux:**
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser (optional, for admin panel):**
   ```bash
   python manage.py createsuperuser
   ```

7. **Start Django server:**
   ```bash
   python manage.py runserver
   ```
   
   Backend will run on: `http://localhost:8000`

### Step 2: Setup React Frontend

1. **Open a new terminal and navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy assets folder to public directory:**
   - Copy the `assets` folder from project root to `frontend/public/`
   - Or create a symlink (Windows: `mklink /D public\assets ..\assets`)

4. **Start React development server:**
   ```bash
   npm start
   ```
   
   Frontend will run on: `http://localhost:3000`

### Step 3: Configure API URL (if needed)

If your Django backend runs on a different port, create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:8000/api
```

## 🎯 Running the Project

### Quick Start Commands

**Terminal 1 - Backend:**
```bash
cd backend
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Django Admin**: http://localhost:8000/admin

## 📝 Important Notes

1. **Profile Image**: Add your profile image as `me.png` in `frontend/public/assets/img/` or `assets/img/`

2. **Contact Form**: The contact form sends data to Django backend API endpoint: `/api/contact/`

3. **CORS**: CORS is configured to allow requests from `http://localhost:3000`

4. **Database**: Uses SQLite by default. Messages are stored in the database.

## 🎨 Customization

### Update Contact Information

Edit `frontend/src/components/Contact.js`:
```javascript
<span>your.email@example.com</span>
<span>+123 456 7890</span>
```

### Update Social Links

Edit `frontend/src/components/Footer.js`:
```javascript
<a href="https://github.com/yourusername">...</a>
```

### Update Projects

Edit `frontend/src/components/Projects.js` - modify the `projects` array.

## 🐛 Troubleshooting

### Backend Issues

- **Port already in use**: Change port with `python manage.py runserver 8001`
- **Migration errors**: Run `python manage.py makemigrations` then `python manage.py migrate`

### Frontend Issues

- **Module not found**: Run `npm install` again
- **Port 3000 in use**: React will prompt to use another port
- **API connection failed**: Check if backend is running on port 8000

### CORS Errors

If you see CORS errors, make sure:
1. Django backend is running
2. `corsheaders` is installed
3. CORS settings in `backend/portfolio_backend/settings.py` include your frontend URL

## 📦 Production Build

### Build React App

```bash
cd frontend
npm run build
```

This creates an optimized production build in `frontend/build/`

### Deploy Django

1. Set `DEBUG = False` in `settings.py`
2. Configure `ALLOWED_HOSTS`
3. Set up proper database (PostgreSQL recommended)
4. Collect static files: `python manage.py collectstatic`

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Muhammad Faisal**
- Full Stack Developer
- AI Tools Builder
- Digital Creator

---

Made with ❤️ using React and Django
