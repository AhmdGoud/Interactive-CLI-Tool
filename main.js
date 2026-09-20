// process.argv : an array of the keywords in a command line
// process means the excutable file we are in and argv are the arguments

const args = process.argv;

if (args[2] === "log") {
  console.log("logging as u ask");
} else {
  console.log("wrong write");
}
