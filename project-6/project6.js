//6. Создать новый проект. Создай в папке проекта вложенную папку с названием data, а в ней файл test.txt с текстом "Hello world". Напиши код, который выводит содержимое этого файла в консоль (с помощью коллбека).
const path = require("path");
const fs = require("fs");

fs.mkdir(path.resolve(__dirname, "data"), (err) => {
  if (!err) {
    fs.writeFile(
      path.resolve(__dirname, "data", "test.txt"),
      "Hello world",
      (err) => {
        if (!err) {
          fs.readFile(
            path.resolve(__dirname, "data", "test.txt"),
            "utf-8",
            (err, data) => {
              if (!err) {
                console.log(data);
              } else {
                console.log(err);
              }
            }
          );
        }
      }
    );
  }
});
