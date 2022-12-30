const usetube = require('usetube');

async function searchInfo(thing) {
    console.log('Getting info for ' + thing + "...");

    const data = await usetube.getChannelVideos(thing);

    console.log(data);
}


// searchInfo('@DomonationYT');
searchInfo('UCU5TLop6bSylq-SkfmvK8aQ');
// searchInfo('@CodingShiksha');
// searchInfo("mYFpSugNfuM&t");