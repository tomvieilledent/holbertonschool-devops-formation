# Conflict resolution

The `version` line was in conflict (`1.1.0` vs `2.0.0`), because both branches changed it from the same base value (`1.0.0`) to a different one. The `replicas` and `feature_dark_mode` lines merged automatically since each was changed by only one branch. I kept `version: 2.0.0`, the higher value, reflecting the combined result of both merged features.
