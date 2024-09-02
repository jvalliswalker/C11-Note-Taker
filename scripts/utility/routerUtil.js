const fs = require('fs');
const path = require('path');

function readFile(filePath, parseJson=false){
  const localPath = path.resolve(__dirname, filePath);
  console.log(localPath)
  const contents = fs.readFileSync(localPath);

  if(parseJson == true){
    return JSON.parse(contents);
  }
  else {
    return contents;
  }
}

module.exports = readFile;