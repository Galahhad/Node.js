// 2. Создай новый проект. Разберись в библиотеке https://www.npmjs.com/package/figlet. Сохрани преобразованный им текст в файл ascii.txt.
// Каждый раз при перезапуске проекта новое добавление должно происходить в конец файла, не удаляя предыдущий контент.
const path = require("path")
const fs = require("fs");
const figlet = require("figlet");

fs.appendFile(path.resolve(__dirname, "ascii.txt"), figlet.textSync(" say ", {font: "doh"}), (err) => {
    if(!err) {
        console.log("Файл записан")
    }else {
        console.log("Что-то пошло не так...")
    }
})

