const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter Number`, (number) => {
      var x = eval(number)
    console.log(x)
    readline.close()
  })
  



// function fun(x){
//    var y = eval(x)
//    console.log(y)
// }
// fun(5+5*2-2)