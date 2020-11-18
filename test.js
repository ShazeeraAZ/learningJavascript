var dice = Math.floor(Math.random()*7);
switch(dice) {
    case 1:
        console.log("bad luck!");
        break;
    case 2:
        console.log("are you serious?"); 
        break;
    case 3:
        console.log("try again!");
        break;
    case 4:
        console.log("good luck!");
        break;
    case 5:
        console.log ("great job!");
        break;
    case 6:
        console.log("awesome!");
        break;
    default:
        console.log("want to throw a dice?");
        break;
}
console.log(dice);

