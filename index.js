
var path = require('path');
var fs = require('fs');
var jade = require('jade');

var files = {
  login: [
    'login',
    'logout',
    'two-factor'
  ],
  signup: [
    'expired',
    'post',
    'resend',
    'signup',
    'success'
  ],
  delete: [
    'delete',
    'post'
  ],
  forgot: [
    'expired',
    'forgot',
    'new',
    'post',
    'success'
  ]
}

function render(module, file) {
  var options = {
    pretty: true,
    basedir: './'
  }
  var i = path.join(module, file + '.jade');
  var html = jade.renderFile(i, options);
  var o = path.join(module, file + '.html');
  fs.writeFileSync(o, html);
}

Object.keys(files).forEach(function(module) {
  files[module].forEach(function(file) {
    render(module, file)
  });
});
