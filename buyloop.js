var balance = 1000;
-while (balance > 0){
    var spent = prompt("how much do you want to spend?");

    while (spent > balance){
        spent = prompt("thats to much money. Your balance is" + balance + "how much do you want to spend");
    }
    balance = balance - spent;;
    console.log("your balance is" + balance);
}
