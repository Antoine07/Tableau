NEXA Tableau · TP décision commerciale / jeu synthétique

Fichiers à conserver ensemble : sales_lines.csv, products.csv, customers.csv, return_events.csv.
Toutes les données sont fictives et générées pour le cours.

Grain et clés :
- sales_lines : une ligne de vente (line_id unique), plusieurs lignes peuvent partager order_id.
- products : une ligne par produit (product_id unique).
- customers : une ligne par client (customer_id unique).
- return_events : un événement de retour partiel (return_event_id unique). Plusieurs événements peuvent concerner le même line_id.

Relations : sales_lines.product_id = products.product_id ; sales_lines.customer_id = customers.customer_id ; sales_lines.line_id = return_events.line_id.
net_sales est calculé comme quantity × unit_price × (1 - discount_rate), arrondi à deux décimales. unit_cost est le coût unitaire d’achat, non le prix de vente.
