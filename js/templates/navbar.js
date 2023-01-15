var banner_color = document.currentScript.getAttribute("banner-color");



var navbar = `
<style>
    .a:hover {
        background-color: ` + banner_color + `;
    }
</style>

<div class="topnav">
    <a href="../html/home.html">Home</a>
    <a href="../html/games.html">Games</a>
    <a href="../html/youtube.html">YouTube</a>
    <a href="../html/writing.html">Writing</a>
    <a href="../html/resume.html">Resume</a>
    <a href="../html/other.html">Other</a>
</div>`;

{/* <a href="https://aleca.icu/" style="float:right">LEXSENSATION</a> */ }

document.write(navbar)