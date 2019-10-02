const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res) {
        const db = req.app.get('db')
        const {username} = req.body

        //check to see if the user has already registered a username
        const user = await db.find_username(username)
        
        // if the username is already registered, stop the function
        if(user[0])
            return res.status(200).send({message: 'Username is already in use'})

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //Store the new user in the database
        const userId = await db.add_user({username})
    

    }
}