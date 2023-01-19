const fetchBreedDescription = require('./breedfetcher')

let breed = process.argv[2];

fetchBreedDescription(breed, (error, description) => {
    if (error) {
      console.log(error)
    }
  
    if (description) {
      console.log(description);
    }
});