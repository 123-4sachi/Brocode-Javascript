// foreach() = method used to itrerate over the elements of an array 
// and apply a specified functions (callback) to each element
// array.foreach(callback)


let names = ["spiderman","batman", "nunuman"];

names.forEach(upperCase);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
    

}
names.forEach(display);

function display(element){
    console.log(element);
    
}


names.forEach(addWord);

function addWord(element, index, array){
    // array[index] = element + " Hero";
    console.log(element + " hero");
    
}
