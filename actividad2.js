function elementosComunes(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
    return result;
  }
  
let array1 = ['juan', 'carlos', 'jose'];
let array2 = ['juan', 'matias', 'matias'];
let resultado = elementosComunes(array1, array2);
console.log(resultado);

let array3 = [4, 3, true, 'manzana', 7, 9];
let array4 = ['pera', 3, false, true, 3, true, 7, 9];
let resultado2 = elementosComunes(array3, array4);
console.log(resultado2); 
