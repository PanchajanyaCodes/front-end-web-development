function HouseKeeper(name, age, experience, work) {
	this.name = name;
	this.age = age;
	this.experience = experience;
	this.work = work;

	// Making Methods.
	// methods are functions defined inside an object to perform a specific task.
	this.clean = function () {
		alert("Cleaning in Progress....");
	};
}

var houseKeeper1 = new HouseKeeper("Mike", 47, 14, ["cooking", "washing"]);
houseKeeper1.clean();
