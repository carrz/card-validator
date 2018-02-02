# VALIDADOR DE TARJETAS

`card-validator-by` es una libreria Javascript que permite verificar la validez de una tarjeta de crédito a través del algoritmo de Luhn. Adicionalmente la libreria es capaz de verificar el formato de cada uno de los campos que lo componen: 

* `cnIn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvvIn` (Card Verification Value): Código de validación de 3 dígitos
* `nameIn`: Nombre completo como aparece en la tarjeta

Al hacer las validaciones, la librería añade la clase `.error` a los `<input>`s que no pasen la validación, o la clase `.success` en caso de que sí pase. Los formatos aceptados son; campo card number acepta sólo números y desde 15 hasta 18 dígitos; campo fecha de expiración acepta sólo números y el símbolo '/' y en formato MM/YY donde los meses van del 01 al 12, y los años desde (20)18 hasta el (20)23; el campo código de verificación acepta sólo 3 dígitos; el campo nombre acepta sólo letras y espacios y no puede quedar vacío.

## Modo de uso

La libreria funcionará sobre un `form` que contenga 4 `input`s, cada uno con `id`. La forma de reconocer cada función es por el orden de cada campo, por lo que se debe tener especial cuidado en manterlo.
`function(cnIn, exp, cvvIn, nameIn, btnValid)`
`btnValid` refiere a la función que va a validar el número de la tarjeta con el algoritmo de Luhn, siempre y cuando todos los campos tengan la clase `.success`. La función `btnValid` puede retornar `true` de ser válida la tarjeta, o `false` en caso de ser inválida.

## Requerimientos Técnicos

El proyecto está realizado con las siguientes dependencias NPM:

+ Dependencias de Desarrollo
	- esLint ~v.4.15.0
	- babel-cli ~v.6.26.0,
  - babel-preset-env ~v.1.6.1,
  - mocha ~v.5.0.0,
	- chai ~v.4.1.2


## Levantamiento ambiente de desarrollo


+ Clonar repositorio.
+ Posicionado en nuestro proyecto hacer correr `npm install` para descargar e instalar todas las dependencias utilizadas.






