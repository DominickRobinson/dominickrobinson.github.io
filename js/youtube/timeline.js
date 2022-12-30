let videos = [
    // title, date, description, url, other classes (cool, important)
    ["Monk Combat 3 (2004) Review", "Dec. 25, 2022", "", "", "cool"],
    ["dom for pres 2023", "Nov. 18, 2022", "", "piwgtrE9Cbk", "cool"],
    ["burp 6", "Jul. 25, 2022", "", "9qo3aKsWYGk", "cool"],
    ["Pickleball Battles: Domonation vs Lexsensation", "Jul 19, 2022", "battle of the century", "g1FRIUsQH7A", "cool"],
    ["The Scream Chamber", "Jun 20, 2022", "CMU is really hard", "b48Jvso_I6U", "cool"],
    ["Supreme Hen Donkey (Supreme Edition) - Release Trailer (Premiere)", "Jun 12, 2022", `<a href="https://domonation-studios.itch.io/supreme-hen-donkey">Play the game now!</a>`, "2T96Oe09hgQ", "cool"],
    ["i got my wisdom teeth out!!", "Jun 5, 2022", "yep", "2UIQnotGGlY", "cool"],
    ["burp", "May 23, 2022", "roar", "ExwMA71SIbw", "cool"],
    ["M e o w", "Feb 6, 2022", "", "9bojLx7E8Rg", "cool"],
    ["And many more!!", "2019-2022", "<a href='https://www.youtube.com/@DomonationYT/featured'>Explore the channel!</a>", "", "milestone"],
    ["To All Of My Haters", "Nov. 13, 2018", "", "IXDFVSPd19k", ""],
    ["WHY MP4 IS THE BEST FILE FORMAT ( (ALMOST DIED)(NOT CLICKBAIT)", "Nov. 8, 2018", "My first video :D", "uD2nDM85GlU", "cool"]
];

var html_script = "";

function createContent(title, date, description, url, other_classes, num, lr) {
    var content =
        `<div class="container ` + lr + ` ` + other_classes + `">
        <div class="content">
            <h2 onclick="toggle('` + num.toString() + `')"></a>` + title + `</h2>
        <h5>` + date + `</h5>
            <div id="` + num.toString() + `" class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/` + url + `" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <p>` + description + `</p>
        </div >
    </div >\n`;

    return content;
}

function createAllContent() {

    // document.write(`<div class="timeline">`);
    html_script += `<div class="timeline">`

    var totalVideos = videos.length;
    var lr = "right";

    for (var i = 0; i < totalVideos; i++) {
        //adds main content card
        html_script += createContent(videos[i][0], videos[i][1], videos[i][2], videos[i][3], videos[i][4], i, lr);

        // puts videos on same side if they have same date
        if (i < totalVideos - 1 && videos[i][1] != videos[i + 1][1]) {
            if (lr == "right") {
                lr = "left";
            } else {
                lr = "right";
            }
        }
    }
    html_script += `</div >`;

    return html_script;
}

var output = createAllContent();
document.write(output);
// console.log(output)