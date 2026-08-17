# Quizz DORA

## Q1

Deployement frequency -> frequence à laquelle on déploie en prod.
Lead time for changes -> temps total d'une modification du début du code a la mise en prod.
Change failure rate -> taux de déploiement en prod qui pose problème.
Mean time to restore -> temps moyen pour régler le déploiement problématique.

## Q2

La fréquence de déploiement est mauvaise, ils ne déploient pas assez souvent.

## Q3

Si je réduit le temps entre la PR et la mise en prod je réduit le temps de mise en production donc le lead time for change s'améliore.

## Q4

1 déploiement sur 4 pose problème donc on a un taudx de change failure rate de 25% ce qui est une valeur assez élevée et donc pas bonne. Beaucoup de changement entraînent des problèmes en prod.

## Q5

L'acronyme CALMS veut dure Culture Automation Lean Measurment Sharing, autrement dit une manière de travailler efficacement ensemble et améliorer continuellement les process.

## Q6

Faux, une bonne équipe doit déployer souvent et en petites modifications. Plus rapide à realiser, tester, modifier et donc à mettre en production.

## Q7

Pour améliorer le MTTR il vaut mieux monitorer, alerter et avoir des rollback automatique ce qui permet un retour à la normale plus rapidement .

## Q8

La capacité de livraisont ( throughput) est mesurée grace à la deployment frequency et au lead time for changes quand la stabilité est mesurée grace  au MTTR et au change failure time.

## Q9

L'idée n'est pas de blamer la personne a qui est due l'erreur mais plutot de savoir pourquoi cette erreur est arrivé en prod dans le but de s'améliorer et de ne plus faire cette erreur.