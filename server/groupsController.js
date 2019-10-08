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

        db.create_group({ groups_name, date, deadline, created_by})
        .then((result) => {
            console.log(result)
        const groups_id = result[0].groups_id
        const created_by = result[0].created_by
        const users_id = created_by
            console.log(groups_id, created_by)
        db.add_group_user_myGroups({groups_id, users_id})
        // .then(()=>)
        .catch(err => {
            res.status(500).send("error myGroups")
            console.log(err)
        })
        

             //need to get the created_by and the group_id from result and add it to the query to enter it into the members or myGroup table
            res.status(200).send(result)
        })



    }
    
}