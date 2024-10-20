// Making Object.
var houseKeeper1 = {
	name: "Angela",
	age: 32,
	experience: 4,
	cleaning: ["bathroom", "bedroom", "lobby"],
};

// Accessing object properties.
console.log(houseKeeper1.name);

// Constructor Function.
// Name of a constructor function should be in 'PascalCase'.
function HouseKeeper(name, age, experience, work) {
	this.name = name;
	this.age = age;
	this.experience = experience;
	this.work = work;
}

// Making new object from the constructor function.
var houseKeeper2 = new HouseKeeper("Mike", 47, 14, ["cooking", "washing"]);
console.log(houseKeeper2);
