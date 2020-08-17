/* three objects */

/* First object CAR */
let car = {
    type : "Tesla",
    model : "x",
    seating  : "seven",
    doors : "Falcon Wing",
    color : "black",
    drive : "",
    get style() {
        return this.color;
    }
    
    
    
};

car.style

/* Second object sport team */ 
let sports_team = {
    team: "New York Rangers",
    city: "New york",
    stadium: "The Garden",
    coach: "David Quinn",
    colors: "red white blue",
    goalie: "",
    
    set goalies(goalies) {
        this.goalie = goalies;
    }

};
sports_team.goalie = "Henrik Lundqvist";

/* Third object animal */ 
let cat = {
    name: "Max",
    breed: "Maine coon",
    legs: "4",
    tail: "fluffy",
    meow: function(){alert("Meow")}
};
cat.meow()