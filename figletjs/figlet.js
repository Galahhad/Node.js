//1. Создай новый проект. Разберись в библиотеке https://www.npmjs.com/package/figlet. Выведи преобразованный им текст в консоль.
const figlet = require("figlet");

figlet("Galahad", {
    font: "doh",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 200,
    whitespaceBreak: "fitted"
}, (err, data) => {
    if(!err) {
        console.log(data)
    }else {
        console.log(err)
    }
})