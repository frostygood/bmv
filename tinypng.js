const fs = require('fs');
const sortobject = require('deep-sort-object');
const tinify = require("tinify");
const keys = ["BnK9JQ96wfZ8cxtxx8pCYGFcmCfQ1ghs", 
            "VpmLpyDjb0MwGLm1mQQlRt7zSwWFrtzB",
            "N2VV83xqkM2D8G8zymDVT9T4pnzwS4Qr",
            "8NrsD6kqnytYMJMqBD0QSDBx86mL3RJR",
            "G1ts1C8hL1S5mzZkS6Zd1H7bNRK5FGby",
            "00v9Hn3gQJ0vCGtKgPW81ly4YdzkDbKz",
            "tvtpS6cDlzgQw4qYHZgpwbL8STzgWX4P",
            "5LnH3RyTX7vGfVBn42STQdj7vJGWBm4V",
            "Zj2NzhTJMZrSYp36dVD7439QmZf5x0Lw",
            "Rnbldn1MMdhKr1r115FFBK0g3PqRzpGh"];
let numKeys = randomInteger(0, 8);
tinify.key = keys[numKeys];

// ключ не хочет динамически меняться
// function upNumKey() {
//     if (numKeys >= 9) numKeys = 0
//     else numKeys++
//     tinify.key = keys[numKeys];
//     console.log('Поменяли ключ ' + numKeys + ' - ' + keys[numKeys] + ' - ' + tinify.compressionCount)
// }

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function escape (key, val) {
    if (typeof(val)!="string") return val;
    return val.replace(/\\n/g, "\n");
}
// функция проверки наличия элемента в массиве
function contains(arr, elem) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].file === elem) {
			return true;
		}
	}
	return false;
}
// Получение и парсинг json с активной базой адресов файлов
function parseFile(dirFile) {
	let a = fs.readFileSync(dirFile, 'utf8');
	a = a.trim();
	a = JSON.parse(a);
	let b = [];
	a.forEach(function (item, i, a) {
		b.push(item);
	});
	return b;
}
function getFiles(dir, files_) {
	files_ = files_ || [];
    let files = fs.readdirSync(dir);
	for (let i in files) {
		let name = dir + '/' + files[i];
		if (fs.statSync(name).isDirectory()) {
			getFiles(name, files_);
        } else if (contains(files_, name)){
            //console.log(name + " - есть в базе")
		} else if (/\.png$/.test(name)) {
			files_.push({
                "file": name, 
                "size": fs.statSync(name).size,
                "type": "png",
                "tiny": false,
                "size_tiny": 0
            });
        } else if (/\.jpg$/.test(name)) {
            files_.push({
                "file": name, 
                "size": fs.statSync(name).size,
                "type": "jpeg",
                "tiny": false,
                "size_tiny": 0
            });
        } else if (/\.jpeg$/.test(name)) {
            files_.push({
                "file": name, 
                "size": fs.statSync(name).size,
                "type": "jpeg",
                "tiny": false,
                "size_tiny": 0
            });
        }
	}
	return files_;
}
function saveArrFiles(obj, path) {
    let json = JSON.stringify(sortobject(obj), escape, 4);
    fs.writeFile (path, json, function(err) {
        if (err) throw err;
            console.log('complete ' + path);
            //console.log(json);
        }
    );
}
function workingTinyPng(arr) {
    tinify.validate(function(err) {
        if (err) throw err;
        else {
            compressionTinyPng(arr).then(()=> {
                console.log('Закончили сжимать jpg и png')
                clearingTinyJson()
            })
        }
      })
}
async function compressionTinyPng(arr) {
    for (const item of arr) {
        if (tinify.compressionCount > 400) {
            console.log('кончилась квота на ключе ' + keys[numKeys] + ', перезапустите скрипт')
            return
        }
        else if (!item.tiny) {
            await tinify.fromFile(item.file).toFile(item.file).then(()=>{
                item.tiny = true
                item.size_tiny = fs.statSync(item.file).size
                console.log(item)
                console.log(tinify.compressionCount)
                saveArrFiles(arr, './tinypng.json')
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
function clearingTinyJson() {
    let filesJson = parseFile('./tinypng.json')
    let filesRepo = getFiles('./static').map(item => item.file)
    for (let i in filesJson) {
        if (!filesRepo.includes(filesJson[i].file)) {
            console.log(filesJson[i])
            filesJson.splice(i, 1)
        }
    }
    saveArrFiles(filesJson, './tinypng.json')
    console.log('сделали чистку tinypng.json от несуществующих файлов')
}

workingTinyPng(getFiles('./static', parseFile('./tinypng.json')))

