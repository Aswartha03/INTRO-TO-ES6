let arr=[{name:"Aswartha",age:20},{name:'nani',age:20}]
let ans =JSON.stringify(arr)
for(let ele of ans){
    console.log(ele)}
let result=JSON.parse(ans)
console.log(result)
for(let ele of result){
    console.log(ele.name)
}
// console.log()
