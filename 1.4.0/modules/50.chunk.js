webpackJsonp([50],{1720:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){function n(n){var a=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(t){var s=t.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),e=n(t);e.snippet&&(a.snippets.compiled[s]=e.snippet),e.example&&(a.snippets.raw[s]=e.example)})}return n}();a.BaseDocumentationSection=s},2504:function(n,a,t){"use strict";var s=this&&this.__decorate||function(n,a,t,s){var e,p=arguments.length,o=p<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,t,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(a,t,o):e(a,t))||o);return p>3&&o&&Object.defineProperty(a,t,o),o},e=this&&this.__metadata||function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)};Object.defineProperty(a,"__esModule",{value:!0});var p=t(0),o=t(24),c=t(409),r=t(174),u=t(410),l=t(2505),i=t(412),k=t(411),m=t(2510),d=t(102),f=[l.ComponentsProgressBarNg1Component,m.ComponentsProgressBarComponent],b=[{path:"**",component:u.DocumentationCategoryComponent,data:{category:r.ResolverService.resolveCategoryData(r.DocumentationPage.Components,"Progress")}}],g=function(){function n(n,a){a.registerResolver(n)}return n}();g=s([p.NgModule({imports:[i.WrappersModule,k.TabsModule,d.ProgressBarModule,c.DocumentationComponentsModule,o.RouterModule.forChild(b)],exports:f,declarations:f,entryComponents:f}),e("design:paramtypes",[p.ComponentFactoryResolver,r.ResolverService])],g),a.ComponentsProgressModule=g},2505:function(n,a,t){"use strict";var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var t in a)a.hasOwnProperty(t)&&(n[t]=a[t])};return function(a,t){function s(){this.constructor=a}n(a,t),a.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),e=this&&this.__decorate||function(n,a,t,s){var e,p=arguments.length,o=p<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,t,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(a,t,o):e(a,t))||o);return p>3&&o&&Object.defineProperty(a,t,o),o},p=this&&this.__metadata||function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)};Object.defineProperty(a,"__esModule",{value:!0});var o=t(0),c=t(1720),r=t(408),u=function(n){function a(){var a=n.call(this,t(2506))||this;return a.codepen={html:a.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"ProgressBarDemoCtrl as vm"},js:[a.snippets.raw.controllerJs]},a}return s(a,n),a}(c.BaseDocumentationSection);u=e([o.Component({selector:"uxd-progress-bar-ng1",template:t(2509),changeDetection:o.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ComponentsProgressBarNg1Component"),p("design:paramtypes",[])],u),a.ComponentsProgressBarNg1Component=u},2506:function(n,a,t){function s(n){return t(e(n))}function e(n){var a=p[n];if(!(a+1))throw new Error("Cannot find module '"+n+"'.");return a}var p={"./controller.js":2507,"./layout.html":2508};s.keys=function(){return Object.keys(p)},s.resolve=e,n.exports=s,s.id=2506},2507:function(n,a){n.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">\'ProgressBarDemoCtrl\'</span><span class="token punctuation">,</span> ProgressBarDemoCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ProgressBarDemoCtrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>percentComplete <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>random <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        vm<span class="token punctuation">.</span>percentComplete <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:"angular.module('app').controller('ProgressBarDemoCtrl', ProgressBarDemoCtrl);\n\nfunction ProgressBarDemoCtrl() {\n    var vm = this;\n\n    vm.percentComplete = 15;\n\n    vm.random = function () {\n        vm.percentComplete = Math.floor((Math.random() * 100) + 1);\n    };\n}"}},2508:function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progressbar</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.percentComplete<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>accent<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">ng-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.percentComplete+<span class="token punctuation">\'</span>%<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progressbar</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.random()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<progressbar value="vm.percentComplete" type="accent" max="100">\n    <span ng-bind="vm.percentComplete+\'%\'"></span>\n</progressbar>\n<button type="button" class="btn btn-primary" ng-click="vm.random()">Random</button>'}},2509:function(n,a){n.exports='<uxd-progress-bar-wrapper></uxd-progress-bar-wrapper>\n\n<hr>\n\n<p>Create a <code>progressbar</code> element and set the value attribute to the value property. Set <code>type="accent"</code>\n  and the max attribute to the maximum allowed value. Inside the <code>progressbar</code> element you can specify a <code>span</code>\n  which can be used to display the current value.</p>\n\n<tabset>\n  <tab heading="HTML">\n    <uxd-snippet [content]="snippets.compiled.layoutHtml" language="html"></uxd-snippet>\n  </tab>\n  <tab heading="JavaScript">\n    <uxd-snippet [content]="snippets.compiled.controllerJs" language="javascript"></uxd-snippet>\n  </tab>\n</tabset>'},2510:function(n,a,t){"use strict";var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var t in a)a.hasOwnProperty(t)&&(n[t]=a[t])};return function(a,t){function s(){this.constructor=a}n(a,t),a.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),e=this&&this.__decorate||function(n,a,t,s){var e,p=arguments.length,o=p<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,t,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(a,t,o):e(a,t))||o);return p>3&&o&&Object.defineProperty(a,t,o),o},p=this&&this.__metadata||function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)};Object.defineProperty(a,"__esModule",{value:!0});var o=t(0),c=t(1720),r=t(408),u=function(n){function a(){var a=n.call(this,t(2511))||this;return a.value=15,a.plunk={files:{"app.component.html":a.snippets.raw.appHtml,"app.component.ts":a.snippets.raw.appTs},modules:[{imports:["ProgressBarModule"],library:"ux-aspects"}]},a}return s(a,n),a.prototype.randomize=function(){this.value=Math.floor(100*Math.random()+1)},a}(c.BaseDocumentationSection);u=e([o.Component({selector:"uxd-progress-bar",template:t(2514)}),r.DocumentationSectionComponent("ComponentsProgressBarComponent"),p("design:paramtypes",[])],u),a.ComponentsProgressBarComponent=u},2511:function(n,a,t){function s(n){return t(e(n))}function e(n){var a=p[n];if(!(a+1))throw new Error("Cannot find module '"+n+"'.");return a}var p={"./app.html":2512,"./app.ts":2513};s.keys=function(){return Object.keys(p)},s.resolve=e,n.exports=s,s.id=2511},2512:function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-progress-bar</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-b-md<span class="token punctuation">"</span></span> <span class="token attr-name">[value]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ value }}%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-progress-bar</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>randomize()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<ux-progress-bar class="m-b-md" [value]="value" max="100">\n    <span>{{ value }}%</span>\n</ux-progress-bar>\n\n<button type="button" class="btn btn-primary" (click)="randomize()">Random</button>'}},2513:function(n,a){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">\'./src/app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    value<span class="token punctuation">:</span> number <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    <span class="token function">randomize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './src/app.component.html'\n})\nexport class AppComponent {\n\n    value: number = 15;\n\n    randomize() {\n        this.value = Math.floor((Math.random() * 100) + 1);\n    }\n}\n"}},2514:function(n,a){n.exports='<ux-progress-bar class="m-b-md" [value]="value" max="100">\n    <span>{{ value }}%</span>\n</ux-progress-bar>\n\n<button type="button" class="btn btn-primary" (click)="randomize()">Random</button>\n\n<hr>\n\n<p>\n    A progress bar can be created by using the <code>ux-progress-bar</code> component. Custom content can be added to the\n    bar by adding HTML inside the <code>ux-progress-bar</code> tag. The following attributes can be used to configure the appearance and behavior of the progress bar:\n</p>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>@Input</b> value</td>\n            <td><b>number</b></td>\n            <td>The value the bar should represent. This will be compared to the <code>max</code> value to determine the width of the bar.</td>\n        </tr>\n        \n        <tr>\n            <td><b>@Input</b> max</td>\n            <td><b>number</b></td>\n            <td>The upper limit of the bar. The default value is <code>100</code>.</td>\n        </tr>\n        \n        <tr>\n            <td><b>@Input</b> trackColor</td>\n            <td><b>string</b></td>\n            <td>The color of the track. The default value is <code>grey7</code>.</td>\n        </tr>\n        \n        <tr>\n            <td><b>@Input</b> barColor</td>\n            <td><b>string</b></td>\n            <td>The color of the bar. The default value is <code>accent</code>.</td>\n        </tr>\n\n    </tbody>\n</table>\n\n\n<p>The following code can be used to create the example above:</p>\n\n<tabset>\n  <tab heading="HTML">\n    <uxd-snippet [content]="snippets.compiled.appHtml" language="html"></uxd-snippet>\n  </tab>\n  <tab heading="JavaScript">\n    <uxd-snippet [content]="snippets.compiled.appTs" language="javascript"></uxd-snippet>\n  </tab>\n</tabset>'}});