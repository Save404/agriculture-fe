#!/usr/bin/env node

const { spawn } = require('child_process')
const chalk = require('chalk')

function startMysql() {
  const sql = spawn('mysql.server', ['start'])
  sql.stdout.on('data', function(data) {
    console.log(chalk.blue(data.toString()))
  })
  sql.on('exit', function(code) {
    if (code === 0) {
      setTimeout(function() {
        console.log(chalk.green('...MySQL And Redis configuration SUCCESS!'))
      }, 1000)
    }
  })
}

function startRedis() {
  const redis = spawn('redis-server', ['/usr/local/etc/redis.conf'])
  redis.stdout.on('data', function(data) {
    console.log(chalk.cyan(data.toString()))
  })
}

const pm = new Promise((resolve, reject) => {
  console.log(chalk.green('...ZYSzys env configuration START!'))
  resolve()
})

pm.then((res) => {
  return startMysql()
}).then((res) => {
  startRedis()
})

