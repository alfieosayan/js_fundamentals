let ninja1 = {
	hp: 100,
	strength: 15,
	attack: function () {
		return Math.floor(Math.random() * this.strength + 1);
	},
	update_hp: function (updated_hp) {
		this.hp = updated_hp;
	},
};
let ninja2 = {
	hp: 150,
	strength: 10,
	attack: function () {
		return Math.floor(Math.random() * this.strength + 1);
	},
	update_hp: function (updated_hp) {
		this.hp = updated_hp;
	},
};

for (let i = 1; i <= 10; i++) {
	console.log(`===ROUND ${i}===`);
	let ninja1Attack = ninja1.attack();
	let ninja2hp = ninja2.hp - ninja1Attack;
	ninja2.update_hp(ninja2hp);
	console.log(
		`Ninja1 attacks Ninja2 and does a damage of ${ninja1Attack}! Ninja1 health: ${ninja1.hp}. Ninja2 health: ${ninja2hp}`
	);
	let ninja2Attack = ninja2.attack();
	let ninja1hp = ninja1.hp - ninja2Attack;
	ninja1.update_hp(ninja1hp);
	console.log(
		`Ninja2 attacks Ninja1 and does a damage of ${ninja2Attack}! Ninja1 health: ${ninja1hp}. Ninja2 health: ${ninja2.hp}`
	);
}

if (ninja1.hp > ninja2.hp) {
	console.log("NINJA1 WINS!");
} else {
	console.log("NINJA2 WINS!");
}
