const Schema = require('./Schema');
const Model = require('./Model');

describe('Model class', () => {
  // create
  it('creates a new document', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    });

    const Dog = new Model('Dog', schema);

    return Dog
      .create({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        expect(dog).toEqual({
          _id: expect.any(String),
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });

  // find
  it('finds a whole object', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    });

    const Dog = new Model('Dog', schema);

    return Dog
      .create({
        name: 'rover',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        return Dog
          .find(dog);
      })
      .then(foundDogs => {
        expect.arrayContaining(foundDogs);
      });
  });
});

// find by id
it('finds by id', () => {
  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: String
    }
  });

  const Dog = new Model('Dog', schema);

  return Dog
    .create({
      name: 'rover',
      age: 5,
      weight: '20 lbs'
    })
    .then(dog => {
      return Dog
        .findById(dog._id);
    })
    .then(foundDog => {
      expect(foundDog).toEqual({
        _id: expect.any(String),
        name: 'rover',
        age: 5,
        weight: '20 lbs'
      });
    });
});

// Find by id and update
it('finds by id and updates', () => {
  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: String
    }
  });

  const Dog = new Model('Dog', schema);

  return Dog
    .create({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    })
    .then(dog => {
      return Dog
        .findByIdAndUpdate(dog._id, { name: 'rover' });
    })
    .then(updatedDog => {
      expect(updatedDog).toEqual({
        _id: expect.any(String),
        name: 'rover',
        age: 5,
        weight: '20 lbs'
      });
    });
});

// find by id and delete
it('finds by id and deletes', () => {
  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: String
    }
  });

  const Dog = new Model('Dog', schema);

  return Dog
    .create({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    })
    .then(dog => {
      return Dog
        .findByIdAndDelete(dog._id);
    })

    .then((foundDog) => {
      expect(foundDog).toEqual(undefined);
    });
});

