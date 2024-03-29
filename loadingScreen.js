class LoadingScreen extends HTMLElement {
    constructor() {
        // let htmlelement setup;
        super();
        // create shadow root
        this.root = this.attachShadow({mode: 'open'});

        const div = document.createElement('div');
        const img = getImg();
        const style = getStyle();
        const para = getPara();
        
        div.setAttribute('class', 'wrapper');
        
        div.appendChild(img);
        div.appendChild(para);
        this.root.appendChild(style);
        this.root.appendChild(div);
    }
}

function getImg() {
    const img = document.createElement('img');
    img.setAttribute('src', './img/rotate.png');
    img.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' },
    ], {
        duration: 1500,
        iterations: Infinity
    });

    return img;
}

function getStyle() {
    const style = document.createElement('style');
    style.textContent = `
        .wrapper {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-auto-rows: minmax(100px, auto);
            align-items: center;
            justify-items: center;
        }
        p {
            grid-column: 1 / -1;
        }
        img {
            grid-column: 6 / 8;
            grid-row: 1 / -1;
            height: 100px;
            width: 100px;
        }`;
    return style;
}

function getPara() {
    const para = document.createElement('p');
    para.innerText = "This color did not change to red";

    return para;
}
// create custom element
// when found this element in dom, load the class above to the element
customElements.define('loading-screen', LoadingScreen);
