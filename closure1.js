function outerFunction(){
    let message="Hi Aswarth"
    return function innerFunction()
    {
        console.log(message)
    }
    return innerFunction
}
let answer=outerFunction()
answer()