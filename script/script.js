   const DAY=document.querySelector('.day');
   const YEAR=document.querySelector('.year');
   const MONTH=document.querySelector('.month_change');
   const today=new Date();
   const day_count={
       count:1,
       arr:[],
       text:''
   }
   window.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector(".month").addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "keyboard_arrow_left":
          arrow(-1);
          break;
        case "keyboard_arrow_right":
          arrow(1);
          break;
        default:
          new Error("error");
          break;
      }
    });
    date();
});

    // day //
    function date(){
        let this_day=new Date(today.getFullYear(),today.getMonth()+day_count.count-1,1);
        let this_month=new Date(today.getFullYear(),today.getMonth()+day_count.count,0);
        day_count.text="";
        day_count.arr=[];
        for(let j=0;j<6;j++){
            if(this_day.getDay()>j){
            day_count.arr[j]="<span></span>";
            }
        }
        for(let i=0;i<this_month.getDate();i++){
            day_count.arr[i+this_day.getDay()]="<span>"+(i+1)+"</span>"
        };
        for(let k=0;k<day_count.arr.length;k++){
            if((k+1)%7===0){
            day_count.text+=day_count.arr[k]+'<br>';
            }else{
            day_count.text+=day_count.arr[k];
            }
        }
    DAY.innerHTML=day_count.text;
    MONTH.innerHTML=this_month.getMonth()+1;
    YEAR.innerHTML=this_month.getFullYear()+"년";
    }
    function arrow(value){
        day_count.count=day_count.count+value;
        date();
    }
