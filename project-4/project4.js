//4. Создать новый проект. Написать код, который в корневой папке создает файл test.txt.
const fs = require("fs")

fs.writeFile((__filename, "test.txt"), " ", (err) => {
    if(!err) {
        console.log("Файл создан")
    }else {
        console.log(err.message)
    }
})

