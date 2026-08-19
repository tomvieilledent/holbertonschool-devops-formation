# 4-interact

Le serveur Express de `1-first_image` a été rendu configurable via la variable d'environnement `GREETING` :

```js
const greeting = process.env.GREETING || "Hello world";

app.get("/", (req, res) => {
  res.send(greeting);
});
```

## Build


```docker build -t interact-image .```


## 0. Sans passer `GREETING` (valeur par défaut)

```docker run -d --name interact-default -p 3000:3000 interact-image```

```curl http://localhost:3000```

Observé :

```bash
Hello world
```

## 1. Passer la variable au run (`-e`)


```docker run -d --name interact-container -p 3000:3000 -e GREETING="Salut depuis Docker" interact-image```



```curl http://localhost:3000```


Observé :


```bash
Salut depuis Docker
```


## 2. Lire la variable depuis l'intérieur du container (`exec`)


```docker exec interact-container printenv GREETING```


Observé :


```bash
Salut depuis Docker
```


## 3. Inspecter le container (`inspect` / `logs`)


```docker inspect interact-container --format '{{.Config.Env}}'```


Observé :


```bash
[GREETING=Salut depuis Docker PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin NODE_VERSION=22.23.2 YARN_VERSION=1.22.22]
```



```docker logs interact-container```


Observé :


```bash
Server running on port 3000
```

## Cas d'usage : dev vs prod

Le même principe permet de démarrer une image en mode `dev` ou `prod` sans la rebuild, via une variable comme `NODE_ENV` :

```bash
docker run -e NODE_ENV=development mon-image
docker run -e NODE_ENV=production mon-image
```

Le code adapte son comportement selon `process.env.NODE_ENV` (logs plus verbeux, connexion à une DB différente, etc.). Une seule image, un comportement différent selon la variable passée au `run`.
