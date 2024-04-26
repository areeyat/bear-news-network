headlines = ['How to make my favorite spring snack: Matcha muddy buddies', 'How I navigate NARP life as an ex-athlete', 'Another preventable tragedy', 'Should I stay or do I go?', 'Illustration for slug granted', 'Boichik Bagels in Berkeley targeted with antisemitic graffiti', 'No. 18 Cal places 10th in Cabo, looks for redemption in Pauma', 'SF Ballet soloist Sasha Mukhamedov talks Balanchine, returning to ‘A Midsummer Night’s Dream’', 'Economist Thomas Marschak, UC Berkeley researcher, teacher for 60 years, dies at 93']

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