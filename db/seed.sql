create table users(
users_id serial primary key,
username varchar(100),
is_admin BOOLEAN
)

select * from users

create table users_login (
users_login_id serial primary key,
users_id integer references users(users_id),
hash text
);

select * from users_login

insert into users
(username, is_admin)
values
('Marko', true),
('Joe', false);


select * from users
where username = 'Marko'

select u.users_id, username, hash
from users u
join users_login ul on u.users_id = ul.users_id
where username = 'mark';

create table groups(
	groups_id serial primary key,
  groups_name varchar(100),
  date text,
  deadline text,
 	created_by int references users(users_id)
);

create table myGroups(
	myGroups_id serial primary key,
  groups_id int references groups(groups_id),
  users_id int references users(users_id)
);

create table orders(
    orders_id serial primary key,
    users_id int references users(users_id),
    item text,
    price integer
)


insert into groups
(groups_name,date, deadline, created_by)
values
('test1', 'october 1', 10, 1),
('test2', 'october 2', 11, 2);

select * from groups;

insert into myGroups
(groups_id, users_id)
values
(1, 1),
(1, 2),
(2, 1),
(2, 2);


insert into orders
(users_id, item, price, groups_id)
values
(1, 'old fashioned donut', 2, 1),
(1, 'Texano Burrito', 2, 2),
(2, 'red velvet cake', 4, 1);

select * from orders;

-- how to get the whole group order view, this will be available when the user clicks on one of the groups
select g.groups_name, u.username, o.item, o.price from orders o
join users u on u.users_id = o.users_id 
join groups g on g.groups_id = o.groups_id
where g.groups_id = 1;

-- This is the query rough draft to query for each of the groups one user has joined 
select g.groups_name
from users u
join myGroups mg on mg.users_id = u.users_id
join groups g on g.groups_id = mg.groups_id
where u.users_id = 1;








-- create table users(
-- users_id serial primary key,
-- username varchar(100)
-- );

-- insert into users
-- (username)
-- values
-- ('Marko'),
-- ('Joe');

-- create table groups(
-- 	groups_id serial primary key,
--   groups_name varchar(100),
--   date text,
--   deadline text,
--  	created_by int references users(users_id)
-- );

-- select * from groups

-- create table myGroups(
-- 	myGroups_id serial primary key,
--   groups_id int references groups(groups_id),
--   users_id int references users(users_id)
-- );

-- create table orders(
--     orders_id serial primary key,
--     users_id int references users(users_id),
--     item text,
--     price integer
-- )

-- insert into groups
-- (groups_name,date, deadline, created_by)
-- values
-- ('test1', 'october 1', 10, 1),
-- ('test2', 'october 2', 11, 2);

-- select * from groups;

-- insert into myGroups
-- (groups_id, users_id)
-- values
-- (1, 1),
-- (1, 2),
-- (2, 1),
-- (2, 2);

-- select * from myGroups;

-- alter table orders
-- add column groups_id int references groups(groups_id);

-- insert into orders
-- (users_id, item, price, groups_id)
-- values
-- (1, 'old fashioned donut', 2, 1),
-- (1, 'Texano Burrito', 2, 2),
-- (2, 'red velvet cake', 4, 1);

to select the groups the user belongs to

select g.groups_name
from users u
join myGroups mg on mg.users_id = u.users_id
join groups g on g.groups_id = mg.groups_id
where u.users_id = 1;

To see all orders for a specific group

select g.groups_name, u.username, o.item, o.price from orders o
join users u on u.users_id = o.users_id 
join groups g on g.groups_id = o.groups_id
where g.groups_id = 1;






-- create table users(
-- users_id serial primary key,
-- username varchar(100),
-- is_admin BOOLEAN
-- )

-- select * from users

-- create table users_login (
-- users_login_id serial primary key,
-- users_id integer references users(users_id),
-- hash text
-- );

-- select * from users_login

-- insert into users
-- (username, is_admin)
-- values
-- ('Marko', true),
-- ('Joe', false);

-- select * from users_login

-- select u.users_id, username, hash
-- from users u
-- join users_login ul on u.users_id = ul.users_id
-- where username = 'mark';

-- select * from users


-- create table groups(
--     groups_id serial primary key,
--     groups_name varchar(100),
--     date text,
--     deadline text,
--     created_by int references users(users_id)
-- );

-- create table myGroups(
-- 	myGroups_id serial primary key,
--   groups_id int references groups(groups_id),
--   users_id int references users(users_id)
-- );

-- create table orders(
--     orders_id serial primary key,
--     users_id int references users(users_id),
--     item text,
--     price integer
-- )

-- insert into groups
-- (groups_name,date, deadline, created_by)
-- values
-- ('test1', 'october 1', 10, 1),
-- ('test2', 'october 2', 11, 2);

-- select * from groups

-- insert into myGroups
-- (groups_id, users_id)
-- values
-- (1, 1),
-- (1, 2),
-- (1, 5),
-- (2, 5);


-- select * from myGroups;

-- alter table orders
-- add column groups_id int references groups(groups_id);

-- select * from orders

-- insert into orders
-- (users_id, item, price, groups_id)
-- values
-- (1, 'old fashioned donut', 2, 1),
-- (1, 'texano burrito', 2, 2),
-- (2, 'red velvet cake', 4, 1);
-- (5, 'Oreos', 2.5, 1),
-- (5, 'Reeses Pieces', 3, 2);


-- select * from orders;


-- to select the groups the user belongs to

-- select g.groups_name
-- from users u
-- join myGroups mg on mg.users_id = u.users_id
-- join groups g on g.groups_id = mg.groups_id
-- where u.users_id = 1;

-- To see all orders for a specific group

-- select g.groups_name, u.username, o.item, o.price from orders o
-- join users u on u.users_id = o.users_id 
-- join groups g on g.groups_id = o.groups_id
-- where g.groups_id = 1;

-- select * from users


-- create table movies (
--   movies_id serial primary key,
--   title varchar(100),
--   director varchar(100),
--   rating integer
-- );

-- insert into movies (title, director, rating)
-- values ('There Will Be Blood', 'Paul Thomas Anderson', 10), 
-- ('Space Jam', 'Michael Jordan', 15),
-- ('The Dark Knight', 'Christopher Nolan', 9),
-- ('Anchorman', 'Adam McKay', 6),
-- ('The Grand Budapest Hotel', 'Wes Anderson', 9),
-- ('Blade Runner 2049', 'Denis Villenueve', 10),
-- ('The Lighthouse', 'Robert Eggers', 500);

-- select * from movies;

-- select * from mygroups


-- update orders
-- set item = 'Chocolate Donut', price = 3
-- where orders_id = 1;

-- select * from orders
-- where orders_id = 1;
select * from orders