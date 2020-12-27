
function balancedBraces(args) {

  try {
    let bracket_stack = []
     for (let char of args) {
        if (char === '(' || char === '{' || char === '['){
            bracket_stack.push(char)
        }else if(char === ')' || char === '}' || char === ']' ){
          if(bracket_stack.length == 0){
            throw false
          }else if(bracket_stack[bracket_stack.length-1] === char){
            bracket_stack.pop()
          }else{
            throw false
          }

        }
        console.log('current stack:  ', bracket_stack)
     }
     if (bracket_stack.length === 0){
       return true
     }else{
       return false
     }
  } catch (error) {
    return false
  }
  

}

export {
  balancedBraces,
};
