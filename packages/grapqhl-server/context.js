const DataLoader = require('dataloader');
const { eventService } = require('@meetup/event');
const { rsvpService } = require('@meetup/rsvp');
const { memberService } = require('@meetup/member');

const eventLoader = () => new DataLoader(ids => eventService.batchGet(ids));
const rsvpLoader = () => new DataLoader(ids => rsvpService.batchGet(ids));
const memberLoader = () => new DataLoader(ids => memberService.batchGet(ids));

const buildContext = ({ req }) => {
  if (process.env.DEBUG === 'true') {
    console.log(JSON.stringify(req.body, null, 2));
  }
  return {
    loaders: {
      events: eventLoader(),
      rsvps: rsvpLoader(),
      member: memberLoader()
    }
  };
};

module.exports = {
  buildContext
};
