let o = require('javascript-obfuscator')
let fs = require('fs')
let f = fs.readFileSync('asteroids.js')

let a = o.obfuscate(f, {controlFlowFlattening: true, deadCodeInjection: true})

fs.writeFileSync('asteroids.o.js', a)