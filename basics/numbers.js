const score = 100
console.log(score )

const numberone = new Number(400)
console.log(numberone)

console.log(numberone.toString())
console.log(score.toString().length)
console.log(numberone.length)

//tofixed method is used to show precision value specially use it for ecommerce sites

console.log(score.toFixed(3)) 

// tolocalestring is used for converting big numbers in international standards for indian standards just put en-In ;

const price = 1000067
console.log(price.toLocaleString('en-In'))

console.log(`Hello my price is ${price}`)
const name = "yash"

console.log(isNaN(name))