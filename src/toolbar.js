export default function toolbar(...options) {

  let [ color, location, buttons ] = options

  const toolbar = document.createElement('toolbar')
  const toolbarContainer = document.createElement('toolbar-container')

  styleToolbar(toolbar, color)

  setLocation(toolbar, location)

  createButtons(toolbar, buttons)

  toolbarContainer.appendChild(toolbar)

  toolbarContainer.style.position = 'relative'
  toolbarContainer.style.zIndex = '999999'

  document.body.insertBefore(toolbarContainer, document.body.firstChild);


  return toolbar
}

function styleToolbar(toolbar, color = 'rgba(30, 145, 200, 0.7)') {

  toolbar.style.position = 'fixed'
  toolbar.style.margin = '0'
  toolbar.style.padding = '12px'
  toolbar.style.boxShadow = '0 2px 1px rgba(0, 0, 0, 0.125)'
  toolbar.style.backgroundColor = color
}

function setLocation(toolbar, location = 'top') {

  const width = '15%'

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
      toolbar.style.width = width
      toolbar.style.height = '100%'
      break
    case 'right':
      toolbar.style.right = '0'
      toolbar.style.top = '0'
      toolbar.style.width = width
      toolbar.style.height = '100%'
      break
  }
}

function createButtons(toolbar, buttons = [{
  label: 'toolbarjs',
  click: event => {
    console.log('Add some buttons!')
  }
}]) {
  buttons.forEach((button) => {

    const btnNode = document.createElement('button')

    btnNode.innerHTML = button.label

    btnNode.addEventListener('click', button.click)

    toolbar.appendChild(btnNode)
  })
}
