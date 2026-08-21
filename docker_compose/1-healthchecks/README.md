# Healthchecks

This shows how a healthcheck stops the API from starting before the database is ready.

- **database**: Postgres, with a healthcheck (`pg_isready`).
- **api**: Node/Express app. It waits for the database to be healthy (`depends_on: condition: service_healthy`) before it starts.

## Start

```
docker compose up -d --build
```

## Check the order

```
docker compose logs --timestamps
```

The database becomes healthy first. Only then does the API start and connect:

```
database-1  | ... database system is ready to accept connections
api-1       | Connecting to the database...
api-1       | Connected to the database
api-1       | Server running on port 3000
```

You can also watch it live with `docker compose ps`: the api container stays `Created` until the database status becomes `healthy`.

## Check the port

```
curl http://localhost:3001
```

Result:

```
API is up and connected to the database
```

## Stop

```
docker compose down
```
