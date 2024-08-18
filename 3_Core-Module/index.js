// const fs =require('fs');
// fs.writeFileSync("hello.txt","code");

//global modules
console.log(" :::  ",__dirname);
console.log(" ::: ",__filename);

//can we export only a particular function?
//Yes(helps in performance)
const fs =require('fs').writeFileSync;
fs("hello2.txt","My code");
