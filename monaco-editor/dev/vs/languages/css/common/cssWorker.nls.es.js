/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.4.2(1ebfb1b687c4345ac9c6da39051431a46c120a65)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/languages/css/common/cssWorker.nls.es", {
	"vs/languages/css/common/cssWorker": [
		"@keyframes {0}",
		"@font-face",
		"Cambiar el nombre a \"{0}\"",
	],
	"vs/languages/css/common/parser/cssErrors": [
		"se esperaba un número",
		"se esperaba una condición",
		"se esperaba una regla at o un selector",
		"se esperaba un punto",
		"se esperaba una coma",
		"se esperaba punto y coma",
		"se esperaba un término",
		"se esperaba una expresión",
		"se esperaba un operador",
		"se esperaba un identificador",
		"se esperaba un porcentaje",
		"se esperaba una URI o una cadena",
		"se esperaba una URI",
		"se esperaba un nombre de variable",
		"se esperaba un valor de variable",
		"se esperaba un valor de propiedad",
		"se esperaba {",
		"se esperaba }",
		"se esperaba [",
		"se esperaba ]",
		"se esperaba (",
		"se esperaba )",
		"se esperaba una coma",
		"se esperaba una directiva o una declaración de página",
		"regla at desconocida",
		"palabra clave desconocida",
		"se esperaba un selector",
		"se esperaba un literal de cadena",
	],
	"vs/languages/css/common/services/intelliSense": [
		"Crea un color a partir de valores rojo, verde y azul.",
		"Crea un color a partir de valores alfa, rojo, verde y azul.",
		"Crea un color a partir de valores de matiz, saturación y claridad.",
		"Crea un color a partir de valores alfa, de matiz, saturación y claridad.",
	],
	"vs/languages/css/common/services/lint": [
		"\'{0}\'",
		"{0}, \'{1}\'",
		"Defina siempre la regla estándar \'@keyframes\' al definir fotogramas clave.",
		"Incluya siempre todas las reglas específicas del proveedor: Falta: {0}",
		"Defina también la propiedad estándar \'{0}\' para la compatibilidad.",
		"Incluya siempre todas las propiedades específicas del proveedor: Falta: {0}",
	],
	"vs/languages/css/common/services/lintRules": [
		"Cuando use un prefijo específico del proveedor, compruebe que también haya incluido el resto de propiedades específicas del proveedor.",
		"Cuando use un prefijo específico del proveedor, incluya también la propiedad estándar.",
		"No use definiciones de estilo duplicadas.",
		"No use conjuntos de reglas vacíos.",
		"Las instrucciones Import no se cargan en paralelo.",
		"No use ancho o alto con el relleno o los bordes.",
		"Se sabe que el selector universal (*) es lento.",
		"No se necesita una unidad para cero.",
		"La regla @font-face debe definir las propiedades \'src\' y \'font-family\'.",
		"Los colores hexadecimales deben estar formados por tres o seis números hexadecimales.",
		"Número de parámetros no válido",
		"Propiedad desconocida.",
		"Las modificaciones de IE solo son necesarias cuando admiten IE7 y anteriores",
		"Propiedad específica del proveedor desconocida.",
		"La propiedad se ignora a causa de la pantalla. Por ejemplo, con \'display: inline\', el ancho, el alto, el margen superior e inferior y las propiedades de float no tienen efecto.",
		"Le recomendamos no usar !important. Esto indica que la especificidad de todo el CSS está fuera de control y que debe refactorizarse.",
		"Le recomendamos no usar \'float\'. Los floats producen CSS frágiles, fáciles de corromper si cambia cualquier aspecto del diseño.",
		"Los selectores no deben contener identificadores porque estas reglas están estrechamente ligadas a HTML.",
		"Habilita o deshabilita todas las validaciones.",
	]
});