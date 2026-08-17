# Meet your first container

## Pull
``` docker pull nginx ```

Pulls the nginx image for docker

```
Using default tag: latest
latest: Pulling from library/nginx
1b7200988f19: Pull complete 
f3dc69d0d185: Pull complete 
69bf5e21f36b: Pull complete 
6f707990432e: Pull complete 
5a965c79b807: Pull complete 
65d501c82b02: Pull complete 
b4878adb81c5: Pull complete 
Digest: sha256:8541484afbc9c8a5a8a99b379568ebbc957f658583ec9448fc43104229c03cf8
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```

## Run

``` docker run -d --name my-nginx -p 8080:80 nginx ```

`docker run` creates a container, `-d` runs it in the background instead of directly in the terminal, `--name my-nginx` gives the container the name my-nginx, `-p 8080:80` maps the ports so that port 8080 on my machine corresponds to port 80 on the container, and `nginx` is the name of the image to use.

```docker ps``` is used to see the running containers

```
docker_fundamentals git:(main) ✗ docker run -d --name my-nginx -p 8080:80 nginx
5f7dec43f8a74ce102dd5c6104c836b75fef634acf0b147b75cfb04d43f6aab3
➜  docker_fundamentals git:(main) ✗ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                     NAMES
5f7dec43f8a7   nginx     "/docker-entrypoint.…"   14 seconds ago   Up 13 seconds   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   my-nginx
```

## Hit with curl

```curl http:/localhost:8080```

Returns

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

Confirms that the container is accessible and working

## Terminal

```docker exec -it my-nginx /bin/bash```

Gives access to the container's terminal

```
root@cf2ad7babff2:/# ls -la
total 72
drwxr-xr-x   1 root root 4096 Aug 17 12:39 .
drwxr-xr-x   1 root root 4096 Aug 17 12:39 ..
-rwxr-xr-x   1 root root    0 Aug 17 12:39 .dockerenv
lrwxrwxrwx   1 root root    7 Jul  4 09:05 bin -> usr/bin
drwxr-xr-x   2 root root 4096 Jul  4 09:05 boot
drwxr-xr-x   5 root root  340 Aug 17 12:39 dev
drwxr-xr-x   1 root root 4096 Aug  5 00:21 docker-entrypoint.d
-rwxr-xr-x   1 root root 1620 Aug  5 00:21 docker-entrypoint.sh
drwxr-xr-x   1 root root 4096 Aug 17 12:39 etc
drwxr-xr-x   2 root root 4096 Jul  4 09:05 home
lrwxrwxrwx   1 root root    7 Jul  4 09:05 lib -> usr/lib
drwxr-xr-x   2 root root 4096 Aug  3 00:00 media
drwxr-xr-x   2 root root 4096 Aug  3 00:00 mnt
drwxr-xr-x   2 root root 4096 Aug  3 00:00 opt
dr-xr-xr-x 259 root root    0 Aug 17 12:39 proc
drwx------   2 root root 4096 Aug  3 00:00 root
drwxr-xr-x   1 root root 4096 Aug 17 12:39 run
lrwxrwxrwx   1 root root    8 Jul  4 09:05 sbin -> usr/sbin
drwxr-xr-x   2 root root 4096 Aug  3 00:00 srv
dr-xr-xr-x  11 root root    0 Aug 17 12:39 sys
drwxrwxrwt   2 root root 4096 Aug  3 00:00 tmp
drwxr-xr-x   1 root root 4096 Aug  3 00:00 usr
drwxr-xr-x   1 root root 4096 Aug  3 00:00 var
```

## Read logs

```docker logs my-nginx```

Shows the container's logs. On the last line you can clearly see the curl request

```
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/08/17 12:39:15 [notice] 1#1: using the "epoll" event method
2026/08/17 12:39:15 [notice] 1#1: nginx/1.31.3
2026/08/17 12:39:15 [notice] 1#1: built by gcc 14.2.0 (Debian 14.2.0-19) 
2026/08/17 12:39:15 [notice] 1#1: OS: Linux 6.12.54-linuxkit
2026/08/17 12:39:15 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2026/08/17 12:39:15 [notice] 1#1: start worker processes
2026/08/17 12:39:15 [notice] 1#1: start worker process 29
2026/08/17 12:39:15 [notice] 1#1: start worker process 30
2026/08/17 12:39:15 [notice] 1#1: start worker process 31
2026/08/17 12:39:15 [notice] 1#1: start worker process 32
2026/08/17 12:39:15 [notice] 1#1: start worker process 33
2026/08/17 12:39:15 [notice] 1#1: start worker process 34
2026/08/17 12:39:15 [notice] 1#1: start worker process 35
2026/08/17 12:39:15 [notice] 1#1: start worker process 36
2026/08/17 12:39:15 [notice] 1#1: start worker process 37
2026/08/17 12:39:15 [notice] 1#1: start worker process 38
2026/08/17 12:39:15 [notice] 1#1: start worker process 39
2026/08/17 12:39:15 [notice] 1#1: start worker process 40
192.168.65.1 - - [17/Aug/2026:12:40:12 +0000] "GET / HTTP/1.1" 200 896 "-" "curl/8.7.1" "-"
```

## Stop and remove

* ```docker stop my-nginx``` to stop the container
* ```docker rm my-nginx``` to remove the container

## Observations

1. **Image vs container**: The nginx image is the template used to create the my-nginx container. The container is the running instance of that image.
2. **Inside the container**: With `docker exec`, I was able to get into the container and see the Nginx files, in particular `/usr/share/nginx/html`, which contains the default web page.
3. **Port mapping**: The `-p 8080:80` option links port 8080 on my machine to port 80 on the container. I used `curl http://localhost:8080` to verify that Nginx was accessible.
