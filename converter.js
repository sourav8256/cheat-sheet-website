const { SIGUSR1 } = require('constants');

var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'samplefile');

var content = fs.readFileSync(filePath, {encoding: 'utf-8'});
//console.log(content.toString()[0]);
var lineArray = content.split('\r\n');
var output = {};


var i=0;

// while(true){

//     var line = lineArray[i];
//     if(line.split(":")[0] == '#'){

//         while(line.split(":")[0] != '#' || line != '[eol]'){

//             break;

//         }

//         if(line.split(":")[2] == '[]'){

//         }

//         line = line.substring(1);
//         output[line.split(':')[1]] = line.split(':')[2];
        
//     }

//     i++;
//     if(i>=lineArray.length){
//         break;
//     }
// }

// function getFistLevel(){
    
//     while(i<lineArray.length){
//         var line = lineArray[i];
//         if(line.split(":")[0] == '#'){
//             console.log(lineArray[i]);
//         }
//         i++;
//     }
// }

// getFistLevel();



var line = lineArray[i];
var output = {};

if(line.split(":")[0] == '#'){
    
}

//console.log(JSON.stringify(output,null,2));
