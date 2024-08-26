const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`

//Create
// fs.writeFileSync(filePath,'This is a Simple text file')

///////////////////////////////////////////////////////////
//Read
// fs.readFile(filePath,(arr,item)=>{
//     console.log(item);
// })

/* OUTPUT -
<Buffer 54 68 69 73 20 69 73 20 61 20 53 69 6d 70 
6c 65 20 74 65 78 74 20 66 69 6c 65>

INTERVIEW QUESTION  - WHY??
ANS-Buffer is a temp memory location to perform operation
    The second parameter of the callback contains the contents of the file as a string (if 'utf8' is used).
     If you didn’t specify the encoding, this parameter would be a Buffer object.
    When you specify 'utf8' as the encoding in fs.readFile(filePath, 'utf8', callback), Node.js reads the file and decodes its content into a JavaScript string using UTF-8 encoding.
     */
//SOLUTION

// fs.readFile(filePath,'utf8',(arr,item)=>{
//     console.log(item);  //This is a Simple text file
// })
/////////////////////////////////////////////////////////////
//UPDATE

// fs.appendFile(filePath,
//     ' and file name is apple.txt',
//     (err)=>{
//         if(!err) 
//             console.log("file is updated")
//     }
// )

/////////////////////////////////////////////////////////////
//RENAME FILE

// fs.rename(filePath,
//     `${dirPath}/fruit.txt`,
//     (err)=>{
//         console.log("file name is updated")
// })

/////////////////////////////////////////////////////////////
//DELETE

fs.unlinkSync(`${dirPath}/fruit.txt`)
