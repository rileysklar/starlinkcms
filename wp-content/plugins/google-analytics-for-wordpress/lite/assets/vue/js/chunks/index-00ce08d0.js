import{V as a,a as _,s as c,_ as s}from"./vendor-a2540788.js";const g=(t,e,n,o)=>new Promise(r=>{let l=new FormData;l.append("action","monsterinsights_vue_get_report_data"),l.append("nonce",a.prototype.$mi.nonce),l.append("report",e),l.append("start",n),l.append("end",o),_.post(a.prototype.$mi.ajax,l).then(i=>{r(i.data)}).catch(function(i){t.dispatch("$_app/block",!1,{root:!0});const d=a.prototype.$getUrl("admin-notices","error-verifying-license","https://www.monsterinsights.com/my-account/support");if(i.response){const u=i.response;return a.prototype.$mi_error_toast({title:c(s("Can't load report data. Error: %1$s, %2$s. Please try again in a few minutes. If the issue persists, please %3$scontact our support%4$s team.","google-analytics-for-wordpress"),u.status,u.statusText,'<a target="_blank" href="'+d+'">',"</a>")})}a.prototype.$swal.hideLoading(),a.prototype.$mi_error_toast({allowOutsideClick:!0,allowEscapeKey:!0,title:s("Error loading report data","google-analytics-for-wordpress"),html:i.message})})}),w=t=>{if(typeof t<"u"){const e=parseInt(t.toString().replace(".",""),10);return e.toString().length===1?parseInt(e===1?e+"00":e+"0"):e}},y=t=>{if(typeof t<"u"){let e={};return Object.keys(t).forEach(function(n){let o=n.toString().split("-").join("_");e[o]=t[n]}),e}},h={fetchReportData:g,getFormattedScore:w,keysReplaceHyphensWithUnderscores:y},E=(t,e)=>new Promise(n=>{if(!a.prototype.$mi.authed)return n(!1),t.commit("ENABLE_BLUR"),t.commit("ENABLE_NOAUTH"),!1;if(t.state[e]&&t.state[e].reportcurrentrange&&t.state[e].reportcurrentrange.startDate===t.state.date.start&&t.state[e].reportcurrentrange.endDate===t.state.date.end)return n(!1),t.commit("DISABLE_BLUR"),!1;a.prototype.$mi_loading_toast(),t.commit("ENABLE_BLUR"),t.dispatch("$_queue/add",()=>h.fetchReportData(t,e,t.state.date.start,t.state.date.end).then(function(o){if(t.commit("SET_IS_LOADED"),o.data.message==="license_level"){f(t),n(!1);return}if(o.success)f(t),t.commit("DISABLE_BLUR"),t.commit("UPDATE_REPORT_DATA",{report:e,data:o.data}),n(!0);else{if(o.data.message==="invalid_grant"){f(t),n(!1),t.commit("ENABLE_REAUTH");return}if(o.data.footer&&o.data.footer==="install_addon"){let r=t.state.required_addon?t.state.required_addon:e;A(t,r).then(function(l){t.rootState.$_widget&&(t.commit("DISABLE_BLUR"),t.commit("$_widget/UPDATE_LOADED",!0,{root:!0}));let i=l?s("activate","google-analytics-for-wordpress"):s("install","google-analytics-for-wordpress");a.prototype.$mi_error_toast({title:!1,html:c(o.data.message,i),footer:'<a href="'+a.prototype.$mi.addons_url+'">'+s("Visit addons page","google-analytics-for-wordpress")+"</a>",report:e}),a.prototype.$swal({icon:"error",customClass:{container:"monsterinsights-swal"},title:s("Report Unavailable","google-analytics-for-wordpress"),html:c(o.data.message,i),allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!1,showCancelButton:!0,confirmButtonText:c(s("%s Addon","google-analytics-for-wordpress"),i.charAt(0).toUpperCase()+i.slice(1)),cancelButtonText:s("Dismiss","google-analytics-for-wordpress")}).then(function(d){d.value&&(l?m(t,t.rootState.$_addons.addons[r]):T(t,r))})})}else o.data.footer&&o.data.footer.indexOf("#/ecommerce")>0?(n(!1),a.prototype.$mi_error_toast({title:!1,html:o.data.message,report:e,showCancelButton:!0,cancelButtonText:s("Go Back To Reports","google-analytics-for-wordpress"),confirmButtonText:s("Enable Enhanced eCommerce","google-analytics-for-wordpress")}).then(function(r){r.value&&(window.location=o.data.footer)})):o.data.type&&o.data.type==="expired_license"?(n(!1),a.prototype.$mi_error_toast({type:"",customClass:{container:"monsterinsights-expired-license-alert-toast"},confirmButtonText:"",title:!1,html:o.data.message,footer:o.data.footer,report:e})):(n(!1),a.prototype.$mi_error_toast({title:!1,html:o.data.message,footer:o.data.footer,report:e,onClose:()=>{if(!o.data.type||o.data.type!=="INVALID_DATE_RANGE"||t.state.date==="last30days")return;const r=a.prototype.$mi_intervals().last30days;t.commit("UPDATE_INTERVAL","last30days"),t.commit("UPDATE_DATE",{start:r.start.format("YYYY-MM-DD"),end:r.end.format("YYYY-MM-DD")}),t.dispatch("getReportData",t.state.activeReport)}}))}}),{root:!0})});function A(t,e){return new Promise(function(n){t.dispatch("$_addons/getAddons","",{root:!0}).then(function(){t.rootState.$_addons.addons[e]&&t.rootState.$_addons.addons[e].installed?n(!0):n(!1)}).catch(function(){n(!1),p()})})}function T(t,e){a.prototype.$swal({icon:"info",customClass:{container:"monsterinsights-swal"},title:s("Installing Addon","google-analytics-for-wordpress"),html:s("Please wait","google-analytics-for-wordpress"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:function(){a.prototype.$swal.showLoading(),t.dispatch("$_addons/installAddon",t.rootState.$_addons.addons[e],{root:!0}).then(function(){m(t,t.rootState.$_addons.addons[e])}).catch(function(){p()})}})}function m(t,e){a.prototype.$swal({icon:"info",customClass:{container:"monsterinsights-swal"},title:s("Activating Addon","google-analytics-for-wordpress"),html:s("Please wait","google-analytics-for-wordpress"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:function(){a.prototype.$swal.showLoading()}}),t.dispatch("$_addons/activateAddon",e,{root:!0}).then(function(){a.prototype.$swal({icon:"info",customClass:{container:"monsterinsights-swal"},title:s("Addon Activated","google-analytics-for-wordpress"),html:s("Loading report data","google-analytics-for-wordpress"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:function(){a.prototype.$swal.showLoading(),setTimeout(function(){window.location.reload()},1e3)}})}).catch(function(n){p(n)})}function p(t){let e=s("Please activate manually","google-analytics-for-wordpress");t.response&&(e=c(s("Error: %1$s, %2$s","google-analytics-for-wordpress"),t.response.status,t.response.statusText)),a.prototype.$swal({icon:"error",customClass:{container:"monsterinsights-swal"},title:s("Error Activating Addon","google-analytics-for-wordpress"),html:e,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showCancelButton:!0,confirmButtonText:s("View Addons","google-analytics-for-wordpress"),cancelButtonText:s("Dismiss","google-analytics-for-wordpress")}).then(function(n){n.value&&(window.location=a.prototype.$mi.addons_url,a.prototype.$swal({icon:"info",customClass:{container:"monsterinsights-swal"},title:s("Redirecting","google-analytics-for-wordpress"),html:s("Please wait","google-analytics-for-wordpress"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:function(){a.prototype.$swal.showLoading()}}))})}function f(t){t.rootState.$_widget||typeof a.prototype.$swal=="function"&&a.prototype.$swal.close()}const $={getReportData:E},D=t=>t.yearinreview_data,v=t=>t.date,L=t=>t.activeReport,R=t=>t.isLoaded,B=t=>t.blur,U=t=>t.mobileTableExpanded,b=t=>t.overview,C=t=>t.publisher,O=t=>t.ecommerce,P=t=>t.ecommerce_coupons,S=t=>t.ecommerce_funnel,I=t=>t.queries,N=t=>t.dimensions,k=t=>t.forms,K=t=>t.realtime,q=t=>t.yearinreview,V=t=>t.sitespeed,Y=t=>t.sitespeedmobile,H=t=>t.noauth,M=t=>t.reauth,F=t=>t.media,G=t=>t.traffic_overview,X=t=>t.traffic_landing_pages,j=t=>t.traffic_technology,Q=t=>t.traffic_campaign,W=t=>t.traffic_source_medium,z=t=>t.traffic_social,J=t=>t.engagement_pages,Z={yearinreview_data:D,date:v,activeReport:L,isLoaded:R,blur:B,mobileTableExpanded:U,overview:b,publisher:C,ecommerce:O,ecommerce_coupons:P,ecommerce_funnel:S,queries:I,dimensions:N,forms:k,realtime:K,noauth:H,yearinreview:q,reauth:M,sitespeed:V,sitespeedmobile:Y,media:F,traffic_overview:G,traffic_landing_pages:X,traffic_technology:j,traffic_campaign:Q,traffic_source_medium:W,traffic_social:z,engagement_pages:J},x=(t,e)=>{e.report&&e.data&&t[e.report]&&a.set(t,e.report,e.data)},tt=(t,e)=>{e.start&&e.end&&(a.set(t.date,"start",e.start),a.set(t.date,"end",e.end))},et=(t,e)=>{a.set(t.date,"interval",e)},at=(t,e)=>{a.set(t.date,"text",e)},ot=(t,e)=>{t.activeReport=e},st=t=>{t.isLoaded=!0},nt=t=>{t.blur=!0},rt=t=>{t.blur=!1},it=t=>{t.mobileTableExpanded=!0},lt=t=>{t.mobileTableExpanded=!1},ct=t=>{t.noauth=!0},dt=t=>{t.reauth=!0},ft=(t,e)=>{t.required_addon=e},pt={UPDATE_REPORT_DATA:x,UPDATE_DATE:tt,UPDATE_ACTIVE_REPORT:ot,UPDATE_INTERVAL:et,UPDATE_DATE_TEXT:at,SET_IS_LOADED:st,ENABLE_BLUR:nt,DISABLE_BLUR:rt,EXPAND_TABLES:it,CONTRACT_TABLES:lt,ENABLE_NOAUTH:ct,ENABLE_REAUTH:dt,UPDATE_REQUIRED_ADDON:ft},ut={yearinreview_data:window.monsterinsights.yearinreview,date:{start:"",end:"",interval:"last30days",text:""},blur:!1,activeReport:"overview",mobileTableExpanded:!1,overview:{},publisher:{},ecommerce:{},ecommerce_coupons:{},ecommerce_funnel:{funnel_table:{none:[]},funnel_chart:[]},queries:{},dimensions:{},forms:{},realtime:{},yearinreview:{},sitespeed:{},sitespeedmobile:{},noauth:!1,reauth:!1,isLoaded:!1,media:{line_chart_report:{},video_details_rows:[]},traffic_overview:{},traffic_landing_pages:{},traffic_technology:{},traffic_campaign:{},traffic_source_medium:{},traffic_social:{sessions_chart:{}},engagement_pages:{},required_addon:null},_t={namespaced:!0,state:ut,actions:$,getters:Z,mutations:pt};export{_t as R,m as a,T as i};
