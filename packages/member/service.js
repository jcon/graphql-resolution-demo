
const faker = require('faker');
const { range } = require('lodash');

const { DataService } = require('@meetup/data-service');

const members = range(1, 101).map(id => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const name = `${firstName} ${lastName}`;
  return {
    id: id.toString(),
    name: name,
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email(),
    photoUrl: faker.internet.avatar()
  };
});

const memberService = new DataService('Member', 'id', members);

module.exports = {
  memberService
};
