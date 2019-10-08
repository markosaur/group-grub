module.exports = {
   

    getUserGroups: async (req, res) => {
        const groups = await req.app.get('db').get_user_groups(req.session.user.userId)
        return res.status(200).send(groups)
    },

    getGroupOrder: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log(req.params)
        const order = await db.get_group_order(+id)

        if(order) {
            res.status(200).send(order)
        } else {
            res.status(404).send('Order not found!')
        }
    },

    createGroup: (req, res) => {
        const db = req.app.get('db')
        const created_by = req.session.user.userId
        const {groups_name, date, deadline} = req.body
        console.log(groups_name, date, deadline, created_by)

        db.create_group({ groups_name, date, deadline, created_by})
        .then((result) => {
        const groups_id = result.groups_id
        const users_id = result.created_by
        console.log(groups_id, users_id)


             //need to get the created_by and the group_id from result and add it to the query to enter it into the members or myGroup table
            res.status(200).send(result)
        })



    }
    
}