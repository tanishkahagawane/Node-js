const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
console.log(dirPath)

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"A new File");
// }

//read file
fs.readdir(dirPath,(arr,files)=>{
   // console.log(files)
    files.forEach((item)=>{
        console.log("File name is " + item)
    })
})