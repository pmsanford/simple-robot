/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.4.2(1ebfb1b687c4345ac9c6da39051431a46c120a65)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.es",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (ocurrió de nuevo)"],"vs/base/browser/ui/findinput/findInput":["Usar expresión regular","Solo palabras completas","Coincidir mayúsculas y minúsculas","entrada"],"vs/base/browser/ui/inputbox/inputBox":["Error: {0}","Advertencia: {0}","Información: {0}"],"vs/base/common/errors":["{0}. Código de error: {1}","Permiso denegado (HTTP {0})","Permiso denegado","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Error de conexión desconocido ({0})","Error de conexión desconocido. Es posible que ya no esté conectado a Internet o que el servidor al que se había conectado esté sin conexión.","{0}:{1}","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","Se produjo un error del sistema ({0})","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","{0} ({1} errores en total)","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","Sin implementar","Argumento no válido: {0}","Argumento no válido","Estado no válido: {0}","Estado no válido","No se pudo cargar un archivo necesario. O bien no está conectado a Internet o el servidor al que se había conectado está sin conexión. Actualice el explorador y vuelva a intentarlo.","No se pudo cargar un archivo requerido. Reinicie la aplicación para intentarlo de nuevo. Detalles: {0}"],"vs/base/common/json":["Invalid symbol","Invalid number format","Property name expected","Value expected","Colon expected","Comma expected","Closing brace expected","Closing bracket expected","End of file expected"],"vs/base/common/keyCodes":["Windows","Control","Mayús","Alt","Cmd","Windows","Ctrl","Mayús","Alt","Cmd","Windows"],"vs/base/common/severity":["Error","Advertencia","Información"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, selector","selector"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Selector rápido. Escriba para restringir los resultados.","Selector rápido"],"vs/base/parts/tree/browser/treeDefaults":["Collapse"],"vs/editor/browser/standalone/standaloneSchemas":["JSON schema for ASP.NET project.json files","Compilation options that are passed through to Roslyn","The version of the dependency.","The type of the dependency. 'build' dependencies only exist at build time","The dependencies of the application. Each entry specifes the name and the version of a Nuget package.","A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version","The author of the application","List of files to exclude from publish output (kpm bundle).","Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","Commands that are available for this application","Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.","The description of the application","Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).","Target frameworks that will be built, and dependencies that are specific to the configuration.","Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).","Glob pattern to indicate all the files that need to be compiled as resources.","Scripts to execute during the various stages.","Glob pattern to specify the code files to share with dependent projects. Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","The version of the application. Example: 1.2.0.0","Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.","JSON schema for Bower configuration files","Any property starting with _ is valid.","The name of your package.","Help users identify and search for your package with a brief description.","A semantic version number.","The primary acting files necessary to use your package.","SPDX license identifier or path/url to a license.","A list of files for Bower to ignore when installing your package.","Used for search by keyword. Helps make your package easier to discover without people needing to know its name.","A list of people that authored the contents of the package.","URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.","The repository in which the source code can be found.","Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.","Dependencies that are only needed for development of the package, e.g., test framework or building documentation.","Dependency versions to automatically resolve with if conflicts occur between packages.","If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.","Used by grunt-bower-task to specify custom install locations.","The types of modules this package exposes","NPM configuration for this package.","A person who has been involved in creating or maintaining this package","Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.","Any property starting with _ is valid.","The name of the package.","Version must be parseable by node-semver, which is bundled with npm as a dependency.","This helps people discover your package, as it's listed in 'npm search'.","The relative path to the icon of the package.","This helps people discover your package as it's listed in 'npm search'.","The url to the project homepage.","The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.","The url to your project's issue tracker.","The email address to which issues should be reported.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","A list of people who contributed to this package.","A list of people who maintains this package.","The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.","The main field is a module ID that is the primary entry point to your program.","Specify either a single file or an array of filenames to put in place for the man program to find.","If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.","Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.","Put example scripts in here. Someday, it might be exposed in some clever way.","Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.","A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.","Specify the place where your code lives. This is helpful for people who want to contribute.","The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.","A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.","Array of package names that will be bundled when publishing the package.","Array of package names that will be bundled when publishing the package.","If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.","If set to true, then npm will refuse to publish it.","JSON schema for the ASP.NET global configuration files","A list of project folders relative to this file.","A list of source folders relative to this file.","The runtime to use.","The runtime version to use.","The runtime to use, e.g. coreclr","The runtime architecture to use, e.g. x64.","JSON schema for the TypeScript compiler's configuration file","Instructs the TypeScript compiler how to compile .ts files","The character set of the input files","Generates corresponding d.ts files.","Show diagnostic information.","Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","Emit a single file with source maps instead of having a separate file.","Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.","Print names of files part of the compilation.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Specify module code generation: 'CommonJS', 'Amd', 'System', or 'UMD'.","Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).)","Do not emit output.","Do not emit outputs if any type checking errors were reported.","Do not generate custom helper functions like __extends in compiled output.","Warn on expressions and declarations with an implied 'any' type.","Do not include the default library file (lib.d.ts).","Do not add triple-slash references or module import targets to the list of compiled files.","Concatenate and emit output to single file.","Redirect output structure to the directory.","Do not erase const enum declarations in generated code.","Do not emit comments to output.","Specifies the root directory of input files. Use to control the output directory structure with --outDir.","Generates corresponding '.map' file.","Specifies the location where debugger should locate TypeScript files instead of source locations.","Suppress noImplicitAny errors for indexing objects lacking index signatures.","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Watch input files.","Enable the JSX option (requires TypeScript 1.6):  'preserve', 'react'.","Emits meta data.for ES7 decorators.","Supports transpiling single TS files into JS files.","Enables experimental support for ES7 decorators.","Enables experimental support for async functions (requires TypeScript 1.6).","If no 'files' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","JSON schema for the JavaScript configuration file","Instructs the JavaScript language service how to validate .js files","The character set of the input files","Show diagnostic information.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Module code generation to resolve against: 'commonjs', 'amd', 'system', or 'umd'.","Do not include the default library file (lib.d.ts).","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Enables experimental support for ES7 decorators.","If no 'files' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","List files and folders that should not be included. This property is not honored when the 'files' property is present."],"vs/editor/common/config/commonEditorConfig":["Configuración del editor","Controla la familia de fuentes.","Controla el tamaño de la fuente.","Controla la altura de línea.","Controla la visibilidad de los números de línea","Controla la visibilidad del margen del glifo","Columnas en las que mostrar reglas verticales","Caracteres que se usarán como separadores de palabras al realizar operaciones o navegaciones relacionadas con palabras.","El número de espacios a los que equivale una tabulación.",'Se esperaba "number". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".',"Insertar espacios al presionar TAB.",'Se esperaba "boolean". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".',"Al abrir un archivo, se detectarán `editor.tabSize` y `editor.insertSpaces` en función del contenido del archivo.","Controla si las selecciones tienen esquinas redondeadas","Controla si el editor se seguirá desplazando después de la última línea","Controla el número de caracteres tras los cuales el editor salta a la línea siguiente. Si el valor se establece en 0, se activa el ajuste del ancho de la ventanilla (ajuste de línea). Si se establece en -1, hace que el editor no ajuste las líneas nunca.","Controla el sangrado de las líneas ajustadas. Puede ser uno los valores 'none', 'same' o 'indent'.","Se utilizará un multiplicador en los eventos de desplazamiento de la rueda del mouse `deltaX` y `deltaY`","Controla si van a aparecer sugerencias rápidas mientras se escribe","Controla el retardo en ms tras el cual aparecerán sugerencias rápidas","Enables parameter hints","Controla si el editor debe cerrar automáticamente los corchetes después de abrirlos","Controla si el editor debe dar formato automáticamente a la línea después de escribirla","Controla si las sugerencias deben aparecer de forma automática al escribir caracteres desencadenadores",'Controla si las sugerencias deben aceptarse ("Entrar" además de "TAB"). Ayuda a evitar la ambigüedad entre insertar nuevas líneas o aceptar sugerencias.',"Controla si el editor debería destacar coincidencias similares a la selección","Controla el número de decoraciones que pueden aparecer en la misma posición en la regla de visión general",'Controla la animación intermitente del cursor. Los valores aceptados son "blink", "visible" y "hidden".','Controla el estilo del cursor. Los valores aceptados son "block" y "line".',"Habilita las ligaduras tipográficas.","Controla si el cursor debe ocultarse en la regla de visión general.","Controla si el editor debe representar los espacios en blanco","Controla si el editor muestra información de referencia para los modos compatibles","Controla si el editor tiene habilitado el plegado de código.","Inserting and deleting whitespace follows tab stops","Remove trailing auto inserted whitespace","Keep peek editors open even when double clicking their content or when hitting Escape.","Controla si el editor de diferencias muestra las diferencias en paralelo o alineadas.","Controla si el editor de diferencias muestra los cambios de espacio inicial o espacio final como diferencias.","Controla si el portapapeles principal de Linux debe admitirse."],"vs/editor/common/config/defaultConfig":["Contenido del editor"],"vs/editor/common/controller/cursor":["Excepción inesperada al ejecutar el comando."],"vs/editor/common/model/textModelWithTokens":["Error en el modo al convertir la entrada en tokens."],"vs/editor/common/modes/modesRegistry":["Texto sin formato"],"vs/editor/common/modes/supports/suggestSupport":["Enable word based suggestions."],"vs/editor/common/services/bulkEdit":["Estos archivos han cambiado durante el proceso: {0}"],"vs/editor/common/services/modeServiceImpl":["Aporta declaraciones de lenguaje.","Identificador del lenguaje.","Alias de nombre para el lenguaje.","Extensiones de archivo asociadas al lenguaje.","Nombres de archivo asociados al lenguaje.","Patrones globales de nombre de archivo asociados al lenguaje.","Tipos MIME asociados al lenguaje.","Expresión regular que coincide con la primera línea de un archivo del lenguaje.","Ruta de acceso relativa a un archivo que contiene opciones de configuración para el lenguaje.",'Valor vacío para "contributes.{0}"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','Elemento "contributes.{0}" no válido. Se esperaba una matriz.'],"vs/editor/common/services/modelServiceImpl":['Actualice la configuración: `editor.detectIndentation` reemplaza a `editor.tabSize`: "auto" o `editor.insertSpaces`: "auto"'],"vs/editor/contrib/accessibility/browser/accessibility":["Mostrar ayuda de accesibilidad","Gracias por probar las opciones de accesibilidad experimentales de VS Code.","Estado:","Al presionar TAB en este editor, el foco se mueve al siguiente elemento activable. Presione {0} para activar o desactivar este comportamiento.","Al presionar TAB en este editor, el foco se mueve al siguiente elemento activable. El comando {0} no se puede desencadenar actualmente mediante un enlace de teclado.","Al presionar TAB en este editor, se insertará el carácter de tabulación. Presione {0} para activar o desactivar este comportamiento.","Al presionar TAB en este editor, el foco se mueve al siguiente elemento activable. El comando {0} no se puede desencadenar actualmente mediante un enlace de teclado.","Para descartar esta información sobre herramientas y volver al editor, presione Esc."],"vs/editor/contrib/clipboard/browser/clipboard":["Cortar","Copiar","Pegar"],"vs/editor/contrib/comment/common/comment":["Alternar comentario de línea","Agregar comentario de línea","Quitar comentario de línea","Alternar comentario de bloque"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Mostrar menú contextual del editor"],"vs/editor/contrib/defineKeybinding/browser/defineKeybinding":["Definir enlace de teclado","Presione la combinación de teclas deseada y ENTRAR","Definir enlace de teclado","Para la distribución del teclado actual, presione ","La distribución del teclado actual no permite reproducir esta combinación de teclas."],"vs/editor/contrib/find/browser/findWidget":["Buscar","Buscar","Coincidencia anterior","Coincidencia siguiente","Buscar en selección","Cerrar","Reemplazar","Reemplazar","Reemplazar","Reemplazar todo","Alternar modo de reemplazar","Solo se resaltan los primeros 999 resultados, pero todas las operaciones de búsqueda trabajan en todo el texto.","{0} de {1}","No hay ningún resultado"],"vs/editor/contrib/find/common/findController":["Seleccionar todas las repeticiones de coincidencia de búsqueda","Cambiar todas las repeticiones","Buscar","Buscar siguiente","Buscar anterior","Buscar selección siguiente","Buscar selección anterior","Reemplazar","Mover última selección hasta la siguiente coincidencia de búsqueda","Agregar selección hasta la siguiente coincidencia de búsqueda"],"vs/editor/contrib/folding/browser/folding":["Desplegar","Unfold Recursively","Plegar","Fold Recursively","Plegar todo","Desplegar todo","Nivel de plegamiento 1","Nivel de plegamiento 2","Nivel de plegamiento 3","Nivel de plegamiento 4","Nivel de plegamiento 5"],"vs/editor/contrib/format/common/formatActions":["Código de formato"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – {0} definiciones","Haga clic para mostrar las {0} definiciones encontradas.","Ver la definición","Ir a definición","Abrir definición en el lateral"],"vs/editor/contrib/gotoError/browser/gotoError":["Correcciones recomendadas: ","Corrección recomendada: ","({0}/{1}) [{2}]","({0}/{1})","Ir al error o la advertencia siguiente","Ir al error o la advertencia anterior"],"vs/editor/contrib/hover/browser/hover":["Mostrar al mantener el puntero"],"vs/editor/contrib/hover/browser/modesContentHover":["Cargando..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Reemplazar con el valor anterior","Reemplazar con el valor siguiente"],"vs/editor/contrib/indentation/common/indentation":["Tamaño de tabulación configurado","Seleccionar tamaño de tabulación para el archivo actual","Convertir sangría en espacios","Convertir sangría en tabulaciones","Aplicar sangría con espacios","Aplicar sangría con tabulaciones","Detectar sangría del contenido","Alternar representación de espacio en blanco"],"vs/editor/contrib/linesOperations/common/linesOperations":["Eliminar línea","Ordenar líneas en orden ascendente","Ordenar líneas en orden descendente","Recortar espacio final","Mover línea hacia abajo","Mover línea hacia arriba","Copiar línea abajo","Copiar línea arriba","Sangría de línea","Anular sangría de línea","Insertar línea arriba","Insertar línea debajo"],"vs/editor/contrib/links/browser/links":["Cmd + clic para abrir el vínculo","Ctrl + clic para abrir el vínculo","URI no válido: no se puede abrir {0}","Abrir vínculo"],"vs/editor/contrib/multicursor/common/multicursor":["Agregar cursor arriba","Agregar cursor debajo","Crear varios cursores a partir de las líneas seleccionadas"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Sugerencias para parámetros Trigger"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, sugerencia"],"vs/editor/contrib/quickFix/browser/quickFix":["Corrección rápida"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}, sugerencia de corrección rápida","Cargando...","No hay sugerencias de correcciones.","Corrección rápida","{0}, aceptada"],"vs/editor/contrib/quickOpen/browser/gotoLine":["Ir a la línea {0} y la columna {1}","Ir a la línea {0}","Escriba el número de una línea comprendido entre 1 y {0} a la cual quiera navegar.","Escriba el número de columna entre 1 y {0} a la cual quiera navegar.","Go to line {0}","Ir a la línea...","Escriba un número de línea, seguido por dos puntos opcionales (:) y el número de la columna a la cual quiera navegar."],"vs/editor/contrib/quickOpen/browser/gotoLine.contribution":["Ir a la línea..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Paleta de comandos","Escriba el nombre de la acción que quiera ejecutar."],"vs/editor/contrib/quickOpen/browser/quickCommand.contribution":["Paleta de comandos"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Ir al símbolo...","Escriba el nombre del identificador al cual quiera navegar.","símbolos ({0})","módulos ({0})","clases ({0})","interfaces ({0})","métodos ({0})","funciones ({0})","propiedades ({0})","variables ({0})","variables ({0})","constructores ({0})","llamadas ({0})"],"vs/editor/contrib/quickOpen/browser/quickOutline.contribution":["Ir al símbolo..."],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} referencias","Buscar todas las referencias","Mostrar referencias"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Loading..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Failed to resolve file.","{0} references","{0} reference","no preview available","References","No results","References"],"vs/editor/contrib/rename/browser/rename":["Rename Symbol"],"vs/editor/contrib/rename/browser/renameInputField":["Cambie el nombre de la entrada. Escriba el nuevo nombre y presione Entrar para confirmar."],"vs/editor/contrib/rename/common/rename":["No hay ningún resultado."],"vs/editor/contrib/smartSelect/common/jumpToBracket":["Ir al corchete"],"vs/editor/contrib/smartSelect/common/smartSelect":["Expandir selección","Reducir selección"],"vs/editor/contrib/suggest/browser/suggest":["Sugerencias para Trigger"],"vs/editor/contrib/suggest/browser/suggestWidget":["Leer más...{0}","{0}, sugerencia, con detalles","{0}, sugerencia","Volver","Cargando...","No hay sugerencias.","{0}, aceptada","{0}, sugerencia, con detalles","{0}, sugerencia"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Alternar el uso de la tecla TAB para establecer el enfoque"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["Ver: Alternar ajuste de línea"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Cerrar"],"vs/languages/css/common/css.contribution":["Configuración de CSS","Controla la gravedad de los problemas y la validación de CSS."],"vs/languages/css/common/services/lintRules":["Cuando use un prefijo específico del proveedor, compruebe que también haya incluido el resto de propiedades específicas del proveedor.","Cuando use un prefijo específico del proveedor, incluya también la propiedad estándar.","No use definiciones de estilo duplicadas.","No use conjuntos de reglas vacíos.","Las instrucciones Import no se cargan en paralelo.","No use ancho o alto con el relleno o los bordes.","Se sabe que el selector universal (*) es lento.","No se necesita una unidad para cero.","La regla @font-face debe definir las propiedades 'src' y 'font-family'.","Los colores hexadecimales deben estar formados por tres o seis números hexadecimales.","Número de parámetros no válido","Propiedad desconocida.","Las modificaciones de IE solo son necesarias cuando admiten IE7 y anteriores","Propiedad específica del proveedor desconocida.","La propiedad se ignora a causa de la pantalla. Por ejemplo, con 'display: inline', el ancho, el alto, el margen superior e inferior y las propiedades de float no tienen efecto.","Le recomendamos no usar !important. Esto indica que la especificidad de todo el CSS está fuera de control y que debe refactorizarse.","Le recomendamos no usar 'float'. Los floats producen CSS frágiles, fáciles de corromper si cambia cualquier aspecto del diseño.","Los selectores no deben contener identificadores porque estas reglas están estrechamente ligadas a HTML.","Habilita o deshabilita todas las validaciones."],"vs/languages/html/common/html.contribution":["Configuración HTML","Cantidad máxima de caracteres por línea (0 = deshabilitar).",'Lista de etiquetas, separadas por comas, a las que no se debe volver a aplicar formato. El valor predeterminado de "null" son todas las etiquetas alineadas.',"Aplicar sangría a las secciones <head> y <body>.","Indica si los saltos de línea existentes delante de los elementos deben conservarse. Solo funciona delante de los elementos, no dentro de las etiquetas o con texto.",'Número máximo de saltos de línea que deben conservarse en un fragmento. Use "null" para que el número sea ilimitado.',"Formato y sangría {{#foo}} y {{/foo}}.","Finalizar con una nueva línea.",'Lista de etiquetas, separadas por comas, que deben tener una nueva línea adicional delante. "null" tiene como valores predeterminados "head, body, /html".'],"vs/languages/json/common/json.contribution":["Configuración JSON","Asociar esquemas a archivos JSON en el proyecto actual","Una URL para un esquema o una ruta similar a un esquema en el directorio actual","Un patrón de archivos que puede contener '*' para encontrar coincidencias al resolver archivos JSON para esquemas.","Una matriz de patrones de archivos para encontrar coincidencias al resolver archivos JSON para esquemas.","La definición de esquema de la URL dada. El esquema solo debe proporcionarse para evitar el acceso a la URL del esquema."],"vs/languages/less/common/less.contribution":["Configuración de LESS","Controla la gravedad de los problemas y la validación de LESS."],"vs/languages/sass/common/sass.contribution":["Configuración de SASS","Controla la gravedad de los problemas y la validación de SasS."],"vs/platform/configuration/common/configurationRegistry":["Aporta opciones de configuración.","Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.","Descripción de las propiedades de configuración.",'si se establece, "configuration.type" debe establecerse en "object"',"configuration.title debe ser una cadena","configuration.properties debe ser un objeto"],"vs/platform/extensions/common/abstractExtensionService":["La extensión `{1}` no se pudo activar. Motivo: dependencia `{0}` desconocida.","La extensión `{1}` no se pudo activar. Motivo: La dependencia `{0}` no se pudo activar.","La extensión `{0}` no se pudo activar. Motivo: más de 10 niveles de dependencias (probablemente sea un bucle de dependencias).","Error al activar la extensión `{0}`: {1}."],"vs/platform/extensions/common/extensionsRegistry":["Se obtuvo una descripción vacía de la extensión.",'la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "object"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente",'la propiedad `{0}` se puede omitir o debe ser de tipo "string"','Se esperaba que "main" ({0}) se hubiera incluido en la carpeta de la extensión ({1}). Esto puede hacer que la extensión no sea portátil.',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente","Nombre para mostrar de la extensión que se usa en la galería de VS Code.","Categorías que usa la galería de VS Code para clasificar la extensión.","Banner usado en VS Code Marketplace.","Color del banner en el encabezado de página de VS Code Marketplace.","Tema de color de la fuente que se usa en el banner.","El publicador de la extensión VS Code.","Eventos de activación de la extensión VS Code.","Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.","Script que se ejecuta antes de publicar el paquete como extensión VS Code.","Todas las contribuciones de la extensión VS Code representadas por este paquete."],"vs/platform/jsonschemas/common/jsonContributionRegistry":["Describe un archivo JSON mediante un esquema. Vea json-schema.org para obtener más información.","Un identificador único para el esquema.","El esquema para comprobar el documento ","Un título descriptivo del elemento","Una descripción larga del elemento. Se usa en menús y sugerencias que aparecen al mantener el puntero.","Un valor predeterminado. Lo usan las sugerencias.","Un número que debe dividir de forma exacta el valor actual (es decir, sin resto).","El máximo valor numérico, inclusivo de forma predeterminada.","Hace exclusiva la propiedad maximum.","El valor numérico mínimo, inclusivo de forma predeterminada.","Hace exclusiva la propiedad minimum.","La longitud máxima de una cadena.","La longitud mínima de una cadena.","Una expresión regular con la que hacer coincidir la cadena. No está anclada de forma implícita.",'Para matrices, solo cuando los elementos se hayan establecido como una matriz. Si es un esquema, valida los elementos después de los que haya especificado la matriz de elementos. Cuando se establece en "false", los elementos adicionales provocarán un error en la validación.',"Para matrices. Puede ser un esquema respecto al que validar cada elemento o una matriz de esquemas respecto a la que validar cada elemento por orden (el primer esquema validará al primer elemento, el segundo esquema validará al segundo elemento y así sucesivamente).","El número máximo de elementos que puede haber en una matriz. Inclusivo.","El número mínimo de elementos que puede haber en una matriz. Inclusivo.","Si todos los elementos en la matriz deben ser únicos. El valor predeterminado es false.","El número máximo de propiedades que puede tener un objeto. Inclusivo.","El número mínimo de propiedades que puede tener un objeto. Inclusivo.","Una matriz de cadenas que enumera los nombres de todas las propiedades necesarias para este objeto.",'Esquema o valor booleano. Si es un esquema, se usa para validar todas las propiedades sin coincidencias con "properties" o "patternProperties". Si es false, las propiedades sin este tipo de coincidencias provocarán un error del esquema.',"No se usa para validar. Coloque aquí los esquemas secundarios a los que desee hacer referencia en línea con $ref","Mapa de nombres de propiedad para esquemas para cada propiedad.","Mapa de expresiones regulares de nombres de propiedad para hacer coincidir las propiedades de los esquemas.","Asignación de nombres de propiedad a una matriz de nombres de propiedad o a un esquema. Una matriz de nombres de propiedad implica que, para que sea válida, la propiedad nombrada en la clave depende de las propiedades de la matriz que se encuentren en el objeto. Si el valor es un esquema, este se aplica solamente al objeto si la propiedad en la clave existe en el objeto.","El conjunto de valores literales que son válidos","Una cadena de uno de los tipos de esquema básicos (número, entero, nulo, matriz, objeto, booleano, cadena) o una matriz de cadenas que especifica un subconjunto de esos tipos.","Describe el formato que se espera para el valor.","Una matriz de esquemas, todos los cuales deben coincidir.","Una matriz de esquemas, donde al menos uno debe coincidir.","Una matriz de esquemas, de los cuales uno debe coincidir.","Un esquema que no debe tener coincidencias."],
"vs/platform/keybinding/browser/keybindingServiceImpl":["Aquí hay otros comandos disponibles: ","Se presionó ({0}). Esperando la siguiente tecla...","La combinación de teclas ({0}, {1}) no es ningún comando."],"vs/platform/message/common/message":["Cerrar","Cancelar"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.es.js.map