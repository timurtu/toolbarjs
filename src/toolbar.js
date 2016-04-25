export default function toolbar(...options) {

  let [ color, location, buttons ] = options

  // color = rgba(30, 145, 200, 0.7),
  //   location = 'top',
  //

  const toolbar = document.createElement('toolbar')

  styleToolbar(toolbar, color)

  setLocation(toolbar, location)

  createButtons(toolbar, buttons)

  document.body.insertBefore(toolbar, document.body.firstChild);

  return toolbar
}

function styleToolbar(toolbar, color) {
  toolbar.style.position = 'fixed'
  toolbar.style.margin = '0'
  toolbar.style.padding = '12px'
  toolbar.style.boxShadow = '0 2px 1px rgba(0, 0, 0, 0.125)'
  toolbar.style.backgroundColor = color
}

function setLocation(toolbar, location) {
  switch (location) {
    case 'top':
      toolbar.style.top = '0'
      toolbar.style.left = '0'
      toolbar.style.width = '100%'
      break
    case 'bottom':
      toolbar.style.bottom = '0'
      toolbar.style.left = '0'
      toolbar.style.width = '100%'
      break
    case 'left':
      toolbar.style.left = '0'
      toolbar.style.top = '0'
      toolbar.style.width = '15%'
      toolbar.style.height = '100%'
      break
    case 'right':
      toolbar.style.right = '0'
      toolbar.style.top = '0'
      toolbar.style.width = '15%'
      toolbar.style.height = '100%'
      break
  }
}

function createButtons(toolbar, buttons = [{
  label: 'tbjs',
  click: event => {
    console.log(event)
  }
}]) {
  buttons.forEach((button) => {
    const btnNode = document.createElement('button')
    btnNode.innerHTML = button.label
    btnNode.addEventListener('click', button.click)
    toolbar.appendChild(btnNode)
  })
}

