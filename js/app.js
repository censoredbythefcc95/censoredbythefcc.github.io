/////////////////////////////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
/////////////////////////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/17l-upBkEU85B21P8i8AzLKyBHMDS7vDdLsDvt2EVcIk/1/public/full?alt=json")
.then((data) => {
    // Checking my Data
    console.log(data);

    //put our projects in a variable
const rawProjects = data.feed.entry;

//log our projects
console.log(rawProjects)

//prettify our projects array
const projects = rawProjects.map((project) => {
    return {
        name: project.gsx$name.$t,
        img: project.gsx$img.$t,
        description: project.gsx$description.$t,
        live: project.gsx$live.$t,
        github: project.gsx$github.$t
    }
})

console.log(projects);



//Mobile Navigation Action
let menuOpen = false;
$(".mobilenavbuttons").click(() => {
  if (menuOpen == false) {
    $(".displayoverlay).css("visibility", "visible");
    $(".displayoverlay").css("opacity", "1");
    $(".displayoverlay").css("transition", "all 0.75s ease-in-out");
    $(".displayoverlay").css("height", "100%");
    $(".mainmenuButton").addClass("open");
    menuOpen = true;
  } else {
    $(".displayoverlay").css("visibility", "hidden");
    $(".displayoverlay").css("opacity", "0");
    $(".displayoverlay").css("transition", "all 0.5s ease-in-out");
    $(".displayoverlay").css("height", "0");
    $(".mainmenuButton").removeClass("open");
    menuOpen = false;
    }
});

//not functional, must work on
    