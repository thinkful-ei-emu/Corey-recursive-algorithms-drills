/*Sheep jumps over the fence*/
function sheepSleep(sheep) {

  if(sheep === 0) {
    return ('All sheep jumped over the fence');
  }
  return ('Another sheep jump over the fence')+sheepSleep(sheep-1);
}

console.log(sheepSleep(3));



/*POWERRRRR Calculator*/
function powerCalculator(base, exp) {

  if(exp < 0) {
    return 'exponent should be greater than or equal to 0';
  }
  if(exp === 0) {
    return 1;
  }
  return base * powerCalculator(base, exp-1);
}

console.log(powerCalculator(10,2));



/*esreveR gnirtS*/
function reverseString(str) {
  if (str.length === 0) {
    return '';
  }
  return str[str.length-1] + reverseString(str.slice(0, str.length-1));
}

console.log(reverseString('computer'));



/*nTh triangular*/
function triangularNum(n) {
  if(n === 1){
    return 1;
  }
  return n + triangularNum(n-1);
}

console.log(triangularNum(4));



/*String Splitter*/
function splitter(str){
  if(str.length === 0){
    return '';
  }
  if(str[0] === '/') {
    return splitter(str.slice(1));
  }
  return str[0] + splitter(str.slice(1));
}

console.log(splitter('02/20/2020'));



/*Fibonacci*/
function fibonacci(n) {
  if(n === 1){
    return 1;
  }
  if(n === 2){
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));



/*Factorial*/
function factorial(n) {
  if(n === 1){
    return 1;
  }
  return n * factorial(n-1);
}

console.log(factorial(8));



/*MaZe*/
function mazeGame(maze, x=0, y=0, movements){

  if(x >= maze[0].length || y >= maze.length)
    return;
  
  if(x < 0 || y < 0)
    return;

  //console.log(maze[x][y]);

  mazeGame(maze, x+1, y);
  mazeGame(maze, x, y+1);

  /* 
  maze x=[0], y=[1] => 'R'
  maze[0][2]  'R'
  maze[1][2]  'D'
  maze[2][2]  'D' 
  */

}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

//console.log(mazeGame(mySmallMaze));



/*Binary*/
function binaryRep(num) {
  if(num <= 0) {
    return '';
  }
  let binary = num%2;
  return binaryRep(Math.floor(num/2)) + binary;
}

console.log(binaryRep(37));