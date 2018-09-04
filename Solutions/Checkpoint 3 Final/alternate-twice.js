const alternate = fn => {
  let wasJustInvoked = false;

  return () => {
    if (!wasJustInvoked) {
      fn();
    }

    wasJustInvoked = !wasJustInvoked; // Flip the boolean
  };
};

const twice = fn => {
  let numInvoked = 0;

  return () => {
    numInvoked++;

    if (numInvoked < 3) {
      return fn();
    } else {
      return 0;
    }
  };
};