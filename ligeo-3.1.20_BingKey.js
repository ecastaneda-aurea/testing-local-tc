/*
	This is a compiled version of Dojo, built for deployment and not for
	development. To get an editable version, please visit:

		http://dojotoolkit.org

	for documentation and information on getting the source.
*/

if(typeof dojo=="undefined"){
var dj_global=this;
var dj_currentContext=this;
function dj_undef(_1,_2){
return (typeof (_2||dj_currentContext)[_1]=="undefined");
};
if(dj_undef("djConfig",this)){
var djConfig={};
}
if(dj_undef("dojo",this)){
var dojo={};
}
dojo.global=function(){
return dj_currentContext;
};
dojo.locale=djConfig.locale;
dojo.version={major:3,minor:1,patch:20,flag:"_BingKey",revision:Number("$Rev: 8617 $".match(/[0-9]+/)[0]),toString:function(){
with(dojo.version){
return major+"."+minor+"."+patch+flag+" ("+revision+")";
}
}};
dojo.evalProp=function(_3,_4,_5){
if((!_4)||(!_3)){
return undefined;
}
if(!dj_undef(_3,_4)){
return _4[_3];
}
return (_5?(_4[_3]={}):undefined);
};
dojo.parseObjPath=function(_6,_7,_8){
var _9=(_7||dojo.global());
var _a=_6.split(".");
var _b=_a.pop();
for(var i=0,l=_a.length;i<l&&_9;i++){
_9=dojo.evalProp(_a[i],_9,_8);
}
return {obj:_9,prop:_b};
};
dojo.evalObjPath=function(_e,_f){
if(typeof _e!="string"){
return dojo.global();
}
if(_e.indexOf(".")==-1){
return dojo.evalProp(_e,dojo.global(),_f);
}
var ref=dojo.parseObjPath(_e,dojo.global(),_f);
if(ref){
return dojo.evalProp(ref.prop,ref.obj,_f);
}
return null;
};
dojo.errorToString=function(_11){
if(!dj_undef("message",_11)){
return _11.message;
}else{
if(!dj_undef("description",_11)){
return _11.description;
}else{
return _11;
}
}
};
dojo.raise=function(_12,_13){
if(_13){
_12=_12+": "+dojo.errorToString(_13);
}else{
_12=dojo.errorToString(_12);
}
try{
if(djConfig.isDebug){
dojo.hostenv.println("FATAL exception raised: "+_12);
}
}
catch(e){
}
throw _13||Error(_12);
};
dojo.debug=function(){
};
dojo.debugShallow=function(obj){
};
dojo.profile={start:function(){
},end:function(){
},stop:function(){
},dump:function(){
}};
function dj_eval(_15){
return dj_global.eval?dj_global.eval(_15):eval(_15);
};
dojo.unimplemented=function(_16,_17){
var _18="'"+_16+"' not implemented";
if(_17!=null){
_18+=" "+_17;
}
dojo.raise(_18);
};
dojo.deprecated=function(_19,_1a,_1b){
var _1c="DEPRECATED: "+_19;
if(_1a){
_1c+=" "+_1a;
}
if(_1b){
_1c+=" -- will be removed in version: "+_1b;
}
dojo.debug(_1c);
};
dojo.render=(function(){
function vscaffold(_1d,_1e){
var tmp={capable:false,support:{builtin:false,plugin:false},prefixes:_1d};
for(var i=0;i<_1e.length;i++){
tmp[_1e[i]]=false;
}
return tmp;
};
return {name:"",ver:dojo.version,os:{win:false,linux:false,osx:false},html:vscaffold(["html"],["ie","opera","khtml","safari","moz"]),svg:vscaffold(["svg"],["corel","adobe","batik"]),vml:vscaffold(["vml"],["ie"]),swf:vscaffold(["Swf","Flash","Mm"],["mm"]),swt:vscaffold(["Swt"],["ibm"])};
})();
dojo.hostenv=(function(){
var _21={isDebug:false,allowQueryConfig:false,baseScriptUri:"",baseRelativePath:"",libraryScriptUri:"",iePreventClobber:false,ieClobberMinimal:true,preventBackButtonFix:true,delayMozLoadingFix:false,searchIds:[],parseWidgets:true};
if(typeof djConfig=="undefined"){
djConfig=_21;
}else{
for(var _22 in _21){
if(typeof djConfig[_22]=="undefined"){
djConfig[_22]=_21[_22];
}
}
}
return {name_:"(unset)",version_:"(unset)",getName:function(){
return this.name_;
},getVersion:function(){
return this.version_;
},getText:function(uri){
dojo.unimplemented("getText","uri="+uri);
}};
})();
dojo.hostenv.getBaseScriptUri=function(){
if(djConfig.baseScriptUri.length){
return djConfig.baseScriptUri;
}
var uri=new String(djConfig.libraryScriptUri||djConfig.baseRelativePath);
if(!uri){
dojo.raise("Nothing returned by getLibraryScriptUri(): "+uri);
}
var _25=uri.lastIndexOf("/");
djConfig.baseScriptUri=djConfig.baseRelativePath;
return djConfig.baseScriptUri;
};
(function(){
var _26={pkgFileName:"__package__",loading_modules_:{},loaded_modules_:{},addedToLoadingCount:[],removedFromLoadingCount:[],inFlightCount:0,modulePrefixes_:{dojo:{name:"dojo",value:"src"}},setModulePrefix:function(_27,_28){
this.modulePrefixes_[_27]={name:_27,value:_28};
},moduleHasPrefix:function(_29){
var mp=this.modulePrefixes_;
return Boolean(mp[_29]&&mp[_29].value);
},getModulePrefix:function(_2b){
if(this.moduleHasPrefix(_2b)){
return this.modulePrefixes_[_2b].value;
}
return _2b;
},getTextStack:[],loadUriStack:[],loadedUris:[],post_load_:false,modulesLoadedListeners:[],unloadListeners:[],loadNotifying:false};
for(var _2c in _26){
dojo.hostenv[_2c]=_26[_2c];
}
})();
dojo.hostenv.loadPath=function(_2d,_2e,cb){
var uri;
if(_2d.charAt(0)=="/"||_2d.match(/^\w+:/)){
uri=_2d;
}else{
uri=this.getBaseScriptUri()+_2d;
}
if(djConfig.cacheBust&&dojo.render.html.capable){
uri+="?"+String(djConfig.cacheBust).replace(/\W+/g,"");
}
try{
return !_2e?this.loadUri(uri,cb):this.loadUriAndCheck(uri,_2e,cb);
}
catch(e){
dojo.debug(e);
return false;
}
};
dojo.hostenv.loadUri=function(uri,cb){
if(this.loadedUris[uri]){
return true;
}
var _33=this.getText(uri,null,true);
if(!_33){
return false;
}
this.loadedUris[uri]=true;
if(cb){
_33="("+_33+")";
}
var _34=dj_eval(_33);
if(cb){
cb(_34);
}
return true;
};
dojo.hostenv.loadUriAndCheck=function(uri,_36,cb){
var ok=true;
try{
ok=this.loadUri(uri,cb);
}
catch(e){
dojo.debug("failed loading ",uri," with error: ",e);
}
return Boolean(ok&&this.findModule(_36,false));
};
dojo.loaded=function(){
};
dojo.unloaded=function(){
};
dojo.hostenv.loaded=function(){
this.loadNotifying=true;
this.post_load_=true;
var mll=this.modulesLoadedListeners;
for(var x=0;x<mll.length;x++){
mll[x]();
}
this.modulesLoadedListeners=[];
this.loadNotifying=false;
dojo.loaded();
};
dojo.hostenv.unloaded=function(){
var mll=this.unloadListeners;
while(mll.length){
(mll.pop())();
}
dojo.unloaded();
};
dojo.addOnLoad=function(obj,_3d){
var dh=dojo.hostenv;
if(arguments.length==1){
dh.modulesLoadedListeners.push(obj);
}else{
if(arguments.length>1){
dh.modulesLoadedListeners.push(function(){
obj[_3d]();
});
}
}
if(dh.post_load_&&dh.inFlightCount==0&&!dh.loadNotifying){
dh.callLoaded();
}
};
dojo.addOnUnload=function(obj,_40){
var dh=dojo.hostenv;
if(arguments.length==1){
dh.unloadListeners.push(obj);
}else{
if(arguments.length>1){
dh.unloadListeners.push(function(){
obj[_40]();
});
}
}
};
dojo.hostenv.modulesLoaded=function(){
if(this.post_load_){
return;
}
if(this.loadUriStack.length==0&&this.getTextStack.length==0){
if(this.inFlightCount>0){
dojo.debug("files still in flight!");
return;
}
dojo.hostenv.callLoaded();
}
};
dojo.hostenv.callLoaded=function(){
if(typeof setTimeout=="object"||(djConfig["useXDomain"]&&dojo.render.html.opera)){
setTimeout("dojo.hostenv.loaded();",0);
}else{
dojo.hostenv.loaded();
}
};
dojo.hostenv.getModuleSymbols=function(_42){
var _43=_42.split(".");
for(var i=_43.length;i>0;i--){
var _45=_43.slice(0,i).join(".");
if((i==1)&&!this.moduleHasPrefix(_45)){
_43[0]="../"+_43[0];
}else{
var _46=this.getModulePrefix(_45);
if(_46!=_45){
_43.splice(0,i,_46);
break;
}
}
}
return _43;
};
dojo.hostenv._global_omit_module_check=false;
dojo.hostenv.loadModule=function(_47,_48,_49){
if(!_47){
return;
}
_49=this._global_omit_module_check||_49;
var _4a=this.findModule(_47,false);
if(_4a){
return _4a;
}
if(dj_undef(_47,this.loading_modules_)){
this.addedToLoadingCount.push(_47);
}
this.loading_modules_[_47]=1;
var _4b=_47.replace(/\./g,"/")+".js";
var _4c=_47.split(".");
var _4d=this.getModuleSymbols(_47);
var _4e=((_4d[0].charAt(0)!="/")&&!_4d[0].match(/^\w+:/));
var _4f=_4d[_4d.length-1];
var ok;
if(_4f=="*"){
_47=_4c.slice(0,-1).join(".");
while(_4d.length){
_4d.pop();
_4d.push(this.pkgFileName);
_4b=_4d.join("/")+".js";
if(_4e&&_4b.charAt(0)=="/"){
_4b=_4b.slice(1);
}
ok=this.loadPath(_4b,!_49?_47:null);
if(ok){
break;
}
_4d.pop();
}
}else{
_4b=_4d.join("/")+".js";
_47=_4c.join(".");
var _51=!_49?_47:null;
ok=this.loadPath(_4b,_51);
if(!ok&&!_48){
_4d.pop();
while(_4d.length){
_4b=_4d.join("/")+".js";
ok=this.loadPath(_4b,_51);
if(ok){
break;
}
_4d.pop();
_4b=_4d.join("/")+"/"+this.pkgFileName+".js";
if(_4e&&_4b.charAt(0)=="/"){
_4b=_4b.slice(1);
}
ok=this.loadPath(_4b,_51);
if(ok){
break;
}
}
}
if(!ok&&!_49){
dojo.raise("Could not load '"+_47+"'; last tried '"+_4b+"'");
}
}
if(!_49&&!this["isXDomain"]){
_4a=this.findModule(_47,false);
if(!_4a){
dojo.raise("symbol '"+_47+"' is not defined after loading '"+_4b+"'");
}
}
return _4a;
};
dojo.hostenv.startPackage=function(_52){
var _53=String(_52);
var _54=_53;
var _55=_52.split(/\./);
if(_55[_55.length-1]=="*"){
_55.pop();
_54=_55.join(".");
}
var _56=dojo.evalObjPath(_54,true);
this.loaded_modules_[_53]=_56;
this.loaded_modules_[_54]=_56;
return _56;
};
dojo.hostenv.findModule=function(_57,_58){
var lmn=String(_57);
if(this.loaded_modules_[lmn]){
return this.loaded_modules_[lmn];
}
if(_58){
dojo.raise("no loaded module named '"+_57+"'");
}
return null;
};
dojo.kwCompoundRequire=function(_5a){
var _5b=_5a["common"]||[];
var _5c=_5a[dojo.hostenv.name_]?_5b.concat(_5a[dojo.hostenv.name_]||[]):_5b.concat(_5a["default"]||[]);
for(var x=0;x<_5c.length;x++){
var _5e=_5c[x];
if(_5e.constructor==Array){
dojo.hostenv.loadModule.apply(dojo.hostenv,_5e);
}else{
dojo.hostenv.loadModule(_5e);
}
}
};
dojo.require=function(_5f){
dojo.hostenv.loadModule.apply(dojo.hostenv,arguments);
};
dojo.requireIf=function(_60,_61){
var _62=arguments[0];
if((_62===true)||(_62=="common")||(_62&&dojo.render[_62].capable)){
var _63=[];
for(var i=1;i<arguments.length;i++){
_63.push(arguments[i]);
}
dojo.require.apply(dojo,_63);
}
};
dojo.requireAfterIf=dojo.requireIf;
dojo.provide=function(_65){
return dojo.hostenv.startPackage.apply(dojo.hostenv,arguments);
};
dojo.registerModulePath=function(_66,_67){
return dojo.hostenv.setModulePrefix(_66,_67);
};
if(djConfig["modulePaths"]){
for(var param in djConfig["modulePaths"]){
dojo.registerModulePath(param,djConfig["modulePaths"][param]);
}
}
dojo.setModulePrefix=function(_68,_69){
dojo.deprecated("dojo.setModulePrefix(\""+_68+"\", \""+_69+"\")","replaced by dojo.registerModulePath","0.5");
return dojo.registerModulePath(_68,_69);
};
dojo.exists=function(obj,_6b){
var p=_6b.split(".");
for(var i=0;i<p.length;i++){
if(!obj[p[i]]){
return false;
}
obj=obj[p[i]];
}
return true;
};
dojo.hostenv.normalizeLocale=function(_6e){
var _6f=_6e?_6e.toLowerCase():dojo.locale;
if(_6f=="root"){
_6f="ROOT";
}
return _6f;
};
dojo.hostenv.searchLocalePath=function(_70,_71,_72){
_70=dojo.hostenv.normalizeLocale(_70);
var _73=_70.split("-");
var _74=[];
for(var i=_73.length;i>0;i--){
_74.push(_73.slice(0,i).join("-"));
}
_74.push(false);
if(_71){
_74.reverse();
}
for(var j=_74.length-1;j>=0;j--){
var loc=_74[j]||"ROOT";
var _78=_72(loc);
if(_78){
break;
}
}
};
dojo.hostenv.localesGenerated;
dojo.hostenv.registerNlsPrefix=function(){
dojo.registerModulePath("nls","nls");
};
dojo.hostenv.preloadLocalizations=function(){
if(dojo.hostenv.localesGenerated){
dojo.hostenv.registerNlsPrefix();
function preload(_79){
_79=dojo.hostenv.normalizeLocale(_79);
dojo.hostenv.searchLocalePath(_79,true,function(loc){
for(var i=0;i<dojo.hostenv.localesGenerated.length;i++){
if(dojo.hostenv.localesGenerated[i]==loc){
dojo["require"]("nls.dojo_"+loc);
return true;
}
}
return false;
});
};
preload();
var _7c=djConfig.extraLocale||[];
for(var i=0;i<_7c.length;i++){
preload(_7c[i]);
}
}
dojo.hostenv.preloadLocalizations=function(){
};
};
dojo.requireLocalization=function(_7e,_7f,_80,_81){
dojo.hostenv.preloadLocalizations();
var _82=dojo.hostenv.normalizeLocale(_80);
var _83=[_7e,"nls",_7f].join(".");
var _84="";
if(_81){
var _85=_81.split(",");
for(var i=0;i<_85.length;i++){
if(_82.indexOf(_85[i])==0){
if(_85[i].length>_84.length){
_84=_85[i];
}
}
}
if(!_84){
_84="ROOT";
}
}
var _87=_81?_84:_82;
var _88=dojo.hostenv.findModule(_83);
var _89=null;
if(_88){
if(djConfig.localizationComplete&&_88._built){
return;
}
var _8a=_87.replace("-","_");
var _8b=_83+"."+_8a;
_89=dojo.hostenv.findModule(_8b);
}
if(!_89){
_88=dojo.hostenv.startPackage(_83);
var _8c=dojo.hostenv.getModuleSymbols(_7e);
var _8d=_8c.concat("nls").join("/");
var _8e;
dojo.hostenv.searchLocalePath(_87,_81,function(loc){
var _90=loc.replace("-","_");
var _91=_83+"."+_90;
var _92=false;
if(!dojo.hostenv.findModule(_91)){
dojo.hostenv.startPackage(_91);
var _93=[_8d];
if(loc!="ROOT"){
_93.push(loc);
}
_93.push(_7f);
var _94=_93.join("/")+".js";
_92=dojo.hostenv.loadPath(_94,null,function(_95){
var _96=function(){
};
_96.prototype=_8e;
_88[_90]=new _96();
for(var j in _95){
_88[_90][j]=_95[j];
}
});
}else{
_92=true;
}
if(_92&&_88[_90]){
_8e=_88[_90];
}else{
_88[_90]=_8e;
}
if(_81){
return true;
}
});
}
if(_81&&_82!=_84){
_88[_82.replace("-","_")]=_88[_84.replace("-","_")];
}
};
(function(){
var _98=djConfig.extraLocale;
if(_98){
if(!_98 instanceof Array){
_98=[_98];
}
var req=dojo.requireLocalization;
dojo.requireLocalization=function(m,b,_9c,_9d){
req(m,b,_9c,_9d);
if(_9c){
return;
}
for(var i=0;i<_98.length;i++){
req(m,b,_98[i],_9d);
}
};
}
})();
}
if(typeof window!="undefined"){
(function(){
if(djConfig.allowQueryConfig){
var _9f=document.location.toString();
var _a0=_9f.split("?",2);
if(_a0.length>1){
var _a1=_a0[1];
var _a2=_a1.split("&");
for(var x in _a2){
var sp=_a2[x].split("=");
if((sp[0].length>9)&&(sp[0].substr(0,9)=="djConfig.")){
var opt=sp[0].substr(9);
try{
djConfig[opt]=eval(sp[1]);
}
catch(e){
djConfig[opt]=sp[1];
}
}
}
}
}
if(((djConfig["baseScriptUri"]=="")||(djConfig["baseRelativePath"]==""))&&(document&&document.getElementsByTagName)){
var _a6=document.getElementsByTagName("script");
var _a7=/(__package__|dojo|bootstrap1)\.js([\?\.]|$)/i;
for(var i=0;i<_a6.length;i++){
var src=_a6[i].getAttribute("src");
if(!src){
continue;
}
var m=src.match(_a7);
if(m){
var _ab=src.substring(0,m.index);
if(src.indexOf("bootstrap1")>-1){
_ab+="../";
}
if(!this["djConfig"]){
djConfig={};
}
if(djConfig["baseScriptUri"]==""){
djConfig["baseScriptUri"]=_ab;
}
if(djConfig["baseRelativePath"]==""){
djConfig["baseRelativePath"]=_ab;
}
break;
}
}
}
var dr=dojo.render;
var drh=dojo.render.html;
var drs=dojo.render.svg;
var dua=(drh.UA=navigator.userAgent);
var dav=(drh.AV=navigator.appVersion);
var t=true;
var f=false;
drh.capable=t;
drh.support.builtin=t;
dr.ver=parseFloat(drh.AV);
dr.os.mac=dav.indexOf("Macintosh")>=0;
dr.os.win=dav.indexOf("Windows")>=0;
dr.os.linux=dav.indexOf("X11")>=0;
drh.opera=dua.indexOf("Opera")>=0;
drh.khtml=(dav.indexOf("Konqueror")>=0)||(dav.indexOf("Safari")>=0);
drh.safari=dav.indexOf("Safari")>=0;
var _b3=dua.indexOf("Gecko");
drh.mozilla=drh.moz=(_b3>=0)&&(!drh.khtml);
if(drh.mozilla){
drh.geckoVersion=dua.substring(_b3+6,_b3+14);
}
drh.ie=(document.all)&&(!drh.opera);
drh.ie50=drh.ie&&dav.indexOf("MSIE 5.0")>=0;
drh.ie55=drh.ie&&dav.indexOf("MSIE 5.5")>=0;
drh.ie60=drh.ie&&dav.indexOf("MSIE 6.0")>=0;
drh.ie70=drh.ie&&dav.indexOf("MSIE 7.0")>=0;
var cm=document["compatMode"];
drh.quirks=(cm=="BackCompat")||(cm=="QuirksMode")||drh.ie55||drh.ie50;
dojo.locale=dojo.locale||(drh.ie?navigator.userLanguage:navigator.language).toLowerCase();
dr.vml.capable=drh.ie;
drs.capable=f;
drs.support.plugin=f;
drs.support.builtin=f;
var _b5=window["document"];
var tdi=_b5["implementation"];
if((tdi)&&(tdi["hasFeature"])&&(tdi.hasFeature("org.w3c.dom.svg","1.0"))){
drs.capable=t;
drs.support.builtin=t;
drs.support.plugin=f;
}
if(drh.safari){
var tmp=dua.split("AppleWebKit/")[1];
var ver=parseFloat(tmp.split(" ")[0]);
if(ver>=420){
drs.capable=t;
drs.support.builtin=t;
drs.support.plugin=f;
}
}else{
}
})();
dojo.hostenv.startPackage("dojo.hostenv");
dojo.render.name=dojo.hostenv.name_="browser";
dojo.hostenv.searchIds=[];
dojo.hostenv._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];
dojo.hostenv.getXmlhttpObject=function(){
var _b9=null;
var _ba=null;
try{
_b9=new XMLHttpRequest();
}
catch(e){
}
if(!_b9){
for(var i=0;i<3;++i){
var _bc=dojo.hostenv._XMLHTTP_PROGIDS[i];
try{
_b9=new ActiveXObject(_bc);
}
catch(e){
_ba=e;
}
if(_b9){
dojo.hostenv._XMLHTTP_PROGIDS=[_bc];
break;
}
}
}
if(!_b9){
return dojo.raise("XMLHTTP not available",_ba);
}
return _b9;
};
dojo.hostenv._blockAsync=false;
dojo.hostenv.getText=function(uri,_be,_bf){
if(!_be){
this._blockAsync=true;
}
var _c0=this.getXmlhttpObject();
function isDocumentOk(_c1){
var _c2=_c1["status"];
return Boolean((!_c2)||((200<=_c2)&&(300>_c2))||(_c2==304));
};
if(_be){
var _c3=this,_c4=null,gbl=dojo.global();
var xhr=dojo.evalObjPath("dojo.io.XMLHTTPTransport");
_c0.onreadystatechange=function(){
if(_c4){
gbl.clearTimeout(_c4);
_c4=null;
}
if(_c3._blockAsync||(xhr&&xhr._blockAsync)){
_c4=gbl.setTimeout(function(){
_c0.onreadystatechange.apply(this);
},10);
}else{
if(4==_c0.readyState){
if(isDocumentOk(_c0)){
_be(_c0.responseText);
}
}
}
};
}
_c0.open("GET",uri,_be?true:false);
try{
_c0.send(null);
if(_be){
return null;
}
if(!isDocumentOk(_c0)){
var err=Error("Unable to load "+uri+" status:"+_c0.status);
err.status=_c0.status;
err.responseText=_c0.responseText;
throw err;
}
}
catch(e){
this._blockAsync=false;
if((_bf)&&(!_be)){
return null;
}else{
throw e;
}
}
this._blockAsync=false;
return _c0.responseText;
};
dojo.hostenv.defaultDebugContainerId="dojoDebug";
dojo.hostenv._println_buffer=[];
dojo.hostenv._println_safe=false;
dojo.hostenv.println=function(_c8){
if(!dojo.hostenv._println_safe){
dojo.hostenv._println_buffer.push(_c8);
}else{
try{
var _c9=document.getElementById(djConfig.debugContainerId?djConfig.debugContainerId:dojo.hostenv.defaultDebugContainerId);
if(!_c9){
_c9=dojo.body();
}
var div=document.createElement("div");
div.appendChild(document.createTextNode(_c8));
_c9.appendChild(div);
}
catch(e){
try{
document.write("<div>"+_c8+"</div>");
}
catch(e2){
window.status=_c8;
}
}
}
};
dojo.addOnLoad(function(){
dojo.hostenv._println_safe=true;
while(dojo.hostenv._println_buffer.length>0){
dojo.hostenv.println(dojo.hostenv._println_buffer.shift());
}
});
function dj_addNodeEvtHdlr(_cb,_cc,fp){
var _ce=_cb["on"+_cc]||function(){
};
_cb["on"+_cc]=function(){
fp.apply(_cb,arguments);
_ce.apply(_cb,arguments);
};
return true;
};
dojo.hostenv._djInitFired=false;
function dj_load_init(e){
dojo.hostenv._djInitFired=true;
var _d0=(e&&e.type)?e.type.toLowerCase():"load";
if(arguments.callee.initialized||(_d0!="domcontentloaded"&&_d0!="load")){
return;
}
arguments.callee.initialized=true;
if(typeof (_timer)!="undefined"){
clearInterval(_timer);
delete _timer;
}
var _d1=function(){
if(dojo.render.html.ie){
dojo.hostenv.makeWidgets();
}
};
if(dojo.hostenv.inFlightCount==0){
_d1();
dojo.hostenv.modulesLoaded();
}else{
dojo.hostenv.modulesLoadedListeners.unshift(_d1);
}
};
if(document.addEventListener){
if(dojo.render.html.opera||(dojo.render.html.moz&&(djConfig["enableMozDomContentLoaded"]===true))){
document.addEventListener("DOMContentLoaded",dj_load_init,null);
}
window.addEventListener("load",dj_load_init,null);
}
if(dojo.render.html.ie&&dojo.render.os.win){
document.attachEvent("onreadystatechange",function(e){
if(document.readyState=="complete"){
dj_load_init();
}
});
}
if(/(WebKit|khtml)/i.test(navigator.userAgent)){
var _timer=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
dj_load_init();
}
},10);
}
if(dojo.render.html.ie){
dj_addNodeEvtHdlr(window,"beforeunload",function(){
dojo.hostenv._unloading=true;
window.setTimeout(function(){
dojo.hostenv._unloading=false;
},0);
});
}
dj_addNodeEvtHdlr(window,"unload",function(){
dojo.hostenv.unloaded();
if((!dojo.render.html.ie)||(dojo.render.html.ie&&dojo.hostenv._unloading)){
dojo.hostenv.unloaded();
}
});
dojo.hostenv.makeWidgets=function(){
var _d3=[];
if(djConfig.searchIds&&djConfig.searchIds.length>0){
_d3=_d3.concat(djConfig.searchIds);
}
if(dojo.hostenv.searchIds&&dojo.hostenv.searchIds.length>0){
_d3=_d3.concat(dojo.hostenv.searchIds);
}
if((djConfig.parseWidgets)||(_d3.length>0)){
if(dojo.evalObjPath("dojo.widget.Parse")){
var _d4=new dojo.xml.Parse();
if(_d3.length>0){
for(var x=0;x<_d3.length;x++){
var _d6=document.getElementById(_d3[x]);
if(!_d6){
continue;
}
var _d7=_d4.parseElement(_d6,null,true);
dojo.widget.getParser().createComponents(_d7);
}
}else{
if(djConfig.parseWidgets){
var _d7=_d4.parseElement(dojo.body(),null,true);
dojo.widget.getParser().createComponents(_d7);
}
}
}
}
};
dojo.addOnLoad(function(){
if(!dojo.render.html.ie){
dojo.hostenv.makeWidgets();
}
});
try{
if(dojo.render.html.ie){
document.namespaces.add("v","urn:schemas-microsoft-com:vml");
document.createStyleSheet().addRule("v\\:*","behavior:url(#default#VML)");
}
}
catch(e){
}
dojo.hostenv.writeIncludes=function(){
};
if(!dj_undef("document",this)){
dj_currentDocument=this.document;
}
dojo.doc=function(){
return dj_currentDocument;
};
dojo.body=function(){
return dojo.doc().body||dojo.doc().getElementsByTagName("body")[0];
};
dojo.byId=function(id,doc){
if((id)&&((typeof id=="string")||(id instanceof String))){
if(!doc){
doc=dj_currentDocument;
}
var ele=doc.getElementById(id);
if(ele&&(ele.id!=id)&&doc.all){
ele=null;
eles=doc.all[id];
if(eles){
if(eles.length){
for(var i=0;i<eles.length;i++){
if(eles[i].id==id){
ele=eles[i];
break;
}
}
}else{
ele=eles;
}
}
}
return ele;
}
return id;
};
dojo.setContext=function(_dc,_dd){
dj_currentContext=_dc;
dj_currentDocument=_dd;
};
dojo._fireCallback=function(_de,_df,_e0){
if((_df)&&((typeof _de=="string")||(_de instanceof String))){
_de=_df[_de];
}
return (_df?_de.apply(_df,_e0||[]):_de());
};
dojo.withGlobal=function(_e1,_e2,_e3,_e4){
var _e5;
var _e6=dj_currentContext;
var _e7=dj_currentDocument;
try{
dojo.setContext(_e1,_e1.document);
_e5=dojo._fireCallback(_e2,_e3,_e4);
}
finally{
dojo.setContext(_e6,_e7);
}
return _e5;
};
dojo.withDoc=function(_e8,_e9,_ea,_eb){
var _ec;
var _ed=dj_currentDocument;
try{
dj_currentDocument=_e8;
_ec=dojo._fireCallback(_e9,_ea,_eb);
}
finally{
dj_currentDocument=_ed;
}
return _ec;
};
}
dojo.requireIf((djConfig["isDebug"]||djConfig["debugAtAllCosts"]),"dojo.debug");
dojo.requireIf(djConfig["debugAtAllCosts"]&&!window.widget&&!djConfig["useXDomain"],"dojo.browser_debug");
dojo.requireIf(djConfig["debugAtAllCosts"]&&!window.widget&&djConfig["useXDomain"],"dojo.browser_debug_xd");
dojo.provide("com.infonow.ligeo.util.LigeoVarUtils");
function LigeoVarUtils(){
};
LigeoVarUtils.isVirtualEarthLoaded=function(_ee){
var _ef=(typeof VEMap=="function");
if(!_ef){
var _f0=new Date();
var _f1=null;
var _f2=100;
var _f3=new Date();
do{
_f1=new Date();
if((_f1-_f3)>_f2){
_ef=(typeof VEMap=="function");
_f3=new Date();
}
if(_ef){
break;
}
}while((_f1-_f0)<_ee);
}
return _ef;
};
LigeoVarUtils.isNull=function(_f4){
if(_f4===undefined||_f4===null){
return true;
}
return false;
};
LigeoVarUtils.isNotNull=function(_f5){
return !LigeoVarUtils.isNull(_f5);
};
LigeoVarUtils.isNullOrEmpty=function(_f6){
if(_f6===undefined||_f6===null||_f6===""){
return true;
}
return false;
};
LigeoVarUtils.isNotNullOrEmpty=function(_f7){
return !LigeoVarUtils.isNullOrEmpty(_f7);
};
LigeoVarUtils.isFunction=function(_f8){
return "function"==typeof _f8;
};
LigeoVarUtils.appendToDelimitedString=function(_f9,_fa,_fb){
if(!LigeoVarUtils.isNullOrEmpty(_fa)){
if(!LigeoVarUtils.isNullOrEmpty(_f9)){
_f9+=_fb;
}
_f9+=_fa;
}
return _f9;
};
LigeoVarUtils.getAssociativeArrayLength=function(_fc){
var _fd=0;
for(var i in _fc){
_fd++;
}
return _fd;
};
LigeoVarUtils.ShowOnMouseOver=function(_ff){
if(_ff.style){
_ff.style.display="block";
}
};
LigeoVarUtils.HideOnMouseOut=function(_100,evt){
if(LigeoVarUtils.DidMouseLeave(_100,evt)){
if(_100.style){
_100.style.display="none";
}
}
};
LigeoVarUtils.DidMouseLeave=function(_102,evt){
if((typeof evt.toElement!="undefined")&&(typeof _102.contains!="undefined")){
return (evt.x<_102.style.left||evt.x>_102.style.right||evt.y<_102.style.top||evt.y>_102.style.bottom);
}else{
if((typeof evt.relatedTarget!="undefined")&&evt.relatedTarget){
while(evt.relatedTarget){
if(_102==evt.relatedTarget){
return false;
}
evt.relatedTarget=evt.relatedTarget.parentNode;
}
return true;
}
}
return false;
};
LigeoVarUtils.camelize=function(_104){
var _105=_104.split("-"),len=_105.length;
if(len==1){
return _105[0];
}
var _107=_104.charAt(0)=="-"?_105[0].charAt(0).toUpperCase()+_105[0].substring(1):_105[0];
for(var i=1;i<len;i++){
_107+=_105[i].charAt(0).toUpperCase()+_105[i].substring(1);
}
return _107;
};
LigeoVarUtils.getStyle=function(_109,_10a){
_10a=_10a=="float"?"cssFloat":LigeoVarUtils.camelize(_10a);
var _10b=_109.style[_10a];
if(!_10b){
var css=document.defaultView.getComputedStyle(_109,null);
_10b=css?css[_10a]:null;
}
if(_10a=="opacity"){
return _10b?parseFloat(_10b):1;
}
return _10b=="auto"?null:_10b;
};
LigeoVarUtils.getDimensions=function(_10d,_10e){
var _10f=LigeoVarUtils.getStyle(_10d,"display");
if((_10f!="none")&&(_10f!=null)){
if(_10e=="width"){
return _10d.offsetWidth;
}else{
return _10d.offsetHeight;
}
}
var els=_10d.style;
var _111=els.visibility;
var _112=els.position;
var _113=els.display;
els.visibility="hidden";
els.position="absolute";
els.display="block";
var _114=_10d.clientWidth;
var _115=_10d.clientHeight;
els.display=_113;
els.position=_112;
els.visibility=_111;
if(_10e=="width"){
return _114;
}else{
return _115;
}
};
LigeoVarUtils.getElementHeight=function(_116){
var elem;
if(document.getElementById){
elem=document.getElementById(_116);
}else{
if(document.all){
elem=document.all[_116];
}
}
return LigeoVarUtils.getDimensions(elem,"height");
};
LigeoVarUtils.getElementWidth=function(_118){
var elem;
if(document.getElementById){
elem=document.getElementById(_118);
}else{
if(document.all){
elem=document.all[_118];
}
}
return LigeoVarUtils.getDimensions(elem,"width");
};
LigeoVarUtils.addCountryToFullAddress=function(form){
var _11b=form.fullAddress.value;
var _11c=form.country.value;
if(!LigeoVarUtils.isWholeWordInString(_11c,_11b)){
return _11b+", "+_11c;
}
return _11b;
};
LigeoVarUtils.isWholeWordInString=function(_11d,_11e){
var _11f=0;
var _120=-1;
while(_11f!=-1){
_11f=_11e.toUpperCase().indexOf(_11d.toUpperCase(),_120+1);
_120=_11f;
var _121=_11e.substring(_120-1,_11e.length+1);
if(LigeoVarUtils.isNotNullOrEmpty(_11d)&&LigeoVarUtils.isNotNullOrEmpty(_121)){
if(_121.toUpperCase().indexOf(_11d.toUpperCase())!=-1){
var _122=_121.toUpperCase().indexOf(_11d.toUpperCase());
var end=_121.toUpperCase().indexOf(_11d.toUpperCase())+_11d.length;
var _124=_121.charAt(_122-1);
var _125=_121.charAt(end);
if(!LigeoVarUtils.isAlphanumeric(_124)||!LigeoVarUtils.isAlphanumeric(_125)){
return true;
}
}
}
}
return false;
};
LigeoVarUtils.isAlphanumeric=function(_126){
var _127="0123456789";
var _128="abcdefghijklmnopqrstuvwxyz";
var _129="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var _12a=_127+_128+_129;
if(_126==""){
return true;
}
for(i=0;i<_126.length;i++){
if(_12a.indexOf(_126.charAt(i),0)==-1){
return false;
}
}
return true;
};
LigeoVarUtils.URLEncode=function(_12b){
encodedHtml=encodeURIComponent(_12b);
encodedHtml=encodedHtml.replace(/\//g,"%2F");
encodedHtml=encodedHtml.replace(/\?/g,"%3F");
encodedHtml=encodedHtml.replace(/=/g,"%3D");
encodedHtml=encodedHtml.replace(/&/g,"%26");
encodedHtml=encodedHtml.replace(/\+/g,"%2B");
encodedHtml=encodedHtml.replace(/@/g,"%40");
return encodedHtml;
};
dojo.provide("com.infonow.ligeo.util.LigeoDOMUtils");
function LigeoDOMUtils(){
};
LigeoDOMUtils.renderHtmlElementIfNew=function(_12c){
if(LigeoVarUtils.isNotNull(document.body)&&LigeoVarUtils.isNotNull(_12c)){
var id=_12c.getAttribute("id");
if(LigeoVarUtils.isNullOrEmpty(id)){
document.body.appendChild(_12c);
}else{
var _12e=document.getElementById(id);
if(LigeoVarUtils.isNull(_12e)){
document.body.appendChild(_12c);
}
}
}
};
LigeoDOMUtils.insertAdjacentElement=function(_12f,_130,_131){
switch(_12f){
case "beforeBegin":
_131.parentNode.insertBefore(_130,_131);
break;
case "afterBegin":
_131.insertBefore(_130,_131.firstChild);
break;
case "beforeEnd":
_131.appendChild(_130);
break;
case "afterEnd":
if(_131.nextSibling){
_131.parentNode.insertBefore(_130,_131.nextSibling);
}else{
_131.parentNode.appendChild(_130);
}
break;
}
};
LigeoDOMUtils.insertAdjacentHTML=function(_132,_133,_134){
if(typeof _134!="undefined"){
var _135;
if(!LigeoBrowserCompatability.isIe()){
var r=_134.ownerDocument.createRange();
r.setStartBefore(_134);
_135=r.createContextualFragment(_133);
LigeoDOMUtils.insertAdjacentElement(_132,_135,_134);
}else{
_135=_134.ownerDocument.createElement(_133);
_134.insertAdjacentElement("afterEnd",_135);
}
}
};
LigeoDOMUtils.addOnLoadEvent=function(func){
var _138=window.onload;
if(typeof window.onload!="function"){
window.onload=func;
}else{
window.onload=function(){
if(_138){
_138();
}
func();
};
}
};
LigeoDOMUtils.checkParentObject=function(_139,_13a){
var _13b=_139.parentNode;
while(_13b){
if(_13b.id==_13a.id){
return true;
}
_13b=_13b.parentNode;
}
return false;
};
LigeoDOMUtils.getElementsById=function(_13c,_13d){
var _13e=new Array();
if((typeof (_13c)!="string")||LigeoVarUtils.isNullOrEmpty(_13c)){
return null;
}
if(LigeoVarUtils.isNotNullOrEmpty(_13d)){
_13d=document.getElementById(_13d);
}else{
_13d=document;
}
if(document.all){
var _13f=document.all[_13c];
if(_13f!=null){
if(_13f.length==null){
if(this.checkParentObject(_13f,_13d)){
_13e[0]=_13f;
}
}else{
for(i=0;i<_13f.length;i++){
if(this.checkParentObject(_13f[i],_13d)){
_13e.push(_13f[i]);
}
}
}
}
}else{
if(document.evaluate){
var _140="//*[@id='"+_13c.toString()+"']";
var _141=document.evaluate(_140,_13d,null,0,null);
var _142=_141.iterateNext();
while(_142){
if(this.checkParentObject(_142,_13d)){
_13e[_13e.length]=_142;
}
_142=_141.iterateNext();
}
}else{
if(document.getElementsByTagName){
var _143=document.getElementsByTagName("*");
for(i=0;i<_143.length;i++){
if(_143[i].id==_13c){
_13e.push(_143[i]);
}
}
}else{
}
}
}
if(_13e.length>0){
return _13e;
}else{
return null;
}
};
LigeoDOMUtils.showSelectedMap=function(_144){
var _145=document.getElementById(_144);
if(LigeoVarUtils.isNotNullOrEmpty(_145)){
_145.style.display="block";
LigeoAPI.setLigeoMap(LigeoAPI.getLigeoMapById(_144));
}
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
if(LigeoConfigurationAPI.getMyMapDivIDs()[i]!=_144){
var _147=document.getElementById(LigeoConfigurationAPI.getMyMapDivIDs()[i]);
if(_147!=null){
_147.style.display="none";
}
}
}
var _148=LigeoAPI.getLigeoMapById(_144);
if(_148!=null){
if(_148.getMapStyle()!=_148.getVEMap().GetMapStyle()){
_148.applyMapStyles();
}
}
_148.fixNavMapStyles("from LigeoDOMUtils");
};
LigeoDOMUtils.deleteElement=function(_149){
if(LigeoVarUtils.isNotNullOrEmpty(_149)){
_149.parentNode.removeChild(_149);
}
};
dojo.provide("com.infonow.ligeo.map.LigeoInfoPanel");
function LigeoInfoPanel(_14a,_14b,_14c){
this.setContent(_14a);
this.setLabel(_14b);
this.setUniqueId(_14c);
this.myPanelHtmlElement=null;
};
LigeoInfoPanel.prototype.getContent=function(){
return this.myContent;
};
LigeoInfoPanel.prototype.setContent=function(_14d){
if(LigeoVarUtils.isNotNull(_14d)){
this.myContent=_14d;
}else{
this.myContent="";
}
};
LigeoInfoPanel.prototype.getLabel=function(){
return this.myLabel;
};
LigeoInfoPanel.prototype.setLabel=function(_14e){
if(LigeoVarUtils.isNotNull(_14e)){
this.myLabel=_14e;
}else{
this.myLabel="";
}
};
LigeoInfoPanel.prototype.getUniqueId=function(){
return this.myUniqueId;
};
LigeoInfoPanel.prototype.setUniqueId=function(_14f){
if(LigeoVarUtils.isNotNull(_14f)){
this.myUniqueId=_14f;
}else{
this.myUniqueId="";
}
};
LigeoInfoPanel.prototype.renderHtmlElement=function(_150){
if(LigeoVarUtils.isNotNull(_150)){
this.myPanelHtmlElement=document.createElement("DIV");
this.myPanelHtmlElement["id"]="LigeoInfoPanel-"+this.getUniqueId();
this.myPanelHtmlElement.style.display="none";
this.myPanelHtmlElement.innerHTML=this.myContent;
_150.appendChild(this.myPanelHtmlElement);
}
};
LigeoInfoPanel.prototype.getPanelHtmlElement=function(){
return this.myPanelHtmlElement;
};
LigeoInfoPanel.prototype.hide=function(){
if(LigeoVarUtils.isNotNull(this.getPanelHtmlElement())){
this.getPanelHtmlElement().style.display="none";
}
};
LigeoInfoPanel.prototype.show=function(){
if(LigeoVarUtils.isNotNull(this.getPanelHtmlElement())){
this.getPanelHtmlElement().style.display="inline";
}
};
LigeoInfoPanel.prototype.isRendered=function(){
return LigeoVarUtils.isNotNull(this.getPanelHtmlElement());
};
dojo.provide("com.infonow.ligeo.LigeoLocation");
function LigeoLocation(id){
var _152=id;
var _153=0;
var _154=null;
var _155=null;
var _156="";
var _157="";
var _158="";
var _159="";
var _15a="";
var _15b="";
var _15c="";
var _15d="";
var _15e="";
var _15f="";
var _160="";
var _161="";
var _162="";
var _163="";
var _164="";
var _165=new Object();
var _166=null;
this.getUniqueId=function(){
return _152;
};
this.setUniqueId=function(_167){
_152=_167;
};
this.getLocationNumber=function(){
return _153;
};
this.setLocationNumber=function(_168){
_153=_168;
};
this.getLatitude=function(){
return _154;
};
this.setLatitude=function(_169){
_154=_169;
};
this.getLongitude=function(){
return _155;
};
this.setLongitude=function(_16a){
_155=_16a;
};
this.getName=function(){
return _156;
};
this.setName=function(name){
_156=name;
};
this.getStreet1=function(){
return _157;
};
this.setStreet1=function(_16c){
_157=_16c;
};
this.getStreet2=function(){
return _158;
};
this.setStreet2=function(_16d){
_158=_16d;
};
this.getStreet3=function(){
return _159;
};
this.setStreet3=function(_16e){
_159=_16e;
};
this.getPostalCode=function(){
return _15a;
};
this.setPostalCode=function(_16f){
_15a=_16f;
};
this.getCity=function(){
return _15b;
};
this.setCity=function(city){
_15b=city;
};
this.getCounty=function(){
return _15c;
};
this.setCounty=function(_171){
_15c=_171;
};
this.getStateProvince=function(){
return _15d;
};
this.setStateProvince=function(_172){
_15d=_172;
};
this.getCountryIso2=function(){
return _15e;
};
this.setCountryIso2=function(_173){
_15e=_173;
};
this.getPhone1=function(){
return _15f;
};
this.setPhone1=function(_174){
_15f=_174;
};
this.getPhone2=function(){
return _160;
};
this.setPhone2=function(_175){
_160=_175;
};
this.getFax=function(){
return _161;
};
this.setFax=function(fax){
_161=fax;
};
this.getIconUrl=function(){
return _162;
};
this.setIconUrl=function(_177){
_162=_177;
};
this.getLinkUrl=function(){
return _163;
};
this.setLinkUrl=function(_178){
_163=_178;
};
this.getLinkScript=function(){
return _164;
};
this.setLinkScript=function(_179){
_164=_179;
};
this.getInfoPanel=function(_17a){
return _165[_17a];
};
this.getAllInfoPanels=function(){
return _165;
};
this.getDefaultInfoPanel=function(){
for(var i in _165){
return _165[i];
}
};
this.setBalloonContent=function(_17c,_17d){
_165=new Object();
this.addBalloonContent(_17c,_17d);
};
this.addBalloonContent=function(_17e,_17f){
var _180=_152+"-"+LigeoVarUtils.getAssociativeArrayLength(_165);
_165[_180]=new LigeoInfoPanel(_17e,_17f,_180);
};
this.getVEShape=function(){
var _181;
var _182;
if(LigeoVarUtils.isNotNull(_166)){
_181=_166;
}else{
_181=new VEShape(VEShapeType.Pushpin,this.getVELatLong());
_181.SetCustomIcon(LigeoEnvironment.getImagePath(this.getIconUrl()));
_166=_181;
}
return _181;
};
this.getVELatLong=function(){
return new VELatLong(_154,_155);
};
this.getAddressString=function(){
var _183="";
_183=LigeoVarUtils.appendToDelimitedString(_183,_157,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_158,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_159,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_15b,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_15c,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_15d,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_15a,", ");
_183=LigeoVarUtils.appendToDelimitedString(_183,_15e,", ");
return _183;
};
this.hasBalloonContent=function(){
var _184=false;
for(var i in _165){
if(!LigeoVarUtils.isFunction(_165[i])){
if(LigeoVarUtils.isNotNull(_165[i].getContent())){
_184=true;
}
}
}
return _184;
};
};
dojo.provide("dojo.uri.Uri");
dojo.uri=new function(){
this.dojoUri=function(uri){
return new dojo.uri.Uri(dojo.hostenv.getBaseScriptUri(),uri);
};
this.moduleUri=function(_187,uri){
var loc=dojo.hostenv.getModuleSymbols(_187).join("/");
if(!loc){
return null;
}
if(loc.lastIndexOf("/")!=loc.length-1){
loc+="/";
}
var _18a=loc.indexOf(":");
var _18b=loc.indexOf("/");
if(loc.charAt(0)!="/"&&(_18a==-1||_18a>_18b)){
loc=dojo.hostenv.getBaseScriptUri()+loc;
}
return new dojo.uri.Uri(loc,uri);
};
this.Uri=function(){
var uri=arguments[0];
for(var i=1;i<arguments.length;i++){
if(!arguments[i]){
continue;
}
var _18e=new dojo.uri.Uri(arguments[i].toString());
var _18f=new dojo.uri.Uri(uri.toString());
if((_18e.path=="")&&(_18e.scheme==null)&&(_18e.authority==null)&&(_18e.query==null)){
if(_18e.fragment!=null){
_18f.fragment=_18e.fragment;
}
_18e=_18f;
}else{
if(_18e.scheme==null){
_18e.scheme=_18f.scheme;
if(_18e.authority==null){
_18e.authority=_18f.authority;
if(_18e.path.charAt(0)!="/"){
var path=_18f.path.substring(0,_18f.path.lastIndexOf("/")+1)+_18e.path;
var segs=path.split("/");
for(var j=0;j<segs.length;j++){
if(segs[j]=="."){
if(j==segs.length-1){
segs[j]="";
}else{
segs.splice(j,1);
j--;
}
}else{
if(j>0&&!(j==1&&segs[0]=="")&&segs[j]==".."&&segs[j-1]!=".."){
if(j==segs.length-1){
segs.splice(j,1);
segs[j-1]="";
}else{
segs.splice(j-1,2);
j-=2;
}
}
}
}
_18e.path=segs.join("/");
}
}
}
}
uri="";
if(_18e.scheme!=null){
uri+=_18e.scheme+":";
}
if(_18e.authority!=null){
uri+="//"+_18e.authority;
}
uri+=_18e.path;
if(_18e.query!=null){
uri+="?"+_18e.query;
}
if(_18e.fragment!=null){
uri+="#"+_18e.fragment;
}
}
this.uri=uri.toString();
var _193="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$";
var r=this.uri.match(new RegExp(_193));
this.scheme=r[2]||(r[1]?"":null);
this.authority=r[4]||(r[3]?"":null);
this.path=r[5];
this.query=r[7]||(r[6]?"":null);
this.fragment=r[9]||(r[8]?"":null);
if(this.authority!=null){
_193="^((([^:]+:)?([^@]+))@)?([^:]*)(:([0-9]+))?$";
r=this.authority.match(new RegExp(_193));
this.user=r[3]||null;
this.password=r[4]||null;
this.host=r[5];
this.port=r[7]||null;
}
this.toString=function(){
return this.uri;
};
};
};
dojo.provide("dojo.lang.common");
dojo.lang.inherits=function(_195,_196){
if(!dojo.lang.isFunction(_196)){
dojo.raise("dojo.inherits: superclass argument ["+_196+"] must be a function (subclass: ["+_195+"']");
}
_195.prototype=new _196();
_195.prototype.constructor=_195;
_195.superclass=_196.prototype;
_195["super"]=_196.prototype;
};
dojo.lang._mixin=function(obj,_198){
var tobj={};
for(var x in _198){
if((typeof tobj[x]=="undefined")||(tobj[x]!=_198[x])){
obj[x]=_198[x];
}
}
if(dojo.render.html.ie&&(typeof (_198["toString"])=="function")&&(_198["toString"]!=obj["toString"])&&(_198["toString"]!=tobj["toString"])){
obj.toString=_198.toString;
}
return obj;
};
dojo.lang.mixin=function(obj,_19c){
for(var i=1,l=arguments.length;i<l;i++){
dojo.lang._mixin(obj,arguments[i]);
}
return obj;
};
dojo.lang.extend=function(_19f,_1a0){
for(var i=1,l=arguments.length;i<l;i++){
dojo.lang._mixin(_19f.prototype,arguments[i]);
}
return _19f;
};
dojo.inherits=dojo.lang.inherits;
dojo.mixin=dojo.lang.mixin;
dojo.extend=dojo.lang.extend;
dojo.lang.find=function(_1a3,_1a4,_1a5,_1a6){
if(!dojo.lang.isArrayLike(_1a3)&&dojo.lang.isArrayLike(_1a4)){
dojo.deprecated("dojo.lang.find(value, array)","use dojo.lang.find(array, value) instead","0.5");
var temp=_1a3;
_1a3=_1a4;
_1a4=temp;
}
var _1a8=dojo.lang.isString(_1a3);
if(_1a8){
_1a3=_1a3.split("");
}
if(_1a6){
var step=-1;
var i=_1a3.length-1;
var end=-1;
}else{
var step=1;
var i=0;
var end=_1a3.length;
}
if(_1a5){
while(i!=end){
if(_1a3[i]===_1a4){
return i;
}
i+=step;
}
}else{
while(i!=end){
if(_1a3[i]==_1a4){
return i;
}
i+=step;
}
}
return -1;
};
dojo.lang.indexOf=dojo.lang.find;
dojo.lang.findLast=function(_1ac,_1ad,_1ae){
return dojo.lang.find(_1ac,_1ad,_1ae,true);
};
dojo.lang.lastIndexOf=dojo.lang.findLast;
dojo.lang.inArray=function(_1af,_1b0){
return dojo.lang.find(_1af,_1b0)>-1;
};
dojo.lang.isObject=function(it){
if(typeof it=="undefined"){
return false;
}
return (typeof it=="object"||it===null||dojo.lang.isArray(it)||dojo.lang.isFunction(it));
};
dojo.lang.isArray=function(it){
return (it&&it instanceof Array||typeof it=="array");
};
dojo.lang.isArrayLike=function(it){
if((!it)||(dojo.lang.isUndefined(it))){
return false;
}
if(dojo.lang.isString(it)){
return false;
}
if(dojo.lang.isFunction(it)){
return false;
}
if(dojo.lang.isArray(it)){
return true;
}
if((it.tagName)&&(it.tagName.toLowerCase()=="form")){
return false;
}
if(dojo.lang.isNumber(it.length)&&isFinite(it.length)){
return true;
}
return false;
};
dojo.lang.isFunction=function(it){
return (it instanceof Function||typeof it=="function");
};
(function(){
if((dojo.render.html.capable)&&(dojo.render.html["safari"])){
dojo.lang.isFunction=function(it){
if((typeof (it)=="function")&&(it=="[object NodeList]")){
return false;
}
return (it instanceof Function||typeof it=="function");
};
}
})();
dojo.lang.isString=function(it){
return (typeof it=="string"||it instanceof String);
};
dojo.lang.isAlien=function(it){
if(!it){
return false;
}
return !dojo.lang.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));
};
dojo.lang.isBoolean=function(it){
return (it instanceof Boolean||typeof it=="boolean");
};
dojo.lang.isNumber=function(it){
return (it instanceof Number||typeof it=="number");
};
dojo.lang.isUndefined=function(it){
return ((typeof (it)=="undefined")&&(it==undefined));
};
dojo.provide("dojo.dom");
dojo.dom.ELEMENT_NODE=1;
dojo.dom.ATTRIBUTE_NODE=2;
dojo.dom.TEXT_NODE=3;
dojo.dom.CDATA_SECTION_NODE=4;
dojo.dom.ENTITY_REFERENCE_NODE=5;
dojo.dom.ENTITY_NODE=6;
dojo.dom.PROCESSING_INSTRUCTION_NODE=7;
dojo.dom.COMMENT_NODE=8;
dojo.dom.DOCUMENT_NODE=9;
dojo.dom.DOCUMENT_TYPE_NODE=10;
dojo.dom.DOCUMENT_FRAGMENT_NODE=11;
dojo.dom.NOTATION_NODE=12;
dojo.dom.dojoml="http://www.dojotoolkit.org/2004/dojoml";
dojo.dom.xmlns={svg:"http://www.w3.org/2000/svg",smil:"http://www.w3.org/2001/SMIL20/",mml:"http://www.w3.org/1998/Math/MathML",cml:"http://www.xml-cml.org",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml",xul:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",xbl:"http://www.mozilla.org/xbl",fo:"http://www.w3.org/1999/XSL/Format",xsl:"http://www.w3.org/1999/XSL/Transform",xslt:"http://www.w3.org/1999/XSL/Transform",xi:"http://www.w3.org/2001/XInclude",xforms:"http://www.w3.org/2002/01/xforms",saxon:"http://icl.com/saxon",xalan:"http://xml.apache.org/xslt",xsd:"http://www.w3.org/2001/XMLSchema",dt:"http://www.w3.org/2001/XMLSchema-datatypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",dc:"http://purl.org/dc/elements/1.1/",dcq:"http://purl.org/dc/qualifiers/1.0","soap-env":"http://schemas.xmlsoap.org/soap/envelope/",wsdl:"http://schemas.xmlsoap.org/wsdl/",AdobeExtensions:"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"};
dojo.dom.isNode=function(wh){
if(typeof Element=="function"){
try{
return wh instanceof Element;
}
catch(e){
}
}else{
return wh&&!isNaN(wh.nodeType);
}
};
dojo.dom.getUniqueId=function(){
var _1bc=dojo.doc();
do{
var id="dj_unique_"+(++arguments.callee._idIncrement);
}while(_1bc.getElementById(id));
return id;
};
dojo.dom.getUniqueId._idIncrement=0;
dojo.dom.firstElement=dojo.dom.getFirstChildElement=function(_1be,_1bf){
var node=_1be.firstChild;
while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE){
node=node.nextSibling;
}
if(_1bf&&node&&node.tagName&&node.tagName.toLowerCase()!=_1bf.toLowerCase()){
node=dojo.dom.nextElement(node,_1bf);
}
return node;
};
dojo.dom.lastElement=dojo.dom.getLastChildElement=function(_1c1,_1c2){
var node=_1c1.lastChild;
while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE){
node=node.previousSibling;
}
if(_1c2&&node&&node.tagName&&node.tagName.toLowerCase()!=_1c2.toLowerCase()){
node=dojo.dom.prevElement(node,_1c2);
}
return node;
};
dojo.dom.nextElement=dojo.dom.getNextSiblingElement=function(node,_1c5){
if(!node){
return null;
}
do{
node=node.nextSibling;
}while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE);
if(node&&_1c5&&_1c5.toLowerCase()!=node.tagName.toLowerCase()){
return dojo.dom.nextElement(node,_1c5);
}
return node;
};
dojo.dom.prevElement=dojo.dom.getPreviousSiblingElement=function(node,_1c7){
if(!node){
return null;
}
if(_1c7){
_1c7=_1c7.toLowerCase();
}
do{
node=node.previousSibling;
}while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE);
if(node&&_1c7&&_1c7.toLowerCase()!=node.tagName.toLowerCase()){
return dojo.dom.prevElement(node,_1c7);
}
return node;
};
dojo.dom.moveChildren=function(_1c8,_1c9,trim){
var _1cb=0;
if(trim){
while(_1c8.hasChildNodes()&&_1c8.firstChild.nodeType==dojo.dom.TEXT_NODE){
_1c8.removeChild(_1c8.firstChild);
}
while(_1c8.hasChildNodes()&&_1c8.lastChild.nodeType==dojo.dom.TEXT_NODE){
_1c8.removeChild(_1c8.lastChild);
}
}
while(_1c8.hasChildNodes()){
_1c9.appendChild(_1c8.firstChild);
_1cb++;
}
return _1cb;
};
dojo.dom.copyChildren=function(_1cc,_1cd,trim){
var _1cf=_1cc.cloneNode(true);
return this.moveChildren(_1cf,_1cd,trim);
};
dojo.dom.replaceChildren=function(node,_1d1){
var _1d2=[];
if(dojo.render.html.ie){
for(var i=0;i<node.childNodes.length;i++){
_1d2.push(node.childNodes[i]);
}
}
dojo.dom.removeChildren(node);
node.appendChild(_1d1);
for(var i=0;i<_1d2.length;i++){
dojo.dom.destroyNode(_1d2[i]);
}
};
dojo.dom.removeChildren=function(node){
var _1d5=node.childNodes.length;
while(node.hasChildNodes()){
dojo.dom.removeNode(node.firstChild);
}
return _1d5;
};
dojo.dom.replaceNode=function(node,_1d7){
return node.parentNode.replaceChild(_1d7,node);
};
dojo.dom.destroyNode=function(node){
if(node.parentNode){
node=dojo.dom.removeNode(node);
}
if(node.nodeType!=3){
if(dojo.evalObjPath("dojo.event.browser.clean",false)){
dojo.event.browser.clean(node);
}
if(dojo.render.html.ie){
node.outerHTML="";
}
}
};
dojo.dom.removeNode=function(node){
if(node&&node.parentNode){
return node.parentNode.removeChild(node);
}
};
dojo.dom.getAncestors=function(node,_1db,_1dc){
var _1dd=[];
var _1de=(_1db&&(_1db instanceof Function||typeof _1db=="function"));
while(node){
if(!_1de||_1db(node)){
_1dd.push(node);
}
if(_1dc&&_1dd.length>0){
return _1dd[0];
}
node=node.parentNode;
}
if(_1dc){
return null;
}
return _1dd;
};
dojo.dom.getAncestorsByTag=function(node,tag,_1e1){
tag=tag.toLowerCase();
return dojo.dom.getAncestors(node,function(el){
return ((el.tagName)&&(el.tagName.toLowerCase()==tag));
},_1e1);
};
dojo.dom.getFirstAncestorByTag=function(node,tag){
return dojo.dom.getAncestorsByTag(node,tag,true);
};
dojo.dom.isDescendantOf=function(node,_1e6,_1e7){
if(_1e7&&node){
node=node.parentNode;
}
while(node){
if(node==_1e6){
return true;
}
node=node.parentNode;
}
return false;
};
dojo.dom.innerXML=function(node){
if(node.innerXML){
return node.innerXML;
}else{
if(node.xml){
return node.xml;
}else{
if(typeof XMLSerializer!="undefined"){
return (new XMLSerializer()).serializeToString(node);
}
}
}
};
dojo.dom.createDocument=function(){
var doc=null;
var _1ea=dojo.doc();
if(!dj_undef("ActiveXObject")){
var _1eb=["MSXML2","Microsoft","MSXML","MSXML3"];
for(var i=0;i<_1eb.length;i++){
try{
doc=new ActiveXObject(_1eb[i]+".XMLDOM");
}
catch(e){
}
if(doc){
break;
}
}
}else{
if((_1ea.implementation)&&(_1ea.implementation.createDocument)){
doc=_1ea.implementation.createDocument("","",null);
}
}
return doc;
};
dojo.dom.createDocumentFromText=function(str,_1ee){
if(!_1ee){
_1ee="text/xml";
}
if(!dj_undef("DOMParser")){
var _1ef=new DOMParser();
return _1ef.parseFromString(str,_1ee);
}else{
if(!dj_undef("ActiveXObject")){
var _1f0=dojo.dom.createDocument();
if(_1f0){
_1f0.async=false;
_1f0.loadXML(str);
return _1f0;
}else{
dojo.debug("toXml didn't work?");
}
}else{
var _1f1=dojo.doc();
if(_1f1.createElement){
var tmp=_1f1.createElement("xml");
tmp.innerHTML=str;
if(_1f1.implementation&&_1f1.implementation.createDocument){
var _1f3=_1f1.implementation.createDocument("foo","",null);
for(var i=0;i<tmp.childNodes.length;i++){
_1f3.importNode(tmp.childNodes.item(i),true);
}
return _1f3;
}
return ((tmp.document)&&(tmp.document.firstChild?tmp.document.firstChild:tmp));
}
}
}
return null;
};
dojo.dom.prependChild=function(node,_1f6){
if(_1f6.firstChild){
_1f6.insertBefore(node,_1f6.firstChild);
}else{
_1f6.appendChild(node);
}
return true;
};
dojo.dom.insertBefore=function(node,ref,_1f9){
if((_1f9!=true)&&(node===ref||node.nextSibling===ref)){
return false;
}
var _1fa=ref.parentNode;
_1fa.insertBefore(node,ref);
return true;
};
dojo.dom.insertAfter=function(node,ref,_1fd){
var pn=ref.parentNode;
if(ref==pn.lastChild){
if((_1fd!=true)&&(node===ref)){
return false;
}
pn.appendChild(node);
}else{
return this.insertBefore(node,ref.nextSibling,_1fd);
}
return true;
};
dojo.dom.insertAtPosition=function(node,ref,_201){
if((!node)||(!ref)||(!_201)){
return false;
}
switch(_201.toLowerCase()){
case "before":
return dojo.dom.insertBefore(node,ref);
case "after":
return dojo.dom.insertAfter(node,ref);
case "first":
if(ref.firstChild){
return dojo.dom.insertBefore(node,ref.firstChild);
}else{
ref.appendChild(node);
return true;
}
break;
default:
ref.appendChild(node);
return true;
}
};
dojo.dom.insertAtIndex=function(node,_203,_204){
var _205=_203.childNodes;
if(!_205.length||_205.length==_204){
_203.appendChild(node);
return true;
}
if(_204==0){
return dojo.dom.prependChild(node,_203);
}
return dojo.dom.insertAfter(node,_205[_204-1]);
};
dojo.dom.textContent=function(node,text){
if(arguments.length>1){
var _208=dojo.doc();
dojo.dom.replaceChildren(node,_208.createTextNode(text));
return text;
}else{
if(node.textContent!=undefined){
return node.textContent;
}
var _209="";
if(node==null){
return _209;
}
for(var i=0;i<node.childNodes.length;i++){
switch(node.childNodes[i].nodeType){
case 1:
case 5:
_209+=dojo.dom.textContent(node.childNodes[i]);
break;
case 3:
case 2:
case 4:
_209+=node.childNodes[i].nodeValue;
break;
default:
break;
}
}
return _209;
}
};
dojo.dom.hasParent=function(node){
return Boolean(node&&node.parentNode&&dojo.dom.isNode(node.parentNode));
};
dojo.dom.isTag=function(node){
if(node&&node.tagName){
for(var i=1;i<arguments.length;i++){
if(node.tagName==String(arguments[i])){
return String(arguments[i]);
}
}
}
return "";
};
dojo.dom.setAttributeNS=function(elem,_20f,_210,_211){
if(elem==null||((elem==undefined)&&(typeof elem=="undefined"))){
dojo.raise("No element given to dojo.dom.setAttributeNS");
}
if(!((elem.setAttributeNS==undefined)&&(typeof elem.setAttributeNS=="undefined"))){
elem.setAttributeNS(_20f,_210,_211);
}else{
var _212=elem.ownerDocument;
var _213=_212.createNode(2,_210,_20f);
_213.nodeValue=_211;
elem.setAttributeNode(_213);
}
};
dojo.provide("dojo.html.common");
dojo.lang.mixin(dojo.html,dojo.dom);
dojo.html.body=function(){
dojo.deprecated("dojo.html.body() moved to dojo.body()","0.5");
return dojo.body();
};
dojo.html.getEventTarget=function(evt){
if(!evt){
evt=dojo.global().event||{};
}
var t=(evt.srcElement?evt.srcElement:(evt.target?evt.target:null));
while((t)&&(t.nodeType!=1)){
t=t.parentNode;
}
return t;
};
dojo.html.getViewport=function(){
var _216=dojo.global();
var _217=dojo.doc();
var w=0;
var h=0;
if(dojo.render.html.mozilla){
w=_217.documentElement.clientWidth;
h=_216.innerHeight;
}else{
if(!dojo.render.html.opera&&_216.innerWidth){
w=_216.innerWidth;
h=_216.innerHeight;
}else{
if(!dojo.render.html.opera&&dojo.exists(_217,"documentElement.clientWidth")){
var w2=_217.documentElement.clientWidth;
if(!w||w2&&w2<w){
w=w2;
}
h=_217.documentElement.clientHeight;
}else{
if(dojo.body().clientWidth){
w=dojo.body().clientWidth;
h=dojo.body().clientHeight;
}
}
}
}
return {width:w,height:h};
};
dojo.html.getScroll=function(){
var _21b=dojo.global();
var _21c=dojo.doc();
var top=_21b.pageYOffset||_21c.documentElement.scrollTop||dojo.body().scrollTop||0;
var left=_21b.pageXOffset||_21c.documentElement.scrollLeft||dojo.body().scrollLeft||0;
return {top:top,left:left,offset:{x:left,y:top}};
};
dojo.html.getParentByType=function(node,type){
var _221=dojo.doc();
var _222=dojo.byId(node);
type=type.toLowerCase();
while((_222)&&(_222.nodeName.toLowerCase()!=type)){
if(_222==(_221["body"]||_221["documentElement"])){
return null;
}
_222=_222.parentNode;
}
return _222;
};
dojo.html.getAttribute=function(node,attr){
node=dojo.byId(node);
if((!node)||(!node.getAttribute)){
return null;
}
var ta=typeof attr=="string"?attr:new String(attr);
var v=node.getAttribute(ta.toUpperCase());
if((v)&&(typeof v=="string")&&(v!="")){
return v;
}
if(v&&v.value){
return v.value;
}
if((node.getAttributeNode)&&(node.getAttributeNode(ta))){
return (node.getAttributeNode(ta)).value;
}else{
if(node.getAttribute(ta)){
return node.getAttribute(ta);
}else{
if(node.getAttribute(ta.toLowerCase())){
return node.getAttribute(ta.toLowerCase());
}
}
}
return null;
};
dojo.html.hasAttribute=function(node,attr){
return dojo.html.getAttribute(dojo.byId(node),attr)?true:false;
};
dojo.html.getCursorPosition=function(e){
e=e||dojo.global().event;
var _22a={x:0,y:0};
if(e.pageX||e.pageY){
_22a.x=e.pageX;
_22a.y=e.pageY;
}else{
var de=dojo.doc().documentElement;
var db=dojo.body();
_22a.x=e.clientX+((de||db)["scrollLeft"])-((de||db)["clientLeft"]);
_22a.y=e.clientY+((de||db)["scrollTop"])-((de||db)["clientTop"]);
}
return _22a;
};
dojo.html.isTag=function(node){
node=dojo.byId(node);
if(node&&node.tagName){
for(var i=1;i<arguments.length;i++){
if(node.tagName.toLowerCase()==String(arguments[i]).toLowerCase()){
return String(arguments[i]).toLowerCase();
}
}
}
return "";
};
if(dojo.render.html.ie&&!dojo.render.html.ie70){
if(window.location.href.substr(0,6).toLowerCase()!="https:"){
(function(){
var _22f=dojo.doc().createElement("script");
_22f.src="javascript:'dojo.html.createExternalElement=function(doc, tag){ return doc.createElement(tag); }'";
dojo.doc().getElementsByTagName("head")[0].appendChild(_22f);
})();
}
}else{
dojo.html.createExternalElement=function(doc,tag){
return doc.createElement(tag);
};
}
dojo.html._callDeprecated=function(_232,_233,args,_235,_236){
dojo.deprecated("dojo.html."+_232,"replaced by dojo.html."+_233+"("+(_235?"node, {"+_235+": "+_235+"}":"")+")"+(_236?"."+_236:""),"0.5");
var _237=[];
if(_235){
var _238={};
_238[_235]=args[1];
_237.push(args[0]);
_237.push(_238);
}else{
_237=args;
}
var ret=dojo.html[_233].apply(dojo.html,args);
if(_236){
return ret[_236];
}else{
return ret;
}
};
dojo.html.getViewportWidth=function(){
return dojo.html._callDeprecated("getViewportWidth","getViewport",arguments,null,"width");
};
dojo.html.getViewportHeight=function(){
return dojo.html._callDeprecated("getViewportHeight","getViewport",arguments,null,"height");
};
dojo.html.getViewportSize=function(){
return dojo.html._callDeprecated("getViewportSize","getViewport",arguments);
};
dojo.html.getScrollTop=function(){
return dojo.html._callDeprecated("getScrollTop","getScroll",arguments,null,"top");
};
dojo.html.getScrollLeft=function(){
return dojo.html._callDeprecated("getScrollLeft","getScroll",arguments,null,"left");
};
dojo.html.getScrollOffset=function(){
return dojo.html._callDeprecated("getScrollOffset","getScroll",arguments,null,"offset");
};
dojo.provide("dojo.html.style");
dojo.html.getClass=function(node){
node=dojo.byId(node);
if(!node){
return "";
}
var cs="";
if(node.className){
cs=node.className;
}else{
if(dojo.html.hasAttribute(node,"class")){
cs=dojo.html.getAttribute(node,"class");
}
}
return cs.replace(/^\s+|\s+$/g,"");
};
dojo.html.getClasses=function(node){
var c=dojo.html.getClass(node);
return (c=="")?[]:c.split(/\s+/g);
};
dojo.html.hasClass=function(node,_23f){
return (new RegExp("(^|\\s+)"+_23f+"(\\s+|$)")).test(dojo.html.getClass(node));
};
dojo.html.prependClass=function(node,_241){
_241+=" "+dojo.html.getClass(node);
return dojo.html.setClass(node,_241);
};
dojo.html.addClass=function(node,_243){
if(dojo.html.hasClass(node,_243)){
return false;
}
_243=(dojo.html.getClass(node)+" "+_243).replace(/^\s+|\s+$/g,"");
return dojo.html.setClass(node,_243);
};
dojo.html.setClass=function(node,_245){
node=dojo.byId(node);
var cs=new String(_245);
try{
if(typeof node.className=="string"){
node.className=cs;
}else{
if(node.setAttribute){
node.setAttribute("class",_245);
node.className=cs;
}else{
return false;
}
}
}
catch(e){
dojo.debug("dojo.html.setClass() failed",e);
}
return true;
};
dojo.html.removeClass=function(node,_248,_249){
try{
if(!_249){
var _24a=dojo.html.getClass(node).replace(new RegExp("(^|\\s+)"+_248+"(\\s+|$)"),"$1$2");
}else{
var _24a=dojo.html.getClass(node).replace(_248,"");
}
dojo.html.setClass(node,_24a);
}
catch(e){
dojo.debug("dojo.html.removeClass() failed",e);
}
return true;
};
dojo.html.replaceClass=function(node,_24c,_24d){
dojo.html.removeClass(node,_24d);
dojo.html.addClass(node,_24c);
};
dojo.html.classMatchType={ContainsAll:0,ContainsAny:1,IsOnly:2};
dojo.html.getElementsByClass=function(_24e,_24f,_250,_251,_252){
_252=false;
var _253=dojo.doc();
_24f=dojo.byId(_24f)||_253;
var _254=_24e.split(/\s+/g);
var _255=[];
if(_251!=1&&_251!=2){
_251=0;
}
var _256=new RegExp("(\\s|^)(("+_254.join(")|(")+"))(\\s|$)");
var _257=_254.join(" ").length;
var _258=[];
if(!_252&&_253.evaluate){
var _259=".//"+(_250||"*")+"[contains(";
if(_251!=dojo.html.classMatchType.ContainsAny){
_259+="concat(' ',@class,' '), ' "+_254.join(" ') and contains(concat(' ',@class,' '), ' ")+" ')";
if(_251==2){
_259+=" and string-length(@class)="+_257+"]";
}else{
_259+="]";
}
}else{
_259+="concat(' ',@class,' '), ' "+_254.join(" ') or contains(concat(' ',@class,' '), ' ")+" ')]";
}
var _25a=_253.evaluate(_259,_24f,null,XPathResult.ANY_TYPE,null);
var _25b=_25a.iterateNext();
while(_25b){
try{
_258.push(_25b);
_25b=_25a.iterateNext();
}
catch(e){
break;
}
}
return _258;
}else{
if(!_250){
_250="*";
}
_258=_24f.getElementsByTagName(_250);
var node,i=0;
outer:
while(node=_258[i++]){
var _25e=dojo.html.getClasses(node);
if(_25e.length==0){
continue outer;
}
var _25f=0;
for(var j=0;j<_25e.length;j++){
if(_256.test(_25e[j])){
if(_251==dojo.html.classMatchType.ContainsAny){
_255.push(node);
continue outer;
}else{
_25f++;
}
}else{
if(_251==dojo.html.classMatchType.IsOnly){
continue outer;
}
}
}
if(_25f==_254.length){
if((_251==dojo.html.classMatchType.IsOnly)&&(_25f==_25e.length)){
_255.push(node);
}else{
if(_251==dojo.html.classMatchType.ContainsAll){
_255.push(node);
}
}
}
}
return _255;
}
};
dojo.html.getElementsByClassName=dojo.html.getElementsByClass;
dojo.html.toCamelCase=function(_261){
var arr=_261.split("-"),cc=arr[0];
for(var i=1;i<arr.length;i++){
cc+=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
}
return cc;
};
dojo.html.toSelectorCase=function(_265){
return _265.replace(/([A-Z])/g,"-$1").toLowerCase();
};
if(dojo.render.html.ie){
dojo.html.getComputedStyle=function(node,_267,_268){
node=dojo.byId(node);
if(!node||!node.currentStyle){
return _268;
}
return node.currentStyle[dojo.html.toCamelCase(_267)];
};
dojo.html.getComputedStyles=function(node){
return node.currentStyle;
};
}else{
dojo.html.getComputedStyle=function(node,_26b,_26c){
node=dojo.byId(node);
if(!node||!node.style){
return _26c;
}
var s=document.defaultView.getComputedStyle(node,null);
return (s&&s[dojo.html.toCamelCase(_26b)])||"";
};
dojo.html.getComputedStyles=function(node){
return document.defaultView.getComputedStyle(node,null);
};
}
dojo.html.getStyleProperty=function(node,_270){
node=dojo.byId(node);
return (node&&node.style?node.style[dojo.html.toCamelCase(_270)]:undefined);
};
dojo.html.getStyle=function(node,_272){
var _273=dojo.html.getStyleProperty(node,_272);
return (_273?_273:dojo.html.getComputedStyle(node,_272));
};
dojo.html.setStyle=function(node,_275,_276){
node=dojo.byId(node);
if(node&&node.style){
var _277=dojo.html.toCamelCase(_275);
node.style[_277]=_276;
}
};
dojo.html.setStyleText=function(_278,text){
try{
_278.style.cssText=text;
}
catch(e){
_278.setAttribute("style",text);
}
};
dojo.html.copyStyle=function(_27a,_27b){
if(!_27b.style.cssText){
_27a.setAttribute("style",_27b.getAttribute("style"));
}else{
_27a.style.cssText=_27b.style.cssText;
}
dojo.html.addClass(_27a,dojo.html.getClass(_27b));
};
dojo.html.getUnitValue=function(node,_27d,_27e){
var s=dojo.html.getComputedStyle(node,_27d);
if((!s)||((s=="auto")&&(_27e))){
return {value:0,units:"px"};
}
var _280=s.match(/(\-?[\d.]+)([a-z%]*)/i);
if(!_280){
return dojo.html.getUnitValue.bad;
}
return {value:Number(_280[1]),units:_280[2].toLowerCase()};
};
dojo.html.getUnitValue.bad={value:NaN,units:""};
if(dojo.render.html.ie){
dojo.html.toPixelValue=function(_281,_282){
if(!_282){
return 0;
}
if(_282.slice(-2)=="px"){
return parseFloat(_282);
}
var _283=0;
with(_281){
var _284=style.left;
var _285=runtimeStyle.left;
runtimeStyle.left=currentStyle.left;
try{
style.left=_282||0;
_283=style.pixelLeft;
style.left=_284;
runtimeStyle.left=_285;
}
catch(e){
}
}
return _283;
};
}else{
dojo.html.toPixelValue=function(_286,_287){
return (_287&&(_287.slice(-2)=="px")?parseFloat(_287):0);
};
}
dojo.html.getPixelValue=function(node,_289,_28a){
return dojo.html.toPixelValue(node,dojo.html.getComputedStyle(node,_289));
};
dojo.html.setPositivePixelValue=function(node,_28c,_28d){
if(isNaN(_28d)){
return false;
}
node.style[_28c]=Math.max(0,_28d)+"px";
return true;
};
dojo.html.styleSheet=null;
dojo.html.insertCssRule=function(_28e,_28f,_290){
if(!dojo.html.styleSheet){
if(document.createStyleSheet){
dojo.html.styleSheet=document.createStyleSheet();
}else{
if(document.styleSheets[0]){
dojo.html.styleSheet=document.styleSheets[0];
}else{
return null;
}
}
}
if(arguments.length<3){
if(dojo.html.styleSheet.cssRules){
_290=dojo.html.styleSheet.cssRules.length;
}else{
if(dojo.html.styleSheet.rules){
_290=dojo.html.styleSheet.rules.length;
}else{
return null;
}
}
}
if(dojo.html.styleSheet.insertRule){
var rule=_28e+" { "+_28f+" }";
return dojo.html.styleSheet.insertRule(rule,_290);
}else{
if(dojo.html.styleSheet.addRule){
return dojo.html.styleSheet.addRule(_28e,_28f,_290);
}else{
return null;
}
}
};
dojo.html.removeCssRule=function(_292){
if(!dojo.html.styleSheet){
dojo.debug("no stylesheet defined for removing rules");
return false;
}
if(dojo.render.html.ie){
if(!_292){
_292=dojo.html.styleSheet.rules.length;
dojo.html.styleSheet.removeRule(_292);
}
}else{
if(document.styleSheets[0]){
if(!_292){
_292=dojo.html.styleSheet.cssRules.length;
}
dojo.html.styleSheet.deleteRule(_292);
}
}
return true;
};
dojo.html._insertedCssFiles=[];
dojo.html.insertCssFile=function(URI,doc,_295,_296){
if(!URI){
return;
}
if(!doc){
doc=document;
}
var _297=dojo.hostenv.getText(URI,false,_296);
if(_297===null){
return;
}
_297=dojo.html.fixPathsInCssText(_297,URI);
if(_295){
var idx=-1,node,ent=dojo.html._insertedCssFiles;
for(var i=0;i<ent.length;i++){
if((ent[i].doc==doc)&&(ent[i].cssText==_297)){
idx=i;
node=ent[i].nodeRef;
break;
}
}
if(node){
var _29c=doc.getElementsByTagName("style");
for(var i=0;i<_29c.length;i++){
if(_29c[i]==node){
return;
}
}
dojo.html._insertedCssFiles.shift(idx,1);
}
}
var _29d=dojo.html.insertCssText(_297,doc);
dojo.html._insertedCssFiles.push({"doc":doc,"cssText":_297,"nodeRef":_29d});
if(_29d&&djConfig.isDebug){
_29d.setAttribute("dbgHref",URI);
}
return _29d;
};
dojo.html.insertCssText=function(_29e,doc,URI,_2a1){
if(!_29e){
return;
}
if(!doc){
doc=document;
}
if(URI){
_29e=dojo.html.fixPathsInCssText(_29e,URI);
}
var _2a2=doc.createElement("style");
_2a2.setAttribute("type","text/css");
if(_2a1){
_2a2.setAttribute("media",_2a1);
}
var head=doc.getElementsByTagName("head")[0];
if(!head){
dojo.debug("No head tag in document, aborting styles");
return;
}else{
head.appendChild(_2a2);
}
if(_2a2.styleSheet){
var _2a4=function(){
try{
_2a2.styleSheet.cssText=_29e;
}
catch(e){
dojo.debug(e);
}
};
if(_2a2.styleSheet.disabled){
setTimeout(_2a4,10);
}else{
_2a4();
}
}else{
var _2a5=doc.createTextNode(_29e);
_2a2.appendChild(_2a5);
}
return _2a2;
};
dojo.html.fixPathsInCssText=function(_2a6,URI){
if(!_2a6||!URI){
return;
}
var _2a8,str="",url="",_2ab="[\\t\\s\\w\\(\\)\\/\\.\\\\'\"-:#=&?~]+";
var _2ac=new RegExp("url\\(\\s*("+_2ab+")\\s*\\)");
var _2ad=/(file|https?|ftps?):\/\//;
regexTrim=new RegExp("^[\\s]*(['\"]?)("+_2ab+")\\1[\\s]*?$");
if(dojo.render.html.ie55||dojo.render.html.ie60){
var _2ae=new RegExp("AlphaImageLoader\\((.*)src=['\"]("+_2ab+")['\"]");
while(_2a8=_2ae.exec(_2a6)){
url=_2a8[2].replace(regexTrim,"$2");
if(!_2ad.exec(url)){
url=(new dojo.uri.Uri(URI,url).toString());
}
str+=_2a6.substring(0,_2a8.index)+"AlphaImageLoader("+_2a8[1]+"src='"+url+"'";
_2a6=_2a6.substr(_2a8.index+_2a8[0].length);
}
_2a6=str+_2a6;
str="";
}
while(_2a8=_2ac.exec(_2a6)){
url=_2a8[1].replace(regexTrim,"$2");
if(!_2ad.exec(url)){
url=(new dojo.uri.Uri(URI,url).toString());
}
str+=_2a6.substring(0,_2a8.index)+"url("+url+")";
_2a6=_2a6.substr(_2a8.index+_2a8[0].length);
}
return str+_2a6;
};
dojo.html.setActiveStyleSheet=function(_2af){
var i=0,a,els=dojo.doc().getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")){
a.disabled=true;
if(a.getAttribute("title")==_2af){
a.disabled=false;
}
}
}
};
dojo.html.getActiveStyleSheet=function(){
var i=0,a,els=dojo.doc().getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")&&!a.disabled){
return a.getAttribute("title");
}
}
return null;
};
dojo.html.getPreferredStyleSheet=function(){
var i=0,a,els=dojo.doc().getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("rel").indexOf("alt")==-1&&a.getAttribute("title")){
return a.getAttribute("title");
}
}
return null;
};
dojo.html.applyBrowserClass=function(node){
var drh=dojo.render.html;
var _2bb={dj_ie:drh.ie,dj_ie55:drh.ie55,dj_ie6:drh.ie60,dj_ie7:drh.ie70,dj_iequirks:drh.ie&&drh.quirks,dj_opera:drh.opera,dj_opera8:drh.opera&&(Math.floor(dojo.render.version)==8),dj_opera9:drh.opera&&(Math.floor(dojo.render.version)==9),dj_khtml:drh.khtml,dj_safari:drh.safari,dj_gecko:drh.mozilla};
for(var p in _2bb){
if(_2bb[p]){
dojo.html.addClass(node,p);
}
}
};
dojo.provide("com.infonow.ligeo.map.LigeoBalloon");
function LigeoBalloon(){
};
LigeoBalloon.myLigeoLocation=null;
LigeoBalloon.setLigeoLocation=function(_2bd){
LigeoBalloon.myLigeoLocation=_2bd;
};
LigeoBalloon.getLigeoLocation=function(){
return LigeoBalloon.myLigeoLocation;
};
LigeoBalloon.activeTabId=null;
LigeoBalloon.visiblePanel=null;
LigeoBalloon.myWidth=277;
LigeoBalloon.myHeight=218;
LigeoBalloon.myHtmlTopLevelBalloon="ligeo-balloon";
LigeoBalloon.myHtmlPanelsContainer="ligeo-balloonPanels";
LigeoBalloon.myHtmlTopLevelTabsContainer="ligeo-balloonTabs";
LigeoBalloon.myHtmlTabSetPrefix="ligeo-balloonTabSet-";
LigeoBalloon.myHtmlTabPrefix="ligeo-balloonTab-";
LigeoBalloon.myHtmlTabActive="ligeo-balloonTab-active";
LigeoBalloon.myHtmlTabContentActive="ligeo-balloonTabContent-active";
LigeoBalloon.myHtmlTabInactive="ligeo-balloonTab-inactive";
LigeoBalloon.myHtmlTabContentInactive="ligeo-balloonTabContent-inactive";
LigeoBalloon.myHtmlStyle="DEFAULT";
LigeoBalloon.showTabs=true;
LigeoBalloon.singletonBalloonHtmlElement=null;
LigeoBalloon.getHtmlTopLevelBalloon=function(){
return this.myHtmlTopLevelBalloon;
};
LigeoBalloon.setHtmlTopLevelBalloon=function(_2be){
this.myHtmlTopLevelBalloon=_2be;
};
LigeoBalloon.getHtmlPanelsContainer=function(){
return this.myHtmlPanelsContainer;
};
LigeoBalloon.setHtmlPanelsContainer=function(_2bf){
this.myHtmlPanelsContainer=_2bf;
};
LigeoBalloon.getHtmlTopLevelTabsContainer=function(){
return this.myHtmlTopLevelTabsContainer;
};
LigeoBalloon.setHtmlTopLevelTabsContainer=function(_2c0){
this.myHtmlTopLevelTabsContainer=_2c0;
};
LigeoBalloon.getHtmlTabSetPrefix=function(){
return this.myHtmlTabSetPrefix;
};
LigeoBalloon.setHtmlTabSetPrefix=function(_2c1){
this.myHtmlTabSetPrefix=_2c1;
};
LigeoBalloon.getHtmlTabPrefix=function(){
return this.myHtmlTabPrefix;
};
LigeoBalloon.setHtmlTabPrefix=function(_2c2){
this.myHtmlTabPrefix=_2c2;
};
LigeoBalloon.getHtmlTabActive=function(){
return this.myHtmlTabActive;
};
LigeoBalloon.setHtmlTabActive=function(_2c3){
this.myHtmlTabActive=_2c3;
};
LigeoBalloon.getHtmlTabContentActive=function(){
return this.myHtmlTabContentActive;
};
LigeoBalloon.setHtmlTabContentActive=function(_2c4){
this.myHtmlTabContentActive=_2c4;
};
LigeoBalloon.getHtmlTabInactive=function(){
return this.myHtmlTabInactive;
};
LigeoBalloon.setHtmlTabInactive=function(_2c5){
this.myHtmlTabInactive=_2c5;
};
LigeoBalloon.getHtmlTabContentInactive=function(){
return this.myHtmlTabContentInactive;
};
LigeoBalloon.setHtmlTabContentInactive=function(_2c6){
this.myHtmlTabContentInactive=_2c6;
};
LigeoBalloon.setWidth=function(_2c7){
this.myWidth=_2c7;
};
LigeoBalloon.setHeight=function(_2c8){
this.myHeight=_2c8;
};
LigeoBalloon.getHtmlStyle=function(){
return this.myHtmlStyle;
};
LigeoBalloon.setHtmlStyle=function(_2c9){
this.myHtmlStyle=_2c9;
};
LigeoBalloon.ShowTabs=function(){
return this.showTabs;
};
LigeoBalloon.setShowTabs=function(_2ca){
this.showTabs=_2ca;
};
LigeoBalloon.HTMLtemplateString="<div id=\"ligeo-balloon\">\n\t<img id=\"ligeo-balloonBox\" src=\"__image__server__URL__/spacer.gif\" />\n\t\n\t<div id=\"ligeo-balloonTabs\"></div>\n\t<div id=\"ligeo-balloonClose\" title=\"Close this balloon\" onclick=\"LigeoAPI.closeBalloon();\" onmousedown=\"this.style.backgroundPosition='-13px 0'\" onmouseup=\"this.style.backgroundPosition='0 0'\"></div>\n\t<div id=\"ligeo-balloonPanels\"></div>\n\t\n\t<!-- cache balloon images -->\n\t<img class=\"display-none\" src=\"__image__server__URL__/northWestBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/northBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/northEastBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/westBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/eastBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/southWestBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/southBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/southEastBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/closeBox.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabBack.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabLeft.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabRight.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabLeftOn.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabRightOn.gif\" />\n\t\n\t<img style=\"display:none\" src=\"__image__server__URL__/north_west.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/north.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/north_east.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/west.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/east.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/south_west.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/south.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/south_east.gif\" />\n\t<!--[if lte IE 6.5]><iframe src=\"__image__server__blank__html__src__/blank.html\"></iframe><![endif]-->\n</div>\n";
LigeoBalloon.renderBalloonHtmlElement=function(){
var _2cb=document.createElement("DIV");
LigeoBalloon.HTMLtemplateString=LigeoBalloon.HTMLtemplateString.replace(/__image__server__URL__/g,LigeoEnvironment.getImageServer()+"mapimages");
LigeoBalloon.HTMLtemplateString=LigeoBalloon.HTMLtemplateString.replace(/__image__server__blank__html__src__/g,LigeoEnvironment.getImageServer()+"ligeo_html");
_2cb.innerHTML=LigeoBalloon.HTMLtemplateString;
LigeoDOMUtils.renderHtmlElementIfNew(_2cb);
LigeoBalloon.singletonBalloonHtmlElement=document.getElementById(LigeoBalloon.getHtmlTopLevelBalloon());
};
dojo.addOnLoad(LigeoBalloon.renderBalloonHtmlElement);
LigeoBalloon.repositionBalloon=function(_2cc,_2cd,_2ce,_2cf,_2d0,_2d1){
if(LigeoVarUtils.isNotNullOrEmpty(LigeoBalloon.getHtmlTopLevelBalloon())){
LigeoBalloon.setWidth(LigeoVarUtils.getElementWidth(LigeoBalloon.getHtmlTopLevelBalloon()));
LigeoBalloon.setHeight(LigeoVarUtils.getElementHeight(LigeoBalloon.getHtmlTopLevelBalloon()));
}
var _2d2=_2d0-_2ce;
var _2d3=_2d1-_2cf;
var x=0;
var y=0;
var _2d6=(_2cd>=(2*(_2d3/3)));
var _2d7=(_2cd<=(_2d3/3));
if(_2d6){
var _2d8=(_2cc>=(2*(_2d2/3)));
var _2d9=(_2cc<=(_2d2/3));
if(_2d8){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-se";
x=_2ce+_2cc-LigeoBalloon.myWidth-10;
y=_2cf+_2cd-LigeoBalloon.myHeight-10;
}
if((!_2d9&&!_2d8)||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-s";
x=_2ce+_2cc-(LigeoBalloon.myWidth/2)-5;
y=_2cf+_2cd-LigeoBalloon.myHeight-12;
}
if(_2d9||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-sw";
x=_2ce+_2cc+1;
y=_2cf+_2cd-LigeoBalloon.myHeight-9;
}
}
if((!_2d7&&!_2d6)||y<0){
var _2da=(_2cc>=(_2d2/2));
var _2db=(_2cc<(_2d2/2));
if(_2da){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-e";
x=_2ce+_2cc-LigeoBalloon.myWidth-13;
y=_2cf+_2cd-(LigeoBalloon.myHeight/2)-5;
}
if(_2db||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-w";
x=_2ce+_2cc+4;
y=_2cf+_2cd-(LigeoBalloon.myHeight/2)-5;
}
}
if(_2d7||y<0){
var _2dc=(_2cc>=(2*(_2d2/3)));
var _2dd=(_2cc<=(_2d2/3));
if(_2dc){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-ne";
x=_2ce+_2cc-LigeoBalloon.myWidth-10;
y=_2cf+_2cd;
}
if((!_2dd&&!_2dc)||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-n";
x=_2ce+_2cc-(LigeoBalloon.myWidth/2)-5;
y=_2cf+_2cd+5;
}
if(_2dd||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-nw";
x=_2ce+_2cc;
y=_2cf+_2cd;
}
}
LigeoBalloon.setBalloonPosition(x,y);
};
LigeoBalloon.show=function(){
LigeoBalloon.showPanel();
if(LigeoBalloon.singletonBalloonHtmlElement){
LigeoBalloon.singletonBalloonHtmlElement.style.display="block";
}
};
LigeoBalloon.hide=function(){
if(LigeoBalloon.singletonBalloonHtmlElement){
LigeoBalloon.singletonBalloonHtmlElement.style.display="none";
}
};
LigeoBalloon.renderPanels=function(_2de){
var _2df=LigeoBalloon.getLigeoLocation().getAllInfoPanels();
var _2e0=document.getElementById(LigeoBalloon.getHtmlPanelsContainer());
for(var i in _2df){
if(!LigeoVarUtils.isFunction(_2df[i])){
_2df[i].renderHtmlElement(_2e0);
}
}
LigeoBalloon.renderTabs(_2de);
};
LigeoBalloon.renderTabs=function(_2e2){
var _2e3=LigeoBalloon.getLigeoLocation().getAllInfoPanels();
var _2e4="";
for(var i in _2e3){
if(!LigeoVarUtils.isFunction(_2e3[i])){
var _2e6=_2e3[i].getUniqueId();
_2e4+="<li onclick='LigeoAPI.showPanel(\""+_2e6+"\");'>";
_2e4+="<span id='"+LigeoBalloon.getHtmlTabActive()+"-"+_2e6+"'"+" class='"+LigeoBalloon.getHtmlTabActive()+"' style='display:none;'>"+"<span class='"+LigeoBalloon.getHtmlTabContentActive()+"'>"+_2e3[i].getLabel()+"</span>"+"</span>";
_2e4+="<span id='"+LigeoBalloon.getHtmlTabInactive()+"-"+_2e6+"'"+" class='"+LigeoBalloon.getHtmlTabInactive()+"'>"+"<a class='"+LigeoBalloon.getHtmlTabContentInactive()+"'"+" href='javascript:void(0)'>"+_2e3[i].getLabel()+"</a>"+"</span>";
_2e4+="</li>";
}
}
var _2e7=document.createElement("ul");
_2e7.style.display="none";
_2e7.innerHTML+=_2e4;
var _2e8=document.getElementById(LigeoBalloon.getHtmlTopLevelTabsContainer());
_2e8.appendChild(_2e7);
};
LigeoBalloon.showPanel=function(_2e9){
var _2ea=null;
if(LigeoVarUtils.isNotNull(_2e9)){
_2ea=LigeoBalloon.getLigeoLocation().getInfoPanel(_2e9);
}else{
_2ea=LigeoBalloon.getLigeoLocation().getDefaultInfoPanel();
}
if(LigeoVarUtils.isNotNull(_2ea)){
if(!_2ea.isRendered()){
LigeoBalloon.renderPanels(LigeoBalloon.getLigeoLocation());
}
if(LigeoVarUtils.isNotNull(LigeoBalloon.visiblePanel)){
LigeoBalloon.visiblePanel.hide();
}
_2ea.show();
LigeoBalloon.visiblePanel=_2ea;
LigeoBalloon.showTab(_2ea.getUniqueId());
}
};
LigeoBalloon.showTab=function(_2eb){
LigeoBalloon.toggleTab(LigeoBalloon.activeTabId);
LigeoBalloon.toggleTab(_2eb);
LigeoBalloon.activeTabId=_2eb;
};
LigeoBalloon.toggleTab=function(_2ec){
var _2ed=document.getElementById(LigeoBalloon.getHtmlTabActive()+"-"+_2ec);
var _2ee=document.getElementById(LigeoBalloon.getHtmlTabInactive()+"-"+_2ec);
if(LigeoVarUtils.isNotNull(_2ed)){
if(_2ed.style.display=="none"){
_2ed.style.display="block";
_2ee.style.display="none";
_2ee.parentNode.parentNode.style.display="block";
}else{
_2ed.style.display="none";
_2ee.style.display="block";
_2ee.parentNode.parentNode.style.display="none";
}
}
};
LigeoBalloon.setBalloonPosition=function(x,y){
LigeoBalloon.singletonBalloonHtmlElement.style.left=Math.round(x)+"px";
LigeoBalloon.singletonBalloonHtmlElement.style.top=Math.round(y)+"px";
};
LigeoBalloon.isVisible=function(){
return (LigeoBalloon.singletonBalloonHtmlElement.style.display!="none");
};
LigeoBalloon.createAndShowBalloon=function(_2f1,_2f2,_2f3,_2f4,_2f5,_2f6){
shouldShowBalloon=function(_2f7){
return ((LigeoVarUtils.isNotNull(_2f7))&&(_2f7.hasBalloonContent())&&((!LigeoBalloon.isVisible())||(LigeoBalloon.getLigeoLocation()!=_2f7)));
};
try{
if(shouldShowBalloon(_2f3)){
var _2f8=_2f1.LatLongToPixel(_2f2.GetIconAnchor());
var _2f9=dojo.html.getAbsolutePosition(_2f4,true);
var _2fa=_2f9.x;
var _2fb=_2f9.y;
var _2fc=_2f9.x+_2f5;
var _2fd=_2f9.y+_2f6;
LigeoBalloon.setLigeoLocation(_2f3);
LigeoBalloon.show();
LigeoBalloon.repositionBalloon(_2f8.x,_2f8.y,_2fa,_2fb,_2fc,_2fd);
}
}
catch(error){
LigeoLogger.error(error);
}
};
dojo.provide("com.infonow.ligeo.map.LigeoGridSearch");
function LigeoGridSearch(){
};
LigeoGridSearch.performGridSearch=function(_2fe){
gridSearchShouldBeConsidered=function(_2ff){
return (_2ff.getZoom()>=LigeoConfigurationAPI.myMapGridSearchZoomThreshold);
};
getSearchFormElement=function(){
return document.getElementById("searchForm");
};
getSearchResultsElement=function(){
return document.getElementById("resultsBlock");
};
isGridSearchingAvailable=function(_300,_301){
return (LigeoVarUtils.isNotNull(_300)&&(_301.isResultMap()||_301.isDefaultMap()));
};
composeGridSearchURL=function(_302,_303){
if(LigeoVarUtils.isNullOrEmpty(_302)){
return null;
}
var _304=_302.action;
var _305=_303.GetMapView();
var _306=_305.TopLeftLatLong;
if(LigeoFeaturesAPI.isExcludeNavAreaFromGrid()){
var _307=_303.LatLongToPixel(_305.TopLeftLatLong);
_307.x=(_307.x+35);
_307.y=(_307.y+35);
_306=_303.PixelToLatLong(_307);
}
_304+="?isMapGridSearch=true";
_304+="&mapGrid.topLatitude="+_306.Latitude;
_304+="&mapGrid.bottomLatitude="+_305.BottomRightLatLong.Latitude;
_304+="&mapGrid.leftLongitude="+_306.Longitude;
_304+="&mapGrid.rightLongitude="+_305.BottomRightLatLong.Longitude;
_304+="&mapGrid.centerLatitude="+_303.GetCenter().Latitude;
_304+="&mapGrid.centerLongitude="+_303.GetCenter().Longitude;
if(LigeoFeaturesAPI.myIncludeFormElementsInGridSearch){
var _308=_302.elements;
for(var i=0;i<_308.length;i++){
if(_308[i].type!="text"){
if((_308[i].type!="checkbox")&&(_308[i].type!="radio")){
_304+="&"+_308[i].name+"=";
_304+=_308[i].value;
}else{
if((_308[i].checked==true)&&(_308[i].type=="radio")){
_304+="&"+_308[i].name+"=";
_304+=_308[i].value;
}else{
if(_308[i].checked==true){
_304+="&"+_308[i].name+"=";
_304+=true;
}
}
}
}
}
}
return _304;
};
if(gridSearchShouldBeConsidered(_2fe)){
LigeoAPI.closeBalloon();
var _30a=getSearchFormElement();
if(isGridSearchingAvailable(_30a,_2fe)){
var _30b=composeGridSearchURL(_30a,_2fe.getVEMap());
LigeoAPI.ajaxHtmlMessages(_30b,getSearchResultsElement());
_2fe.setFrozen(true);
}
}
};
dojo.provide("com.infonow.ligeo.LigeoFeaturesAPI");
function LigeoFeaturesAPI(){
};
LigeoFeaturesAPI.myDisableMapPanningAndZooming=false;
LigeoFeaturesAPI.myDisableMapBalloons=false;
LigeoFeaturesAPI.myDisableRouteMapBalloons=false;
LigeoFeaturesAPI.myDisableRouteTablePushpins=false;
LigeoFeaturesAPI.myDisableZooming=false;
LigeoFeaturesAPI.myHideMapBalloonOnMouseout=false;
LigeoFeaturesAPI.myDisableMapNavigator=false;
LigeoFeaturesAPI.myDisableTermsAndConditions=false;
LigeoFeaturesAPI.alertOnErrors=false;
LigeoFeaturesAPI.swallowErrors=false;
LigeoFeaturesAPI.usingBoldRouteInstructions=false;
LigeoFeaturesAPI.myIncludeTotalDistanceInRoute=false;
LigeoFeaturesAPI.mapGridSearchingEnabled=false;
LigeoFeaturesAPI.isZoomFromDefaultToMapGridThresholdEnabled=false;
LigeoFeaturesAPI.isStateImageMapShowing=true;
LigeoFeaturesAPI.addCountryToFullAddress=false;
LigeoFeaturesAPI.show3dNavigationElement=false;
LigeoFeaturesAPI.showBirdsEyeNavigationElement=true;
LigeoFeaturesAPI.showTrafficNavigationElement=true;
LigeoFeaturesAPI.myMapDistanceUnits=null;
LigeoFeaturesAPI.myRouteDistanceUnits=null;
LigeoFeaturesAPI.myIncludeFormElementsInGridSearch=true;
LigeoFeaturesAPI.showRadiusSearchElement=false;
LigeoFeaturesAPI.openBaloonsOnClick=false;
LigeoFeaturesAPI.showResultsCenterLocation=true;
LigeoFeaturesAPI.showResultsLocations=true;
LigeoFeaturesAPI.showRouteCenterLocation=false;
LigeoFeaturesAPI.showRouteOtherLocations=false;
LigeoFeaturesAPI.showDrillCenterLocation=true;
LigeoFeaturesAPI.showDrillOtherLocations=true;
LigeoFeaturesAPI.excludeNavAreaFromGrid=true;
LigeoFeaturesAPI.showRouteHints=false;
LigeoFeaturesAPI.prohibitedRouteHintPhrases=null;
LigeoFeaturesAPI.setAddCountryToFullAddress=function(){
LigeoFeaturesAPI.addCountryToFullAddress=true;
};
LigeoFeaturesAPI.setIsStateImageMapShowing=function(_30c){
LigeoFeaturesAPI.isStateImageMapShowing=_30c;
};
LigeoFeaturesAPI.myEnableRouteMapCustomIcons=false;
LigeoFeaturesAPI.myEnableRouteMapCustomStartIcon=true;
LigeoFeaturesAPI.myEnableRouteMapCustomEndIcon=true;
LigeoFeaturesAPI.myEnableRouteMapCustomWaypointIcon=true;
LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress=true;
LigeoFeaturesAPI.isSingleLineAsync=false;
LigeoFeaturesAPI.setSingleLineAsync=function(_30d){
LigeoFeaturesAPI.isSingleLineAsync=_30d;
};
LigeoFeaturesAPI.setMapGridSearchingEnabled=function(_30e){
LigeoFeaturesAPI.mapGridSearchingEnabled=_30e;
};
LigeoFeaturesAPI.isMapGridSearchingEnabled=function(){
return LigeoFeaturesAPI.mapGridSearchingEnabled;
};
LigeoFeaturesAPI.disableMapPanningAndZooming=function(){
LigeoFeaturesAPI.myDisableMapPanningAndZooming=true;
};
LigeoFeaturesAPI.enableMapPanningAndZooming=function(){
LigeoFeaturesAPI.myDisableMapPanningAndZooming=false;
};
LigeoFeaturesAPI.isMapPanningAndZoomingDisabled=function(){
return LigeoFeaturesAPI.myDisableMapPanningAndZooming;
};
LigeoFeaturesAPI.disableRouteMapBalloons=function(){
LigeoFeaturesAPI.myDisableRouteMapBalloons=true;
};
LigeoFeaturesAPI.enableRouteMapBalloons=function(){
LigeoFeaturesAPI.myDisableRouteMapBalloons=false;
};
LigeoFeaturesAPI.areRouteMapBalloonsDisabled=function(){
return LigeoFeaturesAPI.myDisableRouteMapBalloons;
};
LigeoFeaturesAPI.disableMapBalloons=function(){
LigeoFeaturesAPI.myDisableMapBalloons=true;
};
LigeoFeaturesAPI.enableMapBalloons=function(){
LigeoFeaturesAPI.myDisableMapBalloons=false;
};
LigeoFeaturesAPI.areMapBalloonsDisabled=function(){
return LigeoFeaturesAPI.myDisableMapBalloons;
};
LigeoFeaturesAPI.disableRouteTablePushpins=function(){
LigeoFeaturesAPI.myDisableRouteTablePushpins=true;
};
LigeoFeaturesAPI.enableRouteTablePushpins=function(){
LigeoFeaturesAPI.myDisableRouteTablePushpins=false;
};
LigeoFeaturesAPI.areRouteTablePushpinsDisabled=function(){
return LigeoFeaturesAPI.myDisableRouteTablePushpins;
};
LigeoFeaturesAPI.disableHideMapBalloonOnMouseout=function(){
LigeoFeaturesAPI.myHideMapBalloonOnMouseout=false;
};
LigeoFeaturesAPI.enableHideMapBalloonOnMouseout=function(){
LigeoFeaturesAPI.myHideMapBalloonOnMouseout=true;
};
LigeoFeaturesAPI.isHideMapBalloonOnMouseout=function(){
return LigeoFeaturesAPI.myHideMapBalloonOnMouseout;
};
LigeoFeaturesAPI.isShowTrafficNavigationElement=function(){
return LigeoFeaturesAPI.showTrafficNavigationElement;
};
LigeoFeaturesAPI.setShowTrafficNavigationElement=function(_30f){
LigeoFeaturesAPI.showTrafficNavigationElement=_30f;
};
LigeoFeaturesAPI.isShowBirdsEyeNavigationElement=function(){
return LigeoFeaturesAPI.showBirdsEyeNavigationElement;
};
LigeoFeaturesAPI.setShowBirdsEyeNavigationElement=function(_310){
LigeoFeaturesAPI.showBirdsEyeNavigationElement=_310;
};
LigeoFeaturesAPI.isShow3dNavigationElement=function(){
return LigeoFeaturesAPI.show3dNavigationElement;
};
LigeoFeaturesAPI.setShow3dNavigationElement=function(_311){
LigeoFeaturesAPI.show3dNavigationElement=_311;
};
LigeoFeaturesAPI.isRadiusSearchElement=function(){
return LigeoFeaturesAPI.showRadiusSearchElement;
};
LigeoFeaturesAPI.setRadiusSearchElement=function(_312){
LigeoFeaturesAPI.showRadiusSearchElement=_312;
};
LigeoFeaturesAPI.disableMapNavigator=function(){
LigeoFeaturesAPI.myDisableMapNavigator=true;
};
LigeoFeaturesAPI.enableMapNavigator=function(){
LigeoFeaturesAPI.myDisableMapNavigator=false;
};
LigeoFeaturesAPI.isMapNavigatorDisabled=function(){
return LigeoFeaturesAPI.myDisableMapNavigator;
};
LigeoFeaturesAPI.disableTermsAndConditions=function(){
LigeoFeaturesAPI.myDisableTermsAndConditions=true;
};
LigeoFeaturesAPI.enableTermsAndConditions=function(){
LigeoFeaturesAPI.myDisableTermsAndConditions=false;
};
LigeoFeaturesAPI.isTermsAndConditionsDisabled=function(){
return LigeoFeaturesAPI.myDisableTermsAndConditions;
};
LigeoFeaturesAPI.getUsingBoldRouteInstructions=function(){
return this.usingBoldRouteInstructions;
};
LigeoFeaturesAPI.setUsingBoldRouteInstructions=function(_313){
this.usingBoldRouteInstructions=_313;
};
LigeoFeaturesAPI.closeOnMouseOutFromBalloonOnly=function(){
var _314=document.getElementById(LigeoBalloon.getHtmlTopLevelBalloon());
_314.onmouseout=function(){
LigeoVarUtils.HideOnMouseOut(this,event);
};
_314.onmouseover=function(){
LigeoVarUtils.ShowOnMouseOver(this);
};
};
LigeoFeaturesAPI.closeOnMouseOutFromBalloonOrNumberedIcon=function(){
LigeoFeaturesAPI.enableHideMapBalloonOnMouseout();
LigeoAPI.getLigeoMap().getVEMap().AttachEvent("onmouseout",LigeoAPI.closeBalloon);
LigeoFeaturesAPI.closeOnMouseOutFromBalloonOnly();
};
LigeoFeaturesAPI.setOpenBalloonsOnClick=function(_315){
LigeoFeaturesAPI.openBaloonsOnClick=_315;
};
LigeoFeaturesAPI.isOpenBaloonsOnClick=function(){
return LigeoFeaturesAPI.openBaloonsOnClick;
};
LigeoFeaturesAPI.setVEDistanceUnitsToMiles=function(){
LigeoFeaturesAPI.myMapDistanceUnits=VEDistanceUnit.Miles;
LigeoFeaturesAPI.myRouteDistanceUnits=VERouteDistanceUnit.Mile;
};
LigeoFeaturesAPI.setVEMapDistanceUnitsToKMs=function(){
LigeoFeaturesAPI.myMapDistanceUnits=VEDistanceUnit.Kilometers;
LigeoFeaturesAPI.myRouteDistanceUnits=VERouteDistanceUnit.Kilometer;
};
LigeoFeaturesAPI.getMapDistanceUnits=function(){
if(LigeoVarUtils.isNullOrEmpty(LigeoFeaturesAPI.myMapDistanceUnits)){
LigeoFeaturesAPI.myMapDistanceUnits=VEDistanceUnit.Miles;
}
return LigeoFeaturesAPI.myMapDistanceUnits;
};
LigeoFeaturesAPI.getRouteDistanceUnits=function(){
if(LigeoVarUtils.isNullOrEmpty(LigeoFeaturesAPI.myRouteDistanceUnits)){
LigeoFeaturesAPI.myRouteDistanceUnits=VERouteDistanceUnit.Mile;
}
return LigeoFeaturesAPI.myRouteDistanceUnits;
};
LigeoFeaturesAPI.hide3dNavigationElement=function(){
alert("LigeoFeaturesAPI.hide3dNavigationElement has been deprecated. Use LigeoFeaturesAPI.setShow3dNavigationElement instead.");
};
LigeoFeaturesAPI.hideBirdsEyeNavigationElement=function(){
alert("LigeoFeaturesAPI.hideBirdsEyeNavigationElement has been deprecated. Use LigeoFeaturesAPI.setShowBirdsEyeNavigationElement instead.");
};
LigeoFeaturesAPI.useBoldKeywordsForRoute=function(){
this.setUsingBoldRouteInstructions(true);
};
LigeoFeaturesAPI.includeTotalDistanceInRoute=function(){
LigeoFeaturesAPI.myIncludeTotalDistanceInRoute=true;
};
LigeoFeaturesAPI.removeTotalDistanceInRoute=function(){
LigeoFeaturesAPI.myIncludeTotalDistanceInRoute=false;
};
LigeoFeaturesAPI.setZoomFromDefaultToMapGridThresholdEnabled=function(_316){
LigeoFeaturesAPI.isZoomFromDefaultToMapGridThresholdEnabled=_316;
};
LigeoFeaturesAPI.setZoomFromDefaultToMapGridThresholdEnabled=function(_317){
LigeoFeaturesAPI.isZoomFromDefaultToMapGridThresholdEnabled=_317;
};
LigeoFeaturesAPI.setMapTermsParentDiv=function(_318){
LigeoAPI.getLigeoMap().myMapTermsParentDiv=_318;
};
LigeoFeaturesAPI.enableRouteMapCustomIcons=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomIcons=true;
};
LigeoFeaturesAPI.disableRouteMapCustomIcons=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomIcons=false;
};
LigeoFeaturesAPI.enableRouteMapCustomStartIcon=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomStartIcon=true;
};
LigeoFeaturesAPI.disableRouteMapCustomStartIcon=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomStartIcon=false;
};
LigeoFeaturesAPI.enableRouteMapCustomEndIcon=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomEndIcon=true;
};
LigeoFeaturesAPI.disableRouteMapCustomEndIcon=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomEndIcon=false;
};
LigeoFeaturesAPI.enableRouteMapCustomWaypointIcon=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomWaypointIcon=true;
};
LigeoFeaturesAPI.disableRouteMapCustomWaypointIcon=function(){
LigeoFeaturesAPI.myEnableRouteMapCustomWaypointIcon=false;
};
LigeoFeaturesAPI.displayParsedAddressInFullAddressField=function(){
LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress=true;
};
LigeoFeaturesAPI.doNotDisplayParsedAddressInFullAddressField=function(){
LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress=false;
};
LigeoFeaturesAPI.includeFormElementsInGridSearch=function(){
LigeoFeaturesAPI.myIncludeFormElementsInGridSearch=true;
};
LigeoFeaturesAPI.doNotIncludeFormElementsInGridSearch=function(){
LigeoFeaturesAPI.myIncludeFormElementsInGridSearch=false;
};
LigeoFeaturesAPI.useFuzzyGeocodingCandidates=true;
LigeoFeaturesAPI.setShowResultsCenterLocation=function(_319){
LigeoFeaturesAPI.showResultsCenterLocation=_319;
};
LigeoFeaturesAPI.isShowResultsCenterLocation=function(){
return LigeoFeaturesAPI.showResultsCenterLocation;
};
LigeoFeaturesAPI.setShowResultsLocations=function(_31a){
LigeoFeaturesAPI.showResultsLocations=_31a;
};
LigeoFeaturesAPI.isShowResultsLocations=function(){
return LigeoFeaturesAPI.showResultsLocations;
};
LigeoFeaturesAPI.setShowRouteCenterLocation=function(_31b){
LigeoFeaturesAPI.showRouteCenterLocation=_31b;
};
LigeoFeaturesAPI.isShowRouteCenterLocation=function(){
return LigeoFeaturesAPI.showRouteCenterLocation;
};
LigeoFeaturesAPI.setShowRouteOtherLocations=function(_31c){
LigeoFeaturesAPI.showRouteOtherLocations=_31c;
};
LigeoFeaturesAPI.isShowRouteOtherLocations=function(){
return LigeoFeaturesAPI.showRouteOtherLocations;
};
LigeoFeaturesAPI.setShowDrillCenterLocation=function(_31d){
LigeoFeaturesAPI.showDrillCenterLocation=_31d;
};
LigeoFeaturesAPI.isShowDrillCenterLocation=function(){
return LigeoFeaturesAPI.showDrillCenterLocation;
};
LigeoFeaturesAPI.setShowDrillOtherLocations=function(_31e){
LigeoFeaturesAPI.showDrillOtherLocations=_31e;
};
LigeoFeaturesAPI.isShowDrillOtherLocations=function(){
return LigeoFeaturesAPI.showDrillOtherLocations;
};
LigeoFeaturesAPI.setExcludeNavAreaFromGrid=function(_31f){
LigeoFeaturesAPI.excludeNavAreaFromGrid=_31f;
};
LigeoFeaturesAPI.isExcludeNavAreaFromGrid=function(){
return LigeoFeaturesAPI.excludeNavAreaFromGrid;
};
LigeoFeaturesAPI.setShowRouteHints=function(_320){
LigeoFeaturesAPI.showRouteHints=_320;
};
LigeoFeaturesAPI.isShowRouteHints=function(){
return LigeoFeaturesAPI.showRouteHints;
};
LigeoFeaturesAPI.isRouteHintDisplayAllowed=function(_321){
if(LigeoFeaturesAPI.prohibitedRouteHintPhrases){
for(index in LigeoFeaturesAPI.prohibitedRouteHintPhrases){
if(_321.indexOf(LigeoFeaturesAPI.prohibitedRouteHintPhrases[index])>=0){
return false;
}
}
}
return true;
};
LigeoFeaturesAPI.addProhibitedRouteHintPhrase=function(_322){
if(!_322){
return;
}
if(!LigeoFeaturesAPI.prohibitedRouteHintPhrases){
LigeoFeaturesAPI.prohibitedRouteHintPhrases=new Array();
}
LigeoFeaturesAPI.prohibitedRouteHintPhrases.push(_322.toUpperCase());
};
LigeoFeaturesAPI.setProhibitedRouteHintPhrases=function(_323){
LigeoFeaturesAPI.prohibitedRouteHintPhrases=null;
if(_323){
for(index in _323){
LigeoFeaturesAPI.addProhibitedRouteHintPhrase(_323[index]);
}
}
};
dojo.provide("com.infonow.ligeo.env.LigeoProperties");
function LigeoProperties(){
};
LigeoProperties.ligeo_route_startLabel="Start at ";
LigeoProperties.ligeo_route_endLabel="Arrive at ";
LigeoProperties.ligeo_route_totalDistanceLabel="";
dojo.provide("com.infonow.ligeo.route.LigeoRoute");
function LigeoRoute(_324,_325){
this.myRouteLocations=[];
this.myStartLocation=null;
this.myEndLocation=null;
this.myWaypointsHeader="Step";
this.myInstructionsHeader="Instruction";
this.myDistancesHeader="Distance";
this.myTimeHeader="Time";
this.myType=VERouteType.Shortest;
this.myRouteStartIcon="mapicon_start.gif";
this.myRouteEndIcon="mapicon_end.gif";
this.myNumberedIconPrefix="no{0}.gif";
this.clearRoutes=function(){
this.myRouteLocations=[];
this.myStartLocation=null;
this.myEndLocation=null;
};
};
LigeoRoute.prototype.getRouteLocations=function(){
return this.myRouteLocations;
};
LigeoRoute.prototype.getLocale=function(){
alert("LigeoRoute.prototype.getLocale has been deprecated. Use LigeoEnvironment.getMapLocale instead.");
};
LigeoRoute.prototype.setLocale=function(_326){
alert("LigeoRoute.prototype.setLocale has been deprecated. Use LigeoEnvironment.setMapLocale instead.");
};
LigeoRoute.prototype.getStartLocation=function(){
return this.myStartLocation;
};
LigeoRoute.prototype.setStartLocation=function(_327){
this.myStartLocation=_327;
};
LigeoRoute.prototype.getEndLocation=function(){
return this.myEndLocation;
};
LigeoRoute.prototype.setEndLocation=function(_328){
this.myEndLocation=_328;
};
LigeoRoute.prototype.getWaypointsHeader=function(){
return this.myWaypointsHeader;
};
LigeoRoute.prototype.setWaypointsHeader=function(_329){
this.myWaypointsHeader=_329;
};
LigeoRoute.prototype.getInstructionsHeader=function(){
return this.myInstructionsHeader;
};
LigeoRoute.prototype.setInstructionsHeader=function(_32a){
this.myInstructionsHeader=_32a;
};
LigeoRoute.prototype.getDistancesHeader=function(){
return this.myDistancesHeader;
};
LigeoRoute.prototype.setDistancesHeader=function(_32b){
this.myDistancesHeader=_32b;
};
LigeoRoute.prototype.getRouteStartIcon=function(){
return this.myRouteStartIcon;
};
LigeoRoute.prototype.setRouteStartIcon=function(_32c){
this.myRouteStartIcon=_32c;
};
LigeoRoute.prototype.getRouteEndIcon=function(){
return this.myRouteEndIcon;
};
LigeoRoute.prototype.setRouteEndIcon=function(_32d){
this.myRouteEndIcon=_32d;
};
LigeoRoute.prototype.getNumberedIconPrefix=function(){
return this.myNumberedIconPrefix;
};
LigeoRoute.prototype.setNumberedIconPrefix=function(_32e){
this.myNumberedIconPrefix=_32e;
};
LigeoRoute.prototype.composeRoutingLocations=function(){
var _32f=this.getRouteLocations();
var _330=new Array();
for(var _331=0;_331<_32f.length;_331++){
if(!LigeoVarUtils.isNull(_32f[_331])){
var _332=_32f[_331];
if(isNaN(_332.getLatitude())||isNaN(_332.getLongitude())){
_330.push(_332.getAddressString());
}else{
_330.push(_332.getVELatLong());
}
}
}
return _330;
};
LigeoRoute.prototype.mustUseMapPointWebService=function(){
var _333=LigeoEnvironment.getMapLocale();
return ((_333=="en-AU")||(_333=="en-CA")||(_333=="en-IN")||(_333=="en-GB")||(_333=="es-MX")||(_333=="es-US"));
};
LigeoRoute.prototype.createVERouteOptions=function(_334){
var that=this;
renderRouteCallback=function(_336){
if(LigeoFeaturesAPI.myEnableRouteMapCustomIcons){
that.renderCustomMapIcons(_334.getVEMap());
}
_334.resetOriginalZoomAndCenterToVEMapConfiguration();
that.renderRouteTable(_336);
};
var _337=new VERouteOptions;
_337.RouteCallback=renderRouteCallback;
_337.DistanceUnit=LigeoFeaturesAPI.getRouteDistanceUnits();
_337.ShowDisambiguation=false;
_337.ShowErrorMessages=false;
_337.UseMWS=this.mustUseMapPointWebService();
_337.RouteMode=VERouteMode.Driving;
_337.UseTraffic=true;
_337.SetBestMapView=true;
return _337;
};
LigeoRoute.prototype.renderRoute=function(_338){
var _339=this.composeRoutingLocations();
if(LigeoVarUtils.isNotNullOrEmpty(_339)&&(_339.length>0)){
_338.getVEMap().GetDirections(_339,this.createVERouteOptions(_338));
}
};
LigeoRoute.prototype.renderCustomMapIcons=function(_33a){
var _33b=this.StartLocation;
var _33c=new Array();
var _33d=new Array();
for(var i=0;i<_33a._dm.veroutecache.length;i++){
var _33f=new VEShape(VEShapeType.Pushpin,_33a._dm.veroutecache[i].LatLong);
if((i==0)&&LigeoFeaturesAPI.myEnableRouteMapCustomStartIcon){
_33f.SetCustomIcon(LigeoEnvironment.getImagePath(this.getRouteStartIcon()));
}else{
if((i==_33a._dm.veroutecache.length-1)&&LigeoFeaturesAPI.myEnableRouteMapCustomEndIcon){
_33f.SetCustomIcon(LigeoEnvironment.getImagePath(this.getRouteEndIcon()));
}else{
if(LigeoFeaturesAPI.myEnableRouteMapCustomWaypointIcon){
_33f.SetCustomIcon(LigeoEnvironment.getImagePath(this.getNumberedIconPrefix().replace("{0}",(i))));
}
}
}
_33c.push(_33f);
}
for(i=0;i<_33c.length;i++){
_33a.AddShape(_33c[i]);
}
};
LigeoRoute.translateRouteDistanceUnit=function(){
var _340="";
switch(LigeoFeaturesAPI.getRouteDistanceUnits()){
case "Mile":
_340="mi";
break;
case "Kilometer":
_340="km";
break;
default:
_340="mi";
}
return _340;
};
LigeoRoute.prototype.renderRouteTable=function(_341){
var _342="";
var _343=_341.RouteLegs[0].Itinerary.Items.length;
var _344=_341.RouteLegs[0].Itinerary.Items;
var _345=LigeoRoute.translateRouteDistanceUnit();
var _346=this.createDistanceText(this.formatDist(_341.Distance),_345);
var _347=this.formatTime(_341.Time);
var _348;
var _349=document.getElementById("ligeo-route");
if(LigeoVarUtils.isNotNull(_349)){
var _34a=this.getRouteLocations();
if(_34a.length!=2){
return;
}
_348="";
if(!LigeoFeaturesAPI.areRouteTablePushpinsDisabled()){
_348=this.getPushpin(this.getRouteStartIcon());
_348=_348.replace("/>","alt='Location Start Point' title='Location Start Point' />");
}
if(!LigeoVarUtils.isNullOrEmpty(LigeoAddressParser.getParsedAddress())){
_342+=this.renderInstruction(0,_343,_348,LigeoEnvironment.translateLocaleText("first")+" "+LigeoAddressParser.getParsedAddress(),"","",null);
}else{
if(LigeoVarUtils.isNullOrEmpty(_34a[0].Address)&&_34a[0].getAddressString()!=_34a[0].getCountryIso2()){
_342+=this.renderInstruction(0,_343,_348,LigeoEnvironment.translateLocaleText("first")+" "+_34a[0].getAddressString(),"","",null);
}else{
_342+=this.renderInstruction(0,_343,_348,LigeoEnvironment.translateLocaleText("first")+" "+LigeoEnvironment.translateLocaleText("yourSelectedLocation"),"",null);
}
}
_342+=this.renderInstruction(0,_343,"",_344[0].Text,this.createDistanceText(this.formatDist(_344[0].Distance),_345),this.formatTime(_344[0].Time),_344[0].Hints);
for(var i=1;i<_343-1;i++){
if(LigeoFeaturesAPI.areRouteTablePushpinsDisabled()){
_348=i+".";
}else{
_348=this.getPushpin(this.getNumberedIconPrefix().replace("{0}",i));
_348=_348.replace("/>","alt='Instruction"+(i)+"' title='Instruction "+(i)+"' />");
}
_342+=this.renderInstruction(i,_343,_348,_344[i].Text,this.createDistanceText(this.formatDist(_344[i].Distance),_345),this.formatTime(_344[i].Time),_344[i].Hints);
}
var _34c="";
var _34d="";
if(LigeoFeaturesAPI.myIncludeTotalDistanceInRoute){
_34c=_346;
_34d=_347;
}
_348="";
if(!LigeoFeaturesAPI.areRouteTablePushpinsDisabled()){
_348=this.getPushpin(this.getRouteEndIcon());
_348=_348.replace("/>","alt='Location End Point' title='Location End Point' />");
}
var _34e="";
if(LigeoVarUtils.isNullOrEmpty(_34a[1].Address)){
_34e=LigeoEnvironment.translateLocaleText("last")+" "+_34a[1].getAddressString();
}else{
_34e=LigeoEnvironment.translateLocaleText("last");
}
_342+=this.renderInstruction(_343,_343,_348,_34e,_34c,_34d,_344[i].Hints);
routeTable="<table id=\"ligeo-routeTable\">";
routeTable+=this.renderHeaderFooter();
routeTable+="<tbody>"+_342+"</tbody>";
routeTable+="</table>";
_349.innerHTML=routeTable;
}
var _34f=document.getElementById("ligeo-route-totalDistance");
if(LigeoVarUtils.isNotNull(_34f)){
_34f.innerHTML=_346;
}
var _350=document.getElementById("ligeo-route-totalTime");
if(LigeoVarUtils.isNotNull(_350)){
_350.innerHTML=_347;
}
};
LigeoRoute.prototype.getPushpin=function(_351){
return "<img src='"+LigeoEnvironment.getImagePath(_351)+"'/>";
};
LigeoRoute.prototype.createDistanceText=function(_352,_353){
var _354="";
if(LigeoVarUtils.isNotNullOrEmpty(_352)){
_354=_352+" "+_353;
}
return _354;
};
LigeoRoute.prototype.renderHeaderFooter=function(){
var _355="";
_355+="<thead>";
_355+="<tr id=\"ligeo-row-header\">";
_355+="<th class=\"ligeo-waypoint\">";
_355+="<span>"+this.myWaypointsHeader+"</span>";
_355+="</th>";
_355+="<th class=\"ligeo-instruction\">";
_355+="<span>"+this.myInstructionsHeader+"</span>";
_355+="</th>";
_355+="<th class=\"ligeo-distance\">";
_355+="<span>"+this.myDistancesHeader+"</span>";
_355+="</th>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<th class=\"ligeo-time\">";
_355+="<span>"+this.myTimeHeader+"</span>";
_355+="</th>";
}
_355+="</tr>";
_355+="</thead>";
if(LigeoLayoutAPI.getRouteTableFooterOption()!="NONE"){
_355+="<tfoot>";
}
switch(LigeoLayoutAPI.getRouteTableFooterOption()){
case "VIEW_2_ROW":
_355+="<tr id=\"ligeo-foot-2row1\">";
_355+="<td class=\"ligeo-waypoint\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-totalDistance\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+"</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-distance\">";
_355+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-time\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<tr id=\"ligeo-foot-2row2\">";
_355+="<td class=\"ligeo-waypoint\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-totalTime\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalTime")+"</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-time\">";
_355+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-distance\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
_355+="</tr>";
}
break;
case "VIEW_2_ROW_W_TIME":
_355+="<tr id=\"ligeo-foot-2row1\">";
_355+="<td class=\"ligeo-waypoint\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-totalDistance\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+"</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-distance\">";
_355+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-time\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
_355+="<tr id=\"ligeo-foot-2row2\">";
_355+="<td class=\"ligeo-waypoint\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-totalTime\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalTime")+"</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-time\">";
_355+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-distance\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
break;
case "VIEW_3_COL":
_355+="<tr id=\"ligeo-foot-3col\">";
_355+="<td class=\"ligeo-waypoint\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-total\">";
_355+="<span>Total</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-distance\">";
_355+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-time\">";
_355+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
break;
case "VIEW_3_COL_W_TIME":
_355+="<tr id=\"ligeo-foot-3col\">";
_355+="<td class=\"ligeo-total\">";
_355+="<span>Total</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-time\">";
_355+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-distance\">";
_355+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-time\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
break;
case "VIEW_4_COL":
_355+="<tr id=\"ligeo-foot-4col\">";
_355+="<td class=\"ligeo-totalDistance\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+":</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-distance\">";
_355+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-totalTime\">";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<span class=\"ligeo-time\">"+LigeoEnvironment.translateLocaleText("totalTime")+":</span>&nbsp;";
}
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-time\">";
_355+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
break;
case "VIEW_1_ROW_W_TIME":
_355+="<tr id=\"ligeo-foot-1row\">";
_355+="<td class=\"ligeo-totalDistance\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+":</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-totalTime\">";
_355+="<span>"+LigeoEnvironment.translateLocaleText("totalTime")+":</span>&nbsp;";
_355+="</td>";
_355+="<td class=\"ligeo-total\">";
_355+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_355+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_355+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_355+="<td class=\"ligeo-time\">";
_355+="<span>&nbsp;</span>&nbsp;";
_355+="</td>";
}
_355+="</tr>";
break;
}
if(LigeoLayoutAPI.getRouteTableFooterOption()!="NONE"){
_355+="</tfoot>";
}
return _355;
};
LigeoRoute.prototype.getRouteHintText=function(_356){
if(_356==null){
return null;
}
var _357=null;
for(var _358=0;_358<_356.length;_358++){
var _359=_356[_358].Text;
if(!LigeoFeaturesAPI.isRouteHintDisplayAllowed(_359)){
continue;
}
if(_357==null){
_357=_359;
}else{
_357+="<br/>"+_359;
}
}
return _357;
};
LigeoRoute.prototype.renderInstruction=function(_35a,_35b,_35c,_35d,_35e,_35f,_360){
var _361="";
if(LigeoFeaturesAPI.getUsingBoldRouteInstructions()){
_35d=this.convertToBoldKeywords(_35d);
}
if(LigeoVarUtils.isNotNullOrEmpty(this.rowOddEven)){
this.rowOddEven=(this.rowOddEven.indexOf("ligeo-odd")>=0)?"ligeo-even":"ligeo-odd";
}else{
this.rowOddEven="ligeo-odd";
}
if(_35a==0){
this.rowOddEven+=" first";
}else{
if(_35a==_35b){
this.rowOddEven+=" last";
}
}
_361+="<tr id=\"ligeo-row"+_35a+"\" class=\""+this.rowOddEven+"\">";
_361+="<th class=\"ligeo-waypoint\">";
_361+="<span>"+_35c+"</span><br/>";
_361+="</th>";
_361+="<td class=\"ligeo-instruction\">";
_361+="<span>"+_35d+"</span>";
if(LigeoFeaturesAPI.isShowRouteHints()){
var _362=this.getRouteHintText(_360);
if(_362!=null){
_361+="<span class=\"ligeo-route-hint\">"+_362+"</span>";
}
}
_361+="</td>";
_361+="<td class=\"ligeo-distance\">";
_361+="<span>"+_35e+"</span><br/>";
_361+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_361+="<td class=\"ligeo-time\">";
_361+="<span>"+_35f+"</span><br/>";
_361+="</td>";
}
_361+="</tr>";
return _361;
};
LigeoRoute.prototype.convertToBoldKeywords=function(_363){
var _364="";
_364="<b>"+_363.replace(/\b(Take|Turn|Depart|Bear|onto|for|and|then|Keep|follow|signs|toward|At|exit|ramp|stay|on|to|Road name changes|Arrive|Start)\b/gi,"</b>$1<b>")+"</b><br/>";
return _364;
};
LigeoRoute.prototype.formatTime=function(time){
var min=parseFloat(time)/60;
min=Math.floor(min);
var sec=parseFloat(time)-(min*60);
var _368="";
if(min>0){
_368=min+"min ";
}
_368+=sec+"sec";
return _368;
};
LigeoRoute.prototype.formatDist=function(dist){
dist=parseFloat(dist*10);
dist=Math.round(dist)/10;
return dist;
};
LigeoRoute.prototype.addRoute=function(_36a,_36b){
var _36c=this.getRouteLocations();
_36c.push(_36a);
_36c.push(_36b);
};
dojo.provide("com.infonow.ligeo.util.LigeoVEAdapter");
function LigeoVEAdapter(){
};
LigeoVEAdapter.adaptToBrowser=function(){
LigeoVEAdapter.adaptToIE6();
};
LigeoVEAdapter.adaptDrawingLibrary=function(){
var _36d;
Msn.Drawing.Graphic.CreateGraphic=function(f,b){
if(document.all){
return new Msn.Drawing.VMLGraphic(f,b);
}else{
_36d=new RegExp("Firefox/(.*)").exec(navigator.userAgent);
if(_36d[1]&&parseFloat(_36d[1])>=1.5){
return new Msn.Drawing.SVGGraphic(f,b);
}
throw new Msn.Drawing.Exception(L_GraphicsInitError_Text);
}
};
};
LigeoVEAdapter.adaptToIE6=function(){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(error){
}
};
dojo.provide("com.infonow.ligeo.util.log.LigeoLogger");
function LigeoLogger(){
};
LigeoLogger.isDebugEnabled=function(){
return (window.location.href.match(/.*showlog=on.*/i)!=null);
};
LigeoLogger.debug=function(_370){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_370);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.debug(_370);
}
};
LigeoLogger.info=function(_371){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_371);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.info(_371);
}
};
LigeoLogger.warn=function(_372){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_372);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.warn(_372);
}
};
LigeoLogger.error=function(_373){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_373);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.error(_373);
}
};
LigeoLogger.isFirebugConsoleAvailable=function(){
return (typeof console=="object"&&typeof console.error=="function");
};
dojo.provide("dojo.io.cookie");
dojo.io.cookie.setCookie=function(name,_375,days,path,_378,_379){
path="/";
var _37a=-1;
if((typeof days=="number")&&(days>=0)){
var d=new Date();
d.setTime(d.getTime()+(days*24*60*60*1000));
_37a=d.toGMTString();
}
_375=escape(_375);
document.cookie=name+"="+_375+";"+(_37a!=-1?" expires="+_37a+";":"")+(path?"path="+path:"")+(_378?"; domain="+_378:"")+(_379?"; secure":"");
};
dojo.io.cookie.set=dojo.io.cookie.setCookie;
dojo.io.cookie.getCookie=function(name){
var idx=document.cookie.lastIndexOf(name+"=");
if(idx==-1){
return null;
}
var _37e=document.cookie.substring(idx+name.length+1);
var end=_37e.indexOf(";");
if(end==-1){
end=_37e.length;
}
_37e=_37e.substring(0,end);
_37e=unescape(_37e);
return _37e;
};
dojo.io.cookie.get=dojo.io.cookie.getCookie;
dojo.io.cookie.deleteCookie=function(name){
dojo.io.cookie.setCookie(name,"-",0);
};
dojo.io.cookie.setObjectCookie=function(name,obj,days,path,_385,_386,_387){
if(arguments.length==5){
_387=_385;
_385=null;
_386=null;
}
var _388=[],_389,_38a="";
if(!_387){
_389=dojo.io.cookie.getObjectCookie(name);
}
if(days>=0){
if(!_389){
_389={};
}
for(var prop in obj){
if(obj[prop]==null){
delete _389[prop];
}else{
if((typeof obj[prop]=="string")||(typeof obj[prop]=="number")){
_389[prop]=obj[prop];
}
}
}
prop=null;
for(var prop in _389){
_388.push(escape(prop)+"="+escape(_389[prop]));
}
_38a=_388.join("&");
}
dojo.io.cookie.setCookie(name,_38a,days,path,_385,_386);
};
dojo.io.cookie.getObjectCookie=function(name){
var _38d=null,_38e=dojo.io.cookie.getCookie(name);
if(_38e){
_38d={};
var _38f=_38e.split("&");
for(var i=0;i<_38f.length;i++){
var pair=_38f[i].split("=");
var _392=pair[1];
if(isNaN(_392)){
_392=unescape(pair[1]);
}
_38d[unescape(pair[0])]=_392;
}
}
return _38d;
};
dojo.io.cookie.isSupported=function(){
if(typeof navigator.cookieEnabled!="boolean"){
dojo.io.cookie.setCookie("__TestingYourBrowserForCookieSupport__","CookiesAllowed",90,null);
var _393=dojo.io.cookie.getCookie("__TestingYourBrowserForCookieSupport__");
navigator.cookieEnabled=(_393=="CookiesAllowed");
if(navigator.cookieEnabled){
this.deleteCookie("__TestingYourBrowserForCookieSupport__");
}
}
return navigator.cookieEnabled;
};
if(!dojo.io.cookies){
dojo.io.cookies=dojo.io.cookie;
}
dojo.provide("dojo.html.display");
dojo.html._toggle=function(node,_395,_396){
node=dojo.byId(node);
_396(node,!_395(node));
return _395(node);
};
dojo.html.show=function(node){
node=dojo.byId(node);
if(dojo.html.getStyleProperty(node,"display")=="none"){
dojo.html.setStyle(node,"display",(node.dojoDisplayCache||""));
node.dojoDisplayCache=undefined;
}
};
dojo.html.hide=function(node){
node=dojo.byId(node);
if(typeof node["dojoDisplayCache"]=="undefined"){
var d=dojo.html.getStyleProperty(node,"display");
if(d!="none"){
node.dojoDisplayCache=d;
}
}
dojo.html.setStyle(node,"display","none");
};
dojo.html.setShowing=function(node,_39b){
dojo.html[(_39b?"show":"hide")](node);
};
dojo.html.isShowing=function(node){
return (dojo.html.getStyleProperty(node,"display")!="none");
};
dojo.html.toggleShowing=function(node){
return dojo.html._toggle(node,dojo.html.isShowing,dojo.html.setShowing);
};
dojo.html.displayMap={tr:"",td:"",th:"",img:"inline",span:"inline",input:"inline",button:"inline"};
dojo.html.suggestDisplayByTagName=function(node){
node=dojo.byId(node);
if(node&&node.tagName){
var tag=node.tagName.toLowerCase();
return (tag in dojo.html.displayMap?dojo.html.displayMap[tag]:"block");
}
};
dojo.html.setDisplay=function(node,_3a1){
dojo.html.setStyle(node,"display",((_3a1 instanceof String||typeof _3a1=="string")?_3a1:(_3a1?dojo.html.suggestDisplayByTagName(node):"none")));
};
dojo.html.isDisplayed=function(node){
return (dojo.html.getComputedStyle(node,"display")!="none");
};
dojo.html.toggleDisplay=function(node){
return dojo.html._toggle(node,dojo.html.isDisplayed,dojo.html.setDisplay);
};
dojo.html.setVisibility=function(node,_3a5){
dojo.html.setStyle(node,"visibility",((_3a5 instanceof String||typeof _3a5=="string")?_3a5:(_3a5?"visible":"hidden")));
};
dojo.html.isVisible=function(node){
return (dojo.html.getComputedStyle(node,"visibility")!="hidden");
};
dojo.html.toggleVisibility=function(node){
return dojo.html._toggle(node,dojo.html.isVisible,dojo.html.setVisibility);
};
dojo.html.setOpacity=function(node,_3a9,_3aa){
node=dojo.byId(node);
var h=dojo.render.html;
if(!_3aa){
if(_3a9>=1){
if(h.ie){
dojo.html.clearOpacity(node);
return;
}else{
_3a9=0.999999;
}
}else{
if(_3a9<0){
_3a9=0;
}
}
}
if(h.ie){
if(node.nodeName.toLowerCase()=="tr"){
var tds=node.getElementsByTagName("td");
for(var x=0;x<tds.length;x++){
tds[x].style.filter="Alpha(Opacity="+_3a9*100+")";
}
}
node.style.filter="Alpha(Opacity="+_3a9*100+")";
}else{
if(h.moz){
node.style.opacity=_3a9;
node.style.MozOpacity=_3a9;
}else{
if(h.safari){
node.style.opacity=_3a9;
node.style.KhtmlOpacity=_3a9;
}else{
node.style.opacity=_3a9;
}
}
}
};
dojo.html.clearOpacity=function(node){
node=dojo.byId(node);
var ns=node.style;
var h=dojo.render.html;
if(h.ie){
try{
if(node.filters&&node.filters.alpha){
ns.filter="";
}
}
catch(e){
}
}else{
if(h.moz){
ns.opacity=1;
ns.MozOpacity=1;
}else{
if(h.safari){
ns.opacity=1;
ns.KhtmlOpacity=1;
}else{
ns.opacity=1;
}
}
}
};
dojo.html.getOpacity=function(node){
node=dojo.byId(node);
var h=dojo.render.html;
if(h.ie){
var opac=(node.filters&&node.filters.alpha&&typeof node.filters.alpha.opacity=="number"?node.filters.alpha.opacity:100)/100;
}else{
var opac=node.style.opacity||node.style.MozOpacity||node.style.KhtmlOpacity||1;
}
return opac>=0.999999?1:Number(opac);
};
dojo.provide("dojo.html.layout");
dojo.html.sumAncestorProperties=function(node,prop){
node=dojo.byId(node);
if(!node){
return 0;
}
var _3b6=0;
while(node){
if(dojo.html.getComputedStyle(node,"position")=="fixed"){
return 0;
}
var val=node[prop];
if(val){
_3b6+=val-0;
if(node==dojo.body()){
break;
}
}
node=node.parentNode;
}
return _3b6;
};
dojo.html.setStyleAttributes=function(node,_3b9){
node=dojo.byId(node);
var _3ba=_3b9.replace(/(;)?\s*$/,"").split(";");
for(var i=0;i<_3ba.length;i++){
var _3bc=_3ba[i].split(":");
var name=_3bc[0].replace(/\s*$/,"").replace(/^\s*/,"").toLowerCase();
var _3be=_3bc[1].replace(/\s*$/,"").replace(/^\s*/,"");
switch(name){
case "opacity":
dojo.html.setOpacity(node,_3be);
break;
case "content-height":
dojo.html.setContentBox(node,{height:_3be});
break;
case "content-width":
dojo.html.setContentBox(node,{width:_3be});
break;
case "outer-height":
dojo.html.setMarginBox(node,{height:_3be});
break;
case "outer-width":
dojo.html.setMarginBox(node,{width:_3be});
break;
default:
node.style[dojo.html.toCamelCase(name)]=_3be;
}
}
};
dojo.html.boxSizing={MARGIN_BOX:"margin-box",BORDER_BOX:"border-box",PADDING_BOX:"padding-box",CONTENT_BOX:"content-box"};
dojo.html.getAbsolutePosition=dojo.html.abs=function(node,_3c0,_3c1){
node=dojo.byId(node,node.ownerDocument);
var ret={x:0,y:0};
var bs=dojo.html.boxSizing;
if(!_3c1){
_3c1=bs.CONTENT_BOX;
}
var _3c4=2;
var _3c5;
switch(_3c1){
case bs.MARGIN_BOX:
_3c5=3;
break;
case bs.BORDER_BOX:
_3c5=2;
break;
case bs.PADDING_BOX:
default:
_3c5=1;
break;
case bs.CONTENT_BOX:
_3c5=0;
break;
}
var h=dojo.render.html;
var db=document["body"]||document["documentElement"];
if(h.ie){
with(node.getBoundingClientRect()){
ret.x=left-2;
ret.y=top-2;
}
}else{
if(document.getBoxObjectFor){
_3c4=1;
try{
var bo=document.getBoxObjectFor(node);
ret.x=bo.x-dojo.html.sumAncestorProperties(node,"scrollLeft");
ret.y=bo.y-dojo.html.sumAncestorProperties(node,"scrollTop");
}
catch(e){
}
}else{
if(node["offsetParent"]){
var _3c9;
if((h.safari)&&(node.style.getPropertyValue("position")=="absolute")&&(node.parentNode==db)){
_3c9=db;
}else{
_3c9=db.parentNode;
}
if(node.parentNode!=db){
var nd=node;
if(dojo.render.html.opera){
nd=db;
}
ret.x-=dojo.html.sumAncestorProperties(nd,"scrollLeft");
ret.y-=dojo.html.sumAncestorProperties(nd,"scrollTop");
}
var _3cb=node;
do{
var n=_3cb["offsetLeft"];
if(!h.opera||n>0){
ret.x+=isNaN(n)?0:n;
}
var m=_3cb["offsetTop"];
ret.y+=isNaN(m)?0:m;
_3cb=_3cb.offsetParent;
}while((_3cb!=_3c9)&&(_3cb!=null));
}else{
if(node["x"]&&node["y"]){
ret.x+=isNaN(node.x)?0:node.x;
ret.y+=isNaN(node.y)?0:node.y;
}
}
}
}
if(_3c0){
var _3ce=dojo.html.getScroll();
ret.y+=_3ce.top;
ret.x+=_3ce.left;
}
var _3cf=[dojo.html.getPaddingExtent,dojo.html.getBorderExtent,dojo.html.getMarginExtent];
if(_3c4>_3c5){
for(var i=_3c5;i<_3c4;++i){
ret.y+=_3cf[i](node,"top");
ret.x+=_3cf[i](node,"left");
}
}else{
if(_3c4<_3c5){
for(var i=_3c5;i>_3c4;--i){
ret.y-=_3cf[i-1](node,"top");
ret.x-=_3cf[i-1](node,"left");
}
}
}
ret.top=ret.y;
ret.left=ret.x;
return ret;
};
dojo.html.isPositionAbsolute=function(node){
return (dojo.html.getComputedStyle(node,"position")=="absolute");
};
dojo.html._sumPixelValues=function(node,_3d3,_3d4){
var _3d5=0;
for(var x=0;x<_3d3.length;x++){
_3d5+=dojo.html.getPixelValue(node,_3d3[x],_3d4);
}
return _3d5;
};
dojo.html.getMargin=function(node){
return {width:dojo.html._sumPixelValues(node,["margin-left","margin-right"],(dojo.html.getComputedStyle(node,"position")=="absolute")),height:dojo.html._sumPixelValues(node,["margin-top","margin-bottom"],(dojo.html.getComputedStyle(node,"position")=="absolute"))};
};
dojo.html.getBorder=function(node){
return {width:dojo.html.getBorderExtent(node,"left")+dojo.html.getBorderExtent(node,"right"),height:dojo.html.getBorderExtent(node,"top")+dojo.html.getBorderExtent(node,"bottom")};
};
dojo.html.getBorderExtent=function(node,side){
return (dojo.html.getStyle(node,"border-"+side+"-style")=="none"?0:dojo.html.getPixelValue(node,"border-"+side+"-width"));
};
dojo.html.getMarginExtent=function(node,side){
return dojo.html._sumPixelValues(node,["margin-"+side],dojo.html.isPositionAbsolute(node));
};
dojo.html.getPaddingExtent=function(node,side){
return dojo.html._sumPixelValues(node,["padding-"+side],true);
};
dojo.html.getPadding=function(node){
return {width:dojo.html._sumPixelValues(node,["padding-left","padding-right"],true),height:dojo.html._sumPixelValues(node,["padding-top","padding-bottom"],true)};
};
dojo.html.getPadBorder=function(node){
var pad=dojo.html.getPadding(node);
var _3e2=dojo.html.getBorder(node);
return {width:pad.width+_3e2.width,height:pad.height+_3e2.height};
};
dojo.html.getBoxSizing=function(node){
var h=dojo.render.html;
var bs=dojo.html.boxSizing;
if(((h.ie)||(h.opera))&&node.nodeName.toLowerCase()!="img"){
var cm=document["compatMode"];
if((cm=="BackCompat")||(cm=="QuirksMode")){
return bs.BORDER_BOX;
}else{
return bs.CONTENT_BOX;
}
}else{
if(arguments.length==0){
node=document.documentElement;
}
var _3e7;
if(!h.ie){
_3e7=dojo.html.getStyle(node,"-moz-box-sizing");
if(!_3e7){
_3e7=dojo.html.getStyle(node,"box-sizing");
}
}
return (_3e7?_3e7:bs.CONTENT_BOX);
}
};
dojo.html.isBorderBox=function(node){
return (dojo.html.getBoxSizing(node)==dojo.html.boxSizing.BORDER_BOX);
};
dojo.html.getBorderBox=function(node){
node=dojo.byId(node);
return {width:node.offsetWidth,height:node.offsetHeight};
};
dojo.html.getPaddingBox=function(node){
var box=dojo.html.getBorderBox(node);
var _3ec=dojo.html.getBorder(node);
return {width:box.width-_3ec.width,height:box.height-_3ec.height};
};
dojo.html.getContentBox=function(node){
node=dojo.byId(node);
var _3ee=dojo.html.getPadBorder(node);
return {width:node.offsetWidth-_3ee.width,height:node.offsetHeight-_3ee.height};
};
dojo.html.setContentBox=function(node,args){
node=dojo.byId(node);
var _3f1=0;
var _3f2=0;
var isbb=dojo.html.isBorderBox(node);
var _3f4=(isbb?dojo.html.getPadBorder(node):{width:0,height:0});
var ret={};
if(typeof args.width!="undefined"){
_3f1=args.width+_3f4.width;
ret.width=dojo.html.setPositivePixelValue(node,"width",_3f1);
}
if(typeof args.height!="undefined"){
_3f2=args.height+_3f4.height;
ret.height=dojo.html.setPositivePixelValue(node,"height",_3f2);
}
return ret;
};
dojo.html.getMarginBox=function(node){
var _3f7=dojo.html.getBorderBox(node);
var _3f8=dojo.html.getMargin(node);
return {width:_3f7.width+_3f8.width,height:_3f7.height+_3f8.height};
};
dojo.html.setMarginBox=function(node,args){
node=dojo.byId(node);
var _3fb=0;
var _3fc=0;
var isbb=dojo.html.isBorderBox(node);
var _3fe=(!isbb?dojo.html.getPadBorder(node):{width:0,height:0});
var _3ff=dojo.html.getMargin(node);
var ret={};
if(typeof args.width!="undefined"){
_3fb=args.width-_3fe.width;
_3fb-=_3ff.width;
ret.width=dojo.html.setPositivePixelValue(node,"width",_3fb);
}
if(typeof args.height!="undefined"){
_3fc=args.height-_3fe.height;
_3fc-=_3ff.height;
ret.height=dojo.html.setPositivePixelValue(node,"height",_3fc);
}
return ret;
};
dojo.html.getElementBox=function(node,type){
var bs=dojo.html.boxSizing;
switch(type){
case bs.MARGIN_BOX:
return dojo.html.getMarginBox(node);
case bs.BORDER_BOX:
return dojo.html.getBorderBox(node);
case bs.PADDING_BOX:
return dojo.html.getPaddingBox(node);
case bs.CONTENT_BOX:
default:
return dojo.html.getContentBox(node);
}
};
dojo.html.toCoordinateObject=dojo.html.toCoordinateArray=function(_404,_405,_406){
if(_404 instanceof Array||typeof _404=="array"){
dojo.deprecated("dojo.html.toCoordinateArray","use dojo.html.toCoordinateObject({left: , top: , width: , height: }) instead","0.5");
while(_404.length<4){
_404.push(0);
}
while(_404.length>4){
_404.pop();
}
var ret={left:_404[0],top:_404[1],width:_404[2],height:_404[3]};
}else{
if(!_404.nodeType&&!(_404 instanceof String||typeof _404=="string")&&("width" in _404||"height" in _404||"left" in _404||"x" in _404||"top" in _404||"y" in _404)){
var ret={left:_404.left||_404.x||0,top:_404.top||_404.y||0,width:_404.width||0,height:_404.height||0};
}else{
var node=dojo.byId(_404);
var pos=dojo.html.abs(node,_405,_406);
var _40a=dojo.html.getMarginBox(node);
var ret={left:pos.left,top:pos.top,width:_40a.width,height:_40a.height};
}
}
ret.x=ret.left;
ret.y=ret.top;
return ret;
};
dojo.html.setMarginBoxWidth=dojo.html.setOuterWidth=function(node,_40c){
return dojo.html._callDeprecated("setMarginBoxWidth","setMarginBox",arguments,"width");
};
dojo.html.setMarginBoxHeight=dojo.html.setOuterHeight=function(){
return dojo.html._callDeprecated("setMarginBoxHeight","setMarginBox",arguments,"height");
};
dojo.html.getMarginBoxWidth=dojo.html.getOuterWidth=function(){
return dojo.html._callDeprecated("getMarginBoxWidth","getMarginBox",arguments,null,"width");
};
dojo.html.getMarginBoxHeight=dojo.html.getOuterHeight=function(){
return dojo.html._callDeprecated("getMarginBoxHeight","getMarginBox",arguments,null,"height");
};
dojo.html.getTotalOffset=function(node,type,_40f){
return dojo.html._callDeprecated("getTotalOffset","getAbsolutePosition",arguments,null,type);
};
dojo.html.getAbsoluteX=function(node,_411){
return dojo.html._callDeprecated("getAbsoluteX","getAbsolutePosition",arguments,null,"x");
};
dojo.html.getAbsoluteY=function(node,_413){
return dojo.html._callDeprecated("getAbsoluteY","getAbsolutePosition",arguments,null,"y");
};
dojo.html.totalOffsetLeft=function(node,_415){
return dojo.html._callDeprecated("totalOffsetLeft","getAbsolutePosition",arguments,null,"left");
};
dojo.html.totalOffsetTop=function(node,_417){
return dojo.html._callDeprecated("totalOffsetTop","getAbsolutePosition",arguments,null,"top");
};
dojo.html.getMarginWidth=function(node){
return dojo.html._callDeprecated("getMarginWidth","getMargin",arguments,null,"width");
};
dojo.html.getMarginHeight=function(node){
return dojo.html._callDeprecated("getMarginHeight","getMargin",arguments,null,"height");
};
dojo.html.getBorderWidth=function(node){
return dojo.html._callDeprecated("getBorderWidth","getBorder",arguments,null,"width");
};
dojo.html.getBorderHeight=function(node){
return dojo.html._callDeprecated("getBorderHeight","getBorder",arguments,null,"height");
};
dojo.html.getPaddingWidth=function(node){
return dojo.html._callDeprecated("getPaddingWidth","getPadding",arguments,null,"width");
};
dojo.html.getPaddingHeight=function(node){
return dojo.html._callDeprecated("getPaddingHeight","getPadding",arguments,null,"height");
};
dojo.html.getPadBorderWidth=function(node){
return dojo.html._callDeprecated("getPadBorderWidth","getPadBorder",arguments,null,"width");
};
dojo.html.getPadBorderHeight=function(node){
return dojo.html._callDeprecated("getPadBorderHeight","getPadBorder",arguments,null,"height");
};
dojo.html.getBorderBoxWidth=dojo.html.getInnerWidth=function(){
return dojo.html._callDeprecated("getBorderBoxWidth","getBorderBox",arguments,null,"width");
};
dojo.html.getBorderBoxHeight=dojo.html.getInnerHeight=function(){
return dojo.html._callDeprecated("getBorderBoxHeight","getBorderBox",arguments,null,"height");
};
dojo.html.getContentBoxWidth=dojo.html.getContentWidth=function(){
return dojo.html._callDeprecated("getContentBoxWidth","getContentBox",arguments,null,"width");
};
dojo.html.getContentBoxHeight=dojo.html.getContentHeight=function(){
return dojo.html._callDeprecated("getContentBoxHeight","getContentBox",arguments,null,"height");
};
dojo.html.setContentBoxWidth=dojo.html.setContentWidth=function(node,_421){
return dojo.html._callDeprecated("setContentBoxWidth","setContentBox",arguments,"width");
};
dojo.html.setContentBoxHeight=dojo.html.setContentHeight=function(node,_423){
return dojo.html._callDeprecated("setContentBoxHeight","setContentBox",arguments,"height");
};
dojo.provide("com.infonow.ligeo.map.LigeoMap");
function LigeoMap(id,_425,_426,_427){
var that=this;
this.MAP_STYLE="ligeo_mapStyle";
this.myId=LigeoAPI.DEFAULT_MAP_ID;
if(LigeoVarUtils.isNotNullOrEmpty(id)){
this.myId=id;
}
this.myVEMap=null;
this.myWidth=0;
this.myHeight=0;
this.myLocations=[];
this.myCenterLocation=null;
this.myOriginalCenter=null;
this.myOriginalZoom=null;
this.frozenState=false;
this.isCoordinatingMap=false;
this.myMapTermsParentDiv="content";
this.myLigeoRoute=null;
this.showTraffic=false;
this.clearResults=function(){
that.myLocations=[];
that.myCenterLocation=null;
that.myOriginalCenter=null;
that.myOriginalZoom=null;
var _429=that.getVEMap();
if(_429!=null){
_429.DeleteAllShapeLayers();
_429.DeleteRoute();
}
if(that.hasLigeoRoute()){
that.getLigeoRoute().clearRoutes();
}
};
this.handleOnLoadMap=function(){
try{
that.hide();
if(LigeoFeaturesAPI.isMapNavigatorDisabled()){
that.getVEMap().HideDashboard();
}
that.getEro().wasManuallyClosed=true;
that.getEro().hide();
that.applyMapStyles();
}
catch(error){
LigeoLogger.error(error);
}
};
this.suppressHideMapBalloonOnMouseout=function(_42a){
if(that.getEro().wasManuallyClosed!==true){
that.getEro().wasMapBalloonOnMouseoutSuppressed=true;
that.getEro().showImmediate();
}
};
this.resetMapBalloonWasManuallyClosed=function(_42b){
that.getEro().wasManuallyClosed=false;
that.getEro().wasMapBalloonOnMouseoutSuppressed=false;
};
this.rememberMapStyle=function(_42c){
var _42d=_42c.mapStyle;
if(_42c.mapStyle=="b"){
_42d="h";
}else{
if(_42c.mapStyle=="o"){
_42d="a";
}
}
dojo.io.cookie.setCookie(that.MAP_STYLE,_42d);
};
this.getMapStyle=function(){
var _42e="r";
var _42f=dojo.io.cookie.getCookie(that.MAP_STYLE);
if(LigeoVarUtils.isNotNullOrEmpty(_42f)){
_42e=_42f;
}
return _42e;
};
this.createAndShowBalloon=function(_430,_431){
LigeoBalloon.createAndShowBalloon(that.getVEMap(),_431,_430,that.getMapHtmlElement(),that.myWidth,that.myHeight);
};
this.showLigeoLocationBalloonByUniqueId=function(_432,_433){
try{
var _434=LigeoAPI.getLigeoMapById(_433);
var _435=_434.getLocationById(_432);
if(LigeoVarUtils.isNotNull(_435)){
that.createAndShowBalloon(_435,_435.getVEShape());
}
}
catch(error){
LigeoLogger.error(error);
}
return true;
};
this.showLigeoLocationBalloon=function(_436){
try{
if(_436.elementID){
var _437=that.getVEMap().GetShapeByID(_436.elementID);
var _438=that.getLocationByShape(_437);
that.createAndShowBalloon(_438,_437);
}
}
catch(error){
LigeoLogger.error(error);
}
return true;
};
this.handleVeOnChangeView=function(){
if(that.isCoordinatingMap==true){
that.isCoordinatingMap=false;
LigeoAPI.skipGridSearch(false);
}else{
if(!LigeoAPI.mySkipGridSearch){
LigeoGridSearch.performGridSearch(that);
}else{
LigeoAPI.skipGridSearch(false);
}
}
};
this.disableMapPanningAndZooming=function(_439){
that.setElementStyle("cursor","default");
return true;
};
this.loadViewableMap=function(_43a,_43b,_43c){
var _43d=this.getVEMap();
_43d.SetCredentials(LigeoConfigurationAPI.getMapAuthToken());
_43d.AttachEvent("ontokenerror",that.onTokenError);
_43d.AttachEvent("ontokenexpire",that.onTokenExpire);
_43d.onLoadMap=this.handleOnLoadMap;
var _43e=null;
if(LigeoVarUtils.isNotNull(_43a)&&LigeoVarUtils.isNotNull(_43b)){
try{
_43e=new VELatLong(_43a,_43b);
}
catch(ex){
LigeoLogger.error("Invalid lat/long; lat="+_43a+" lon="+_43b+".\n"+"The exception is: "+ex.toString());
}
}
var _43f=(LigeoVarUtils.isNotNull(_43c))?_43c:null;
var _440=VEMapStyle.Road;
var _441=false;
var _442=VEMapMode.Mode2D;
var _443=LigeoFeaturesAPI.isShow3dNavigationElement();
var _444=0;
var _445=new VEMapOptions;
_445.EnableBirdseye=LigeoFeaturesAPI.isShowBirdsEyeNavigationElement();
_445.EnableDashboardLabels=true;
_43d.LoadMap(_43e,_43f,_440,_441,_442,_443,_444,_445);
};
radiusSearchOnMouseDown=function(_446){
LigeoMapDrawingToolkit.startDrawingCircle(that.getVEMap(),_446);
};
radiusSearchOnMouseUp=function(_447){
LigeoMapDrawingToolkit.endDrawingCircle(that.getVEMap(),_447);
};
radiusSearchOnMouseMove=function(_448){
LigeoMapDrawingToolkit.activeDrawingCircle(that.getVEMap(),_448);
};
this.initializeMap=function(_449,_44a,_44b){
that.loadViewableMap(_449,_44a,_44b);
var _44c;
var _44d=this.getVEMap();
_44d.ShowMessageBox=false;
if(LigeoFeaturesAPI.isShowTrafficNavigationElement()){
var _44e=document.createElement("div");
_44e.id="inow_MSVE_navAction_traffic";
_44e.innerHTML=LigeoEnvironment.translateLocaleText("traffic");
_44e.title=LigeoEnvironment.translateLocaleText("showTrafficTip");
_44e.onclick=function(){
if(_44e.className.indexOf("disabled")<0){
that.toggleTraffic();
that.fixNavMapStyles("clickedOnTraffic");
}
};
_44c=LigeoDOMUtils.getElementsById("MSVE_navAction_RoadMapStyle",this.myId);
_44e.className=_44c[0].className;
_44c=LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",this.myId);
_44c[0].insertBefore(_44e,null);
var _44f=LigeoDOMUtils.getElementsById("MSVE_navAction_container",this.myId);
_44f=_44f[0];
var _450=LigeoDOMUtils.getElementsById("MSVE_navAction_toggleGlyphInner",this.myId);
_450=_450[0];
_450.onclick=function(){
if(that.isShowTraffic()){
if(_44f.className.indexOf("collapsed")<0){
that.getVEMap().HideTrafficLegend();
}else{
that.getVEMap().ShowTrafficLegend();
}
}
};
}
if(LigeoFeaturesAPI.isRadiusSearchElement()){
LigeoMap.searchShapeLayer=new VEShapeLayer();
_44d.AddShapeLayer(LigeoMap.searchShapeLayer);
_44d.AttachEvent("onmousedown",that.radiusSearchOnMouseDown);
_44d.AttachEvent("onmouseup",that.radiusSearchOnMouseUp);
_44d.AttachEvent("onmousemove",that.radiusSearchOnMouseMove);
if(LigeoVarUtils.isNotNullOrEmpty(LigeoConfigurationAPI.getRadiusSearchLocation())){
if(LigeoVarUtils.isNullOrEmpty(LigeoDOMUtils.getElementsById("inow_MSVE_navAction_radius"))){
var _451=document.createElement("div");
_451.id="inow_MSVE_navAction_radius";
if(LigeoVarUtils.isNotNullOrEmpty(LigeoConfigurationAPI.getRadiusSearchIcon())){
_451.innerHTML="<img src='"+LigeoConfigurationAPI.getRadiusSearchIcon()+"' border='0' alt='SEARCH BY CIRCLE'>";
}else{
_451.innerHTML="RADIUS SEARCH";
_451.title="SEARCH BY CIRCLE";
}
_451.onclick=function(){
LigeoMapDrawingToolkit.setRadiusToolActive(!LigeoMapDrawingToolkit.isRadiusToolActive());
LigeoMap.searchShapeLayer.DeleteAllShapes();
_44c=LigeoDOMUtils.getElementsById("inow_MSVE_navAction_radius");
if(LigeoMapDrawingToolkit.isRadiusToolActive()){
that.getVEMap().vemapcontrol.EnableGeoCommunity(true);
document.getElementById(that.myId).style.cursor="crosshair";
_44c[0].innerHTML="<img src='"+LigeoConfigurationAPI.getRadiusSearchIconOn()+"' border='0' alt='SEARCH BY CIRCLE'>";
if(LigeoFeaturesAPI.isMapGridSearchingEnabled()){
LigeoAPI.skipGridSearch(true);
}
}else{
that.getVEMap().vemapcontrol.EnableGeoCommunity(false);
document.getElementById(that.myId).style.cursor="default";
_44c[0].innerHTML="<img src='"+LigeoConfigurationAPI.getRadiusSearchIcon()+"' border='0' alt='SEARCH BY CIRCLE'>";
if(LigeoFeaturesAPI.isMapGridSearchingEnabled()){
LigeoAPI.skipGridSearch(false);
}
}
LigeoAPI.fixNavMapStyles();
};
if(LigeoVarUtils.isNotNullOrEmpty(LigeoConfigurationAPI.getRadiusSearchLocation())){
_44c=LigeoDOMUtils.getElementsById(LigeoConfigurationAPI.getRadiusSearchLocation());
}else{
_44c=LigeoDOMUtils.getElementsById("MSVE_navAction_RoadMapStyle",this.myId);
_451.className=_44c[0].className;
_44c=LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",this.myId);
}
_44c[0].insertBefore(_451,null);
}
}
}
_44d.AttachEvent("onendzoom",this.handleVeOnChangeEndZoom);
};
this.handleVeOnChangeMapStyle=function(_452){
that.fixNavMapStyles("handleVeOnChangeMapStyle");
that.rememberMapStyle(_452);
if((_452.mapStyle=="b")||(_452.mapStyle=="o")){
LigeoAPI.closeBalloon();
}
};
this.handleVeOnChangeEndZoom=function(){
that.fixNavMapStyles("handleVeOnChangeEndZoom");
if(LigeoFeaturesAPI.isShowTrafficNavigationElement()){
var _453=LigeoDOMUtils.getElementsById("inow_MSVE_navAction_traffic",that.myId);
_453=_453[0];
var _454=_453.className;
if((that.getZoom()>14)||(that.getZoom()<9)){
if(_453.className.indexOf("disabled")<0){
that.setShowTraffic(true);
that.toggleTraffic();
_454=_454.replace("MSVE_MapStyle","MSVE_MapStyle_disabled");
_454=_454.replace(" MSVE_selected","");
_453.className=_454;
}
}else{
_454=_454.replace("MSVE_MapStyle_disabled","MSVE_MapStyle");
_453.className=_454;
}
}
};
this.isShowTraffic=function(){
return that.showTraffic;
};
this.setShowTraffic=function(_455){
that.showTraffic=_455;
};
this.toggleTraffic=function(){
var _456=that.isShowTraffic();
var _457=LigeoDOMUtils.getElementsById("inow_MSVE_navAction_traffic",that.myId);
_457=_457[0];
var _458=_457.className;
var _459=that.getVEMap();
if(_456){
_459.ClearTraffic();
_457.title=LigeoEnvironment.translateLocaleText("showTrafficTip");
_458=_458.replace(" MSVE_selected","");
}else{
_459.LoadTraffic(true);
_459.ShowTrafficLegend(_457.offsetLeft+_457.offsetParent.offsetLeft,_457.offsetHeight+10);
_457.title=LigeoEnvironment.translateLocaleText("hideTrafficTip");
_458=_458+" MSVE_selected";
}
_457.className=_458;
that.setShowTraffic(!_456);
};
this.onTokenError=function(){
LigeoLogger.debug("VE Token Error, token="+LigeoConfigurationAPI.getMapAuthToken());
};
this.onTokenExpire=function(){
LigeoLogger.debug("VE Token Expired, token="+LigeoConfigurationAPI.getMapAuthToken());
};
function constructor(_45a,_45b,_45c){
that.initializeMap(_45a,_45b,_45c);
};
constructor(_425,_426,_427);
};
LigeoMap.prototype.getLocale=function(){
alert("LigeoMap.prototype.getLocale has been deprecated. Use LigeoEnvironment.getMapLocale instead.");
};
LigeoMap.prototype.setLocale=function(_45d){
alert("LigeoMap.prototype.getLocale has been deprecated. Use LigeoEnvironment.setMapLocale instead.");
};
LigeoMap.prototype.getId=function(){
return this.myId;
};
LigeoMap.prototype.setId=function(id){
this.myId=id;
};
LigeoMap.prototype.fixNavMapStyles=function(_45f){
if(LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",this.myId)!=null){
var _460=setTimeout(function(){
var _461=LigeoDOMUtils.getElementsById("MSVE_navAction_container",this.myId);
_461=_461[0];
var _462=LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",this.myId);
_462=_462[0];
var _463=LigeoDOMUtils.getElementsById("MSVE_navAction_topBackground",this.myId);
_463=_463[0];
var _464=LigeoDOMUtils.getElementsById("MSVE_navAction_toggleGlyphWrapper",this.myId);
_464=_464[0];
var _465="";
_465=_461.className;
_465=_465.replace("notraffic","");
_461.className=_465;
var _466=_462.offsetWidth+_462.offsetLeft+_464.offsetWidth+10;
if(_466>100){
_464.style.right=(_461.offsetWidth-_466)+"px";
_463.style.width=(_466-_462.offsetLeft)+"px";
}
},100);
}
};
LigeoMap.prototype.isDefaultMap=function(_467){
if(_467==null){
_467=this.myId;
}
return (_467==LigeoAPI.DEFAULT_MAP_ID);
};
LigeoMap.prototype.isDrillMap=function(_468){
if(_468==null){
_468=this.myId;
}
return (_468==LigeoAPI.DRILL_MAP_ID);
};
LigeoMap.prototype.isResultMap=function(_469){
if(_469==null){
_469=this.myId;
}
return (_469==LigeoAPI.RESULT_MAP_ID);
};
LigeoMap.prototype.isRouteMap=function(_46a){
if(_46a==null){
_46a=this.myId;
}
return (_46a==LigeoAPI.ROUTE_MAP_ID);
};
LigeoMap.prototype.shouldShowCenterLocation=function(){
return (LigeoVarUtils.isNotNull(this.myCenterLocation)&&((this.isResultMap()&&LigeoFeaturesAPI.isShowResultsCenterLocation())||(this.isRouteMap()&&LigeoFeaturesAPI.isShowRouteCenterLocation())||(this.isDrillMap()&&LigeoFeaturesAPI.isShowDrillCenterLocation())||this.isDefaultMap()));
};
LigeoMap.prototype.shouldShowOtherLocations=function(){
return ((this.isResultMap()&&LigeoFeaturesAPI.isShowResultsLocations())||(this.isRouteMap()&&LigeoFeaturesAPI.isShowRouteOtherLocations())||(this.isDrillMap()&&LigeoFeaturesAPI.isShowDrillOtherLocations())||this.isDefaultMap());
};
LigeoMap.prototype.renderMap=function(){
if(this.hasLigeoRoute()){
this.getLigeoRoute().renderRoute(this);
}
var _46b=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_46b)){
this.applyMapDivStyles();
var _46c=this.getVEMap();
if(this.shouldShowCenterLocation()){
shapeCenter=this.myCenterLocation.getVEShape();
shapeCenter.SetZIndex(700);
_46c.AddShape(shapeCenter);
}
if(this.shouldShowOtherLocations()){
for(var i=0;i<this.myLocations.length;i++){
var _46e=this.myLocations[i].getVEShape();
_46e.SetZIndex(_46e.GetZIndex()-this.myLocations[i].getLocationNumber());
_46c.AddShape(_46e);
}
}
if(!this.isFrozen()){
this.coordinateCenterAndZoom();
this.isCoordinatingMap=false;
}
_46c.SetScaleBarDistanceUnit(LigeoFeaturesAPI.getMapDistanceUnits());
this.removeMapTerms();
this.addMapTerms();
this.attachEvents();
this.show();
}
};
LigeoMap.prototype.removeMapTerms=function(){
var _46f=document.getElementById("ligeo-mapCopyright-div");
if(LigeoVarUtils.isNotNull(_46f)){
_46f.parentNode.removeChild(_46f);
}
};
LigeoMap.prototype.attachEvents=function(){
var _470=this.getVEMap();
var that=this;
followLocationLink=function(_472){
if(_472.elementID){
var _473=_470.GetShapeByID(_472.elementID);
var _474=that.getLocationByShape(_473);
if(LigeoVarUtils.isNotNull(_474)&&LigeoVarUtils.isNotNullOrEmpty(_474.getLinkUrl())){
window.location=_474.getLinkUrl();
}
}
};
_470.AttachEvent("onclick",followLocationLink);
if(LigeoFeaturesAPI.areMapBalloonsDisabled()||LigeoFeaturesAPI.areRouteMapBalloonsDisabled()){
_470.AttachEvent("onmouseover",LigeoMap.disableVEEvent);
}else{
if(LigeoFeaturesAPI.isOpenBaloonsOnClick()==false){
_470.AttachEvent("onmouseover",this.showLigeoLocationBalloon);
}
}
if(LigeoFeaturesAPI.isOpenBaloonsOnClick()){
_470.AttachEvent("onclick",this.showLigeoLocationBalloon);
}
if(LigeoFeaturesAPI.isHideMapBalloonOnMouseout()){
_470.AttachEvent("onmouseout",LigeoAPI.closeBalloon);
}else{
_470.AttachEvent("onmouseout",LigeoMap.disableVEEvent);
if(LigeoVarUtils.isNotNull(this.getEro())){
this.getEro().hookEvent("beforeshow",this.resetMapBalloonWasManuallyClosed);
this.getEro().hookEvent("afterhide",this.suppressHideMapBalloonOnMouseout);
}
}
if(LigeoFeaturesAPI.isMapPanningAndZoomingDisabled()){
this.disableMapPanningAndZooming();
_470.AttachEvent("onmousedown",this.disableMapPanningAndZooming);
_470.AttachEvent("onmouseup",this.disableMapPanningAndZooming);
_470.AttachEvent("onmousewheel",this.disableMapPanningAndZooming);
_470.AttachEvent("ondoubleclick",this.disableMapPanningAndZooming);
}
if(LigeoFeaturesAPI.isMapGridSearchingEnabled()){
_470.AttachEvent("onchangeview",this.handleVeOnChangeView);
}
_470.AttachEvent("onchangemapstyle",this.handleVeOnChangeMapStyle);
};
LigeoMap.prototype.addMapTerms=function(){
var _475=document.getElementById(this.getId());
if(LigeoVarUtils.isNotNull(_475)&&!LigeoFeaturesAPI.isTermsAndConditionsDisabled()){
var _476=document.createElement("DIV");
_476.setAttribute("id","ligeo-mapCopyright-div");
_476.setAttribute("class","INOW_Copyright INOW_CopyrightForeground");
var link=document.createElement("a");
var _478="http://via.infonow.net/map_terms.jsp?type=virtualearth&LOC="+LigeoEnvironment.getMapLocale();
link.setAttribute("href",_478);
link.setAttribute("onclick","window.open('"+_478+"','termsWindow','scrollbars,menubar=no,titlebar=no,height=280,width=500');return false;");
link.setAttribute("id","ligeo-mapCopyright");
link.setAttribute("target","termsWindow");
link.setAttribute("rel","noFollow");
link.appendChild(document.createTextNode(LigeoEnvironment.translateLocaleText("mapTerms")));
_476.appendChild(link);
if(LigeoVarUtils.isNotNullOrEmpty(document.getElementById(this.myMapTermsParentDiv))){
document.getElementById(this.myMapTermsParentDiv).appendChild(_476);
LigeoFeaturesAPI.setMapTermsParentDiv("content");
}
}
};
LigeoMap.prototype.getEro=function(){
return window.ero;
};
LigeoMap.prototype.getVEMap=function(){
if(LigeoVarUtils.isNull(this.myVEMap)){
var _479=5000;
if(LigeoVarUtils.isVirtualEarthLoaded(_479)){
this.myVEMap=new VEMap(this.myId);
}
}
return this.myVEMap;
};
LigeoMap.prototype.hasLigeoRoute=function(){
return LigeoVarUtils.isNotNull(this.myLigeoRoute);
};
LigeoMap.prototype.getLigeoRoute=function(){
if(LigeoVarUtils.isNull(this.myLigeoRoute)){
this.myLigeoRoute=new LigeoRoute();
}
return this.myLigeoRoute;
};
LigeoMap.prototype.setRouteTableHeaders=function(_47a,_47b,_47c){
var _47d=this.getLigeoRoute();
_47d.setWaypointsHeader(_47a);
_47d.setInstructionsHeader(_47b);
_47d.setDistancesHeader(_47c);
};
LigeoMap.prototype.setRouteTurnIcon=function(_47e){
this.getLigeoRoute().setNumberedIconPrefix(_47e);
};
LigeoMap.prototype.addRoute=function(_47f,_480){
this.getLigeoRoute().addRoute(_47f,_480);
};
LigeoMap.prototype.applyMapDivStyles=function(){
var _481=(this.myHeight==0)?this.getElementStyle("height"):this.myHeight;
var _482=(this.myWidth==0)?this.getElementStyle("width"):this.myWidth;
if(LigeoVarUtils.isNotNullOrEmpty(_481)&&LigeoVarUtils.isNotNullOrEmpty(_482)){
_481=_481.toString();
_482=_482.toString();
if(_481.indexOf("px")<0){
_481+="px";
}
if(_482.indexOf("px")<0){
_482+="px";
}
this.setElementStyle("height",_481);
this.setElementStyle("width",_482);
this.setElementStyle("position","relative");
}
};
LigeoMap.prototype.applyMapStyles=function(){
this.getVEMap().SetMapStyle(this.getMapStyle());
};
LigeoMap.prototype.setElementStyle=function(_483,_484){
var _485=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_485)){
var _486=_485.style;
_486[_483]=_484;
}
};
LigeoMap.prototype.getElementStyle=function(_487){
var _488="";
var _489=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_489)){
var _48a=_489.style;
_488=_48a[_487];
}
return _488;
};
LigeoMap.prototype.setMapVisibility=function(_48b){
var _48c=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_48c)){
var _48d=_48c.style;
_48d.visibility=_48b;
}
};
LigeoMap.prototype.show=function(){
this.setMapVisibility("visible");
};
LigeoMap.prototype.hide=function(){
this.setMapVisibility("hidden");
};
LigeoMap.prototype.setWidth=function(_48e){
this.myWidth=_48e;
};
LigeoMap.prototype.setHeight=function(_48f){
this.myHeight=_48f;
};
LigeoMap.prototype.getZoom=function(){
return this.getVEMap().GetZoomLevel();
};
LigeoMap.prototype.setCenter=function(_490){
this.myCenterLocation=_490;
};
LigeoMap.prototype.addLocation=function(_491){
this.myLocations.push(_491);
};
LigeoMap.prototype.addCenterPushpin=function(_492){
this.centerPushpin=_492;
};
LigeoMap.prototype.getLocationByShape=function(_493){
var _494=null;
if(LigeoVarUtils.isNotNull(this.myCenterLocation)&&(this.myCenterLocation.getVEShape()==_493)){
_494=this.myCenterLocation;
}else{
for(var i=0;i<this.myLocations.length;i++){
if(this.myLocations[i].getVEShape()==_493){
_494=this.myLocations[i];
}
}
}
return _494;
};
LigeoMap.prototype.getLocationById=function(id){
var _497=null;
if(LigeoVarUtils.isNotNull(this.myCenterLocation)&&(this.myCenterLocation.getUniqueId()==id)){
_497=this.myCenterLocation;
}else{
for(var i=0;i<this.myLocations.length;i++){
if(this.myLocations[i].getUniqueId()==id){
_497=this.myLocations[i];
break;
}
}
}
return _497;
};
LigeoMap.prototype.resetOriginalZoomAndCenterToVEMapConfiguration=function(){
var _499=this.getVEMap();
this.myOriginalZoom=_499.GetZoomLevel();
this.myOriginalCenter=_499.GetCenter();
};
LigeoMap.prototype.coordinateCenterAndZoom=function(){
this.isCoordinatingMap=true;
if(LigeoVarUtils.isNotNull(this.myCenterLocation)&&LigeoVarUtils.isNotNull(this.myOriginalZoom)){
this.getVEMap().SetCenterAndZoom(this.myCenterLocation.getVELatLong(),this.myOriginalZoom);
this.resetOriginalZoomAndCenterToVEMapConfiguration();
}else{
this.bestFitCenterAndZoom();
}
};
LigeoMap.prototype.recenterAndZoom=function(){
this.getVEMap().SetCenterAndZoom(this.myOriginalCenter,this.myOriginalZoom);
};
LigeoMap.prototype.bestFitCenterAndZoom=function(){
var _49a=[];
if(LigeoVarUtils.isNotNull(this.myCenterLocation)){
var _49b=0;
var _49c=0;
for(var i=0;i<this.myLocations.length;i++){
latitudeDeltaFromCenter=Math.abs(this.myLocations[i].getLatitude()-this.myCenterLocation.getLatitude());
if(latitudeDeltaFromCenter>_49b){
_49b=latitudeDeltaFromCenter;
}
longitudeDeltaFromCenter=Math.abs(this.myLocations[i].getLongitude()-this.myCenterLocation.getLongitude());
if(longitudeDeltaFromCenter>_49c){
_49c=longitudeDeltaFromCenter;
}
}
var _49e=this.myCenterLocation.getLatitude()-_49b;
var _49f=this.myCenterLocation.getLongitude()-_49c;
var _4a0=this.myCenterLocation.getLatitude()+_49b;
var _4a1=this.myCenterLocation.getLongitude()+_49c;
_49a.push(new VELatLong(_49e,_49f));
_49a.push(new VELatLong(_4a0,_4a1));
}else{
for(i=0;i<this.myLocations.length;i++){
_49a.push(this.myLocations[i].getVELatLong());
}
}
if(_49a.length>0){
this.getVEMap().SetMapView(_49a);
this.resetOriginalZoomAndCenterToVEMapConfiguration();
}
};
LigeoMap.disableVEEvent=function(_4a2){
return true;
};
LigeoMap.prototype.isMapOnPage=function(){
return LigeoVarUtils.isNotNull(this.getMapHtmlElement());
};
LigeoMap.prototype.getMapHtmlElement=function(){
return document.getElementById(this.myId);
};
LigeoMap.prototype.zoomIn=function(_4a3){
if(isNaN(_4a3)){
_4a3=1;
}
this.getVEMap().SetZoomLevel(this.getVEMap().GetZoomLevel()+_4a3);
};
LigeoMap.prototype.zoomOut=function(_4a4){
if(isNaN(_4a4)){
_4a4=1;
}
this.getVEMap().SetZoomLevel(this.getVEMap().GetZoomLevel()-_4a4);
};
LigeoMap.prototype.setOriginalZoom=function(zoom){
this.myOriginalZoom=zoom;
};
LigeoMap.prototype.isFrozen=function(){
return this.frozenState;
};
LigeoMap.prototype.setFrozen=function(_4a6){
this.frozenState=_4a6;
};
LigeoMap.prototype.pan=function(_4a7,_4a8){
this.getVEMap().Pan(_4a7,_4a8);
};
LigeoMap.prototype.setCenterAndZoom=function(_4a9,_4aa){
this.getVEMap().SetCenterAndZoom(_4a9,_4aa);
};
LigeoMap.prototype.getZoomLevel=function(){
return this.getVEMap().GetZoomLevel();
};
LigeoMap.createLatLonFromMapClick=function(e){
try{
var x=e.layerX;
var y=e.layerY;
if(x==null){
x=e.offsetX;
}
if(y==null){
y=e.offsetY;
}
var _4ae=new VEPixel(x,y);
var _4af=LigeoAPI.getLigeoMapById(LigeoAPI.getLigeoMap().myId).getVEMap().PixelToLatLong(_4ae);
}
catch(ex){
alert(ex.text);
}
return _4af;
};
dojo.provide("com.infonow.ligeo.LigeoInitializer");
function LigeoInitializer(){
};
LigeoInitializer.execute=function(){
clear=function(){
var _4b0=LigeoAPI.getLigeoMap();
if(LigeoVarUtils.isNotNull(_4b0)){
_4b0.clearResults();
}
};
initializeAllMaps=function(){
if(LigeoVarUtils.isNullOrEmpty(LigeoConfigurationAPI.getMyMapDivIDs())||(LigeoConfigurationAPI.getMyMapDivIDs().length<1)){
LigeoConfigurationAPI.setMyMapDivIDs(new Array(LigeoAPI.DEFAULT_MAP_ID));
}
if(LigeoVarUtils.isNull(LigeoAPI.getLigeoMap())){
var _4b1=null;
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
var _4b3=LigeoConfigurationAPI.getMyMapDivIDs()[i];
var _4b4=new LigeoMap(_4b3,LigeoConfigurationAPI.myInitialLat,LigeoConfigurationAPI.myInitialLong,LigeoConfigurationAPI.myInitialZoom);
LigeoAPI.myLigeoMaps[_4b3]=_4b4;
if(_4b1==null){
_4b1=_4b4;
}
}
LigeoAPI.setLigeoMap(_4b1);
}
};
configureDesiredMaps=function(){
var _4b5=LigeoAPI.getLigeoMap();
if(LigeoAPI.containsMapDivID(LigeoAPI.RESULT_MAP_ID)){
LigeoAPI.setLigeoMap(LigeoAPI.getLigeoMapById(LigeoAPI.RESULT_MAP_ID));
LigeoAPI.configureResults();
}
if(LigeoAPI.containsMapDivID(LigeoAPI.DRILL_MAP_ID)){
LigeoAPI.setLigeoMap(LigeoAPI.getLigeoMapById(LigeoAPI.DRILL_MAP_ID));
LigeoAPI.configureDrill();
}
if(LigeoAPI.containsMapDivID(LigeoAPI.ROUTE_MAP_ID)){
LigeoAPI.setLigeoMap(LigeoAPI.getLigeoMapById(LigeoAPI.ROUTE_MAP_ID));
LigeoAPI.configureRoute();
}
if(LigeoAPI.containsMapDivID(LigeoAPI.DEFAULT_MAP_ID)){
LigeoAPI.setLigeoMap(LigeoAPI.getLigeoMapById(LigeoAPI.DEFAULT_MAP_ID));
LigeoAPI.configure();
}
LigeoAPI.setLigeoMap(_4b5);
};
renderAllMaps=function(){
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
var map=LigeoAPI.getLigeoMapById(LigeoConfigurationAPI.getMyMapDivIDs()[i]);
if(map.isRouteMap()||map.isResultMap()||map.isDrillMap()){
map.renderMap();
}
}
};
renderCurrentMap=function(){
if(LigeoConfigurationAPI.isApplicationReloaded()&&(LigeoConfigurationAPI.getMyMapDivIDs().length>1)){
renderAllMaps();
LigeoDOMUtils.showSelectedMap(LigeoConfigurationAPI.getMyMapDivIDs()[0]);
return;
}
LigeoAPI.getLigeoMap().renderMap();
};
clear();
initializeAllMaps();
configureDesiredMaps();
renderCurrentMap();
LigeoConfigurationAPI.setApplicationReloaded(false);
LigeoAPI.freezeMap(false);
};
dojo.provide("com.infonow.ligeo.env.LigeoEnvironment");
function LigeoEnvironment(){
};
LigeoEnvironment.mapLocale="en-us";
LigeoEnvironment.getMapLocale=function(){
return LigeoEnvironment.mapLocale;
};
LigeoEnvironment.setMapLocale=function(LOC){
LigeoEnvironment.mapLocale=LOC;
};
LigeoEnvironment.imageServerURL="";
LigeoEnvironment.getImageServer=function(){
return LigeoEnvironment.imageServerURL;
};
LigeoEnvironment.setImageServer=function(_4b9){
LigeoEnvironment.imageServerURL=_4b9;
};
LigeoEnvironment.getImagePath=function(_4ba){
if(_4ba.indexOf("/")>-1){
return _4ba;
}else{
return LigeoEnvironment.getImageServer()+"mapicons/"+_4ba;
}
};
LigeoEnvironment.aryLocaleText=new Array();
LigeoEnvironment.translateLocaleText=function(key){
result=LigeoEnvironment.aryLocaleText[key];
return (result!="")?result:key;
};
LigeoEnvironment.setLocaleText=function(_4bc){
LigeoEnvironment.aryLocaleText=_4bc;
};
LigeoEnvironment.initialize=function(){
window.onerror=LigeoEnvironment.handleExceptions;
};
LigeoEnvironment.includeDependencies=function(){
};
LigeoEnvironment.handleExceptions=function(_4bd){
if(LigeoFeaturesAPI.alertOnErrors){
alert(_4bd.name+"\n"+_4bd.message+"\n"+_4bd.description);
}
if(!LigeoFeaturesAPI.swallowErrors){
throw _4bd;
}
};
LigeoEnvironment.translateMicrosoftMarket=function(LOC){
if((LOC===undefined)||(LOC===null)||(LOC=="")){
LOC=LigeoEnvironment.getMapLocale();
}
var _4bf=new Array("cs-cz","da-dk","nl-nl","en-us","en-au","en-ca","en-in","en-gb","fi-fi","fr-ca","fr-fr","de-de","it-it","ja-jp","nb-no","pt-br","pt-pt","es-us","es-mx","es-es","sv-se");
var _4c0=LOC.toString().toLowerCase().replace("_","-");
if((_4c0=="es-mx")||(_4c0=="es-es")){
_4c0="es-us";
}
var _4c1=false;
for(i=0;i<_4bf.length&&_4c1==false;i++){
if(_4bf[i]==_4c0){
_4c1=true;
}
}
if(!_4c1){
for(i=0;i<_4bf.length&&_4c1==false;i++){
if(_4bf[i].toString().substr(0,2)==_4c0.substr(0,2)){
_4c0=_4bf[i];
_4c1=true;
}
}
}
if(!_4c1){
_4c0="en-us";
}
LigeoEnvironment.setMapLocale(_4c0);
LigeoEnvironment.localizeText();
return _4c0;
};
LigeoEnvironment.localizeText=function(){
this.makeLang=function(_4c2,last,_4c4,_4c5,_4c6,_4c7,_4c8,_4c9,_4ca){
this.first=_4c2;
this.last=last;
this.totalTime=_4c4;
this.totalDist=_4c5;
this.traffic=_4c6;
this.showTrafficTip=_4c7;
this.hideTrafficTip=_4c8;
this.mapTerms=_4c9;
this.yourSelectedLocation=_4ca;
};
var _4cb;
switch(LigeoEnvironment.getMapLocale()){
case "cs-cz":
case "da-dk":
case "fi-fi":
case "ja-jp":
_4cb=new this.makeLang("Start at","Arrive at","Total time","Total distance","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "nl-nl":
_4cb=new this.makeLang("Start adres","Eindigend adres","Totale tijd","Totale afstand","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "en-au":
case "en-ca":
case "en-in":
case "en-gb":
case "en-us":
_4cb=new this.makeLang("Start at","Arrive at","Total time","Total distance","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "fr-ca":
case "fr-fr":
_4cb=new this.makeLang("Commencez à","Arrivez à","Temps Total","Distance Totale","Circulation","Montrez la circulation sur la carte","Cachez la circulation sur la carte","Tous droits réservés. Utilisation assujettie aux ententes de licence/au droit d'auteur.","your selected location.");
break;
case "de-de":
_4cb=new this.makeLang("Startadresse","Endend Adresse","Gesamtzeit","Gesamtentfernung","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "it-it":
_4cb=new this.makeLang("Indirizzo iniziale","Che termina l'indirizzo","Tempo totale","Distanza totale","Traffico"," "," ","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "nb-no":
_4cb=new this.makeLang("Starter adresse","Sluttet adresse","Total tid","Total avstand","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "pt-br":
case "pt-pt":
_4cb=new this.makeLang("Começando endereço","Terminando endereço","Tempo total","Distância total","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "es-mx":
case "es-es":
case "es-us":
_4cb=new this.makeLang("A partir dirección","Poner fin a la dirección","Tiempo total","Distancia total","Tráfico","Mostrar el tránsito en el mapa","Ocultar el tránsito en el mapa","Todos los derechos reservados. Uso conforme a licencia y al derecho de copia.","your selected location.");
break;
case "sv-se":
_4cb=new this.makeLang("Startar adress","Slutar adress","Total tid","Totala sträckan","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "ru-ru":
_4cb=new this.makeLang("начальный адрес","адрес, заканчивающийся","Общее время","общее расстояние","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
default:
_4cb=new this.makeLang("Start at","Arrive at","Total time","Total distance","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
}
LigeoEnvironment.setLocaleText(_4cb);
};
LigeoEnvironment.getParamFromJavaScriptUrl=function(_4cc,_4cd){
var _4ce=function(_4cf){
this.scriptPath=_4cf;
};
_4ce.prototype={get:function(){
var _4d0=new RegExp(this.scriptPath.replace(".","\\.")+"(\\?.*)?$");
var _4d1=document.getElementsByTagName("script");
for(var i=0;i<_4d1.length;i++){
var _4d3=_4d1[i];
if(_4d3.src&&_4d3.src.match(_4d0)){
var _4d4=_4d3.src.match(/\?([^#]*)(#.*)?/);
return !_4d4?"":_4d4[1];
}
}
return "";
},parse:function(){
var _4d5={};
var _4d6=this.get();
var _4d7=_4d6.split("&");
for(var i=0;i<_4d7.length;i++){
var pair=_4d7[i].split("=");
var name=pair[0],_4db=pair[1];
if(!_4d5[name]){
_4d5[name]=[];
}
if(!_4db){
_4db="true";
}else{
try{
_4db=decodeURIComponent(_4db);
}
catch(e){
_4db=unescape(_4db);
}
}
var _4dc=_4d5[name];
_4dc[_4dc.length]=_4db;
}
return _4d5;
},toString:function(){
return "ScriptQuery [path="+this.scriptPath+"]";
}};
var _4dd=new _4ce(_4cc).parse();
return _4dd[_4cd];
};
LigeoEnvironment.importVirtualEarth=function(){
var _4de="6.2";
var _4df=LigeoEnvironment.translateMicrosoftMarket(LigeoEnvironment.getParamFromJavaScriptUrl("ligeo.js","LOC"));
var _4e0=window.location.toString().split(":");
var _4e1=_4e0.shift();
var _4e2=new Array();
_4e2["visibility"]="live";
_4e2["environment"]="net";
for(n in _4e0){
if(_4e0[n].indexOf("8080")>-1){
_4e2["environment"]="dev";
}else{
if(_4e0[n].indexOf(".qc")>-1){
_4e2["environment"]="qc";
}
}
if(_4e0[n].indexOf("test")>-1){
_4e2["visibility"]="test";
}
}
var _4e3="";
_4e3+=_4e1+"://shared";
if(_4e2["visibility"]=="test"||_4e2["environment"]=="dev"){
_4e3+=".test";
}
_4e3+=".via.infonow";
if(_4e2["environment"]=="dev"||_4e2["environment"]=="qc"){
_4e3+=".qc";
}else{
if(_4e2["environment"]=="net"){
_4e3+=".net";
}
}
_4e3+="/images/";
LigeoEnvironment.setImageServer(_4e3);
var _4e4=_4e1+"://"+"ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx";
_4e4+="?v="+_4de+"&mkt="+_4df;
if(_4e1=="https"){
_4e4+="&s=1";
}
document.write("<"+"script ");
document.write("type=\"text/javascript\" ");
document.write("src=\""+_4e4+"\">");
document.write("</"+"script>");
};
LigeoEnvironment.importVirtualEarth();
dojo.addOnLoad(LigeoEnvironment.initialize);
dojo.provide("com.infonow.ligeo.LigeoConfigurationAPI");
function LigeoConfigurationAPI(){
};
LigeoConfigurationAPI.applicationReloaded=true;
LigeoConfigurationAPI.myMapDivIDs=new Array();
LigeoConfigurationAPI.myInitialLat=null;
LigeoConfigurationAPI.myInitialLong=null;
LigeoConfigurationAPI.myInitialZoom=null;
LigeoConfigurationAPI.myMapWidth=null;
LigeoConfigurationAPI.myMapHeight=null;
LigeoConfigurationAPI.myRadiusSearchIcon=null;
LigeoConfigurationAPI.myRadiusSearchIconOn=null;
LigeoConfigurationAPI.myRadiusSearchLocation=null;
LigeoConfigurationAPI.myMapGridSearchZoomThreshold=9;
LigeoConfigurationAPI.myMapAuthToken=null;
LigeoConfigurationAPI.radiusSearchCallBack=function(){
};
LigeoConfigurationAPI.countryFilterArray=new Array("United States","Canada");
LigeoConfigurationAPI.setCustomID=function(_4e5){
LigeoConfigurationAPI.myCustomID=_4e5;
};
LigeoConfigurationAPI.setMyMapDivIDs=function(_4e6){
for(var i=0;i<_4e6.length;i++){
LigeoConfigurationAPI.getMyMapDivIDs().push(_4e6[i]);
}
};
LigeoConfigurationAPI.getMyMapDivIDs=function(){
return LigeoConfigurationAPI.myMapDivIDs;
};
LigeoConfigurationAPI.setInitialLat=function(_4e8){
LigeoConfigurationAPI.myInitialLat=_4e8;
};
LigeoConfigurationAPI.setInitialLong=function(_4e9){
LigeoConfigurationAPI.myInitialLong=_4e9;
};
LigeoConfigurationAPI.setInitialZoom=function(_4ea){
LigeoConfigurationAPI.myInitialZoom=_4ea;
};
LigeoConfigurationAPI.setMapWidth=function(_4eb){
LigeoConfigurationAPI.myMapWidth=_4eb;
};
LigeoConfigurationAPI.setMapHeight=function(_4ec){
LigeoConfigurationAPI.myMapHeight=_4ec;
};
LigeoConfigurationAPI.setMapGridSearchZoomThreshold=function(_4ed){
LigeoConfigurationAPI.myMapGridSearchZoomThreshold=_4ed;
};
LigeoConfigurationAPI.getRadiusSearchIcon=function(){
return LigeoConfigurationAPI.myRadiusSearchIcon;
};
LigeoConfigurationAPI.setRadiusSearchIcon=function(icon){
LigeoConfigurationAPI.myRadiusSearchIcon=icon;
};
LigeoConfigurationAPI.getRadiusSearchIconOn=function(){
return LigeoConfigurationAPI.myRadiusSearchIconOn;
};
LigeoConfigurationAPI.setRadiusSearchIconOn=function(icon,_4f0){
LigeoConfigurationAPI.myRadiusSearchIconOn=icon;
};
LigeoConfigurationAPI.getRadiusSearchLocation=function(){
return LigeoConfigurationAPI.myRadiusSearchLocation;
};
LigeoConfigurationAPI.setRadiusSearchLocation=function(_4f1){
LigeoConfigurationAPI.myRadiusSearchLocation=_4f1;
};
LigeoConfigurationAPI.setRadiusSearchCallBack=function(_4f2){
LigeoConfigurationAPI.radiusSearchCallBack=_4f2;
};
LigeoConfigurationAPI.setApplicationReloaded=function(_4f3){
LigeoConfigurationAPI.applicationReloaded=_4f3;
};
LigeoConfigurationAPI.isApplicationReloaded=function(){
return LigeoConfigurationAPI.applicationReloaded;
};
LigeoConfigurationAPI.setCountryFilterArray=function(_4f4){
LigeoConfigurationAPI.countryFilterArray=_4f4;
};
LigeoConfigurationAPI.getCountryFilterArray=function(){
return LigeoConfigurationAPI.countryFilterArray;
};
LigeoConfigurationAPI.setMapAuthToken=function(_4f5){
LigeoConfigurationAPI.myMapAuthToken=_4f5;
};
LigeoConfigurationAPI.getMapAuthToken=function(){
return LigeoConfigurationAPI.myMapAuthToken;
};
dojo.provide("com.infonow.ligeo.LigeoLayoutAPI");
function LigeoLayoutAPI(){
};
LigeoLayoutAPI.routeTableFooterOption="VIEW_2_ROW";
LigeoLayoutAPI.getRouteTableFooterOption=function(){
return this.routeTableFooterOption;
};
LigeoLayoutAPI.setRouteTableFooterOption=function(_4f6){
this.routeTableFooterOption=String(_4f6);
};
LigeoLayoutAPI.isDisplayTimeInRoute=false;
LigeoLayoutAPI.getDisplayTimeInRoute=function(){
return this.isDisplayTimeInRoute;
};
LigeoLayoutAPI.setTimeInRouteTable=function(_4f7){
this.isDisplayTimeInRoute=Boolean(_4f7);
};
dojo.provide("com.infonow.ligeo.map.LigeoMapDrawingToolkit");
function LigeoMapDrawingToolkit(){
};
LigeoMapDrawingToolkit.radiusToolActive=false;
LigeoMapDrawingToolkit.radiusToolDrawing=false;
LigeoMapDrawingToolkit.isRadiusToolActive=function(){
return LigeoMapDrawingToolkit.radiusToolActive;
};
LigeoMapDrawingToolkit.setRadiusToolActive=function(_4f8){
LigeoMapDrawingToolkit.radiusToolActive=_4f8;
};
LigeoMapDrawingToolkit.isRadiusToolDrawing=function(){
return LigeoMapDrawingToolkit.radiusToolDrawing;
};
LigeoMapDrawingToolkit.setRadiusToolDrawing=function(_4f9){
LigeoMapDrawingToolkit.radiusToolDrawing=_4f9;
};
LigeoMapDrawingToolkit.calcDistance=function(_4fa,_4fb){
var lat1=_4fa.Latitude;
var lon1=_4fa.Longitude;
var lat2=_4fb.Latitude;
var lon2=_4fb.Longitude;
var _500=6371;
var _501=Math.PI/180;
var dLat=(lat2-lat1)*_501;
var dLon=(lon2-lon1)*_501;
var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1*_501)*Math.cos(lat2*_501)*Math.sin(dLon/2)*Math.sin(dLon/2);
var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var d=_500*c;
return d;
};
LigeoMapDrawingToolkit.drawCircle=function(_507,_508){
var _509=6371;
var lat=(_507.Latitude*Math.PI)/180;
var lon=(_507.Longitude*Math.PI)/180;
var d=parseFloat(_508)/_509;
var _50d=new Array();
for(i=0;i<=360;i++){
var _50e=new VELatLong(0,0);
var _50f=i*Math.PI/180;
_50e.Latitude=Math.asin(Math.sin(lat)*Math.cos(d)+Math.cos(lat)*Math.sin(d)*Math.cos(_50f));
_50e.Longitude=((lon+Math.atan2(Math.sin(_50f)*Math.sin(d)*Math.cos(lat),Math.cos(d)-Math.sin(lat)*Math.sin(_50e.Latitude)))*180)/Math.PI;
_50e.Latitude=(_50e.Latitude*180)/Math.PI;
_50d.push(_50e);
}
var _510=new VEShape(VEShapeType.Polyline,_50d);
_510.HideIcon();
LigeoMap.searchShapeLayer.AddShape(_510);
};
LigeoMapDrawingToolkit.startDrawingCircle=function(_511,_512){
if(LigeoMapDrawingToolkit.isRadiusToolActive()){
LigeoMapDrawingToolkit.setRadiusToolDrawing(true);
var _513=new VEPixel(_512.mapX,_512.mapY);
_513=_511.PixelToLatLong(_513);
LigeoMap.searchShapeLayer.anchorPoint=_513;
}
};
LigeoMapDrawingToolkit.endDrawingCircle=function(_514,_515){
if(LigeoMapDrawingToolkit.isRadiusToolActive()){
var _516=new VEPixel(_515.mapX,_515.mapY);
_516=_514.PixelToLatLong(_516);
LigeoMapDrawingToolkit.setRadiusToolDrawing(false);
LigeoMap.searchShapeLayer.DeleteAllShapes();
LigeoConfigurationAPI.radiusSearchCallBack(LigeoMap.searchShapeLayer.anchorPoint,LigeoMapDrawingToolkit.calcDistance(LigeoMap.searchShapeLayer.anchorPoint,_516));
}
};
LigeoMapDrawingToolkit.activeDrawingCircle=function(_517,_518){
if(LigeoMapDrawingToolkit.isRadiusToolActive()&&LigeoMapDrawingToolkit.isRadiusToolDrawing()){
LigeoMap.searchShapeLayer.DeleteAllShapes();
var _519=new VEPixel(_518.mapX,_518.mapY);
_519=_517.PixelToLatLong(_519);
var _51a=LigeoMapDrawingToolkit.calcDistance(LigeoMap.searchShapeLayer.anchorPoint,_519);
LigeoMapDrawingToolkit.drawCircle(LigeoMap.searchShapeLayer.anchorPoint,_51a);
}
};
dojo.provide("com.infonow.ligeo.browser.LigeoBrowserCompatability");
function LigeoBrowserCompatability(){
};
LigeoBrowserCompatability.isIe=function(){
if(document.all){
return true;
}else{
return false;
}
};
dojo.provide("com.infonow.ligeo.service.LigeoAjaxService");
function LigeoAjaxService(){
var that=this;
this.activeXmlHttpRequests=new Object();
this.ajaxHtmlMessages=function(_51c,_51d){
var _51e=that.createXMLHttpRequest();
function populateHtmlMessages(){
try{
if(_51e.readyState==4){
if(_51e.status==200||_51e.status==403){
_51d.innerHTML=_51e.responseText;
if(LigeoVarUtils.isNullOrEmpty(_51d.innerHTML)){
var _51f="<div id='ajaxTempDiv' style='display:none'>temporary tag</div>";
_51f=_51f+_51e.responseText.replace(/<script/gi,"<script defer");
_51d.innerHTML=_51f;
var _520=document.getElementById("ajaxTempDiv");
if(LigeoVarUtils.isNotNullOrEmpty(_520)){
_51d.removeChild(_520);
}
}
var _521=_51d.getElementsByTagName("script");
for(var i=0;i<_521.length;i++){
eval(_521[i].text);
}
if(_521.length>0){
LigeoAPI.refresh();
}
}else{
if(_51e.status!=0){
LigeoLogger.error("Failed to make request: "+_51e.toString());
}
}
}
}
catch(e){
if(e.name!="NS_ERROR_NOT_AVAILABLE"){
LigeoLogger.error("The error is: "+e.toString());
}
}
};
if(typeof _51c=="string"){
_51e.open("GET",_51c,true);
}else{
var _523="";
var _524=_51c.elements;
for(var i=0;i<_524.length;i++){
if((_524[i].type!="checkbox")&&(_524[i].type!="radio")){
_523+=_524[i].name+"=";
_523+=LigeoVarUtils.URLEncode(_524[i].value)+"&";
}else{
if((_524[i].checked==true)&&(_524[i].type=="radio")){
_523+=_524[i].name+"=";
_523+=LigeoVarUtils.URLEncode(_524[i].value)+"&";
}else{
if(_524[i].checked==true){
_523+=_524[i].name+"=";
_523+=true+"&";
}
}
}
}
_51e.open(_51c.method,_51c.action,true);
_51e.setRequestHeader("Content-type","application/x-www-form-urlencoded");
}
var _526=that.activeXmlHttpRequests[_51d.id];
if(LigeoVarUtils.isNotNull(_526)&&_526.readyState!=4){
_526.abort();
}
that.activeXmlHttpRequests[_51d.id]=_51e;
_51e.onreadystatechange=populateHtmlMessages;
_51e.send(_523);
};
this.createXMLHttpRequest=function(){
try{
return new ActiveXObject("Msxml2.XMLHTTP");
}
catch(error){
}
try{
return new ActiveXObject("Microsoft.XMLHTTP");
}
catch(error){
}
try{
return new XMLHttpRequest();
}
catch(error){
}
return null;
};
this.replaceNodes=function(_527,_528){
};
this.parseXmlToDom=function(_529){
var _52a=null;
if(LigeoBrowserCompatability.isIe){
_52a=new ActiveXObject("Microsoft.XMLDOM");
_52a.async="false";
_52a.loadXML(_529);
}else{
try{
parser=new DOMParser();
_52a=parser.parseFromString(_529,"text/xml");
}
catch(error){
LigeoLogger.error(error);
}
}
return _52a;
};
};
dojo.provide("com.infonow.ligeo.address.LigeoAddressParser");
function LigeoAddressParser(){
};
LigeoAddressParser.myParsedAddress=null;
LigeoAddressParser.myFormToSubmit=null;
LigeoAddressParser.myResultElement=null;
LigeoAddressParser.setParsedAddress=function(_52b,_52c){
if(_52b&&_52b.indexOf("\\")>-1){
_52b=_52b.replace("\\"," ");
}
LigeoAddressParser.myParsedAddress=_52b;
var _52d=document.getElementById(_52c);
if(LigeoVarUtils.isNotNullOrEmpty(_52d)){
_52d.fullAddress.value=_52b;
}
};
LigeoAddressParser.getParsedAddress=function(){
return LigeoAddressParser.myParsedAddress;
};
LigeoAddressParser.setFormToSubmit=function(_52e){
LigeoAddressParser.myFormToSubmit=_52e;
};
LigeoAddressParser.setResultElement=function(_52f){
LigeoAddressParser.myResultElement=_52f;
};
LigeoAddressParser.parseAddress=function(_530,_531){
LigeoAddressParser.setFormToSubmit(_530);
if(_531!=null){
LigeoAddressParser.setResultElement(_531);
}
var _532=_530.fullAddress.value;
LigeoAddressParser.addHidden("userInputAddressId","userInputAddress",_532);
var _533=_530.fullAddress.value;
if(LigeoFeaturesAPI.addCountryToFullAddress){
_533=LigeoVarUtils.addCountryToFullAddress(_530);
}
if(_533!=null){
_533=LigeoAddressParser.preFixFormat(_533);
}
if(_533&&_533.indexOf("\\")>-1){
_533=_533.replace("\\"," ");
}
var map=LigeoAPI.getLigeoMap().getVEMap();
try{
results=map.Find(null,_533,null,null,0,20,false,false,false,false,LigeoAddressParser.findPlace);
}
catch(e){
LigeoAddressParser.findPlace(null,null,null,null,null);
}
return false;
};
LigeoAddressParser.findPlace=function(_535,_536,_537,_538,_539){
_537=LigeoAddressParser.filterCountries(_537);
if(LigeoLogger.isDebugEnabled()){
LigeoAddressParser.debugVeCandidates(unescape(this.Where),_537);
}
if(LigeoAddressParser.hasCandidates(_537)){
for(var i=0;i<_537.length;i++){
LigeoAddressParser.addHidden("ligeo-candidate-lat-"+i,"candidates["+i+"].coordinate.latitude",_537[i].LatLong.Latitude);
LigeoAddressParser.addHidden("ligeo-candidate-long-"+i,"candidates["+i+"].coordinate.longitude",_537[i].LatLong.Longitude);
LigeoAddressParser.addHidden("ligeo-candidate-addr-"+i,"candidates["+i+"].address.fullAddress",_537[i].Name);
}
}else{
if((_537!=null)&&(_537.length>0)){
LigeoAddressParser.addHidden("ligeo-lat","latitude",_537[0].LatLong.Latitude);
LigeoAddressParser.addHidden("ligeo-long","longitude",_537[0].LatLong.Longitude);
var _53b=LigeoAddressParser.postFixFormat(_537[0].Name);
if(LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress){
LigeoAddressParser.myFormToSubmit.fullAddress.value=_53b;
}else{
LigeoAddressParser.addHidden("correctedFullAddressId","correctedFullAddress",_53b);
}
LigeoAddressParser.setParsedAddress(_53b,null);
}else{
LigeoAddressParser.addHidden("ligeo-lat","latitude","");
LigeoAddressParser.addHidden("ligeo-long","longitude","");
}
}
if(LigeoFeaturesAPI.isSingleLineAsync){
LigeoAPI.ajaxHtmlMessages(LigeoAddressParser.myFormToSubmit,LigeoAddressParser.myResultElement);
}else{
LigeoAddressParser.myFormToSubmit.submit();
}
LigeoAddressParser.clearCandidates();
};
LigeoAddressParser.searchFromLatLon=function(_53c,_53d){
if(LigeoVarUtils.isNotNullOrEmpty(_53c)){
LigeoAddressParser.addHidden("ligeo-lat","latitude",_53c.Latitude);
LigeoAddressParser.addHidden("ligeo-long","longitude",_53c.Longitude);
var _53e="";
if(LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress){
LigeoAddressParser.myFormToSubmit.fullAddress.value=_53e;
}else{
LigeoAddressParser.addHidden("correctedFullAddressId","correctedFullAddress",_53e);
}
LigeoAddressParser.setParsedAddress(_53e,LigeoAddressParser.myFormToSubmit);
}
LigeoAPI.ajaxHtmlMessages(LigeoAddressParser.myFormToSubmit,_53d);
};
LigeoAddressParser.filterCountries=function(_53f){
if((_53f!=null)&&(_53f.length>0)){
var _540=LigeoConfigurationAPI.getCountryFilterArray();
if((_540!=null)&&(_540.length>0)){
for(var i=0;i<_540.length;i++){
var _542=_540[i];
if(_53f[0].Name==_542){
_53f=null;
return _53f;
}
}
}
}
return _53f;
};
LigeoAddressParser.clearCandidates=function(){
var _543=document.getElementById("ligeo-lat");
LigeoDOMUtils.deleteElement(_543);
_543=document.getElementById("ligeo-long");
LigeoDOMUtils.deleteElement(_543);
for(var i=0;i<20;i++){
_543=document.getElementById("ligeo-candidate-lat-"+i);
LigeoDOMUtils.deleteElement(_543);
_543=document.getElementById("ligeo-candidate-long-"+i);
LigeoDOMUtils.deleteElement(_543);
_543=document.getElementById("ligeo-candidate-addr-"+i);
LigeoDOMUtils.deleteElement(_543);
}
};
LigeoAddressParser.debugVeCandidates=function(_545,_546){
var _547=["Interpolated","Rooftop"];
var _548=["None","Good","Ambiguous","UpHierarchy","Modified"];
var _549=["High","Medium","Low"];
var _54a="Original Search: "+_545+"\n\n";
for(var i=0;LigeoVarUtils.isNotNullOrEmpty(_546)&&i<_546.length;i++){
_54a+=_546[i].Name;
_54a+="\n    Precision: "+_547[_546[i].Precision];
_54a+="\n    Match Code: "+_548[_546[i].MatchCode];
_54a+="\n    Match Confidence:"+_549[_546[i].MatchConfidence];
_54a+="\n    Score: "+_546[i].Score;
_54a+="\n\n";
}
alert(_54a);
};
LigeoAddressParser.hasCandidates=function(_54c){
var _54d=false;
if(LigeoVarUtils.isNotNullOrEmpty(_54c)&&_54c.length>1){
var _54e=0;
var _54f=0;
var _550=0;
for(var i=0;i<_54c.length;i++){
if(_54c[i].MatchConfidence==VEMatchConfidence.High){
_54e++;
}
if(_54c[i].MatchConfidence==VEMatchConfidence.Medium){
_54f++;
}
if(_54c[i].MatchConfidence==VEMatchConfidence.Low){
_550++;
}
}
if(_54e>1){
_54d=true;
}else{
if((_54e==0)&&(_54f>1)){
_54d=true;
}else{
if((_54e==0)&&(_54f==0)&&(_550>1)){
_54d=true;
}
}
}
}
return _54d;
};
LigeoAddressParser.addHidden=function(id,_553,_554){
var _555=document.getElementById(id);
if(LigeoVarUtils.isNullOrEmpty(_555)){
_555=document.createElement("input");
_555.setAttribute("type","hidden");
_555.setAttribute("name",_553);
_555.setAttribute("id",id);
}
_555.setAttribute("value",_554);
LigeoAddressParser.myFormToSubmit.appendChild(_555);
};
LigeoAddressParser.preFixFormat=function(_556){
_556=_556.replace(/\+/,"and");
_556=_556.replace(/ and /," & ");
_556=_556.replace(/ et /," & ");
_556=_556.replace(/#/," ");
return _556;
};
LigeoAddressParser.postFixFormat=function(_557){
_557=_557.replace(/\s\(.*\)/,"");
_557=_557.replace(/\s\[.*\]/,"");
_557=_557.replace(/&/,"and");
return _557;
};
dojo.provide("com.infonow.ligeo.LigeoAPI");
function LigeoAPI(){
};
LigeoAPI.ligeoAjaxService=new LigeoAjaxService();
LigeoAPI.DEFAULT_MAP_ID="ligeo-map";
LigeoAPI.RESULT_MAP_ID="ligeo-result-map";
LigeoAPI.ROUTE_MAP_ID="ligeo-route-map";
LigeoAPI.DRILL_MAP_ID="ligeo-drill-map";
LigeoAPI.DEFAULT_ROUTE_ID="ligeo-route";
LigeoAPI.myLigeoMap=null;
LigeoAPI.myLigeoMaps={};
LigeoAPI.mySkipGridSearch=false;
LigeoAPI.setLigeoMap=function(_558){
LigeoAPI.myLigeoMap=_558;
};
LigeoAPI.getLigeoMap=function(){
return LigeoAPI.myLigeoMap;
};
LigeoAPI.setCustomBalloonStyle=function(_559){
LigeoBalloon.setHtmlStyle(_559);
};
LigeoAPI.configure=function(){
};
LigeoAPI.configureResults=function(){
};
LigeoAPI.configureRoute=function(){
};
LigeoAPI.configureDrill=function(){
};
LigeoAPI.addOnLoad=function(_55a,name){
if(!name){
name="postInitialize";
}
LigeoAPI.eventAttach(name,_55a);
};
LigeoAPI.containsMapDivID=function(_55c){
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
if(LigeoConfigurationAPI.getMyMapDivIDs()[i]==_55c){
return true;
}
}
return false;
};
LigeoAPI.initialize=function(){
try{
LigeoInitializer.execute();
LigeoAPI.eventRun("postInitialize");
LigeoAPI.eventRun("postOnLoad");
LigeoAPI.eventRemove("postOnLoad");
}
catch(error){
LigeoLogger.error("Initialize caught an exception = "+error);
}
};
LigeoAPI.refresh=function(){
LigeoAPI.initialize();
};
LigeoAPI.getLigeoMapById=function(_55e){
return LigeoAPI.myLigeoMaps[_55e];
};
LigeoAPI.getDefaultMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.DEFAULT_MAP_ID);
};
LigeoAPI.getDrillMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.DRILL_MAP_ID);
};
LigeoAPI.getResultMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.RESULT_MAP_ID);
};
LigeoAPI.getRouteMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.ROUTE_MAP_ID);
};
LigeoAPI.getLigeoRoute=function(){
return LigeoAPI.getLigeoMap().getLigeoRoute();
};
LigeoAPI.setLocale=function(_55f){
alert("LigeoAPI.setLocale has been deprecated. The locale is now set by a query string in the ligeo.js script tag. If you need to override that setting, use LigeoEnvironment.setMapLocale.");
};
LigeoAPI.setMapDimensions=function(_560,_561){
LigeoAPI.getLigeoMap().setWidth(_560);
LigeoAPI.getLigeoMap().setHeight(_561);
};
LigeoAPI.setMapCenter=function(_562){
LigeoAPI.getLigeoMap().setCenter(_562);
};
LigeoAPI.addMapLocation=function(_563){
LigeoAPI.getLigeoMap().addLocation(_563);
};
LigeoAPI.setRouteTableHeaders=function(_564,_565,_566){
LigeoAPI.getLigeoMap().setRouteTableHeaders(_564,_565,_566);
};
LigeoAPI.setRouteTurnIcon=function(_567){
LigeoAPI.getLigeoMap().setRouteTurnIcon(_567);
};
LigeoAPI.addRoute=function(_568,_569){
LigeoAPI.getLigeoMap().addRoute(_568,_569);
};
LigeoAPI.setOverviewZoom=function(_56a){
var _56b=15;
if(LigeoVarUtils.isNotNullOrEmpty(_56a)){
_56a=parseInt(_56a);
if(!isNaN(_56a)){
_56b=_56a;
}
}
LigeoAPI.getLigeoMap().setOriginalZoom(_56b);
};
LigeoAPI.zoomIn=function(){
LigeoAPI.getLigeoMap().zoomIn();
};
LigeoAPI.zoomOut=function(){
LigeoAPI.getLigeoMap().zoomOut();
};
LigeoAPI.panMap=function(_56c,_56d){
LigeoAPI.getLigeoMap().pan(_56c,_56d);
};
LigeoAPI.setCenterAndZoomIn=function(_56e,_56f){
var _570=LigeoAPI.getLigeoMap().getZoomLevel()+1;
var _571=new VELatLong(_56e,_56f);
LigeoAPI.getLigeoMap().setCenterAndZoom(_571,_570);
};
LigeoAPI.setCenterAndZoomOut=function(_572,_573){
var _574=LigeoAPI.getLigeoMap().getZoomLevel()-1;
var _575=new VELatLong(_572,_573);
LigeoAPI.getLigeoMap().setCenterAndZoom(_575,_574);
};
LigeoAPI.recenterAndZoom=function(){
LigeoAPI.getLigeoMap().recenterAndZoom();
};
LigeoAPI.closeBalloon=function(){
LigeoBalloon.hide();
};
LigeoAPI.showPanel=function(_576){
LigeoBalloon.showPanel(_576);
};
LigeoAPI.ajaxHtmlMessages=function(form,_578){
try{
LigeoAPI.ligeoAjaxService.ajaxHtmlMessages(form,_578);
}
catch(error){
LigeoLogger.error(error);
}
return false;
};
LigeoAPI.DEFAULT_CSStemplateString=".display-none { display: none; }\n\n#ligeo-balloon\n{\n\tz-index: 200;\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 277px;\n\theight: 218px;\n\tfont-size: 11px;\n\tline-height: 14px;\n\tcolor: #333;\n\toverflow: hidden;\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n\n#ligeo-balloonBox\n{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\twidth: 277px;\n\theight: 218px;\n\tbackground-image: url(\"__image__server__URL__/balloonBack.gif\");\n}\n\n.ligeo-balloonBeaks\n{\n\tvisibility: hidden;\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\twidth: 277px;\n\theight: 218px;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw\n{\n\tbackground-image: url(\"__image__server__URL__/northWestBeak.gif\");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-n\n{\n\tbackground-image: url(\"__image__server__URL__/northBeak.gif\");\n\tbackground-position: 50% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-ne\n{\n\tbackground-image: url(\"__image__server__URL__/northEastBeak.gif\");\n\tbackground-position: 100% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-w\n{\n\tbackground-image: url(\"__image__server__URL__/westBeak.gif\");\n\tbackground-position: 0 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-e\n{\n\tbackground-image: url(\"__image__server__URL__/eastBeak.gif\");\n\tbackground-position: 100% 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-sw\n{\n\tbackground-image: url(\"__image__server__URL__/southWestBeak.gif\");\n\tbackground-position: 0 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-s\n{\n\tbackground-image: url(\"__image__server__URL__/southBeak.gif\");\n\tbackground-position: 50% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-se\n{\n\tbackground-image: url(\"__image__server__URL__/southEastBeak.gif\");\n\tbackground-position: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw .ligeo-nwBeak,\n.ligeo-balloonDock-n .ligeo-nBeak,\n.ligeo-balloonDock-ne .ligeo-neBeak,\n.ligeo-balloonDock-w .ligeo-wBeak,\n.ligeo-balloonDock-e .ligeo-eBeak,\n.ligeo-balloonDock-sw .ligeo-swBeak,\n.ligeo-balloonDock-s .ligeo-sBeak,\n.ligeo-balloonDock-se .ligeo-seBeak { visibility: visible; }\n\n.ligeo-nwBeak,\n.ligeo-neBeak,\n.ligeo-seBeak,\n.ligeo-swBeak\n{\n\twidth: 29px;\n\theight: 29px;\n}\n\n.ligeo-nBeak,\n.ligeo-sBeak\n{\n\twidth: 25px;\n\theight: 14px;\n\tleft: 128px;\n}\n\n.ligeo-nBeak { top: 0; }\n.ligeo-sBeak { bottom: 0; }\n\n.ligeo-eBeak,\n.ligeo-wBeak\n{\n\twidth: 14px;\n\theight: 25px;\n\ttop: 98px;\n}\n\n.ligeo-eBeak { right: 0; }\n.ligeo-wBeak { left: 0; }\n\n.ligeo-nwBeak\n{\n\ttop: 0;\n\tleft: 0;\n}\n\n.ligeo-neBeak\n{\n\ttop: 0;\n\tright: 0;\n}\n\n.ligeo-swBeak\n{\n\tbottom: 0;\n\tleft: 0;\n}\n\n.ligeo-seBeak\n{\n\tbottom: 0;\n\tright: 0;\n}\n\n#ligeo-balloonClose\n{\n\tz-index: 300;\n\tposition: absolute;\n\ttop: 25px;\n\tright: 25px;\n\tcursor: pointer;\n\twidth: 13px;\n\theight: 13px;\n\tbackground: url(\"__image__server__URL__/closeBox.gif\");\n}\n\n#ligeo-balloonTabs\n{\n\tz-index: 200;\n\tposition: absolute;\n\ttop: 17px;\n\tleft: 17px;\n\twidth: 243px;\n\theight: 30px;\n\tbackground: url(\"__image__server__URL__/tabBack.gif\") 0 0 no-repeat;\n}\n\n#ligeo-balloonTabs ul\n{\n\tlist-style: none;\n\theight: 30px;\n\tpadding-left: 8px;\n\tmargin: 0px;\n}\n\n#ligeo-balloonTabs li\n{\n\tfloat: left;\n\theight: 22px;\n\tline-height: 22px;\n\ttext-align: center;\n\tmargin: 8px 2px 0 0;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:link,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:visited\n{\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n\ttext-decoration: none;\n\tcolor: #0033CC;\n\tfont-weight: normal;\n\tline-height: 22px;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:hover { color: inherit; }\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tcolor: inherit;\n\tfont-weight: bold;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tbackground: url(\"__image__server__URL__/tabLeftOn.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabLeft.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-active\n{\n\tbackground: url(\"__image__server__URL__/tabRightOn.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabRight.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n}\n\n#ligeo-balloonPanels\n{\n\tz-index: 400;\n\theight: 135px;\n\twidth: 227px;\n\tposition: absolute;\n\ttop: 55px;\n\tleft: 30px;\n\toverflow: auto;\n}\n\n.ligeo-balloon .ligeo-balloonContentBlock address,\n.ligeo-balloon .ligeo-balloonContentBlock p,\n.ligeo-balloon .ligeo-balloonContentBlock ul\n{\n\tfont-style: normal;\n\tmargin-bottom: 10px;\n}\n\n.ligeo-balloon .ligeo-balloonContentBlock ul,\n.ligeo-balloon .ligeo-balloonContentBlock ol { padding-left: 15px; }\n.ligeo-balloonContentBlock { padding-right: 10px; }\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n/* Infonow Copyright */\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n";
LigeoAPI.CUSTOM1_CSStemplateString=".display-none { display: none; }\n\n#ligeo-balloon\n{\n\tz-index: 200;\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tpadding: 5px;\n\twidth: auto;\n\toverflow: hidden;\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n\n#ligeo-balloonBox\n{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\tbackground-image: url(\"__image__server__URL__/balloonBack.gif\");\n}\n\n.ligeo-balloonBeaks\n{\n\tvisibility: hidden;\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw\n{\n\tbackground-image: url(\"__image__server__URL__/north_west.gif\");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-n\n{\n\tbackground-image: url(\"__image__server__URL__/north.gif\");\n\tbackground-position: 50% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-ne\n{\n\tbackground-image: url(\"__image__server__URL__/north_east.gif\");\n\tbackground-position: 100% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-w\n{\n\tbackground-image: url(\"__image__server__URL__/west.gif\");\n\tbackground-position: 0 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-e\n{\n\tbackground-image: url(\"__image__server__URL__/east.gif\");\n\tbackground-position: 100% 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-sw\n{\n\tbackground-image: url(\"__image__server__URL__/south_west.gif\");\n\tbackground-position: 0 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-s\n{\n\tbackground-image: url(\"__image__server__URL__/south.gif\");\n\tbackground-position: 50% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-se\n{\n\tbackground-image: url(\"__image__server__URL__/south_east.gif\");\n\tbackground-position: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw .ligeo-nwBeak,\n.ligeo-balloonDock-n .ligeo-nBeak,\n.ligeo-balloonDock-ne .ligeo-neBeak,\n.ligeo-balloonDock-w .ligeo-wBeak,\n.ligeo-balloonDock-e .ligeo-eBeak,\n.ligeo-balloonDock-sw .ligeo-swBeak,\n.ligeo-balloonDock-s .ligeo-sBeak,\n.ligeo-balloonDock-se .ligeo-seBeak { visibility: visible; }\n\n.ligeo-nwBeak,\n.ligeo-neBeak,\n.ligeo-seBeak,\n.ligeo-swBeak\n{\n\twidth: 29px;\n\theight: 29px;\n}\n\n.ligeo-nBeak,\n.ligeo-sBeak\n{\n\twidth: 25px;\n\theight: 14px;\n\tleft: 128px;\n}\n\n.ligeo-nBeak { top: 0; }\n.ligeo-sBeak { bottom: 0; }\n\n.ligeo-eBeak,\n.ligeo-wBeak\n{\n\twidth: 14px;\n\theight: 25px;\n\ttop: 98px;\n}\n\n.ligeo-eBeak { right: 0; }\n.ligeo-wBeak { left: 0; }\n\n.ligeo-nwBeak\n{\n\ttop: 0;\n\tleft: 0;\n}\n\n.ligeo-neBeak\n{\n\ttop: 0;\n\tright: 0;\n}\n\n.ligeo-swBeak\n{\n\tbottom: 0;\n\tleft: 0;\n}\n\n.ligeo-seBeak\n{\n\tbottom: 0;\n\tright: 0;\n}\n\n#ligeo-balloonClose\n{\n\tz-index: 300;\n\tposition: absolute;\n\ttop: 25px;\n\tright: 25px;\n\tcursor: pointer;\n\twidth: 13px;\n\theight: 13px;\n\tbackground: url(\"__image__server__URL__/closeBox.gif\");\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs\n{\n\tz-index: 200;\n\tposition: absolute;\n\ttop: 17px;\n\tleft: 17px;\n\twidth: 243px;\n\theight: 30px;\n\tbackground: url(\"__image__server__URL__/tabBack.gif\") 0 0 no-repeat;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs ul\n{\n\tlist-style: none;\n\theight: 30px;\n\tpadding-left: 8px;\n\tmargin: 0px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs li\n{\n\tfloat: left;\n\theight: 22px;\n\tline-height: 22px;\n\ttext-align: center;\n\tmargin: 8px 2px 0 0;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:link,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:visited\n{\n\tfloat: left;\n\twidth: auto;\n\ttext-decoration: none;\n\tcolor: #0033CC;\n\tfont-weight: normal;\n\tline-height: 22px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:hover\n{\n\tcolor: inherit;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tcolor: inherit;\n\tfont-weight: bold;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tbackground: url(\"__image__server__URL__/tabLeftOn.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabLeft.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-active\n{\n\tbackground: url(\"__image__server__URL__/tabRightOn.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabRight.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonPanels\n{\n\tbackground: #FFF;\n\tborder: 1px solid #999;\n\tpadding: 10px;\n\theight: auto;\n\twidth: 220px;\n\t\\width: 220px;\n\tw\\idth: 220px;\n}\n\n#ligeo-balloonPanels p\n{\n\tfont-size: 11px;\n\tline-height: 15px;\n}\n\n#ligeo-balloonPanels p.locationType\n{\n\tfont-weight: bold;\n\tcolor: #C00;\n}\n\n#ligeo-balloonPanels p.actions\n{\n\tpadding: 5px 0 0 0;\n\tfont-weight: bold;\n}\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n\n";
LigeoAPI.CUSTOM2_CSStemplateString=".display-none { display: none; }\n\n#ligeo-balloon\n{\n\tz-index: 200;\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 242px;\n\tpadding: 5px;\n\toverflow: hidden;\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n\n#ligeo-balloonBox\n{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\twidth: 277px;\n\theight: 218px;\n\tbackground-image: url(\"__image__server__URL__/balloonBack.gif\");\n}\n\n.ligeo-balloonBeaks\n{\n\tvisibility: hidden;\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\twidth: 220px;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw\n{\n\tbackground-image: url(\"__image__server__URL__/north_west.gif\");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-n\n{\n\tbackground-image: url(\"__image__server__URL__/north.gif\");\n\tbackground-position: 50% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-ne\n{\n\tbackground-image: url(\"__image__server__URL__/north_east.gif\");\n\tbackground-position: 100% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-w\n{\n\tbackground-image: url(\"__image__server__URL__/west.gif\");\n\tbackground-position: 0 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-e\n{\n\tbackground-image: url(\"__image__server__URL__/east.gif\");\n\tbackground-position: 100% 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-sw\n{\n\tbackground-image: url(\"__image__server__URL__/south_west.gif\");\n\tbackground-position: 0 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-s\n{\n\tbackground-image: url(\"__image__server__URL__/south.gif\");\n\tbackground-position: 50% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-se\n{\n\tbackground-image: url(\"__image__server__URL__/south_east.gif\");\n\tbackground-position: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw .ligeo-nwBeak,\n.ligeo-balloonDock-n .ligeo-nBeak,\n.ligeo-balloonDock-ne .ligeo-neBeak,\n.ligeo-balloonDock-w .ligeo-wBeak,\n.ligeo-balloonDock-e .ligeo-eBeak,\n.ligeo-balloonDock-sw .ligeo-swBeak,\n.ligeo-balloonDock-s .ligeo-sBeak,\n.ligeo-balloonDock-se .ligeo-seBeak { visibility: visible; }\n\n.ligeo-nwBeak,\n.ligeo-neBeak,\n.ligeo-seBeak,\n.ligeo-swBeak\n{\n\twidth: 29px;\n\theight: 29px;\n}\n\n.ligeo-nBeak,\n.ligeo-sBeak\n{\n\twidth: 25px;\n\theight: 14px;\n\tleft: 128px;\n}\n\n.ligeo-nBeak { top: 0; }\n.ligeo-sBeak { bottom: 0; }\n\n.ligeo-eBeak,\n.ligeo-wBeak\n{\n\twidth: 14px;\n\theight: 25px;\n\ttop: 98px;\n}\n\n.ligeo-eBeak { right: 0; }\n.ligeo-wBeak { left: 0; }\n\n.ligeo-nwBeak\n{\n\ttop: 0;\n\tleft: 0;\n}\n\n.ligeo-neBeak\n{\n\ttop: 0;\n\tright: 0;\n}\n\n.ligeo-swBeak\n{\n\tbottom: 0;\n\tleft: 0;\n}\n\n.ligeo-seBeak\n{\n\tbottom: 0;\n\tright: 0;\n}\n\n#ligeo-balloonClose\n{\n\tz-index: 300;\n\tposition: absolute;\n\ttop: 25px;\n\tright: 25px;\n\tcursor: pointer;\n\twidth: 13px;\n\theight: 13px;\n\tbackground: url(\"__image__server__URL__/closeBox.gif\");\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs\n{\n\tz-index: 200;\n\tposition: absolute;\n\ttop: 17px;\n\tleft: 17px;\n\twidth: 243px;\n\theight: 30px;\n\tbackground: url(\"__image__server__URL__/tabBack.gif\") 0 0 no-repeat;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs ul\n{\n\tlist-style: none;\n\theight: 30px;\n\tpadding-left: 8px;\n\tmargin: 0px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs li\n{\n\tfloat: left;\n\theight: 22px;\n\tline-height: 22px;\n\ttext-align: center;\n\tmargin: 8px 2px 0 0;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:link,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:visited\n{\n\tfloat: left;\n\twidth: auto;\n\ttext-decoration: none;\n\tcolor: #0033CC;\n\tfont-weight: normal;\n\tline-height: 22px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:hover\n{\n\tcolor: inherit;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tcolor: inherit;\n\tfont-weight: bold;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tbackground: url(\"__image__server__URL__/tabLeftOn.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabLeft.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-active\n{\n\tbackground: url(\"__image__server__URL__/tabRightOn.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabRight.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonPanels\n{\n\tbackground: #FFF;\n\tborder: 1px solid #999;\n\tpadding: 10px;\n\theight: auto;\n\twidth: 220px;\n}\n\n#ligeo-balloonPanels p\n{\n\tfont-size: 11px;\n\tline-height: 15px;\n}\n\n#ligeo-balloonPanels p.locationType\n{\n\tfont-weight: bold;\n\tcolor: #C00;\n}\n\n#ligeo-balloonPanels p.actions\n{\n\tpadding: 5px 0 0 0;\n\tfont-weight: bold;\n}\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n/* Infonow Copyright */\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n";
LigeoAPI.renderCSSStyles=function(){
var _579=LigeoAPI.DEFAULT_CSStemplateString;
var _57a=LigeoBalloon.getHtmlStyle();
if(_57a=="CUSTOM1"){
_579=LigeoAPI.CUSTOM1_CSStemplateString;
}else{
if(_57a=="CUSTOM2"){
_579=LigeoAPI.CUSTOM2_CSStemplateString;
}
}
_579=_579.replace(/__image__server__URL__/g,LigeoEnvironment.getImageServer()+"mapimages");
dojo.html.insertCssText(_579);
};
LigeoAPI.showLocation=function(_57b){
var _57c=LigeoAPI.getLigeoMap().myLocations[_57b];
if(typeof _57c=="object"){
_57c.getVEShape().Show();
}
};
LigeoAPI.hideLocation=function(_57d){
var _57e=LigeoAPI.getLigeoMap().myLocations[_57d];
if(typeof _57e=="object"){
_57e.getVEShape().Hide();
}
};
LigeoAPI.print=function(_57f){
window.print();
};
LigeoAPI.freezeMap=function(_580){
for(var _581 in LigeoAPI.myLigeoMaps){
LigeoAPI.myLigeoMaps[_581].setFrozen(_580);
}
};
LigeoAPI.skipGridSearch=function(_582){
LigeoAPI.mySkipGridSearch=_582;
};
LigeoAPI.fixNavMapStyles=function(){
LigeoAPI.getLigeoMap().fixNavMapStyles("fromAPI");
};
LigeoAPI.setZoomLevelStatus=function(_583){
var map=LigeoAPI.getLigeoMap();
var _585=document.getElementById(_583);
if((map!=null)&&(_585!=null)){
var _586=map.getZoomLevel();
var _587=19;
var _588=map.getVEMap().GetMapStyle();
if(_588==VEMapStyle.Birdseye){
_587=2;
}
var perc=Math.round(_586/_587*100);
_585.innerHTML=perc;
}
};
LigeoAPI.isShowTraffic=function(){
return LigeoAPI.getLigeoMap().isShowTraffic();
};
LigeoAPI.toggleTraffic=function(){
LigeoAPI.getLigeoMap().toggleTraffic();
};
LigeoAPI.eventList=new Array();
LigeoAPI.eventAttach=function(name,fun){
if(!name){
alert("Error calling LigeoAPI.eventAttach with invalid name");
return;
}
if(!fun){
alert("Error calling LigeoAPI.eventAttach with invalid function");
return;
}
eventObject=function(name,_58d){
this.name=name;
this.fun=_58d;
};
LigeoAPI.eventList[LigeoAPI.eventList.length]=new eventObject(name,fun);
};
LigeoAPI.eventRun=function(name){
for(var i=0;i<LigeoAPI.eventList.length;i++){
if(!LigeoAPI.eventList[i]||!LigeoAPI.eventList[i].fun){
LigeoLogger.error("LigeoAPI.eventRun warning, cannot run event "+i);
}else{
if(LigeoAPI.eventList[i].name==name){
LigeoAPI.eventList[i].fun();
}
}
}
};
LigeoAPI.eventPrint=function(){
for(var i=0;i<LigeoAPI.eventList.length;i++){
if(LigeoAPI.eventList[i]){
LigeoLogger.error("LigeoAPI.eventPrint name="+LigeoAPI.eventList[i].name+" function="+LigeoAPI.eventList[i].fun);
}
}
};
LigeoAPI.eventRemove=function(name){
for(var i=0;i<LigeoAPI.eventList.length;i++){
if(LigeoAPI.eventList[i]&&LigeoAPI.eventList[i].name==name){
LigeoAPI.eventList[i]=null;
}
}
};
dojo.addOnLoad(LigeoAPI.initialize);
dojo.addOnLoad(LigeoAPI.renderCSSStyles);
dojo.kwCompoundRequire({common:["com.infonow.ligeo.LigeoAPI","com.infonow.ligeo.LigeoFeaturesAPI","com.infonow.ligeo.LigeoLocation"]});
dojo.provide("com.infonow.ligeo.*");

