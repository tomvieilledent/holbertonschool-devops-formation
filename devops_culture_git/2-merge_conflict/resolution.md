# Résolution du conflit

La ligne `version` était en conflit (`1.1.0` vs `2.0.0`), car les deux branches l'avaient modifiée à partir de la même valeur de base (`1.0.0`) vers des valeurs différentes. Les lignes `replicas` et `feature_dark_mode` ont fusionné automatiquement car chacune n'avait été modifiée que par une seule branche. J'ai gardé `version: 2.0.0`, la valeur la plus haute, reflétant le résultat combiné des deux fonctionnalités fusionnées.
