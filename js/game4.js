let array = [];

function lottery(numA) {
    console.log("enter " + numA);
    array.push(numA);
    console.log("enter " + array);
    if (array.length == 3) {
        if (array[0] == 1 && array[1] == 1 && array[2] == 4) {
            document.getElementById("result").innerHTML = "all the numbers are correct(even the order):  $10,000 prize";
            array = [];
        } else if (numA == 1 && array[1] == 1 || array[1] == 1 && array[2] == 4 || array[2] == 4 && numA == 1) {
            document.getElementById("result").innerHTML = "all the numbers are correct, but not order: $3,000 prize";
            array = [];
        } else if (numA == 1 || array[1] == 1 || array[2] == 4) {
            document.getElementById("result").innerHTML = "two numbers are correct out of three numbers:$1,000 prize";
            array = [];
        } else {
            document.getElementById("result").innerHTML = "all others: No prize";
            array = [];
        }
    }
}