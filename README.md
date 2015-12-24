#### Objectives

* students will know how to install `npm` packages and require dependancies
* students will know how to create a simple express server in nodejs
* students will understand differences between HTTP `GET`, `PUT`, `POST` and `DELETE` methods

###### Instructor (10 mins)
* Explain `npm` basics
  * `npm init`
  * `npm install (--save[-dev])`
  * `node_modules` directory

* Explain how to `require()` and invoke modules and files
  * `module.exports = fn()`
  * `exports[property] = fn()`
  * (touch on require() cache?)

  ```js
  // index.js
  var express = require('express');
  var app = express();

  var startup = require('./startup')(app);
  startup();

  // startup.js
  var app;
  module.exports = function(obj) {
    app = obj;
    return startup;
  }

  function startup() {
    app.listen(8080, function() {
      console.log('Server started on http://localhost:8080');
    });
  }
  ```

* Partner Critical Thought: Advantages of breaking up files (vs. everything in one giant file)?
  * Readibility
  * DRY
  * Separation of conerns
  * etc. etc.

###### Students (15 mins)
Install and require `express` and `body-parser`
```bash
npm init
npm install express body-parser --save
```

```js
var express = require('express');
var app = express();

app.listen(8080, function() {
  console.log('Server started on http://localhost:8080');
});
```

###### Instructor (10 mins)
* Explain differences between HTTP methods `GET`, `PUT`, `POST` and `DELETE`
* Watch me example: Twitter API (`GET`, `POST` examples) via dev tools inspector