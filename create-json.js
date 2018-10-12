const dirTree = require('directory-tree');
var fs = require('fs');


const tree = dirTree('app/images/', ['.jpg', '.png'], (item, PATH) => {
});

fs.writeFile("app/scripts/json.json", JSON.stringify(tree), 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

