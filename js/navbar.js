var code =
    `

<nav class="navbar">
    <a href="home.html">Home</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="assets/pdf/DOMINICK_ROBINSON_RESUME.pdf">Resume</a>
    <a href="games.html">Games</a>
    <a href="writings.html">Writings</a>
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

{/* <a href="youtube.html">YouTube</a> */ }
