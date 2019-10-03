insert into users
(username, is_admin)
values
(${username}, false)
RETURNING users_id;