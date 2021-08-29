function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
      newArray.push(-1 * array[i])
    }
    return newArray
  }

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {   
        newArray.push(array[i])
    }
    return newArray
 }

 function mapToDouble(array) {
     let newArray = []
     for (let i = 0; i < array.length; i ++ ) {
         newArray.push(array[i] * 2)
     }
     return newArray
 }

 function mapToSquare(array) {
     let newArray = []
     for(let i = 0; i < array.length; i ++ ) {
         newArray.push(array[i] * array[i])
     }
     return newArray
 }

 function reduceToTotal(array, startingPoint=0) {
    let sum = 0
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
        }
   return (sum + startingPoint)
 }

 function reduceToAllTrue(array) {
    for(let i = 0; i < array.length; i ++ ) {
      if (!array[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(array) {
    for(let i = 0; i < array.length; i ++ ) {
        if (array[i]) return true
    }
    return false
}
