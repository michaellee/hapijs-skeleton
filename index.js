'use strict'

const Hapi    = require('hapi')
const server  = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8043
})

server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server running at: ${server.info.uri}`)
})
