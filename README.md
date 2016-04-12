# toolbarjs
Toolbar for any browser application

`npm install toolbarjs --save`

or

`jspm install toolbarjs`

Then

```javascript
import toolbar from 'toolbarjs';

toolbar();
```
Configure your toolbar

```javascript
toolbar('#fff', 'top', ['hey there', 'what', 'do', 'you', 'want']);
```

Pass in a color, location, and buttons

```javascript
  toolbar(
    'rgba(22, 120, 150, 0.62)', // color
    'top', // location: left, right, or bottom
    ['first', 'second'] // array of buttons
  );
```
