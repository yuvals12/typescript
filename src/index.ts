/*
let average:number = 0;
let str: string=prompt("enter list of numbers") ?? "null";
let arraynum:Array<number>=[];
let arraystr:Array<string>=str.split(',');
arraystr.map((value:string)=>
{
   arraynum.push( parseInt(value));
}
)
arraynum.forEach((value:number) =>
{
    average += value;
})

const completeave:number= average / arraynum.length;
alert(arraystr);
*/
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


const sortList2=((array:number[]) :void =>
{ 
    array.sort(function(a,b){return a-b})
})

 
  
