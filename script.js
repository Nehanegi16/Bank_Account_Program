const acctBalanceLbl=document.getElementById("acctBalanceLbl")
const deposits=[];
const withdrawals=[];
let totalBalance=25;
const userDeposit=document.getElementById("userDeposit")
const btnDeposit=document.getElementById("btnDeposit")
const userWithdraw=document.getElementById("userWithdraw")
const btnWithdraw=document.getElementById("btnWithdraw")


let formatter=new Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:1
})

btnDeposit.addEventListener('click',()=>{
    if(isNaN(userDeposit.value)){
        alert("please enter the valid number")
        return userDeposit.value=''
    }
    else{
        if(userDeposit.value < 5 || userDeposit.value > 100000)
        {
            alert("you can only deposite between 5 and 100000")
            return userDeposit.value='';
        }
        else{
            deposits.push(Number(userDeposit.value))
            totalBalance+=(Number(userDeposit.value))
            let totalbalanceformat=formatter.format(totalBalance)
            document.getElementById("acctBalanceLbl").innerHTML=totalbalanceformat
            return userDeposit.value=''
        }
    }
})

btnWithdraw.addEventListener('click',()=>{
    if(isNaN(userWithdraw.value)){
        alert("please enter the valid number")
        return userWithdraw.value=''
    }
    else{
        if(userWithdraw.value>totalBalance-5)
        {
            alert("you cant't withdraw because of Insufficent balnace")
            alert("please Deposit the money first")
            return userWithdraw.value='';
        }
        else{
            withdrawals.push(Number(userWithdraw.value))
            totalBalance-=(Number(userWithdraw.value))
            let totalbalanceformat=formatter.format(totalBalance)
            document.getElementById("acctBalanceLbl").innerHTML=totalbalanceformat
            console.log(withdrawals)
            return userWithdraw.value=''
        }
    }
})
let totalbalanceformat=formatter.format(totalBalance)
 document.getElementById("acctBalanceLbl").innerHTML=totalbalanceformat