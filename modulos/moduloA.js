function foo() {
	return ("Esta es la funcion 'foo' ")
}

export var a = "este es el modulo A";


var arr = [1,2,3]

export { arr, foo };



/**  SECCION DEFAULT */

// function foo() {
// 	return ("Esta es la funcion 'foo' ")
// }

// export default foo;

// export { foo as default }; 
// Existe una "pequeña diferencia" aquí


//  export default function foo() {
// 	return ("Esta es la funcion 'foo' ")
// }

// setInterval(()=> console.log(foo()), 1000)

// setTimeout(()=> foo = () =>'hola', 5000);


//  export default foo = () => "Esta es la funcion 'foo'"
/*
    ERRROR!!!!!!!!!
*/
