insert into orders
(users_id, item, price, groups_id)
values
(${users_id}, ${item}, ${price}, ${groups_id});
select g.groups_name, u.username, o.item, o.price, o.orders_id, u.users_id 
from orders o
join users u on u.users_id = o.users_id 
join groups g on g.groups_id = o.groups_id
where g.groups_id = ${groups_id};
-- when you build a query you should build a select statement so that you can send back the data that you need

