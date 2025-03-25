# PowerGrid Dashboard Project

A full-stack project for visualizing real-time power grid data. It combines a Flask + GraphQL backend with a React frontend. The backend fetches and processes energy mix data, while the frontend displays it dynamically via GraphQL queries.

---

## Tech Stack

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

## Project Structure

```
PowerGrid/                  # Main project folder
├── flask-backend/          # Backend repo (also deployed to Heroku)
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

## Live Deployment Workflow

### Backend (Heroku):
- Flask app is hosted on Heroku.
- GraphQL endpoint is available at: `https://your-heroku-backend.herokuapp.com/graphql`
- Automatically deployed via GitHub connection.

### Frontend (React):
- Hosted on Netlify (or Vercel).
- Apollo Client connects to the GraphQL API using the Heroku endpoint.
- Configure the endpoint in `src/App.js`:

```js
const client = new ApolloClient({
  uri: "https://your-heroku-backend.herokuapp.com/graphql",
  cache: new InMemoryCache()
});
```

---

## Features Implemented

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

## Cloning & Running

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

## Deployment Tips

### Git Flow:
- Keep frontend and backend in separate GitHub repos OR clearly separated folders.
- Be mindful of which folder you're committing/pushing from.
- Push backend changes to the repo linked to Heroku.
- Push frontend changes to the repo linked to Netlify or Vercel.

### Fresh Checkout:
```bash
git clone https://github.com/your-username/PowerGrid.git
cd PowerGrid
# Backend as subfolder:
git clone https://github.com/your-username/PowerGridBackend.git flask-backend
```

---

## Next Ideas
- Add dropdown filtering in React
- Add charts (e.g., Chart.js or Recharts)
- Zone switching on backend
- Switch to Redis-based caching
- Use `.env` files for secrets like the API token

---

## 📄 License
MIT License


