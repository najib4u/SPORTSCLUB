/*! VersionVI: 01F250083h x */
var _bOpr=window.bOpr!==undefined&&window.bOpr;$().ready(function(){var n=undefined,u,o,s,t,f;if(_bOpr||document.documentMode!==undefined&&document.compatMode!="BackCompat"){$("html,body").css("height","auto");u=$("body").height();$("html,body").css("height","100%");o=null;s=!1;function h(){var t=document.body,n=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)}t=0&&bIEAvec11&&!bIE;function c(n,i){t||i&&i!=document.body||$("body").css("overflow-y",_bOpr||$(document).height()>document.documentElement.offsetHeight?"scroll":"hidden")}function i(n,i){var f,o,r;if(i||(i=document.body),$(window).trigger("trigger.wb.ancrage.ie.debut"),!t){_bOpr&&$("html,body").css("height","100%");f=i==document.body?u>document.documentElement.offsetHeight:!1;o=$(i).find(".h100,.hauto").filter(function(){return $(this).css("display")!="none"});o.each(function(){var n=$(this),t;f?n.css("position",n.attr("data-position")):(n.parent().css("position","relative"),n.css("position","absolute"));t=this.tagName.toLowerCase();(t=="img"||t=="svg")&&e(n)?n.css("height",1):n.css("height","auto")});o.each(function(){var n=$(this),t;(f||n.parent().css("position",""),n.css("position",n.attr("data-position")),n.hasClass("hauto")||f)||(t=n.parent().innerHeight(),n.outerHeight()>t)||n.css({height:t})});o.each(function(){s($(this))});function s(n){var t=n.parent().parent().innerHeight();(t=Math.max(t,n.children().first().outerHeight()),n.outerHeight()>=t)||(n.parent().hasClass("WDOC")&&(t-=2),n.css({height:t}))}_bOpr&&($("html,body").css("height",h()+"px"),$(".hauto,.h100").each(function(){s($(this))}));i==document.body&&($("body").css("overflow-y","auto"),window.clWDUtil&&clWDUtil.__OnScrollResize(event,!1))}
//!flex
r=$(".wbAndrageIEChargement1erAffichage");f||!r.length||r.data("wbPremierCalculFait")===!0?(r.length&&r.remove(),$(window).trigger("trigger.wb.ancrage.ie.1erAffichageApresAncrage")):r.data("wbPremierCalculFait",!0);$(window).trigger("trigger.wb.ancrage.ie.fin")}function r(n,t){return n.length==1&&(n[0].currentStyle&&n[0].currentStyle.height=="100%"||(n.attr("style")+"").indexOf("height: 100%")>=0||_bOpr&&(n.attr("style")+"").indexOf("height:100%")>=0||_bOpr&&(n.attr("style")+"").indexOf("height:100.00%")>=0||t!==!1&&n[0].tagName.toLowerCase()=="tr"&&r(n.closest("table")))}function e(n){return n.length==1&&(n[0].currentStyle&&n[0].currentStyle.width=="100%"||(n.attr("style")+"").indexOf("width: 100%")>=0||_bOpr&&(n.attr("style")+"").indexOf("width:100%")>=0||_bOpr&&(n.attr("style")+"").indexOf("width:100.00%")>=0||n[0].tagName.toLowerCase()=="tr"&&e(n.closest("table")))}$("tr>td>*").each(function(){var n=$(this);(n.attr("id")=="page"||r(n)&&r(n.parent().parent()))&&n.css("position")!="absolute"&&n.css("position")!="fixed"&&(n.attr("id")||"").indexOf("ctz")!=0?(n.addClass("h100"),n.css("position")=="relative"?n.attr("data-position","relative"):n.attr("data-position","")):n.addClass("h100non")});$("table[id^=ctz]").addClass("h100non");$(".h100non .h100").each(function(){$(this).removeClass("h100");$(this).addClass("hauto")});$("table[id^=ctz] .hauto").removeClass("hauto");$(window).on("resize",function(t,i){n(t,!0,i)});$(window).on("trigger.wb.ancrage.ie.declenche trigger.wb.postUpdateLayoutSuperposableEpingle.ancrage",function(t,i){n(t,-1,i)});$(".WDVC,.WDVG,.WDVD").add($(".WDOT").parent().children()).click(function(t){n(t,!1)});clWDUtil.AttacheOnScrollResize(function(t,i){i||n(t,!0,document.body)});n=function(n,t,r){if(r||(r=document.body),!r.gbH100_set)if(r.gbH100==null?c(n,r):clearTimeout(r.gbH100),t==!0)r.gbH100=setTimeout(function(){try{r.gbH100_set=!0;i(n,r);$(window).trigger("resize",r)}catch(t){}finally{r.gbH100_set=!1;r.gbH100=null}},50);else if(t==-1)try{r.gbH100_set=!0;i(n,r)}catch(u){}finally{r.gbH100_set=!1}else setTimeout(function(){try{r.gbH100_set=!0;i(n,r)}catch(t){}finally{r.gbH100_set=!1;r.gbH100=null}},10)};setTimeout(function(){if(t){window.tabChamps=$(".h100,.hauto").filter(function(){return $(this).css("display")!="none"});window.tabChamps.each(function(){this.rect=this.getBoundingClientRect();var n=$(this).closest("tr").first();n[0].rect=n[0].getBoundingClientRect()});window.tabChamps.each(function(){var n={minHeight:this.rect.height,height:"100%",flexGrow:1};$(this).css(n)});$(".h100>table,table.h100").each(function(){var n=$(this.querySelector("tr")),t=n.next();t.length==0?n.css("height","100%"):(n.attr("style")||"").indexOf("height")==-1&&(t.attr("style")||"").indexOf("height")==-1&&n.next().css("height","100%")});window.tabChamps.each(function(){var n=$(this).closest("tr").first();r(n,!1)||($(this.querySelectorAll(".h100")).removeClass("h100").addClass("hauto"),n.css({minHeight:n[0].rect.height,maxHeight:n[0].rect.height}))});var f=$("<style>table{    display: flex;    flex-direction: row;    height:100%;width:100%;}tbody{    display: flex;    flex-direction: column;    height:100%;width:100%;}tr{    display: flex;    flex-direction: row;    width:100%;  }td {        display: flex;    flex-direction: column;    height:100%;  }.hauto table,table .hauto{    display: table;       }.hauto tbody{    display: table;       }.hauto tr{    display: table-row;      }.hauto td {        display: table-cell;}<\/style>");$("head").append(f);$("head #wbStyleAncrageIE11").remove()}bIEAvec11&&$("#page,[id|=page]").first().css("height","100%");i(event);bIEAvec11&&$("head #wbStyleAncrageIE11").remove();u>document.documentElement.offsetHeight||$(window).trigger("trigger.wb.ancrage.ie.declenche");n&&window.clWDUtil!==undefined&&(clWDUtil.m_oNotificationsAjoutHTML&&clWDUtil.m_oNotificationsAjoutHTML.AddNotification(function(){var t=$(document.body).height();this.m_nHauteurPrecedenteAjoutHTML!=t&&n();this.m_nHauteurPrecedenteAjoutHTML=t}),clWDUtil.m_oNotificationsFinAJAX&&clWDUtil.m_oNotificationsFinAJAX.AddNotification(n))},10)}else f=$(".wbAndrageIEChargement1erAffichage"),f.length&&f.remove(),$(window).trigger("trigger.wb.ancrage.ie.1erAffichageApresAncrage",!1);$(function(){function i(n){var t=n.parents("table").first(),i;t.css("height","100%");i=t.parents("table").first();t.css("height",i.height())}function t(n,t,r){var s=$(".WDOT"),e,f,u,h;if(s.length===0||(e=$(s.get().reverse()).filter(function(){return clWDUtil.bEstDisplay(this,document)}),e.each(function(){var i,n,t,r;this.bBindResize===undefined&&(i=$(this),n=this.jqFreresLibelle=i.parent().children().slice(0,-1),this.bVertical=!1,n.length==0&&(this.bVertical=!0,n=i.parent().parent().children().slice(0,-1).children("td")),this.jqChampOnglet=i.closest("table"),this.jqChampOnglet.find(".WDVC,.WDVG,.WDVD").add(n).click(function(){$(window).trigger("resize")}),t=(this.jqChampOnglet.attr("style")||"").replace(/ /g,""),this.bCalculRequis=!0,this.bBindResize=this.bCalculRequis&&(this.bVertical?t.indexOf("height:100%")>-1||t.indexOf("HEIGHT:100%")>-1||this.jqChampOnglet.attr("height")=="100%":t.indexOf("width:100%")>-1||t.indexOf("WIDTH:100%")>-1||this.jqChampOnglet.attr("width")=="100%"),r=clWDUtil.bHTML5&&!this.bVertical&&!bIEAvec11&&!bIE,r&&n.parent().addClass("wbVoletFlex").next().addClass("wbVoletFlex").css("height","100%").parent().css({display:"flex",flexDirection:"column",width:"100%",height:"100%"}).parent().css({display:"flex",flexDirection:"column",width:"100%",height:"100%"}))}),f=e.filter(function(){return this.bCalculRequis&&(!this.b1erCalculDejaiFait||this.bBindResize)}),f.length===0))return!1;n&&$(document.body).addClass("wbOverflowHiddenX");u=f.filter(function(){return!this.bVertical});h=f.not(u);n||h.each(function(){var n=$(this);i(n);this.b1erCalculDejaiFait=!0});var c=!1&&!t,l=window.requestAnimationFrame&&!t,o=l?requestAnimationFrame:function(n){return n(),undefined};o(function(){if(n){u.each(function(){var n=$(this);n.children().first().css("width","auto");n.css("width","100%");this.jqFreresLibelle=this.jqFreresLibelle||n.parent().children().slice(0,-1);this.jqFreresLibelleVisible=this.jqFreresLibelle.filter(function(){return this.style.display!="none"}).addClass("t-0");c&&this.jqFreresLibelleVisible.css({opacity:0});this.jqFreresLibelleVisible.each(function(){var t=$(this);this.jqLibelle=t.find(".WDVC").children().first();n[0].bMode3Images=this.jqLibelle.length;n[0].bMode3Images||(this.jqLibelle=t.children().first());t.hasClass("wbLargeurAdapteeVoletLibelle")&&this.jqLibelle.css("width","auto").css("white-space","nowrap")})});r&&r();return}o(function(){u.each(function(){var n=$(this);n[0].nBordure=0;this.jqChampOnglet=this.jqChampOnglet||n.closest("table");this.nLargeurChampOnglet=Math.max(this.jqChampOnglet.width(),this.jqChampOnglet.find(".WDOC").children(":visible").width()+2);this.nLargeurTotaleLibelle=0;this.jqFreresLibelleVisible.each(function(){var t=$(this);this.nLargeurInit=this.jqLibelle.width();this.nLargeurInitTD=t.children().first().width();n[0].nBordure+=t.outerWidth()-t.width();this.nLargeurAdaptee=this.nLargeurInit;t.hasClass("wbLargeurAdapteeVoletLibelle")&&(this.nLargeurAdaptee=Math.max(this.nLargeurAdaptee,this.jqLibelle.width()));n[0].nLargeurTotaleLibelle+=this.nLargeurInitTD-this.nLargeurInit+this.nLargeurAdaptee;n[0].nLargeurChampOnglet=Math.max(n[0].nLargeurChampOnglet,n[0].nLargeurTotaleLibelle)})});o(function(){u.each(function(){var t=$(this),i,u,e,f;this.jqFreresLibelleVisible.each(function(){var n=$(this);n.hasClass("wbLargeurAdapteeVoletLibelle")&&this.jqLibelle.css("width",this.nLargeurInit).css("white-space","normal");this.jqLibelle.data("width-adaptee",this.nLargeurAdaptee)});i=this.nLargeurChampOnglet-t[0].nLargeurTotaleLibelle-t[0].nBordure-1;u=-1;i<0&&(u=parseInt((this.nLargeurChampOnglet-1)/this.jqFreresLibelleVisible.length)-(t[0].bMode3Images?32:0),i=0);this.jqFreresLibelleVisible.each(function(){var t=$(this),n;t;n=u>0?u:this.jqLibelle.data("width-adaptee");this.jqLibelle.css("width",n)});this.jqFreresLibelleVisible.css({opacity:1});n||this.jqFreresLibelleVisible.removeClass("t-0");t.css("width",i).children().css("width",i);this.jqChampOnglet.attr("id")===undefined&&(e=t.parent(),f=this.jqChampOnglet.parent().height()-this.jqChampOnglet.height(),f>2&&e.css("height",f));this.b1erCalculDejaiFait=!0;r&&r(this.jqChampOnglet)});r&&r();$(document.body).removeClass("wbOverflowHiddenX")})})})}function n(n,i){var u=i||n&&n.type&&n.isTrigger?function(n){return n(),undefined}:setTimeout,r=function(n){window.MajLargeurTrouVoletEnCours2ndePhaseTimer=u(function(){t(!1,i,function(n){n?$(window).trigger("trigger.wb.updateLayoutSuperposableEpingle",[n,!0]):window.MajLargeurTrouVoletEnCours=undefined})},n||100)};if(window.MajLargeurTrouVoletEnCours===!0){window.MajLargeurTrouVoletEnCours2ndePhaseTimer&&(clearTimeout(window.MajLargeurTrouVoletEnCours2ndePhaseTimer),r(150));return}window.MajLargeurTrouVoletEnCours=!0;i=i||n&&n.type=="wbOngletVisible";t(!0,i,r)}window.clWDUtil!==undefined&&(clWDUtil.m_oNotificationsAjoutHTML&&clWDUtil.m_oNotificationsAjoutHTML.AddNotification(function(){n(undefined,!0)}),clWDUtil.m_oNotificationsFinAJAX&&clWDUtil.m_oNotificationsFinAJAX.AddNotification(function(){n(undefined,!0)}));$(window).bind("wbOngletVisible resize.wb.onglet.onRelanceMajLarjeurTrouVolet",function(t){t&&t.type=="resize"&&t.isTrigger||n(t,t&&t.type=="wbOngletVisible")});n()})})