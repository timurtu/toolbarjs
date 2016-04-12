export default function toolbar(color = 'rgba(74, 195, 184, 0.62)',
                                location = 'top',
                                width = '50px',
                                buttons = ['hello, toolbar!']) {
    const toolbar = document.createElement('toolbar');

    toolbar.style.position = 'fixed';
    toolbar.style.margin = '0';
    toolbar.style.padding = '12px';
    toolbar.style.boxShadow = '0 2px 1px rgba(0, 0, 0, 0.125)';
    toolbar.style.backgroundColor = color;

    // Set location
    if (location == 'top') {

        styleTop();

    } else if (location == 'bottom') {

    }

    function styleTop() {
        toolbar.style.top = '0';
        toolbar.style.left = '0';
        toolbar.style.width = '100%';
        toolbar.style.height = width;
    }

    buttons.forEach((button) => {
        const btnNode = document.createElement('button');
        btnNode.textContent = button;
        toolbar.appendChild(btnNode);
    });

    document.body.appendChild(toolbar);

}

