window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    var contact = document.querySelector("box-contact");
    contact.classList.toggle('dark');
    var main = document.querySelector("box-main");
    main.classList.toggle('dark');
    document.footer.classList.toggle('dark');
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active'); //toggle the HTML button with the id='switch' with the class 'active'
});