   const DAY=document.querySelector('.day');
   const YEAR=document.querySelector('.year');
   const MONTH=document.querySelector('.month_change');
   const DAY_SPAN=document.querySelectorAll('.day span');
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
        let prev_month=new Date(today.getFullYear(),today.getMonth()+day_count.count-1,0);
        day_count.text="";
        day_count.arr=[];
        for(let i=0;i<6;i++){
            if(this_day.getDay()>i){
            day_count.arr[i]="<span class='prev'>"+((prev_month.getDate()-this_day.getDay()+1)+i)+"</span>";
            }
        }
        for(let j=0;j<this_month.getDate();j++){
          if(today.getDate()===j+1&&today.getMonth()===this_month.getMonth()){
            day_count.arr[j+this_day.getDay()]="<span class='active'>"+(j+1)+"</span>"
          }else{
            day_count.arr[j+this_day.getDay()]="<span>"+(j+1)+"</span>"
          }
        };
        for(let k=0;k<day_count.arr.length;k++){
            if((k+1)%7===0){
              day_count.arr[k]="<span class='sat'>"+(k+1-this_day.getDay())+"</span>"
              day_count.text+=day_count.arr[k]+'<br>';
            }else if((k+1)%7===1&&k+1!==1){
              day_count.arr[k]="<span class='sun'>"+(k+1-this_day.getDay())+"</span>"
              day_count.text+=day_count.arr[k];
            }else if(day_count.arr[0]==='<span>1</span>'){
              day_count.arr[k]="<span class='sun'>"+(k+1-this_day.getDay())+"</span>"
              day_count.text+=day_count.arr[k];
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
