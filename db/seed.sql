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