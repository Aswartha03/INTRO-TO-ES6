let pattern = (n)=>{
    for(let i=0;i<n-1;i++){
        let result=""
        for(let j=0;j<(n-i-1);j++){
            result+=" "
        }
        for(let j=0;j<2*(i)+1;j++)   {
            result+="*"
        } 
        console.log(result)
    }
    for(let i=0;i<n;i++){
        let ans=""
        for(let j=0;j<n-1;j++){
            ans+=" "
        }
        ans+="|"
        console.log(ans)
        break
    }
}
pattern(5)
// pattern(4)