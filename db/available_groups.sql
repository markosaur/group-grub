select * from groups
where groups_id not in (select groups_id from myGroups
where users_id = 5);

-- we want a list where users_id is apart of, this is the inner query and this will run first, then we want a query that displays all groups that do not contain the groups_id from the inner query.  The inner query will spit out an array of two numbers