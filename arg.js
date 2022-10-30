const fs = require('fs')


const data  = async () => {
  await fs.readFile('starter.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
};
data();






