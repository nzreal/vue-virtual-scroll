const Mock = require('mockjs')
const fs = require('fs')
const path = require('path')

var data = []
var Random = Mock.Random

for (var i = 0; i < 1000; i++) {
  data.push({
    id: i + 1,
    desc: Random.paragraph(1, 1),
  })
}

const [, pathName = './src/assets/mockArr.json'] = JSON.parse(
  process.env.npm_config_argv
).original

fs.writeFileSync(
  path.resolve(__dirname, pathName),
  JSON.stringify(data),
  () => {
    console.log('ok')
  }
)
