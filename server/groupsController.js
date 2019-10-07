module.exports ={
    getUserGroups: async (req, res) => {
        const groups = await req.app.get('db').get_user_groups(req.session.user.userId)
        return res.status(200).send(groups)
    }
    
}