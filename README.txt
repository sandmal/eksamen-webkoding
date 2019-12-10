-------------- Folksite link -------------

link to live version of folksite:
 - http://folk.ntnu.no/cornelos/wkex/index.html

-------------- Responsive layout -------------

I have chosen to create three different page layouts. using mediaqueries i have one for mobile 375px, one for 600px and one for 1024px.
The site is optimalized for mobile first and scales the elements etc up for the bigger screen resolutions.


-------------- JavaScript -------------

Optional task (coursework 4)

The following tasks has been done:
 - To validate the form fields in the reservation page (all). In addition, take into account that: 
	o Prospective students can't schedule a meeting in the past (date >= today). 
	o Prospective students can only schedule a meeting during the opening hours. 
 - Courses can be filtered by programme.
 - Courses can be sorted by "course code", "level" or "description". 

-------------- Explaining of show-all-courses.js -------------

clearSubjects function is made to clear the programmes-container for javascript code
The displaySubjects function has two parameters filter and sort which are used to determine which programmes and courses are displayed on function call

The sortOrder parameter's default value is null. This is because the parameter is stored in our sortOrderOption variable, which means we only call it when we wish to change the
sort order state. This is to maintain readability in our code. The filter parameter's does not have a default parameter because we do not want to have a default filter (we want
to show all the courses on first load and we need to have that param anyways when calling sortOrder). The first thing we do with the parameters is store them into our global
variables (so when we toggle one, it maintains the others state). We have a if statement on the sortOrder's parameter as we do not want to replace it if the sortOrder param
isn't filled. Then based on the filterOption value, we decide whether or not to filter the programmes and if so what programme to filter for. We then loop through the filtered
programmes array and get the courses each one contains. The previously declared sortOrderOption will now be used in a switch statement to determine how each of the courses in
their respective programmes will be sorted. We then finally loop through the sorted courses in each programme and append their information into our container. We call the display
Subjects function through a select menu's change with the filter select menu directly invoking the displaySubjects (as the sortOrder is presistant and doesn't need to be fetched).
The sortOrder select menu goes through a subsidiary function editDisplaySort which grabs the our states filterOption and passes it along to displaySubjects function in addition with
the sortOrder parameter. In the end, in order to display all courses on our first load, we call displaySubjects(false, "sortLowLevel"); which tells our program to display all courses 
in order of low to high.

-------------- Explaining of form.js ------------------------

The checkDay function checks for current date and outputs it into a number. The first part of the if statement checks if the current date is Friday (5) and sets the attribute value of max to 15:00
The ('apptSubmit').disabled = false; and ('apptTime').disabled = false; is in the if statement to prevent the next section disabling the button and the ability to pick time.
Second part of the if statement checks if the day is eiter saturday (6) or sunday (0) if the const checkDay returns one of those values the apptTime and apptSubmit is disabled,
since you can't book appointments in the weekend.

Last part of the if statement is else if. if the const checkDay returns a value between 1-4 (mon-thu) the .setAttribute("max", "16:00"); sets the attribute at 16:00 and
sets the apptTime and apptSubmit .disabled = false; to prevent the time input field and the submit button to disable.