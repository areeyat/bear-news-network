headlines = ["Here's how much income you'll need to comfortably own a San Jose home. Hint: It's a lot", 'Taco Bell closes dining rooms in Oakland due to safety concerns', 'Possible measles exposure reported in Sacramento', "Biden's proposed budget includes $4.7 billion emergency fund for border migrant surges", "Warden ousted as FBI again searches California federal women's prison plagued by sexual abuse", 'How PG&E rate hikes are impacting electric vehicle charging', 'TikTok creators look for other places to make money as threat of U.S. ban gains steam', 'Jewish students at UC Berkeley to rally against antisemitism', 'Former Benicia teacher charged with lewd acts with students', "Airbnb is banning the use of indoor security cameras in the platform's listings worldwide", 'Businesses gear up for Oakland Restaurant Week', 'Santa Rosa family survives crash with plane parachute in Mendocino County', "Musical project launches to help revitalize SF's Mid-Market neighborhood", 'See the complete list of winners for the 2024 Oscars', 'Bay Bridge shooting leaves 1 injured', 'San Francisco Animal Care and Control asks people to hold off on surrendering dogs', 'Protesters march near Oscars site, decry Hollywood support of Israel', '1 dead after Oakland Hills car crash', 'See the best red carpet looks from the 2024 Oscars', 'People are cringing after Madonna accidentally calls out a fan for sitting at her show — in a wheelchair']

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