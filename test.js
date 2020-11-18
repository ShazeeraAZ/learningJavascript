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


console.log((5>2) && (3>1));
console.log((3>4) || (2>1));
console.log((2>4)||(6>10));
console.log((7=="7")&&(3>2))
 
var summerHeat = 40;
var sunny = true;
if (summerHeat>60) {
    console.log("I will get a heatwave");
}   else if (summerHeat>50) {
    console.log("I will go for a swim");
}
    else if ((summerHeat>35)&& (!sunny)){
        console.log("I am staying at home");
    } else if((summerHeat>35)||(!sunny)) {
        console.log("I am staying home");
    } 



