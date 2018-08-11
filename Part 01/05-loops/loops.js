function repeat(string, num) {
    let outString = "";
    for (let i = 0; i<num; i++) {
        outString += string;
    }
    return outString;
}

function sum(array) {
    let total = 0;
    for (let i = 0; i<array.length; i++) {
        total += array[i];
    }
    return total;
}

function join(array, delim="") {
    let outString = "";""
    for (let i = 0; i<array.length; i++) {
        outString += array[i];
        if (i < array.length -1) outString += delim;        
    }
    return outString;
}

function gridGenerator(size) {
    console.log("makeGrid:", size);
    
    let grid = "";

    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
            if ((i+j)%2 === 0) {
                grid += "#";
            }else{
                grid += " ";
            }
        }
        grid += "\n";
        console.log(i + "\n" + grid);
    }

    console.log(grid);
    return grid; 
}

function paramify(obj) {
    console.log("paramify", obj);

    let procArray = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            procArray.push(key + "=" + obj[key]);
        }
    }

    procArray.sort();
    let outString = procArray.join("&");

    console.log("outString", outString);
    
    return outString;
    
}

// function paramifyObjectKeys(obj) {
//     console.log("paramifyObjectKeys", obj);

//     let keys = Object.keys(obj);
//     keys.sort();

//     let procArray = [];
//     for (let i=0; i<keys.length; i++) {
//         procArray.push(keys[i] + "=" + obj[keys[i]]);
//     }

//     let outString = procArray.join("&");

//     console.log("outString", outString);
    
//     return outString;
// }

const paramifyObjectKeys = obj => {
    return Object.keys(obj)
        .map(key => {
        return `${key}=${obj[key]}`;
        })
        .sort()
        .join('&');
};

// function renameFiles(fileArray) {
//     console.log("fileArray", fileArray);

//     function renameInstances(str) {
//         let instances = [];
//         for (let i=0; i<fileArray.length; i++) {
//             if (str === fileArray[i]) instances.push(i)
//         }
//         if (instances.length > 1){
//             for (i=1; i<instances.length; i++) {
//                 fileArray[instances[i]] = fileArray[instances[i]] + "(" + (i) + ")";
//             }    
//         }
//     }

//     for (let i=0; i<fileArray.length; i++) {
//         if (fileArray[i].indexOf("(") === -1)(
//             renameInstances(fileArray[i])
//         )
//     }

//     console.log(fileArray);
    
//     return fileArray;
// }

const renameFiles = arrayOfFilenames => {
    const nameTracker = {};
    const namer = (fileName, num) => `${fileName}(${num})`;
  
    return arrayOfFilenames.map(name => {
      // extension name
      let extension = nameTracker[name] || 0;
      // how many times filename is used
      nameTracker[name] = extension + 1;
      // 0 return true, if not proceed...
      if (!extension) {
        return name;
      }
      // while the key exists
      let keyName = namer(name, extension);
      while (nameTracker[keyName] || arrayOfFilenames.indexOf(keyName) > -1) {
        keyName = namer(name, extension++);
      }
      nameTracker[keyName] = 1;
      return keyName;
    });
  };
  