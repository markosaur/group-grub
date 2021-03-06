require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
authCtrl = require('./authController')
groupsCtrl = require('./groupsController')

const app = express()

app.use( express.static( `${__dirname}/../build` ) );

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

// Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

//Group endpoints
app.get('/api/groups/user', groupsCtrl.getUserGroups)
app.get('/api/group/:id', groupsCtrl.getGroupOrder)
app.get('/api/groups/:id', groupsCtrl.getAvailableGroups)
//put logic of max number of members
app.post('/api/group', groupsCtrl.createGroup)
app.post('/api/joingroup', groupsCtrl.joinGroup)
app.post('/api/order', groupsCtrl.postOrder)
app.put('/api/order/:id', groupsCtrl.updateOrder)
app.delete('/api/order/:id', groupsCtrl.deleteOrder)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} slices of carrot cake with cream cheese frosting`))
})