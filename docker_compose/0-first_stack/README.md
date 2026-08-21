# First Docker Compose Stack

A small stack with 3 services in one `compose.yaml`:

- **web**: Nginx, sends requests to the API.
- **api**: Node/Express app, counts visits.
- **database**: Redis, stores the visit count.

## Start

```
docker compose up -d --build
```

## Check

```
docker compose ps
curl http://localhost:8081
```

Each call adds 1 to the counter:

```
Hello, you are visitor #1
```

## Stop

```
docker compose down
```
