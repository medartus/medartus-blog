---
title: "Comment déterminer le retour sur investissement des projets d'intelligence artificielle ?"
date: '2021-11-01'
tags: ['AI', 'Artificial Intelligence', 'KPI', 'ROI', 'Performance']
draft: true
summary: "Comment déterminer le retour sur investissement des projets d'intelligence artificielle ?"
---

# I. Définition du retour sur investissement

Les projets d'IA nécessitent beaucoup d'investissements en termes de ressources financières et humaines. Pour minimiser les risques de dépenser inutilement ces ressources, il est nécessaire d'estimer la viabilité du projet. Pour cela, le ROI est l'indicateur de référence qui permet d'étudier la différence entre les coûts et les bénéfices. La formule de base est la suivante :

> **ROI** \= (Bénéfices-Coûts) / Coûts.

Le ratio est donc d'autant plus intéressant que sa valeur est supérieure à 0. Selon Megler (2019) et Canhoto et Clear (2020), il est nécessaire de déterminer la meilleure précision nécessaire en fonction du ROI sur les faux négatifs et les faux positifs. Selon Deshpande et Ruhe (2020), une décomposition des coûts et des bénéfices est proposée.

D'une part, en généralisant leurs approches des coûts, ils considèrent les facteurs liés à la collecte, au traitement, à la catégorisation et à la création de modèles de données. Ces coûts sont proportionnellement liés à la quantité de données et à la quantité de travail nécessaire pour effectuer ces tâches.

> **Coûts** \= Quantité de données x (Temps de récupération des données + Temps de traitement + Temps de création du modèle) x Nombre de personnes x Salaires moyens de l'équipe

En revanche, pour la partie bénéfice, il définit deux approches. La première consiste à identifier le coût d'un faux négatif et d'un vrai positif :

> **Bénéfices**\= Vrai positif x Coûts-Faux négatif x Coûts

La deuxième méthode se base sur la précision de la prédiction et estime le montant nécessaire pour améliorer le score de prédiction F1 d'un pour cent :

> **Bénéfices** \= Score F1 x Coûts pour améliorer la précision d'un pourcent

Le but de cette analyse est de déterminer quel modèle est le plus intéressant à utiliser pour optimiser les performances.

Selon Zif et McCarthy (1997), dans les projets de recherche et de développement, les retours sur investissement ne commencent à se faire sentir qu'au bout de deux ans. Penser à l'aspect financier n'est pas suffisant. Canhoto et Clear (2020) soulèvent plusieurs questions sur l'impact de l'augmentation de la prédiction par rapport aux problèmes d'interprétabilité du modèle ou même de vitesse en fonction de la précision.

# II. Comment calculer le ROI ?

Pour mieux comprendre pourquoi l'estimation du ROI est compliquée, nous devons examiner les composantes de cette mesure.

## 1\. Coûts

Tout d'abord, la première partie de ce calcul est l'estimation des coûts associés au projet. Dans cette partie, nous allons détailler les facteurs en tenant compte du fait que le développement est réalisé en interne. Cependant, il est également possible d'externaliser ce travail, ce qui modifiera la définition de ce composant.

**Développement:**

Tout d'abord, nous devons considérer la quantité de données à acquérir. Parfois, les données ne sont pas détenues par l'entreprise, il faut donc les acquérir en les achetant ou en créant des algorithmes pour les obtenir. De plus, les développeurs de l'entreprise peuvent ne pas connaître les technologies d'IA à utiliser, il est donc nécessaire de considérer le temps de formation. Il faut également prendre en compte le coût des infrastructures pour le développement comme les serveurs pour faire les calculs ou les bases de données. Enfin, le dernier facteur correspond au temps pour nettoyer les données, créer le modèle et l'optimiser.

> **Développement =** Temps de développement x Nombre de personnes x Salaire moyen

**Production:**

Heureusement, celui-ci est plus facile à estimer par rapport à la partie précédente. D'une part, il est possible de considérer le coût de production. D'autre part, le coût principal de cette partie correspondra au montant de l'infrastructure pour utiliser l'algorithme. Cela prend en compte les coûts fixes pour avoir un serveur pour héberger l'IA, mais aussi le coût lié à son utilisation. Différentes solutions existent pour gérer cette partie comme l'utilisation de serveurs internes ou d'offres cloud comme "Infrastructure as a Service" (IaaS) ou "Function as a Service" (FaaS).

> **Production =** Temps d'installation x Salaire + Coûts fixes du serveur + Coûts d'utilisation de l'algorithme

**Maintenance:**

Le dernier facteur correspond aux coûts de maintenance et de mise à jour de l'algorithme. Ces mises à jour sont nécessaires pour prendre en compte l'évolution de l'activité en effectuant de petites modifications associées. Le but de cette maintenance n'est pas de modifier fortement l'algorithme, mais simplement de l'adapter au contexte sans réelle amélioration. Pour effectuer ces tâches, certains estiment qu'il est nécessaire d'avoir une personne une journée par semaine. Même si le développeur ne travaille pas dessus toutes les semaines, cela permet de créer un capital de maintenance quand cela sera nécessaire. De plus, il faut également prendre en compte le coût d'acquisition des données pour mettre à jour l'algorithme afin de s'adapter aux changements de l'activité. Certains ont estimé empiriquement la durée de ces différentes actions, selon eux, il est bon de mettre à jour l'algorithme tous les 3 mois et de planifier la maintenance sur au moins 3 ans. Le calcul sur trois ans donne l'équation suivante : (sur la base de 253 jours travaillés par an)

**Maintenance =** 12 Acquisition de données + 152 Jours de maintenance x Salaire

On constate que la partie développement du projet représente une part importante du coût du projet. Cependant, pour certains CDO de grandes entreprises, le salaire des développeurs n'est pas pris en compte dans leur équation. L'inclusion de cette variable peut être discutable puisque leur équipe est sous contrat à durée indéterminée et qu'au final leurs salaires seront de toute façon payés. Les personnes qui pensent avec cette approche utilisent le ROI pour prioriser leurs projets plutôt que pour savoir quel est le coût final associé. Cependant, il est toujours intéressant de considérer cette variable car elle permet la comparaison avec l'externalisation, qui prend en compte ce facteur pour estimer le prix du service. Les coûts sont donc résumés par l'équation suivante :

> **Coûts =** Développement + Production + Maintenance.

> **Coûts =** Temps de développement x Nombre de personnes x Salaire moyen  
> \+ Temps d'installation x Salaire + Coûts fixes du serveur + Coûts d'utilisation des algorithmes  
> \+ 12 Acquisition de données + 152 Jours de maintenance x Salaire

## 2\. Avantages

Les formes de coûts sont assez similaires entre les différents projets, ce sont donc les bénéfices qui font la différence dans le retour sur investissement. Selon le type d'opportunité choisi, le calcul des revenus change.

**Gain d'automatisation:**

Tout d'abord, pour les projets qui sont basés sur l'optimisation ou l'automatisation des processus, il est possible de quantifier le temps gagné. Pour ce faire, la valeur est calculée en faisant la différence de temps pour réaliser une tâche entre avant et après l'intégration de l'IA. Cette valeur dépend également du nombre de répétitions et du salaire de la personne qui effectue la tâche. Concrètement, cela peut être le temps gagné en traitant automatiquement les emails et en les redirigeant vers le bon service de l'entreprise.

> **Gain d'automatisation =** Temps gagné x Nombre de répétitions x Salaire de la personne

**Réduction des risques :**

Deuxièmement, le gain peut également être basé sur la réduction des risques. Elle est calculée par la différence entre la probabilité qu'un événement se produise avant et après l'intégration de l'IA. Cette valeur est multipliée par le coût que l'IA génère si elle se produit. Par exemple, dans la détection de la fraude, le calcul peut être basé sur la différence d'amélioration de la précision de la détection en fonction de la pénalité évitée.

**Réduction du risque =** (Ancienne probabilité - Nouvelle probabilité) x Coûts du risque

**Accès au nouveau marché:**

Troisièmement, le gain peut être déterminé par le revenu généré par l'accès à un nouveau marché. Cependant, dans ce cas, il est plus difficile d'estimer cette valeur, car de nombreux composants peuvent entrer en jeu. Néanmoins, cette forme de valeur reste quantifiable et peut être prise en compte dans un ROI.

> **Nouvel accès au marché =** Revenu estimé

Enfin, il n'est pas toujours utile de calculer le gain, car il est trop difficile à quantifier. Certaines personnes interrogées estiment que si l'IA résout un problème qui a un fort impact sur l'activité ou la viabilité de l'entreprise, il n'est pas forcément nécessaire de calculer le ROI. À la fin du projet, le gain est clair si le problème n'est plus une menace pour l'entreprise.

## **3\. Opportunités**

Parfois, certains gains sont difficiles à quantifier, la plupart des gens les considèrent comme des opportunités. Même si ces opportunités ne sont pas incluses dans le calcul, elles sont toujours présentes dans la réflexion globale du projet. En effet, l'estimation de ces indicateurs serait trop arbitraire pour être prise en compte dans une équation financière.

**La prise en compte des concurrents:**

D'une part, le premier type d'opportunité correspond à la prise en compte de la concurrence. Il est difficile de quantifier le fait qu'il est nécessaire de s'aligner sur ses concurrents pour ne pas se laisser distancer économiquement. Il est également difficile de quantifier l'opportunité de devenir leader dans un domaine en mettant en place des projets innovants. Au final, tout cela dépend de la stratégie de l'entreprise, qui ne peut être calculée et qui influence l'évaluation du ROI.

**Priorisation des projets:**

D'autre part, on peut également considérer que l'opportunité de réaliser ce projet plutôt qu'un autre est également à prendre en compte. Comme pour tout type d'opportunité, cela dépend également de la stratégie de l'entreprise. La priorité doit correspondre à la vision à long terme de l'entreprise pour répondre au mieux à ces objectifs.

# III. Conclusion

En résumé, trois composantes majeures sont utilisées par la plupart des entreprises pour estimer leur ROI. Les coûts et les gains peuvent être reliés à des indicateurs financiers, tandis que les opportunités sont plus difficiles à quantifier, mais sont prises en compte dans la réflexion globale. Cette décomposition est similaire à celle présentée par Deshpande et Ruhe (2020), cependant, le processus présenté ci-dessus est plus abstrait. Cette abstraction s'explique par le fait que les gestionnaires n'entrent pas dans le détail et simplifient les calculs, alors que le document de recherche étudie plutôt les avantages liés à la précision de la prédiction. Cette approche très technique est plutôt abordée par les data scientists eux-mêmes, cependant, dans la plupart des entreprises, ce ne sont pas eux qui définissent le ROI. Le traitement des bénéfices basé sur le ratio des vrais négatifs et des faux positifs présenté dans les travaux de Megler (2019) et Canhoto et Clear (2020), correspond aux approches d'étude de haut niveau de la réduction des risques. Ces méthodes prennent davantage en compte les problématiques globales du calcul du ROI par rapport à celles identifiées dans les travaux de recherche plus axés sur les parties techniques de la science des données.

---

Canhoto, A. I., & Clear, F. (2020). Artificial intelligence and machine learning as business tools : A framework for diagnosing value destruction potential. _Business Horizons_, _63_(2), 183‑193. [https://doi.org/10.1016/j.bushor.2019.11.003](https://doi.org/10.1016/j.bushor.2019.11.003)

Deshpande, G., & Ruhe, G. (2020). Beyond Accuracy : ROI-driven Data Analytics of Empirical Data. _ArXiv:2009.06492 \[Cs, Stat\]_. [http://arxiv.org/abs/2009.06492](http://arxiv.org/abs/2009.06492)

Megler, V. M. (2019). Managing Machine Learning Projects Balance Potential with the Need for Guardrails. _Amazon White Paper_, _February_.

Zif, J., & McCarthy, D. J. (1997). The R&D cycle : The influence of product and process R&D on short-term ROI. _IEEE Transactions on Engineering Management_, _44_(2), 114‑123. [https://doi.org/10.1109/17.584920](https://doi.org/10.1109/17.584920)
