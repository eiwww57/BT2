var fs = require('fs');
fs.readFile('./note.txt' , (err,data) => {
if (err){
    console.log('--Error');
}
    else {
console.log('Data file : \n',data.toString());
    }
}
)