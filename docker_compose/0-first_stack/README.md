# First Docker Compose Stack

This project demonstrates a simple Todo application stack composed of three services:

- **Web**: Nginx serves the web application.
- **API**: Apache HTTP Server represents the API service.
- **Database**: Redis represents the database service.

## Start the application

```docker compose up```

## Check the services

In a second terminal, run:

```docker compose ps```

Expected result:

```bash
NAME                       IMAGE          COMMAND                  SERVICE    CREATED          STATUS          PORTS
0-first_stack-api-1        httpd:alpine   "httpd-foreground"       api        50 seconds ago   Up 20 seconds   80/tcp
0-first_stack-database-1   redis:alpine   "docker-entrypoint.s…"   database   50 seconds ago   Up 20 seconds   6379/tcp
0-first_stack-web-1        nginx:alpine   "/docker-entrypoint.…"   web        50 seconds ago   Up 20 seconds   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp
```

## Check the exposed port

In the second terminal, run:

```curl http://localhost:8080```

Expected result:

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

## Stop the application

```docker compose down```

Expected result:

```bash
[+] Running 4/4
 ✔ Container 0-first_stack-api-1       Removed                                                               1.1s 
 ✔ Container 0-first_stack-database-1  Removed                                                               0.3s 
 ✔ Container 0-first_stack-web-1       Removed                                                               0.3s 
 ✔ Network 0-first_stack_default       Removed                                                               0.2s
```

## Check the services

```docker compose ps```

Expected result:

```bash
NAME      IMAGE     COMMAND   SERVICE   CREATED   STATUS    PORTS
```
