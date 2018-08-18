## Event Emitter

An event emitter triggers an event to which anyone can listen. Different JS libraries offer different implementations of an Event Emitter for different purposes, but the basic idea is to provide a framework for issuing events and subscribing to them.

This demonstrates all the basic functionality of an EventEmitter. The `on` aka `addListener` method (basically the subscription method) allows you to register an event to watch for and the callback function will execute when the event is triggered.

The `emit` method (the publish method), on the other hand, allows you to "emit" (register) an event, which causes all callbacks registered to the event to 'fire', (get called).

#### Additional Info:

When triggered with arguments, it passes all the arguments to each callback, not one to each corresponding listener.

A good example is Backbone's event system:
http://backbonejs.org/#Events-trigger

Node's `EventEmitter` also works like this.

```javascript
const EventEmitter = require('events');

const events = new EventEmitter();

events.on('event', (a, b, c) => {
  console.log(a,b,c);
});
events.on('event', (a, b, c) => {
  console.log(c,b,a);
});
events.emit('event', 'a', 'b', 'c');
```

logs out:
a b c
c b a


This exercise is designed to provide a general idea on "what an event emitter is". When you learn and use event emitters, you should have a basic understanding on how it works, but you will still have a lot to learn about Event Emitters!
