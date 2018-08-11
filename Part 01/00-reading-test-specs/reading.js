let FILL_ME_IN = "VALUE";

function hello(name) {
  if (typeof name === 'undefined') {
    FILL_ME_IN = 'Hello!';
    return 'Hello!';
  } else {
    FILL_ME_IN = `Hello, ${name}!`;
    return `Hello, ${name}!`;
  }
}

function add(number, num) {
  return number + num;
}
