# PowerGrid Dashboard Project

A full-stack project for visualizing real-time power grid data. It combines a Flask + GraphQL backend with a React frontend. The backend fetches and processes energy mix data, while the frontend displays it dynamically via GraphQL queries.

---

## 🧪 Getting Started

### 1. Clone Both Repositories
```bash
# Clone frontend project
git clone https://github.com/fullerar/PowerGrid.git
cd PowerGrid

# Clone backend project into a subfolder
git clone https://github.com/fullerar/PowerGridBackend.git flask-backend
```

### 2. Set Up the Backend
```bash
cd flask-backend
pip install -r requirements.txt
python main.py  # Or run with Flask depending on your setup
```
- Make sure to include required packages like Flask, GraphQL, Flask-CORS, pandas
- Verify the GraphQL endpoint is live at: `http://localhost:5000/graphql`

### 3. Set Up the Frontend
```bash
cd ../react-frontend
npm install
npm start
```
- This runs the React development server at `http://localhost:3000`
- Apollo Client in `App.js` should be configured to point to your local or deployed backend (e.g., `http://localhost:5000/graphql` or the Heroku URL)

---

## 📁 Repository Structure

This project is split into **two separate GitHub repositories**:

- **Frontend:** [`PowerGrid`](https://github.com/fullerar/PowerGrid) — contains the React dashboard
- **Backend:** [`PowerGridBackend`](https://github.com/fullerar/PowerGridBackend) — contains the Flask + GraphQL API

You can clone them into sibling folders or nest the backend inside the frontend project as needed.

---

## 🚀 Tech Stack

### Backend:
- Python
- Flask
- GraphQL (Graphene)
- pandas
- Deployed to Heroku

### Frontend:
- React
- Apollo Client
- Deployed to Netlify (or your platform of choice)

---

## 🔧 Project Structure

```
PowerGrid/                  # Main frontend repo
├── flask-backend/          # Cloned backend repo (PowerGridBackend)
│   ├── main.py             # Flask entry point
│   ├── schema.py           # GraphQL schema with data fetching & caching
│   ├── requirements.txt    # Python dependencies
│   ├── Procfile            # Heroku process config
│   ├── runtime.txt         # Python version for Heroku
│   └── .gitignore
├── react-frontend/         # React app folder
│   ├── src/                # Components & logic
│   ├── public/
│   ├── package.json
│   └── .gitignore
└── README.md               # This file
```

---

## 🌐 Live Deployment Workflow

### Backend (Heroku):
- Flask app is hosted on Heroku.
- GraphQL endpoint is available at: `https://power-grid-20fa5a2c3507.herokuapp.com/graphql`
- Automatically deployed via GitHub connection to `PowerGridBackend` repo.

### Frontend (React + Netlify):
- Hosted on Netlify using the `PowerGrid` GitHub repo.
- During Netlify setup, specify:
  - **Base directory**: `react-frontend`
  - **Build command**: `npm run build`
  - **Publish directory**: `build`
- Apollo Client in `App.js` connects to the Heroku GraphQL API using the deployed URL:

```js
const client = new ApolloClient({
  uri: "https://power-grid-20fa5a2c3507.herokuapp.com/graphql",
  cache: new InMemoryCache()
});
```

---

## ⚙️ Features Implemented

### Backend:
- Power grid data fetched from ElectricityMap API
- Data processed with `pandas`
- GraphQL API built with `graphene`
- Supports filtering by energy source via query variables
- Simple in-memory caching (~5 minutes)
- Flask CORS enabled to allow frontend communication

### Frontend:
- Apollo Client for querying the backend
- React table UI to display data dynamically
- Error/loading states handled

---

## ✈️ Cloning & Running

### Backend:
```bash
cd flask-backend/
python main.py  # or run with Flask
```

Make sure `flask-cors`, `graphene`, `flask-graphql`, and `pandas` are installed. 

Deploy via Heroku GitHub integration (set root folder to this repo).

### Frontend:
```bash
cd react-frontend/
npm install
npm start
```

---

## 🔁 Deployment Tips

### Git Flow:
- Keep frontend and backend in separate GitHub repos OR clearly separated folders.
- Be mindful of which folder you're committing/pushing from.
- Push backend changes to the `PowerGridBackend` repo (linked to Heroku).
- Push frontend changes to the `PowerGrid` repo (linked to Netlify or Vercel).

### Fresh Checkout:
```bash
git clone https://github.com/fullerar/PowerGrid.git
cd PowerGrid
# Backend as subfolder:
git clone https://github.com/fullerar/PowerGridBackend.git flask-backend
```

---

## 🚀 Next Ideas
- Add dropdown filtering in React
- Add charts (e.g., Chart.js or Recharts)
- Zone switching on backend
- Switch to Redis-based caching
- Use `.env` files for secrets like the API token

---

## 📄 License
MIT License
