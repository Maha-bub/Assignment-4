// calculateZooMn

let TotalIncome = 0;
let totolExpense = 0;
const everySingleTicketPrice = 120;
const everySingleStaffLaunch = 50;
const staff =8;
const guardSalary = 500;
let staffLaunchTotalCost=0;
let dailyTotalCost=0;

function calculateMoney(ticket) {

    // note: If no ticket sale then give and sad massege and close execution of Ticket acount operation 
    
    if(ticket<=0){
        return "Today No ticket sale. and faces lose lot's of amount of this zoo authority."
    }

    // node: if ticket sale is good amount then calculate all the day revenue and pay the maintanance cost
    
    else{
        TotalIncome = everySingleTicketPrice*ticket;
        staffLaunchTotalCost= staff * everySingleStaffLaunch;
        dailyTotalCost=guardSalary+staffLaunchTotalCost;

         let dailyIncome=TotalIncome-dailyTotalCost;
        return dailyIncome;            

    }
   
}
const saleTicket = -130;
const totalIncome = calculateMoney(saleTicket);
console.log(totalIncome);
