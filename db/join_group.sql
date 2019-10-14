insert into myGroups
(groups_id, users_id)
values
(${groups_id}, ${users_id} );

select g.groups_id, g.groups_name, g.date, g.deadline, g.created_by, u.username, u.users_id from groups g
join users u on u.users_id = g.created_by 
where groups_id not in (select groups_id from myGroups
where users_id = ${users_id});

