let billAmount = document.querySelector(".billamount");
let cashAmount = document.querySelector(".cashamount");
let btn = document.querySelector(".btn");
const message = document.querySelector(".message");
const noOfNotes = document.querySelectorAll(".noofnotes");

const availbleNotes = [2000,500,200,100,50,20,10,5,1];


btn.addEventListener('click',()=>{
  hideMessage();
let  firstValue=Number(billAmount.value);
  let secValue=Number(cashAmount.value);

  

  if(secValue>firstValue){
   let remindAmount = secValue-firstValue;
   calculateNotes(remindAmount);
 }
  else if(firstValue<0||secValue<0){
    showMessage("Please Enter Positive Bill");
  }
else if(firstValue>secValue || firstValue==secValue){
  showMessage("You have to pay more Rs. "+(firstValue-secValue));
}
else{
  showMessage("invalid");
}


  

})

function calculateNotes(remindAmt){
 
  console.log(remindAmt);
for(let i=0;i<availbleNotes.length;i++){
  const numberOfNotes = Math.trunc(remindAmt/availbleNotes[i]); 

  remindAmt=remindAmt%availbleNotes[i];
 
noOfNotes[i].innerHTML = numberOfNotes;
}
   
}
function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg){
  message.style.display = "block";
 message.innerHTML=msg;

}
