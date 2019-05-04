document.getElementById("button").addEventListener("click", increment);

fetch('http://localhost:5000/')
    .then(function(response) {
        return response.text()
        .then(function(blob){
            document.getElementById("count").innerHTML = blob
            console.log(blob)
        })
    })


//promise chaining
function increment (){
    fetch('http://localhost:5000/', {method: "POST"})
        .then(function(response) {
            return response.text()
        })
        .then(function(blob){
            document.getElementById("count").innerHTML = blob
            console.log(blob)
        })
}

//async/await
//async await is a new thing. It is a promise
// async function increment (){
//     try{
//         console.log ("passed")
//         const response = await fetch('http://localhost:5000/', {method: "POST"})
//     } catch (failed) {
//         console.log("failed")
//     }

//     const blob = await response.text()
//     //instead of passing a response function, you give a variable. So when it succeeds, it just spits response
    
//     //if I fail, I need to make try-catch
    
    
    
//     document.getElementById("count").innerHTML = blob
//     console.log(blob)
// }


//this line does the incrementing if it's called


//promise here are lines 1, 3, 11, 13
//fetch returns a promise and so does text
    
// const promys = new Promise (function (resolve, reject){
//     console.log("why is printing hello world so hard in this language")
//     if (true){
//         reject("failed")
//     } else {
//         resolve("passed")
//     }
// })

// function responding(response){
//     console.log(response)
// }

// function catchError(errorMessage){
//     console.log(errorMessage)
// }

// promys().then(responding).catch(catchError)

//Run promys. If it resolves, run responding. If it fails run catchError