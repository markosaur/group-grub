insert into users
(username, is_admin)
values
(${username}, false),
returning users_id;