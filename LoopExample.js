let x="*";
let arr=[];
for(let i=1;i<=6;i++){
    console.log(x);
    x+='*';
    arr.push('*');
}

console.log('example 2');

 for(let j=7;j>=1;j--){
    console.log(arr.join(''));
    arr.pop();
 }

console.log("exercise 3" +"\n")
let y=[' ',' ',' ',' ',' '];
for(let a=4;a>=0;a--){
    y[a]='*';
  console.log(y.join(''));
}
for(let b=0;b<=4;b++){
    y[b]=' '
    console.log(y.join(''));
}
console.log("Exercise 4");

// let k='';
// for(let c=1;c<=9;c++){
//     k='*';
    
//     console.log(k.join(' '));
//  }
console.log("Exercise 5");
let w=['*','*','*','*','*','*' ,'*'];
let v=[' ',' ',' ',' ',' ',' ' ,'*'];
console.log(w.join(''));
for(let b=0;b<=6;b++){
    // v[b]='*';
    console.log(v.join(''));  
}

console.log("Exercise 5");
let z=['*','*','*','*','*','*' ,'*'];
let g=['* ',' ',' ',' ',' ',' ' ,' '];
console.log(z.join(''));
for(let d=0;d<=6;d++){
    // v[b]='*';
    console.log(g.join(''));  
}