// document.cookie = "username=John Doe; expires=Thu, 18 Aug 2022 12:00:00 UTC";

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
    "Faculty member thanks presenter",
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
    "Presenter asks \"...okay?\"",
    "Presenter avoids question",
    "Presenter feigns empathy",
    "Presenter laughs at own joke",
    "Presenter \"thanks\" faculty for hard work",
    "Projected enrollments/ costs",
    "\"Prudent\"",
    "Question only applies to asker",
    "Retired faculty member is here?",
    "\"Right-size\"",
    "Single president joke/ reference",
    "Slides have way too much text",
    "Someone puts too much faith in IC",
    "Someone's phone rings",
    "\"Special sauce\"",
    "St. Kate's/ St. Norbert's",
    "Strategic plan/ directions",
    "Strong(er) integration",
    "Student experience/ co-curriculars",
    "Student-to-faculty ratio",
    "Thanking committee for hard work",
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


function checkWinners() {
    // const $ = document.querySelector.bind(document);
    // const $$ = document.querySelectorAll.bind(document);
    var winners = [
        ['B1','I1','N1','G1','O1'],
        ['B2','I2','N2','G2','O2'],
        ['B3','I3','freeSpace','G3','O3'],
        ['B4','I4','N4','G4','O4'],
        ['B5','I5','N5','G5','O5'],
        ['B1','B2','B3','B4','B5'],
        ['I1','I2','I3','I4','I5'],
        ['N1','N2','freeSpace','N4','N5'],
        ['G1','G2','G3','G4','G5'],
        ['O1','O2','O3','O4','O5'],
        ['B1','I2','freeSpace','G4','O5'],
        ['B5','I4','freeSpace','G2','O1']
    ];

    var responses = [
        "In lieu of a prize, we can offer you a ceramic mug that is also considered taxable income.",
        "Community Always.",
        "Take *two* ice cream sandwiches at the next picnic. You've earned it.",
        "Your skills are unmatched. Wanna be a Dean of something?",
        "As a reward, you are allowed to resign from some of your committees/taskforces.",
        "In recognition of your efforts, you will receive one unpaid overload during the semester of your choice."
    ];

    var possibleWinners = winners.length;

    // Initialize selected array with c3 freebie
    var selected = ['freeSpace'];

    // // Play again, removes all previously clicked
    // $('.again').click(function(){
    //     $('.square').removeClass('clicked');
    //     selected = ['freeSpace'];
    // });

    let squares= document.querySelectorAll('.grid-item');

    squares.forEach(item => item.addEventListener('click', (e) => {
        if(item.classList.contains('colorClass')){
            item.classList.toggle("colorClass");
            console.log("YO!");
            console.log(selected);
            // console.log(selected.splice(item.children[0].id));
            selected = selected.filter(e => e !== item.children[0].id); // will return ['A', 'C']

        }
        else{
            changeColor(item);
            console.log("NO!");
            // console.log(getComputedStyle(item,"background-color"));

        }

    }))


    const changeColor = (item) => {
        item.classList.toggle("colorClass");
        selected.push(item.children[0].id);
        console.log(selected);
        // console.log(item.children[0].id);
        // console.log(item.children[0].id);
        // console.log(selected)
        // Compare winners array to selected array for matches
        for(var i = 0; i < possibleWinners; i++) {
            var cellExists = 0;
            for(var j = 0; j < 5; j++) {
                if($.inArray(winners[i][j], selected) > -1) {
                    cellExists++;
                }
            }

            // If all 5 winner cells exist in selected array alert success message
            if(cellExists == 5) {
                let prize = Math.floor(Math.random() * responses.length);
                // return ls.splice(pick, 1)[0];
                setTimeout(function() {
                    alert('\n\nBINGO!\n\nCongratulations. ' + responses[prize]);
                },10)
                console.log(selected)
                selected = ['freeSpace']
                console.log(selected)

            }
        }
    };



}

checkWinners()