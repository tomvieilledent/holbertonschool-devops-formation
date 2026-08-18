# 3-fix_express

Tiny Express web app that responds with "Hello from Express in Docker!" on port 3000, packaged in a Docker image.

## Build

```bash
docker build -t express-image .
```

## Run

```bash
docker run -d --name express-container -p 3000:3000 express-image
```

## Confirm

```bash
curl http://localhost:3000
```

Expected response:

```
Hello from Express in Docker!
```
