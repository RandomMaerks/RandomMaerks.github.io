const footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
    <meta charset="utf-8">
    <link href="/styles.css" rel="stylesheet">
    <footer>
        <div class="BLOB logo">&#37;&#32;</div>
        <p>
            Website is set in <a class="bold-on-hover" href="overused-grotesk"><u>Overused Grotesk</u></a><br>
            Email: <b>rmforbusiness@gmail.com</b><br>
            Socials:
            <a class="BLOB" href="https://github.com/RandomMaerks" target="_blank" rel="noopener">0</a>
            <a class="BLOB" href="https://randommaerks.gumroad.com/" target="_blank" rel="noopener">1</a>
            <a class="BLOB" href="https://www.instagram.com/randommaerks/" target="_blank" rel="noopener">3</a>
            <a class="BLOB" href="https://www.youtube.com/@randommaerks" target="_blank" rel="noopener">2</a>
            <a class="BLOB" href="https://www.behance.net/randommaerks" target="_blank" rel="noopener">4</a><br>
        </p>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('rdmk-footer', Footer);