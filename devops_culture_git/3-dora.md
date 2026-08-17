# DORA Quiz

## Q1

- Deployment frequency -> how often you deploy to production.
- Lead time for changes -> total time from the start of a code change to its deployment in production.
- Change failure rate -> rate of deployments to production that cause problems.
- Mean time to restore -> average time to fix a problematic deployment.

## Q2

The deployment frequency is bad, they don't deploy often enough.

## Q3

If I reduce the time between the PR and the production deployment, I reduce the time to deployment, so the lead time for change improves.

## Q4

1 out of 4 deployments causes a problem, so we have a change failure rate of 25%, which is a fairly high and therefore bad value. Many changes lead to problems in production.

## Q5

The acronym CALMS stands for Culture Automation Lean Measurement Sharing, in other words a way of working together efficiently and continuously improving processes.

## Q6

False, a good team should deploy often and in small changes. Faster to build, test, modify, and therefore to deploy to production.

## Q7

To improve MTTR, it is better to monitor, alert, and have automatic rollbacks, which allows for a faster return to normal.

## Q8

Delivery capacity (throughput) is measured using deployment frequency and lead time for changes, while stability is measured using MTTR and change failure rate.

## Q9

The idea is not to blame the person responsible for the error, but rather to understand why this error occurred in production in order to improve and avoid making this mistake again.