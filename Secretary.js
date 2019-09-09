const fs = require('fs');

module.exports = function writer(data){

    fs.writeFile('form.txt', data, (err) => {
        if (err){
            console.log(err);
        } 
              console.log('The file has been saved!');
      });

}

module.exports = function reader(){

    fs.readFile('./form.txt', (err, data) => {
        if (err){
            console.log(err);
        }
        console.log(data.toString());
      });

}
