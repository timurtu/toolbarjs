# toolbarjs
Toolbar for any browser application

`npm install toolbarjs --save`

Then 

```javascript
  const toolbar = require('toolbarjs');
  
  toolbar(
    'top', // location: left, right, or bottom
    '20px', // width or height: depending on location
    ['first','second'] // array of buttons
  );
```
