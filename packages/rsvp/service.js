const faker = require('faker');
const { range, random, flatten } = require('lodash');

const { DataService, delay } = require('@meetup/data-service');

const rsvps = flatten(range(1, 100).map(id => {
  return range(1, random(4, 30, false)).map(() => ({
    id: faker.random.number().toString(),
    member: {
      id: faker.random.number({ min: 1, max: 100 }).toString()
    },
    event: {
      id: id.toString()
    }
  }));
}));

class RsvpService extends DataService {
  constructor (data) {
    super('Rsvp', 'id', data);
  }

  async getRsvpsForUser (userId) {
    console.log(`RsvpService.getRsvpsForUser(${userId})`);
    await delay(15, 20);
    return rsvps.filter(rsvp => rsvp.member.id === userId);
  }

  async getRsvpsForEvent (eventId) {
    console.log(`RsvpService.getRsvpsForEvent(${eventId})`);
    await delay(15, 20);
    return rsvps.filter(rsvp => rsvp.event.id === eventId);
  }
}

const rsvpService = new RsvpService(rsvps);

module.exports = {
  rsvpService
};
