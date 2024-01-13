var code =
    `

<nav class="navbar">
    <a href="#home">Home</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#resume">Resume</a>
    <a href="#games">Games</a>
    <a href="#writings">Writings</a>
</nav>

<script>
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
        navbar.classList.add('transparent');
        } else {
        navbar.classList.remove('transparent');
        }
    });
</script>
`
document.write(code);

