let totalDistance = 1500;

let speedFirst = 55;
let speedSecond = 60;
let speedThird = 75;

let fuelEfficiencyOne = 30;
let fuelEfficiencySecond = 28;
let fuelEfficiencyThird = 23;

let CostOfFuel = 3;

console.log("Comparisons")

console.log("------------------------------------------------")

console.log("At 55 mph I need " + totalDistance / fuelEfficiencyOne + " gallons.")
console.log("At 60 mph I need " + totalDistance / fuelEfficiencySecond + " gallons.")
console.log("At 75 mph I need " + totalDistance / fuelEfficiencyThird + " gallons.")

console.log("------------------------------------------------")

console.log("At 55 mph I spend " + ((totalDistance / fuelEfficiencyOne) * CostOfFuel) + " dollars.")
console.log("At 60 mph I spend " + ((totalDistance / fuelEfficiencySecond) * CostOfFuel) + " dollars.")
console.log("At 75 mph I spend " + ((totalDistance / fuelEfficiencyThird) * CostOfFuel) + " dollars.")

console.log("------------------------------------------------")


console.log("At 55 mph I will take " + (totalDistance / speedFirst) + " hours.")
console.log("At 60 mph I will take " + (totalDistance / speedSecond) + " hours.")
console.log("At 75 mph I will take " + (totalDistance / speedThird) + " hours.")

console.log("------------------------------------------------")

console.log("Looking at the comparisons above, I can say that travelling at 75 mph does not make sense \n\
    as it costs $195, more than the budget of $175 though it takes 20 hours, the shortest time to travel.\n\
    Looking at the remaining 55 mph and 60 mph, though 55 mph takes 50 gallons and $150 but takes 27 hours.\n\
    Travelling at 60 mph makes more sense as it is still under the budget and takes 53 gallons, slightly \n\
    higher than 55 mph and costs little higher than $150, but the biggest advantage here is I can travel in\n\
     2 hours less than 55 mph. that time adds extra value to this, I would say.")