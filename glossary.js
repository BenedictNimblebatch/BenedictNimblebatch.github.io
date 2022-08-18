const ls = [
    "\"Add value/value-added\"",
    "Asking more of a comment",
    "Asking multi-part question",
    "Asking snarky question",
    "Asking unnecessary question",
    "Benedictine values",
    "\"Best practice\"",
    "Block schedule",
    "C.O.O. search",
    "\"Circle back\"",
    "\"College for women\"",
    "\"Community\"",
    "Covid policy/ dashboard",
    "\"Critical thinking\"",
    "Cultural/ identity Studies",
    "\"Cutting our way to strength/etc.\"",
    "\"Data-driven\"",
    "\"Deliverable(s)\"",
    "Emphasize retention",
    "Emphasize transfer students",
    "\"Enrollments are down\"",
    "Faculty member delusional about APP",
    "Faculty member is toxically positive",
    "Faculty member thanks Richard",
    "\"Financial equilibrium\"",
    "Funnel",
    "FYX",
    "Global studies/ Global health",
    "Greg asks the first question",
    "\"Hard/heroic work\"",
    "\"Headwinds\"",
    "HLC",
    "\"I feel your pain\"",
    "\"Impactful\"",
    "\"Innovate\"",
    "\"Interdisciplinary\"",
    "Jennifer Galovich is here?",
    "\"Journey\"",
    "Margin vs. mission",
    "Mission tradition (stewardship)",
    "\"More with less\"",
    "\"My highest priority...\"",
    "New committee recommended/ formed",
    "New marketing/ admissions team",
    "\"Nimble\"",
    "Obfuscating liberal arts",
    "Peers/ aspirants",
    "Position of strength/ strong position",
    "Presenter avoids question",
    "Presenter feigns empathy",
    "Presenter laughs at own joke",
    "Presenter thanks faculty",
    "Projected enrollments/ costs",
    "\"Prudent\"",
    "Question only applies to asker",
    "Richard asks \"...okay?\"",
    "\"Right-size\"",
    "Single president joke/ reference",
    "Slides have way too much text",
    "Someone puts too much faith in IC",
    "Someone thanks APP committees",
    "Someone's phone rings",
    "\"Special sauce\"",
    "St. Kate's/ St. Norbert's",
    "Strategic plan/ directions",
    "Strong(er) integration",
    "Student experience/ co-curriculars",
    "Student-to-faculty ratio",
    "\"Together separately\"",
    "Transactional vs. transformational",
    "Transition to 5-day schedule",
    "\"Transparent/ transparency\"",
    "\"Value proposition\"",
    "\"We're in this together...\"",
    "Zoom/ hybrid",
]

// function listTerms() {
//     ls.forEach(function (item, index) {
//         // console.log(item, index);
//         document.getElementById("glossaryList").innerHTML = item;
//     });
// }

let list = document.getElementById("glossaryList");

function listTerms() {
    ls.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
    })
}

listTerms();