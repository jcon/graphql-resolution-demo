const { mergeTypeDefs } = require('@graphql-tools/merge');

const member = require('./member.graphql');
const event = require('./event.graphql');
const rsvp = require('./rsvp.graphql');

module.exports = mergeTypeDefs(
  [
    member,
    event,
    rsvp
  ],
  {
    all: true
  }
);
