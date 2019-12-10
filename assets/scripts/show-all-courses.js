function clearSubjects() {
    document.getElementById("programmes-container").innerHTML = "";
}

let filterOption = null;
let sortOrderOption = null;

function displaySubjects(filter, sortOrder = null) {
    clearSubjects();
    var helpers = HELPERS();
    filterOption = filter;
    if(sortOrder)
        sortOrderOption = sortOrder;
    let filteredProgrammes = null;
    if(filterOption)
        filteredProgrammes = programmes.filter(program => program === filter);
    else
        filteredProgrammes = programmes

    var idContainer = "programmes-container";
    var i, j;
    for (i = 0; i < filteredProgrammes.length; i++) {
        var h2 = document.createElement("h2");
        h2.innerHTML = filteredProgrammes[i];
        document.getElementById(idContainer).appendChild(h2);
        var currentCourses = courses[filteredProgrammes[i]];
        
        switch(sortOrderOption) {
            case "sortLowLevel":
                currentCourses = currentCourses.sort(function(a, b) {
                    if (a.level < b.level) {return -1;}
                    if (a.level > b.level) {return 1;}
                });
                break;
            case "sortHighLevel":
                currentCourses = currentCourses.sort(function(a, b) {
                    if (a.level > b.level) {return -1;}
                    if (a.level < b.level) {return 1;}
                });
                break;      
            case "sortAtoZ":
                currentCources = currentCourses.sort(function(a, b) {
                    if (a.name < b.name) {return -1;}
                    if (a.name > b.name) {return 1;}
                });
                break;
            case "sortZtoA":
                currentCources = currentCourses.sort(function(a, b) {
                    if (a.name > b.name) {return -1;}
                    if (a.name < b.name) {return 1;}
                });
                break;
        }
    
        for (j = 0; j < currentCourses.length; j++) {
            var menuItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(currentCourses[j].code, currentCourses[j].name, currentCourses[j].description, currentCourses[j].level);
            document.getElementById(idContainer).appendChild(menuItem);
        }
    }
};

function editDisplaySort(sortOrder) {
    displaySubjects(filterOption, sortOrder);
}

displaySubjects(false, "sortLowLevel");