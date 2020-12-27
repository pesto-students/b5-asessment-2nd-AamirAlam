const arrayCubeRootToJson = arr => {
   
    result = {}
    try {
        if (! Array.isArray(arr)){
            throw "Invalid input ! it must be an array";;
        }
        if (null in arr){
            throw "Invalid input ! Please pass array of integers only";
        }
        if (arr.length == 0){
            throw "Invalid input ! Array must contains elements";
        }
        arr.forEach(element => {

            if (typeof(element) !== 'number'){
                throw "Invalid input ! Array element must be integers";
            }
            result[`${element}`] = Math.cbrt(element)
           
       });     
    } catch (error) {
        return error
    }
   
   return result
};

res = arrayCubeRootToJson([23,27])
export { arrayCubeRootToJson };
