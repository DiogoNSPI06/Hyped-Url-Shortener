/*
  © HypedGroupCode 2022 - Todos os direitos reservados
*/
const config = require('./config.json')
const request = require('https')

class hypedDB {
  constructor(token) {
    if (config.moduleIsEnabled.hyped_WebAPI !== true) {
      return console.log("HPD | Hyped Web API is turned off!")
    }
    
    request.get(`${config.API.path}/${config.API.version}/checkToken/${token}`, (resp) => {
      let data = ''

        resp.on('data', (chunk) => {
          data += chunk
        })

        resp.on('end', () => {
          if(JSON.parse(data).value !== true) {
            return console.log("HPD | Invalid Token Provided, please make sure you're using the right token!")
          }
        })
    })
    
    this.set = function (key, value) {
      request.get(`${config.API.path}/${config.API.version}/db/set/${config.API.token}/${key}/${value}`)
      return
    }
    this.push = function (key, value) {
      request.get(`${config.API.path}/${config.API.version}/db/push/${config.API.token}/${key}/${value}`)
      return
    }
    this.add = function (key, number) {
      request.get(`${config.API.path}/${config.API.version}/db/add/${config.API.token}/${key}/${number}`)
      return
    }
    this.get = function (key) {
      request.get(`${config.API.path}/${config.API.version}/db/get/${config.API.token}/${key}`, (resp) => {
        let data = ''

        resp.on('data', (chunk) => {
          data += chunk
        })

        resp.on('end', async () => {   
          return await JSON.parse(data).value
        })
      })
    }
    this.delete = function (key) {
      request.get(`${config.API.path}/${config.API.version}/db/delete/${config.API.token}/${key}`)
      return
    }
  }
}

module.exports = hypedDB