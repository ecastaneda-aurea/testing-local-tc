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
dojo.version={major:0,minor:0,patch:0,flag:"dev",revision:Number("$Rev: 8617 $".match(/[0-9]+/)[0]),toString:function(){
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
dojo.provide("com.infonow.ligeo.util.LigeoDOMUtils");
function LigeoDOMUtils(){
};
LigeoDOMUtils.displayType_none=0;
LigeoDOMUtils.displayType_block=1;
LigeoDOMUtils.displayType_inline=2;
LigeoDOMUtils.setElementStyleDisplay=function(_ee,_ef){
if(LigeoVarUtils.isNull(_ee)){
return;
}
var _f0=null;
switch(_ef){
case 0:
_f0="none";
break;
case 1:
_f0="block";
break;
case 2:
_f0="inline";
break;
}
if(LigeoVarUtils.isNotNullOrEmpty(_f0)){
_ee.style.display=_f0;
}
};
LigeoDOMUtils.setElementStyleDisplayToBlock=function(_f1){
LigeoDOMUtils.setElementStyleDisplay(_f1,LigeoDOMUtils.displayType_block);
};
LigeoDOMUtils.setElementStyleDisplayToNone=function(_f2){
LigeoDOMUtils.setElementStyleDisplay(_f2,LigeoDOMUtils.displayType_none);
};
LigeoDOMUtils.renderHtmlElementIfNew=function(_f3){
if(LigeoVarUtils.isNotNull(document.body)&&LigeoVarUtils.isNotNull(_f3)){
var id=_f3.getAttribute("id");
if(LigeoVarUtils.isNullOrEmpty(id)){
document.body.appendChild(_f3);
}else{
var _f5=document.getElementById(id);
if(LigeoVarUtils.isNull(_f5)){
document.body.appendChild(_f3);
}
}
}
};
LigeoDOMUtils.insertAdjacentElement=function(_f6,_f7,_f8){
switch(_f6){
case "beforeBegin":
_f8.parentNode.insertBefore(_f7,_f8);
break;
case "afterBegin":
_f8.insertBefore(_f7,_f8.firstChild);
break;
case "beforeEnd":
_f8.appendChild(_f7);
break;
case "afterEnd":
if(_f8.nextSibling){
_f8.parentNode.insertBefore(_f7,_f8.nextSibling);
}else{
_f8.parentNode.appendChild(_f7);
}
break;
}
};
LigeoDOMUtils.insertAdjacentHTML=function(_f9,_fa,_fb){
if(typeof _fb!="undefined"){
var _fc;
if(!LigeoBrowserCompatability.isIe()){
var r=_fb.ownerDocument.createRange();
r.setStartBefore(_fb);
_fc=r.createContextualFragment(_fa);
LigeoDOMUtils.insertAdjacentElement(_f9,_fc,_fb);
}else{
_fc=_fb.ownerDocument.createElement(_fa);
_fb.insertAdjacentElement("afterEnd",_fc);
}
}
};
LigeoDOMUtils.addOnLoadEvent=function(_fe){
var _ff=window.onload;
if(typeof window.onload!="function"){
window.onload=_fe;
}else{
window.onload=function(){
if(_ff){
_ff();
}
_fe();
};
}
};
LigeoDOMUtils.checkParentObject=function(_100,_101){
var _102=_100.parentNode;
while(_102){
if(_102.id==_101.id){
return true;
}
_102=_102.parentNode;
}
return false;
};
LigeoDOMUtils.getElementsById=function(_103,_104){
var _105=new Array();
if((typeof (_103)!="string")||LigeoVarUtils.isNullOrEmpty(_103)){
return null;
}
if(LigeoVarUtils.isNotNullOrEmpty(_104)){
_104=document.getElementById(_104);
}else{
_104=document;
}
if(document.all){
var _106=document.all[_103];
if(_106!=null){
if(_106.length==null){
if(this.checkParentObject(_106,_104)){
_105[0]=_106;
}
}else{
for(i=0;i<_106.length;i++){
if(this.checkParentObject(_106[i],_104)){
_105.push(_106[i]);
}
}
}
}
}else{
if(document.evaluate){
var _107="//*[@id='"+_103.toString()+"']";
var _108=document.evaluate(_107,_104,null,0,null);
var _109=_108.iterateNext();
while(_109){
if(this.checkParentObject(_109,_104)){
_105[_105.length]=_109;
}
_109=_108.iterateNext();
}
}else{
if(document.getElementsByTagName){
var _10a=document.getElementsByTagName("*");
for(i=0;i<_10a.length;i++){
if(_10a[i].id==_103){
_105.push(_10a[i]);
}
}
}
}
}
if(_105.length>0){
return _105;
}else{
return null;
}
};
LigeoDOMUtils.deleteElement=function(_10b){
if(LigeoVarUtils.isNotNullOrEmpty(_10b)){
_10b.parentNode.removeChild(_10b);
}
};
LigeoDOMUtils.tempFormId="tempClientErrorLoggingForm";
LigeoDOMUtils.tempDivId="tempClientErrorLoggingDiv";
LigeoDOMUtils.createTempFormForAjaxPostPurposes=function(_10c){
var _10d=document.getElementById(LigeoDOMUtils.tempFormId);
if(LigeoVarUtils.isNotNullOrEmpty(_10d)){
return _10d;
}
var _10e=document.createElement("FORM");
_10e.id=LigeoDOMUtils.tempFormId;
_10e.action=_10c;
_10e.method="post";
document.body.appendChild(_10e);
return _10e;
};
LigeoDOMUtils.createTempDivForAjaxPostPurposes=function(){
var _10f=document.getElementById(LigeoDOMUtils.tempDivId);
if(LigeoVarUtils.isNotNullOrEmpty(_10f)){
return _10f;
}
var _110=document.createElement("DIV");
_110.id=LigeoDOMUtils.tempDivId;
_110.style.display="none";
document.body.appendChild(_110);
return _110;
};
LigeoDOMUtils.removeTempFormForAjaxPostPurposes=function(){
var _111=document.getElementById(LigeoDOMUtils.tempFormId);
if(LigeoVarUtils.isNotNullOrEmpty(_111)){
document.body.removeChild(_111);
}else{
LigeoLogger.error("removeTempFormForAjaxPostPurposes unexpected NullOrEmpty form id="+LigeoDOMUtils.tempFormId);
}
};
LigeoDOMUtils.addNewHiddenInputToTempForm=function(id,name,_114,_115){
var _116=document.createElement("INPUT");
if(LigeoVarUtils.isNotNullOrEmpty(id)){
_116.id=id+"Id";
}
_116.name=name;
_116.type="hidden";
_116.value=_114;
if(LigeoVarUtils.isNotNullOrEmpty(_115)){
_115.appendChild(_116);
}else{
LigeoLogger.error("addNewHiddenInputToForm unexpected NullOrEmpty form id="+LigeoDOMUtils.tempFormId);
}
};
LigeoDOMUtils.getSumParentNodeOffset=function(_117,_118,_119){
var _11a=0;
if(_119){
_11a=parseInt(_117.offsetTop);
for(var i=0;i<_118;i++){
_117=_117.parentNode;
if(LigeoVarUtils.isNull(_117)){
return _11a;
}
_11a+=parseInt(_117.offsetTop);
}
}else{
_11a=parseInt(_117.offsetLeft);
for(var i=0;i<_118;i++){
_117=_117.parentNode;
if(LigeoVarUtils.isNull(_117)){
return _11a;
}
_11a+=parseInt(_117.offsetLeft);
}
}
return _11a;
};
dojo.provide("com.infonow.ligeo.util.LigeoVarUtils");
function LigeoVarUtils(){
};
LigeoVarUtils.isVirtualEarthLoaded=function(_11c){
var _11d=(typeof VEMap=="function");
if(!_11d){
var date=new Date();
var _11f=null;
var _120=100;
var _121=new Date();
do{
_11f=new Date();
if((_11f-_121)>_120){
_11d=(typeof VEMap=="function");
_121=new Date();
}
if(_11d){
break;
}
}while((_11f-date)<_11c);
}
return _11d;
};
LigeoVarUtils.isNull=function(_122){
return ((_122===undefined)||(_122===null));
};
LigeoVarUtils.isNotNull=function(_123){
return !LigeoVarUtils.isNull(_123);
};
LigeoVarUtils.isNullOrEmpty=function(_124){
return ((_124===undefined)||(_124===null)||(_124===""));
};
LigeoVarUtils.isNotNullOrEmpty=function(_125){
return !LigeoVarUtils.isNullOrEmpty(_125);
};
LigeoVarUtils.isFunction=function(_126){
return "function"==typeof _126;
};
LigeoVarUtils.appendToDelimitedString=function(_127,_128,_129){
if(!LigeoVarUtils.isNullOrEmpty(_128)){
if(!LigeoVarUtils.isNullOrEmpty(_127)){
_127+=_129;
}
_127+=_128;
}
return _127;
};
LigeoVarUtils.getAssociativeArrayLength=function(_12a){
var _12b=0;
for(var i in _12a){
_12b++;
}
return _12b;
};
LigeoVarUtils.ShowOnMouseOver=function(_12d){
if(_12d.style){
_12d.style.display="block";
}
};
LigeoVarUtils.HideOnMouseOut=function(_12e,evt){
if(LigeoVarUtils.DidMouseLeave(_12e,evt)){
if(_12e.style){
LigeoDOMUtils.setElementStyleDisplayToNone(_12e);
}
}
};
LigeoVarUtils.DidMouseLeave=function(_130,evt){
if((typeof evt.toElement!="undefined")&&(typeof _130.contains!="undefined")){
return (evt.x<_130.style.left||evt.x>_130.style.right||evt.y<_130.style.top||evt.y>_130.style.bottom);
}else{
if((typeof evt.relatedTarget!="undefined")&&evt.relatedTarget){
while(evt.relatedTarget){
if(_130==evt.relatedTarget){
return false;
}
evt.relatedTarget=evt.relatedTarget.parentNode;
}
return true;
}
}
return false;
};
LigeoVarUtils.camelize=function(_132){
var _133=_132.split("-"),len=_133.length;
if(len==1){
return _133[0];
}
var _135=_132.charAt(0)=="-"?_133[0].charAt(0).toUpperCase()+_133[0].substring(1):_133[0];
for(var i=1;i<len;i++){
_135+=_133[i].charAt(0).toUpperCase()+_133[i].substring(1);
}
return _135;
};
LigeoVarUtils.getStyle=function(_137,_138){
_138=_138=="float"?"cssFloat":LigeoVarUtils.camelize(_138);
var _139=_137.style[_138];
if(!_139){
var css=document.defaultView.getComputedStyle(_137,null);
_139=css?css[_138]:null;
}
if(_138=="opacity"){
return _139?parseFloat(_139):1;
}
return _139=="auto"?null:_139;
};
LigeoVarUtils.getDimensions=function(_13b,_13c){
var _13d=LigeoVarUtils.getStyle(_13b,"display");
if((_13d!="none")&&(_13d!=null)){
if(_13c=="width"){
return _13b.offsetWidth;
}else{
return _13b.offsetHeight;
}
}
var els=_13b.style;
var _13f=els.visibility;
var _140=els.position;
var _141=els.display;
els.visibility="hidden";
els.position="absolute";
els.display="block";
var _142=_13b.clientWidth;
var _143=_13b.clientHeight;
els.display=_141;
els.position=_140;
els.visibility=_13f;
if(_13c=="width"){
return _142;
}else{
return _143;
}
};
LigeoVarUtils.getElementHeight=function(_144){
var elem;
if(document.getElementById){
elem=document.getElementById(_144);
}else{
if(document.all){
elem=document.all[_144];
}
}
return LigeoVarUtils.getDimensions(elem,"height");
};
LigeoVarUtils.getElementWidth=function(_146){
var elem;
if(document.getElementById){
elem=document.getElementById(_146);
}else{
if(document.all){
elem=document.all[_146];
}
}
return LigeoVarUtils.getDimensions(elem,"width");
};
LigeoVarUtils.addCountryToFullAddress=function(form){
var _149=form.fullAddress.value;
var _14a=form.country.value;
if(!LigeoVarUtils.isWholeWordInString(_14a,_149)){
return _149+", "+_14a;
}
return _149;
};
LigeoVarUtils.isWholeWordInString=function(_14b,_14c){
var _14d=0;
var _14e=-1;
while(_14d!=-1){
_14d=_14c.toUpperCase().indexOf(_14b.toUpperCase(),_14e+1);
_14e=_14d;
var _14f=_14c.substring(_14e-1,_14c.length+1);
if(LigeoVarUtils.isNotNullOrEmpty(_14b)&&LigeoVarUtils.isNotNullOrEmpty(_14f)){
if(_14f.toUpperCase().indexOf(_14b.toUpperCase())!=-1){
var _150=_14f.toUpperCase().indexOf(_14b.toUpperCase());
var end=_14f.toUpperCase().indexOf(_14b.toUpperCase())+_14b.length;
var _152=_14f.charAt(_150-1);
var _153=_14f.charAt(end);
if(!LigeoVarUtils.isAlphanumeric(_152)||!LigeoVarUtils.isAlphanumeric(_153)){
return true;
}
}
}
}
return false;
};
LigeoVarUtils.isAlphanumeric=function(_154){
var _155="0123456789";
var _156="abcdefghijklmnopqrstuvwxyz";
var _157="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var _158=_155+_156+_157;
if(_154==""){
return true;
}
for(i=0;i<_154.length;i++){
if(_158.indexOf(_154.charAt(i),0)==-1){
return false;
}
}
return true;
};
LigeoVarUtils.URLEncode=function(_159){
encodedHtml=encodeURIComponent(_159);
encodedHtml=encodedHtml.replace(/\//g,"%2F");
encodedHtml=encodedHtml.replace(/\?/g,"%3F");
encodedHtml=encodedHtml.replace(/=/g,"%3D");
encodedHtml=encodedHtml.replace(/&/g,"%26");
encodedHtml=encodedHtml.replace(/\+/g,"%2B");
encodedHtml=encodedHtml.replace(/@/g,"%40");
return encodedHtml;
};
dojo.provide("com.infonow.ligeo.map.LigeoInfoPanel");
function LigeoInfoPanel(_15a,_15b,_15c){
this.setContent(_15a);
this.setLabel(_15b);
this.setUniqueId(_15c);
this.myPanelHtmlElement=null;
};
LigeoInfoPanel.prototype.getContent=function(){
return this.myContent;
};
LigeoInfoPanel.prototype.setContent=function(_15d){
if(LigeoVarUtils.isNotNull(_15d)){
this.myContent=_15d;
}else{
this.myContent="";
}
};
LigeoInfoPanel.prototype.getLabel=function(){
return this.myLabel;
};
LigeoInfoPanel.prototype.setLabel=function(_15e){
if(LigeoVarUtils.isNotNull(_15e)){
this.myLabel=_15e;
}else{
this.myLabel="";
}
};
LigeoInfoPanel.prototype.getUniqueId=function(){
return this.myUniqueId;
};
LigeoInfoPanel.prototype.setUniqueId=function(_15f){
if(LigeoVarUtils.isNotNull(_15f)){
this.myUniqueId=_15f;
}else{
this.myUniqueId="";
}
};
LigeoInfoPanel.prototype.renderHtmlElement=function(_160){
if(LigeoVarUtils.isNotNull(_160)){
this.myPanelHtmlElement=document.createElement("DIV");
this.myPanelHtmlElement["id"]="LigeoInfoPanel-"+this.getUniqueId();
this.myPanelHtmlElement.style.display="none";
this.myPanelHtmlElement.innerHTML=this.myContent;
_160.appendChild(this.myPanelHtmlElement);
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
var _162=id;
var _163=0;
var _164=null;
var _165=null;
var _166="";
var _167="";
var _168="";
var _169="";
var _16a="";
var _16b="";
var _16c="";
var _16d="";
var _16e="";
var _16f="";
var _170="";
var _171="";
var _172="";
var _173="";
var _174="";
var _175="";
var _176="";
var _177="";
var _178="";
var _179="";
var _17a="";
var _17b="";
var _17c="";
var _17d=new Object();
var _17e=null;
this.getUniqueId=function(){
return _162;
};
this.setUniqueId=function(_17f){
_162=_17f;
};
this.getLocationNumber=function(){
return _163;
};
this.setLocationNumber=function(_180){
_163=_180;
};
this.getLatitude=function(){
return _164;
};
this.setLatitude=function(_181){
_164=_181;
};
this.getLongitude=function(){
return _165;
};
this.setLongitude=function(_182){
_165=_182;
};
this.getName=function(){
return _166;
};
this.setName=function(name){
_166=name;
};
this.getStreet1=function(){
return _167;
};
this.setStreet1=function(_184){
_167=_184;
};
this.getStreet2=function(){
return _168;
};
this.setStreet2=function(_185){
_168=_185;
};
this.getStreet3=function(){
return _169;
};
this.setStreet3=function(_186){
_169=_186;
};
this.getPostalCode=function(){
return _16a;
};
this.setPostalCode=function(_187){
_16a=_187;
};
this.getCity=function(){
return _16b;
};
this.setCity=function(city){
_16b=city;
};
this.getCounty=function(){
return _16c;
};
this.setCounty=function(_189){
_16c=_189;
};
this.getStateProvince=function(){
return _16d;
};
this.setStateProvince=function(_18a){
_16d=_18a;
};
this.getCountryIso2=function(){
return _16e;
};
this.setCountryIso2=function(_18b){
_16e=_18b;
};
this.getPhone1=function(){
return _16f;
};
this.setPhone1=function(_18c){
_16f=_18c;
};
this.getPhone2=function(){
return _170;
};
this.setPhone2=function(_18d){
_170=_18d;
};
this.getFax=function(){
return _171;
};
this.setFax=function(fax){
_171=fax;
};
this.getIconUrl=function(){
return _172;
};
this.setIconUrl=function(_18f){
_172=_18f;
};
this.getPreviousMapIconUrl=function(){
return _179;
};
this.setPreviousMapIconUrl=function(_190){
_179=_190;
};
this.getPreviousTableIconUrl=function(){
return _17a;
};
this.setPreviousTableIconUrl=function(_191){
_17a=_191;
};
this.getMapRedIconUrl=function(){
return _173;
};
this.setMapRedIconUrl=function(_192){
_173=_192;
};
this.getMapBlackIconUrl=function(){
return _174;
};
this.setMapBlackIconUrl=function(_193){
_174=_193;
};
this.getMapGrayIconUrl=function(){
return _175;
};
this.setMapGrayIconUrl=function(_194){
_175=_194;
};
this.getTableRedIconUrl=function(){
return _176;
};
this.setTableRedIconUrl=function(_195){
_176=_195;
};
this.getTableBlackIconUrl=function(){
return _177;
};
this.setTableBlackIconUrl=function(_196){
_177=_196;
};
this.getTableGrayIconUrl=function(){
return _178;
};
this.setTableGrayIconUrl=function(_197){
_178=_197;
};
this.getLinkUrl=function(){
return _17b;
};
this.setLinkUrl=function(_198){
_17b=_198;
};
this.getLinkScript=function(){
return _17c;
};
this.setLinkScript=function(_199){
_17c=_199;
};
this.getInfoPanel=function(_19a){
return _17d[_19a];
};
this.getAllInfoPanels=function(){
return _17d;
};
this.getDefaultInfoPanel=function(){
for(var i in _17d){
return _17d[i];
}
};
this.setBalloonContent=function(_19c,_19d){
_17d=new Object();
this.addBalloonContent(_19c,_19d);
};
this.addBalloonContent=function(_19e,_19f){
var _1a0=_162+"-"+LigeoVarUtils.getAssociativeArrayLength(_17d);
_17d[_1a0]=new LigeoInfoPanel(_19e,_19f,_1a0);
};
this.getVEShape=function(){
var _1a1;
var _1a2;
if(LigeoVarUtils.isNotNull(_17e)){
_1a1=_17e;
}else{
_1a1=new VEShape(VEShapeType.Pushpin,this.getVELatLong());
_1a1.SetCustomIcon(LigeoEnvironment.getImagePath(this.getIconUrl()));
_17e=_1a1;
}
return _1a1;
};
this.getVELatLong=function(){
return new VELatLong(_164,_165);
};
this.getAddressNoCountryString=function(){
var _1a3="";
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_167,", ");
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_168,", ");
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_169,", ");
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_16b,", ");
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_16c,", ");
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_16d,", ");
_1a3=LigeoVarUtils.appendToDelimitedString(_1a3,_16a,", ");
return _1a3;
};
this.getAddressString=function(){
var _1a4=this.getAddressNoCountryString();
_1a4=LigeoVarUtils.appendToDelimitedString(_1a4,_16e,", ");
return _1a4;
};
this.hasBalloonContent=function(){
var _1a5=false;
for(var i in _17d){
if(!LigeoVarUtils.isFunction(_17d[i])){
if(LigeoVarUtils.isNotNull(_17d[i].getContent())){
_1a5=true;
}
}
}
return _1a5;
};
};
dojo.provide("dojo.uri.Uri");
dojo.uri=new function(){
this.dojoUri=function(uri){
return new dojo.uri.Uri(dojo.hostenv.getBaseScriptUri(),uri);
};
this.moduleUri=function(_1a8,uri){
var loc=dojo.hostenv.getModuleSymbols(_1a8).join("/");
if(!loc){
return null;
}
if(loc.lastIndexOf("/")!=loc.length-1){
loc+="/";
}
var _1ab=loc.indexOf(":");
var _1ac=loc.indexOf("/");
if(loc.charAt(0)!="/"&&(_1ab==-1||_1ab>_1ac)){
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
var _1af=new dojo.uri.Uri(arguments[i].toString());
var _1b0=new dojo.uri.Uri(uri.toString());
if((_1af.path=="")&&(_1af.scheme==null)&&(_1af.authority==null)&&(_1af.query==null)){
if(_1af.fragment!=null){
_1b0.fragment=_1af.fragment;
}
_1af=_1b0;
}else{
if(_1af.scheme==null){
_1af.scheme=_1b0.scheme;
if(_1af.authority==null){
_1af.authority=_1b0.authority;
if(_1af.path.charAt(0)!="/"){
var path=_1b0.path.substring(0,_1b0.path.lastIndexOf("/")+1)+_1af.path;
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
_1af.path=segs.join("/");
}
}
}
}
uri="";
if(_1af.scheme!=null){
uri+=_1af.scheme+":";
}
if(_1af.authority!=null){
uri+="//"+_1af.authority;
}
uri+=_1af.path;
if(_1af.query!=null){
uri+="?"+_1af.query;
}
if(_1af.fragment!=null){
uri+="#"+_1af.fragment;
}
}
this.uri=uri.toString();
var _1b4="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$";
var r=this.uri.match(new RegExp(_1b4));
this.scheme=r[2]||(r[1]?"":null);
this.authority=r[4]||(r[3]?"":null);
this.path=r[5];
this.query=r[7]||(r[6]?"":null);
this.fragment=r[9]||(r[8]?"":null);
if(this.authority!=null){
_1b4="^((([^:]+:)?([^@]+))@)?([^:]*)(:([0-9]+))?$";
r=this.authority.match(new RegExp(_1b4));
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
dojo.lang.inherits=function(_1b6,_1b7){
if(!dojo.lang.isFunction(_1b7)){
dojo.raise("dojo.inherits: superclass argument ["+_1b7+"] must be a function (subclass: ["+_1b6+"']");
}
_1b6.prototype=new _1b7();
_1b6.prototype.constructor=_1b6;
_1b6.superclass=_1b7.prototype;
_1b6["super"]=_1b7.prototype;
};
dojo.lang._mixin=function(obj,_1b9){
var tobj={};
for(var x in _1b9){
if((typeof tobj[x]=="undefined")||(tobj[x]!=_1b9[x])){
obj[x]=_1b9[x];
}
}
if(dojo.render.html.ie&&(typeof (_1b9["toString"])=="function")&&(_1b9["toString"]!=obj["toString"])&&(_1b9["toString"]!=tobj["toString"])){
obj.toString=_1b9.toString;
}
return obj;
};
dojo.lang.mixin=function(obj,_1bd){
for(var i=1,l=arguments.length;i<l;i++){
dojo.lang._mixin(obj,arguments[i]);
}
return obj;
};
dojo.lang.extend=function(_1c0,_1c1){
for(var i=1,l=arguments.length;i<l;i++){
dojo.lang._mixin(_1c0.prototype,arguments[i]);
}
return _1c0;
};
dojo.inherits=dojo.lang.inherits;
dojo.mixin=dojo.lang.mixin;
dojo.extend=dojo.lang.extend;
dojo.lang.find=function(_1c4,_1c5,_1c6,_1c7){
if(!dojo.lang.isArrayLike(_1c4)&&dojo.lang.isArrayLike(_1c5)){
dojo.deprecated("dojo.lang.find(value, array)","use dojo.lang.find(array, value) instead","0.5");
var temp=_1c4;
_1c4=_1c5;
_1c5=temp;
}
var _1c9=dojo.lang.isString(_1c4);
if(_1c9){
_1c4=_1c4.split("");
}
if(_1c7){
var step=-1;
var i=_1c4.length-1;
var end=-1;
}else{
var step=1;
var i=0;
var end=_1c4.length;
}
if(_1c6){
while(i!=end){
if(_1c4[i]===_1c5){
return i;
}
i+=step;
}
}else{
while(i!=end){
if(_1c4[i]==_1c5){
return i;
}
i+=step;
}
}
return -1;
};
dojo.lang.indexOf=dojo.lang.find;
dojo.lang.findLast=function(_1cd,_1ce,_1cf){
return dojo.lang.find(_1cd,_1ce,_1cf,true);
};
dojo.lang.lastIndexOf=dojo.lang.findLast;
dojo.lang.inArray=function(_1d0,_1d1){
return dojo.lang.find(_1d0,_1d1)>-1;
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
var _1dd=dojo.doc();
do{
var id="dj_unique_"+(++arguments.callee._idIncrement);
}while(_1dd.getElementById(id));
return id;
};
dojo.dom.getUniqueId._idIncrement=0;
dojo.dom.firstElement=dojo.dom.getFirstChildElement=function(_1df,_1e0){
var node=_1df.firstChild;
while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE){
node=node.nextSibling;
}
if(_1e0&&node&&node.tagName&&node.tagName.toLowerCase()!=_1e0.toLowerCase()){
node=dojo.dom.nextElement(node,_1e0);
}
return node;
};
dojo.dom.lastElement=dojo.dom.getLastChildElement=function(_1e2,_1e3){
var node=_1e2.lastChild;
while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE){
node=node.previousSibling;
}
if(_1e3&&node&&node.tagName&&node.tagName.toLowerCase()!=_1e3.toLowerCase()){
node=dojo.dom.prevElement(node,_1e3);
}
return node;
};
dojo.dom.nextElement=dojo.dom.getNextSiblingElement=function(node,_1e6){
if(!node){
return null;
}
do{
node=node.nextSibling;
}while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE);
if(node&&_1e6&&_1e6.toLowerCase()!=node.tagName.toLowerCase()){
return dojo.dom.nextElement(node,_1e6);
}
return node;
};
dojo.dom.prevElement=dojo.dom.getPreviousSiblingElement=function(node,_1e8){
if(!node){
return null;
}
if(_1e8){
_1e8=_1e8.toLowerCase();
}
do{
node=node.previousSibling;
}while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE);
if(node&&_1e8&&_1e8.toLowerCase()!=node.tagName.toLowerCase()){
return dojo.dom.prevElement(node,_1e8);
}
return node;
};
dojo.dom.moveChildren=function(_1e9,_1ea,trim){
var _1ec=0;
if(trim){
while(_1e9.hasChildNodes()&&_1e9.firstChild.nodeType==dojo.dom.TEXT_NODE){
_1e9.removeChild(_1e9.firstChild);
}
while(_1e9.hasChildNodes()&&_1e9.lastChild.nodeType==dojo.dom.TEXT_NODE){
_1e9.removeChild(_1e9.lastChild);
}
}
while(_1e9.hasChildNodes()){
_1ea.appendChild(_1e9.firstChild);
_1ec++;
}
return _1ec;
};
dojo.dom.copyChildren=function(_1ed,_1ee,trim){
var _1f0=_1ed.cloneNode(true);
return this.moveChildren(_1f0,_1ee,trim);
};
dojo.dom.replaceChildren=function(node,_1f2){
var _1f3=[];
if(dojo.render.html.ie){
for(var i=0;i<node.childNodes.length;i++){
_1f3.push(node.childNodes[i]);
}
}
dojo.dom.removeChildren(node);
node.appendChild(_1f2);
for(var i=0;i<_1f3.length;i++){
dojo.dom.destroyNode(_1f3[i]);
}
};
dojo.dom.removeChildren=function(node){
var _1f6=node.childNodes.length;
while(node.hasChildNodes()){
dojo.dom.removeNode(node.firstChild);
}
return _1f6;
};
dojo.dom.replaceNode=function(node,_1f8){
return node.parentNode.replaceChild(_1f8,node);
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
dojo.dom.getAncestors=function(node,_1fc,_1fd){
var _1fe=[];
var _1ff=(_1fc&&(_1fc instanceof Function||typeof _1fc=="function"));
while(node){
if(!_1ff||_1fc(node)){
_1fe.push(node);
}
if(_1fd&&_1fe.length>0){
return _1fe[0];
}
node=node.parentNode;
}
if(_1fd){
return null;
}
return _1fe;
};
dojo.dom.getAncestorsByTag=function(node,tag,_202){
tag=tag.toLowerCase();
return dojo.dom.getAncestors(node,function(el){
return ((el.tagName)&&(el.tagName.toLowerCase()==tag));
},_202);
};
dojo.dom.getFirstAncestorByTag=function(node,tag){
return dojo.dom.getAncestorsByTag(node,tag,true);
};
dojo.dom.isDescendantOf=function(node,_207,_208){
if(_208&&node){
node=node.parentNode;
}
while(node){
if(node==_207){
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
var _20b=dojo.doc();
if(!dj_undef("ActiveXObject")){
var _20c=["MSXML2","Microsoft","MSXML","MSXML3"];
for(var i=0;i<_20c.length;i++){
try{
doc=new ActiveXObject(_20c[i]+".XMLDOM");
}
catch(e){
}
if(doc){
break;
}
}
}else{
if((_20b.implementation)&&(_20b.implementation.createDocument)){
doc=_20b.implementation.createDocument("","",null);
}
}
return doc;
};
dojo.dom.createDocumentFromText=function(str,_20f){
if(!_20f){
_20f="text/xml";
}
if(!dj_undef("DOMParser")){
var _210=new DOMParser();
return _210.parseFromString(str,_20f);
}else{
if(!dj_undef("ActiveXObject")){
var _211=dojo.dom.createDocument();
if(_211){
_211.async=false;
_211.loadXML(str);
return _211;
}else{
dojo.debug("toXml didn't work?");
}
}else{
var _212=dojo.doc();
if(_212.createElement){
var tmp=_212.createElement("xml");
tmp.innerHTML=str;
if(_212.implementation&&_212.implementation.createDocument){
var _214=_212.implementation.createDocument("foo","",null);
for(var i=0;i<tmp.childNodes.length;i++){
_214.importNode(tmp.childNodes.item(i),true);
}
return _214;
}
return ((tmp.document)&&(tmp.document.firstChild?tmp.document.firstChild:tmp));
}
}
}
return null;
};
dojo.dom.prependChild=function(node,_217){
if(_217.firstChild){
_217.insertBefore(node,_217.firstChild);
}else{
_217.appendChild(node);
}
return true;
};
dojo.dom.insertBefore=function(node,ref,_21a){
if((_21a!=true)&&(node===ref||node.nextSibling===ref)){
return false;
}
var _21b=ref.parentNode;
_21b.insertBefore(node,ref);
return true;
};
dojo.dom.insertAfter=function(node,ref,_21e){
var pn=ref.parentNode;
if(ref==pn.lastChild){
if((_21e!=true)&&(node===ref)){
return false;
}
pn.appendChild(node);
}else{
return this.insertBefore(node,ref.nextSibling,_21e);
}
return true;
};
dojo.dom.insertAtPosition=function(node,ref,_222){
if((!node)||(!ref)||(!_222)){
return false;
}
switch(_222.toLowerCase()){
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
dojo.dom.insertAtIndex=function(node,_224,_225){
var _226=_224.childNodes;
if(!_226.length||_226.length==_225){
_224.appendChild(node);
return true;
}
if(_225==0){
return dojo.dom.prependChild(node,_224);
}
return dojo.dom.insertAfter(node,_226[_225-1]);
};
dojo.dom.textContent=function(node,text){
if(arguments.length>1){
var _229=dojo.doc();
dojo.dom.replaceChildren(node,_229.createTextNode(text));
return text;
}else{
if(node.textContent!=undefined){
return node.textContent;
}
var _22a="";
if(node==null){
return _22a;
}
for(var i=0;i<node.childNodes.length;i++){
switch(node.childNodes[i].nodeType){
case 1:
case 5:
_22a+=dojo.dom.textContent(node.childNodes[i]);
break;
case 3:
case 2:
case 4:
_22a+=node.childNodes[i].nodeValue;
break;
default:
break;
}
}
return _22a;
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
dojo.dom.setAttributeNS=function(elem,_230,_231,_232){
if(elem==null||((elem==undefined)&&(typeof elem=="undefined"))){
dojo.raise("No element given to dojo.dom.setAttributeNS");
}
if(!((elem.setAttributeNS==undefined)&&(typeof elem.setAttributeNS=="undefined"))){
elem.setAttributeNS(_230,_231,_232);
}else{
var _233=elem.ownerDocument;
var _234=_233.createNode(2,_231,_230);
_234.nodeValue=_232;
elem.setAttributeNode(_234);
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
var _237=dojo.global();
var _238=dojo.doc();
var w=0;
var h=0;
if(dojo.render.html.mozilla){
w=_238.documentElement.clientWidth;
h=_237.innerHeight;
}else{
if(!dojo.render.html.opera&&_237.innerWidth){
w=_237.innerWidth;
h=_237.innerHeight;
}else{
if(!dojo.render.html.opera&&dojo.exists(_238,"documentElement.clientWidth")){
var w2=_238.documentElement.clientWidth;
if(!w||w2&&w2<w){
w=w2;
}
h=_238.documentElement.clientHeight;
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
var _23c=dojo.global();
var _23d=dojo.doc();
var top=_23c.pageYOffset||_23d.documentElement.scrollTop||dojo.body().scrollTop||0;
var left=_23c.pageXOffset||_23d.documentElement.scrollLeft||dojo.body().scrollLeft||0;
return {top:top,left:left,offset:{x:left,y:top}};
};
dojo.html.getParentByType=function(node,type){
var _242=dojo.doc();
var _243=dojo.byId(node);
type=type.toLowerCase();
while((_243)&&(_243.nodeName.toLowerCase()!=type)){
if(_243==(_242["body"]||_242["documentElement"])){
return null;
}
_243=_243.parentNode;
}
return _243;
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
var _24b={x:0,y:0};
if(e.pageX||e.pageY){
_24b.x=e.pageX;
_24b.y=e.pageY;
}else{
var de=dojo.doc().documentElement;
var db=dojo.body();
_24b.x=e.clientX+((de||db)["scrollLeft"])-((de||db)["clientLeft"]);
_24b.y=e.clientY+((de||db)["scrollTop"])-((de||db)["clientTop"]);
}
return _24b;
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
var _250=dojo.doc().createElement("script");
_250.src="javascript:'dojo.html.createExternalElement=function(doc, tag){ return doc.createElement(tag); }'";
dojo.doc().getElementsByTagName("head")[0].appendChild(_250);
})();
}
}else{
dojo.html.createExternalElement=function(doc,tag){
return doc.createElement(tag);
};
}
dojo.html._callDeprecated=function(_253,_254,args,_256,_257){
dojo.deprecated("dojo.html."+_253,"replaced by dojo.html."+_254+"("+(_256?"node, {"+_256+": "+_256+"}":"")+")"+(_257?"."+_257:""),"0.5");
var _258=[];
if(_256){
var _259={};
_259[_256]=args[1];
_258.push(args[0]);
_258.push(_259);
}else{
_258=args;
}
var ret=dojo.html[_254].apply(dojo.html,args);
if(_257){
return ret[_257];
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
dojo.html.hasClass=function(node,_260){
return (new RegExp("(^|\\s+)"+_260+"(\\s+|$)")).test(dojo.html.getClass(node));
};
dojo.html.prependClass=function(node,_262){
_262+=" "+dojo.html.getClass(node);
return dojo.html.setClass(node,_262);
};
dojo.html.addClass=function(node,_264){
if(dojo.html.hasClass(node,_264)){
return false;
}
_264=(dojo.html.getClass(node)+" "+_264).replace(/^\s+|\s+$/g,"");
return dojo.html.setClass(node,_264);
};
dojo.html.setClass=function(node,_266){
node=dojo.byId(node);
var cs=new String(_266);
try{
if(typeof node.className=="string"){
node.className=cs;
}else{
if(node.setAttribute){
node.setAttribute("class",_266);
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
dojo.html.removeClass=function(node,_269,_26a){
try{
if(!_26a){
var _26b=dojo.html.getClass(node).replace(new RegExp("(^|\\s+)"+_269+"(\\s+|$)"),"$1$2");
}else{
var _26b=dojo.html.getClass(node).replace(_269,"");
}
dojo.html.setClass(node,_26b);
}
catch(e){
dojo.debug("dojo.html.removeClass() failed",e);
}
return true;
};
dojo.html.replaceClass=function(node,_26d,_26e){
dojo.html.removeClass(node,_26e);
dojo.html.addClass(node,_26d);
};
dojo.html.classMatchType={ContainsAll:0,ContainsAny:1,IsOnly:2};
dojo.html.getElementsByClass=function(_26f,_270,_271,_272,_273){
_273=false;
var _274=dojo.doc();
_270=dojo.byId(_270)||_274;
var _275=_26f.split(/\s+/g);
var _276=[];
if(_272!=1&&_272!=2){
_272=0;
}
var _277=new RegExp("(\\s|^)(("+_275.join(")|(")+"))(\\s|$)");
var _278=_275.join(" ").length;
var _279=[];
if(!_273&&_274.evaluate){
var _27a=".//"+(_271||"*")+"[contains(";
if(_272!=dojo.html.classMatchType.ContainsAny){
_27a+="concat(' ',@class,' '), ' "+_275.join(" ') and contains(concat(' ',@class,' '), ' ")+" ')";
if(_272==2){
_27a+=" and string-length(@class)="+_278+"]";
}else{
_27a+="]";
}
}else{
_27a+="concat(' ',@class,' '), ' "+_275.join(" ') or contains(concat(' ',@class,' '), ' ")+" ')]";
}
var _27b=_274.evaluate(_27a,_270,null,XPathResult.ANY_TYPE,null);
var _27c=_27b.iterateNext();
while(_27c){
try{
_279.push(_27c);
_27c=_27b.iterateNext();
}
catch(e){
break;
}
}
return _279;
}else{
if(!_271){
_271="*";
}
_279=_270.getElementsByTagName(_271);
var node,i=0;
outer:
while(node=_279[i++]){
var _27f=dojo.html.getClasses(node);
if(_27f.length==0){
continue outer;
}
var _280=0;
for(var j=0;j<_27f.length;j++){
if(_277.test(_27f[j])){
if(_272==dojo.html.classMatchType.ContainsAny){
_276.push(node);
continue outer;
}else{
_280++;
}
}else{
if(_272==dojo.html.classMatchType.IsOnly){
continue outer;
}
}
}
if(_280==_275.length){
if((_272==dojo.html.classMatchType.IsOnly)&&(_280==_27f.length)){
_276.push(node);
}else{
if(_272==dojo.html.classMatchType.ContainsAll){
_276.push(node);
}
}
}
}
return _276;
}
};
dojo.html.getElementsByClassName=dojo.html.getElementsByClass;
dojo.html.toCamelCase=function(_282){
var arr=_282.split("-"),cc=arr[0];
for(var i=1;i<arr.length;i++){
cc+=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
}
return cc;
};
dojo.html.toSelectorCase=function(_286){
return _286.replace(/([A-Z])/g,"-$1").toLowerCase();
};
if(dojo.render.html.ie){
dojo.html.getComputedStyle=function(node,_288,_289){
node=dojo.byId(node);
if(!node||!node.currentStyle){
return _289;
}
return node.currentStyle[dojo.html.toCamelCase(_288)];
};
dojo.html.getComputedStyles=function(node){
return node.currentStyle;
};
}else{
dojo.html.getComputedStyle=function(node,_28c,_28d){
node=dojo.byId(node);
if(!node||!node.style){
return _28d;
}
var s=document.defaultView.getComputedStyle(node,null);
return (s&&s[dojo.html.toCamelCase(_28c)])||"";
};
dojo.html.getComputedStyles=function(node){
return document.defaultView.getComputedStyle(node,null);
};
}
dojo.html.getStyleProperty=function(node,_291){
node=dojo.byId(node);
return (node&&node.style?node.style[dojo.html.toCamelCase(_291)]:undefined);
};
dojo.html.getStyle=function(node,_293){
var _294=dojo.html.getStyleProperty(node,_293);
return (_294?_294:dojo.html.getComputedStyle(node,_293));
};
dojo.html.setStyle=function(node,_296,_297){
node=dojo.byId(node);
if(node&&node.style){
var _298=dojo.html.toCamelCase(_296);
node.style[_298]=_297;
}
};
dojo.html.setStyleText=function(_299,text){
try{
_299.style.cssText=text;
}
catch(e){
_299.setAttribute("style",text);
}
};
dojo.html.copyStyle=function(_29b,_29c){
if(!_29c.style.cssText){
_29b.setAttribute("style",_29c.getAttribute("style"));
}else{
_29b.style.cssText=_29c.style.cssText;
}
dojo.html.addClass(_29b,dojo.html.getClass(_29c));
};
dojo.html.getUnitValue=function(node,_29e,_29f){
var s=dojo.html.getComputedStyle(node,_29e);
if((!s)||((s=="auto")&&(_29f))){
return {value:0,units:"px"};
}
var _2a1=s.match(/(\-?[\d.]+)([a-z%]*)/i);
if(!_2a1){
return dojo.html.getUnitValue.bad;
}
return {value:Number(_2a1[1]),units:_2a1[2].toLowerCase()};
};
dojo.html.getUnitValue.bad={value:NaN,units:""};
if(dojo.render.html.ie){
dojo.html.toPixelValue=function(_2a2,_2a3){
if(!_2a3){
return 0;
}
if(_2a3.slice(-2)=="px"){
return parseFloat(_2a3);
}
var _2a4=0;
with(_2a2){
var _2a5=style.left;
var _2a6=runtimeStyle.left;
runtimeStyle.left=currentStyle.left;
try{
style.left=_2a3||0;
_2a4=style.pixelLeft;
style.left=_2a5;
runtimeStyle.left=_2a6;
}
catch(e){
}
}
return _2a4;
};
}else{
dojo.html.toPixelValue=function(_2a7,_2a8){
return (_2a8&&(_2a8.slice(-2)=="px")?parseFloat(_2a8):0);
};
}
dojo.html.getPixelValue=function(node,_2aa,_2ab){
return dojo.html.toPixelValue(node,dojo.html.getComputedStyle(node,_2aa));
};
dojo.html.setPositivePixelValue=function(node,_2ad,_2ae){
if(isNaN(_2ae)){
return false;
}
node.style[_2ad]=Math.max(0,_2ae)+"px";
return true;
};
dojo.html.styleSheet=null;
dojo.html.insertCssRule=function(_2af,_2b0,_2b1){
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
_2b1=dojo.html.styleSheet.cssRules.length;
}else{
if(dojo.html.styleSheet.rules){
_2b1=dojo.html.styleSheet.rules.length;
}else{
return null;
}
}
}
if(dojo.html.styleSheet.insertRule){
var rule=_2af+" { "+_2b0+" }";
return dojo.html.styleSheet.insertRule(rule,_2b1);
}else{
if(dojo.html.styleSheet.addRule){
return dojo.html.styleSheet.addRule(_2af,_2b0,_2b1);
}else{
return null;
}
}
};
dojo.html.removeCssRule=function(_2b3){
if(!dojo.html.styleSheet){
dojo.debug("no stylesheet defined for removing rules");
return false;
}
if(dojo.render.html.ie){
if(!_2b3){
_2b3=dojo.html.styleSheet.rules.length;
dojo.html.styleSheet.removeRule(_2b3);
}
}else{
if(document.styleSheets[0]){
if(!_2b3){
_2b3=dojo.html.styleSheet.cssRules.length;
}
dojo.html.styleSheet.deleteRule(_2b3);
}
}
return true;
};
dojo.html._insertedCssFiles=[];
dojo.html.insertCssFile=function(URI,doc,_2b6,_2b7){
if(!URI){
return;
}
if(!doc){
doc=document;
}
var _2b8=dojo.hostenv.getText(URI,false,_2b7);
if(_2b8===null){
return;
}
_2b8=dojo.html.fixPathsInCssText(_2b8,URI);
if(_2b6){
var idx=-1,node,ent=dojo.html._insertedCssFiles;
for(var i=0;i<ent.length;i++){
if((ent[i].doc==doc)&&(ent[i].cssText==_2b8)){
idx=i;
node=ent[i].nodeRef;
break;
}
}
if(node){
var _2bd=doc.getElementsByTagName("style");
for(var i=0;i<_2bd.length;i++){
if(_2bd[i]==node){
return;
}
}
dojo.html._insertedCssFiles.shift(idx,1);
}
}
var _2be=dojo.html.insertCssText(_2b8,doc);
dojo.html._insertedCssFiles.push({"doc":doc,"cssText":_2b8,"nodeRef":_2be});
if(_2be&&djConfig.isDebug){
_2be.setAttribute("dbgHref",URI);
}
return _2be;
};
dojo.html.insertCssText=function(_2bf,doc,URI,_2c2){
if(!_2bf){
return;
}
if(!doc){
doc=document;
}
if(URI){
_2bf=dojo.html.fixPathsInCssText(_2bf,URI);
}
var _2c3=doc.createElement("style");
_2c3.setAttribute("type","text/css");
if(_2c2){
_2c3.setAttribute("media",_2c2);
}
var head=doc.getElementsByTagName("head")[0];
if(!head){
dojo.debug("No head tag in document, aborting styles");
return;
}else{
head.appendChild(_2c3);
}
if(_2c3.styleSheet){
var _2c5=function(){
try{
_2c3.styleSheet.cssText=_2bf;
}
catch(e){
dojo.debug(e);
}
};
if(_2c3.styleSheet.disabled){
setTimeout(_2c5,10);
}else{
_2c5();
}
}else{
var _2c6=doc.createTextNode(_2bf);
_2c3.appendChild(_2c6);
}
return _2c3;
};
dojo.html.fixPathsInCssText=function(_2c7,URI){
if(!_2c7||!URI){
return;
}
var _2c9,str="",url="",_2cc="[\\t\\s\\w\\(\\)\\/\\.\\\\'\"-:#=&?~]+";
var _2cd=new RegExp("url\\(\\s*("+_2cc+")\\s*\\)");
var _2ce=/(file|https?|ftps?):\/\//;
regexTrim=new RegExp("^[\\s]*(['\"]?)("+_2cc+")\\1[\\s]*?$");
if(dojo.render.html.ie55||dojo.render.html.ie60){
var _2cf=new RegExp("AlphaImageLoader\\((.*)src=['\"]("+_2cc+")['\"]");
while(_2c9=_2cf.exec(_2c7)){
url=_2c9[2].replace(regexTrim,"$2");
if(!_2ce.exec(url)){
url=(new dojo.uri.Uri(URI,url).toString());
}
str+=_2c7.substring(0,_2c9.index)+"AlphaImageLoader("+_2c9[1]+"src='"+url+"'";
_2c7=_2c7.substr(_2c9.index+_2c9[0].length);
}
_2c7=str+_2c7;
str="";
}
while(_2c9=_2cd.exec(_2c7)){
url=_2c9[1].replace(regexTrim,"$2");
if(!_2ce.exec(url)){
url=(new dojo.uri.Uri(URI,url).toString());
}
str+=_2c7.substring(0,_2c9.index)+"url("+url+")";
_2c7=_2c7.substr(_2c9.index+_2c9[0].length);
}
return str+_2c7;
};
dojo.html.setActiveStyleSheet=function(_2d0){
var i=0,a,els=dojo.doc().getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")){
a.disabled=true;
if(a.getAttribute("title")==_2d0){
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
var _2dc={dj_ie:drh.ie,dj_ie55:drh.ie55,dj_ie6:drh.ie60,dj_ie7:drh.ie70,dj_iequirks:drh.ie&&drh.quirks,dj_opera:drh.opera,dj_opera8:drh.opera&&(Math.floor(dojo.render.version)==8),dj_opera9:drh.opera&&(Math.floor(dojo.render.version)==9),dj_khtml:drh.khtml,dj_safari:drh.safari,dj_gecko:drh.mozilla};
for(var p in _2dc){
if(_2dc[p]){
dojo.html.addClass(node,p);
}
}
};
dojo.provide("com.infonow.ligeo.map.LigeoBalloon");
function LigeoBalloon(){
};
LigeoBalloon.myLigeoLocation=null;
LigeoBalloon.setLigeoLocation=function(_2de){
LigeoBalloon.myLigeoLocation=_2de;
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
LigeoBalloon.setHtmlTopLevelBalloon=function(_2df){
this.myHtmlTopLevelBalloon=_2df;
};
LigeoBalloon.getHtmlPanelsContainer=function(){
return this.myHtmlPanelsContainer;
};
LigeoBalloon.setHtmlPanelsContainer=function(_2e0){
this.myHtmlPanelsContainer=_2e0;
};
LigeoBalloon.getHtmlTopLevelTabsContainer=function(){
return this.myHtmlTopLevelTabsContainer;
};
LigeoBalloon.setHtmlTopLevelTabsContainer=function(_2e1){
this.myHtmlTopLevelTabsContainer=_2e1;
};
LigeoBalloon.getHtmlTabSetPrefix=function(){
return this.myHtmlTabSetPrefix;
};
LigeoBalloon.setHtmlTabSetPrefix=function(_2e2){
this.myHtmlTabSetPrefix=_2e2;
};
LigeoBalloon.getHtmlTabPrefix=function(){
return this.myHtmlTabPrefix;
};
LigeoBalloon.setHtmlTabPrefix=function(_2e3){
this.myHtmlTabPrefix=_2e3;
};
LigeoBalloon.getHtmlTabActive=function(){
return this.myHtmlTabActive;
};
LigeoBalloon.setHtmlTabActive=function(_2e4){
this.myHtmlTabActive=_2e4;
};
LigeoBalloon.getHtmlTabContentActive=function(){
return this.myHtmlTabContentActive;
};
LigeoBalloon.setHtmlTabContentActive=function(_2e5){
this.myHtmlTabContentActive=_2e5;
};
LigeoBalloon.getHtmlTabInactive=function(){
return this.myHtmlTabInactive;
};
LigeoBalloon.setHtmlTabInactive=function(_2e6){
this.myHtmlTabInactive=_2e6;
};
LigeoBalloon.getHtmlTabContentInactive=function(){
return this.myHtmlTabContentInactive;
};
LigeoBalloon.setHtmlTabContentInactive=function(_2e7){
this.myHtmlTabContentInactive=_2e7;
};
LigeoBalloon.setWidth=function(_2e8){
this.myWidth=_2e8;
};
LigeoBalloon.setHeight=function(_2e9){
this.myHeight=_2e9;
};
LigeoBalloon.getHtmlStyle=function(){
return this.myHtmlStyle;
};
LigeoBalloon.setHtmlStyle=function(_2ea){
this.myHtmlStyle=_2ea;
};
LigeoBalloon.ShowTabs=function(){
return this.showTabs;
};
LigeoBalloon.setShowTabs=function(_2eb){
this.showTabs=_2eb;
};
LigeoBalloon.HTMLtemplateString="<div id=\"ligeo-balloon\">\n\t<img id=\"ligeo-balloonBox\" src=\"__image__server__URL__/spacer.gif\" />\n\t\n\t<div id=\"ligeo-balloonTabs\"></div>\n\t<div id=\"ligeo-balloonClose\" title=\"Close this balloon\" onclick=\"LigeoAPI.closeBalloon();\" onmousedown=\"this.style.backgroundPosition='-13px 0'\" onmouseup=\"this.style.backgroundPosition='0 0'\"></div>\n\t<div id=\"ligeo-balloonPanels\"></div>\n\t\n\t<!-- cache balloon images -->\n\t<img class=\"display-none\" src=\"__image__server__URL__/northWestBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/northBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/northEastBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/westBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/eastBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/southWestBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/southBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/southEastBeak.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/closeBox.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabBack.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabLeft.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabRight.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabLeftOn.gif\" />\n\t<img class=\"display-none\" src=\"__image__server__URL__/tabRightOn.gif\" />\n\t\n\t<img style=\"display:none\" src=\"__image__server__URL__/north_west.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/north.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/north_east.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/west.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/east.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/south_west.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/south.gif\" />\n\t<img style=\"display:none\" src=\"__image__server__URL__/south_east.gif\" />\n\t<!--[if lte IE 6.5]><iframe src=\"__image__server__blank__html__src__/blank.html\"></iframe><![endif]-->\n</div>\n";
LigeoBalloon.HTML_rev2templateString="<div id=\"ligeo-balloon\">\n\t<div id=\"ligeo-balloonWrapper\">\n\t\t<div id=\"ligeo-balloonTop\">\n\t\t\t<div id=\"ligeo-balloon-corner-NW\"></div>\n\t\t\t<div id=\"ligeo-balloon-corner-NE\"></div>\n\t\t</div>\n\t\t<div id=\"ligeo-balloonMiddle\">\n\t\t\t<div id=\"ligeo-balloon-side-W\"></div>\n\t\t\t<div id=\"ligeo-balloon-side-E\"></div>\n\t\t\t<div id=\"ligeo-balloonHead\">\n\t\t\t\t<div id=\"ligeo-balloonClose\" title=\"Close this balloon\" onclick=\"LigeoAPI.closeBalloon();\" onmousedown=\"this.style.backgroundPosition='-18px 0'\" onmouseup=\"this.style.backgroundPosition='0 0'\"></div>\n\t\t\t\t<div id=\"ligeo-balloonTitle\"></div>\n\t\t\t\t<div id=\"ligeo-balloonTabs\"></div>\n\t\t\t</div>\n\t\t\t<div id=\"ligeo-balloonPanels\"></div>\n\t\t\t<div id=\"ligeo-balloonFoot\"></div>\n\t\t\t\n\t\t</div>\n\t\t<div id=\"ligeo-balloon-beak\"></div>\n\t\t<div id=\"ligeo-balloonBase\">\n\t\t\t<div id=\"ligeo-balloon-corner-SW\"></div>\n\t\t\t<div id=\"ligeo-balloon-corner-SE\"></div>\n\t\t</div>\n\t</div>\n\t<!-- cache balloon images -->\n\t<div id=\"ligeo-imageCache\">\n\t\t<img src=\"__image__server__URL__/balloon_closeBox.gif\" />\n\t\t\n\t\t<img src=\"__image__server__URL__/balloon_beak-nw.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_beak-ne.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_beak-w.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_beak-e.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_beak-sw.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_beak-se.png\" />\n\t\t\n\t\t<img src=\"__image__server__URL__/balloon_back-nw.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_back-ne.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_back-w.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_back-e.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_back-sw.png\" />\n\t\t<img src=\"__image__server__URL__/balloon_back-se.png\" />\n\t</div>\n\t<!--[if lte IE 6.5]><iframe src=\"__image__server__blank__html__src__/blank.html\"></iframe><![endif]-->\n</div>\n\n";
LigeoBalloon.renderBalloonHtmlElement=function(){
var _2ec=document.createElement("DIV");
LigeoBalloon.HTMLtemplateString=LigeoBalloon.HTMLtemplateString.replace(/__image__server__URL__/g,LigeoEnvironment.getImageServer()+"mapimages");
LigeoBalloon.HTMLtemplateString=LigeoBalloon.HTMLtemplateString.replace(/__image__server__blank__html__src__/g,LigeoEnvironment.getImageServer()+"ligeo_html");
LigeoBalloon.HTML_rev2templateString=LigeoBalloon.HTML_rev2templateString.replace(/__image__server__URL__/g,LigeoEnvironment.getImageServer()+"mapimages");
LigeoBalloon.HTML_rev2templateString=LigeoBalloon.HTML_rev2templateString.replace(/__image__server__blank__html__src__/g,LigeoEnvironment.getImageServer()+"ligeo_html");
if(LigeoConfigurationAPI.getLigeoBalloonStyleRev2()){
_2ec.innerHTML=LigeoBalloon.HTML_rev2templateString;
}else{
_2ec.innerHTML=LigeoBalloon.HTMLtemplateString;
}
LigeoDOMUtils.renderHtmlElementIfNew(_2ec);
LigeoBalloon.singletonBalloonHtmlElement=document.getElementById(LigeoBalloon.getHtmlTopLevelBalloon());
};
dojo.addOnLoad(LigeoBalloon.renderBalloonHtmlElement);
LigeoBalloon.repositionBalloon=function(_2ed,_2ee,_2ef,_2f0,_2f1,_2f2){
LigeoBalloon.singletonBalloonHtmlElement.className="";
if(LigeoVarUtils.isNotNullOrEmpty(LigeoBalloon.getHtmlTopLevelBalloon())){
LigeoBalloon.setWidth(LigeoVarUtils.getElementWidth(LigeoBalloon.getHtmlTopLevelBalloon()));
LigeoBalloon.setHeight(LigeoVarUtils.getElementHeight(LigeoBalloon.getHtmlTopLevelBalloon()));
}
var _2f3=_2f1-_2ef;
var _2f4=_2f2-_2f0;
var x=0;
var y=0;
var _2f7=(_2ee>=(2*(_2f4/3)));
var _2f8=(_2ee<=(_2f4/3));
if(_2f7){
var _2f9=(_2ed>=(2*(_2f3/3)));
var _2fa=(_2ed<=(_2f3/3));
if(_2f9){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-se";
x=_2ef+_2ed-LigeoBalloon.myWidth-10;
y=_2f0+_2ee-LigeoBalloon.myHeight-10;
}
if((!_2fa&&!_2f9)||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-s";
x=_2ef+_2ed-(LigeoBalloon.myWidth/2)-5;
y=_2f0+_2ee-LigeoBalloon.myHeight-12;
}
if(_2fa||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-sw";
x=_2ef+_2ed+1;
y=_2f0+_2ee-LigeoBalloon.myHeight-9;
}
}
if((!_2f8&&!_2f7)||y<0){
var _2fb=(_2ed>=(_2f3/2));
var _2fc=(_2ed<(_2f3/2));
if(_2fb){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-e";
x=_2ef+_2ed-LigeoBalloon.myWidth-13;
y=_2f0+_2ee-(LigeoBalloon.myHeight/2)-5;
}
if(_2fc||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-w";
x=_2ef+_2ed+4;
y=_2f0+_2ee-(LigeoBalloon.myHeight/2)-5;
}
}
if(_2f8||y<0){
var _2fd=(_2ed>=(2*(_2f3/3)));
var _2fe=(_2ed<=(_2f3/3));
if(_2fd){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-ne";
x=_2ef+_2ed-LigeoBalloon.myWidth-10;
y=_2f0+_2ee;
}
if((!_2fe&&!_2fd)||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-n";
x=_2ef+_2ed-(LigeoBalloon.myWidth/2)-5;
y=_2f0+_2ee+5;
}
if(_2fe||x<0){
LigeoBalloon.singletonBalloonHtmlElement.className="ligeo-balloonDock-nw";
x=_2ef+_2ed;
y=_2f0+_2ee;
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
LigeoBalloon.renderPanels=function(_2ff){
var _300=LigeoBalloon.getLigeoLocation().getAllInfoPanels();
var _301=document.getElementById(LigeoBalloon.getHtmlPanelsContainer());
for(var i in _300){
if(!LigeoVarUtils.isFunction(_300[i])){
_300[i].renderHtmlElement(_301);
}
}
LigeoBalloon.renderTabs(_2ff);
};
LigeoBalloon.renderTabs=function(_303){
var _304=LigeoBalloon.getLigeoLocation().getAllInfoPanels();
var _305="";
for(var i in _304){
if(!LigeoVarUtils.isFunction(_304[i])){
var _307=_304[i].getUniqueId();
_305+="<li onclick='LigeoAPI.showPanel(\""+_307+"\");'>";
_305+="<span id='"+LigeoBalloon.getHtmlTabActive()+"-"+_307+"'"+" class='"+LigeoBalloon.getHtmlTabActive()+"' style='display:none;'>"+"<span class='"+LigeoBalloon.getHtmlTabContentActive()+"'>"+_304[i].getLabel()+"</span>"+"</span>";
_305+="<span id='"+LigeoBalloon.getHtmlTabInactive()+"-"+_307+"'"+" class='"+LigeoBalloon.getHtmlTabInactive()+"'>"+"<a class='"+LigeoBalloon.getHtmlTabContentInactive()+"'"+" href='javascript:void(0)'>"+_304[i].getLabel()+"</a>"+"</span>";
_305+="</li>";
}
}
var _308=document.createElement("ul");
_308.style.display="none";
_308.innerHTML+=_305;
var _309=document.getElementById(LigeoBalloon.getHtmlTopLevelTabsContainer());
_309.appendChild(_308);
};
LigeoBalloon.showPanel=function(_30a){
var _30b=null;
if(LigeoVarUtils.isNotNull(_30a)){
_30b=LigeoBalloon.getLigeoLocation().getInfoPanel(_30a);
}else{
_30b=LigeoBalloon.getLigeoLocation().getDefaultInfoPanel();
}
if(LigeoVarUtils.isNotNull(_30b)){
if(!_30b.isRendered()){
LigeoBalloon.renderPanels(LigeoBalloon.getLigeoLocation());
}
if(LigeoVarUtils.isNotNull(LigeoBalloon.visiblePanel)){
LigeoBalloon.visiblePanel.hide();
}
_30b.show();
LigeoBalloon.visiblePanel=_30b;
LigeoBalloon.showTab(_30b.getUniqueId());
}
};
LigeoBalloon.showTab=function(_30c){
LigeoBalloon.toggleTab(LigeoBalloon.activeTabId);
LigeoBalloon.toggleTab(_30c);
LigeoBalloon.activeTabId=_30c;
};
LigeoBalloon.toggleTab=function(_30d){
var _30e=document.getElementById(LigeoBalloon.getHtmlTabActive()+"-"+_30d);
var _30f=document.getElementById(LigeoBalloon.getHtmlTabInactive()+"-"+_30d);
if(LigeoVarUtils.isNotNull(_30e)){
if(_30e.style.display=="none"){
_30e.style.display="block";
_30f.style.display="none";
_30f.parentNode.parentNode.style.display="block";
}else{
_30e.style.display="none";
_30f.style.display="block";
_30f.parentNode.parentNode.style.display="none";
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
LigeoBalloon.createAndShowBalloon=function(_312,_313,_314,_315,_316,_317){
shouldShowBalloon=function(_318){
return ((LigeoVarUtils.isNotNull(_318))&&(_318.hasBalloonContent())&&((!LigeoBalloon.isVisible())||(LigeoBalloon.getLigeoLocation()!=_318)));
};
try{
if(shouldShowBalloon(_314)){
var _319=_312.LatLongToPixel(_313.GetIconAnchor());
var _31a=dojo.html.getAbsolutePosition(_315,true);
var _31b=_31a.x;
var _31c=_31a.y;
var _31d=_31a.x+_316;
var _31e=_31a.y+_317;
LigeoBalloon.setLigeoLocation(_314);
LigeoBalloon.show();
LigeoBalloon.repositionBalloon(_319.x,_319.y,_31b,_31c,_31d,_31e);
}
}
catch(error){
LigeoLogger.error(error);
}
};
LigeoBalloon.closeOnMouseOutFromBalloonOnly=function(){
var _31f=document.getElementById(LigeoBalloon.getHtmlTopLevelBalloon());
_31f.onmouseout=function(){
LigeoVarUtils.HideOnMouseOut(this,event);
};
_31f.onmouseover=function(){
LigeoVarUtils.ShowOnMouseOver(this);
};
};
dojo.provide("com.infonow.ligeo.map.LigeoGridSearch");
function LigeoGridSearch(){
};
LigeoGridSearch.performGridSearch=function(_320){
gridSearchShouldBeConsidered=function(_321){
return (_321.getZoom()>=LigeoConfigurationAPI.myMapGridSearchZoomThreshold);
};
getSearchFormElement=function(){
return document.getElementById("searchForm");
};
getSearchResultsElement=function(){
return document.getElementById("resultsBlock");
};
isGridSearchingAvailable=function(_322,_323){
return (LigeoVarUtils.isNotNull(_322)&&(_323.isSearchResultsMap()||_323.isDefaultMap()));
};
composeGridSearchURL=function(_324,_325){
if(LigeoVarUtils.isNullOrEmpty(_324)){
return null;
}
var _326=_324.action;
var _327=_325.GetMapView();
var _328=_327.TopLeftLatLong;
if(LigeoFeaturesAPI.isExcludeNavAreaFromGrid()){
var _329=_325.LatLongToPixel(_327.TopLeftLatLong);
_329.x=(_329.x+35);
_329.y=(_329.y+35);
_328=_325.PixelToLatLong(_329);
}
_326+="?isMapGridSearch=true";
_326+="&mapGrid.topLatitude="+_328.Latitude;
_326+="&mapGrid.bottomLatitude="+_327.BottomRightLatLong.Latitude;
_326+="&mapGrid.leftLongitude="+_328.Longitude;
_326+="&mapGrid.rightLongitude="+_327.BottomRightLatLong.Longitude;
_326+="&mapGrid.centerLatitude="+_325.GetCenter().Latitude;
_326+="&mapGrid.centerLongitude="+_325.GetCenter().Longitude;
if(LigeoFeaturesAPI.myIncludeFormElementsInGridSearch){
var _32a=_324.elements;
for(var i=0;i<_32a.length;i++){
if(_32a[i].type!="text"){
if((_32a[i].type!="checkbox")&&(_32a[i].type!="radio")){
_326+="&"+_32a[i].name+"=";
_326+=_32a[i].value;
}else{
if((_32a[i].checked==true)&&(_32a[i].type=="radio")){
_326+="&"+_32a[i].name+"=";
_326+=_32a[i].value;
}else{
if(_32a[i].checked==true){
_326+="&"+_32a[i].name+"=";
_326+=true;
}
}
}
}
}
}
return _326;
};
if(gridSearchShouldBeConsidered(_320)){
LigeoAPI.closeBalloon();
var _32c=getSearchFormElement();
if(isGridSearchingAvailable(_32c,_320)){
var _32d=composeGridSearchURL(_32c,_320.getVEMap());
LigeoAPI.ajaxHtmlMessages(_32d,getSearchResultsElement());
_320.setFrozen(true);
}
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
LigeoBrowserCompatability.isIe6=function(){
var ua=navigator.userAgent.toLowerCase();
return (LigeoBrowserCompatability.isIe()&&ua.indexOf("msie 6")!=-1);
};
LigeoBrowserCompatability.isIe7=function(){
var ua=navigator.userAgent.toLowerCase();
if(LigeoBrowserCompatability.isIe()&&ua.indexOf("msie 7")!=-1){
return (!(ua.indexOf("trident")!=-1));
}
};
LigeoBrowserCompatability.isFF=function(){
var ua=navigator.userAgent.toLowerCase();
return (ua.indexOf("firefox")!=-1);
};
LigeoBrowserCompatability.isSafari3=function(){
var ua=navigator.userAgent.toLowerCase();
return (LigeoBrowserCompatability.isSafari()&&ua.indexOf("version/3.")!=-1);
};
LigeoBrowserCompatability.isSafari=function(){
var ua=navigator.userAgent.toLowerCase();
return (ua.indexOf("safari")!=-1);
};
LigeoBrowserCompatability.isChrome=function(){
var ua=navigator.userAgent.toLowerCase();
return (ua.indexOf("chrome")!=-1);
};
dojo.provide("com.infonow.ligeo.util.log.LigeoLogger");
function LigeoLogger(){
};
LigeoLogger.isDebugEnabled=function(){
return (window.location.href.match(/.*showlog=on.*/i)!=null);
};
LigeoLogger.debug=function(_334){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_334);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.log(_334);
}
LigeoLogger.addMessageToDebugPanel(_334,"DEBG");
};
LigeoLogger.info=function(_335){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_335);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.info(_335);
}
LigeoLogger.addMessageToDebugPanel(_335,"INFO");
};
LigeoLogger.warn=function(_336){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_336);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.warn(_336);
}
LigeoLogger.addMessageToDebugPanel(_336,"WARN");
};
LigeoLogger.error=function(_337){
if(LigeoFeaturesAPI.alertOnErrors==true){
alert(_337);
}
if(LigeoLogger.isFirebugConsoleAvailable()){
console.error(_337);
}
LigeoLogger.addMessageToDebugPanel(_337,"ERR_");
};
LigeoLogger.addMessageToDebugPanel=function(_338,_339){
var ied=document.getElementById("ieDebugPanel");
if(LigeoVarUtils.isNotNull(_338)&&LigeoVarUtils.isNotNull(ied)){
ied.style.display="block";
if(LigeoVarUtils.isNotNull(_339)){
_338=_339+":"+_338;
}
ied.innerHTML=_338+"<br></br>\n"+ied.innerHTML;
}
};
LigeoLogger.isFirebugConsoleAvailable=function(){
if(LigeoBrowserCompatability.isSafari3()){
return false;
}
return (typeof console=="object"&&typeof console.error=="function");
};
LigeoLogger.clientErrorToServerLogArray=null;
LigeoLogger.getClientErrorToServerLogArray=function(){
if(LigeoVarUtils.isNull(LigeoLogger.clientErrorToServerLogArray)){
LigeoLogger.clientErrorToServerLogArray=new Array();
}
return LigeoLogger.clientErrorToServerLogArray;
};
LigeoLogger.clientErrorToServerAlreadySentLogArray=null;
LigeoLogger.getClientErrorToServerAlreadySentLogArray=function(){
if(LigeoVarUtils.isNull(LigeoLogger.clientErrorToServerAlreadySentLogArray)){
LigeoLogger.clientErrorToServerAlreadySentLogArray=new Array();
}
return LigeoLogger.clientErrorToServerAlreadySentLogArray;
};
LigeoLogger.isClientErrorAlreadySent=function(_33b){
if(LigeoVarUtils.isNotNull(LigeoLogger.getClientErrorToServerAlreadySentLogArray()[_33b])){
return true;
}
return false;
};
LigeoLogger.setClientErrorAlreadySent=function(_33c){
LigeoLogger.getClientErrorToServerAlreadySentLogArray()[_33c]="true";
};
LigeoLogger.clientErrorToServerLogAjaxReady=false;
LigeoLogger.getClientErrorToServerLogAjaxReady=function(){
return LigeoLogger.clientErrorToServerLogAjaxReady;
};
LigeoLogger.setClientErrorToServerLogAjaxReady=function(_33d){
LigeoLogger.clientErrorToServerLogAjaxReady=_33d;
};
LigeoLogger.clientErrorToServerLogServerContextPath="unknown/context";
LigeoLogger.clientErrorToServerLogServerAction="/ClientErrorToServerLog.do";
LigeoLogger.getClientErrorToServerLogServerContext=function(){
path=LigeoLogger.getClientErrorToServerLogServerContextPath()+LigeoLogger.getClientErrorToServerLogServerAction();
return path;
};
LigeoLogger.getClientErrorToServerLogServerAction=function(){
return LigeoLogger.clientErrorToServerLogServerAction;
};
LigeoLogger.setClientErrorToServerLogServerContextPath=function(path){
LigeoLogger.clientErrorToServerLogServerContextPath=path;
};
LigeoLogger.getClientErrorToServerLogServerContextPath=function(){
return LigeoLogger.clientErrorToServerLogServerContextPath;
};
LigeoLogger.sendClientErrorToServerLog=function(_33f,url,_341,_342,_343){
try{
var _344=new Array();
if(LigeoVarUtils.isNotNull(_33f)){
_344["contextString"]=escape(_33f);
}else{
_344["contextString"]="";
}
LigeoLogger.debug("LigeoLogger.sendClientErrorToServerLog contextString="+_33f);
if(LigeoVarUtils.isNotNull(url)){
_344["url"]=escape(url);
}else{
_344["url"]="";
}
if(LigeoVarUtils.isNotNull(_341)){
_344["linenum"]=new String(_341);
}else{
_344["linenum"]="";
}
if(LigeoVarUtils.isNotNull(window.event)){
if(LigeoVarUtils.isNotNull(window.event.type)){
_344["eventLastType"]=escape(new String(window.event.type));
}else{
_344["eventLastType"]="";
}
}
if(LigeoVarUtils.isNotNull(_342)){
_344["errObjectName"]=escape(_342.name);
_344["errObjectMessage"]=escape(_342.message);
LigeoLogger.debug("LigeoLogger.sendClientErrorToServerLog errObjectName="+_342.name);
LigeoLogger.debug("LigeoLogger.sendClientErrorToServerLog errObjectMessage="+_342.message);
var _345=[];
var _346=false;
if(_342.stack){
var _347=_342.stack.split("\n");
for(var i=0,len=_347.length;i<len;i++){
if(_347[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)){
_345.push(_347[i]);
_346=true;
}
}
}
if(!_346){
var _34a=arguments.callee.caller;
while(_34a){
var fn=_34a.toString();
var _34c=fn.substring(fn.indexOf("function")+8,fn.indexOf("("))||"anonymous";
_345.push(_34c);
_34a=_34a.caller;
_346=true;
}
}
if(_346){
_344["errObjectStack"]=escape(_345.join(";"));
}else{
_344["errObjectStack"]="";
}
}else{
_344["errObjectName"]="";
_344["errObjectMessage"]="";
_344["errObjectStack"]="";
}
if(LigeoVarUtils.isNotNull(_343)){
_344["docObjectTitle"]=escape(_343.title);
_344["docObjectURL"]=escape(_343.URL);
}else{
_344["docObjectTitle"]="";
_344["docObjectURL"]="";
}
var _34d=document.getElementById("resultsBlock");
if(LigeoVarUtils.isNotNull(_34d)){
_344["resultsBlock"]=escape(_34d.innerHTML);
}else{
_344["resultsBlock"]="";
}
_34d=document.getElementById("detailsBlock");
if(LigeoVarUtils.isNotNull(_34d)){
_344["detailsBlock"]=escape(_34d.innerHTML);
}else{
_344["detailsBlock"]="";
}
_34d=document.getElementById("routeBlock");
if(LigeoVarUtils.isNotNull(_34d)){
_344["routeBlock"]=escape(_34d.innerHTML);
}else{
_344["routeBlock"]="";
}
if(LigeoLogger.isClientErrorAlreadySent(_344["contextString"])==false){
LigeoLogger.getClientErrorToServerLogArray().push(_344);
}
LigeoLogger.setClientErrorAlreadySent(_344["contextString"]);
LigeoLogger.sendClientErrorToServerLogBacklog();
}
catch(ex){
LigeoLogger.error("LigeoLogger.sendClientErrorToServerLog error "+ex.name+":"+ex.message);
}
return true;
};
LigeoLogger.sendClientErrorToServerLogBacklog=function(){
try{
var _34e=LigeoLogger.getClientErrorToServerLogArray();
while(_34e.length>0&&LigeoLogger.getClientErrorToServerLogAjaxReady()==true){
var _34f=_34e.pop();
if(LigeoVarUtils.isNotNullOrEmpty(_34f)){
LigeoLogger.sendClientErrorArrayToServer(_34f);
}
}
}
catch(ex){
LigeoLogger.error("LigeoLogger.sendClientErrorToServerLogBacklog error "+ex.name+":"+ex.message);
return false;
}
return true;
};
LigeoLogger.sendClientErrorArrayToServer=function(_350){
if(LigeoVarUtils.isNullOrEmpty(_350)){
LigeoLogger.debug("sendClientErrorArrayToServer isNullOrEmpty errorArray");
return;
}
if(LigeoLogger.getClientErrorToServerLogAjaxReady()==false){
LigeoLogger.debug("sendClientErrorArrayToServer lost message AjaxReady==false");
return;
}
var _351=LigeoDOMUtils.createTempFormForAjaxPostPurposes(LigeoLogger.getClientErrorToServerLogServerContext());
for(name in _350){
LigeoDOMUtils.addNewHiddenInputToTempForm(name,name,_350[name],_351);
}
var _352=LigeoAPI.ajaxHtmlMessages(_351,LigeoDOMUtils.createTempDivForAjaxPostPurposes());
};
dojo.provide("com.infonow.ligeo.LigeoFeaturesAPI");
function LigeoFeaturesAPI(){
};
LigeoFeaturesAPI.myDisableZooming=false;
LigeoFeaturesAPI.alertOnErrors=false;
LigeoFeaturesAPI.swallowErrors=false;
LigeoFeaturesAPI.usingBoldRouteInstructions=false;
LigeoFeaturesAPI.isStateImageMapShowing=true;
LigeoFeaturesAPI.addCountryToFullAddress=false;
LigeoFeaturesAPI.myIncludeFormElementsInGridSearch=true;
LigeoFeaturesAPI.excludeNavAreaFromGrid=true;
LigeoFeaturesAPI.showRouteHints=false;
LigeoFeaturesAPI.prohibitedRouteHintPhrases=null;
LigeoFeaturesAPI.setAddCountryToFullAddress=function(){
LigeoFeaturesAPI.addCountryToFullAddress=true;
};
LigeoFeaturesAPI.setIsStateImageMapShowing=function(_353){
LigeoFeaturesAPI.isStateImageMapShowing=_353;
};
LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress=true;
LigeoFeaturesAPI.isSingleLineAsync=false;
LigeoFeaturesAPI.setSingleLineAsync=function(_354){
LigeoFeaturesAPI.isSingleLineAsync=_354;
};
LigeoFeaturesAPI.setMapGridSearchingEnabled=function(_355){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.setMapGridSearchingEnabled is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.setMapGridSearchingEnabled is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().setMapGridSearchingEnabled(_355);
};
LigeoFeaturesAPI.isMapGridSearchingEnabled=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.isMapGridSearchingEnabled is deprecated, getDefaultMap == null");
return false;
}
return LigeoAPI.getDefaultMap().isMapGridSearchingEnabled();
};
LigeoFeaturesAPI.disableMapBalloons=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.disableMapBalloons is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.disableMapBalloons is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().disableMapBalloons();
};
LigeoFeaturesAPI.disableHideMapBalloonOnMouseout=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.disableHideMapBalloonOnMouseout is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.disableHideMapBalloonOnMouseout is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().disableHideMapBalloonOnMouseout();
};
LigeoFeaturesAPI.enableHideMapBalloonOnMouseout=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.enableHideMapBalloonOnMouseout is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.enableHideMapBalloonOnMouseout is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().enableHideMapBalloonOnMouseout();
};
LigeoFeaturesAPI.setShowTrafficNavigationElement=function(_356){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.setShowTrafficNavigationElement is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.setShowTrafficNavigationElement is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().setShowTrafficNavigationElement(_356);
};
LigeoFeaturesAPI.setShowBirdsEyeNavigationElement=function(_357){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.setShowBirdsEyeNavigationElement is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.setShowBirdsEyeNavigationElement is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().setShowBirdsEyeNavigationElement(_357);
};
LigeoFeaturesAPI.getUsingBoldRouteInstructions=function(){
return this.usingBoldRouteInstructions;
};
LigeoFeaturesAPI.setUsingBoldRouteInstructions=function(_358){
this.usingBoldRouteInstructions=_358;
};
LigeoFeaturesAPI.setOpenBalloonsOnClick=function(_359){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.setOpenBalloonsOnClick is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.setOpenBalloonsOnClick is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().setOpenBalloonsOnClick(_359);
};
LigeoFeaturesAPI.hide3dNavigationElement=function(){
alert("LigeoFeaturesAPI.hide3dNavigationElement has been deprecated. Use LigeoMap.setShow3dNavigationElement instead.");
};
LigeoFeaturesAPI.hideBirdsEyeNavigationElement=function(){
alert("LigeoFeaturesAPI.hideBirdsEyeNavigationElement has been deprecated. Use LigeoMap.setShowBirdsEyeNavigationElement instead.");
};
LigeoFeaturesAPI.useBoldKeywordsForRoute=function(){
this.setUsingBoldRouteInstructions(true);
};
LigeoFeaturesAPI.enableRouteMapCustomIcons=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.enableRouteMapCustomIcons is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.enableRouteMapCustomIcons is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().enableRouteMapCustomIcons();
};
LigeoFeaturesAPI.enableRouteMapCustomStartIcon=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.enableRouteMapCustomStartIcon is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.enableRouteMapCustomStartIcon is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().enableRouteMapCustomStartIcon();
};
LigeoFeaturesAPI.enableRouteMapCustomEndIcon=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.enableRouteMapCustomEndIcon is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.enableRouteMapCustomEndIcon is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().enableRouteMapCustomEndIcon();
};
LigeoFeaturesAPI.enableRouteMapCustomWaypointIcon=function(){
if(LigeoVarUtils.isNull(LigeoAPI.getDefaultMap())){
LigeoLogger.error("LigeoFeaturesAPI.enableRouteMapCustomWaypointIcon is deprecated, getDefaultMap == null");
return;
}
LigeoLogger.debug("LigeoFeaturesAPI.enableRouteMapCustomWaypointIcon is deprecated, use map specific accessor");
LigeoAPI.getDefaultMap().enableRouteMapCustomWaypointIcon();
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
LigeoFeaturesAPI.setExcludeNavAreaFromGrid=function(_35a){
LigeoFeaturesAPI.excludeNavAreaFromGrid=_35a;
};
LigeoFeaturesAPI.isExcludeNavAreaFromGrid=function(){
return LigeoFeaturesAPI.excludeNavAreaFromGrid;
};
LigeoFeaturesAPI.setShowRouteHints=function(_35b){
LigeoFeaturesAPI.showRouteHints=_35b;
};
LigeoFeaturesAPI.isShowRouteHints=function(){
return LigeoFeaturesAPI.showRouteHints;
};
LigeoFeaturesAPI.isRouteHintDisplayAllowed=function(_35c){
if(LigeoFeaturesAPI.prohibitedRouteHintPhrases){
for(index in LigeoFeaturesAPI.prohibitedRouteHintPhrases){
if(_35c.indexOf(LigeoFeaturesAPI.prohibitedRouteHintPhrases[index])>=0){
return false;
}
}
}
return true;
};
LigeoFeaturesAPI.addProhibitedRouteHintPhrase=function(_35d){
if(!_35d){
return;
}
if(!LigeoFeaturesAPI.prohibitedRouteHintPhrases){
LigeoFeaturesAPI.prohibitedRouteHintPhrases=new Array();
}
LigeoFeaturesAPI.prohibitedRouteHintPhrases.push(_35d.toUpperCase());
};
LigeoFeaturesAPI.setProhibitedRouteHintPhrases=function(_35e){
LigeoFeaturesAPI.prohibitedRouteHintPhrases=null;
if(_35e){
for(index in _35e){
LigeoFeaturesAPI.addProhibitedRouteHintPhrase(_35e[index]);
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
function LigeoRoute(_35f,_360){
this.myRouteLocations=[];
this.myStartLocation=null;
this.myEndLocation=null;
this.ROUTE_TABLE_START_FULL_ADDRESS=0;
this.ROUTE_TABLE_START_FULL_ADDRESS_NO_COUNTRY=1;
this.routeTableCustomStartAddress=this.ROUTE_TABLE_START_FULL_ADDRESS;
this.routeTableCustomStartAtInstruction=null;
this.ROUTE_TABLE_START_ICON_MOVE_TO_FIRST_INSTRUCTION="ROUTE_TABLE_START_ICON_MOVE_TO_FIRST_INSTRUCTION";
this.routeTableCustomWayPointStartInstruction=null;
this.routeTableCustomWayPointEndInstruction=null;
this.routeTableCustomEndAtInstruction=null;
this.routeTableCustomInstruction=null;
this.routeTableCustomSummaryBlock=null;
this.myWaypointsHeader="Step";
this.myInstructionsHeader="Instruction";
this.myDistancesHeader="Distance";
this.myTimeHeader="Time";
this.myType=VERouteType.Shortest;
this.myRouteStartIcon="mapicon_start.gif";
this.myRouteEndIcon="mapicon_end.gif";
this.myNumberedIconPrefix="no{0}.gif";
this.displayTimeFormat_HH_MM_SS="HH_MM_SS";
this.displayTimeFormat_MM_SS="MM_SS";
this.myTimeFormat=this.displayTimeFormat_MM_SS;
this.unroutableErrorCallback=null;
this.routeSuccessCallback=null;
this.clearRouteLocations=function(){
this.myRouteLocations=[];
};
this.clearRoutes=function(){
this.clearRouteLocations();
this.myStartLocation=null;
this.myEndLocation=null;
};
};
LigeoRoute.prototype.getRouteLocations=function(){
return this.myRouteLocations;
};
LigeoRoute.prototype.getStartLocation=function(){
return this.myStartLocation;
};
LigeoRoute.prototype.setStartLocation=function(_361){
this.myStartLocation=_361;
};
LigeoRoute.prototype.getEndLocation=function(){
return this.myEndLocation;
};
LigeoRoute.prototype.setEndLocation=function(_362){
this.myEndLocation=_362;
};
LigeoRoute.prototype.getRouteTableCustomStartAddress=function(){
return this.routeTableCustomStartAddress;
};
LigeoRoute.prototype.setRouteTableCustomStartAddress=function(_363){
this.routeTableCustomStartAddress=_363;
};
LigeoRoute.prototype.isRouteTableCustomStartAddressNoCountry=function(){
return (this.routeTableCustomStartAddress==this.ROUTE_TABLE_START_FULL_ADDRESS_NO_COUNTRY);
};
LigeoRoute.prototype.getRouteTableCustomWayPointStartInstruction=function(){
return this.routeTableCustomWayPointStartInstruction;
};
LigeoRoute.prototype.setRouteTableCustomWayPointStartInstruction=function(_364){
this.routeTableCustomWayPointStartInstruction=_364;
};
LigeoRoute.prototype.getRouteTableCustomWayPointEndInstruction=function(){
return this.routeTableCustomWayPointEndInstruction;
};
LigeoRoute.prototype.setRouteTableCustomWayPointEndInstruction=function(_365){
this.routeTableCustomWayPointEndInstruction=_365;
};
LigeoRoute.prototype.getRouteTableCustomStartAtInstruction=function(){
return this.routeTableCustomStartAtInstruction;
};
LigeoRoute.prototype.setRouteTableCustomStartAtInstruction=function(_366){
this.routeTableCustomStartAtInstruction=_366;
};
LigeoRoute.prototype.isRouteTableSkipStartAtInstructionMoveIconToFirstInstruction=function(){
var _367=this.getRouteTableCustomStartAtInstruction();
if(LigeoVarUtils.isNullOrEmpty(_367)){
return false;
}
return (_367.indexOf(this.ROUTE_TABLE_START_ICON_MOVE_TO_FIRST_INSTRUCTION)==0);
};
LigeoRoute.prototype.getRouteTableCustomEndAtInstruction=function(){
return this.routeTableCustomEndAtInstruction;
};
LigeoRoute.prototype.setRouteTableCustomEndAtInstruction=function(_368){
this.routeTableCustomEndAtInstruction=_368;
};
LigeoRoute.prototype.getRouteTableCustomInstruction=function(){
return this.routeTableCustomInstruction;
};
LigeoRoute.prototype.setRouteTableCustomInstruction=function(_369){
this.routeTableCustomInstruction=_369;
};
LigeoRoute.prototype.getRouteTableCustomSummaryBlock=function(){
return this.routeTableCustomSummaryBlock;
};
LigeoRoute.prototype.setRouteTableCustomSummaryBlock=function(_36a){
this.routeTableCustomSummaryBlock=_36a;
};
LigeoRoute.prototype.getRouteTableCustomSummaryId=function(){
return this.routeTableCustomSummaryId;
};
LigeoRoute.prototype.setRouteTableCustomSummaryId=function(_36b){
this.routeTableCustomSummaryId=_36b;
};
LigeoRoute.prototype.getWaypointsHeader=function(){
return this.myWaypointsHeader;
};
LigeoRoute.prototype.setWaypointsHeader=function(_36c){
this.myWaypointsHeader=_36c;
};
LigeoRoute.prototype.getInstructionsHeader=function(){
return this.myInstructionsHeader;
};
LigeoRoute.prototype.setInstructionsHeader=function(_36d){
this.myInstructionsHeader=_36d;
};
LigeoRoute.prototype.getDistancesHeader=function(){
return this.myDistancesHeader;
};
LigeoRoute.prototype.setDistancesHeader=function(_36e){
this.myDistancesHeader=_36e;
};
LigeoRoute.prototype.getRouteStartIcon=function(){
return this.myRouteStartIcon;
};
LigeoRoute.prototype.setRouteStartIcon=function(_36f){
this.myRouteStartIcon=_36f;
};
LigeoRoute.prototype.getRouteEndIcon=function(){
return this.myRouteEndIcon;
};
LigeoRoute.prototype.setRouteEndIcon=function(_370){
this.myRouteEndIcon=_370;
};
LigeoRoute.prototype.getNumberedIconPrefix=function(){
return this.myNumberedIconPrefix;
};
LigeoRoute.prototype.setNumberedIconPrefix=function(_371){
this.myNumberedIconPrefix=_371;
};
LigeoRoute.prototype.setTimeFormat=function(_372){
if(_372==this.displayTimeFormat_HH_MM_SS||_372==this.displayTimeFormat_MM_SS){
this.myTimeFormat=_372;
}
};
LigeoRoute.prototype.composeRoutingLocations=function(){
var _373=this.getRouteLocations();
var _374=new Array();
for(var _375=0;_375<_373.length;_375++){
if(!LigeoVarUtils.isNull(_373[_375])){
var _376=_373[_375];
if(isNaN(_376.getLatitude())||isNaN(_376.getLongitude())){
_374.push(_376.getAddressString());
}else{
_374.push(_376.getVELatLong());
}
}
}
return _374;
};
LigeoRoute.prototype.mustUseMapPointWebService=function(){
var _377=LigeoEnvironment.getMapLocale();
return ((_377=="en-AU")||(_377=="en-CA")||(_377=="en-IN")||(_377=="en-GB")||(_377=="es-MX")||(_377=="es-US"));
};
LigeoRoute.prototype.createVERouteOptions=function(_378){
var that=this;
renderRouteCallback=function(_37a){
if(_37a.RouteLegs.length!=0){
if(_378.isRouteMapCustomIcons()){
that.renderCustomMapIcons(_378.getVEMap(),_378.getMapLayer(),_37a);
}
if(LigeoConfigurationAPI.isMapUsingLayers()==false){
_378.resetOriginalZoomAndCenterToVEMapConfiguration();
}
that.renderRouteTable(_37a);
if(that.hasRouteSuccessCallback()){
that.getRouteSuccessCallback()();
}
}else{
if(that.hasUnroutableErrorCallback()){
that.getUnroutableErrorCallback()();
}
}
};
var _37b=new VERouteOptions;
_37b.RouteCallback=renderRouteCallback;
_37b.DistanceUnit=_378.getRouteDistanceUnits();
_37b.ShowDisambiguation=false;
_37b.ShowErrorMessages=false;
_37b.UseMWS=this.mustUseMapPointWebService();
_37b.RouteMode=VERouteMode.Driving;
_37b.UseTraffic=true;
_37b.SetBestMapView=true;
return _37b;
};
LigeoRoute.prototype.renderRoute=function(_37c,_37d){
var _37e=this.composeRoutingLocations();
if(LigeoVarUtils.isNotNullOrEmpty(_37e)&&(_37e.length>0)){
var _37f=this.createVERouteOptions(_37c);
if(LigeoVarUtils.isNotNullOrEmpty(_37d)&&_37d=="false"){
_37f.SetBestMapView=false;
}
_37c.getVEMap().GetDirections(_37e,_37f);
}
};
LigeoRoute.prototype.renderCustomMapIcons=function(_380,_381,_382){
var _383=this.StartLocation;
var _384=new Array();
var _385=new Array();
var _386=false;
var _387=false;
var _388=false;
var _389=LigeoAPI.getRouteMap();
if(LigeoVarUtils.isNotNull(_389)){
_386=_389.isRouteMapCustomStartIcon();
_387=_389.isRouteMapCustomEndIcon();
_388=_389.isRouteMapCustomWaypointIcon();
}else{
var _38a=LigeoAPI.getDefaultMap();
_386=_38a.isRouteMapCustomStartIcon();
_387=_38a.isRouteMapCustomEndIcon();
_388=_38a.isRouteMapCustomWaypointIcon();
}
if(LigeoVarUtils.isNotNull(_381)&&LigeoVarUtils.isNotNull(_382)&&LigeoVarUtils.isNotNull(_382.RouteLegs)){
var _38b=_382.RouteLegs[0].Itinerary.Items.length;
for(var i=0;i<_382.RouteLegs[0].Itinerary.Items.length;i++){
var _38d=_382.RouteLegs[0].Itinerary.Items[i];
if((i==0)&&_386){
_38d.Shape.SetCustomIcon(LigeoEnvironment.getImagePath(this.getRouteStartIcon()));
}else{
if((i==(_38b-1))&&_387){
_38d.Shape.SetCustomIcon(LigeoEnvironment.getImagePath(this.getRouteEndIcon()));
}else{
if(_388){
_38d.Shape.SetCustomIcon(LigeoEnvironment.getImagePath(this.getNumberedIconPrefix().replace("{0}",(i))));
}
}
}
}
}else{
for(var i=0;i<_380._dm.veroutecache.length;i++){
var _38e=new VEShape(VEShapeType.Pushpin,_380._dm.veroutecache[i].LatLong);
if((i==0)&&_386){
_38e.SetCustomIcon(LigeoEnvironment.getImagePath(this.getRouteStartIcon()));
}else{
if((i==_380._dm.veroutecache.length-1)&&_387){
_38e.SetCustomIcon(LigeoEnvironment.getImagePath(this.getRouteEndIcon()));
}else{
if(_388){
_38e.SetCustomIcon(LigeoEnvironment.getImagePath(this.getNumberedIconPrefix().replace("{0}",(i))));
}
}
}
_384.push(_38e);
}
for(i=0;i<_384.length;i++){
if(LigeoVarUtils.isNotNull(_381)){
_381.AddShape(_384[i]);
}else{
_380.AddShape(_384[i]);
}
}
}
};
LigeoRoute.translateRouteDistanceUnit=function(){
var _38f="";
var _390="";
if(LigeoVarUtils.isNotNull(LigeoAPI.getRouteMap())){
_390=LigeoAPI.getRouteMap().getRouteDistanceUnits();
}else{
_390=LigeoAPI.getDefaultMap().getRouteDistanceUnits();
}
switch(_390){
case "Mile":
_38f="mi";
break;
case "Kilometer":
_38f="km";
break;
default:
_38f="mi";
}
return _38f;
};
LigeoRoute.prototype.renderRouteTable=function(_391){
var _392="";
var _393=_391.RouteLegs[0].Itinerary.Items.length;
var _394=_391.RouteLegs[0].Itinerary.Items;
var _395=LigeoRoute.translateRouteDistanceUnit();
var _396=this.createDistanceText(this.formatDist(_391.Distance),_395);
var _397=this.formatTime(_391.Time);
var _398;
var _399=document.getElementById("ligeo-route");
var _39a=false;
var _39b=false;
if(LigeoVarUtils.isNotNull(LigeoAPI.getRouteMap())){
_39a=LigeoAPI.getRouteMap().areRouteTablePushpinsDisabled();
_39b=LigeoAPI.getRouteMap().isTotalDistanceInRoute();
}else{
_39a=LigeoAPI.getDefaultMap().areRouteTablePushpinsDisabled();
_39b=LigeoAPI.getDefaultMap().isTotalDistanceInRoute();
}
var _39c="Start unknown";
var _39d="End unknown";
if(LigeoVarUtils.isNotNull(_399)){
var _39e=this.getRouteLocations();
if(_39e.length!=2){
return;
}
_398="";
if(!_39a){
_398=this.getPushpin(this.getRouteStartIcon());
_398=_398.replace("/>","alt='Location Start Point' title='Location Start Point' />");
}
var _39f=LigeoEnvironment.translateLocaleText("first")+" ";
if(LigeoVarUtils.isNotNullOrEmpty(this.getRouteTableCustomStartAtInstruction)){
_39f=" ";
}
if(!LigeoVarUtils.isNullOrEmpty(LigeoAddressParser.getParsedAddress())){
_39c=LigeoAddressParser.getParsedAddress();
_392+=this.renderInstruction(-1,_393,_398,_39f+_39c,"","",null);
}else{
if(LigeoVarUtils.isNullOrEmpty(_39e[0].Address)&&_39e[0].getAddressString()!=_39e[0].getCountryIso2()){
_39c=_39e[0].getAddressString();
if(this.isRouteTableCustomStartAddressNoCountry()){
_39c=_39e[0].getAddressNoCountryString();
}
if(!this.isRouteTableSkipStartAtInstructionMoveIconToFirstInstruction()){
_392+=this.renderInstruction(-1,_393,_398,_39f+_39c,"","",null);
}
}else{
_39c=LigeoEnvironment.translateLocaleText("yourSelectedLocation");
_392+=this.renderInstruction(-1,_393,_398,_39f+_39c,"",null);
}
}
var i=1;
var _3a1=0;
var _3a2=this.getRouteTableCustomWayPointStartInstruction();
var _3a3=this.getRouteTableCustomWayPointEndInstruction();
if(LigeoVarUtils.isNullOrEmpty(_3a2)){
_3a2="";
}
if(LigeoVarUtils.isNullOrEmpty(_3a2)){
_3a2="";
}
if((LigeoVarUtils.isNullOrEmpty(_3a2))){
_392+=this.renderInstruction(0,_393,"",_394[0].Text,this.createDistanceText(this.formatDist(_394[0].Distance),_395),this.formatTime(_394[0].Time),_394[0].Hints,_394[0].Warnings);
_3a1=1;
}
for(i=_3a1;i<_393-1;i++){
if(_39a){
var j=i+1;
_398=j+".";
}else{
_398=this.getPushpin(this.getNumberedIconPrefix().replace("{0}",i));
_398=_398.replace("/>","alt='Instruction"+(i)+"' title='Instruction "+(i)+"' />");
}
_392+=this.renderInstruction(i,_393,_398,_394[i].Text,this.createDistanceText(this.formatDist(_394[i].Distance),_395),this.formatTime(_394[i].Time),_394[i].Hints,_394[i].Warnings);
if(i==(_393-2)&&!((LigeoVarUtils.isNullOrEmpty(_3a2)))){
_392+="<tr><td>&nbsp;</td></tr>";
}
}
var _3a5="";
var _3a6="";
if(_39b){
_3a5=_396;
_3a6=_397;
}
_398="";
if(!_39a){
_398=this.getPushpin(this.getRouteEndIcon());
_398=_398.replace("/>","alt='Location End Point' title='Location End Point' />");
}
var _3a7="";
if(LigeoVarUtils.isNullOrEmpty(_39e[1].Address)){
_39d=_39e[1].getAddressString();
_3a7=LigeoEnvironment.translateLocaleText("last")+" "+_39d;
}else{
_3a7=LigeoEnvironment.translateLocaleText("last");
_39d=_3a7;
}
_392+=this.renderInstruction(_393,_393,_398,_3a7,_3a5,_3a6,_394[i].Hints,_394[i].Warnings);
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
routeTable="<table id=\"ligeo-routeTable\">";
routeTable+=this.renderHeaderFooter();
routeTable+="<tbody>"+_392+"</tbody>";
routeTable+="</table>";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
routeTable="<ul id=\"ligeo-routeTable\">";
routeTable+=_392;
routeTable+="</ul>";
}
}
_399.innerHTML=routeTable;
}
var _3a8=document.getElementById("ligeo-route-totalDistance");
if(LigeoVarUtils.isNotNull(_3a8)){
_3a8.innerHTML=_396;
}
var _3a9=document.getElementById("ligeo-route-totalTime");
if(LigeoVarUtils.isNotNull(_3a9)){
_3a9.innerHTML=_397;
}
this.renderRouteTableSummaryBlock(_391,_39c,_39d,_396,_397);
};
LigeoRoute.prototype.renderRouteTableSummaryBlock=function(_3aa,_3ab,end,_3ad,time){
var _3af=this.getRouteTableCustomSummaryBlock();
var _3b0=this.getRouteTableCustomSummaryId();
var _3b1=document.getElementById(_3b0);
if(LigeoVarUtils.isNullOrEmpty(_3af)||LigeoVarUtils.isNullOrEmpty(_3b0)||LigeoVarUtils.isNullOrEmpty(_3b1)){
return;
}
_3af=_3af.replace("{0}",_3ab);
_3af=_3af.replace("{1}",end);
_3af=_3af.replace("{2}",_3ad);
_3af=_3af.replace("{3}",time);
_3b1.innerHTML=_3af;
return;
};
LigeoRoute.prototype.getPushpin=function(_3b2){
if(_3b2.indexOf("<img")>=0){
return _3b2;
}
return "<img src='"+LigeoEnvironment.getImagePath(_3b2)+"'/>";
};
LigeoRoute.prototype.createDistanceText=function(_3b3,_3b4){
var _3b5="";
if(LigeoVarUtils.isNotNullOrEmpty(_3b3)){
_3b5=_3b3+" "+_3b4;
}
return _3b5;
};
LigeoRoute.prototype.renderHeaderFooter=function(){
var _3b6="";
_3b6+="<thead>";
_3b6+="<tr id=\"ligeo-row-header\">";
_3b6+="<th class=\"ligeo-waypoint\">";
_3b6+="<span>"+this.myWaypointsHeader+"</span>";
_3b6+="</th>";
_3b6+="<th class=\"ligeo-instruction\">";
_3b6+="<span>"+this.myInstructionsHeader+"</span>";
_3b6+="</th>";
_3b6+="<th class=\"ligeo-distance\">";
_3b6+="<span>"+this.myDistancesHeader+"</span>";
_3b6+="</th>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<th class=\"ligeo-time\">";
_3b6+="<span>"+this.myTimeHeader+"</span>";
_3b6+="</th>";
}
_3b6+="</tr>";
_3b6+="</thead>";
if(LigeoLayoutAPI.getRouteTableFooterOption()!="NONE"){
_3b6+="<tfoot>";
}
switch(LigeoLayoutAPI.getRouteTableFooterOption()){
case "VIEW_2_ROW":
_3b6+="<tr id=\"ligeo-foot-2row1\">";
_3b6+="<td class=\"ligeo-waypoint\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-totalDistance\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+"</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<tr id=\"ligeo-foot-2row2\">";
_3b6+="<td class=\"ligeo-waypoint\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-totalTime\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalTime")+"</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
_3b6+="</tr>";
}
break;
case "VIEW_2_ROW_W_TIME":
_3b6+="<tr id=\"ligeo-foot-2row1\">";
_3b6+="<td class=\"ligeo-waypoint\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-totalDistance\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+"</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
_3b6+="<tr id=\"ligeo-foot-2row2\">";
_3b6+="<td class=\"ligeo-waypoint\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-totalTime\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalTime")+"</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
break;
case "VIEW_3_COL":
_3b6+="<tr id=\"ligeo-foot-3col\">";
_3b6+="<td class=\"ligeo-waypoint\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-total\">";
_3b6+="<span>Total</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
break;
case "VIEW_3_COL_W_TIME":
_3b6+="<tr id=\"ligeo-foot-3col\">";
_3b6+="<td class=\"ligeo-total\">";
_3b6+="<span>Total</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
break;
case "VIEW_4_COL":
_3b6+="<tr id=\"ligeo-foot-4col\">";
_3b6+="<td class=\"ligeo-totalDistance\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+":</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-distance\">";
_3b6+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-totalTime\">";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<span class=\"ligeo-time\">"+LigeoEnvironment.translateLocaleText("totalTime")+":</span>&nbsp;";
}
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
break;
case "VIEW_1_ROW_W_TIME":
_3b6+="<tr id=\"ligeo-foot-1row\">";
_3b6+="<td class=\"ligeo-totalDistance\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalDist")+":</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-totalTime\">";
_3b6+="<span>"+LigeoEnvironment.translateLocaleText("totalTime")+":</span>&nbsp;";
_3b6+="</td>";
_3b6+="<td class=\"ligeo-total\">";
_3b6+="<span id=\"ligeo-route-totalDistance\">## mi</span>&nbsp;";
_3b6+="<span id=\"ligeo-route-totalTime\">## min.</span>&nbsp;";
_3b6+="</td>";
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
_3b6+="<td class=\"ligeo-time\">";
_3b6+="<span>&nbsp;</span>&nbsp;";
_3b6+="</td>";
}
_3b6+="</tr>";
break;
}
if(LigeoLayoutAPI.getRouteTableFooterOption()!="NONE"){
_3b6+="</tfoot>";
}
return _3b6;
};
LigeoRoute.prototype.getRouteHintText=function(_3b7,_3b8){
if(LigeoVarUtils.isNull(_3b7)&&LigeoVarUtils.isNull(_3b8)){
return null;
}
var _3b9=null;
if(LigeoVarUtils.isNotNull(_3b8)){
for(var _3ba=0;_3ba<_3b8.length;_3ba++){
var _3bb=_3b8[_3ba].Severity;
if(_3bb!=0){
continue;
}
var _3bc=_3b8[_3ba].Text;
if(!LigeoFeaturesAPI.isRouteHintDisplayAllowed(_3bc)){
continue;
}
if(_3b9==null){
_3b9=_3bc;
}else{
_3b9+="<br/>"+_3bc;
}
}
}
if(LigeoVarUtils.isNotNull(_3b7)){
for(var _3ba=0;_3ba<_3b7.length;_3ba++){
var _3bd=_3b7[_3ba].Text;
if(!LigeoFeaturesAPI.isRouteHintDisplayAllowed(_3bd)){
continue;
}
if(_3b9==null){
_3b9=_3bd;
}else{
_3b9+="<br/>"+_3bd;
}
}
}
return _3b9;
};
LigeoRoute.prototype.renderInstruction=function(_3be,_3bf,_3c0,_3c1,_3c2,_3c3,_3c4,_3c5){
var _3c6="";
var _3c7=this.getRouteTableCustomWayPointStartInstruction();
var _3c8=this.getRouteTableCustomWayPointEndInstruction();
if(LigeoVarUtils.isNullOrEmpty(_3c7)){
_3c7="";
}
if(LigeoVarUtils.isNullOrEmpty(_3c8)){
_3c8="";
}
var _3c9=null;
var _3ca=null;
if(_3be==-1){
_3be="A";
_3c9=this.getRouteTableCustomStartAtInstruction();
}
if(_3be==_3bf){
_3ca=this.getRouteTableCustomEndAtInstruction();
}
if(LigeoFeaturesAPI.getUsingBoldRouteInstructions()&&LigeoVarUtils.isNullOrEmpty(_3c9)){
_3c1=this.convertToBoldKeywords(_3c1);
}
if(LigeoVarUtils.isNotNullOrEmpty(this.rowOddEven)){
this.rowOddEven=(this.rowOddEven.indexOf("ligeo-odd")>=0)?"ligeo-even":"ligeo-odd";
}else{
this.rowOddEven="ligeo-odd";
}
if(_3be==0||_3be=="A"){
this.rowOddEven+=" first";
}else{
if(_3be==_3bf){
this.rowOddEven+=" last";
}
}
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="<tr id=\"ligeo-row"+_3be+"\" class=\""+this.rowOddEven+"\">";
_3c6+="<th class=\"ligeo-waypoint\">";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="<li id=\"ligeo-row"+_3be+"\" class=\""+this.rowOddEven+"\">";
_3c6+="<div class=\"ligeo-waypoint\">";
}
}
if(_3be==0&&this.isRouteTableSkipStartAtInstructionMoveIconToFirstInstruction()){
var _3cb=this.getPushpin(this.getRouteStartIcon());
_3cb=_3cb.replace("/>","alt='Location Start Point' title='Location Start Point' />");
_3c6+="<span>"+_3cb+"</span><br/>";
}else{
if((_3be=="A")&&!(LigeoVarUtils.isNullOrEmpty(_3c7))){
_3c6+=_3c7;
}
_3c6+="<span>"+_3c0+"</span>";
}
if((_3be==_3bf)&&!(LigeoVarUtils.isNullOrEmpty(_3c8))){
_3c6+=_3c8;
}
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="</th>";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="</div>";
}
}
if(LigeoVarUtils.isNotNullOrEmpty(_3c9)){
var _3cc=_3c9.replace("{0}",_3c1);
_3c6+=_3cc;
}else{
if(LigeoVarUtils.isNotNullOrEmpty(_3ca)){
var _3cc=_3ca.replace("{0}",_3c1);
_3c6+=_3cc;
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="<td class=\"ligeo-instruction\">";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="<div class=\"ligeo-instruction\">";
}
}
_3c6+="<span>"+_3c1+"</span>";
}
}
if(LigeoFeaturesAPI.isShowRouteHints()){
var _3cd=this.getRouteHintText(_3c4,_3c5);
if(_3cd!=null){
_3c6+="<span class=\"ligeo-route-hint\">"+_3cd+"</span>";
}
}
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="</td>";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="</div>";
}
}
if(LigeoVarUtils.isNullOrEmpty(_3c9)&&LigeoVarUtils.isNullOrEmpty(_3ca)){
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="<td class=\"ligeo-distance\">";
_3c6+="<span>"+_3c2+"</span><br/>";
_3c6+="</td>";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="<div class=\"ligeo-distance\">";
_3c6+="<span>"+_3c2+"</span><br/>";
_3c6+="</div>";
}
}
}
if(LigeoLayoutAPI.getDisplayTimeInRoute()){
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="<td class=\"ligeo-time\">";
_3c6+="<span>"+_3c3+"</span><br/>";
_3c6+="</td>";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="<div class=\"ligeo-time\">";
_3c6+="<span>"+_3c3+"</span><br/>";
_3c6+="</div>";
}
}
}
if(LigeoLayoutAPI.getRouteDisplayOption()=="TABLE"){
_3c6+="</tr>";
}else{
if(LigeoLayoutAPI.getRouteDisplayOption()=="LIST"){
_3c6+="</li>";
}
}
return _3c6;
};
LigeoRoute.prototype.convertToBoldKeywords=function(_3ce){
var _3cf="";
_3cf=_3ce.replace(/\b(\s*exit\s*|\s*take\s*|\s*turn\s*|\s*depart\s*|\s*bear\s*|\s*onto\s*|\s*for\s*|\s*and\s*|\s*then\s*|\s*keep\s*|\s*follow\s*|\s*signs\s*|\s*toward\s*|\s*at\s*|\s*ramp\s*|\s*stay\s*|\s*on\s*|\s*to\s*|\s*road name changes\s*|\s*arrive\s*|\s*start\s*|\s*make a\s*)\b/gi,"</strong>$1<strong>");
_3cf="<strong>"+_3cf+"</strong>";
_3cf=_3cf.replace(/<strong><\/strong>/g,"");
return _3cf;
};
LigeoRoute.prototype.formatTime=function(time){
var min=parseFloat(time)/60;
min=Math.floor(min);
var sec=parseFloat(time)-(min*60);
var _3d3="";
if(this.myTimeFormat==this.displayTimeFormat_HH_MM_SS&&min>60){
var _3d4=parseFloat(min)/60;
_3d4=Math.floor(_3d4);
_3d3+=_3d4+"hr ";
min=parseFloat(min)-(_3d4*60);
}
if(min>0){
_3d3+=min+" min ";
}
_3d3+=sec+" sec";
return _3d3;
};
LigeoRoute.prototype.formatDist=function(dist){
dist=parseFloat(dist*10);
dist=Math.round(dist)/10;
return dist;
};
LigeoRoute.prototype.addRoute=function(_3d6,_3d7){
if(LigeoConfigurationAPI.isMapUsingLayers()==true){
this.clearRouteLocations();
}
var _3d8=this.getRouteLocations();
_3d8.push(_3d6);
_3d8.push(_3d7);
};
LigeoRoute.prototype.hasUnroutableErrorCallback=function(){
return LigeoVarUtils.isFunction(this.getUnroutableErrorCallback());
};
LigeoRoute.prototype.getUnroutableErrorCallback=function(){
return this.unroutableErrorCallback;
};
LigeoRoute.prototype.setUnroutableErrorCallback=function(_3d9){
this.unroutableErrorCallback=_3d9;
};
LigeoRoute.prototype.hasRouteSuccessCallback=function(){
return LigeoVarUtils.isFunction(this.getRouteSuccessCallback());
};
LigeoRoute.prototype.getRouteSuccessCallback=function(){
return this.routeSuccessCallback;
};
LigeoRoute.prototype.setRouteSuccessCallback=function(_3da){
this.routeSuccessCallback=_3da;
};
dojo.provide("com.infonow.ligeo.util.LigeoVEAdapter");
function LigeoVEAdapter(){
};
LigeoVEAdapter.adaptToBrowser=function(){
LigeoVEAdapter.adaptToIE6();
};
LigeoVEAdapter.adaptDrawingLibrary=function(){
var _3db;
Msn.Drawing.Graphic.CreateGraphic=function(f,b){
if(document.all){
return new Msn.Drawing.VMLGraphic(f,b);
}else{
_3db=new RegExp("Firefox/(.*)").exec(navigator.userAgent);
if(_3db[1]&&parseFloat(_3db[1])>=1.5){
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
dojo.provide("dojo.io.cookie");
dojo.io.cookie.setCookie=function(name,_3df,days,path,_3e2,_3e3){
path="/";
var _3e4=-1;
if((typeof days=="number")&&(days>=0)){
var d=new Date();
d.setTime(d.getTime()+(days*24*60*60*1000));
_3e4=d.toGMTString();
}
_3df=escape(_3df);
document.cookie=name+"="+_3df+";"+(_3e4!=-1?" expires="+_3e4+";":"")+(path?"path="+path:"")+(_3e2?"; domain="+_3e2:"")+(_3e3?"; secure":"");
};
dojo.io.cookie.set=dojo.io.cookie.setCookie;
dojo.io.cookie.getCookie=function(name){
var idx=document.cookie.lastIndexOf(name+"=");
if(idx==-1){
return null;
}
var _3e8=document.cookie.substring(idx+name.length+1);
var end=_3e8.indexOf(";");
if(end==-1){
end=_3e8.length;
}
_3e8=_3e8.substring(0,end);
_3e8=unescape(_3e8);
return _3e8;
};
dojo.io.cookie.get=dojo.io.cookie.getCookie;
dojo.io.cookie.deleteCookie=function(name){
dojo.io.cookie.setCookie(name,"-",0);
};
dojo.io.cookie.setObjectCookie=function(name,obj,days,path,_3ef,_3f0,_3f1){
if(arguments.length==5){
_3f1=_3ef;
_3ef=null;
_3f0=null;
}
var _3f2=[],_3f3,_3f4="";
if(!_3f1){
_3f3=dojo.io.cookie.getObjectCookie(name);
}
if(days>=0){
if(!_3f3){
_3f3={};
}
for(var prop in obj){
if(obj[prop]==null){
delete _3f3[prop];
}else{
if((typeof obj[prop]=="string")||(typeof obj[prop]=="number")){
_3f3[prop]=obj[prop];
}
}
}
prop=null;
for(var prop in _3f3){
_3f2.push(escape(prop)+"="+escape(_3f3[prop]));
}
_3f4=_3f2.join("&");
}
dojo.io.cookie.setCookie(name,_3f4,days,path,_3ef,_3f0);
};
dojo.io.cookie.getObjectCookie=function(name){
var _3f7=null,_3f8=dojo.io.cookie.getCookie(name);
if(_3f8){
_3f7={};
var _3f9=_3f8.split("&");
for(var i=0;i<_3f9.length;i++){
var pair=_3f9[i].split("=");
var _3fc=pair[1];
if(isNaN(_3fc)){
_3fc=unescape(pair[1]);
}
_3f7[unescape(pair[0])]=_3fc;
}
}
return _3f7;
};
dojo.io.cookie.isSupported=function(){
if(typeof navigator.cookieEnabled!="boolean"){
dojo.io.cookie.setCookie("__TestingYourBrowserForCookieSupport__","CookiesAllowed",90,null);
var _3fd=dojo.io.cookie.getCookie("__TestingYourBrowserForCookieSupport__");
navigator.cookieEnabled=(_3fd=="CookiesAllowed");
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
dojo.html._toggle=function(node,_3ff,_400){
node=dojo.byId(node);
_400(node,!_3ff(node));
return _3ff(node);
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
dojo.html.setShowing=function(node,_405){
dojo.html[(_405?"show":"hide")](node);
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
dojo.html.setDisplay=function(node,_40b){
dojo.html.setStyle(node,"display",((_40b instanceof String||typeof _40b=="string")?_40b:(_40b?dojo.html.suggestDisplayByTagName(node):"none")));
};
dojo.html.isDisplayed=function(node){
return (dojo.html.getComputedStyle(node,"display")!="none");
};
dojo.html.toggleDisplay=function(node){
return dojo.html._toggle(node,dojo.html.isDisplayed,dojo.html.setDisplay);
};
dojo.html.setVisibility=function(node,_40f){
dojo.html.setStyle(node,"visibility",((_40f instanceof String||typeof _40f=="string")?_40f:(_40f?"visible":"hidden")));
};
dojo.html.isVisible=function(node){
return (dojo.html.getComputedStyle(node,"visibility")!="hidden");
};
dojo.html.toggleVisibility=function(node){
return dojo.html._toggle(node,dojo.html.isVisible,dojo.html.setVisibility);
};
dojo.html.setOpacity=function(node,_413,_414){
node=dojo.byId(node);
var h=dojo.render.html;
if(!_414){
if(_413>=1){
if(h.ie){
dojo.html.clearOpacity(node);
return;
}else{
_413=0.999999;
}
}else{
if(_413<0){
_413=0;
}
}
}
if(h.ie){
if(node.nodeName.toLowerCase()=="tr"){
var tds=node.getElementsByTagName("td");
for(var x=0;x<tds.length;x++){
tds[x].style.filter="Alpha(Opacity="+_413*100+")";
}
}
node.style.filter="Alpha(Opacity="+_413*100+")";
}else{
if(h.moz){
node.style.opacity=_413;
node.style.MozOpacity=_413;
}else{
if(h.safari){
node.style.opacity=_413;
node.style.KhtmlOpacity=_413;
}else{
node.style.opacity=_413;
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
var _420=0;
while(node){
if(dojo.html.getComputedStyle(node,"position")=="fixed"){
return 0;
}
var val=node[prop];
if(val){
_420+=val-0;
if(node==dojo.body()){
break;
}
}
node=node.parentNode;
}
return _420;
};
dojo.html.setStyleAttributes=function(node,_423){
node=dojo.byId(node);
var _424=_423.replace(/(;)?\s*$/,"").split(";");
for(var i=0;i<_424.length;i++){
var _426=_424[i].split(":");
var name=_426[0].replace(/\s*$/,"").replace(/^\s*/,"").toLowerCase();
var _428=_426[1].replace(/\s*$/,"").replace(/^\s*/,"");
switch(name){
case "opacity":
dojo.html.setOpacity(node,_428);
break;
case "content-height":
dojo.html.setContentBox(node,{height:_428});
break;
case "content-width":
dojo.html.setContentBox(node,{width:_428});
break;
case "outer-height":
dojo.html.setMarginBox(node,{height:_428});
break;
case "outer-width":
dojo.html.setMarginBox(node,{width:_428});
break;
default:
node.style[dojo.html.toCamelCase(name)]=_428;
}
}
};
dojo.html.boxSizing={MARGIN_BOX:"margin-box",BORDER_BOX:"border-box",PADDING_BOX:"padding-box",CONTENT_BOX:"content-box"};
dojo.html.getAbsolutePosition=dojo.html.abs=function(node,_42a,_42b){
node=dojo.byId(node,node.ownerDocument);
var ret={x:0,y:0};
var bs=dojo.html.boxSizing;
if(!_42b){
_42b=bs.CONTENT_BOX;
}
var _42e=2;
var _42f;
switch(_42b){
case bs.MARGIN_BOX:
_42f=3;
break;
case bs.BORDER_BOX:
_42f=2;
break;
case bs.PADDING_BOX:
default:
_42f=1;
break;
case bs.CONTENT_BOX:
_42f=0;
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
_42e=1;
try{
var bo=document.getBoxObjectFor(node);
ret.x=bo.x-dojo.html.sumAncestorProperties(node,"scrollLeft");
ret.y=bo.y-dojo.html.sumAncestorProperties(node,"scrollTop");
}
catch(e){
}
}else{
if(node["offsetParent"]){
var _433;
if((h.safari)&&(node.style.getPropertyValue("position")=="absolute")&&(node.parentNode==db)){
_433=db;
}else{
_433=db.parentNode;
}
if(node.parentNode!=db){
var nd=node;
if(dojo.render.html.opera){
nd=db;
}
ret.x-=dojo.html.sumAncestorProperties(nd,"scrollLeft");
ret.y-=dojo.html.sumAncestorProperties(nd,"scrollTop");
}
var _435=node;
do{
var n=_435["offsetLeft"];
if(!h.opera||n>0){
ret.x+=isNaN(n)?0:n;
}
var m=_435["offsetTop"];
ret.y+=isNaN(m)?0:m;
_435=_435.offsetParent;
}while((_435!=_433)&&(_435!=null));
}else{
if(node["x"]&&node["y"]){
ret.x+=isNaN(node.x)?0:node.x;
ret.y+=isNaN(node.y)?0:node.y;
}
}
}
}
if(_42a){
var _438=dojo.html.getScroll();
ret.y+=_438.top;
ret.x+=_438.left;
}
var _439=[dojo.html.getPaddingExtent,dojo.html.getBorderExtent,dojo.html.getMarginExtent];
if(_42e>_42f){
for(var i=_42f;i<_42e;++i){
ret.y+=_439[i](node,"top");
ret.x+=_439[i](node,"left");
}
}else{
if(_42e<_42f){
for(var i=_42f;i>_42e;--i){
ret.y-=_439[i-1](node,"top");
ret.x-=_439[i-1](node,"left");
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
dojo.html._sumPixelValues=function(node,_43d,_43e){
var _43f=0;
for(var x=0;x<_43d.length;x++){
_43f+=dojo.html.getPixelValue(node,_43d[x],_43e);
}
return _43f;
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
var _44c=dojo.html.getBorder(node);
return {width:pad.width+_44c.width,height:pad.height+_44c.height};
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
var _451;
if(!h.ie){
_451=dojo.html.getStyle(node,"-moz-box-sizing");
if(!_451){
_451=dojo.html.getStyle(node,"box-sizing");
}
}
return (_451?_451:bs.CONTENT_BOX);
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
var _456=dojo.html.getBorder(node);
return {width:box.width-_456.width,height:box.height-_456.height};
};
dojo.html.getContentBox=function(node){
node=dojo.byId(node);
var _458=dojo.html.getPadBorder(node);
return {width:node.offsetWidth-_458.width,height:node.offsetHeight-_458.height};
};
dojo.html.setContentBox=function(node,args){
node=dojo.byId(node);
var _45b=0;
var _45c=0;
var isbb=dojo.html.isBorderBox(node);
var _45e=(isbb?dojo.html.getPadBorder(node):{width:0,height:0});
var ret={};
if(typeof args.width!="undefined"){
_45b=args.width+_45e.width;
ret.width=dojo.html.setPositivePixelValue(node,"width",_45b);
}
if(typeof args.height!="undefined"){
_45c=args.height+_45e.height;
ret.height=dojo.html.setPositivePixelValue(node,"height",_45c);
}
return ret;
};
dojo.html.getMarginBox=function(node){
var _461=dojo.html.getBorderBox(node);
var _462=dojo.html.getMargin(node);
return {width:_461.width+_462.width,height:_461.height+_462.height};
};
dojo.html.setMarginBox=function(node,args){
node=dojo.byId(node);
var _465=0;
var _466=0;
var isbb=dojo.html.isBorderBox(node);
var _468=(!isbb?dojo.html.getPadBorder(node):{width:0,height:0});
var _469=dojo.html.getMargin(node);
var ret={};
if(typeof args.width!="undefined"){
_465=args.width-_468.width;
_465-=_469.width;
ret.width=dojo.html.setPositivePixelValue(node,"width",_465);
}
if(typeof args.height!="undefined"){
_466=args.height-_468.height;
_466-=_469.height;
ret.height=dojo.html.setPositivePixelValue(node,"height",_466);
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
dojo.html.toCoordinateObject=dojo.html.toCoordinateArray=function(_46e,_46f,_470){
if(_46e instanceof Array||typeof _46e=="array"){
dojo.deprecated("dojo.html.toCoordinateArray","use dojo.html.toCoordinateObject({left: , top: , width: , height: }) instead","0.5");
while(_46e.length<4){
_46e.push(0);
}
while(_46e.length>4){
_46e.pop();
}
var ret={left:_46e[0],top:_46e[1],width:_46e[2],height:_46e[3]};
}else{
if(!_46e.nodeType&&!(_46e instanceof String||typeof _46e=="string")&&("width" in _46e||"height" in _46e||"left" in _46e||"x" in _46e||"top" in _46e||"y" in _46e)){
var ret={left:_46e.left||_46e.x||0,top:_46e.top||_46e.y||0,width:_46e.width||0,height:_46e.height||0};
}else{
var node=dojo.byId(_46e);
var pos=dojo.html.abs(node,_46f,_470);
var _474=dojo.html.getMarginBox(node);
var ret={left:pos.left,top:pos.top,width:_474.width,height:_474.height};
}
}
ret.x=ret.left;
ret.y=ret.top;
return ret;
};
dojo.html.setMarginBoxWidth=dojo.html.setOuterWidth=function(node,_476){
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
dojo.html.getTotalOffset=function(node,type,_479){
return dojo.html._callDeprecated("getTotalOffset","getAbsolutePosition",arguments,null,type);
};
dojo.html.getAbsoluteX=function(node,_47b){
return dojo.html._callDeprecated("getAbsoluteX","getAbsolutePosition",arguments,null,"x");
};
dojo.html.getAbsoluteY=function(node,_47d){
return dojo.html._callDeprecated("getAbsoluteY","getAbsolutePosition",arguments,null,"y");
};
dojo.html.totalOffsetLeft=function(node,_47f){
return dojo.html._callDeprecated("totalOffsetLeft","getAbsolutePosition",arguments,null,"left");
};
dojo.html.totalOffsetTop=function(node,_481){
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
dojo.html.setContentBoxWidth=dojo.html.setContentWidth=function(node,_48b){
return dojo.html._callDeprecated("setContentBoxWidth","setContentBox",arguments,"width");
};
dojo.html.setContentBoxHeight=dojo.html.setContentHeight=function(node,_48d){
return dojo.html._callDeprecated("setContentBoxHeight","setContentBox",arguments,"height");
};
dojo.provide("com.infonow.ligeo.map.LigeoMap");
function LigeoMap(id,_48f,_490,_491,_492){
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
this.myLigeoRoute=null;
this.showTraffic=false;
this.myHideMapBalloonOnMouseout=false;
this.myHideMapBalloonOnChangeView=false;
this.showBirdsEyeNavigationElement=true;
this.showTrafficNavigationElement=true;
this.mapGridSearchingEnabled=false;
this.myDisableMapBalloons=false;
this.myDisableRouteMapBalloons=false;
this.myMapDistanceUnits=null;
this.myRouteDistanceUnits=null;
this.showRadiusSearchElement=false;
this.myDisableMapNavigator=false;
this.show3dNavigationElement=false;
this.showResultsCenterLocation=true;
this.showRouteCenterLocation=false;
this.showDrillCenterLocation=true;
this.showResultsLocations=true;
this.showRouteOtherLocations=false;
this.showDrillOtherLocations=true;
this.openBalloonsOnClick=false;
this.myDisableMapPanningAndZooming=false;
this.myDisableTermsAndConditions=false;
this.mapTermsParentDiv="content";
this.myEnableRouteMapCustomIcons=false;
this.myEnableRouteMapCustomStartIcon=true;
this.myEnableRouteMapCustomEndIcon=true;
this.myEnableRouteMapCustomWaypointIcon=true;
this.myDisableRouteTablePushpins=false;
this.myIncludeTotalDistanceInRoute=false;
this.myMapLayer=null;
this.useCookieToPersistMapStyle=false;
this.myMapViewStyle="r";
this.clear=function(){
var _494=that.getVEMap();
if(LigeoConfigurationAPI.isMapUsingLayers()==false){
that.myCenterLocation=null;
that.myOriginalCenter=null;
that.myOriginalZoom=null;
if(_494!=null){
_494.DeleteAllShapeLayers();
}
}
that.myLocations=[];
if(_494!=null){
_494.DeleteRoute();
}
if(that.hasLigeoRoute()){
that.getLigeoRoute().clearRoutes();
}
};
this.handleOnLoadMap=function(){
try{
that.hide();
if(that.isMapNavigatorDisabled()){
that.hideDashboard();
}
that.getEro().wasManuallyClosed=true;
that.getEro().hide();
that.applyMapStyles();
that.fixNavMapStyles("handleOnLoadMap");
}
catch(error){
LigeoLogger.error(error);
}
};
this.suppressHideMapBalloonOnMouseout=function(_495){
if(that.getEro().wasManuallyClosed!==true){
that.getEro().wasMapBalloonOnMouseoutSuppressed=true;
that.getEro().showImmediate();
}
};
this.resetMapBalloonWasManuallyClosed=function(_496){
that.getEro().wasManuallyClosed=false;
that.getEro().wasMapBalloonOnMouseoutSuppressed=false;
};
this.rememberMapStyle=function(_497){
var _498=_497.mapStyle;
if(_497.mapStyle=="b"){
_498="h";
}else{
if(_497.mapStyle=="o"){
_498="a";
}
}
LigeoLogger.debug("rememberMapStyle mapid="+this.getId()+" myStyle="+this.getMapStyle());
if(this.getUseCookieToPersistMapStyle()==true){
dojo.io.cookie.setCookie(that.MAP_STYLE,_498);
}else{
this.setMapViewStyle(_498);
}
};
this.getMapStyle=function(){
var _499="r";
if(this.getUseCookieToPersistMapStyle()==true){
var _49a=dojo.io.cookie.getCookie(that.MAP_STYLE);
if(LigeoVarUtils.isNotNullOrEmpty(_49a)){
_499=_49a;
}
}else{
_499=this.getMapViewStyle();
}
return _499;
};
this.createAndShowBalloon=function(_49b,_49c){
LigeoBalloon.createAndShowBalloon(that.getVEMap(),_49c,_49b,that.getMapHtmlElement(),that.myWidth,that.myHeight);
};
this.showLigeoLocationBalloonByUniqueId=function(_49d){
try{
var _49e=that.getLocationById(_49d);
if(LigeoVarUtils.isNotNull(_49e)){
that.createAndShowBalloon(_49e,_49e.getVEShape());
}
}
catch(error){
LigeoLogger.error(error);
}
return true;
};
this.showLigeoLocationBalloon=function(_49f){
try{
if(_49f.elementID){
var _4a0=that.getVEMap().GetShapeByID(_49f.elementID);
var _4a1=that.getLocationByShape(_4a0);
that.createAndShowBalloon(_4a1,_4a0);
}
}
catch(error){
LigeoLogger.error(error);
}
return true;
};
this.handleVeOnChangeView=function(){
var _4a2=that.getVEMap();
if(LigeoConfigurationAPI.isMapUsingLayers()==true){
that.resetOriginalZoomAndCenterToVEMapConfiguration();
}
if(that.isHideMapBalloonOnChangeView()==true){
LigeoAPI.closeBalloon();
}
if(that.isMapGridSearchingEnabled()){
if(that.isCoordinatingMap==true){
that.isCoordinatingMap=false;
LigeoAPI.skipGridSearch(false);
}else{
if(!LigeoAPI.mySkipGridSearch){
if(LigeoAPI.hasGridSearchVisualCueHandler()){
LigeoAPI.getGridSearchVisualCueHandler()();
}
LigeoGridSearch.performGridSearch(that);
}else{
LigeoAPI.skipGridSearch(false);
}
}
}
};
this.disableMapPanningAndZoomingHandler=function(_4a3){
that.setElementStyle("cursor","default");
return true;
};
this.loadViewableMap=function(_4a4,_4a5,_4a6){
var _4a7=this.getVEMap();
var _4a8=LigeoConfigurationAPI.getMapAuthToken();
_4a7.SetCredentials(_4a8);
_4a7.AttachEvent("ontokenerror",that.onTokenError);
_4a7.AttachEvent("ontokenexpire",that.onTokenExpire);
LigeoLogger.debug("Setting token : "+LigeoConfigurationAPI.getMapAuthToken());
_4a7.onLoadMap=this.handleOnLoadMap;
var _4a9=null;
if(LigeoVarUtils.isNotNull(_4a4)&&LigeoVarUtils.isNotNull(_4a5)){
try{
_4a9=new VELatLong(_4a4,_4a5);
}
catch(ex){
LigeoLogger.error("Invalid lat/long; lat="+_4a4+" lon="+_4a5+".\n"+"The exception is: "+ex.toString());
}
}
var _4aa=(LigeoVarUtils.isNotNull(_4a6))?_4a6:null;
var _4ab=VEMapStyle.Road;
var _4ac=false;
var _4ad=VEMapMode.Mode2D;
var _4ae=this.isShow3dNavigationElement();
var _4af=0;
var _4b0=new VEMapOptions;
_4b0.EnableBirdseye=LigeoConfigurationAPI.getShowBirdsEyeNavigationElement();
_4b0.EnableDashboardLabels=true;
_4a7.LoadMap(_4a9,_4aa,_4ab,_4ac,_4ad,_4ae,_4af,_4b0);
};
radiusSearchOnMouseDown=function(_4b1){
LigeoMapDrawingToolkit.startDrawingCircle(that.getVEMap(),_4b1);
};
radiusSearchOnMouseUp=function(_4b2){
LigeoMapDrawingToolkit.endDrawingCircle(that.getVEMap(),_4b2);
};
radiusSearchOnMouseMove=function(_4b3){
LigeoMapDrawingToolkit.activeDrawingCircle(that.getVEMap(),_4b3);
};
this.initializeMap=function(_4b4,_4b5,_4b6){
that.loadViewableMap(_4b4,_4b5,_4b6);
var _4b7;
var _4b8=this.getVEMap();
_4b8.ShowMessageBox=false;
if(that.isShowTrafficNavigationElement()){
var _4b9=document.createElement("div");
_4b9.id="inow_MSVE_navAction_traffic";
_4b9.innerHTML=LigeoEnvironment.translateLocaleText("traffic");
_4b9.title=LigeoEnvironment.translateLocaleText("showTrafficTip");
_4b9.onclick=function(){
if(_4b9.className.indexOf("disabled")<0){
that.toggleTraffic();
that.fixNavMapStyles("clickedOnTraffic");
}
};
_4b7=LigeoDOMUtils.getElementsById("MSVE_navAction_RoadMapStyle",this.getMapHtmlElementId());
_4b9.className=_4b7[0].className;
_4b7=LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",this.getMapHtmlElementId());
_4b7[0].insertBefore(_4b9,null);
var _4ba=LigeoDOMUtils.getElementsById("MSVE_navAction_container",this.getMapHtmlElementId());
_4ba=_4ba[0];
var _4bb=LigeoDOMUtils.getElementsById("MSVE_navAction_toggleGlyphInner",this.getMapHtmlElementId());
_4bb=_4bb[0];
_4bb.onclick=function(){
if(that.isShowTraffic()){
if(_4ba.className.indexOf("collapsed")<0){
that.getVEMap().HideTrafficLegend();
}else{
that.getVEMap().ShowTrafficLegend();
}
}
that.fixNavMapStyles("show navbar by glyph");
};
}
if(LigeoConfigurationAPI.getShowBirdsEyeNavigationElement()==true&&that.isShowBirdsEyeNavigationElement()==false){
that.disableBirdsEye();
}
if(that.isRadiusSearchElement()){
LigeoMap.searchShapeLayer=new VEShapeLayer();
_4b8.AddShapeLayer(LigeoMap.searchShapeLayer);
that.attachHandlerOnMouseDown(that.radiusSearchOnMouseDown);
that.attachHandlerOnMouseUp(that.radiusSearchOnMouseUp);
that.attachHandlerOnMouseMove(that.radiusSearchOnMouseMove);
if(LigeoVarUtils.isNotNullOrEmpty(LigeoConfigurationAPI.getRadiusSearchLocation())){
if(LigeoVarUtils.isNullOrEmpty(LigeoDOMUtils.getElementsById("inow_MSVE_navAction_radius"))){
var _4bc=document.createElement("div");
_4bc.id="inow_MSVE_navAction_radius";
if(LigeoVarUtils.isNotNullOrEmpty(LigeoConfigurationAPI.getRadiusSearchIcon())){
_4bc.innerHTML="<img src='"+LigeoConfigurationAPI.getRadiusSearchIcon()+"' border='0' alt='SEARCH BY CIRCLE'>";
}else{
_4bc.innerHTML="RADIUS SEARCH";
_4bc.title="SEARCH BY CIRCLE";
}
_4bc.onclick=function(){
LigeoMapDrawingToolkit.setRadiusToolActive(!LigeoMapDrawingToolkit.isRadiusToolActive());
LigeoMap.searchShapeLayer.DeleteAllShapes();
_4b7=LigeoDOMUtils.getElementsById("inow_MSVE_navAction_radius");
if(LigeoMapDrawingToolkit.isRadiusToolActive()){
that.getVEMap().vemapcontrol.EnableGeoCommunity(true);
document.getElementById(that.myId).style.cursor="crosshair";
_4b7[0].innerHTML="<img src='"+LigeoConfigurationAPI.getRadiusSearchIconOn()+"' border='0' alt='SEARCH BY CIRCLE'>";
if(that.isMapGridSearchingEnabled()){
LigeoAPI.skipGridSearch(true);
}
}else{
that.getVEMap().vemapcontrol.EnableGeoCommunity(false);
document.getElementById(that.myId).style.cursor="default";
_4b7[0].innerHTML="<img src='"+LigeoConfigurationAPI.getRadiusSearchIcon()+"' border='0' alt='SEARCH BY CIRCLE'>";
if(that.isMapGridSearchingEnabled()){
LigeoAPI.skipGridSearch(false);
}
}
that.fixNavMapStyles("initialize LigeoMap");
};
if(LigeoVarUtils.isNotNullOrEmpty(LigeoConfigurationAPI.getRadiusSearchLocation())){
_4b7=LigeoDOMUtils.getElementsById(LigeoConfigurationAPI.getRadiusSearchLocation());
}else{
_4b7=LigeoDOMUtils.getElementsById("MSVE_navAction_RoadMapStyle",this.getMapHtmlElementId());
_4bc.className=_4b7[0].className;
_4b7=LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",this.getMapHtmlElementId());
}
_4b7[0].insertBefore(_4bc,null);
}
}
}
this.attachHandlerOnEndZoom(this.handleVeOnChangeEndZoom);
};
this.handleVeOnChangeMapStyle=function(_4bd){
that.fixNavMapStyles("handleVeOnChangeMapStyle");
if((_4bd.mapStyle=="b")||(_4bd.mapStyle=="o")){
var _4be=document.getElementById("MSVE_navAction_ObliqueMapView");
if(LigeoVarUtils.isNotNull(_4be)){
if(_4be.className=="MSVE_MapStyle_disabled"){
that.setMapViewStyle(that.getMapStyle());
LigeoAPI.skipGridSearch(true);
that.applyMapStyles();
var _4bf=setTimeout(function(){
var _4c0=_4be.parentElement.className;
_4c0=_4c0.replace(" MSVE_ObliqueView","");
_4be.parentElement.className=_4c0;
var _4c0=_4be.parentElement.parentElement.className;
_4c0=_4c0.replace(" MSVE_ObliqueView","");
_4be.parentElement.parentElement.className=_4c0;
var _4c0=_4be.parentElement.parentElement.parentElement.className;
_4c0=_4c0.replace("MSVE_ObliqueView","MSVE_OrthoView");
_4be.parentElement.parentElement.parentElement.className=_4c0;
},1);
}else{
LigeoAPI.closeBalloon();
that.rememberMapStyle(_4bd);
}
}
}else{
that.rememberMapStyle(_4bd);
}
};
this.handleVeOnChangeEndZoom=function(){
var _4c1=that.getVEMap();
that.fixNavMapStyles("handleVeOnChangeEndZoom");
if(that.isShowTrafficNavigationElement()){
var _4c2=LigeoDOMUtils.getElementsById("inow_MSVE_navAction_traffic",that.getMapHtmlElementId());
_4c2=_4c2[0];
var _4c3=_4c2.className;
if((that.getZoom()>14)||(that.getZoom()<9)){
if(_4c2.className.indexOf("disabled")<0){
that.setShowTraffic(true);
that.toggleTraffic();
_4c3=_4c3.replace("MSVE_MapStyle","MSVE_MapStyle_disabled");
_4c3=_4c3.replace(" MSVE_selected","");
_4c2.className=_4c3;
}
}else{
_4c3=_4c3.replace("MSVE_MapStyle_disabled","MSVE_MapStyle");
_4c2.className=_4c3;
}
}
};
this.isShowTraffic=function(){
return that.showTraffic;
};
this.setShowTraffic=function(_4c4){
that.showTraffic=_4c4;
};
this.toggleTraffic=function(){
var _4c5=that.isShowTraffic();
var _4c6=LigeoDOMUtils.getElementsById("inow_MSVE_navAction_traffic",that.getMapHtmlElementId());
_4c6=_4c6[0];
var _4c7=_4c6.className;
var _4c8=that.getVEMap();
if(_4c5){
_4c8.ClearTraffic();
_4c6.title=LigeoEnvironment.translateLocaleText("showTrafficTip");
_4c7=_4c7.replace(" MSVE_selected","");
}else{
_4c8.LoadTraffic(true);
if(LigeoVarUtils.isNotNullOrEmpty(_4c6.offsetParent)){
_4c8.ShowTrafficLegend(_4c6.offsetLeft+_4c6.offsetParent.offsetLeft,_4c6.offsetHeight+10);
_4c6.title=LigeoEnvironment.translateLocaleText("hideTrafficTip");
_4c7=_4c7+" MSVE_selected";
}
}
_4c6.className=_4c7;
that.setShowTraffic(!_4c5);
};
this.showThisAndHideOthers=function(){
hideOtherMaps=function(_4c9){
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
var _4cb=LigeoConfigurationAPI.getMyMapDivIDs()[i];
if(_4cb!=_4c9){
var _4cc=document.getElementById(_4cb);
LigeoDOMUtils.setElementStyleDisplayToNone(_4cc);
}
}
};
var _4cd=that.getId();
var _4ce=document.getElementById(_4cd);
LigeoDOMUtils.setElementStyleDisplayToBlock(_4ce);
hideOtherMaps(_4cd);
if(that.getMapStyle()!=that.getVEMap().GetMapStyle()){
that.applyMapStyles();
}
that.fixNavMapStyles("showThisAndHideOthers");
};
this.showMapUsingLayer=function(){
var _4cf=this.getMapLayer();
if(LigeoVarUtils.isNull(_4cf)){
LigeoLogger.debug("showMapUsingLayer failed isNull layer mapid="+this.getId()+" hasLigeoRoute()="+this.hasLigeoRoute());
return false;
}
LigeoAPI.closeBalloon();
var _4d0=this.getVEMap();
this.attachEvents();
this.applyMapStyles();
if(this.hasLigeoRoute()){
this.getVEMap().HideAllShapeLayers();
this.getLigeoRoute().renderRoute(this,"false");
}else{
if(_4d0!=null){
_4d0.DeleteRoute();
}
this.getVEMap().HideAllShapeLayers();
_4cf.Show();
}
this.recenterAndZoom();
this.fixNavMapStyles("showMapUsingLayer");
return true;
};
this.closeOnMouseOutFromBalloonOrNumberedIcon=function(){
this.enableHideMapBalloonOnMouseout();
that.attachHandlerOnMouseOut(LigeoAPI.closeBalloon);
LigeoBalloon.closeOnMouseOutFromBalloonOnly();
};
this.onTokenError=function(){
LigeoLogger.debug("VE Token Error, token="+LigeoConfigurationAPI.getMapAuthToken());
};
this.onTokenExpire=function(){
LigeoLogger.debug("VE Token Expired, token="+LigeoConfigurationAPI.getMapAuthToken());
};
function constructor(_4d1,_4d2,_4d3,_4d4){
if(_4d4==true){
that.initializeMap(_4d1,_4d2,_4d3);
}
};
constructor(_48f,_490,_491,_492);
};
LigeoMap.prototype.getId=function(){
return this.myId;
};
LigeoMap.prototype.setId=function(id){
this.myId=id;
};
LigeoMap.prototype.fixNavMapStyles=function(_4d6){
var _4d7=this.getMapHtmlElementId();
var _4d8=LigeoDOMUtils.getElementsById("MSVE_navAction_topBar",_4d7);
var _4d9=setTimeout(function(){
if(_4d8!=null){
_4d8=_4d8[0];
var _4da=LigeoDOMUtils.getElementsById("MSVE_navAction_container",_4d7);
_4da=_4da[0];
var _4db=LigeoDOMUtils.getElementsById("MSVE_navAction_topBackground",_4d7);
_4db=_4db[0];
var _4dc=LigeoDOMUtils.getElementsById("MSVE_navAction_toggleGlyphWrapper",_4d7);
_4dc=_4dc[0];
var _4dd=_4da.className;
_4dd=_4dd.replace("notraffic","");
_4da.className=_4dd;
var _4de=_4d8.offsetWidth+_4d8.offsetLeft+_4dc.offsetWidth+10;
if(_4de>100){
_4dc.style.right=(_4da.offsetWidth-_4de)+"px";
_4db.style.width=(_4de-_4d8.offsetLeft)+"px";
}
}
},100);
};
LigeoMap.prototype.disableBirdsEye=function(){
var _4df=document.getElementById("MSVE_navAction_ObliqueMapView");
var _4e0=document.getElementById("MSVE_compassDiv");
var _4e1=document.getElementById("MSVE_navAction_rotatorContainer");
var _4e2=document.getElementById("MSVE_navAction_leftBackground");
if(LigeoVarUtils.isNotNull(_4df)&&LigeoVarUtils.isNotNull(_4e0)&&LigeoVarUtils.isNotNull(_4e1)){
_4df.className="MSVE_MapStyle_disabled";
_4e0.style.display="none";
_4e1.style.display="none";
_4e2.style.height="61px";
}
};
LigeoMap.prototype.enableBirdsEye=function(){
var _4e3=document.getElementById("MSVE_navAction_ObliqueMapView");
var _4e4=document.getElementById("MSVE_compassDiv");
var _4e5=document.getElementById("MSVE_navAction_rotatorContainer");
var _4e6=document.getElementById("MSVE_navAction_leftBackground");
if(LigeoVarUtils.isNotNull(_4e3)&&LigeoVarUtils.isNotNull(_4e4)&&LigeoVarUtils.isNotNull(_4e5)){
_4e3.className="MSVE_MapStyle";
_4e4.style.display=null;
_4e5.style.display=null;
_4e6.style.height=null;
}
};
LigeoMap.prototype.isDefaultMap=function(_4e7){
if(_4e7==null){
_4e7=this.myId;
}
return (_4e7==LigeoAPI.DEFAULT_MAP_ID);
};
LigeoMap.prototype.isDrillMap=function(_4e8){
if(_4e8==null){
_4e8=this.myId;
}
return (_4e8==LigeoAPI.DRILL_MAP_ID);
};
LigeoMap.prototype.isSearchResultsMap=function(_4e9){
if(_4e9==null){
_4e9=this.myId;
}
return (_4e9==LigeoAPI.RESULT_MAP_ID);
};
LigeoMap.prototype.isRouteMap=function(_4ea){
if(_4ea==null){
_4ea=this.myId;
}
return (_4ea==LigeoAPI.ROUTE_MAP_ID);
};
LigeoMap.prototype.shouldShowCenterLocation=function(){
return (LigeoVarUtils.isNotNull(this.myCenterLocation)&&((this.isSearchResultsMap()&&this.isShowResultsCenterLocation())||(this.isRouteMap()&&this.isShowRouteCenterLocation())||(this.isDrillMap()&&this.isShowDrillCenterLocation())||this.isDefaultMap()));
};
LigeoMap.prototype.shouldShowOtherLocations=function(){
return ((this.isSearchResultsMap()&&this.isShowResultsLocations())||(this.isRouteMap()&&this.isShowRouteOtherLocations())||(this.isDrillMap()&&this.isShowDrillOtherLocations())||this.isDefaultMap());
};
LigeoMap.prototype.renderMap=function(){
try{
this.detachHandlerOnChangeView();
this.detachHandlerOnChangeMapStyle();
var _4eb=this.getMapLayer();
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&LigeoVarUtils.isNotNull(_4eb)){
this.getVEMap().DeleteShapeLayer(_4eb);
this.setMapLayer(null);
_4eb=null;
}
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&LigeoVarUtils.isNull(_4eb)){
_4eb=new VEShapeLayer();
_4eb.SetTitle(this.getId());
_4eb.SetDescription("This is VEShapeLayer "+this.getId());
this.getVEMap().AddShapeLayer(_4eb);
this.setMapLayer(_4eb);
}
if(this.hasLigeoRoute()){
this.getLigeoRoute().renderRoute(this);
}
var _4ec=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_4ec)){
this.applyMapDivStyles();
var _4ed=this.getVEMap();
if(this.shouldShowCenterLocation()){
shapeCenter=this.myCenterLocation.getVEShape();
shapeCenter.SetZIndex(700);
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&LigeoVarUtils.isNotNull(_4eb)){
_4eb.AddShape(shapeCenter);
}else{
_4ed.AddShape(shapeCenter);
}
}
if(this.shouldShowOtherLocations()){
for(var i=0;i<this.myLocations.length;i++){
var loc=this.myLocations[i];
var _4f0=loc.getVEShape();
_4f0.SetZIndex(_4f0.GetZIndex()-this.myLocations[i].getLocationNumber());
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&LigeoVarUtils.isNotNull(_4eb)){
_4eb.AddShape(_4f0);
}else{
_4ed.AddShape(_4f0);
}
}
}
if(!this.isFrozen()){
this.coordinateCenterAndZoom();
this.isCoordinatingMap=false;
}
_4ed.SetScaleBarDistanceUnit(this.getMapDistanceUnits());
this.removeMapTerms();
this.addMapTerms();
this.attachEvents();
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&LigeoVarUtils.isNotNull(_4eb)){
_4ed.HideAllShapeLayers();
_4eb.Show();
if(this.getMapStyle()!=_4ed.GetMapStyle()){
this.applyMapStyles();
}
}
if(this.isShowBirdsEyeNavigationElement()==false){
this.disableBirdsEye();
}
this.show();
}
}
catch(error){
LigeoLogger.error("LigeoMap.prototype.renderMap "+this.myId+" caught an exception = "+error);
}
};
LigeoMap.prototype.display=function(){
this.clear();
var _4f1=LigeoAPI.getConfigureFunction(this);
if(LigeoVarUtils.isFunction(_4f1)){
_4f1();
}
this.renderMap();
};
LigeoMap.prototype.removeMapTerms=function(){
var _4f2=document.getElementById("ligeo-mapCopyright-div");
if(LigeoVarUtils.isNotNull(_4f2)){
_4f2.parentNode.removeChild(_4f2);
}
};
LigeoMap.prototype.attachEvents=function(){
var _4f3=this.getVEMap();
var that=this;
followLocationLink=function(_4f5){
if(_4f5.elementID){
var _4f6=_4f3.GetShapeByID(_4f5.elementID);
var _4f7=that.getLocationByShape(_4f6);
if(LigeoVarUtils.isNotNull(_4f7)&&LigeoVarUtils.isNotNullOrEmpty(_4f7.getLinkUrl())){
window.location=_4f7.getLinkUrl();
}
if(LigeoVarUtils.isNotNull(_4f7)&&LigeoVarUtils.isNotNullOrEmpty(_4f7.getLinkScript())){
eval(_4f7.getLinkScript());
}
}
};
this.detachHandlerOnChangeView();
this.detachHandlerOnChangeMapStyle();
this.detachHandlerOnMouseOut();
this.detachHandlerOnMouseOver();
this.detachHandlerOnClick();
this.detachHandlerOnMouseDown();
this.detachHandlerOnMouseUp();
this.detachHandlerOnMouseMove();
this.detachHandlerOnMouseWheel();
this.detachHandlerOnDoubleClick();
this.detachHandlerOnEndZoom();
this.attachHandlerOnEndZoom(this.handleVeOnChangeEndZoom);
this.attachHandlerOnClick(followLocationLink);
if(this.areMapBalloonsDisabled()||this.areRouteMapBalloonsDisabled()){
this.attachHandlerOnMouseOver(LigeoMap.disableVEEvent);
}else{
if(this.isOpenBalloonsOnClick()==false){
this.attachHandlerOnMouseOver(this.showLigeoLocationBalloon);
}
}
if(this.isOpenBalloonsOnClick()){
this.attachHandlerOnClick(this.showLigeoLocationBalloon);
}
if(this.isHideMapBalloonOnMouseout()){
this.attachHandlerOnMouseOut(LigeoAPI.closeBalloon);
}else{
this.attachHandlerOnMouseOut(LigeoMap.disableVEEvent);
if(LigeoVarUtils.isNotNull(this.getEro())){
this.getEro().hookEvent("beforeshow",this.resetMapBalloonWasManuallyClosed);
this.getEro().hookEvent("afterhide",this.suppressHideMapBalloonOnMouseout);
}
}
if(this.isMapPanningAndZoomingDisabled()){
this.attachHandlerOnMouseDown(this.disableMapPanningAndZoomingHandler);
this.attachHandlerOnMouseUp(this.disableMapPanningAndZoomingHandler);
this.attachHandlerOnMouseWheel(this.disableMapPanningAndZoomingHandler);
this.attachHandlerOnDoubleClick(this.disableMapPanningAndZoomingHandler);
}
this.attachHandlerOnChangeView(this.handleVeOnChangeView);
this.attachHandlerOnChangeMapStyle(this.handleVeOnChangeMapStyle);
};
LigeoMap.prototype.addMapTerms=function(){
var _4f8=document.getElementById(this.getId());
if(LigeoConfigurationAPI.isMapUsingLayers()==true){
_4f8=document.getElementById(LigeoAPI.getDefaultMap().getId());
}
if(LigeoVarUtils.isNotNull(_4f8)&&!this.isTermsAndConditionsDisabled()){
var _4f9=document.createElement("DIV");
_4f9.setAttribute("id","ligeo-mapCopyright-div");
_4f9.setAttribute("class","INOW_Copyright INOW_CopyrightForeground");
var link=document.createElement("a");
var _4fb="http://via.infonow.net/map_terms.jsp?type=virtualearth&LOC="+LigeoEnvironment.getMapLocale();
link.setAttribute("href",_4fb);
link.setAttribute("onclick","window.open('"+_4fb+"','termsWindow','scrollbars,menubar=no,titlebar=no,height=280,width=500');return false;");
link.setAttribute("id","ligeo-mapCopyright");
link.setAttribute("target","termsWindow");
link.setAttribute("rel","noFollow");
link.appendChild(document.createTextNode(LigeoEnvironment.translateLocaleText("mapTerms")));
_4f9.appendChild(link);
var _4fc=document.getElementById(this.getMapTermsParentDiv());
if(LigeoVarUtils.isNotNullOrEmpty(_4fc)){
_4fc.appendChild(_4f9);
this.setMapTermsParentDiv("content");
}
}
};
LigeoMap.prototype.getEro=function(){
return window.ero;
};
LigeoMap.prototype.getVEMap=function(){
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&this.myId!=LigeoAPI.DEFAULT_MAP_ID&&LigeoVarUtils.isNull(this.myVEMap)){
return LigeoAPI.getDefaultMap().getVEMap();
}else{
if(LigeoVarUtils.isNull(this.myVEMap)){
var _4fd=5000;
if(LigeoVarUtils.isVirtualEarthLoaded(_4fd)){
this.myVEMap=new VEMap(this.myId);
}
}
}
return this.myVEMap;
};
LigeoMap.prototype.hideDashboard=function(){
this.getVEMap().HideDashboard();
};
LigeoMap.prototype.showDashboard=function(){
this.getVEMap().ShowDashboard();
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
LigeoMap.prototype.setRouteTableHeaders=function(_4fe,_4ff,_500){
var _501=this.getLigeoRoute();
_501.setWaypointsHeader(_4fe);
_501.setInstructionsHeader(_4ff);
_501.setDistancesHeader(_500);
};
LigeoMap.prototype.setRouteTableCustomStartAddress=function(_502){
var _503=this.getLigeoRoute();
_503.setRouteTableCustomStartAddress(_502);
};
LigeoMap.prototype.setRouteTableCustomWayPointStartInstruction=function(_504){
var _505=this.getLigeoRoute();
_505.setRouteTableCustomWayPointStartInstruction(_504);
};
LigeoMap.prototype.setRouteTableCustomWayPointEndInstruction=function(_506){
var _507=this.getLigeoRoute();
_507.setRouteTableCustomWayPointEndInstruction(_506);
};
LigeoMap.prototype.setRouteTableCustomStartAtInstruction=function(_508){
var _509=this.getLigeoRoute();
_509.setRouteTableCustomStartAtInstruction(_508);
};
LigeoMap.prototype.setRouteTableCustomEndAtInstruction=function(_50a){
var _50b=this.getLigeoRoute();
_50b.setRouteTableCustomEndAtInstruction(_50a);
};
LigeoMap.prototype.setRouteTableCustomInstruction=function(_50c){
var _50d=this.getLigeoRoute();
_50d.setRouteTableCustomInstruction(_50c);
};
LigeoMap.prototype.setRouteTableCustomSummaryIdAndBlock=function(_50e,_50f){
var _510=this.getLigeoRoute();
_510.setRouteTableCustomSummaryId(_50e);
_510.setRouteTableCustomSummaryBlock(_50f);
};
LigeoMap.prototype.setRouteStartIcon=function(_511){
this.getLigeoRoute().setRouteStartIcon(_511);
};
LigeoMap.prototype.setRouteEndIcon=function(_512){
this.getLigeoRoute().setRouteEndIcon(_512);
};
LigeoMap.prototype.setRouteTurnIcon=function(_513){
this.getLigeoRoute().setNumberedIconPrefix(_513);
};
LigeoMap.prototype.clearRoutes=function(){
this.getLigeoRoute().clearRoutes();
};
LigeoMap.prototype.addRoute=function(_514,_515){
this.getLigeoRoute().addRoute(_514,_515);
};
LigeoMap.prototype.applyMapDivStyles=function(){
var _516=(this.myHeight==0)?this.getElementStyle("height"):this.myHeight;
var _517=(this.myWidth==0)?this.getElementStyle("width"):this.myWidth;
if(LigeoVarUtils.isNotNullOrEmpty(_516)&&LigeoVarUtils.isNotNullOrEmpty(_517)){
_516=_516.toString();
_517=_517.toString();
if(_516.indexOf("px")<0){
_516+="px";
}
if(_517.indexOf("px")<0){
_517+="px";
}
this.setElementStyle("height",_516);
this.setElementStyle("width",_517);
this.setElementStyle("position","relative");
}
};
LigeoMap.prototype.applyMapStyles=function(){
this.getVEMap().SetMapStyle(this.getMapStyle());
};
LigeoMap.prototype.setElementStyle=function(_518,_519){
var _51a=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_51a)){
var _51b=_51a.style;
_51b[_518]=_519;
}
};
LigeoMap.prototype.getElementStyle=function(_51c){
var _51d="";
var _51e=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_51e)){
var _51f=_51e.style;
_51d=_51f[_51c];
}
return _51d;
};
LigeoMap.prototype.setMapVisibility=function(_520){
var _521=this.getMapHtmlElement();
if(LigeoVarUtils.isNotNull(_521)){
var _522=_521.style;
_522.visibility=_520;
}
};
LigeoMap.prototype.show=function(){
this.setMapVisibility("visible");
};
LigeoMap.prototype.hide=function(){
this.setMapVisibility("hidden");
};
LigeoMap.prototype.setWidth=function(_523){
this.myWidth=_523;
};
LigeoMap.prototype.setHeight=function(_524){
this.myHeight=_524;
};
LigeoMap.prototype.setMapDimensions=function(_525,_526){
this.setWidth(_525);
this.setHeight(_526);
};
LigeoMap.prototype.getCenterLatitude=function(){
return this.getVEMap().GetCenter().Latitude;
};
LigeoMap.prototype.getCenterLongitude=function(){
return this.getVEMap().GetCenter().Longitude;
};
LigeoMap.prototype.getZoom=function(){
return this.getVEMap().GetZoomLevel();
};
LigeoMap.prototype.setCenter=function(_527){
this.myCenterLocation=_527;
};
LigeoMap.prototype.addLocation=function(_528){
this.myLocations.push(_528);
};
LigeoMap.prototype.addCenterPushpin=function(_529){
this.centerPushpin=_529;
};
LigeoMap.prototype.getLocationByShape=function(_52a){
var _52b=null;
if(LigeoVarUtils.isNotNull(this.myCenterLocation)&&(this.myCenterLocation.getVEShape()==_52a)){
_52b=this.myCenterLocation;
}else{
for(var i=0;i<this.myLocations.length;i++){
if(this.myLocations[i].getVEShape()==_52a){
_52b=this.myLocations[i];
}
}
}
return _52b;
};
LigeoMap.prototype.getLocationById=function(id){
var _52e=null;
if(LigeoVarUtils.isNotNull(this.myCenterLocation)&&(this.myCenterLocation.getUniqueId()==id)){
_52e=this.myCenterLocation;
}else{
for(var i=0;i<this.myLocations.length;i++){
if(this.myLocations[i].getUniqueId()==id){
_52e=this.myLocations[i];
break;
}
}
}
return _52e;
};
LigeoMap.prototype.resetOriginalZoomAndCenterToVEMapConfiguration=function(){
var _530=this.getVEMap();
this.myOriginalZoom=_530.GetZoomLevel();
this.myOriginalCenter=_530.GetCenter();
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
var _531=[];
if(LigeoVarUtils.isNotNull(this.myCenterLocation)){
var _532=0;
var _533=0;
for(var i=0;i<this.myLocations.length;i++){
latitudeDeltaFromCenter=Math.abs(this.myLocations[i].getLatitude()-this.myCenterLocation.getLatitude());
if(latitudeDeltaFromCenter>_532){
_532=latitudeDeltaFromCenter;
}
longitudeDeltaFromCenter=Math.abs(this.myLocations[i].getLongitude()-this.myCenterLocation.getLongitude());
if(longitudeDeltaFromCenter>_533){
_533=longitudeDeltaFromCenter;
}
}
var _535=this.myCenterLocation.getLatitude()-_532;
var _536=this.myCenterLocation.getLongitude()-_533;
var _537=this.myCenterLocation.getLatitude()+_532;
var _538=this.myCenterLocation.getLongitude()+_533;
_531.push(new VELatLong(_535,_536));
_531.push(new VELatLong(_537,_538));
}else{
for(i=0;i<this.myLocations.length;i++){
_531.push(this.myLocations[i].getVELatLong());
}
}
try{
if(_531.length>0){
this.getVEMap().SetMapView(_531);
this.resetOriginalZoomAndCenterToVEMapConfiguration();
}
}
catch(error){
LigeoLogger.error("LigeoMap.prototype.bestFitCenterAndZoom caught an exception = "+error);
}
};
LigeoMap.disableVEEvent=function(_539){
return true;
};
LigeoMap.prototype.isMapOnPage=function(){
return LigeoVarUtils.isNotNull(this.getMapHtmlElement());
};
LigeoMap.prototype.getMapHtmlElementId=function(){
if(LigeoConfigurationAPI.isMapUsingLayers()==true){
return LigeoAPI.DEFAULT_MAP_ID;
}
return this.myId;
};
LigeoMap.prototype.getMapHtmlElement=function(){
return document.getElementById(this.getMapHtmlElementId());
};
LigeoMap.prototype.zoomIn=function(_53a){
if(isNaN(_53a)){
_53a=1;
}
this.getVEMap().SetZoomLevel(this.getVEMap().GetZoomLevel()+_53a);
};
LigeoMap.prototype.zoomOut=function(_53b){
if(isNaN(_53b)){
_53b=1;
}
this.getVEMap().SetZoomLevel(this.getVEMap().GetZoomLevel()-_53b);
};
LigeoMap.prototype.setOriginalZoom=function(zoom){
this.myOriginalZoom=zoom;
};
LigeoMap.prototype.setOverviewZoom=function(_53d){
var _53e=15;
if(LigeoVarUtils.isNotNullOrEmpty(_53d)){
_53d=parseInt(_53d);
if(!isNaN(_53d)){
_53e=_53d;
}
}
this.setOriginalZoom(_53e);
};
LigeoMap.prototype.isFrozen=function(){
return this.frozenState;
};
LigeoMap.prototype.setFrozen=function(_53f){
this.frozenState=_53f;
};
LigeoMap.prototype.pan=function(_540,_541){
this.getVEMap().Pan(_540,_541);
};
LigeoMap.prototype.setCenterAndZoom=function(_542,_543){
this.getVEMap().SetCenterAndZoom(_542,_543);
};
LigeoMap.prototype.setCenterAndZoomIn=function(_544,_545){
var _546=this.getZoomLevel()+1;
var _547=new VELatLong(_544,_545);
this.setCenterAndZoom(_547,_546);
};
LigeoMap.prototype.setCenterAndZoomOut=function(_548,_549){
var _54a=this.getZoomLevel()-1;
var _54b=new VELatLong(_548,_549);
this.setCenterAndZoom(_54b,_54a);
};
LigeoMap.prototype.setZoomLevelStatus=function(_54c){
var _54d=document.getElementById(_54c);
if(_54d!=null){
var _54e=this.getZoomLevel();
var _54f=19;
var _550=this.getVEMap().GetMapStyle();
if(_550==VEMapStyle.Birdseye){
_54f=2;
}
var perc=Math.round(_54e/_54f*100);
_54d.innerHTML=perc;
}
};
LigeoMap.prototype.getZoomLevel=function(){
return this.getVEMap().GetZoomLevel();
};
LigeoMap.prototype.createLatLonFromMapClick=function(e){
try{
var x=e.layerX;
var y=e.layerY;
if(x==null){
x=e.offsetX;
}
if(y==null){
y=e.offsetY;
}
var _555=new VEPixel(x,y);
return this.getVEMap().PixelToLatLong(_555);
}
catch(error){
alert(error.text);
}
return null;
};
LigeoMap.prototype.createLatLonFromVEMapClick=function(e){
try{
var _557=new VEPixel(e.mapX,e.mapY);
return this.getVEMap().PixelToLatLong(_557);
}
catch(error){
alert("createLatLonFromVEMapClick "+error.name+" msg="+error.message);
}
return null;
};
LigeoMap.prototype.showLocation=function(_558){
var _559=this.myLocations[_558];
if(typeof _559=="object"){
_559.getVEShape().Show();
}
};
LigeoMap.prototype.hideLocation=function(_55a){
var _55b=this.myLocations[_55a];
if(typeof _55b=="object"){
_55b.getVEShape().Hide();
}
};
LigeoMap.prototype.disableHideMapBalloonOnMouseout=function(){
this.myHideMapBalloonOnMouseout=false;
};
LigeoMap.prototype.enableHideMapBalloonOnMouseout=function(){
this.myHideMapBalloonOnMouseout=true;
};
LigeoMap.prototype.isHideMapBalloonOnMouseout=function(){
return this.myHideMapBalloonOnMouseout;
};
LigeoMap.prototype.disableHideMapBalloonOnChangeView=function(){
this.myHideMapBalloonOnChangeView=false;
};
LigeoMap.prototype.enableHideMapBalloonOnChangeView=function(){
this.myHideMapBalloonOnChangeView=true;
};
LigeoMap.prototype.isHideMapBalloonOnChangeView=function(){
return this.myHideMapBalloonOnChangeView;
};
LigeoMap.prototype.isShowBirdsEyeNavigationElement=function(){
return this.showBirdsEyeNavigationElement;
};
LigeoMap.prototype.setShowBirdsEyeNavigationElement=function(_55c){
this.showBirdsEyeNavigationElement=_55c;
};
LigeoMap.prototype.isShowTrafficNavigationElement=function(){
return this.showTrafficNavigationElement;
};
LigeoMap.prototype.setShowTrafficNavigationElement=function(_55d){
this.showTrafficNavigationElement=_55d;
};
LigeoMap.prototype.setMapGridSearchingEnabled=function(_55e){
this.mapGridSearchingEnabled=_55e;
};
LigeoMap.prototype.isMapGridSearchingEnabled=function(){
return this.mapGridSearchingEnabled;
};
LigeoMap.prototype.disableRouteMapBalloons=function(){
this.myDisableRouteMapBalloons=true;
};
LigeoMap.prototype.enableRouteMapBalloons=function(){
this.myDisableRouteMapBalloons=false;
};
LigeoMap.prototype.areRouteMapBalloonsDisabled=function(){
return this.myDisableRouteMapBalloons;
};
LigeoMap.prototype.disableMapBalloons=function(){
this.myDisableMapBalloons=true;
};
LigeoMap.prototype.enableMapBalloons=function(){
this.myDisableMapBalloons=false;
};
LigeoMap.prototype.areMapBalloonsDisabled=function(){
return this.myDisableMapBalloons;
};
LigeoMap.prototype.setVEDistanceUnitsToMiles=function(){
this.myMapDistanceUnits=VEDistanceUnit.Miles;
this.myRouteDistanceUnits=VERouteDistanceUnit.Mile;
};
LigeoMap.prototype.setVEMapDistanceUnitsToKMs=function(){
this.myMapDistanceUnits=VEDistanceUnit.Kilometers;
this.myRouteDistanceUnits=VERouteDistanceUnit.Kilometer;
};
LigeoMap.prototype.getMapDistanceUnits=function(){
if(LigeoVarUtils.isNullOrEmpty(this.myMapDistanceUnits)){
this.myMapDistanceUnits=VEDistanceUnit.Miles;
}
return this.myMapDistanceUnits;
};
LigeoMap.prototype.getRouteDistanceUnits=function(){
if(LigeoVarUtils.isNullOrEmpty(this.myRouteDistanceUnits)){
this.myRouteDistanceUnits=VERouteDistanceUnit.Mile;
}
return this.myRouteDistanceUnits;
};
LigeoMap.prototype.isRadiusSearchElement=function(){
return this.showRadiusSearchElement;
};
LigeoMap.prototype.setRadiusSearchElement=function(_55f){
this.showRadiusSearchElement=_55f;
};
LigeoMap.prototype.disableMapNavigator=function(){
this.myDisableMapNavigator=true;
};
LigeoMap.prototype.enableMapNavigator=function(){
this.myDisableMapNavigator=false;
};
LigeoMap.prototype.isMapNavigatorDisabled=function(){
return this.myDisableMapNavigator;
};
LigeoMap.prototype.isShow3dNavigationElement=function(){
return this.show3dNavigationElement;
};
LigeoMap.prototype.setShow3dNavigationElement=function(_560){
this.show3dNavigationElement=_560;
};
LigeoMap.prototype.setShowResultsCenterLocation=function(_561){
this.showResultsCenterLocation=_561;
};
LigeoMap.prototype.isShowResultsCenterLocation=function(){
return this.showResultsCenterLocation;
};
LigeoMap.prototype.setShowRouteCenterLocation=function(_562){
this.showRouteCenterLocation=_562;
};
LigeoMap.prototype.isShowRouteCenterLocation=function(){
return this.showRouteCenterLocation;
};
LigeoMap.prototype.setShowDrillCenterLocation=function(_563){
this.showDrillCenterLocation=_563;
};
LigeoMap.prototype.isShowDrillCenterLocation=function(){
return this.showDrillCenterLocation;
};
LigeoMap.prototype.setShowResultsLocations=function(_564){
this.showResultsLocations=_564;
};
LigeoMap.prototype.isShowResultsLocations=function(){
return this.showResultsLocations;
};
LigeoMap.prototype.setShowRouteOtherLocations=function(_565){
this.showRouteOtherLocations=_565;
};
LigeoMap.prototype.isShowRouteOtherLocations=function(){
return this.showRouteOtherLocations;
};
LigeoMap.prototype.setShowDrillOtherLocations=function(_566){
this.showDrillOtherLocations=_566;
};
LigeoMap.prototype.isShowDrillOtherLocations=function(){
return this.showDrillOtherLocations;
};
LigeoMap.prototype.setOpenBalloonsOnClick=function(_567){
this.openBalloonsOnClick=_567;
};
LigeoMap.prototype.isOpenBalloonsOnClick=function(){
return this.openBalloonsOnClick;
};
LigeoMap.prototype.disableMapPanningAndZooming=function(){
this.myDisableMapPanningAndZooming=true;
};
LigeoMap.prototype.enableMapPanningAndZooming=function(){
this.myDisableMapPanningAndZooming=false;
};
LigeoMap.prototype.isMapPanningAndZoomingDisabled=function(){
return this.myDisableMapPanningAndZooming;
};
LigeoMap.prototype.disableTermsAndConditions=function(){
this.myDisableTermsAndConditions=true;
};
LigeoMap.prototype.enableTermsAndConditions=function(){
this.myDisableTermsAndConditions=false;
};
LigeoMap.prototype.isTermsAndConditionsDisabled=function(){
return this.myDisableTermsAndConditions;
};
LigeoMap.prototype.getMapTermsParentDiv=function(){
return this.mapTermsParentDiv;
};
LigeoMap.prototype.setMapTermsParentDiv=function(_568){
this.mapTermsParentDiv=_568;
};
LigeoMap.prototype.enableRouteMapCustomIcons=function(){
this.myEnableRouteMapCustomIcons=true;
};
LigeoMap.prototype.disableRouteMapCustomIcons=function(){
this.myEnableRouteMapCustomIcons=false;
};
LigeoMap.prototype.isRouteMapCustomIcons=function(){
return this.myEnableRouteMapCustomIcons;
};
LigeoMap.prototype.enableRouteMapCustomStartIcon=function(){
this.myEnableRouteMapCustomStartIcon=true;
};
LigeoMap.prototype.disableRouteMapCustomStartIcon=function(){
this.myEnableRouteMapCustomStartIcon=false;
};
LigeoMap.prototype.isRouteMapCustomStartIcon=function(){
return this.myEnableRouteMapCustomStartIcon;
};
LigeoMap.prototype.enableRouteMapCustomEndIcon=function(){
this.myEnableRouteMapCustomEndIcon=true;
};
LigeoMap.prototype.disableRouteMapCustomEndIcon=function(){
this.myEnableRouteMapCustomEndIcon=false;
};
LigeoMap.prototype.isRouteMapCustomEndIcon=function(){
return this.myEnableRouteMapCustomEndIcon;
};
LigeoMap.prototype.enableRouteMapCustomWaypointIcon=function(){
this.myEnableRouteMapCustomWaypointIcon=true;
};
LigeoMap.prototype.disableRouteMapCustomWaypointIcon=function(){
this.myEnableRouteMapCustomWaypointIcon=false;
};
LigeoMap.prototype.isRouteMapCustomWaypointIcon=function(){
return this.myEnableRouteMapCustomWaypointIcon;
};
LigeoMap.prototype.disableRouteTablePushpins=function(){
this.myDisableRouteTablePushpins=true;
};
LigeoMap.prototype.enableRouteTablePushpins=function(){
this.myDisableRouteTablePushpins=false;
};
LigeoMap.prototype.areRouteTablePushpinsDisabled=function(){
return this.myDisableRouteTablePushpins;
};
LigeoMap.prototype.includeTotalDistanceInRoute=function(){
this.myIncludeTotalDistanceInRoute=true;
};
LigeoMap.prototype.removeTotalDistanceInRoute=function(){
this.myIncludeTotalDistanceInRoute=false;
};
LigeoMap.prototype.isTotalDistanceInRoute=function(){
return this.myIncludeTotalDistanceInRoute;
};
LigeoMap.prototype.setMapViewStyle=function(_569){
this.myMapViewStyle=_569;
};
LigeoMap.prototype.getMapViewStyle=function(){
return this.myMapViewStyle;
};
LigeoMap.prototype.setUseCookieToPersistMapStyle=function(b){
this.useCookieToPersistMapStyle=b;
};
LigeoMap.prototype.getUseCookieToPersistMapStyle=function(){
return this.useCookieToPersistMapStyle;
};
LigeoMap.prototype.setMapLayer=function(_56b){
this.myMapLayer=_56b;
};
LigeoMap.prototype.getMapLayer=function(){
return this.myMapLayer;
};
LigeoMap.prototype.setLigeoRouteTimeFormat=function(_56c){
this.getLigeoRoute().setTimeFormat(_56c);
};
LigeoMap.prototype.hasThisMapBeenRendered=function(){
return LigeoVarUtils.isNotNull(this.myMapLayer);
};
LigeoMap.prototype.attachEventHandler=function(_56d,_56e){
if(LigeoVarUtils.isNullOrEmpty(_56d)||LigeoVarUtils.isNullOrEmpty(_56e)){
LigeoLogger.error("attachEventHandler invalid arguments event="+_56d+" handler="+_56e);
return;
}
var _56f=this.getVEMap();
_56f.AttachEvent(_56d,_56e);
LigeoAPI.eventAttach(_56d,_56e);
};
LigeoMap.prototype.detachEventHandler=function(_570,_571){
if(LigeoVarUtils.isNullOrEmpty(_570)){
LigeoLogger.error("detachEventHandler invalid arguments event="+_570+" handler="+_571);
return;
}
if(LigeoVarUtils.isNotNullOrEmpty(_571)){
var _572=this.getVEMap();
_572.DetachEvent(_570,_571);
LigeoAPI.eventRemove(_570,_571);
}else{
var _573=LigeoAPI.eventGet(_570);
for(var i=0;i<_573.length;i++){
this.detachEventHandler(_570,_573[i].fun);
}
}
};
LigeoMap.prototype.attachHandlerOnChangeView=function(_575){
this.attachEventHandler("onchangeview",_575);
};
LigeoMap.prototype.detachHandlerOnChangeView=function(_576){
this.detachEventHandler("onchangeview",_576);
};
LigeoMap.prototype.attachHandlerOnChangeMapStyle=function(_577){
this.attachEventHandler("onchangemapstyle",_577);
};
LigeoMap.prototype.detachHandlerOnChangeMapStyle=function(_578){
this.detachEventHandler("onchangemapstyle",_578);
};
LigeoMap.prototype.attachHandlerOnMouseOut=function(_579){
this.attachEventHandler("onmouseout",_579);
};
LigeoMap.prototype.detachHandlerOnMouseOut=function(_57a){
this.detachEventHandler("onmouseout",_57a);
};
LigeoMap.prototype.attachHandlerOnClick=function(_57b){
this.attachEventHandler("onclick",_57b);
};
LigeoMap.prototype.detachHandlerOnClick=function(_57c){
this.detachEventHandler("onclick",_57c);
};
LigeoMap.prototype.attachHandlerOnMouseOver=function(_57d){
this.attachEventHandler("onmouseover",_57d);
};
LigeoMap.prototype.detachHandlerOnMouseOver=function(_57e){
this.detachEventHandler("onmouseover",_57e);
};
LigeoMap.prototype.attachHandlerOnMouseDown=function(_57f){
this.attachEventHandler("onmousedown",_57f);
};
LigeoMap.prototype.detachHandlerOnMouseDown=function(_580){
this.detachEventHandler("onmousedown",_580);
};
LigeoMap.prototype.attachHandlerOnMouseUp=function(_581){
this.attachEventHandler("onmouseup",_581);
};
LigeoMap.prototype.detachHandlerOnMouseUp=function(_582){
this.detachEventHandler("onmouseup",_582);
};
LigeoMap.prototype.attachHandlerOnMouseWheel=function(_583){
this.attachEventHandler("onmousewheel",_583);
};
LigeoMap.prototype.detachHandlerOnMouseWheel=function(_584){
this.detachEventHandler("onmousewheel",_584);
};
LigeoMap.prototype.attachHandlerOnDoubleClick=function(_585){
this.attachEventHandler("ondoubleclick",_585);
};
LigeoMap.prototype.detachHandlerOnDoubleClick=function(_586){
this.detachEventHandler("ondoubleclick",_586);
};
LigeoMap.prototype.attachHandlerOnMouseMove=function(_587){
this.attachEventHandler("onmousemove",_587);
};
LigeoMap.prototype.detachHandlerOnMouseMove=function(_588){
this.detachEventHandler("onmousemove",_588);
};
LigeoMap.prototype.attachHandlerOnEndZoom=function(_589){
this.attachEventHandler("onendzoom",_589);
};
LigeoMap.prototype.detachHandlerOnEndZoom=function(_58a){
this.detachEventHandler("onendzoom",_58a);
};
LigeoMap.prototype.setUnroutableErrorCallback=function(_58b){
this.getLigeoRoute().setUnroutableErrorCallback(_58b);
};
LigeoMap.prototype.setRouteSuccessCallback=function(_58c){
this.getLigeoRoute().setRouteSuccessCallback(_58c);
};
dojo.provide("com.infonow.ligeo.LigeoInitializer");
function LigeoInitializer(){
createDeclaredLigeoMaps=function(){
if(LigeoVarUtils.isNullOrEmpty(LigeoConfigurationAPI.getMyMapDivIDs())||(LigeoConfigurationAPI.getMyMapDivIDs().length<1)){
LigeoConfigurationAPI.setMyMapDivIDs(new Array(LigeoAPI.DEFAULT_MAP_ID));
}
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
var _58e=LigeoConfigurationAPI.getMyMapDivIDs()[i];
var _58f=true;
if(LigeoConfigurationAPI.isMapUsingLayers()==true&&_58e!=LigeoAPI.DEFAULT_MAP_ID){
_58f=false;
}
if(LigeoVarUtils.isNull(LigeoAPI.myLigeoMaps[_58e])){
var _590=new LigeoMap(_58e,LigeoConfigurationAPI.myInitialLat,LigeoConfigurationAPI.myInitialLong,LigeoConfigurationAPI.myInitialZoom,_58f);
LigeoAPI.myLigeoMaps[_58e]=_590;
}
}
};
displayFirstDeclaredMap=function(){
if(LigeoConfigurationAPI.isApplicationReloaded()&&(LigeoConfigurationAPI.getMyMapDivIDs().length>1)){
var _591=LigeoAPI.getLigeoMapById(LigeoConfigurationAPI.getMyMapDivIDs()[0]);
_591.display();
return;
}
if(LigeoConfigurationAPI.getMyMapDivIDs().length==1){
var _592=LigeoAPI.getDefaultMap();
if(LigeoVarUtils.isNotNull(_592)){
_592.display();
}
}
};
this.execute=function(){
createDeclaredLigeoMaps();
displayFirstDeclaredMap();
LigeoConfigurationAPI.setApplicationReloaded(false);
};
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
LigeoEnvironment.setImageServer=function(_594){
LigeoEnvironment.imageServerURL=_594;
};
LigeoEnvironment.getImagePath=function(_595){
if(_595.indexOf("/")>-1){
return _595;
}else{
return LigeoEnvironment.getImageServer()+"mapicons/"+_595;
}
};
LigeoEnvironment.aryLocaleText=new Array();
LigeoEnvironment.translateLocaleText=function(key){
result=LigeoEnvironment.aryLocaleText[key];
return (result!="")?result:key;
};
LigeoEnvironment.setLocaleText=function(_597){
LigeoEnvironment.aryLocaleText=_597;
};
LigeoEnvironment.initialize=function(){
window.onerror=LigeoEnvironment.handleExceptions;
};
LigeoEnvironment.handleExceptions=function(_598){
if(LigeoFeaturesAPI.alertOnErrors){
alert(_598.name+"\n"+_598.message+"\n"+_598.description);
}
if(!LigeoFeaturesAPI.swallowErrors){
throw _598;
}
};
LigeoEnvironment.translateMicrosoftMarket=function(LOC){
if((LOC===undefined)||(LOC===null)||(LOC=="")){
LOC=LigeoEnvironment.getMapLocale();
}
var _59a=new Array("cs-cz","da-dk","nl-nl","en-us","en-au","en-ca","en-in","en-gb","fi-fi","fr-ca","fr-fr","de-de","it-it","ja-jp","nb-no","pt-br","pt-pt","es-us","es-mx","es-es","sv-se");
var _59b=LOC.toString().toLowerCase().replace("_","-");
if((_59b=="es-mx")||(_59b=="es-es")){
_59b="es-us";
}
var _59c=false;
for(i=0;i<_59a.length&&_59c==false;i++){
if(_59a[i]==_59b){
_59c=true;
}
}
if(!_59c){
for(i=0;i<_59a.length&&_59c==false;i++){
if(_59a[i].toString().substr(0,2)==_59b.substr(0,2)){
_59b=_59a[i];
_59c=true;
}
}
}
if(!_59c){
_59b="en-us";
}
LigeoEnvironment.setMapLocale(_59b);
LigeoEnvironment.localizeText();
return _59b;
};
LigeoEnvironment.localizeText=function(){
this.makeLang=function(_59d,last,_59f,_5a0,_5a1,_5a2,_5a3,_5a4,_5a5){
this.first=_59d;
this.last=last;
this.totalTime=_59f;
this.totalDist=_5a0;
this.traffic=_5a1;
this.showTrafficTip=_5a2;
this.hideTrafficTip=_5a3;
this.mapTerms=_5a4;
this.yourSelectedLocation=_5a5;
};
var _5a6;
switch(LigeoEnvironment.getMapLocale()){
case "cs-cz":
case "da-dk":
case "fi-fi":
case "ja-jp":
_5a6=new this.makeLang("Start at","Arrive at","Total time","Total distance","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "nl-nl":
_5a6=new this.makeLang("Start adres","Eindigend adres","Totale tijd","Totale afstand","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "en-au":
case "en-ca":
case "en-in":
case "en-gb":
case "en-us":
_5a6=new this.makeLang("Start at","Arrive at","Total time","Total distance","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "fr-ca":
case "fr-fr":
_5a6=new this.makeLang("Commencez à","Arrivez à","Temps Total","Distance Totale","Circulation","Montrez la circulation sur la carte","Cachez la circulation sur la carte","Tous droits réservés. Utilisation assujettie aux ententes de licence/au droit d'auteur.","your selected location.");
break;
case "de-de":
_5a6=new this.makeLang("Startadresse","Endend Adresse","Gesamtzeit","Gesamtentfernung","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "it-it":
_5a6=new this.makeLang("Indirizzo iniziale","Che termina l'indirizzo","Tempo totale","Distanza totale","Traffico"," "," ","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "nb-no":
_5a6=new this.makeLang("Starter adresse","Sluttet adresse","Total tid","Total avstand","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "pt-br":
case "pt-pt":
_5a6=new this.makeLang("Começando endereço","Terminando endereço","Tempo total","Distância total","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "es-mx":
case "es-es":
case "es-us":
_5a6=new this.makeLang("A partir dirección","Poner fin a la dirección","Tiempo total","Distancia total","Tráfico","Mostrar el tránsito en el mapa","Ocultar el tránsito en el mapa","Todos los derechos reservados. Uso conforme a licencia y al derecho de copia.","your selected location.");
break;
case "sv-se":
_5a6=new this.makeLang("Startar adress","Slutar adress","Total tid","Totala sträckan","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
case "ru-ru":
_5a6=new this.makeLang("начальный адрес","адрес, заканчивающийся","Общее время","общее расстояние","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
break;
default:
_5a6=new this.makeLang("Start at","Arrive at","Total time","Total distance","Traffic","Show traffic on the map","Hide traffic on the map","All rights reserved. Use subject to License/Copyright.","your selected location.");
}
LigeoEnvironment.setLocaleText(_5a6);
};
LigeoEnvironment.getParamFromJavaScriptUrl=function(_5a7,_5a8){
var _5a9=function(_5aa){
this.scriptPath=_5aa;
};
_5a9.prototype={get:function(){
var _5ab=new RegExp(this.scriptPath.replace(".","\\.")+"(\\?.*)?$");
var _5ac=document.getElementsByTagName("script");
for(var i=0;i<_5ac.length;i++){
var _5ae=_5ac[i];
if(_5ae.src&&_5ae.src.match(_5ab)){
var _5af=_5ae.src.match(/\?([^#]*)(#.*)?/);
return !_5af?"":_5af[1];
}
}
return "";
},parse:function(){
var _5b0={};
var _5b1=this.get();
var _5b2=_5b1.split("&");
for(var i=0;i<_5b2.length;i++){
var pair=_5b2[i].split("=");
var name=pair[0],_5b6=pair[1];
if(!_5b0[name]){
_5b0[name]=[];
}
if(!_5b6){
_5b6="true";
}else{
try{
_5b6=decodeURIComponent(_5b6);
}
catch(e){
_5b6=unescape(_5b6);
}
}
var _5b7=_5b0[name];
_5b7[_5b7.length]=_5b6;
}
return _5b0;
},toString:function(){
return "ScriptQuery [path="+this.scriptPath+"]";
}};
var _5b8=new _5a9(_5a7).parse();
return _5b8[_5a8];
};
LigeoEnvironment.importVirtualEarth=function(){
var _5b9="6.2";
var _5ba=LigeoEnvironment.translateMicrosoftMarket(LigeoEnvironment.getParamFromJavaScriptUrl("ligeo.js","LOC"));
var _5bb=window.location.toString().split(":");
var _5bc=_5bb.shift();
var _5bd=new Array();
_5bd["visibility"]="live";
_5bd["environment"]="net";
for(n in _5bb){
if(_5bb[n].indexOf("8080")>-1){
_5bd["environment"]="dev";
}else{
if(_5bb[n].indexOf(".qc")>-1){
_5bd["environment"]="qc";
}else{
if(_5bb[n].indexOf(".qa")>-1){
_5bd["environment"]="qa";
}
}
}
if(_5bb[n].indexOf("test")>-1){
_5bd["visibility"]="test";
}
}
var _5be="";
_5be+=_5bc+"://shared";
if(_5bd["visibility"]=="test"){
_5be+=".test";
}
_5be+=".via.infonow";
if(_5bd["environment"]=="dev"||_5bd["environment"]=="qc"||_5bd["environment"]=="qa"){
if(_5bd["environment"]=="qc"){
_5be+=".qc";
}else{
_5be+=".qa";
}
}else{
if(_5bd["environment"]=="net"){
_5be+=".net";
}
}
_5be+="/images/";
LigeoEnvironment.setImageServer(_5be);
var _5bf=_5bc+"://"+"ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx";
_5bf+="?v="+_5b9+"&mkt="+_5ba;
if(_5bc=="https"){
_5bf+="&s=1";
}
document.write("<"+"script ");
document.write("type=\"text/javascript\" ");
document.write("src=\""+_5bf+"\">");
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
LigeoConfigurationAPI.myMapShowBirdsEyeNavigationElement=true;
LigeoConfigurationAPI.myLigeoBalloonStyleRev2=false;
LigeoConfigurationAPI.myMapShowTrafficNavigationElement=true;
LigeoConfigurationAPI.myRadiusSearchIcon=null;
LigeoConfigurationAPI.myRadiusSearchIconOn=null;
LigeoConfigurationAPI.myRadiusSearchLocation=null;
LigeoConfigurationAPI.myMapGridSearchZoomThreshold=9;
LigeoConfigurationAPI.myMapAuthToken=null;
LigeoConfigurationAPI.radiusSearchCallBack=function(){
};
LigeoConfigurationAPI.countryFilterArray=new Array("United States","Canada");
LigeoConfigurationAPI.mapUsingLayers=false;
LigeoConfigurationAPI.setCustomID=function(_5c0){
LigeoConfigurationAPI.myCustomID=_5c0;
};
LigeoConfigurationAPI.setMyMapDivIDs=function(_5c1){
for(var i=0;i<_5c1.length;i++){
LigeoConfigurationAPI.getMyMapDivIDs().push(_5c1[i]);
}
};
LigeoConfigurationAPI.getMyMapDivIDs=function(){
return LigeoConfigurationAPI.myMapDivIDs;
};
LigeoConfigurationAPI.setLigeoBalloonStyleRev2=function(show){
LigeoConfigurationAPI.myLigeoBalloonStyleRev2=show;
};
LigeoConfigurationAPI.setShowBirdsEyeNavigationElement=function(show){
LigeoConfigurationAPI.myMapShowBirdsEyeNavigationElement=show;
};
LigeoConfigurationAPI.setShowTrafficNavigationElement=function(show){
LigeoConfigurationAPI.myMapShowTrafficNavigationElement=show;
};
LigeoConfigurationAPI.getLigeoBalloonStyleRev2=function(){
return LigeoConfigurationAPI.myLigeoBalloonStyleRev2;
};
LigeoConfigurationAPI.getShowBirdsEyeNavigationElement=function(){
return LigeoConfigurationAPI.myMapShowBirdsEyeNavigationElement;
};
LigeoConfigurationAPI.getShowTrafficNavigationElement=function(){
return LigeoConfigurationAPI.myMapShowTrafficNavigationElement;
};
LigeoConfigurationAPI.setInitialLat=function(_5c6){
LigeoConfigurationAPI.myInitialLat=_5c6;
};
LigeoConfigurationAPI.setInitialLong=function(_5c7){
LigeoConfigurationAPI.myInitialLong=_5c7;
};
LigeoConfigurationAPI.setInitialZoom=function(_5c8){
LigeoConfigurationAPI.myInitialZoom=_5c8;
};
LigeoConfigurationAPI.setMapWidth=function(_5c9){
LigeoConfigurationAPI.myMapWidth=_5c9;
};
LigeoConfigurationAPI.setMapHeight=function(_5ca){
LigeoConfigurationAPI.myMapHeight=_5ca;
};
LigeoConfigurationAPI.setMapGridSearchZoomThreshold=function(_5cb){
LigeoConfigurationAPI.myMapGridSearchZoomThreshold=_5cb;
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
LigeoConfigurationAPI.setRadiusSearchIconOn=function(icon,_5ce){
LigeoConfigurationAPI.myRadiusSearchIconOn=icon;
};
LigeoConfigurationAPI.getRadiusSearchLocation=function(){
return LigeoConfigurationAPI.myRadiusSearchLocation;
};
LigeoConfigurationAPI.setRadiusSearchLocation=function(_5cf){
LigeoConfigurationAPI.myRadiusSearchLocation=_5cf;
};
LigeoConfigurationAPI.setRadiusSearchCallBack=function(_5d0){
LigeoConfigurationAPI.radiusSearchCallBack=_5d0;
};
LigeoConfigurationAPI.setApplicationReloaded=function(_5d1){
LigeoConfigurationAPI.applicationReloaded=_5d1;
};
LigeoConfigurationAPI.isApplicationReloaded=function(){
return LigeoConfigurationAPI.applicationReloaded;
};
LigeoConfigurationAPI.setCountryFilterArray=function(_5d2){
LigeoConfigurationAPI.countryFilterArray=_5d2;
};
LigeoConfigurationAPI.getCountryFilterArray=function(){
return LigeoConfigurationAPI.countryFilterArray;
};
LigeoConfigurationAPI.setMapUsingLayers=function(_5d3){
LigeoConfigurationAPI.mapUsingLayers=_5d3;
};
LigeoConfigurationAPI.isMapUsingLayers=function(){
return LigeoConfigurationAPI.mapUsingLayers;
};
LigeoConfigurationAPI.setMapAuthToken=function(_5d4){
LigeoConfigurationAPI.myMapAuthToken=_5d4;
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
LigeoLayoutAPI.setRouteTableFooterOption=function(_5d5){
this.routeTableFooterOption=String(_5d5);
};
LigeoLayoutAPI.isDisplayTimeInRoute=false;
LigeoLayoutAPI.getDisplayTimeInRoute=function(){
return this.isDisplayTimeInRoute;
};
LigeoLayoutAPI.setTimeInRouteTable=function(_5d6){
this.isDisplayTimeInRoute=Boolean(_5d6);
};
LigeoLayoutAPI.routeDisplayOption="TABLE";
LigeoLayoutAPI.getRouteDisplayOption=function(){
return this.routeDisplayOption;
};
LigeoLayoutAPI.setRouteDisplayOption=function(_5d7){
this.routeDisplayOption=String(_5d7);
};
dojo.provide("com.infonow.ligeo.map.LigeoMapDrawingToolkit");
function LigeoMapDrawingToolkit(){
};
LigeoMapDrawingToolkit.radiusToolActive=false;
LigeoMapDrawingToolkit.radiusToolDrawing=false;
LigeoMapDrawingToolkit.isRadiusToolActive=function(){
return LigeoMapDrawingToolkit.radiusToolActive;
};
LigeoMapDrawingToolkit.setRadiusToolActive=function(_5d8){
LigeoMapDrawingToolkit.radiusToolActive=_5d8;
};
LigeoMapDrawingToolkit.isRadiusToolDrawing=function(){
return LigeoMapDrawingToolkit.radiusToolDrawing;
};
LigeoMapDrawingToolkit.setRadiusToolDrawing=function(_5d9){
LigeoMapDrawingToolkit.radiusToolDrawing=_5d9;
};
LigeoMapDrawingToolkit.calcDistance=function(_5da,_5db){
var lat1=_5da.Latitude;
var lon1=_5da.Longitude;
var lat2=_5db.Latitude;
var lon2=_5db.Longitude;
var _5e0=6371;
var _5e1=Math.PI/180;
var dLat=(lat2-lat1)*_5e1;
var dLon=(lon2-lon1)*_5e1;
var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1*_5e1)*Math.cos(lat2*_5e1)*Math.sin(dLon/2)*Math.sin(dLon/2);
var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var d=_5e0*c;
return d;
};
LigeoMapDrawingToolkit.drawCircle=function(_5e7,_5e8){
var _5e9=6371;
var lat=(_5e7.Latitude*Math.PI)/180;
var lon=(_5e7.Longitude*Math.PI)/180;
var d=parseFloat(_5e8)/_5e9;
var _5ed=new Array();
for(i=0;i<=360;i++){
var _5ee=new VELatLong(0,0);
var _5ef=i*Math.PI/180;
_5ee.Latitude=Math.asin(Math.sin(lat)*Math.cos(d)+Math.cos(lat)*Math.sin(d)*Math.cos(_5ef));
_5ee.Longitude=((lon+Math.atan2(Math.sin(_5ef)*Math.sin(d)*Math.cos(lat),Math.cos(d)-Math.sin(lat)*Math.sin(_5ee.Latitude)))*180)/Math.PI;
_5ee.Latitude=(_5ee.Latitude*180)/Math.PI;
_5ed.push(_5ee);
}
var _5f0=new VEShape(VEShapeType.Polyline,_5ed);
_5f0.HideIcon();
LigeoMap.searchShapeLayer.AddShape(_5f0);
};
LigeoMapDrawingToolkit.startDrawingCircle=function(_5f1,_5f2){
if(LigeoMapDrawingToolkit.isRadiusToolActive()){
LigeoMapDrawingToolkit.setRadiusToolDrawing(true);
var _5f3=new VEPixel(_5f2.mapX,_5f2.mapY);
_5f3=_5f1.PixelToLatLong(_5f3);
LigeoMap.searchShapeLayer.anchorPoint=_5f3;
}
};
LigeoMapDrawingToolkit.endDrawingCircle=function(_5f4,_5f5){
if(LigeoMapDrawingToolkit.isRadiusToolActive()){
var _5f6=new VEPixel(_5f5.mapX,_5f5.mapY);
_5f6=_5f4.PixelToLatLong(_5f6);
LigeoMapDrawingToolkit.setRadiusToolDrawing(false);
LigeoMap.searchShapeLayer.DeleteAllShapes();
LigeoConfigurationAPI.radiusSearchCallBack(LigeoMap.searchShapeLayer.anchorPoint,LigeoMapDrawingToolkit.calcDistance(LigeoMap.searchShapeLayer.anchorPoint,_5f6));
}
};
LigeoMapDrawingToolkit.activeDrawingCircle=function(_5f7,_5f8){
if(LigeoMapDrawingToolkit.isRadiusToolActive()&&LigeoMapDrawingToolkit.isRadiusToolDrawing()){
LigeoMap.searchShapeLayer.DeleteAllShapes();
var _5f9=new VEPixel(_5f8.mapX,_5f8.mapY);
_5f9=_5f7.PixelToLatLong(_5f9);
var _5fa=LigeoMapDrawingToolkit.calcDistance(LigeoMap.searchShapeLayer.anchorPoint,_5f9);
LigeoMapDrawingToolkit.drawCircle(LigeoMap.searchShapeLayer.anchorPoint,_5fa);
}
};
dojo.provide("com.infonow.ligeo.service.LigeoAjaxService");
function LigeoAjaxService(){
var that=this;
this.activeXmlHttpRequests=new Object();
this.postAjaxResponseHandler=null;
this.evaluateAndExecuteScriptsInElement=function(_5fc,_5fd,_5fe){
var _5ff=_5fc.getElementsByTagName("script");
for(var i=0;i<_5ff.length;i++){
var _601=_5ff[i].text;
if(LigeoVarUtils.isNotNull(_601)){
try{
eval(_601);
}
catch(error){
if(_5fe==false){
LigeoLogger.sendClientErrorToServerLog("populateHtmlMessages error1 scriptText["+i+"] "+_601,null,null,error,document);
_5fe=true;
}
}
}
}
LigeoAPI.executePostInitializeEventHandlers(_5fe);
LigeoAPI.executePostOnLoadEventHandlers(_5fe);
if(that.hasPostAjaxResponseHandler()){
try{
that.getPostAjaxResponseHandler()(_5fd);
}
catch(error){
if(_5fe==false){
LigeoLogger.sendClientErrorToServerLog("PostAjaxResponseHandler error1 scriptText "+that.getPostAjaxResponseHandler(),null,null,error,document);
_5fe=true;
}
}
}
return _5fe;
};
this.ajaxHtmlMessages=function(_602,_603){
var _604=that.createXMLHttpRequest();
function populateHtmlMessages(){
var _605=false;
try{
if(_604.readyState==4){
if(_604.status==200||_604.status==403){
if(LigeoVarUtils.isNotNull(_604.responseText)){
var _606=_604.responseText.indexOf(LigeoAPI.AJAX_TARGET_ELEMENT_OVERRIDE_START);
if(_606!=-1){
var _607=_604.responseText.indexOf(LigeoAPI.AJAX_TARGET_ELEMENT_OVERRIDE_END);
_606+=LigeoAPI.AJAX_TARGET_ELEMENT_OVERRIDE_START.length;
var _608=_604.responseText.substring(_606,_607);
var _609=document.getElementById(_608);
if(LigeoVarUtils.isNotNull(_609)){
_603=_609;
LigeoLogger.debug("AJAX_TARGET_ELEMENT_OVERRIDE new target Id="+_608);
}else{
LigeoLogger.error("AJAX_TARGET_ELEMENT_OVERRIDE Can't find element Id="+_608);
}
}
}
_603.innerHTML=_604.responseText;
if(LigeoVarUtils.isNullOrEmpty(_603.innerHTML)){
var _60a="<div id='ajaxTempDiv' style='display:none'>temporary tag</div>";
_60a=_60a+_604.responseText.replace(/<script/gi,"<script defer");
_603.innerHTML=_60a;
var _60b=document.getElementById("ajaxTempDiv");
if(LigeoVarUtils.isNotNullOrEmpty(_60b)){
_603.removeChild(_60b);
}
}
_605=_605||that.evaluateAndExecuteScriptsInElement(_603,_604,_605);
}else{
if(_604.status!=0){
if(_605==false){
LigeoLogger.sendClientErrorToServerLog("populateHtmlMessages error2 Failed to make xmlHttpRequest status="+_604.status,null,null,null,document);
_605=true;
}
}
}
}
}
catch(error){
if(error.name!="NS_ERROR_NOT_AVAILABLE"){
LigeoLogger.error("The error is: "+error.toString());
}
if(_605==false){
LigeoLogger.sendClientErrorToServerLog("populateHtmlMessages error3 "+error.message,null,null,error,document);
_605=true;
}
}
finally{
that.setPostAjaxResponseHandler(null);
try{
LigeoLogger.sendClientErrorToServerLogBacklog();
}
catch(error){
}
}
};
var _60c=true;
if(typeof _602=="string"){
_604.open("GET",_602,_60c);
_604.onreadystatechange=populateHtmlMessages;
}else{
var _60d="";
var _60e=_602.elements;
for(var i=0;i<_60e.length;i++){
if((_60e[i].type!="checkbox")&&(_60e[i].type!="radio")){
_60d+=_60e[i].name+"=";
_60d+=LigeoVarUtils.URLEncode(_60e[i].value)+"&";
}else{
if((_60e[i].checked==true)&&(_60e[i].type=="radio")){
_60d+=_60e[i].name+"=";
_60d+=LigeoVarUtils.URLEncode(_60e[i].value)+"&";
}else{
if(_60e[i].checked==true){
_60d+=_60e[i].name+"=";
_60d+=true+"&";
}
}
}
}
var _610=new String(_602.action);
if(("POST"==_602.method)||("post"==_602.method)){
_60c=false;
}else{
_610=_610+"?"+_60d;
_604.onreadystatechange=populateHtmlMessages;
}
_604.open(_602.method,_610,_60c);
_604.setRequestHeader("Content-type","application/x-www-form-urlencoded");
}
var _611=that.activeXmlHttpRequests[_603.id];
if(LigeoVarUtils.isNotNull(_611)&&_611.readyState!=4){
LigeoLogger.debug("ABORT: activeRequest="+_603.id);
_611.abort();
}
that.activeXmlHttpRequests[_603.id]=_604;
_604.send(_60d);
if(_60c==false){
populateHtmlMessages();
return _604.responseText;
}
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
this.parseXmlToDom=function(_612){
var _613=null;
if(LigeoBrowserCompatability.isIe){
_613=new ActiveXObject("Microsoft.XMLDOM");
_613.async="false";
_613.loadXML(_612);
}else{
try{
parser=new DOMParser();
_613=parser.parseFromString(_612,"text/xml");
}
catch(error){
LigeoLogger.error(error);
}
}
return _613;
};
this.getPostAjaxResponseHandler=function(){
return this.postAjaxResponseHandler;
};
this.setPostAjaxResponseHandler=function(_614){
this.postAjaxResponseHandler=_614;
};
this.hasPostAjaxResponseHandler=function(){
return LigeoVarUtils.isFunction(this.getPostAjaxResponseHandler());
};
};
dojo.provide("com.infonow.ligeo.address.LigeoAddressParser");
function LigeoAddressParser(){
};
LigeoAddressParser.myParsedAddress=null;
LigeoAddressParser.myFormToSubmit=null;
LigeoAddressParser.myResultElement=null;
LigeoAddressParser.setParsedAddress=function(_615,_616){
if(_615&&_615.indexOf("\\")>-1){
_615=_615.replace("\\"," ");
}
LigeoAddressParser.myParsedAddress=_615;
var _617=document.getElementById(_616);
if(LigeoVarUtils.isNotNullOrEmpty(_617)){
_617.fullAddress.value=_615;
}
};
LigeoAddressParser.getParsedAddress=function(){
return LigeoAddressParser.myParsedAddress;
};
LigeoAddressParser.setFormToSubmit=function(_618){
LigeoAddressParser.myFormToSubmit=_618;
};
LigeoAddressParser.setResultElement=function(_619){
LigeoAddressParser.myResultElement=_619;
};
LigeoAddressParser.parseAddress=function(_61a,_61b,_61c){
privateFindPlace=function(_61d,_61e,_61f,_620,_621){
_61f=LigeoAddressParser.filterCountries(_61f);
if(LigeoLogger.isDebugEnabled()){
LigeoAddressParser.debugVeCandidates(unescape(this.Where),_61f);
}
if(LigeoAddressParser.hasCandidates(_61f)){
for(var i=0;i<_61f.length;i++){
LigeoAddressParser.addHidden("ligeo-candidate-lat-"+i,"candidates["+i+"].coordinate.latitude",_61f[i].LatLong.Latitude);
LigeoAddressParser.addHidden("ligeo-candidate-long-"+i,"candidates["+i+"].coordinate.longitude",_61f[i].LatLong.Longitude);
LigeoAddressParser.addHidden("ligeo-candidate-addr-"+i,"candidates["+i+"].address.fullAddress",_61f[i].Name);
}
}else{
if((_61f!=null)&&(_61f.length>0)){
LigeoAddressParser.addHidden("ligeo-lat","latitude",_61f[0].LatLong.Latitude);
LigeoAddressParser.addHidden("ligeo-long","longitude",_61f[0].LatLong.Longitude);
var _623=LigeoAddressParser.postFixFormat(_61f[0].Name);
if(LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress){
LigeoAddressParser.myFormToSubmit.fullAddress.value=_623;
}else{
LigeoAddressParser.addHidden("correctedFullAddressId","correctedFullAddress",_623);
}
LigeoAddressParser.setParsedAddress(_623,null);
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
LigeoAddressParser.setFormToSubmit(_61a);
if(_61c!=null){
LigeoAddressParser.setResultElement(_61c);
}
var _624=_61a.fullAddress.value;
LigeoAddressParser.addHidden("userInputAddressId","userInputAddress",_624);
var _625=_61a.fullAddress.value;
if(LigeoFeaturesAPI.addCountryToFullAddress){
_625=LigeoVarUtils.addCountryToFullAddress(_61a);
}
if(_625!=null){
_625=LigeoAddressParser.preFixFormat(_625);
}
if(_625&&_625.indexOf("\\")>-1){
_625=_625.replace("\\"," ");
}
if(LigeoVarUtils.isNull(_61b)){
_61b=LigeoAPI.getDefaultMap();
}
var map=_61b.getVEMap();
try{
results=map.Find(null,_625,null,null,0,20,false,false,false,false,privateFindPlace);
}
catch(error){
privateFindPlace(null,null,null,null,null);
}
return false;
};
LigeoAddressParser.searchFromLatLon=function(_627,_628){
if(LigeoVarUtils.isNotNullOrEmpty(_627)){
LigeoAddressParser.addHidden("ligeo-lat","latitude",_627.Latitude);
LigeoAddressParser.addHidden("ligeo-long","longitude",_627.Longitude);
var _629="";
if(LigeoFeaturesAPI.showDisplayParsedAddressAsFullAddress){
LigeoAddressParser.myFormToSubmit.fullAddress.value=_629;
}else{
LigeoAddressParser.addHidden("correctedFullAddressId","correctedFullAddress",_629);
}
LigeoAddressParser.setParsedAddress(_629,LigeoAddressParser.myFormToSubmit);
}
LigeoAPI.ajaxHtmlMessages(LigeoAddressParser.myFormToSubmit,_628);
};
LigeoAddressParser.filterCountries=function(_62a){
if((_62a!=null)&&(_62a.length>0)){
var _62b=LigeoConfigurationAPI.getCountryFilterArray();
if((_62b!=null)&&(_62b.length>0)){
for(var i=0;i<_62b.length;i++){
var _62d=_62b[i];
if(_62a[0].Name==_62d){
_62a=null;
return _62a;
}
}
}
}
return _62a;
};
LigeoAddressParser.clearCandidates=function(){
var _62e=document.getElementById("ligeo-lat");
LigeoDOMUtils.deleteElement(_62e);
_62e=document.getElementById("ligeo-long");
LigeoDOMUtils.deleteElement(_62e);
for(var i=0;i<20;i++){
_62e=document.getElementById("ligeo-candidate-lat-"+i);
LigeoDOMUtils.deleteElement(_62e);
_62e=document.getElementById("ligeo-candidate-long-"+i);
LigeoDOMUtils.deleteElement(_62e);
_62e=document.getElementById("ligeo-candidate-addr-"+i);
LigeoDOMUtils.deleteElement(_62e);
}
};
LigeoAddressParser.debugVeCandidates=function(_630,_631){
var _632=["Interpolated","Rooftop"];
var _633=["None","Good","Ambiguous","UpHierarchy","Modified"];
var _634=["High","Medium","Low"];
var _635="Original Search: "+_630+"\n\n";
for(var i=0;LigeoVarUtils.isNotNullOrEmpty(_631)&&i<_631.length;i++){
_635+=_631[i].Name;
_635+="\n    Precision: "+_632[_631[i].Precision];
_635+="\n    Match Code: "+_633[_631[i].MatchCode];
_635+="\n    Match Confidence:"+_634[_631[i].MatchConfidence];
_635+="\n    Score: "+_631[i].Score;
_635+="\n\n";
}
alert(_635);
};
LigeoAddressParser.hasCandidates=function(_637){
var _638=false;
if(LigeoVarUtils.isNotNullOrEmpty(_637)&&_637.length>1){
var _639=0;
var _63a=0;
var _63b=0;
for(var i=0;i<_637.length;i++){
if(_637[i].MatchConfidence==VEMatchConfidence.High){
_639++;
}
if(_637[i].MatchConfidence==VEMatchConfidence.Medium){
_63a++;
}
if(_637[i].MatchConfidence==VEMatchConfidence.Low){
_63b++;
}
}
if(_639>1){
_638=true;
}else{
if((_639==0)&&(_63a>1)){
_638=true;
}else{
if((_639==0)&&(_63a==0)&&(_63b>1)){
_638=true;
}
}
}
}
return _638;
};
LigeoAddressParser.addHidden=function(id,_63e,_63f){
var _640=document.getElementById(id);
if(LigeoVarUtils.isNullOrEmpty(_640)){
_640=document.createElement("input");
_640.setAttribute("type","hidden");
_640.setAttribute("name",_63e);
_640.setAttribute("id",id);
}
_640.setAttribute("value",_63f);
LigeoAddressParser.myFormToSubmit.appendChild(_640);
};
LigeoAddressParser.preFixFormat=function(_641){
_641=_641.replace(/\+/,"and");
_641=_641.replace(/ and /," & ");
_641=_641.replace(/ et /," & ");
_641=_641.replace(/#/," ");
return _641;
};
LigeoAddressParser.postFixFormat=function(_642){
_642=_642.replace(/\s\(.*\)/,"");
_642=_642.replace(/\s\[.*\]/,"");
_642=_642.replace(/&/,"and");
return _642;
};
dojo.provide("com.infonow.ligeo.LigeoAPI");
function LigeoAPI(){
};
LigeoAPI.DEFAULT_MAP_ID="ligeo-map";
LigeoAPI.RESULT_MAP_ID="ligeo-result-map";
LigeoAPI.ROUTE_MAP_ID="ligeo-route-map";
LigeoAPI.DRILL_MAP_ID="ligeo-drill-map";
LigeoAPI.DEFAULT_ROUTE_ID="ligeo-route";
LigeoAPI.POST_INITIALIZE_EVENT_NAME="postInitialize";
LigeoAPI.POST_ONLOAD_EVENT_NAME="postOnLoad";
LigeoAPI.AJAX_TARGET_ELEMENT_OVERRIDE_START="AJAX_TARGET_ELEMENT_OVERRIDE_START";
LigeoAPI.AJAX_TARGET_ELEMENT_OVERRIDE_END="AJAX_TARGET_ELEMENT_OVERRIDE_END";
LigeoAPI.myLigeoMaps={};
LigeoAPI.mySkipGridSearch=false;
LigeoAPI.fullPageRefreshHandler=null;
LigeoAPI.gridSearchVisualCueHandler=null;
LigeoAPI.getLigeoMap=function(){
return LigeoAPI.getDefaultMap();
};
LigeoAPI.setCustomBalloonStyle=function(_643){
LigeoBalloon.setHtmlStyle(_643);
};
LigeoAPI.configure=function(){
};
LigeoAPI.configureResults=function(){
};
LigeoAPI.configureRoute=function(){
};
LigeoAPI.configureDrill=function(){
};
LigeoAPI.ligeoAjaxService=new LigeoAjaxService();
LigeoAPI.addOnLoad=function(_644,name){
if(!name){
name=LigeoAPI.POST_INITIALIZE_EVENT_NAME;
}
LigeoAPI.eventAttach(name,_644);
};
LigeoAPI.containsMapDivID=function(_646){
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
if(LigeoConfigurationAPI.getMyMapDivIDs()[i]==_646){
return true;
}
}
return false;
};
LigeoAPI.executePostInitializeEventHandlers=function(_648){
LigeoAPI.executeEventHandlers(LigeoAPI.POST_INITIALIZE_EVENT_NAME,_648);
};
LigeoAPI.executePostOnLoadEventHandlers=function(_649){
LigeoAPI.executeEventHandlers(LigeoAPI.POST_ONLOAD_EVENT_NAME,_649);
};
LigeoAPI.initializeUponFullPageRefresh=function(){
try{
(new LigeoInitializer()).execute();
LigeoAPI.executePostInitializeEventHandlers();
LigeoAPI.executePostOnLoadEventHandlers();
if(LigeoAPI.hasFullPageRefreshHandler()){
var _64a=LigeoAPI.getFullPageRefreshHandler();
LigeoAPI.setFullPageRefreshHandler(null);
_64a();
}
}
catch(error){
LigeoLogger.error("Initialize caught an exception name="+error.name+" msg="+error.message);
}
};
LigeoAPI.getLigeoMapById=function(_64b){
return LigeoAPI.myLigeoMaps[_64b];
};
LigeoAPI.getDefaultMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.DEFAULT_MAP_ID);
};
LigeoAPI.getDrillMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.DRILL_MAP_ID);
};
LigeoAPI.getSearchResultsMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.RESULT_MAP_ID);
};
LigeoAPI.getRouteMap=function(){
return LigeoAPI.getLigeoMapById(LigeoAPI.ROUTE_MAP_ID);
};
LigeoAPI.getConfigureFunction=function(_64c){
if(LigeoVarUtils.isNull(_64c)){
return null;
}
if(_64c.isDefaultMap()){
return LigeoAPI.configure;
}else{
if(_64c.isDrillMap()){
return LigeoAPI.configureDrill;
}else{
if(_64c.isSearchResultsMap()){
return LigeoAPI.configureResults;
}else{
if(_64c.isRouteMap()){
return LigeoAPI.configureRoute;
}
}
}
}
return null;
};
LigeoAPI.applyToAllMaps=function(_64d){
for(var i=0;i<LigeoConfigurationAPI.getMyMapDivIDs().length;i++){
var _64f=LigeoAPI.getLigeoMapById(LigeoConfigurationAPI.getMyMapDivIDs()[i]);
if(LigeoVarUtils.isNotNull(_64f)){
_64d(_64f);
}
}
};
LigeoAPI.getLigeoRoute=function(){
return LigeoAPI.getDefaultMap().getLigeoRoute();
};
LigeoAPI.setMapDimensions=function(_650,_651){
LigeoAPI.getDefaultMap().setMapDimensions(_650,_651);
};
LigeoAPI.setMapCenter=function(_652){
LigeoAPI.getDefaultMap().setCenter(_652);
};
LigeoAPI.addMapLocation=function(_653){
LigeoAPI.getDefaultMap().addLocation(_653);
};
LigeoAPI.setRouteTableHeaders=function(_654,_655,_656){
LigeoAPI.getDefaultMap().setRouteTableHeaders(_654,_655,_656);
};
LigeoAPI.setRouteTurnIcon=function(_657){
LigeoAPI.getDefaultMap().setRouteTurnIcon(_657);
};
LigeoAPI.addRoute=function(_658,_659){
LigeoAPI.getDefaultMap().addRoute(_658,_659);
};
LigeoAPI.setOverviewZoom=function(_65a){
LigeoAPI.getDefaultMap().setOverviewZoom(_65a);
};
LigeoAPI.setCenterAndZoomIn=function(_65b,_65c){
LigeoAPI.getDefaultMap().setCenterAndZoomIn(_65b,_65c);
};
LigeoAPI.setCenterAndZoomOut=function(_65d,_65e){
LigeoAPI.getDefaultMap().setCenterAndZoomOut(_65d,_65e);
};
LigeoAPI.closeBalloon=function(){
LigeoBalloon.hide();
};
LigeoAPI.showPanel=function(_65f){
LigeoBalloon.showPanel(_65f);
};
LigeoAPI.ajaxHtmlMessages=function(form,_661){
try{
return LigeoAPI.ligeoAjaxService.ajaxHtmlMessages(form,_661);
}
catch(error){
LigeoLogger.error(error);
}
return "done";
};
LigeoAPI.setPostAjaxResponseHandler=function(_662){
LigeoAPI.ligeoAjaxService.setPostAjaxResponseHandler(_662);
};
LigeoAPI.setFullPageRefreshHandler=function(_663){
LigeoAPI.fullPageRefreshHandler=_663;
};
LigeoAPI.getFullPageRefreshHandler=function(){
return LigeoAPI.fullPageRefreshHandler;
};
LigeoAPI.hasFullPageRefreshHandler=function(){
return LigeoVarUtils.isFunction(LigeoAPI.getFullPageRefreshHandler());
};
LigeoAPI.setGridSearchVisualCueHandler=function(_664){
LigeoAPI.gridSearchVisualCueHandler=_664;
};
LigeoAPI.getGridSearchVisualCueHandler=function(){
return LigeoAPI.gridSearchVisualCueHandler;
};
LigeoAPI.hasGridSearchVisualCueHandler=function(){
return LigeoVarUtils.isFunction(LigeoAPI.getGridSearchVisualCueHandler());
};
LigeoAPI.evaluateAndExecuteScriptsInElement=function(_665){
LigeoAPI.ligeoAjaxService.evaluateAndExecuteScriptsInElement(_665,null,false);
};
LigeoAPI.DEFAULT_CSStemplateString=".display-none { display: none; }\n\n#ligeo-balloon\n{\n\tz-index: 200;\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 277px;\n\theight: 218px;\n\tfont-size: 11px;\n\tline-height: 14px;\n\tcolor: #333;\n\toverflow: hidden;\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n\n#ligeo-balloonBox\n{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\twidth: 277px;\n\theight: 218px;\n\tbackground-image: url(\"__image__server__URL__/balloonBack.gif\");\n}\n\n.ligeo-balloonBeaks\n{\n\tvisibility: hidden;\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\twidth: 277px;\n\theight: 218px;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw\n{\n\tbackground-image: url(\"__image__server__URL__/northWestBeak.gif\");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-n\n{\n\tbackground-image: url(\"__image__server__URL__/northBeak.gif\");\n\tbackground-position: 50% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-ne\n{\n\tbackground-image: url(\"__image__server__URL__/northEastBeak.gif\");\n\tbackground-position: 100% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-w\n{\n\tbackground-image: url(\"__image__server__URL__/westBeak.gif\");\n\tbackground-position: 0 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-e\n{\n\tbackground-image: url(\"__image__server__URL__/eastBeak.gif\");\n\tbackground-position: 100% 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-sw\n{\n\tbackground-image: url(\"__image__server__URL__/southWestBeak.gif\");\n\tbackground-position: 0 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-s\n{\n\tbackground-image: url(\"__image__server__URL__/southBeak.gif\");\n\tbackground-position: 50% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-se\n{\n\tbackground-image: url(\"__image__server__URL__/southEastBeak.gif\");\n\tbackground-position: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw .ligeo-nwBeak,\n.ligeo-balloonDock-n .ligeo-nBeak,\n.ligeo-balloonDock-ne .ligeo-neBeak,\n.ligeo-balloonDock-w .ligeo-wBeak,\n.ligeo-balloonDock-e .ligeo-eBeak,\n.ligeo-balloonDock-sw .ligeo-swBeak,\n.ligeo-balloonDock-s .ligeo-sBeak,\n.ligeo-balloonDock-se .ligeo-seBeak { visibility: visible; }\n\n.ligeo-nwBeak,\n.ligeo-neBeak,\n.ligeo-seBeak,\n.ligeo-swBeak\n{\n\twidth: 29px;\n\theight: 29px;\n}\n\n.ligeo-nBeak,\n.ligeo-sBeak\n{\n\twidth: 25px;\n\theight: 14px;\n\tleft: 128px;\n}\n\n.ligeo-nBeak { top: 0; }\n.ligeo-sBeak { bottom: 0; }\n\n.ligeo-eBeak,\n.ligeo-wBeak\n{\n\twidth: 14px;\n\theight: 25px;\n\ttop: 98px;\n}\n\n.ligeo-eBeak { right: 0; }\n.ligeo-wBeak { left: 0; }\n\n.ligeo-nwBeak\n{\n\ttop: 0;\n\tleft: 0;\n}\n\n.ligeo-neBeak\n{\n\ttop: 0;\n\tright: 0;\n}\n\n.ligeo-swBeak\n{\n\tbottom: 0;\n\tleft: 0;\n}\n\n.ligeo-seBeak\n{\n\tbottom: 0;\n\tright: 0;\n}\n\n#ligeo-balloonClose\n{\n\tz-index: 300;\n\tposition: absolute;\n\ttop: 25px;\n\tright: 25px;\n\tcursor: pointer;\n\twidth: 13px;\n\theight: 13px;\n\tbackground: url(\"__image__server__URL__/closeBox.gif\");\n}\n\n#ligeo-balloonTabs\n{\n\tz-index: 200;\n\tposition: absolute;\n\ttop: 17px;\n\tleft: 17px;\n\twidth: 243px;\n\theight: 30px;\n\tbackground: url(\"__image__server__URL__/tabBack.gif\") 0 0 no-repeat;\n}\n\n#ligeo-balloonTabs ul\n{\n\tlist-style: none;\n\theight: 30px;\n\tpadding-left: 8px;\n\tmargin: 0px;\n}\n\n#ligeo-balloonTabs li\n{\n\tfloat: left;\n\theight: 22px;\n\tline-height: 22px;\n\ttext-align: center;\n\tmargin: 8px 2px 0 0;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:link,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:visited\n{\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n\ttext-decoration: none;\n\tcolor: #0033CC;\n\tfont-weight: normal;\n\tline-height: 22px;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:hover { color: inherit; }\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tcolor: inherit;\n\tfont-weight: bold;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tbackground: url(\"__image__server__URL__/tabLeftOn.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabLeft.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-active\n{\n\tbackground: url(\"__image__server__URL__/tabRightOn.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabRight.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tdisplay: block;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n}\n\n#ligeo-balloonPanels\n{\n\tz-index: 400;\n\theight: 135px;\n\twidth: 227px;\n\tposition: absolute;\n\ttop: 55px;\n\tleft: 30px;\n\toverflow: auto;\n}\n\n.ligeo-balloon .ligeo-balloonContentBlock address,\n.ligeo-balloon .ligeo-balloonContentBlock p,\n.ligeo-balloon .ligeo-balloonContentBlock ul\n{\n\tfont-style: normal;\n\tmargin-bottom: 10px;\n}\n\n.ligeo-balloon .ligeo-balloonContentBlock ul,\n.ligeo-balloon .ligeo-balloonContentBlock ol { padding-left: 15px; }\n.ligeo-balloonContentBlock { padding-right: 10px; }\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n/* Infonow Copyright */\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n";
LigeoAPI.CUSTOM1_CSStemplateString=".display-none { display: none; }\n\n#ligeo-balloon\n{\n\tz-index: 200;\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tpadding: 5px;\n\twidth: auto;\n\toverflow: hidden;\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n\n#ligeo-balloonBox\n{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\tbackground-image: url(\"__image__server__URL__/balloonBack.gif\");\n}\n\n.ligeo-balloonBeaks\n{\n\tvisibility: hidden;\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw\n{\n\tbackground-image: url(\"__image__server__URL__/north_west.gif\");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-n\n{\n\tbackground-image: url(\"__image__server__URL__/north.gif\");\n\tbackground-position: 50% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-ne\n{\n\tbackground-image: url(\"__image__server__URL__/north_east.gif\");\n\tbackground-position: 100% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-w\n{\n\tbackground-image: url(\"__image__server__URL__/west.gif\");\n\tbackground-position: 0 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-e\n{\n\tbackground-image: url(\"__image__server__URL__/east.gif\");\n\tbackground-position: 100% 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-sw\n{\n\tbackground-image: url(\"__image__server__URL__/south_west.gif\");\n\tbackground-position: 0 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-s\n{\n\tbackground-image: url(\"__image__server__URL__/south.gif\");\n\tbackground-position: 50% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-se\n{\n\tbackground-image: url(\"__image__server__URL__/south_east.gif\");\n\tbackground-position: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw .ligeo-nwBeak,\n.ligeo-balloonDock-n .ligeo-nBeak,\n.ligeo-balloonDock-ne .ligeo-neBeak,\n.ligeo-balloonDock-w .ligeo-wBeak,\n.ligeo-balloonDock-e .ligeo-eBeak,\n.ligeo-balloonDock-sw .ligeo-swBeak,\n.ligeo-balloonDock-s .ligeo-sBeak,\n.ligeo-balloonDock-se .ligeo-seBeak { visibility: visible; }\n\n.ligeo-nwBeak,\n.ligeo-neBeak,\n.ligeo-seBeak,\n.ligeo-swBeak\n{\n\twidth: 29px;\n\theight: 29px;\n}\n\n.ligeo-nBeak,\n.ligeo-sBeak\n{\n\twidth: 25px;\n\theight: 14px;\n\tleft: 128px;\n}\n\n.ligeo-nBeak { top: 0; }\n.ligeo-sBeak { bottom: 0; }\n\n.ligeo-eBeak,\n.ligeo-wBeak\n{\n\twidth: 14px;\n\theight: 25px;\n\ttop: 98px;\n}\n\n.ligeo-eBeak { right: 0; }\n.ligeo-wBeak { left: 0; }\n\n.ligeo-nwBeak\n{\n\ttop: 0;\n\tleft: 0;\n}\n\n.ligeo-neBeak\n{\n\ttop: 0;\n\tright: 0;\n}\n\n.ligeo-swBeak\n{\n\tbottom: 0;\n\tleft: 0;\n}\n\n.ligeo-seBeak\n{\n\tbottom: 0;\n\tright: 0;\n}\n\n#ligeo-balloonClose\n{\n\tz-index: 300;\n\tposition: absolute;\n\ttop: 25px;\n\tright: 25px;\n\tcursor: pointer;\n\twidth: 13px;\n\theight: 13px;\n\tbackground: url(\"__image__server__URL__/closeBox.gif\");\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs\n{\n\tz-index: 200;\n\tposition: absolute;\n\ttop: 17px;\n\tleft: 17px;\n\twidth: 243px;\n\theight: 30px;\n\tbackground: url(\"__image__server__URL__/tabBack.gif\") 0 0 no-repeat;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs ul\n{\n\tlist-style: none;\n\theight: 30px;\n\tpadding-left: 8px;\n\tmargin: 0px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs li\n{\n\tfloat: left;\n\theight: 22px;\n\tline-height: 22px;\n\ttext-align: center;\n\tmargin: 8px 2px 0 0;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:link,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:visited\n{\n\tfloat: left;\n\twidth: auto;\n\ttext-decoration: none;\n\tcolor: #0033CC;\n\tfont-weight: normal;\n\tline-height: 22px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:hover\n{\n\tcolor: inherit;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tcolor: inherit;\n\tfont-weight: bold;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tbackground: url(\"__image__server__URL__/tabLeftOn.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabLeft.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-active\n{\n\tbackground: url(\"__image__server__URL__/tabRightOn.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabRight.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonPanels\n{\n\tbackground: #FFF;\n\tborder: 1px solid #999;\n\tpadding: 10px;\n\theight: auto;\n\twidth: 220px;\n\t\\width: 220px;\n\tw\\idth: 220px;\n}\n\n#ligeo-balloonPanels p\n{\n\tfont-size: 11px;\n\tline-height: 15px;\n}\n\n#ligeo-balloonPanels p.locationType\n{\n\tfont-weight: bold;\n\tcolor: #C00;\n}\n\n#ligeo-balloonPanels p.actions\n{\n\tpadding: 5px 0 0 0;\n\tfont-weight: bold;\n}\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n\n";
LigeoAPI.CUSTOM2_CSStemplateString=".display-none { display: none; }\n\n#ligeo-balloon\n{\n\tz-index: 200;\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 242px;\n\tpadding: 5px;\n\toverflow: hidden;\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n\n#ligeo-balloonBox\n{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\twidth: 277px;\n\theight: 218px;\n\tbackground-image: url(\"__image__server__URL__/balloonBack.gif\");\n}\n\n.ligeo-balloonBeaks\n{\n\tvisibility: hidden;\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\twidth: 220px;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw\n{\n\tbackground-image: url(\"__image__server__URL__/north_west.gif\");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-n\n{\n\tbackground-image: url(\"__image__server__URL__/north.gif\");\n\tbackground-position: 50% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-ne\n{\n\tbackground-image: url(\"__image__server__URL__/north_east.gif\");\n\tbackground-position: 100% 0;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-w\n{\n\tbackground-image: url(\"__image__server__URL__/west.gif\");\n\tbackground-position: 0 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-e\n{\n\tbackground-image: url(\"__image__server__URL__/east.gif\");\n\tbackground-position: 100% 50%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-sw\n{\n\tbackground-image: url(\"__image__server__URL__/south_west.gif\");\n\tbackground-position: 0 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-s\n{\n\tbackground-image: url(\"__image__server__URL__/south.gif\");\n\tbackground-position: 50% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-se\n{\n\tbackground-image: url(\"__image__server__URL__/south_east.gif\");\n\tbackground-position: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.ligeo-balloonDock-nw .ligeo-nwBeak,\n.ligeo-balloonDock-n .ligeo-nBeak,\n.ligeo-balloonDock-ne .ligeo-neBeak,\n.ligeo-balloonDock-w .ligeo-wBeak,\n.ligeo-balloonDock-e .ligeo-eBeak,\n.ligeo-balloonDock-sw .ligeo-swBeak,\n.ligeo-balloonDock-s .ligeo-sBeak,\n.ligeo-balloonDock-se .ligeo-seBeak { visibility: visible; }\n\n.ligeo-nwBeak,\n.ligeo-neBeak,\n.ligeo-seBeak,\n.ligeo-swBeak\n{\n\twidth: 29px;\n\theight: 29px;\n}\n\n.ligeo-nBeak,\n.ligeo-sBeak\n{\n\twidth: 25px;\n\theight: 14px;\n\tleft: 128px;\n}\n\n.ligeo-nBeak { top: 0; }\n.ligeo-sBeak { bottom: 0; }\n\n.ligeo-eBeak,\n.ligeo-wBeak\n{\n\twidth: 14px;\n\theight: 25px;\n\ttop: 98px;\n}\n\n.ligeo-eBeak { right: 0; }\n.ligeo-wBeak { left: 0; }\n\n.ligeo-nwBeak\n{\n\ttop: 0;\n\tleft: 0;\n}\n\n.ligeo-neBeak\n{\n\ttop: 0;\n\tright: 0;\n}\n\n.ligeo-swBeak\n{\n\tbottom: 0;\n\tleft: 0;\n}\n\n.ligeo-seBeak\n{\n\tbottom: 0;\n\tright: 0;\n}\n\n#ligeo-balloonClose\n{\n\tz-index: 300;\n\tposition: absolute;\n\ttop: 25px;\n\tright: 25px;\n\tcursor: pointer;\n\twidth: 13px;\n\theight: 13px;\n\tbackground: url(\"__image__server__URL__/closeBox.gif\");\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs\n{\n\tz-index: 200;\n\tposition: absolute;\n\ttop: 17px;\n\tleft: 17px;\n\twidth: 243px;\n\theight: 30px;\n\tbackground: url(\"__image__server__URL__/tabBack.gif\") 0 0 no-repeat;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs ul\n{\n\tlist-style: none;\n\theight: 30px;\n\tpadding-left: 8px;\n\tmargin: 0px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs li\n{\n\tfloat: left;\n\theight: 22px;\n\tline-height: 22px;\n\ttext-align: center;\n\tmargin: 8px 2px 0 0;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:link,\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:visited\n{\n\tfloat: left;\n\twidth: auto;\n\ttext-decoration: none;\n\tcolor: #0033CC;\n\tfont-weight: normal;\n\tline-height: 22px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive a:hover\n{\n\tcolor: inherit;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tcolor: inherit;\n\tfont-weight: bold;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-active\n{\n\tbackground: url(\"__image__server__URL__/tabLeftOn.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTab-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabLeft.gif\") 0 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-active\n{\n\tbackground: url(\"__image__server__URL__/tabRightOn.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonTabs .ligeo-balloonTabContent-inactive\n{\n\tbackground: url(\"__image__server__URL__/tabRight.gif\") 100% 0 no-repeat;\n\theight: 22px;\n\tline-height: 22px;\n\tfloat: left;\n\twidth: auto;\n\tpadding: 0 7px;\n\tdisplay: none;\n}\n\n#ligeo-balloonPanels\n{\n\tbackground: #FFF;\n\tborder: 1px solid #999;\n\tpadding: 10px;\n\theight: auto;\n\twidth: 220px;\n}\n\n#ligeo-balloonPanels p\n{\n\tfont-size: 11px;\n\tline-height: 15px;\n}\n\n#ligeo-balloonPanels p.locationType\n{\n\tfont-weight: bold;\n\tcolor: #C00;\n}\n\n#ligeo-balloonPanels p.actions\n{\n\tpadding: 5px 0 0 0;\n\tfont-weight: bold;\n}\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n/* Infonow Copyright */\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n";
LigeoAPI.CUSTOM_rev2_CSStemplateString="﻿div#ligeo-balloon,\ndiv#ligeo-balloon div#ligeo-balloonWrapper,\ndiv#ligeo-balloon div#ligeo-balloonMiddle { width: 280px; }\ndiv#ligeo-balloon div#ligeo-balloonHead,\ndiv#ligeo-balloon div#ligeo-balloonPanels { width: 240px; }\ndiv#ligeo-balloon div#ligeo-balloonTop div#ligeo-balloon-corner-NW,\ndiv#ligeo-balloon div#ligeo-balloonBase div#ligeo-balloon-corner-SW { width: 260px; }\n\ndiv#ligeo-balloon\n{\n\tposition: absolute;\n\ttop: 200px;\n\tleft: 150px;\n\tz-index: 10;\n\tdisplay: none;\n}\n\ndiv#ligeo-balloon div { position: relative; }\ndiv#ligeo-balloon div#ligeo-balloonTop,\ndiv#ligeo-balloon div#ligeo-balloonBase { height: 20px; }\ndiv#ligeo-balloon div#ligeo-balloonMiddle { overflow: hidden; }\n\ndiv#ligeo-balloon div#ligeo-balloonHead\n{\n\tmargin-left: 20px;\n\tbackground-color: #FFF;\n\tz-index: 5;\n}\n\ndiv#ligeo-balloon div#ligeo-balloonClose\n{\n\tposition: absolute;\n\twidth: 18px;\n\theight: 18px;\n\tright: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_closeBox.gif\");\n\tz-index: 5;\n}\n\ndiv#ligeo-balloon div#ligeo-balloonTabs\n{\n\tdisplay: none;\n}\n\ndiv#ligeo-balloon div#ligeo-balloonPanels\n{\n\tmin-height: 80px;\n\t_height: 80px;\n\tmargin-left: 20px;\n\tbackground-color: #FFF;\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-side-W,\ndiv#ligeo-balloon div#ligeo-balloon-side-E\n{\n\tposition: absolute;\n\twidth: 20px;\n\tpadding-top: 100%;\n\tz-index: 5;\n\tbackground-repeat: no-repeat;\n\t_background-image: none !important;\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-side-W\n{\n\tleft: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_back-w.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_back-w.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-side-E\n{\n\tright: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_back-e.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_back-e.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-corner-NW,\ndiv#ligeo-balloon div#ligeo-balloon-corner-NE,\ndiv#ligeo-balloon div#ligeo-balloon-corner-SW,\ndiv#ligeo-balloon div#ligeo-balloon-corner-SE\n{\n\tposition: absolute;\n\theight: 20px;\n\twidth: 20px;\n\tbackground-repeat: no-repeat;\n\t_background-image: none !important;\n\tz-index: 5;\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-corner-NW\n{\n\ttop: 0px;\n\tleft: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_back-nw.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_back-nw.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-corner-NE\n{\n\ttop: 0px;\n\tright: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_back-ne.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_back-ne.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-corner-SW\n{\n\tleft: 0px;\n\tbottom: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_back-sw.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_back-sw.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-corner-SE\n{\n\tright: 0px;\n\tbottom: 0px;\n\tbackground-image: url(\"__image__server__URL__/balloon_back-se.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_back-se.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon div#ligeo-balloon-beak\n{\n\tposition: absolute;\n\twidth: 140px;\n\theight: 70px;\n\tz-index: 10;\n\tbackground-repeat: no-repeat;\n\t_background-image: none !important;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-nw div#ligeo-balloon-beak\n{\n\twidth: 110px;\n\ttop: -50px;\n\tleft: -20px;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-nw.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-nw.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-n div#ligeo-balloon-beak\n{\n\twidth: 110px;\n\ttop: -50px;\n\tleft: 50%;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-nw.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-nw.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-ne div#ligeo-balloon-beak\n{\n\ttop: -50px;\n\tright: -20px;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-ne.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-ne.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-w div#ligeo-balloon-beak\n{\n\twidth: 70px;\n\theight: 50px;\n\ttop: 50%;\n\tleft: -50px;\n\tmargin-top: -10px;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-w.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-w.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-e div#ligeo-balloon-beak\n{\n\twidth: 70px;\n\theight: 50px;\n\ttop: 50%;\n\tleft: 100%;\n\tmargin-left: -20px;\n\tmargin-top: -10px;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-e.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-e.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-sw div#ligeo-balloon-beak\n{\n\twidth: 130px;\n\tleft: -20px;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-sw.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-sw.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-s div#ligeo-balloon-beak\n{\n\twidth: 130px;\n\tleft: 50%;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-sw.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-sw.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-se div#ligeo-balloon-beak\n{\n\tright: -20px;\n\tbackground-image: url(\"__image__server__URL__/balloon_beak-se.png\");\n\t_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/balloon_beak-se.png\", sizingMethod=\"crop\");\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-nw div#ligeo-balloonWrapper\n{\n\tmargin-top: 35px;\n\tmargin-left: 5px;\n\ttop: 1px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-n div#ligeo-balloonWrapper\n{\n\tmargin-top: 30px;\n\tmargin-left: -10px;\n\ttop: 1px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-ne div#ligeo-balloonWrapper\n{\n\tmargin-top: 35px;\n\tmargin-left: 0px;\n\ttop: 2px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-w div#ligeo-balloonWrapper\n{\n\tmargin-top: 0px;\n\tmargin-left: 30px;\n\ttop: 2px;\n\tleft: 2px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-e div#ligeo-balloonWrapper\n{\n\tmargin-top: 0px;\n\tmargin-left: -25px;\n\ttop: 2px;\n\tleft: -2px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-sw div#ligeo-balloonWrapper\n{\n\tmargin-top: -30px;\n\tmargin-left: 5px;\n\ttop: -1px;\n\tleft: -1px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-s div#ligeo-balloonWrapper\n{\n\tmargin-top: -30px;\n\tmargin-left: -10px;\n\ttop: 2px;\n}\n\ndiv#ligeo-balloon.ligeo-balloonDock-se div#ligeo-balloonWrapper\n{\n\tmargin-top: -30px;\n\tmargin-left: 0px;\n\ttop: -1px;\n}\n\n#ligeo-balloon div#ligeo-imageCache,\n#ligeo-balloon div#ligeo-imageCache img { display: none; }\n\n#ligeo-mapCopyright\n{\n\tfont-size: 10px;\n\tfont-family: Arial, Helvetica, Verdana, sans-serif;\n}\n\n.ligeo-printable-map { display: none; }\n\n/* Infonow Copyright */\n.INOW_CopyrightForeground\n{\n\tcolor: black;\n\tright: 2px;\n\tz-index: 31;\n}\n\n.INOW_Copyright\n{\n\tdisplay: block;\n\tfont-size: 10px;\n\tpadding-top: 2px;\n\tpadding-bottom: 1px;\n\tposition: relative;\n}\n\n/* IMPORTANT!!! fixes a bug in the VE css file that sets part of the nav bar to a fixed width, this width is too small for languages other than english */\n#MSVE_navAction_styleGroup div,\n.MSVE_Dashboard_V6 .MSVE_MapStyle { width: auto !important; }\n\n#MSVE_MapLegend { padding-right: 0px !important; }\n#MSVE_TrafficLegend { width: auto !important; }\n#MSVE_TrafficLegend #MSVE_TL_Key { clear: none !important; }\n#MSVE_TrafficLegend #MSVE_TL_Slow\n{\n\tmargin-right: 5px;\n\tfloat: none !important;\n}\n#MSVE_TrafficLegend #MSVE_TL_Fast\n{\n\tmargin-left: 5px;\n\tfloat: none !important;\n}\n\n#MSVE_obliqueNotification { visibility: hidden; }\n\n.MSVE_Dashboard_V6 #Compass:hover,\n.MSVE_Dashboard_V6 #Compass.ms_pseudoHover\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass_o.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 #Compass\n{\n\t_background-image:none;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_compass.png\", sizingMethod=\"crop\");\n\t_height: 50px;\n\t_width: 50px;\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_plus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_in_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_ZoomBar_minus_disabled\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_zoom_out_d.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6 .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_left.png\", sizingMethod=\"crop\");\n}\n\n.MSVE_Dashboard_V6.collapsed .MSVE_navAction_toggleGlyph\n{\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_double_arrow_right.png\", sizingMethod=\"crop\");\n}\n\n#MSVE_navAction_ccw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_ccw.png\", sizingMethod=\"crop\");\n}\n#MSVE_navAction_cw {\n\t_background-image:none !important;\n\t_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"__image__server__URL__/ve_rotate_cw.png\", sizingMethod=\"crop\");\n}\n\n#ligeo-balloon iframe\n{\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 13px;\n\tz-index: -1;\n\tfilter: mask();\n\twidth:251px;\n\theight:198px;\n}\n";
LigeoAPI.renderCSSStyles=function(){
var _666=LigeoAPI.DEFAULT_CSStemplateString;
var _667=LigeoBalloon.getHtmlStyle();
if(_667=="CUSTOM1"){
_666=LigeoAPI.CUSTOM1_CSStemplateString;
}else{
if(_667=="CUSTOM2"){
_666=LigeoAPI.CUSTOM2_CSStemplateString;
}else{
if(_667=="CUSTOM_rev2"&&LigeoConfigurationAPI.getLigeoBalloonStyleRev2()){
_666=LigeoAPI.CUSTOM_rev2_CSStemplateString;
}
}
}
_666=_666.replace(/__image__server__URL__/g,LigeoEnvironment.getImageServer()+"mapimages");
dojo.html.insertCssText(_666);
};
LigeoAPI.print=function(_668){
window.print();
};
LigeoAPI.freezeMap=function(_669){
for(var _66a in LigeoAPI.myLigeoMaps){
LigeoAPI.myLigeoMaps[_66a].setFrozen(_669);
}
};
LigeoAPI.skipGridSearch=function(_66b){
LigeoAPI.mySkipGridSearch=_66b;
};
LigeoAPI.fixNavMapStyles=function(){
LigeoAPI.getDefaultMap().fixNavMapStyles("fromAPI");
};
LigeoAPI.setZoomLevelStatus=function(_66c){
var map=LigeoAPI.getDefaultMap();
if(map!=null){
map.setZoomLevelStatus(_66c);
}
};
LigeoAPI.eventHandlers=new Array();
LigeoAPI.eventAttach=function(name,fun){
if(!name){
alert("Error calling LigeoAPI.eventAttach with invalid name");
return;
}
if(!fun){
alert("Error calling LigeoAPI.eventAttach with invalid function");
return;
}
eventObject=function(name,_671){
this.name=name;
this.fun=_671;
};
LigeoAPI.eventHandlers[LigeoAPI.eventHandlers.length]=new eventObject(name,fun);
};
LigeoAPI.clearEventHandlers=function(_672){
var _673=false;
for(var _674=0;_674<LigeoAPI.eventHandlers.length;_674++){
if(!LigeoAPI.eventHandlers[_674]||!LigeoAPI.eventHandlers[_674].fun||(LigeoAPI.eventHandlers[_674].name==_672)){
LigeoAPI.eventHandlers[_674]=null;
}else{
_673=true;
}
}
var _675=new Array();
if(_673){
for(var _674=0;_674<LigeoAPI.eventHandlers.length;_674++){
if(LigeoAPI.eventHandlers[_674]){
_675[_675.length]=LigeoAPI.eventHandlers[_674];
}
}
}
LigeoAPI.eventHandlers=_675;
};
LigeoAPI.executeEventHandlers=function(_676,_677){
var _678=false;
if(LigeoVarUtils.isNotNull(_677)&&_677==true){
_678=true;
}
for(var i=0;i<LigeoAPI.eventHandlers.length;i++){
if(LigeoVarUtils.isNullOrEmpty(LigeoAPI.eventHandlers[i])){
continue;
}else{
if(LigeoVarUtils.isNullOrEmpty(LigeoAPI.eventHandlers[i].fun)){
LigeoLogger.debug("LigeoAPI.executeEventHandlers NullOrEmpty function on event "+i);
continue;
}else{
if(LigeoAPI.eventHandlers[i].name==_676){
try{
LigeoAPI.eventHandlers[i].fun();
}
catch(error){
if(_678==false){
LigeoLogger.sendClientErrorToServerLog("error running eventHandlers["+i+"] "+LigeoAPI.eventHandlers[i].fun,null,null,error,document);
_678=true;
}
}
}
}
}
}
LigeoAPI.clearEventHandlers(_676);
};
LigeoAPI.eventPrint=function(name){
for(var i=0;i<LigeoAPI.eventHandlers.length;i++){
if(LigeoVarUtils.isNotNullOrEmpty(name)){
if(LigeoAPI.eventHandlers[i]&&(LigeoAPI.eventHandlers[i].name==name)){
LigeoLogger.debug("LigeoAPI.eventPrint1 name="+LigeoAPI.eventHandlers[i].name+" function="+LigeoAPI.eventHandlers[i].fun);
}
continue;
}
if(LigeoAPI.eventHandlers[i]){
LigeoLogger.debug("LigeoAPI.eventPrint2 name="+LigeoAPI.eventHandlers[i].name+" function="+LigeoAPI.eventHandlers[i].fun);
}
}
};
LigeoAPI.eventRemove=function(name,fun){
for(var i=0;i<LigeoAPI.eventHandlers.length;i++){
if(LigeoVarUtils.isNotNullOrEmpty(fun)){
if(LigeoAPI.eventHandlers[i]&&(LigeoAPI.eventHandlers[i].name==name)&&(LigeoAPI.eventHandlers[i].fun==fun)){
LigeoAPI.eventHandlers[i]=null;
}
continue;
}
if(LigeoAPI.eventHandlers[i]&&(LigeoAPI.eventHandlers[i].name==name)){
LigeoAPI.eventHandlers[i]=null;
}
}
};
LigeoAPI.eventGet=function(name){
var _680=new Array();
for(var i=0;i<LigeoAPI.eventHandlers.length;i++){
if(LigeoAPI.eventHandlers[i]&&(LigeoAPI.eventHandlers[i].name==name)){
_680[_680.length]=LigeoAPI.eventHandlers[i];
}
}
return _680;
};
dojo.addOnLoad(LigeoAPI.initializeUponFullPageRefresh);
dojo.addOnLoad(LigeoAPI.renderCSSStyles);
dojo.kwCompoundRequire({common:["com.infonow.ligeo.LigeoAPI","com.infonow.ligeo.LigeoFeaturesAPI","com.infonow.ligeo.LigeoLocation"]});
dojo.provide("com.infonow.ligeo.*");

