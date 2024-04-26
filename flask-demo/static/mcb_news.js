headlines = ['Fu and Nayak named 2024 Sloan Fellows', 'Welcome new MCB faculty Allon Wagner', 'Dounda named 2024 Biophysical Society Fellow', 'Happy Holidays from all of us at MCB!', "Whiteman discusses nature's toxins on KQED\tTanya Sullivan", 'MCB alumni careers path panel', 'The Fall 2023 Transcript newsletter is here!', 'Park promoted to associate professor', 'Lewis receives 2023 Prytanean Faculty Enrichment Award', "We're hiring | Dean of Biological Sciences"]

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