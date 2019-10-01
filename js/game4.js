function lottery(numA,numB,numC) {
    if (numA == 50 && numB == 60 && numC == 70) {
        console.log("all the numbers are correct(even the order):  $10,000 prize");
    } else if (numA == 50 && numB == 60 || numB == 60 && numC == 70 || numC == 70 && numA == 50) {
        console.log("all the numbers are correct, but not order: $3,000 prize");
    } else if (numA == 50 || numB == 60 || numC == 70) {
        console.log("two numbers are correct out of three numbers:$1,000 prize");
    }else{
        console.log("all others: No prize");
    }
}