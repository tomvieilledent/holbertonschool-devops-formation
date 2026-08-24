# Networking

## 1. Create the network

`docker network create my-network`

```bash
b60fd9df41952c675e1a738da25554b3e2a73d35ca003acb34c5f12002ac64cc
```

`docker network ls`

```bash
NETWORK ID     NAME         DRIVER    SCOPE
b60fd9df4195   my-network   bridge    local
```

## 2. Create the containers

`docker run -d --name container1 --network my-network nginx`

`docker run -d --name container2 --network my-network nginx`

`docker ps`

```bash
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS      NAMES
265c9a805ff8   nginx         "/docker-entrypoint.…"   10 seconds ago   Up 10 seconds   80/tcp     container2
a5ba3f56e7c2   nginx         "/docker-entrypoint.…"   23 seconds ago   Up 23 seconds   80/tcp     container1
```

## 3. Communication between containers

Ping container2 from container1:


`docker exec -it container1 bash`

`curl http://container2`


Ping container1 from container2:

`docker exec -it container2 bash`

`curl http://container1`

In both cases we get the same response, as both containers share the same base nginx image.

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, nginx is successfully installed and working.
Further configuration is required for the web server, reverse proxy,
API gateway, load balancer, content cache, or other features.</p>

<p>For online documentation and support please refer to
<a href="https://nginx.org/">nginx.org</a>.<br/>
To engage with the community please visit
<a href="https://community.nginx.org/">community.nginx.org</a>.<br/>
For enterprise grade support, professional services, additional
security features and capabilities please refer to
<a href="https://f5.com/nginx">f5.com/nginx</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```
