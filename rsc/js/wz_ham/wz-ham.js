window.addEventListener("load", function(){

    let btn = document.getElementsByTagName('wz-hamburger');
    let btnQuery = document.querySelector('wz-hamburger');

    let wzLink = document.getElementsByTagName('a');
    let wzLinkQuery = document.querySelectorAll('[wz-nav-link]');

    btnQuery.addEventListener('click', function wzHamburgerMenu() {

        if ( btnQuery.classList.contains('active') === false ) {
            btnQuery.classList.add('active');
        }
        else {
            btnQuery.classList.remove('active');
        }

    });

    // Adding a click event to every [wz-nav-link] element through for and length.
    for (let i = 0; i < wzLinkQuery.length; i++) {

        wzLinkQuery[i].addEventListener('click', function wzHamburgerClose() {

            if ( btnQuery.classList.contains('active') ) {
                btnQuery.classList.remove('active');
            }

        });

    }

});