function writeCards(array, string){
 const newArray = []
 for(let i = 0;1< array.length; i++){
 newArray.push(`Thank you, $(array[i]}, for the wonderful ${string} gift`);  
    }
    return newArray;    
}

function countDown(number){
  while (number >= 0){
    console.log(number--)
    }
}
