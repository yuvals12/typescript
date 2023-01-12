/*
const getAverage1=(():void =>//לא הבנתי למה הפעולה מחיזרה לי את הקלט
// ולא מבצעת את הלוגיקה ומחזירה ממוצע
{ 
let average:number = 0;
let str: string=prompt("enter list of numbers") ?? "null";
let arraynum:Array<number>=str.split(',').map((value:string)=>
{
return parseInt(value);
}
)
arraynum.forEach((value:number) =>
{
    average += value;
})
const completeave:number=average / arraynum.length;
alert(arraynum);
});
getAverage1();
/*

const getAverage=((array:number[]) :number =>
   { let sum:number = 0;
    array.forEach((value) => {
        sum += value;
    });
     return sum / array.length;
})
console.log(getAverage([1.5, 6, 1.5]));
*/
/*
const getAmountOfPositive=((array:number[]) :number =>
   { let amount:number = 0;
    array.forEach((value) => {
        if(value>0)
        amount++;
    });
     return amount
})
console.log(getAmountOfPositive([-1.5, 6, 1.5]));
*/


const sortList=((array:number[]) :void =>
{ 
    array.sort(function(a,b){return a-b})
    console.log(array);
})
console.log(sortList([-1.5, 6, 1.5]));

 
  
