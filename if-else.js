
// // var name = "rumon";
// // var package = "10mbps";
// // var bill = 500;
// // var pay = 600;
// // var due = bill - pay;

// // console.log(name);
// // console.log(package);

// // if(pay == bill){
// //     console.log("Paid");
// // }
// // else if(pay > bill){
// //     console.log("Advanced")
// // }

// // else{
// //     console.log("Unpaid");
// // }



// // // Payment wise Package Update
// var payment = 550;

// if(payment === 500){
//     console.log("8mbps")
// }
// else if(payment === 600){
//     console.log("10mbps")
// }
// else if(payment === 800){
//     console.log("15mbps")
// }
// else if(payment === 1000){
//     console.log("20mbps")
// }
// else{
//     console.log("add more money")
// }



// Example &&

// var hour = 15;

// if (hour >= 6 && hour <12){
//     console.log("Good morning!")
// }else {
//     if(hour >= 12 && hour < 18){
//     console.log("Good afternoon!")

//     }
//     else{
//     console.log("Good evening")

//     }
// }


// logical or |

// var x = 5;

// if(x > 5 || x > 10){
//     console.log("true")
// }else   {
//     console.log("false")
// }



var wifiBill = 500;
var payBill =  500;
var dueBill = wifiBill - payBill;
var advacedBill = payBill - wifiBill;

if (payBill === wifiBill) {
    console.log('Paid');
     if(wifiBill === payBill){
        console.log('thanks for paying your internet bill');
    }
}

else if (payBill > wifiBill) {
    console.log('Advanced');
}

else {
    console.log('Unpaid');
}

// another if-else using find-out the number
if (payBill > wifiBill){
    console.log(advacedBill, 'TK');
}

else if(wifiBill === payBill){
    console.log(payBill, 'TK');
}


else {
    console.log(dueBill, 'TK');
}