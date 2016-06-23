/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.4.2(1ebfb1b687c4345ac9c6da39051431a46c120a65)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function(){var e=["vs/languages/sass/common/sassTokenTypes","exports","require","vs/languages/sass/common/sass","vs/editor/common/modes/monarch/monarchCompile","vs/editor/common/modes","vs/editor/common/modes/abstractMode","vs/platform/thread/common/threadService","vs/editor/common/modes/languageConfigurationRegistry","vs/platform/instantiation/common/instantiation","vs/platform/thread/common/thread","vs/editor/common/services/modelService","vs/editor/common/services/editorWorkerService","vs/base/common/async","vs/editor/common/modes/monarch/monarchLexer","vs/editor/common/services/modeService"],t=function(t){for(var n=[],o=0,r=t.length;r>o;o++)n[o]=e[t[o]];return n};define(e[0],t([2,1]),function(e,t){"use strict";t.TOKEN_SELECTOR="entity.name.selector",t.TOKEN_SELECTOR_TAG="entity.name.tag",t.TOKEN_PROPERTY="support.type.property-name",t.TOKEN_VALUE="support.property-value",t.TOKEN_AT_KEYWORD="keyword.control.at-rule"});var n=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(3>i?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};define(e[3],t([2,1,4,5,0,6,7,15,9,10,11,12,13,14,8]),function(e,t,i,c,a,u,s,p,l,d,m,k,f,v,g){"use strict";t.language={defaultToken:"",tokenPostfix:".scss",ws:"[ 	\n\r\f]*",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"punctuation.curly"},{open:"[",close:"]",token:"punctuation.bracket"},{open:"(",close:")",token:"punctuation.parenthesis"},{open:"<",close:">",token:"punctuation.angle"}],tokenizer:{root:[{include:"@selector"}],selector:[{include:"@comments"},{include:"@import"},{include:"@variabledeclaration"},{include:"@warndebug"},["[@](include)",{token:a.TOKEN_AT_KEYWORD,next:"@includedeclaration"}],["[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",{token:a.TOKEN_AT_KEYWORD,next:"@keyframedeclaration"}],["[@](page|content|font-face|-moz-document)",{token:a.TOKEN_AT_KEYWORD}],["[@](charset|namespace)",{token:a.TOKEN_AT_KEYWORD,next:"@declarationbody"}],["[@](function)",{token:a.TOKEN_AT_KEYWORD,next:"@functiondeclaration"}],["[@](mixin)",{token:a.TOKEN_AT_KEYWORD,next:"@mixindeclaration"}],["url(\\-prefix)?\\(",{token:"support.function.name",bracket:"@open",next:"@urldeclaration"}],{include:"@controlstatement"},{include:"@selectorname"},["[&\\*]",a.TOKEN_SELECTOR_TAG],["[>\\+,]","punctuation"],["\\[",{token:"punctuation.bracket",bracket:"@open",next:"@selectorattribute"}],["{",{token:"punctuation.curly",bracket:"@open",next:"@selectorbody"}]],selectorbody:[["[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))",a.TOKEN_PROPERTY,"@rulevalue"],{include:"@selector"},["[@](extend)",{token:a.TOKEN_AT_KEYWORD,next:"@extendbody"}],["[@](return)",{token:a.TOKEN_AT_KEYWORD,next:"@declarationbody"}],["}",{token:"punctuation.curly",bracket:"@close",next:"@pop"}]],selectorname:[["#{",{token:"support.function.interpolation",bracket:"@open",next:"@variableinterpolation"}],["(\\.|#(?=[^{])|%|(@identifier)|:)+",a.TOKEN_SELECTOR]],selectorattribute:[{include:"@term"},["]",{token:"punctuation.bracket",bracket:"@close",next:"@pop"}]],term:[{include:"@comments"},["url(\\-prefix)?\\(",{token:"support.function.name",bracket:"@open",next:"@urldeclaration"}],{include:"@functioninvocation"},{include:"@numbers"},{include:"@strings"},{include:"@variablereference"},["(and\\b|or\\b|not\\b)","keyword.operator"],{include:"@name"},["([<>=\\+\\-\\*\\/\\^\\|\\~,])","keyword.operator"],[",","punctuation"],["!default","literal"],["\\(",{token:"punctuation.parenthesis",bracket:"@open",next:"@parenthizedterm"}]],rulevalue:[{include:"@term"},["!important","literal"],[";","punctuation","@pop"],["{",{token:"punctuation.curly",bracket:"@open",switchTo:"@nestedproperty"}],["(?=})",{token:"",next:"@pop"}]],nestedproperty:[["[*_]?@identifier@ws:",a.TOKEN_PROPERTY,"@rulevalue"],{include:"@comments"},["}",{token:"punctuation.curly",bracket:"@close",next:"@pop"}]],warndebug:[["[@](warn|debug)",{token:a.TOKEN_AT_KEYWORD,next:"@declarationbody"}]],"import":[["[@](import)",{token:a.TOKEN_AT_KEYWORD,next:"@declarationbody"}]],variabledeclaration:[["\\$@identifier@ws:","variable.decl","@declarationbody"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"support.function.name",bracket:"@close",next:"@pop"}]],parenthizedterm:[{include:"@term"},["\\)",{token:"punctuation.parenthesis",bracket:"@close",next:"@pop"}]],declarationbody:[{include:"@term"},[";","punctuation","@pop"],["(?=})",{token:"",next:"@pop"}]],extendbody:[{include:"@selectorname"},["!optional","literal"],[";","punctuation","@pop"],["(?=})",{token:"",next:"@pop"}]],variablereference:[["\\$@identifier","variable.ref"],["\\.\\.\\.","keyword.operator"],["#{",{token:"support.function.interpolation",bracket:"@open",next:"@variableinterpolation"}]],variableinterpolation:[{include:"@variablereference"},["}",{token:"support.function.interpolation",bracket:"@close",next:"@pop"}]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],name:[["@identifier",a.TOKEN_VALUE]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"constant.numeric",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","constant.rgb-value"]],units:[["(em|ex|ch|rem|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","constant.numeric","@pop"]],functiondeclaration:[["@identifier@ws\\(",{token:"support.function.name",bracket:"@open",next:"@parameterdeclaration"}],["{",{token:"punctuation.curly",bracket:"@open",switchTo:"@functionbody"}]],mixindeclaration:[["@identifier@ws\\(",{token:"support.function.name",bracket:"@open",next:"@parameterdeclaration"}],["@identifier","support.function.name"],["{",{token:"punctuation.curly",bracket:"@open",switchTo:"@selectorbody"}]],parameterdeclaration:[["\\$@identifier@ws:","variable"],["\\.\\.\\.","keyword.operator"],[",","punctuation"],{include:"@term"},["\\)",{token:"support.function.name",bracket:"@close",next:"@pop"}]],includedeclaration:[{include:"@functioninvocation"},["@identifier","support.function.name"],[";","punctuation","@pop"],["(?=})",{token:"",next:"@pop"}],["{",{token:"punctuation.curly",bracket:"@open",switchTo:"@selectorbody"}]],keyframedeclaration:[["@identifier","support.function.name"],["{",{token:"punctuation.curly",bracket:"@open",switchTo:"@keyframebody"}]],keyframebody:[{include:"@term"},["{",{token:"punctuation.curly",bracket:"@open",next:"@selectorbody"}],["}",{token:"punctuation.curly",bracket:"@close",next:"@pop"}]],controlstatement:[["[@](if|else|for|while|each|media)",{token:"keyword.flow.control.at-rule",next:"@controlstatementdeclaration"}]],controlstatementdeclaration:[["(in|from|through|if|to)\\b",{token:"keyword.flow.control.at-rule"}],{include:"@term"},["{",{token:"punctuation.curly",bracket:"@open",switchTo:"@selectorbody"}]],functionbody:[["[@](return)",{token:a.TOKEN_AT_KEYWORD}],{include:"@variabledeclaration"},{include:"@term"},{include:"@controlstatement"},[";","punctuation"],["}",{token:"punctuation.curly",bracket:"@close",next:"@pop"}]],functioninvocation:[["@identifier\\(",{token:"support.function.name",bracket:"@open",next:"@functionarguments"}]],functionarguments:[["\\$@identifier@ws:",a.TOKEN_PROPERTY],["[,]","punctuation"],{include:"@term"},["\\)",{token:"support.function.name",bracket:"@close",next:"@pop"}]],strings:[['~?"',{token:"string.punctuation",bracket:"@open",next:"@stringenddoublequote"}],["~?'",{token:"string.punctuation",bracket:"@open",next:"@stringendquote"}]],stringenddoublequote:[["\\\\.","string"],['"',{token:"string.punctuation",next:"@pop",bracket:"@close"}],[".","string"]],stringendquote:[["\\\\.","string"],["'",{token:"string.punctuation",next:"@pop",bracket:"@close"}],[".","string"]]}};var y=function(e){function a(n,o,r,s,p,l){var d=this;e.call(this,n.id);var m=i.compile(n.id,t.language);this._modeWorkerManager=new u.ModeWorkerManager(n,"vs/languages/sass/common/sassWorker","SassWorker","vs/languages/css/common/cssWorker",o),this._threadService=r,this.modeService=s,c.HoverProviderRegistry.register(this.getId(),{provideHover:function(e,t,n){return f.wireCancellationToken(n,d._provideHover(e.uri,t))}},!0),this.inplaceReplaceSupport=this,this.configSupport=this,c.ReferenceProviderRegistry.register(this.getId(),{provideReferences:function(e,t,n,o){return f.wireCancellationToken(o,d._provideReferences(e.uri,t))}},!0),c.DefinitionProviderRegistry.register(this.getId(),{provideDefinition:function(e,t,n){return f.wireCancellationToken(n,d._provideDefinition(e.uri,t))}},!0),c.DocumentSymbolProviderRegistry.register(this.getId(),{provideDocumentSymbols:function(e,t){return f.wireCancellationToken(t,d._provideDocumentSymbols(e.uri))}},!0),c.SuggestRegistry.register(this.getId(),{triggerCharacters:[],shouldAutotriggerSuggest:!0,provideCompletionItems:function(e,t,n){return f.wireCancellationToken(n,d._provideCompletionItems(e.uri,t))}},!0),this.tokenizationSupport=v.createTokenizationSupport(s,this,m),g.LanguageConfigurationRegistry.register(this.getId(),a.LANG_CONFIG)}return n(a,e),a.prototype.creationDone=function(){this._threadService.isInMainThread&&this._pickAWorkerToValidate()},a.prototype._worker=function(e){return this._modeWorkerManager.worker(e)},a.prototype.configure=function(e){return this._threadService.isInMainThread?this._configureWorkers(e):this._worker(function(t){return t._doConfigure(e)})},a.prototype._configureWorkers=function(e){return this._worker(function(t){return t._doConfigure(e)})},a.prototype.navigateValueSet=function(e,t,n){return this._worker(function(o){return o.navigateValueSet(e,t,n)})},a.prototype._pickAWorkerToValidate=function(){return this._worker(function(e){return e.enableValidator()})},a.prototype._provideReferences=function(e,t){return this._worker(function(n){return n.provideReferences(e,t)})},a.prototype._provideCompletionItems=function(e,t){return this._worker(function(n){return n.provideCompletionItems(e,t)})},a.prototype._provideHover=function(e,t){return this._worker(function(n){return n.provideHover(e,t)})},a.prototype._provideDocumentSymbols=function(e){return this._worker(function(t){return t.provideDocumentSymbols(e)})},a.prototype._provideDefinition=function(e,t){return this._worker(function(n){return n.provideDefinition(e,t)})},a.prototype.findColorDeclarations=function(e){return this._worker(function(t){return t.findColorDeclarations(e)})},a.LANG_CONFIG={wordPattern:/(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"<",close:">",notIn:["string","comment"]}]},a.$_configureWorkers=s.AllWorkersAttr(a,a.prototype._configureWorkers),a.$navigateValueSet=s.OneWorkerAttr(a,a.prototype.navigateValueSet),a.$_pickAWorkerToValidate=s.OneWorkerAttr(a,a.prototype._pickAWorkerToValidate,d.ThreadAffinity.Group1),a.$_provideReferences=s.OneWorkerAttr(a,a.prototype._provideReferences),a.$_provideCompletionItems=s.OneWorkerAttr(a,a.prototype._provideCompletionItems),a.$_provideHover=s.OneWorkerAttr(a,a.prototype._provideHover),a.$_provideDocumentSymbols=s.OneWorkerAttr(a,a.prototype._provideDocumentSymbols),a.$_provideDefinition=s.OneWorkerAttr(a,a.prototype._provideDefinition),a.$findColorDeclarations=s.OneWorkerAttr(a,a.prototype.findColorDeclarations),a=o([r(1,l.IInstantiationService),r(2,d.IThreadService),r(3,p.IModeService),r(4,m.IModelService),r(5,k.IEditorWorkerService)],a)}(u.AbstractMode);t.SASSMode=y})}).call(this);
//# sourceMappingURL=../../../../../min-maps/vs/languages/sass/common/sass.js.map