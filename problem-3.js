const arr =[NaN,1,12,0,-1,undefined];
function deleteInvalid(arr){
    const numArray=[];
    for(const item of arr){
        if(typeof item==="number" && !Number.isNaN(item)){
            numArray.push(item);

        }
    } return numArray;
}

const numberArray = deleteInvalid(arr)
console.log(numberArray);