const request = require('request');

fetchBreedDescription = function(breedName, callback) {

  const requestURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(requestURL, (error, response, body) => {

    if (body === '[]') {
      error = 'The breed you requested could not be found'
      return callback(error)
    }

    if (body === undefined) {
      error = 'Something went wrong, please try again'
      return callback(error)
    }

    const description = JSON.parse(body)[0].description
    return callback(description)

  })

};

module.exports = fetchBreedDescription
