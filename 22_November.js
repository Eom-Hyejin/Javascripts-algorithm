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

}


console.log(parse("iiisdoso"), [ 8, 64 ])
console.log(parse("iiisxxxdoso"), [ 8, 64 ])