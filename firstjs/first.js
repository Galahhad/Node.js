//2. Создай новую папку. Создай в ней файл first.js, в котором будет одна функция и две переменные. Экспортируй их.

function hello () {
    return "Hello"
}

let lorem = "lorem"
let ipsum = "ipsum"

module.exports = { hello, lorem, ipsum }