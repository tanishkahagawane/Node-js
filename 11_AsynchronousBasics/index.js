// console.log("Start  exe...");

// console.log("Logic  exe...");

// console.log("completed  exe...");


/////////////////////

// console.log("Start  exe...");

// setTimeout(()=>{
//     console.log("logic exe....")
// },2000)

// console.log("completed  exe...");

//////////////
//Drawback

// let a =10;
// let b=0;

// setTimeout(()=>{
//     b=20;
// },2000)

// console.log(a+b);  //10

//////////////
//solution : handle with callback or promise


let a =10;
let b=0;


let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
})

waitingData.then((data)=>{
    console.log(a+data)
})

//in some functions like fetch() promise are handled internally.