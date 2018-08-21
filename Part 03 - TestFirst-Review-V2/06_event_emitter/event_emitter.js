class MyEventEmitter {
    constructor() {
        this.events = {};
    }

    addListener(event, callback) {
        //supports multiple callbacks for a single array
        
        if (this.events[event]){ //if event exists, push the function into array
            this.events[event].push(callback);
        } else { //if event doesn't exist, create new Array and push the function
            this.events[event] = [callback];
        }
    }

    emit(event) {
        //emit takes multiple arguments. Pass all arguments,
        //except the first (funcName) into the function being called

        let paramsArray = Array.from(arguments).slice(1);

        this.events[event].forEach(callback => {
            callback.apply(null, paramsArray);
          });
    }
}

// let eventEmitter = new MyEventEmitter();
// eventEmitter.addListener('greet', name => {
//     return 'Hello, ' + name + '!';
//   });

//   eventEmitter.addListener('greet', name => {
//     return 'How are you?';
//   });

// console.log('emitter', eventEmitter);
// console.log('isArray', Array.isArray(eventEmitter.events.greet));
// eventEmitter.emit('greet', 'Emily');

