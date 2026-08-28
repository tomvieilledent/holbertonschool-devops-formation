# holbertonschool-devops-formation

## Docker: Optimization & Hardening

### Task 3 : One image to build, another to ship

Multi-stage build: compiled in `golang:1.22`, shipped in `alpine:3.20` with only the binary.

[docker_optimization/3-multistage](docker_optimization/3-multistage/README.md)

### Task 4 : Harden it

Non-root user (`app`) and a healthcheck on `/health` that goes healthy.

[docker_optimization/4-harden](docker_optimization/4-harden/README.md)
