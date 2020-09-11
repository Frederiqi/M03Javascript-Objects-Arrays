let person = {
    name: "Frederika",
    age: 49,
    evaluations: [7, 10, 9],
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
console.log(person.evaluations);
let colors = ["groen", "blauw", "rood"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
colors.push("geel");
console.log(colors);
colors.push(5);
console.log(colors);
colors.push({ greeting: "Hi, ik ben een object" });
console.log(colors);
console.log(colors[colors.length - 1]);

