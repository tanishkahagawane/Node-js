console.log("Command Line Inputs")
// console.log(process);

console.log(process.argv);

/*
node index.js 100
Command Line Inputs
[
  'C:\\Program Files\\nodejs\\node.exe',
  'G:\\MY_STUDY\\2024\\Node-js\\8_CommandLineInput\\index.js',
  '100'
]
*/

console.log(process.argv[2]);  //100