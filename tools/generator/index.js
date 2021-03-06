const { existsSync } = require("fs");
const path = require("path");
const log = require("pretty-log");
const { prompt } = require("inquirer");

const questions = require("./src/questions");
const copyFiles = require("./src/copyFiles");
const renameFiles = require("./src/renameFiles");
const updateFiles = require("./src/updateFiles");
const successInfo = require("./src/successInfo");
const linkToRouterReminder = require('./src/linkToRouterReminder');


function scaffold({ kind, name, dir }) {
  log.debug(`Scaffolding ${name} ${kind} in ${dir}`);
  return Promise.resolve({ kind, name, dir })
    .then(copyFiles)
    .then(renameFiles)
    .then(updateFiles)
    .then(successInfo)
    .then(log.success)
    .catch(log.error);
}

function initialize({ kind, name }) {
  const dir = path.resolve(path.join("src", `${kind}s`, name));
  console.log(dir);
  if (!existsSync(dir)) {
    return scaffold({ kind, name, dir });
  }
  throw new Error(`The ${kind} "${name}" already exists in ${dir}`);
}

prompt(questions).then(({ kind, name }) => {
  if (kind === 'route') {
    // scaffold both a Container and a Page
    initialize({ kind: 'container', name })
      .then(() => initialize({ kind: 'page', name }))
      .then(() => log.success(linkToRouterReminder({ name })))
      .catch(log.error)
  } else {
    initialize({ kind, name }).catch(log.error)
  }
})
