function confirmEnding(str, target) {
    let b=target.length;
    let a=str.length;
    let newstr=(str.slice(a-b));
    console.log(newstr);
    if(newstr==target){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
confirmEnding("Open sesame", "same");

//     if(newstr[newstr.length-1]==target){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
//   let ans=confirmEnding("Congratulation", "on");
//   console.log(ans);