var banner_color = document.currentScript.getAttribute("banner-color");

var header = `
    <div class="header" style="background: ` + banner_color + `;">
        <h1 onclick="pressCenaButton()">` + document.title + `</h1>
        <audio id="cenaSound" src="../assets/sound/and his name is john cena Sound Effect.mp3" preload="auto" loop></audio>
        <h2>
        </h2>
        <div id="cena" style="display: none;">
            <img src="../assets/gif/john-cena.gif" alt="Invisible man..." class='meme'>
                <img src="../assets/gif/wiggle-dance.gif" alt="Wiggle wiggle wiggle wiggle..." class='meme'>
                    <img src="../assets/gif/squidward-wiggle.gif" alt="Wiggle wiggle wiggle wiggle..." class='meme'>
                        <img src="../assets/gif/noodlekitty-noodle.gif" alt="Wiggle wiggle wiggle wiggle..." class='meme'>
                        </div>
                    </div>
                    `;

document.write(header);


var navbar = `
<div class="topnav">
    <a class="about" href="../html/home.html">Home</a>
    <a class="games" href="../html/games.html">Games</a>
    <a class="youtube" href="../html/youtube.html">YouTube</a>
    <a class="writing" href="../html/writing.html">Writing</a>
    <a class="resume" href="../html/resume.html">Resume</a>
    <a class="other" href="../html/other.html">Other</a>
</div>`;

{/* <a href="https://aleca.icu/" style="float:right">LEXSENSATION</a> */ }

document.write(navbar)




// var header2 = `
//     <div class="header">
//         <h1>` + document.title + `</h1>
//         <audio id="cenaSound" src="../assets/sound/and his name is john cena Sound Effect.mp3" preload="auto" loop></audio>
//         <h2>
//             <button id="cenaButton" onclick="pressCenaButton()">( ͡° ʖ ͡°)</button>
//         </h2>
//         <div id="cena" style="display: none;">
//             <img src="../assets/gif/john-cena.gif" alt="Invisible man..." class='meme'>
//                 <img src="../assets/gif/wiggle-dance.gif" alt="Wiggle wiggle wiggle wiggle..." class='meme'>
//                     <img src="../assets/gif/squidward-wiggle.gif" alt="Wiggle wiggle wiggle wiggle..." class='meme'>
//                         <img src="../assets/gif/noodlekitty-noodle.gif" alt="Wiggle wiggle wiggle wiggle..." class='meme'>
//                         </div>
//                     </div>`;