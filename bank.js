console.log("welcome to Atm")
let pin=parseInt(prompt("enter pin number"))
let AC=100000;
let userExist=false;
for(let i=0;i<9999;i++){
    if(i==pin){
        console.log("user exist")
        userExist=true;
        break
    }
}
if(!userExist){
    console.log("user not exist")
}
else{
    while(true){
    console.log("1.deposit\n2.withdraw\n3.Balance Enquiry\n4.Exit")
    let choice=parseInt(prompt("Enter your choice"))
    if(choice===1){
        let dep=parseInt(prompt("enter amount to deposit:"))
        AC=AC+dep;
        console.log("now your account balance is",AC)

    }
    else if(choice===2){
        let wth=parseInt(prompt("enter amount to withdraw:"))
        AC=AC-wth;
        console.log("now your account balance is",AC)
    }
    else if(choice===3){
        console.log("now your account balance is",AC)
    }
    else if(choice===4){
        console.log("thanks for coming")
        break
    }
    else{
        console.log("invalid input")
        break;
    }
let next=prompt("yes or no")
if(next.toLowerCase()==="no"){
    console.log("Thanks for coming,visit again")
    break;
}
}
}
