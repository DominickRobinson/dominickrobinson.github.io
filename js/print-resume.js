function saveResume() {
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
}

function sayHI() {
    alert("HI");
}
