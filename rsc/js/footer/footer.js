/*=== FOOTER: START ===*/

let footerContentCreds = `
    <div wz-content="footer" wz-txt="color-white + align-center">
    
        <wz-space wz-height="40"></wz-space>
    
        <p><img src="rsc/img/misc/creds.png" alt="Macintosh" width="48"><br>
        <wz-space wz-height="10"></wz-space>
        Created with <a href="https://github.com/isakhauge/wz-modular-css" target="_blank">WZ Modular CSS</a><br>
        Developed by <a href="https://github.com/isakhauge" target="_blank">Isak Hauge</a></p>
        
        <wz-space wz-height="40"></wz-space>
        
    </div>
    
    
`;

customElements.define('wz-footer', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footerContentCreds;
    }
});

/*=== FOOTER: END ===*/