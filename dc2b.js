function dc2b(a){
    let pv=1;
    let ans=0;
    let rem;
    while(a>0){
        rem=a%2;
        ans=ans+pv*rem;
        a=Math.floor(a/2);
        pv=pv*10;
    }
    return ans;
}
let val=dc2b(14);
console.log(val);