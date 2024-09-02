const fs = require('fs');
const path = require('path');
const basePath = __dirname.replace('scripts\\utility','');

function readFile(filePath, parseJson=false){
  const localPath = path.join(basePath, filePath);
  const contents = fs.readFileSync(localPath, 'utf8');

  if(parseJson == true){
    return JSON.parse(contents);
  }
  else {
    return contents;
  }
}

function writeFile(filePath, data){
  const localPath = path.join(basePath, filePath);
  fs.writeFileSync(localPath, JSON.stringify(data));
}

function appendToDatabase(data){
  const database = readFile('/db/db.json', true);
  database.push(data);
  writeFile('/db/db.json', database);
}

function deleteNoteFromDatabase(noteId){
  const database = readFile('/db/db.json', true);

  for (let i = 0; i < database.length; i++) {
    if(database[i].id == noteId){
      database.splice(i,1);
    }
  }

  writeFile('/db/db.json', database);
}

module.exports = { readFile, appendToDatabase, deleteNoteFromDatabase };