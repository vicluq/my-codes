// Instalar o pacote que permite trabalhar mais ricamente -> "node-schedule"
const ns = require("node-schedule");
const fs = require("fs");

const job1 = ns.scheduleJob("20 51 13 24 * 5", function () {
  console.log("hi!");
});

function moveFilesFromFolder(path) {
  fs.readdir(`${path}`, { encoding: "utf-8" }, (error, files) => {
    if (error) {
      console.error(error);
    } else {
      console.log(files);
      const filesWithtypes = files.map((file) => file.split("."));
      console.log(filesWithtypes); //[[name, type], [name2, type2]...]

      filesWithtypes.forEach((file) => {
        if (file[1] == "jpg" || file[1] == "png") {
          fs.rename(
            downPath + `${file[0]}.${file[1]}`,
            "C:\\Users\\Victo\\OneDrive\\Imagens\\" + `${file[0]}.${file[1]}`,
            (err) => {
              console.error(err);
            }
          );
        } else if (file[1] == "txt" || file[1] == "zip" || file[1] == "json") {
          fs.rename(
            downPath + `${file[0]}.${file[1]}`,
            "C:\\Users\\Victo\\OneDrive\\Documentos\\" +
              `${file[0]}.${file[1]}`,
            (err) => {
              console.error(err);
            }
          );
        } else if (file[1] == "mp4" || file[1] == "avi" || file[1] == "mov") {
          fs.rename(
            downPath + `${file[0]}.${file[1]}`,
            "C:\\Users\\Victo\\Videos\\" + `${file[0]}.${file[1]}`,
            (err) => {
              console.error(err);
            }
          );
        }
      });
    }
  });
}
