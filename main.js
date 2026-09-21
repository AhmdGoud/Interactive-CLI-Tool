import fs from "fs";
import { program } from "commander";
import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "fileName",
    message: "what is the file name",
  },
  {
    type: "input",
    name: "fileExtention",
    message: "what is the file extenion",
  },
];

program
  .name("CLI-Tool")
  .description("Simple Interactive CLI Tool")
  .version("1.2.4");

program
  .command("createFile")
  .description("create new file in the same folder")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      const fileName = answers.fileName;
      const fileExtention = answers.fileExtention;

      fs.writeFile(
        `./${fileName}.${fileExtention}`,
        "file from cli",
        "utf-8",
        (error) => {
          if (error) throw error;
        },
      );
    });
  });

program.parse();
