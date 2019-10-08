select g.groups_name, u.username, o.item, o.price from orders o
join users u on u.users_id = o.users_id 
join groups g on g.groups_id = o.groups_id
where g.groups_id = ($1);