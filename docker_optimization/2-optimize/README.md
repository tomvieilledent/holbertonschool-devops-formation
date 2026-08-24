# Optimize

## Before / After

| Metric                              | Before (baseline)           | After (optimized)              |
|--------------------------------------|-------------------------------|----------------------------------|
| Base image                            | node:20                       | node:22-alpine                    |
| Image size                            | 1.58GB                        | 247MB (**-84%**)                  |
| Rebuild time after a code-only change | 2.074s (npm install reruns)   | 0.306s (npm install from cache, **-85%**) |
| User                                   | root                           | non-root (`node`)                 |

Baseline Dockerfile: `COPY . .` before `npm install`, no `.dockerignore`, runs as root.

Optimized Dockerfile: `package*.json` copied and installed before the rest of the code (so `npm install` stays cached on code changes), `.dockerignore` added, runs as non-root.
