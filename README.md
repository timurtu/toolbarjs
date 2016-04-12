# toolbarjs
Toolbar for any browser application

`npm install toolbarjs`

Then 

```javascript
  const toolbar = require('toolbarjs');
  
  toolbar({
    location: 'top', // left, right, or bottom
    width: '20px',
    buttons: ['first','second'],
    stretch: true
  });
```

Or

```javascript
  toolbar({
    buttons: [
      first: () {
        doThing();
      },
      second: {
        doOtherThing();
      }
    ]
  });
```
