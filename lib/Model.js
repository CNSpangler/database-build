const Schema = require('./Schema');

const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  weight: {
    type: String
  }
});

const Dog = new Model('Dog', dogSchema);

Dog
  .create({ name: 'spot', age: 5, weight: '20 lbs' })
  .then(createdDog => {
    // do stuff with a created dog
  });

Dog
  .find()
  .then(allDogs => {
    // do stuff with all dogs
  });

Dog
  .findById(dogId)
  .then(dog => {
    // do stuff with a dog
  });

Dog
  .findByIdAndUpdate(dogId, { name: 'rover' })
  .then(updatedDog => {
    // do stuff with the updated dog
  });

Dog
  .findByIdAndDelete(dogI)
  .then(deletedDog => {
    // do stuff with the deleted dog
  });
