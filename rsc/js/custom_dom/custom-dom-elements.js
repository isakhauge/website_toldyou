/*=== WZ EMPTY SPACE ELEMENT: START ===*/

customElements.define('wz-space', class extends HTMLElement{});

/*=== WZ EMPTY SPACE ELEMENT: END ===*/




/*==================================================*/




/*=== WZ LOGO ELEMENT: START ===*/

// Default logo:
customElements.define('wz-logo', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<a href="index.html"><img class="logo" src="rsc/img/logo/logo-default.svg"></a>';
    }
});

// Header logo
customElements.define('wz-logo-header', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<a href="index.html"><img class="logo" src="rsc/img/logo/logo-default.svg"></a>';
    }
});

// Header logo
customElements.define('wz-logo-footer', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<a href="index.html"><img class="logo" src="rsc/img/logo/logo-default.svg"></a>';
    }
});

/*=== WZ LOGO ELEMENT: END ===*/




/*==================================================*/




/*=== WZ HAMBURGER MENU: START ===*/

customElements.define('wz-hamburger', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<div wz-cheese></div><div wz-patty></div><div wz-lettuce></div>';
    }
});

/*=== WZ HAMBURGER MENU: END ===*/




/*==================================================*/




/*=== WZ BOUNCING ARROW DOWN: START ===*/

customElements.define('wz-arrow-down', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<a href="#section-01"></a>';
    }
});

/*=== WZ BOUNCING ARROW DOWN: END ===*/




/*==================================================*/




/*=== WZ ASCEND BUTTON: START ===*/

customElements.define('wz-apex', class extends HTMLElement {});
customElements.define('wz-ascend', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<a href="#apex"></a>';
    }
});

/*=== WZ ASCEND BUTTON: END ===*/




/*==================================================*/