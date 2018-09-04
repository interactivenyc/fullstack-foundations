const createFunctions = (n) => {
  let callbacks = [];
  
  const factory = (x) => {
    return () => {
      return x;
    };
  };

  for (let i=0; i<n; i++) {
    callbacks.push(factory(i));
  }
  
  return callbacks;
}