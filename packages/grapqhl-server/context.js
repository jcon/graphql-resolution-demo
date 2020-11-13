const { eventLoader } = require('@meetup/event');
const { rsvpLoader } = require('@meetup/rsvp');
const { memberLoader } = require('@meetup/member');

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
