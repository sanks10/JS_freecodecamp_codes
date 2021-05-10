let a=[2,4,9,1,11,87];
function f(b){
    let z=b[0],y=b[0];
    for(let i=1;i<b.length;i++){
    if(b[i]>z){
        z=b[i];
    }
    if(b[i]<y){
        y=b[i];
    }
}
return {y,z};
    
}

let ans=[]
ans=f(a);
console.log(ans);