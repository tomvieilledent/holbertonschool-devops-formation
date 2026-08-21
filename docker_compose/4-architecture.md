# Architecture — 2-full_stack

## Services

- **proxy** (nginx): the only entry point. Port 8082 on the host points to it. It receives every request and sends it to `api`.
- **api** (Node/Express): the logic. It checks the cache first, then the database if needed, then updates the cache.
- **database** (postgres): stores the data. Has a healthcheck; `api` waits for it to be "healthy" before starting.
- **cache** (redis): keeps recent answers in memory for 10 seconds, so the database is not hit every time.

## Network

Compose makes one default network (`2-full_stack_default`). All 4 services are on it and can reach each other by name (`api`, `database`, `cache`). Only `proxy` is reachable from outside, through the published port.

## Volumes

No named volume. Only `proxy`'s nginx config is mounted from the local file `./proxy/default.conf`. Data in `database` and `cache` is not saved: it is lost when you run `docker compose down`.

## Request path

1. Client runs `curl http://localhost:8082/`.
2. The request reaches `proxy` (nginx).
3. `proxy` sends it to `api` (by service name).
4. `api` checks `cache`:
   - if found → returns it right away ("from cache").
   - if not found → asks `database`, saves the result in `cache` for 10 seconds, then returns it ("from database").
5. The response goes back through `api`, then `proxy`, then to the client.
