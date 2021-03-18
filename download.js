const fetch = require('node-fetch')
let fs = require('fs').promises
const url = 'https://api.covid19api.com/summary'

fetch(url)
  .then(response=> response.json())
  .then(data=> { 
      console.log(data)
      fs.writeFile("./corona.json", JSON.stringify(data))
    })
  .then(()=> console.log("Success!!"))
  .catch(error=> console.error(error))