var presentPeople = readline().split(" ");
var allPeople = ["Alice", "Bob", "Cindy", "Dani"];
//loop through the array presentPeople
//if the current element in array allPeople is not included in presentPeople, stop the loop and output the name
for (var i = 0; i < allPeople.length; i++) {
    if (!presentPeople.includes(allPeople[i])) {
        print(allPeople[i]);
    }
}