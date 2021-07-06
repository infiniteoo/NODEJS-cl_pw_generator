const program = require("commander");
const log = console.log;
const createPassword = require("./utils/createPassword");
const chalk = require("chalk");

program.version("1.0.0").description("Simple Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// get generated password

const generatedPassword = createPassword(length, numbers, symbols);

// output generated password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
