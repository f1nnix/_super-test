path = require('path')

var FileKeeper = require('./filekeeper.js')
var ImageKeeper = require('./imagekeeper.js')

var imagekeeper = new ImageKeeper('img', {
  keepOriginal: false
})

imagekeeper.save(path.resolve('./img.jpg'))
  .then(function(meta) {
    console.log(meta);
  })
