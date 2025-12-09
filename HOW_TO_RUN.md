# How to Run Your Portfolio Website

## Method 1: Simple - Open Directly in Browser (Easiest)

1. Navigate to your project folder: `D:\program djangoetc\Portfolio`
2. Double-click on `index.html`
3. It will open in your default browser

**Note:** Some features might work better with a local server (Method 2 or 3).

---

## Method 2: Using Python HTTP Server (Recommended)

Since you have Python installed, this is the easiest server method:

### Steps:
1. Open PowerShell or Command Prompt
2. Navigate to your project folder:
   ```powershell
   cd "D:\program djangoetc\Portfolio"
   ```

3. Run Python's built-in server:
   ```powershell
   # For Python 3
   python -m http.server 8000
   
   # OR if python doesn't work, try:
   py -m http.server 8000
   ```

4. Open your browser and go to:
   ```
   http://localhost:8000
   ```

5. To stop the server, press `Ctrl + C` in the terminal

---

## Method 3: Using VS Code Live Server (If you use VS Code)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will automatically open with the site

---

## Method 4: Using Node.js http-server (If you have Node.js)

1. Install http-server globally (one-time):
   ```powershell
   npm install -g http-server
   ```

2. Navigate to your project folder:
   ```powershell
   cd "D:\program djangoetc\Portfolio"
   ```

3. Run the server:
   ```powershell
   http-server
   ```

4. Open the URL shown in the terminal (usually `http://localhost:8080`)

---

## Before Running - Important Checklist

✅ **Add your profile image:**
   - Place your image as `me.png` in `assets/img/` folder
   - If the image is missing, the profile section will show a broken image

✅ **Internet Connection:**
   - Font Awesome icons are loaded from CDN, so you need internet connection
   - If offline, download Font Awesome and link it locally

---

## Quick Test Command

If you want to quickly test if everything is set up correctly, run this in PowerShell from your project folder:

```powershell
python -m http.server 8000
```

Then visit: `http://localhost:8000`

---

## Troubleshooting

**Problem:** Images not showing
- **Solution:** Make sure `assets/img/me.png` exists

**Problem:** Styles not loading
- **Solution:** Check that `assets/css/style.css` exists and paths are correct

**Problem:** Icons not showing
- **Solution:** Check your internet connection (Font Awesome loads from CDN)

**Problem:** JavaScript not working
- **Solution:** Make sure `script.js` is in the root folder

---

## Recommended: Method 2 (Python Server)

This is the best method because:
- ✅ No additional software needed (Python is already installed)
- ✅ Works perfectly with all features
- ✅ Easy to start and stop
- ✅ No CORS issues

