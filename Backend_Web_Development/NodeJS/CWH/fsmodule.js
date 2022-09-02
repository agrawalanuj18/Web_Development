const fs = require('fs');
 
fs.readFile('file.tct', 'utf8', (err,data)=>{
    console.log(err,data)
})

console.log("Finished Reading File.")