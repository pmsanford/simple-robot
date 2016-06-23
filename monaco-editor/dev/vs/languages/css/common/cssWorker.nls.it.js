/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.4.2(1ebfb1b687c4345ac9c6da39051431a46c120a65)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/languages/css/common/cssWorker.nls.it", {
	"vs/languages/css/common/cssWorker": [
		"@keyframes {0}",
		"@font-face",
		"Rinomina in \'{0}\'",
	],
	"vs/languages/css/common/parser/cssErrors": [
		"è previsto un numero",
		"è prevista la condizione",
		"è prevista una regola at-rule o un selettore",
		"è previsto il punto",
		"sono previsti i due punti",
		"è previsto un punto e virgola",
		"è previsto un termine",
		"è prevista l\'espressione",
		"è previsto l\'operatore",
		"è previsto l\'identificatore",
		"è prevista una percentuale",
		"è previsto un URI o una stringa",
		"è previsto un URI",
		"è previsto un nome di variabile",
		"è previsto un valore di variabile",
		"è previsto il valore della proprietà",
		"è prevista la parentesi graffa di apertura {",
		"è prevista la parentesi graffa di chiusura }",
		"è prevista la parentesi quadra di apertura [",
		"è prevista la parentesi quadra di chiusura ]",
		"è prevista la parentesi tonda di apertura (",
		"è prevista la parentesi tonda di chiusura )",
		"è prevista la virgola",
		"è prevista la direttiva o la dichiarazione di pagina",
		"regola at-rule sconosciuta",
		"parola chiave sconosciuta",
		"è previsto un selettore",
		"è previsto un valore letterale stringa",
	],
	"vs/languages/css/common/services/intelliSense": [
		"Crea un colore dai valori di rosso, verde e blu.",
		"Crea un colore dai valori di rosso, verde, blu e alfa.",
		"Crea un colore dai valori di tonalità, saturazione e luminosità.",
		"Crea un colore dai valori di tonalità, saturazione, luminosità e alfa.",
	],
	"vs/languages/css/common/services/lint": [
		"\'{0}\'",
		"{0}, \'{1}\'",
		"Definire sempre la regola standard \'@keyframes\' durante la definizione di keyframes.",
		"Includere sempre tutte le regole specifiche del fornitore. Regole mancanti: {0}",
		"Definire inoltre la proprietà standard \'{0}\' per la compatibilità",
		"Includere sempre tutte le proprietà specifiche del fornitore. Proprietà mancanti: {0}",
	],
	"vs/languages/css/common/services/lintRules": [
		"Quando si usa un prefisso specifico del fornitore, assicurarsi di includere anche tutte le altre proprietà specifiche del fornitore",
		"Quando si usa un prefisso specifico del fornitore, includere anche la proprietà standard",
		"Non usare definizioni di stile duplicate",
		"Non usare set di regole vuoti",
		"Le istruzioni Import non vengono caricate in parallelo",
		"Non usare width o height con padding o border",
		"Il selettore universale (*) è notoriamente lento",
		"Non è necessaria alcuna unità per lo zero",
		"La regola @font-face deve definire le proprietà \'src\' e \'font-family\'",
		"I colori esadecimali devono essere composti da tre o sei numeri esadecimali",
		"Numero di parametri non valido",
		"Proprietà sconosciuta.",
		"Gli hack IE sono necessari solo per il supporto di IE7 e versioni precedenti",
		"Proprietà specifica del fornitore sconosciuta.",
		"La proprietà viene ignorata a causa della visualizzazione. Ad esempio, con \'display: inline\', le proprietà width, height, margin-top, margin-bottom e float non hanno effetto",
		"Evitare di usare !important perché indica che la specificità dell\'intero codice CSS non è più controllabile ed è necessario effettuarne il refactoring.",
		"Evitare di usare \'float\'. Con gli elementi float si ottiene codice CSS che causa facilmente interruzioni in caso di modifica di un aspetto del layout.",
		"I selettori non devono contenere ID perché queste regole sono strettamente accoppiate al codice HTML.",
		"Abilita o disabilita tutte le convalide",
	]
});