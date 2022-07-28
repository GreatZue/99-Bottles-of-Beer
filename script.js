var itemCount = 99;
var word = "Bottles";
var drink = "Beer";
var changingVerse = itemCount + " " + word + " of " + drink + " on the wall! " + itemCount + " " + word + " of " + drink + "!";


while(itemCount > 0) {
    itemCount--;
    console.log("Take one down, pass it around")
    console.log(changingVerse);
}