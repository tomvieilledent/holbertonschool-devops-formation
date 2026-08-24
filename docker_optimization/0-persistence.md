# Persistence

## 1. Create the volume

`docker volume create postgres_data`

## 2. Create the container with the postgres image

`docker run -d --name postgres-test -e POSTGRES_PASSWORD=secret -v postgres_data:/var/lib/postgresql postgres`

```bash
be39bdbd00ba98f4abf4e794856440a087ce93db792789f327bd85ebcc15b293
```

## 3. Verify the container

`docker ps`

The container was created successfully.

```bash
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS         PORTS      NAMES
be39bdbd00ba   postgres   "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   5432/tcp   postgres-test
```

`docker logs postgres-test`

The database is properly waiting for connections.

```bash
...
2026-08-24 06:08:56.468 UTC [1] LOG:  database system is ready to accept connections
```

## 4. Access the DB

`docker exec -it postgres-test psql -U postgres`

```bash
postgres=#
```

## 5. Create a table and a user

```bash
postgres=# \c testdb
You are now connected to database "testdb" as user "postgres".
testdb=# CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT); INSERT INTO users (name) VALUES ('Tom'); SELECT * FROM users;
CREATE TABLE

CREATE TABLE
INSERT 0 1
 id | name 
----+------
  1 | Tom
(1 row)
```

## 6. Exit the DB and remove the container

`\q` to exit the DB, then `docker rm -f postgres-test` to remove the container.

## 7. Verify the containers

`docker ps -a`

```bash
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

No container remains.

## 8. Verify the volume

`docker volume ls`

```bash
DRIVER    VOLUME NAME
local     postgres_data
```

The `postgres_data` volume is still present.

## 9. Recreate and verify the container (with old volume)

`docker run -d --name postgres-test -e POSTGRES_PASSWORD=secret -v postgres_data/var/lib/postgresql postgres`

```bash
b11a8d8f55e5c3b92b6f5ec3d4c6d05d6a2e90084c31575133a3885c5520fd35
```

`docker ps`

```bash
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS      NAMES
b11a8d8f55e5   postgres   "docker-entrypoint.s…"   34 seconds ago   Up 34 seconds   5432/tcp   postgres-test
```

`docker exec -it postgres-test psql -U postgres -d testdb`

```bash
testdb=# SELECT * FROM users;

id | name 
----+------
  1 | Tom
(1 row)
```

We still have the row created before deletion.
