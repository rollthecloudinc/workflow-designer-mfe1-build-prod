(self.webpackChunkmfe1=self.webpackChunkmfe1||[]).push([[592],{4945:(C,d,t)=>{t.d(d,{of:()=>l});var o=t(6651),p=t(985);function l(...u){const g=(0,o.yG)(u);return(0,p.D)(u,g)}},9395:(C,d,t)=>{t.d(d,{j:()=>u});var o=t(4739),l=t(2836);const u=({handler:g})=>new o.ContentPlugin({id:"mfe1_download",title:"Mfe1 Download",selectionComponent:void 0,editorComponent:void 0,renderComponent:l.DownloadComponent,handler:g})},2836:(C,d,t)=>{t.r(d),t.d(d,{DownloadComponent:()=>g});var o=t(2207),l=t(4739);let g=/^(179|291)$/.test(t.j)?(()=>{class f{constructor(m){this.cpm=m,console.log("download component constructor")}ngOnInit(){}}return f.\u0275fac=function(m){return new(m||f)(o.\u0275\u0275directiveInject(l.ContentPluginManager))},f.\u0275cmp=o.\u0275\u0275defineComponent({type:f,selectors:[["mfe1-download"]],decls:4,vars:0,consts:[[1,"task"],["src","https://d8em0358gicmm.cloudfront.net/assets/download.png"]],template:function(m,r){1&m&&(o.\u0275\u0275elementStart(0,"div",0),o.\u0275\u0275element(1,"img",1),o.\u0275\u0275elementStart(2,"p"),o.\u0275\u0275text(3,"Download"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementEnd())},encapsulation:2}),f})():null},3903:(C,d,t)=>{t.d(d,{L:()=>f});var o=t(4739);if(/^(179|291)$/.test(t.j))var l=t(4945);var u=t(2207);let f=/^(179|291)$/.test(t.j)?(()=>{class c{constructor(){}handleFile(r){return(0,l.of)()}handlesType(r){return!1}implementsRendererOverride(){return!1}hasRendererOverride(r){return(0,l.of)(!1)}isDynamic(r){return!1}isData(r){return!1}getBindings(r,h,v){return(0,l.of)([])}fetchDynamicData(r,h){return(0,l.of)()}buildDynamicItems(r,h){return(0,l.of)([])}stateDefinition(r){return(0,l.of)({})}editorOptions(r){return(0,l.of)(new o.ContentPluginEditorOptions({fullscreen:!0}))}}return c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=u.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac}),c})():null},7336:(C,d,t)=>{t.r(d),t.d(d,{CONTENT_PLUGIN:()=>E,ContentBinding:()=>r,ContentInstance:()=>h,ContentModule:()=>c,ContentPlugin:()=>m,ContentPluginEditorOptions:()=>v,ContentPluginManager:()=>_});var o=t(2207),p=t(702),l=t(5758),u=t(5731),g=t(4945),f=t(4625);let c=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=o.\u0275\u0275defineInjector({imports:[[p.CommonModule]]}),s})();class m extends u.Plugin{constructor(n){super(n),this.fileTypes=[],n&&(this.name=this.id,this.handler=void 0!==n.handler?n.handler:void 0,this.selectionComponent=n.selectionComponent?n.selectionComponent:void 0,this.renderComponent=n.renderComponent?n.renderComponent:void 0,this.editorComponent=n.editorComponent?n.editorComponent:void 0)}}class r{constructor(n){n&&(this.type=n.type,this.id=n.id)}}class h{constructor(n){this.settings=[],n&&(this.pluginName=n.pluginName,n.settings&&(this.settings=n.settings.map(e=>new l.AttributeValue(e))))}}class v{constructor(n){this.fullscreen=!1,n&&(this.fullscreen=n.fullscreen)}}const E=new o.InjectionToken("ContentPlugin");let _=(()=>{class s extends u.BasePluginManager{constructor(e,i){super(e,i)}pluginDef(){return(0,g.of)(new u.PluginDef({name:"content"}))}}return s.\u0275fac=function(e){return new(e||s)(o.\u0275\u0275inject(u.PluginConfigurationManager),o.\u0275\u0275inject(f.ModuleLoaderService))},s.\u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1989:(C,d,t)=>{t.r(d),t.d(d,{BasePluginManager:()=>h,ConfigDiscovery:()=>r,Plugin:()=>E,PluginConfig:()=>v,PluginConfigModule:()=>s,PluginConfigurationManager:()=>m,PluginDef:()=>_,PluginModule:()=>c});var o=t(2207),p=t(4625),l=t(4945),u=t(5159),g=t(7969),f=t(1528);let c=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({imports:[[p.UtilsModule]]}),n})(),m=(()=>{class n{constructor(){this.configs=[]}addConfig(i){this.configs.push(i)}getConfigs(){return this.configs}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),r=(()=>{class n{constructor(i,a){this.pcm=i,this.moduleLoader=a}loadPlugins(i,a=[]){const P=this.pcm.getConfigs(),I=P.length,O=[];for(let M=0;M<I;M++){const y=P[M].modules.length;for(let D=0;D<y;D++)P[M].modules[D].plugins.has(i.name)&&(0===a.length||a.some(L=>P[M].modules[D].plugins.get(i.name).findIndex(T=>T===L)>-1))&&O.push(this.moduleLoader.loadModule(P[M].modules[D].module))}return 0===O.length?(0,l.of)(!0):(0,u.D)(O).pipe((0,g.U)(()=>!0))}}return n.\u0275fac=function(i){return new(i||n)(o.\u0275\u0275inject(m),o.\u0275\u0275inject(p.ModuleLoaderService))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class h{constructor(e,i){this.pcm=e,this.moduleLoader=i,this.pluginInstances=new Map,this.discoveryPipeline=[],this.discovery()}discovery(){this.discoveryPipeline.push(new r(this.pcm,this.moduleLoader))}addDiscovery(e){this.discoveryPipeline.push(e)}register(e){this.pluginInstances.set(e.id,e)}getPlugins(e){const i=e?e.filter(a=>!this.pluginInstances.has(a)):[];return e&&0===i.length?(0,l.of)(new Map(e.map(a=>[a,this.pluginInstances.get(a)]))):this.pluginDef().pipe((0,f.w)(a=>(0,u.D)(this.discoveryPipeline.map(P=>P.loadPlugins(a,i))).pipe((0,g.U)(()=>e?new Map(e.map(P=>[P,this.pluginInstances.get(P)])):this.pluginInstances))))}getPlugin(e){return this.pluginInstances.has(e)?(0,l.of)(this.pluginInstances.get(e)):this.pluginDef().pipe((0,f.w)(i=>(0,u.D)(this.discoveryPipeline.map(a=>a.loadPlugins(i,[e]))).pipe((0,g.U)(()=>this.pluginInstances.get(e)))))}}class v{constructor(e){this.modules=[],e&&e.modules&&(this.modules=e.modules.map(i=>new s(i)))}}class E{constructor(e){e&&(this.id=e.id,this.title=e.title)}}class _{constructor(e){e&&(this.name=e.name)}}class s{constructor(e){e&&(this.module=e.module,e.plugins&&(this.plugins=new Map([...e.plugins])))}}}}]);