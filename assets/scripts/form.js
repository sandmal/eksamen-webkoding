const date = new Date();

let [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day; 

const today = year + "-" + month + "-" + day;

document.getElementById('apptDate').value = today;
document.getElementById('apptDate').setAttribute("min", today);

function checkDate(){
    const date = document.getElementById('apptDate').value;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [year1, month1, day1] = date.split("-");
    const checkDay = new Date(`${months[month1-1]} ${day1}, ${year1} 00:00:00`).getDay();

    if(checkDay === 5) {
        document.getElementById('apptTime').setAttribute("max", "15:00");
        document.getElementById('apptSubmit').disabled = false;
        document.getElementById('apptTime').disabled = false;

    } else if (checkDay === 6 || checkDay === 0){
        document.getElementById('apptTime').disabled = true;
        document.getElementById('apptSubmit').disabled = true;

    }else{
        document.getElementById('apptTime').disabled = false;
        document.getElementById('apptSubmit').disabled = false;
        document.getElementById('apptTime').setAttribute("max", "16:00");
    }
}

checkDate();