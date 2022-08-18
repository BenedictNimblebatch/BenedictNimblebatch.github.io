document.cookie = "username=John Doe; expires=Thu, 18 Aug 2022 12:00:00 UTC";

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
    "\"Inter-disciplinary\"",
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

function getRandomFromBucket() {
    let pick = Math.floor(Math.random() * ls.length);
    return ls.splice(pick, 1)[0];
}

function makeBoard() {
    // let B1 = console.log(getRandomFromBucket());
    document.getElementById("B1").innerHTML = getRandomFromBucket();
    document.getElementById("B2").innerHTML = getRandomFromBucket();
    document.getElementById("B3").innerHTML = getRandomFromBucket();
    document.getElementById("B4").innerHTML = getRandomFromBucket();
    document.getElementById("B5").innerHTML = getRandomFromBucket();
    document.getElementById("I1").innerHTML = getRandomFromBucket();
    document.getElementById("I2").innerHTML = getRandomFromBucket();
    document.getElementById("I3").innerHTML = getRandomFromBucket();
    document.getElementById("I4").innerHTML = getRandomFromBucket();
    document.getElementById("I5").innerHTML = getRandomFromBucket();
    document.getElementById("N1").innerHTML = getRandomFromBucket();
    document.getElementById("N2").innerHTML = getRandomFromBucket();
    document.getElementById("freeSpace").innerHTML = "Free Space";
    document.getElementById("N4").innerHTML = getRandomFromBucket();
    document.getElementById("N5").innerHTML = getRandomFromBucket();
    document.getElementById("G1").innerHTML = getRandomFromBucket();
    document.getElementById("G2").innerHTML = getRandomFromBucket();
    document.getElementById("G3").innerHTML = getRandomFromBucket();
    document.getElementById("G4").innerHTML = getRandomFromBucket();
    document.getElementById("G5").innerHTML = getRandomFromBucket();
    document.getElementById("O1").innerHTML = getRandomFromBucket();
    document.getElementById("O2").innerHTML = getRandomFromBucket();
    document.getElementById("O3").innerHTML = getRandomFromBucket();
    document.getElementById("O4").innerHTML = getRandomFromBucket();
    document.getElementById("O5").innerHTML = getRandomFromBucket();
}

makeBoard();

// window.addEventListener("DOMContentLoaded", function() {
//     let boxes = document.querySelectorAll(".grid-item");
  
//     Array.from(boxes, function(gridItem) {
//       box.addEventListener("click", function() {
//         alert(this.classList[1]);
//       });
//     });
//   });


let squares= document.querySelectorAll('.grid-item');

squares.forEach(item => item.addEventListener('click', (e) => {
    changeColor(item);
}))


const changeColor = (item) => {
    item.classList.toggle("colorClass");
};