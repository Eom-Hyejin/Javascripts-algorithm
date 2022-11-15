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
  // let sum = ls.reduce((cur, next) => cur+next, 0)
  // let result = [sum]

  // for(let i = 0; i < ls.length; i++) {
  //   sum -= ls[i]
  //   result.push(sum)
  // }
  // return result
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  
  return ls.map(v => sum = sum - v);
}


// console.log(partsSums([]))
console.log(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0])
console.log(partsSums([6710213, 2579358, 744125, 935, 889, 810, 454, 430, 407, 144, 90]))



multiplicationTable = function(size) {
  // let arr = new Array(size).fill(new Array(size).fill(0))
  let arr = Array.from(Array(size), () => new Array(size).fill(0))

  for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= size; j++) {
      arr[i-1][j-1] = i*j 
    }
  }
  return arr
}


console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]])




function cleanString(s) {
  let arr = s.split(""), result = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== '#') result.push(arr[i])
    else result.pop()
  }
  return result.join("")
}


console.log(cleanString('abc#d##c'), 'ac')
console.log(cleanString('abc####d##c#'), '')



function encode(string) {
  string = string.split("")
  let obj = { a : 1, e : 2, i : 3, o : 4, u : 5 }

  for(let i = 0; i < string.length; i++) {
    if(string[i] in obj) {
      string[i] = obj[string[i]]
    }
  }
  return string.join("")
}


function decode(string) {
  string = string.split("")
  let obj = { 1 : 'a', 2 : 'e', 3 : 'i', 4 : 'o', 5 : 'u' }
  
  for(let i = 0; i < string.length; i++) {
    if(string[i] in obj) {
      string[i] = obj[string[i]]
    }
  }
  return string.join("")
}


console.log(encode('hello'), 'h2ll4')
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?')
console.log(decode('h2ll4'), 'hello')
