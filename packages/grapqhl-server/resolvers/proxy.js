// Provides a utility for proxying a GraphQL resolver so we can trace when a given resolver is called.

// Field Proxy
class FieldProxy {
  constructor (typeName, fieldName) {
    this.typeName = typeName;
    this.fieldName = fieldName;
  }

  apply (target, thisArg, args) {
    console.log(`resolving ${this.typeName}.${this.fieldName}`);
    // detailed logging
    // console.log(`resolving ${this.typeName}.${this.fieldName} parent: [${JSON.stringify(args[0])}] args: [${JSON.stringify(args[1])}]`);
    return target(...args);
  }
}

function proxyTypes (types) {
  Object.keys(types).forEach(typeName => {
    Object.keys(types[typeName]).forEach(fieldName => {
      console.log(`attatching proxy to ${typeName}.${fieldName}`);
      types[typeName][fieldName] = new Proxy(types[typeName][fieldName], new FieldProxy(typeName, fieldName));
    });
  });
}

module.exports = {
  proxyTypes
};
