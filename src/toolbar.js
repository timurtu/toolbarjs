export default function toolbar(color = 'rgba(74, 195, 184, 0.62)', location = 'top',
                                buttons = [{
                                  label: 'goodbye, toolbar!',
                                  click: function (event) {
                                    console.log(`Clicked on the button ${this.label}. And the event ${event}.`)
                                  }
                                }]) {

  const toolbar = document.createElement('toolbar')

  styleToolbar(toolbar, color)

  setLocation(toolbar, location)

  createButtons(toolbar, buttons)

  document.body.appendChild(toolbar);
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
      break
  }
}

function createButtons(toolbar, buttons) {
  buttons.forEach((button) => {
    const btnNode = document.createElement('button')
    btnNode.textContent = button.label
    btnNode.onclick = event => button.click
    toolbar.appendChild(btnNode)
  })
}

