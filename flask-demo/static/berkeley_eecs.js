headlines = ['Lisa Yan receives Faculty Award for Outstanding Mentorship of GSIs', 'Berkeley experts urge high schools to offer advanced math in line with UC report', 'Natacha Crooks wins IEEE TCDE Rising Star Award', 'Nika Haghtalab named Schmidt Sciences’ AI2050 Early Career Fellow', 'Three EECS professors win IEEE SSCS Innovative Education Award', 'Three EECS professors win prized Sloan Research Fellowships', 'International House to honor Chenming Hu with Global Impact Award', 'Joseph Gier added to self-guided Black history tour of UC Berkeley', 'Ion Stoica elected to the National Academy of Engineering', 'Robert Brodersen']

function shuffle() {
    shuffleArray(headlines)
    title1Elem = document.getElementById("title1");
    title2Elem = document.getElementById("title2");
    title3Elem = document.getElementById("title3");
    title4Elem = document.getElementById("title4");
    title5Elem = document.getElementById("title5");
    title6Elem = document.getElementById("title6");
    title1Elem.innerText = headlines[0];
    title2Elem.innerText = headlines[1];
    title3Elem.innerText = headlines[2];
    title4Elem.innerText = headlines[3];
    title5Elem.innerText = headlines[4];
    title6Elem.innerText = headlines[5];
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}