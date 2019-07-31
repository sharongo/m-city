export const matchesLooper = (matches) => {
    // const data = [];

    // matches.forEach(element => {
    //     data.push({
    //         ...element.val(),
    //         id: element.key
    //     })
    // });
    // return data;


    const matchesArray = []
    const data = Object.keys(matches).map((key) => {
        matchesArray.push({
         ...matches[key],
         id: key
     })
    });
    const LastSixMactches = matchesArray.slice(6,12);
    const mactchesToReturn = reverseArray(LastSixMactches);
    return mactchesToReturn

    
}

export const reverseArray = (inputArray) => {
    const reversedArray = [];

    for(let i = inputArray.length-1; i >= 0; i--){
        reversedArray.push(inputArray[i])
    }
    return reversedArray;
}