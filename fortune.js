var btn = document.getElementById('btn')
var output = document.getElementById('output')
var fortunelist = [
    "Change yourself and fortune will change.",
    "Good things come when you least expect them.",
    "Great actions are not always true sons of great and mighty resolutions.",
    "Happy is the bride that the sun shines on.",
    "It is possible to have too much of a good thing.",
    "Lightning never strikes the same place twice.",
    "May the wind be always at your back.",
    "Sum up at night what thou hast done by day.",
    "The new boat will find the old stones.",
    "Venture a small fish to catch a great one.",
    "When fortune turns against you, even jelly breaks your teeth.",
    "Diligence is the mother of good fortune.",
    "A wise man turns chance into good fortune.",
    "Fortune favors the prepared mind."
]


btn.addEventListener('click',function(){
        var random = fortunelist[Math.floor(Math.random() * fortunelist.length)]
        output.innerHTML = random;
})
