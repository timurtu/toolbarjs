export default function toolbar(location = 'top',
                                width = '50px',
                                buttons = ['hello, toolbar!']) {
    const toolbar = document.createElement('toolbar');

    toolbar.style.position = 'fixed';
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
        toolbar.style.backgroundColor = 'yellow';
    }

    document.body.appendChild(toolbar);

}

