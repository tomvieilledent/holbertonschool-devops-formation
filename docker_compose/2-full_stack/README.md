# Full Stack: Reverse Proxy + Cache

- **proxy**: Nginx, the only entry point. Sends requests to the API.
- **api**: Node/Express app. Reads the time from Postgres and caches it in Redis for 10 seconds.
- **database**: Postgres, with a healthcheck. The API waits for it to be healthy before it starts.
- **cache**: Redis, stores the cached response.

## Start

```
docker compose up -d --build
```

## Check

```
docker compose ps
curl http://localhost:8082
```

First call reads from the database:

```
Hello, database time is ... (from database)
```

Calls in the next 10 seconds use the cache instead:

```
Hello, database time is ... (from cache)
```

## Stop

```
docker compose down
```
