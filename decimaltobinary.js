function f1(n){
    if(n<=0){
        return;
    }
f1(Math.floor(n/2));
console.log(n%2);
}
f1(14);