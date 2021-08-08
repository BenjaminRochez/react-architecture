const { existsSync } = require('fs')
const path = require('path')
const log = require('pretty-log')
const { prompt } = require('inquirer')


const questions = require('./src/questions')


prompt(questions).then(({ kind, name }) => {
    console.log(kind, name)
})