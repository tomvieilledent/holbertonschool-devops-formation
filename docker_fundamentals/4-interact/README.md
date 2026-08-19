# 1-first_image

Tiny Node.js/Express web app that responds with "Hello world" on port 3000, packaged in a Docker image.

## Build


```docker build -t server-image .```


## Run

```docker run -d --name server-container -p 3000:3000 server-image```

## Confirm

```curl http://localhost:3000```


Expected response:

```Hello world```
