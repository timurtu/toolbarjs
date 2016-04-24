# toolbarjs
    npm install toolbarjs
    // or
    jspm install toolbarjs

Then in your project

```javascript
  import toolbar from 'toolbarjs'

  toolbar()
```
Try giving your toolbar different color

```javascript
  toolbar('red')
```

```javascript
  toolbar('blue')
```

```javascript
  toolbar('rgba(22, 120, 150, 0.62)')
```

Then give it a location

```javascript
    toolbar(

      'rgba(22, 120, 150, 0.62)',

      'left' // default is top
    )
```

Finally, define an array of buttons!

```javascript
    toolbar(

      'rgba(22, 120, 150, 0.62)',

      'left', // default is top

      [{
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
      }]
    )
```
