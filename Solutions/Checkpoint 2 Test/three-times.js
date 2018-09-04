const threeTimes = func => {
  let counter = 0;
  return () => {
    if (counter < 3) {
      counter++;
      return func();
    }
  };
};