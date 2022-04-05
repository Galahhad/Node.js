//5. Создать новый проект. Создать в папке проекта файл test.txt с текстом "Hello world". Написать код, который выводит содержимое этого файла в консоль.
const fs = require("fs");
const path = require("path")

fs.writeFile(path.resolve(__dirname, "test.txt"), "Hello world", (err) => {
    if(!err) {
        console.log("Файл создан")
    }else {
        console.log(err.message)
    }
})
fs.readFile(path.resolve(__dirname, "test.txt"), "utf-8", (err, data) => {
    if(!err) {
        console.log(data)
    }else {
        console.log(err.message)
    }
})