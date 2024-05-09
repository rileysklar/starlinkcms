import{y as u,o,c as l,a,D as c,I as _,J as f,m as z,E as h,t as d,q as v,k as A,d as C}from"./vue.esm-bundler.7598fd57.js";import{_ as p}from"./_plugin-vue_export-helper.c114f5e4.js";const b={emits:["startAnalyzing"],props:{header:String,description:String,isAnalyzing:Boolean,analyzeTime:{type:Number,default(){return 8}},placeholder:{type:String,default(){return""}},inputError:{type:Boolean,default(){return!1}}},data(){return{input:null,strings:{analyze:this.$t.__("Analyze",this.$td)}}},watch:{isAnalyzing(s){s||(this.input=null)}}},x={class:"analyze-main"},S=["innerHTML"],T=["innerHTML"],V={class:"analyze-input"},L={key:0,class:"analyze-progress"};function N(s,n,e,y,t,i){const m=u("base-input"),g=u("base-button");return o(),l("div",x,[a("div",{class:"analyze-header",innerHTML:e.header},null,8,S),a("div",{class:"analyze-description",innerHTML:e.description},null,8,T),a("div",V,[c(m,{modelValue:t.input,"onUpdate:modelValue":n[0]||(n[0]=r=>t.input=r),placeholder:e.placeholder,class:_({"aioseo-error":e.inputError}),onKeyup:n[1]||(n[1]=f(r=>s.$emit("startAnalyzing",t.input),["enter"]))},null,8,["modelValue","placeholder","class"]),c(g,{type:"green",onClick:n[2]||(n[2]=r=>s.$emit("startAnalyzing",t.input)),loading:e.isAnalyzing,disabled:!t.input},{default:z(()=>[h(d(t.strings.analyze),1)]),_:1},8,["loading","disabled"])]),v(s.$slots,"errors"),e.isAnalyzing?(o(),l("div",L,[a("div",{class:"analyze-progress-value",style:A({animationDuration:`${e.analyzeTime}s`})},null,4)])):C("",!0)])}const M=p(b,[["render",N]]);const k={props:{score:{type:Number,required:!0}},computed:{getColorClass(){return 33>=this.score?"red":66>=this.score?"orange":"green"}}};function B(s,n,e,y,t,i){return o(),l("div",{class:_(["aioseo-analyze-score",i.getColorClass])},[a("span",null,d(e.score)+"/100",1)],2)}const w=p(k,[["render",B]]);export{M as C,w as a};
