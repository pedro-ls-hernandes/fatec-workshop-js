/*
####################################
# Pedro Lucas dos Santos Hernandes #
#             3º DSM               #
####################################
*/


//Solução 1 - Mantendo X como constante
const values = {
    x : 5, 
    y : 5
}
values.x = values.x + 10;

function somar (x,y) {
  r = x + y
  return r;
}

console.log(somar(values.x, values.y));


//Solução 2 - Mundando X para variável
const y = 5;
var x = 5;

x = x + 10;

function somar (x,y) {
  r = x + y
  return r;
}

console.log(somar(x, y));