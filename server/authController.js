const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res) {
        const db = req.app.get('db')
        const {username} = req.body

        //check to see if the user has already registered a username
        const user = await db.find_username(username)
    }
}