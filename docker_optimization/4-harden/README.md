# 4-harden

Express app running as a non-root user, with a healthcheck on `/health`.

## Build

```bash
docker build -t harden-image .
```

## Run

```bash
docker run -d --name harden-container -p 3000:3000 harden-image
```

## Confirm

```bash
curl http://localhost:3000/health
docker exec harden-container whoami
docker inspect --format='{{.State.Health.Status}}' harden-container
```

Expected: `{"status":"ok"}`, user `app`, health status `healthy`.
