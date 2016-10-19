/**
 * basicAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
const username = "admin"
const password = process.env.ADMIN_KEY

var auth = require('http-auth');
var basic = auth.basic({
      realm: "admin area"
  }, function (username, password, onwards) {
      onwards(username === username && password === password);
  }
)

module.exports = auth.connect(basic)

