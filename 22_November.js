function diamond(n) {
  if(n > 0 && n%2 === 1) {
    let result = '', mid = Math.ceil(n/2);
    for ( let i = 1; i <= n; i++ ) {
      if ( i <= mid ) {
        result += ' '.repeat(mid-i) + '*'.repeat(2*i-1) + '\n'
      } else {
        result += ' '.repeat(i-mid) + '*'.repeat(2*(n-i)+1) + '\n'
      }
    } return result
  } else return null
}


console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(7))
console.log(diamond(2), null)



function parse (data) {
  let arr = data.split(""), result = [], count = 0
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] === 'i') count++
    else if(arr[i] === 'd') count--
    else if(arr[i] === 's') count = Math.pow(count, 2)
    else if(arr[i] === 'o') result.push(count) 
  }
  return result
}


// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
console.log(parse("iiisdoso"), [ 8, 64 ])
console.log(parse("iiisxxxdoso"), [ 8, 64 ])



function partsSums(ls) {
  if(!ls.length) return [0]
    let result = []
    let count = 0
    while(ls.length) {
      for(let i = 0; i < ls.length; i++) {
        count += ls[i]
      }
      result.push(count)
      ls.shift()
      count = 0
    }
    result[result.length] = 0
    return result
}


console.log(partsSums([]))
console.log(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0])
console.log(partsSums([6710213, 2579358, 744125, 935, 889, 810, 454, 430, 407, 144, 90]))
