// Step 1: Create a Vue instance
const Vue = require('vue')
const app = new Vue({
  template: `<div :style="{'--works-as-expected-but-not-in-my-convention': '1px', '--notWorkinAtAll': 2, '--getsKebapCased': '2', '--getsKabapCasedToo': '1px'}">Hello World</div>`
})

// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer()

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})
