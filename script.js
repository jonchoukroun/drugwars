// JavaScript for DrugWars (script.js)

// Create Player class
class Player {
    constructor(playerName, money, inventory) {
        this.playerName = playerName;
        this.money = money;
        this.inventory = inventory;
    }

    /*
    Class functions
    */
}

// Create Station class
class Station {
    constructor(stationName) {
        this.stationName = stationName;
    }

    // Announce subway Station
    announceStation() {
        return this.stationName;
    }

    /* Random event function:
        - Officer Hardass
        - Drug price outlier
        - Mugging
        - Purchase offer (guns, coats)
    */
}

// Create instances of the subway Station class
var stationList = [
    bronx = new Station("The Bronx"),
    ghetto = new Station("The Ghetto"),
    centralPark = new Station("Central Park"),
    manhattan = new Station("Manhattan"),
    coneyIsland = new Station("Coney Island"),
    brooklyn = new Station("Brooklyn")
];

var test = stationList.map(function(station) {
    console.log(station.announceStation());
});

// Create Drug class (see bottom comment about Scarcity)
class Drug {
    constructor(name, min, max) {
        this.name = name;
        this.min = min;
        this.max = max;
    }

    // Call these 2 functions at each Subway stop
    calculatePrice() {
        var price = Math.random() * (this.max - this.min + 1) + this.min;
        return Math.round(price);
    };

    calculateQuantity() {
        var quantity = Math.random() * (50 - 1);
        return Math.round(quantity);
    };
}

// Create instances of the Drug class
var drugList = [
    cocaine = new Drug("Cocaine", 15000, 28000),
    weed = new Drug("Weed", 200, 850),
    heroin = new Drug("Heroin", 5000, 15000),
    acid = new Drug("Acid", 1000, 3000),
    speed = new Drug("Speed", 80, 250),
    opium = new Drug("Opium", 500, 10000)
];

var drugMenu = drugList.map(function(drug) {
    return menu = {
        name: drug.name,
        price: drug.calculatePrice(),
        quantity: drug.calculateQuantity()
    }}).filter(function(drug) {
        return drug.quantity >= 5;
        }).map(function(drug) {
                $("#menuTable").append(
                "<tr><td>"+drug.name+
                "</td><td>$</td><td>"+drug.price+
                "</td><td>"+drug.quantity+"</td></tr>");
            });


/* TODO
    - Rebuild menu to allow drug selection
    - Add Available & Inventory to menu table
    - Build buy/sell mechanism
    - Create form that appears right of menu

    TO INCLUDE SCARCITY:
    - add scarcity value as last parameter of each drug in drugList
    - Add the following to object Drug():
        this.scarcity = scarcity;
    - Replace statement in Drug.prototype.calculateQuantity():
        var quantity = Math.random() * (this.scarcity - 1);
*/