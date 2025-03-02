const sales = [
    { product: "Laptop", amount: 2500, date: "2025-01-15", customer: "Alice" },
    { product: "Mouse", amount: 30, date: "2025-02-10", customer: "Bob" },
    { product: "Smartphone", amount: 900, date: "2025-02-15", customer: "Charlie" },
    { product: "Keyboard", amount: 150, date: "2025-02-18", customer: "David" },
    { product: "Monitor", amount: 400, date: "2025-02-20", customer: "Eve" },
    { product: "Headphones", amount: 220, date: "2025-02-22", customer: "Frank" }
  ];
  let arr=[]
  for(let i=0;i<sales.length;i++){
    if(sales[i].amount>200){
      arr.push(sales[i])
    }
  }
  
  let ans=[]
  for(let i=0;i<arr.length;i++){
    let obj={}
    obj["product"]=arr[i].product
    obj["amount"]=arr[i].amount
    ans.push(obj)
  }
  console.log(ans)
  let final=[]
  total_revenue=0
  for(let i=0;i<ans.length;i++){
    let v1=ans[i].product 
    let v2=ans[i].amount 
    final.push(v1+" sold for "+"$"+v2)
    total_revenue+=v2
  }
  console.log(final)
  console.log("Total Revenue: $"+total_revenue)