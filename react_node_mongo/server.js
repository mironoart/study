import express from 'express'
import apiRouter from './api'
import config from './config'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'

const server = express()


server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}))

server.set('view engine', 'ejs') // Sets view of browser to ejs ,aking possible to use dynamic ejs

import serverRender from './serverRender'

server.get('/', (req,res) => {
    serverRender()
        .then(content => {
            res.render('index', {
                content
            })
        })
        .catch(console.error)
})


server.use('/api', apiRouter)
server.use(express.static('public')) // Using public folder for default 

server.listen(config.port, config.host, () => {
    console.info('Listening on port :', config.port)
})