module.exports = {
  nameIsNotBlank: function(input) {
    return !input.trim() ? 'Name cannot be blank' : '';
  },
  addressIsNotBlank: function(input) {
    return !input.trim() ? 'Address cannot be blank' : '';
  },
  neighborhoodIsNotBlank: function(input) {
    return !input.trim() ? 'Neighborhood cannot be blank' : '';
  },
  zipIsNotBlank: function(input) {
    return !input.trim() ? 'Zipcode cannot be blank' : '';
  },
  bioIsNotBlank: function(input) {
    return !input.trim() ? 'Description cannot be blank' : '';
  }
}
