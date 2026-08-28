# 3-multistage

Small Go HTTP server, built in a `golang:1.22` stage and shipped in a plain `alpine:3.20` image. The final image only contains the compiled binary, no Go toolchain.

## Build

```bash
docker build -t multistage-image .
```

## Run

```bash
docker run -d --name multistage-container -p 8080:8080 multistage-image
```

## Confirm

```bash
curl http://localhost:8080
```

Expected response:

```
Hello from Go in Docker!
```

No Go toolchain in the final image:

```bash
docker run --rm multistage-image which go
```
