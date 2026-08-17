# Postmortem PixelCart

## 1 : Factual time
- Fri 17h40 (occurend) Karim deploys checkout fix manually via SSH whith database URL type
- Fri 20h30 (detected) Customer reports checkout failure on social media
- Sat 11h40 (resolved) Typo corrected manually after contacting Karim

## 2 : Systemeic cause
Config tested informally on local machine without production parity

## 3 : Priority actions
1. One-click rollback
2. Automated monitoring and alerting (in production)
3. Catch syntax errors automaticlly before production (before production)

## 4 : DORA

- Deployment frequency -> 
- Lead time for changes ->
- Change failure rate ->
- Mean time to restore -> 