function inputCaloriesByDay (day){
    if (day=="Monday"){
        return 3500;
    } else if (day=="Tuesday") { 
        return 4500;        
    } else if (day=="Wednesday"){
        return 2500;
    } else if (day=="Thursday"){
        return 5000;
    } else if (day=="Friday") {
        return 3500;
    } else if (day=="Saturday"){
        return 2400;
    } else if (day=="Sunday"){
        return 4600;
    }
}
console.log(inputCaloriesByDay("Monday"));

function getTotalCalories() {
   return inputCaloriesByDay("Monday")+
    inputCaloriesByDay("Tuesday")+
    inputCaloriesByDay("Wednesday")+
    inputCaloriesByDay("Thursday")+
    inputCaloriesByDay("Friday")+
    inputCaloriesByDay("Saturday")+
    inputCaloriesByDay("Sunday");
};
console.log(getTotalCalories());

function getIdealCalories(){
    var idealDailyCalories=2000;
    return idealDailyCalories *7
};

function calculateHealthPlan(){
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();
    if (actualCalories === idealCalories)
    {
        return "You ate just the right amount of food"; 
    }
    if (actualCalories > idealCalories);
    {
        return "Time to head to the gym!";
    }
    if (actualCalories < idealCalories)
    {
        return "Time for seconds!";
    };
};
console.log(calculateHealthPlan());





 
