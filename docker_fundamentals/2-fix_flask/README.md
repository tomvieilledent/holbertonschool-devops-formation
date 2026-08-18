# 2-fix_flask

Tiny Flask web app that responds with "Hello from Flask in Docker!" on port 5001, packaged in a Docker image.

## Build

```bash
docker build -t flask-image .
```

## Run

```bash
docker run -d --name flask-container -p 5001:5000 flask-image
```

## Confirm

```bash
curl http://localhost:5001
```

Expected response:

```
Hello from Flask in Docker!
```
