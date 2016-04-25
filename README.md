# toolbarjs
You can install toolbarjs as a node module
```
npm install toolbarjs
```
You can also install toolbarjs as a jspm dependency
```
jspm install npm:toolbarjs
```
Then in your project

```javascript
import toolbarjs from 'toolbarjs'

let buttons = [
  {
    label: 'Foo',
    click: event => {
      console.log('Foo was clicked.')
    }
  },
  {
    label: 'Bar',
    click: event => {
      console.log('Bar was clicked.')
    }
  }
]

let toolbar = toolbarjs(

  'rgba(22, 120, 150, 0.62)', // color

  'top', // location: top, bottom, left, or right

   buttons // Array of button objects

)

console.log(toolbar)
```

###Using Icons

Include an Icon Library e.g [Font Awesome](https://fortawesome.github.io/Font-Awesome/) in your library.

Then set your button's label like this
```javascript
label: '<i class="fa fa-plus"></i>'
```