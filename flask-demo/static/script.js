headlines = ['Lisa Yan receives Faculty Award for Outstanding Mentorship of GSIs', 'Berkeley experts urge high schools to offer advanced math in line with UC report', 'Natacha Crooks wins IEEE TCDE Rising Star Award', 'Nika Haghtalab named Schmidt Sciences’ AI2050 Early Career Fellow', 'Three EECS professors win IEEE SSCS Innovative Education Award', 'Three EECS professors win prized Sloan Research Fellowships', 'International House to honor Chenming Hu with Global Impact Award', 'Joseph Gier added to self-guided Black history tour of UC Berkeley', 'Ion Stoica elected to the National Academy of Engineering', 'Robert Brodersen, co-founder of the Berkeley Wireless Research Center, has passed away', 'How to make my favorite spring snack: Matcha muddy buddies', 'How I navigate NARP life as an ex-athlete', 'tire_Ian Abbott_Creative Commons.jpg', 'Another preventable tragedy', 'Should I stay or do I go?', 'Illustration for slug granted', 'Boichik Bagels in Berkeley targeted with antisemitic graffiti', 'No. 18 Cal places 10th in Cabo, looks for redemption in Pauma', 'SF Ballet soloist Sasha Mukhamedov talks Balanchine, returning to ‘A Midsummer Night’s Dream’', 'Economist Thomas Marschak, UC Berkeley researcher, teacher for 60 years, dies at 93', "Here's how much income you'll need to comfortably own a San Jose home. Hint: It's a lot", 'Taco Bell closes dining rooms in Oakland due to safety concerns', 'Possible measles exposure reported in Sacramento', "Biden's proposed budget includes $4.7 billion emergency fund for border migrant surges", "Warden ousted as FBI again searches California federal women's prison plagued by sexual abuse", 'How PG&E rate hikes are impacting electric vehicle charging', 'TikTok creators look for other places to make money as threat of U.S. ban gains steam', 'Jewish students at UC Berkeley to rally against antisemitism', 'Former Benicia teacher charged with lewd acts with students', "Airbnb is banning the use of indoor security cameras in the platform's listings worldwide", 'Businesses gear up for Oakland Restaurant Week', 'Santa Rosa family survives crash with plane parachute in Mendocino County', "Musical project launches to help revitalize SF's Mid-Market neighborhood", 'See the complete list of winners for the 2024 Oscars', 'Bay Bridge shooting leaves 1 injured', 'Fu and Nayak named 2024 Sloan Fellows', 'Welcome new MCB faculty Allon Wagner', 'Dounda named 2024 Biophysical Society Fellow', 'Happy Holidays from all of us at MCB!', "Whiteman discusses nature's toxins on KQED", 'MCB alumni careers path panel', 'The Fall 2023 Transcript newsletter is here!', 'Park promoted to associate professor', 'Lewis receives 2023 Prytanean Faculty Enrichment Award', "We're hiring | Dean of Biological Sciences", 'President Joe Biden has won enough delegates to clinch the 2024 Democratic nomination', "'Bachelor' podcast: Joey down to the final three -- who does he love?", 'IRS Direct File program for free online tax filing now available in 12 states', "100-year-old giant snapping turtle named 'Thanos' missing", 'San Jose man convicted in 2022 shooting of unarmed Airbnb guest on the street', 'Missing CA hiker feared dead after being swept away in SoCal river', "Robert F. Kennedy Jr. considering Jets' Aaron Rodgers", "Neve Campbell returning as Sidney Prescott in 'Scream 7': 'I couldn't be more thrilled'", "Trump promises to 'free' Jan. 6 rioters on first day back in White House if reelected", 'What you need to know about driver data being shared with insurance companies']

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
