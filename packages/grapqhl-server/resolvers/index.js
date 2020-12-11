const { merge } = require('lodash');

const { proxyTypes } = require('./proxy');

const event = require('./event');
const member = require('./member');
const rsvp = require('./rsvp');

proxyTypes(event);
proxyTypes(member);
proxyTypes(rsvp);

module.exports = merge({}, event, member, rsvp);
