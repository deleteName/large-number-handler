'use strict'

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/large-number.js')
}
else {
    module.exports = require('./dist/large-number.min.js')
}