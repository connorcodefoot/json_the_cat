const request = require('request');

let breed = process.argv[2];
const inputWebsite = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(inputWebsite, (error, response, body) => {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  if (body === '[]') {
    console.log('Cat breed does not exist, please try again');
  } else if (body === undefined) {
    console.log('Something went wrong, please try again');
  } else {
    outputBody(body);
  }

});

const outputBody = (body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
};