const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res) {
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(username, password)

        //check to see if the user has already registered a username
        const user = await db.find_username(username)
        console.log(user)
        // if the username is already registered, stop the function
        if(user[0])
            return res.status(200).send({message: 'Username is already in use'})

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //Store the new user in the database
        const userId = await db.add_user({username})
        console.log(userId)
        db.add_hash({users_id:userId[0].users_id, hash}).catch(err => {
            return res.sendStatus(503)
        })

        //store the new user in sessions
        req.session.user = {
            username,
            userId: userId[0].users_id
        }
        res
            .status(201).send({message: 'Welcome', user: req.session.user, loggedIn: true})
            console.log(req.session.user)

    

    },

    async login(req, res) {
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(password)

        //check to see if the username exists and that the hash/password is correct
        const user = await db.find_user(username)
        //if user doesn't exist, send appropriate response
        if(!user[0]) return res.status(200).send({message: 'Username not found'})
        //Time to hash the password and compare with our db
        const result = bcrypt.compareSync(password, user[0].hash)
        //if hashes don't match, send a sad response
        if (!result) return res.status(200).send({message: 'Incorrect password'})
        //if they do match, add user to sessions
        //deconstruct the username and the users_id from user[0]
        const {users_id: userId} = user[0]    
        // we are then going to use these deconstructed values to add them to req.session.user
        req.session.user = {username, userId}
        //now to send it back to the front end
        res.status(200)
        .send({message: 'Logged In', user: req.session.user, loggedIn: true})
    },

    logout(req, res) {
        req.session.destroy()
        res.status(200).send({message: 'Logged out', loggedIn: false})
    }
} 