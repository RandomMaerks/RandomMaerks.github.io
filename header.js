const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
    <meta charset="utf-8">
    <link href="/styles.css" rel="stylesheet">
    <header>
        <a class="BLOB highlight2" href="/">^&#32;<span class="OG">RandomMaerks&nbsp</span></a><br>
        <div class="right">
            Socials<br>
            <a class="BLOB" href="https://github.com/RandomMaerks" target="_blank" rel="noopener">0</a>
            <a class="BLOB" href="https://randommaerks.gumroad.com/" target="_blank" rel="noopener">1</a>
            <a class="BLOB" href="https://www.instagram.com/randommaerks/" target="_blank" rel="noopener">3</a>
            <a class="BLOB" href="https://www.youtube.com/@randommaerks" target="_blank" rel="noopener">2</a>
            <a class="BLOB" href="https://www.behance.net/randommaerks" target="_blank" rel="noopener">4</a><br>
        </div>	
        <div>
            Typefaces<br>
            <div class="dropdown">
                <div class="black-on-hover">→ Retail</div>
                <div class="dropdown-content">
                    <a href="/typefaces/random-grotesque">
                        <span class="dropdown-subtitle">v2.1</span>
                        Random Grotesque
                    </a>
                    <a href="/typefaces/ultramono">
                        <span class="dropdown-subtitle">v2.0</span>
                        Ultramono
                    </a>
                    <a href="/typefaces/outreque">
                        <span class="dropdown-subtitle">v1.1</span>
                        Outreque
                    </a>
                </div>
            </div><br>
            <div class="dropdown">
                <div class="black-on-hover">→ Free/FOSS</div>
                <div class="dropdown-content">
                    <a href="/typefaces/hebdomadal">
                        <span class="dropdown-subtitle">v1.0</span>
                        Hebdomadal
                    </a>
                    <a href="/typefaces/overused-grotesk">
                        <span class="dropdown-subtitle">v0.5-alpha-2</span>
                        Overused Grotesk
                    </a>
                    <a href="/typefaces/phlatt">
                        <span class="dropdown-subtitle">v1.0</span>
                        Phlatt Grotesk
                    </a>
                </div>
            </div><br>
            <div class="dropdown">
                <div class="black-on-hover">→ Other</div>
                <div class="dropdown-content">
                    <a href="https://github.com/RandomMaerks/Random-Typeface-Assortment" target="blank_" rel="noopener">
                        <span class="dropdown-subtitle BLOB">\\</span>
                        Random Typeface Assortment
                    </a>
                </div>
            </div>				
        </div>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('rdmk-header', Header);