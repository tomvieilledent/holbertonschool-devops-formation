# 4-interact

The Express server from `1-first_image` has been made configurable via the `GREETING` environment variable:

```js
const greeting = process.env.GREETING || "Hello world";

app.get("/", (req, res) => {
  res.send(greeting);
});
```

## Build


```docker build -t interact-image .```


## 0. Without passing `GREETING` (default value)

```docker run -d --name interact-default -p 3000:3000 interact-image```

```curl http://localhost:3000```

Observed:

```bash
Hello world
```

## 1. Passing the variable to `run` (`-e`)


```docker run -d --name interact-container -p 3000:3000 -e GREETING="Salut depuis Docker" interact-image```



```curl http://localhost:3000```


Observed:


```bash
Salut depuis Docker
```


## 2. Reading the variable from inside the container (`exec`)


```docker exec interact-container printenv GREETING```


Observed:


```bash
Salut depuis Docker
```


## 3. Inspecting the container (`inspect` / `logs`)


```docker inspect interact-container --format '{{.Config.Env}}'```


Observed:


```bash
[GREETING=Salut depuis Docker PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin NODE_VERSION=22.23.2 YARN_VERSION=1.22.22]
```



```docker logs interact-container```


Observed:


```bash
Server running on port 3000
```

## Use case: dev vs prod

The same principle allows starting an image in `dev` or `prod` mode without rebuilding, via a variable such as `NODE_ENV`:

```bash
docker run -e NODE_ENV=development my-image
docker run -e NODE_ENV=production my-image
```

The code adapts its behavior based on `process.env.NODE_ENV` (more verbose logs, connection to a different DB, etc.). One single image, different behavior depending on the variable passed to `run`.
