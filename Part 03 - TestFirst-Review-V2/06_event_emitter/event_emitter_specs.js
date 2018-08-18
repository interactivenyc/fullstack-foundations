describe('MyEventEmitter Class', () => {
  let eventEmitter;

  beforeEach(() => {
    eventEmitter = new MyEventEmitter();
  });

  it('is an object', () => {
    expect(typeof eventEmitter).toBe('object');
  });

  it('has an "events" property', () => {
    expect(eventEmitter.hasOwnProperty('events')).toBe(true);
    expect(typeof eventEmitter.events).toBe('object');
  });

  it('has an "addListener" and "emit" property on its prototype', () => {
    expect(eventEmitter.hasOwnProperty('addListener')).toBe(false);
    expect(eventEmitter.hasOwnProperty('emit')).toBe(false);
    expect(typeof MyEventEmitter.prototype.addListener).toBe('function');
    expect(typeof MyEventEmitter.prototype.emit).toBe('function');
  });

  it('stores an "event" and a callback function in an Array', () => {
    eventEmitter.addListener('greet', name => {
      return 'Hello, ' + name + '!';
    });

    expect(Array.isArray(eventEmitter.events.greet)).toBe(true);

    const handlerFunction = eventEmitter.events.greet[0];

    expect(handlerFunction('Scott')).toBe('Hello, Scott!');
  });

  it('stores multiple "callback" functions for a single event', () => {
    eventEmitter.addListener('greet', name => {
      return 'Hello, ' + name + '!';
    });

    eventEmitter.addListener('greet', () => {
      return 'How are you?';
    });

    expect(Array.isArray(eventEmitter.events.greet)).toBe(true);
    expect(eventEmitter.events.greet.length).toBe(2);
    expect(typeof eventEmitter.events.greet[0]).toBe('function');
    expect(typeof eventEmitter.events.greet[1]).toBe('function');
  });

  it('stores multiple events', () => {
    eventEmitter.addListener('greet', name => {
      return 'Hello, ' + name + '!';
    });

    eventEmitter.addListener('bye', name => {
      return 'Bye, ' + name + '!';
    });

    eventEmitter.addListener('shout', phrase => {
      return phrase.toUpperCase() + '!';
    });

    expect(Object.keys(eventEmitter.events)).toEqual(['greet', 'bye', 'shout']);
  });

  it("the 'emit' property invokes the event listener for the specified event", () => {
    let greetingString;
    let byeString;
    eventEmitter.addListener('greet', name => {
      greetingString = 'Hello, ' + name + '!';
    });

    eventEmitter.addListener('bye', name => {
      byeString = 'Bye, ' + name + '!';
    });

    eventEmitter.emit('greet', 'Emily');
    expect(greetingString).toBe('Hello, Emily!');

    eventEmitter.emit('bye', 'Emily');
    expect(byeString).toBe('Bye, Emily!');
  });

  it("the emit function invokes each callback's apply method", () => {
    const callback = name => {
      return 'Hello, ' + name + '!';
    };

    spyOn(callback, 'apply').and.callThrough(); // checks if the apply method is called on the "callback" function

    eventEmitter.addListener('greet', callback);

    eventEmitter.emit('greet', ['Scott']);

    expect(callback.apply).toHaveBeenCalled();
  });

  it('the "emit" property invokes all callback functions for the specified event', () => {
    const values = [];
    const name = (name, name2) => {
      values.push('Hello, ' + name + '!' + ' My name is ' + name2 + '.');
    };
    const phrase = name => {
      values.push('How are you, ' + name + '?');
    };

    eventEmitter.addListener('greet', name);

    eventEmitter.addListener('greet', phrase);

    eventEmitter.emit('greet', 'Patrick', 'Karen');
    expect(values).toEqual([
      'Hello, Patrick! My name is Karen.',
      'How are you, Patrick?',
    ]);
  });
});
