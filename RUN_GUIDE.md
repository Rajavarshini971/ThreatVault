# ThreatVault Run Guide

This project has two parts:

- Backend: Flask API in [backend/app.py](backend/app.py)
- Frontend: React app in [frontend/package.json](frontend/package.json)

## Project understanding

The frontend calls the backend at `http://127.0.0.1:5000`, and the backend connects to MySQL on `localhost:3306` using the database name `cyberhub`.

The backend connection is defined in [backend/db.py](backend/db.py):

- host: `localhost`
- user: `root`
- password: empty string
- database: `cyberhub`

The API routes are defined in [backend/routes.py](backend/routes.py), and the React UI calls them from [frontend/src/App.js](frontend/src/App.js).

## Prerequisites

1. Python 3.12+
2. Node.js + npm
3. MySQL server running locally
4. MySQL database named `cyberhub` with a `threats` table

## 1) Install backend dependencies

```powershell
python -m pip install -r "c:\Users\Mathu\OneDrive\Desktop\Web\backend\requirements.txt"
```

## 2) Start MySQL and create the database

Start the MySQL service in XAMPP/WAMP/MySQL Workbench, then run the schema in [database/schema.sql](database/schema.sql) (or create the database/table manually):

```sql
CREATE DATABASE IF NOT EXISTS cyberhub;
USE cyberhub;
```

If your local MySQL uses a password for root, update [backend/db.py](backend/db.py) to match your credentials.

## 3) Run the backend

```powershell
python "c:\Users\Mathu\OneDrive\Desktop\Web\backend\app.py"
```

The API should run on:

- http://127.0.0.1:5000/search/<term>
- http://127.0.0.1:5000/threats

`/search/<term>` returns `404` with a JSON message when a term is not found, and `500` with a JSON error if the database is unavailable.

## 4) Install frontend dependencies

```powershell
npm install --prefix "c:\Users\Mathu\OneDrive\Desktop\Web\frontend"
```

## 5) Run the frontend

```powershell
npm start --prefix "c:\Users\Mathu\OneDrive\Desktop\Web\frontend"
```

Then open:

- http://localhost:3000

## Important note

The backend requires a running MySQL server on `localhost:3306` and an initialized `cyberhub.threats` table. Database connection and query errors are now returned as JSON API responses instead of crashing requests at import time.

