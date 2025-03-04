let brick=(H,W)=>{
    for(let i=0;i<H;i++){
        let ans=""
        if(i%2==0){
            for(let j=0;j<W;j++){
                ans+="[]"+" "
            }
        }
        else{
            ans+="  "
            for(let j=0;j<W;j++){ans+="[]"+" "}
            // ans=
        }
        console.log(ans)
    }
}
brick(4,5)