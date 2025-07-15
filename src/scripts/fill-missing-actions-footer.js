const fs = require('fs')
const path = require('path')

const affected = [
  'bg','cs','da','el','et','fi','he','hr','hu','it','ja','kn','lt','lv','nl','no','pa','ro','sk','sl','sr','sv','zh'
]
const messagesDir = path.join(process.cwd(), 'src', 'messages')
const en = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'))
const fallbackActions = en.common.actions
const fallbackFooter = en.common.footer

affected.forEach(code => {
  const file = path.join(messagesDir, `${code}.json`)
  if (!fs.existsSync(file)) return
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  if (!json.common) json.common = {}
  if (!json.common.actions || Object.keys(json.common.actions).length === 0) json.common.actions = fallbackActions
  if (!json.common.footer || Object.keys(json.common.footer).length === 0) json.common.footer = fallbackFooter
  fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8')
  console.log(`Filled actions/footer for ${code}`)
}) 