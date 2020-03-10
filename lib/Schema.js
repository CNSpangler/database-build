class Schema {
  constructor(color, yards, owned) {
    this.color =  color;
    this.owned =  owned;
    this.yards =  yards;
  }
}

const schema = new Schema({
  color: {
    type: String,
    required: true
  },
  yards: {
    type: Number,
    required: true
  },
  owned: {
    type: Boolean,
    required: true
  }
});

const ink = {
  color: 'blue',
  owned: true,
  yards: 350
};

schema.validate(ink);
