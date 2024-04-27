headlines = ['President Joe Biden has won enough delegates to clinch the 2024 Democratic nomination', "'Bachelor' podcast: Joey down to the final three -- who does he love?", 'IRS Direct File program for free online tax filing now available in 12 states', "100-year-old giant snapping turtle named 'Thanos' missing", 'San Jose man convicted in 2022 shooting of unarmed Airbnb guest on the street', 'Missing CA hiker feared dead after being swept away in SoCal river', "Robert F. Kennedy Jr. considering Jets' Aaron Rodgers", "Neve Campbell returning as Sidney Prescott in 'Scream 7': 'I couldn't be more thrilled'", "Trump promises to 'free' Jan. 6 rioters on first day back in White House if reelected", 'What you need to know about driver data being shared with insurance companies', 'Indiana rescue team meets with crash victim who spent 6 days trapped in car', 'Supreme Court extends pause on Texas law that would allow state police to arrest migrants', 'A former Boeing manager who raised safety concerns is found dead. Coroner suspects he killed himself', "Takeaways from Robert Hur's testimony on Biden's mishandling of classified documents", 'Scott Peterson murder case returns to court with LA Innocence Project focusing on DNA evidence', "FX's Shogun honors ancient samurai traditions", 'Police release surveillance video of missing Mizzou student last seen in Nashville', 'Best ergonomic office chairs to add to your home office', 'Animal rescue owners feel catfished', "Listen to Taylor Swift's sneak peek of new acoustic music leading up to Disney+ 'Eras Tour' film"]

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