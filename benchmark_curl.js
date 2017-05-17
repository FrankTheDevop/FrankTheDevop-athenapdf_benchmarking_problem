'use strict'

const { exec } = require('child_process')
const sleep = require('system-sleep')

const url = 'http://localhost:3000/convert?auth=key&url=http://www.heise.de'
const pathForDownload = 'pdf/'
let child

for(let i = 0; i < 50; i++) {
  console.log(`Iteration ${i} before exec`)
  child = exec(`curl "${url}" -o ${pathForDownload}${i}.pdf`,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    })
  console.log(`Iteration ${i} after exec`)
  sleep(100)
  console.log(`Iteration ${i} after sleep`)
}

