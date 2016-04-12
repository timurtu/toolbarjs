# toolbarjs
Toolbar for any browser application

`npm install toolbarjs --save`

Then

```javascript

import toolbar from 'toolbarjs'; // es6
toolbar();

```


```javascript

toolbar('#fff', 'top', ['hey there', 'what', 'do', 'you', 'want']);

```

```javascript

  const toolbar = require('toolbarjs'); // common js
  
  toolbar(
    'rgba(22, 120, 150, 0.62)', // color
    'top', // location: left, right, or bottom
    ['first','second'] // array of buttons
  );
  
```
