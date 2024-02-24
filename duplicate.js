const My_fav=['burger', 'burger', 'potato', 'potato', 'water', 'water', 'water'];

function noDuplicate(array){
    const unique= [];
    for ( const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }

    }
    return unique;

}

const uniqueArray = noDuplicate(My_fav);
console.log(uniqueArray);




// number



const our_num= [12,23,34,112,34,12,12,12,223,23,23,23,34,34,23,12,34,456,23,23,23,34,34,34,34,34,34,34];


function noDuplicate1(Array1){
    
    const unique1=[];
    for ( const item1 of Array1){
        if(unique1.includes(item1)===false){
            unique1.push(item1);
        }
    }
    return unique1;
}

const uniqueArray1= noDuplicate1(our_num);
console.log(uniqueArray1);