let videos = [
    // title, date, description, url, other classes (cool, important)
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
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

    return html_script
}

var output = createAllContent();
document.write(output)
console.log(output)