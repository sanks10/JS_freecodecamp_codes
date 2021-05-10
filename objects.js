let obj={};
console.log(obj);
obj={name:'Tony',
Lastname:'Stark',
age:44,
Friends:['Steve','Peter Parker','bruce Wane'],
sex:null,
spouse:undefined,
address:{
    street:'Newyork, walnut',
    nation:'USA',
    Birth:'Los Angeles, OC'
},
bingewatches: function f(){
    console.log('Endgame');
    return 'Endgame';
} ,
func: fd(),
i:'3'
}
function fd(){
    return 33;
}
console.log(obj.bingewatches);
console.log(obj);
for(let i in obj){
    console.log(obj.i);
}