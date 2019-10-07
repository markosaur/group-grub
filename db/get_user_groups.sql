select g.groups_name
from users u
join myGroups mg on mg.users_id = u.users_id
join groups g on g.groups_id = mg.groups_id
where u.users_id = $1;