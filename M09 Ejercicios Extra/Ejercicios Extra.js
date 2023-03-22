/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   /*let newArray = Object.entries(objeto)
   return newArray*/
var newArray = [ ];

for ( let key in objeto){
   const miniArray = [ key, objeto[key]];
   newArray.push(miniArray)
}
 return newArray
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj = {}

   for ( let letter of string ){
      if( obj.hasOwnProperty(letter)) obj[letter] +=1
      else {
         obj[letter] = 1
      }
   }

   return obj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var mayus = "";
   var minus = "";
     
   /*for (i = 0 ; i < string.length; i++){
      if (string[i] == string[i].toUpperCase() ){
     mayus =  mayus + string[i]
      } else {
        minus = minus + string[i]
      }
    }*/

   for ( let letter of string ){
      if ( letter == letter.toUpperCase() ) mayus += letter
      else minus += letter
   }


  return mayus + minus
  }


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabras = frase.split (" ");
  
   let reverseWord = palabras.map ( elem  => {
     let res = "";
     
     for ( let i = elem.length - 1 ; i >= 0; i--){
       res = res + elem[i]
     }
     return res 
   });
   
   return reverseWord.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero = numero.toString()
   if( numero.split("").reverse().join("") === numero ) return "Es capicua"
   return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   /*for ( var i = 0 ; i < string.length ; i++){
      if ( string[i] == "a" || string[i] == "b" ||string[i] == "c"){
         string.slice(i,+1)
      }
      return string
   }*/

let res = "";
let letras = "abc";

   for (var i = 0; i < string.length; i++){
      if ( !letras.includes(string[i])){
         res = res + string[i]
      }
   }
   return res
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   

   for ( let i = 0; i < arrayOfStrings.length - 1 ; i++){
      
      for (let j = i ; j < arrayOfStrings.length; j++){
         
         if (arrayOfStrings[i].length>arrayOfStrings[j].length){
            let temp = arrayOfStrings[i]
            arrayOfStrings[i]= arrayOfStrings[j]
            arrayOfStrings[j] = temp
         }
      }
      
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
var array3 = []

   for ( let i = 0 ; i < array1.length; i++){
      const elemt1 = array1[i]
      for (let j = 0; j < array2.length; j++) {
         const element2 = array2[j];
         if ( elemt1 === element2){
            array3.push (elemt1)
         }
         
      }
   }
   return array3
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
