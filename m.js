//import event module
var events = require("events");
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection',() => {});

eventEmitter.emit("connection");
// count the number of listener to this event
eventListeners = eventEmitter.listenerCount("connection");

console.log(eventListeners + " Listner(s) listening to connection event");
