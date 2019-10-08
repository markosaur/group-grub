module.exports ={
   

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
    }
    
}