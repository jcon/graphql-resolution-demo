const { get } = require('lodash');

const random = (min, max) => min + Math.random() * (max - min);
const delay = (minMs, maxMs) => new Promise((resolve) => setTimeout(resolve, random(minMs, maxMs)));

class DataService {
  constructor (entity, idField, data) {
    this.entity = entity;
    this.idField = idField;
    this.data = data;
  }

  async get (id) {
    console.log(`${this.entity}Service.get(${id})`);
    await delay(80, 100);
    return this.data.find(obj => get(obj, this.idField) === id);
  }

  async batchGet (ids) {
    console.log(`${this.entity}Service.batchGet(${ids})`);
    await delay(120, 140);
    return this.data.filter(obj => ids.includes(get(obj, this.idField)));
  }
}

module.exports = {
  DataService,
  delay
};
