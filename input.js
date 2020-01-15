const setupInput = function(callback) {
  const stdin = process.stdin; //allows you to input data straight from keyboard when you run program
  stdin.setRawMode(true); // set up to handle data from keyboard
  stdin.setEncoding('utf8'); // set up to handle data from keyboard
  stdin.resume();
  stdin.on('data', callback); //handles the data
  return stdin;
};

const handleUserInput = function(data){
  if (data === '\u0003') {
  process.exit();
}
};

module.export = { setupInput };