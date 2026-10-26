# QCM de révision — Formules Tableau Desktop


0 / 20

1\.

Calculer le chiffre d'affaires net total.

A. COUNT([Net Sales])

B. SUM([Net Sales])

C. AVG([Net Sales])

D. COUNTD([Net Sales])

2\.

Compter le nombre de commandes distinctes.

A. COUNT([Order Id])

B. SUM([Order Id])

C. COUNTD([Order Id])

D. AVG([Order Id])

3\.

Calculer le nombre total d'unités vendues.

A. SUM([Quantity])

B. COUNT([Quantity])

C. COUNTD([Quantity])

D. AVG([Quantity])

4\.

Compter les produits différents présents dans les ventes.

A. COUNT([Product Id])

B. COUNTD([Product Id])

C. SUM([Quantity])

D. COUNTD([Order Id])

5\.

Calculer le montant de vente après remise d'une ligne.

A. [Quantity] \* [Unit Price]

B. [Quantity] \* [Unit Price] \* (1 - [Discount Rate])

C. [Net Sales] \* [Discount Rate]

D. [Quantity] \* [Unit Price] + [Discount Rate]

6\.

Calculer le coût d'achat total d'une ligne de vente.

A. [Quantity] + [Unit Cost]

B. [Net Sales] - [Unit Cost]

C. [Quantity] \* [Unit Cost]

D. SUM([Unit Cost])

7\.

Calculer la marge brute d'une ligne.

A. [Net Sales] - [Quantity] \* [Unit Cost]

B. [Net Sales] - [Unit Cost]

C. [Net Sales] + [Quantity] \* [Unit Cost]

D. [Net Sales] / [Unit Cost]

8\.

Calculer la marge brute totale d'une famille de produits.

A. AVG([Marge brut])

B. COUNT([Marge brut])

C. SUM([Marge brut])

D. MAX([Marge brut])

9\.

Calculer la marge moyenne par ligne de vente.

A. SUM([Marge brut])

B. AVG([Marge brut])

C. COUNTD([Marge brut])

D. MIN([Marge brut])

10\.

Calculer le taux de marge sur ventes nettes par famille.

A. AVG([Marge brut]) / AVG([Net Sales])

B. SUM([Net Sales]) / SUM([Marge brut])

C. SUM([Marge brut]) / SUM([Net Sales])

D. SUM([Marge brut]) \* SUM([Net Sales])

11\.

Calculer le prix net moyen par unité vendue.

A. AVG([Net Sales])

B. SUM([Net Sales]) / SUM([Quantity])

C. SUM([Quantity]) / SUM([Net Sales])

D. COUNT([Net Sales])

12\.

Calculer le chiffre d'affaires moyen par commande.

A. AVG([Net Sales])

B. SUM([Net Sales]) / COUNT([Order Id])

C. SUM([Net Sales]) / COUNTD([Order Id])

D. COUNTD([Net Sales])

13\.

Calculer le montant total de remise à partir du prix avant remise.

A. SUM([Net Sales]) \* SUM([Discount Rate])

B. SUM([Quantity] \* [Unit Price] \* [Discount Rate])

C. AVG([Discount Rate])

D. SUM([Quantity]) \* AVG([Unit Price])

14\.

Compter les lignes ayant une valeur Net Sales renseignée.

A. COUNTD([Net Sales])

B. SUM([Net Sales])

C. COUNT([Net Sales])

D. AVG([Net Sales])

15\.

Identifier le montant de vente net le plus élevé sur une ligne.

A. MAX([Net Sales])

B. SUM([Net Sales])

C. AVG([Net Sales])

D. COUNT([Net Sales])

16\.

Calculer une différence entre les ventes enregistrées et recalculées.

A. [Net Sales] + [Ventes recalculées]

B. ABS([Net Sales] - [Ventes recalculées])

C. [Net Sales] / [Ventes recalculées]

D. COUNT([Net Sales])

17\.

Sécuriser le calcul du taux lorsque les ventes nettes peuvent être nulles.

A. SUM([Marge brut]) / 0

B. SUM([Marge brut]) / COUNT([Net Sales])

C. IF SUM([Net Sales]) != 0 THEN SUM([Marge brut]) / SUM([Net Sales]) END

D. AVG([Marge brut])

18\.

Identifier les ventes dont la marge brute est négative.

A. IF [Marge brut] < 0 THEN 'Perte' ELSE 'Positive ou nulle' END

B. IF SUM([Marge brut]) > 0 THEN 'Perte' END

C. COUNTD([Marge brut])

D. ABS([Marge brut])

19\.

Calculer la part d'une famille dans le chiffre d'affaires total affiché, à partir des sommes par famille.

A. SUM([Net Sales]) / AVG([Net Sales])

B. SUM([Net Sales]) / TOTAL(SUM([Net Sales]))

C. COUNTD([Net Sales]) / COUNT([Net Sales])

D. SUM([Quantity]) / SUM([Net Sales])

20\.

Calculer un taux de remise pondéré sur l'ensemble des ventes.

A. AVG([Discount Rate])

B. SUM([Discount Rate])

C. SUM([Quantity] \* [Unit Price] \* [Discount Rate]) / SUM([Quantity] \* [Unit Price])

D. MAX([Discount Rate])

Corriger le QCM
