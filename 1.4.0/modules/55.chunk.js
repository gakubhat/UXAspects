webpackJsonp([55],{1720:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function n(n){var a=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(s){var t=s.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),e=n(s);e.snippet&&(a.snippets.compiled[t]=e.snippet),e.example&&(a.snippets.raw[t]=e.example)})}return n}();a.BaseDocumentationSection=t},2149:function(n,a,s){"use strict";var t=this&&this.__decorate||function(n,a,s,t){var e,p=arguments.length,o=p<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,s,t);else for(var l=n.length-1;l>=0;l--)(e=n[l])&&(o=(p<3?e(o):p>3?e(a,s,o):e(a,s))||o);return p>3&&o&&Object.defineProperty(a,s,o),o},e=this&&this.__metadata||function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)};Object.defineProperty(a,"__esModule",{value:!0});var p=s(0),o=s(24),l=s(409),c=s(174),u=s(410),i=s(2150),r=s(411),d=s(412),k=[i.ComponentsFileUploadNg1Component],m=[{path:"**",component:u.DocumentationCategoryComponent,data:{category:c.ResolverService.resolveCategoryData(c.DocumentationPage.Components,"File Upload")}}],g=function(){function n(n,a){a.registerResolver(n)}return n}();g=t([p.NgModule({imports:[d.WrappersModule,r.TabsModule,l.DocumentationComponentsModule,o.RouterModule.forChild(m)],exports:k,declarations:k,entryComponents:k}),e("design:paramtypes",[p.ComponentFactoryResolver,c.ResolverService])],g),a.ComponentsFileUploadModule=g},2150:function(n,a,s){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])};return function(a,s){function t(){this.constructor=a}n(a,s),a.prototype=null===s?Object.create(s):(t.prototype=s.prototype,new t)}}(),e=this&&this.__decorate||function(n,a,s,t){var e,p=arguments.length,o=p<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,s,t);else for(var l=n.length-1;l>=0;l--)(e=n[l])&&(o=(p<3?e(o):p>3?e(a,s,o):e(a,s))||o);return p>3&&o&&Object.defineProperty(a,s,o),o},p=this&&this.__metadata||function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)};Object.defineProperty(a,"__esModule",{value:!0});var o=s(0),l=s(408),c=s(1720),u=function(n){function a(){var a=n.call(this,s(2151))||this;return a.codepen={html:a.snippets.raw.appHtml,js:[a.snippets.raw.appJs],css:[a.snippets.raw.appCss]},a}return t(a,n),a}(c.BaseDocumentationSection);u=e([o.Component({selector:"uxd-components-file-upload-ng1",template:s(2156)}),l.DocumentationSectionComponent("ComponentsFileUploadNg1Component"),p("design:paramtypes",[])],u),a.ComponentsFileUploadNg1Component=u},2151:function(n,a,s){function t(n){return s(e(n))}function e(n){var a=p[n];if(!(a+1))throw new Error("Cannot find module '"+n+"'.");return a}var p={"./app.css":2152,"./app.html":2153,"./app.js":2154,"./sample.snippet.js":2155};t.keys=function(){return Object.keys(p)},t.resolve=e,n.exports=t,t.id=2151},2152:function(n,a){n.exports={snippet:'<span class="token selector">.file-upload-dropzone</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed <span class="token function">rgba</span><span class="token punctuation">(</span>96, 121, 141, 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">min-height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #676a6c<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:".file-upload-dropzone {\n  border: 2px dashed rgba(96, 121, 141, 0.8);\n  background: white;\n  font-size: 18px;\n  font-weight: 300;\n  width: 100%;\n  padding-top: 60px;\n  text-align: center;\n  min-height: 150px;\n  color: #676a6c;\n  cursor: pointer;\n}"}},2153:function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ng-controller</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>FileUploadCtrl as vm<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container-fluid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-md-12 m-t-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file-upload-demo-codepen<span class="token punctuation">"</span></span> <span class="token attr-name">nv-file-drop</span> <span class="token attr-name">uploader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file-upload-dropzone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Click here or Drag and Drop to upload files\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file-upload-demo-codepen<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sr-only<span class="token punctuation">"</span></span> <span class="token attr-name">nv-file-select</span> <span class="token attr-name">uploader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress-static-text<span class="token punctuation">"</span></span> <span class="token attr-name">ng-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader.progress+<span class="token punctuation">\'</span>%<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progressbar</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader.progress<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progressbar</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">ng-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader.queue.length<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dropzone-queue clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">ng-repeat</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item in uploader.queue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item.remove()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facet-selected-name<span class="token punctuation">"</span></span> <span class="token attr-name">ng-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item.file.name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hpe-icon hpe-close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-primary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader.uploadAll()<span class="token punctuation">"</span></span> <span class="token attr-name">ng-disabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>!uploader.getNotUploadedItems().length<span class="token punctuation">"</span></span>\n                    <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Upload All\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader.cancelAll()<span class="token punctuation">"</span></span> <span class="token attr-name">ng-disabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>!uploader.isUploading<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Cancel All\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uploader.clearQueue()<span class="token punctuation">"</span></span> <span class="token attr-name">ng-disabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>!uploader.queue.length<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Clear All\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div ng-controller="FileUploadCtrl as vm" class="container-fluid">\n    <div class="row">\n        <div class="col-md-12 m-t-md">\n            <div>\n                <label for="file-upload-demo-codepen" nv-file-drop uploader="uploader" class="file-upload-dropzone">\n          Click here or Drag and Drop to upload files\n        </label>\n                <input type="file" id="file-upload-demo-codepen" class="sr-only" nv-file-select uploader="uploader" multiple>\n                <p class="progress-static-text" ng-bind="uploader.progress+\'%\'"></p>\n                <progressbar value="uploader.progress" type="secondary" max="100">\n                </progressbar>\n                <ul ng-if="uploader.queue.length" class="dropzone-queue clearfix">\n                    <li ng-repeat="item in uploader.queue">\n                        <a href="" ng-click="item.remove()">\n                            <span class="facet-selected-name" ng-bind="item.file.name"></span>&nbsp;\n                            <span class="hpe-icon hpe-close"></span>\n                        </a>\n                    </li>\n                </ul>\n                <button type="button" class="btn button-primary" ng-click="uploader.uploadAll()" ng-disabled="!uploader.getNotUploadedItems().length"\n                    disabled="disabled">\n          Upload All\n        </button> &nbsp;\n                <button type="button" class="btn button-secondary" ng-click="uploader.cancelAll()" ng-disabled="!uploader.isUploading" disabled="disabled">\n          Cancel All\n        </button> &nbsp;\n                <button type="button" class="btn button-secondary" ng-click="uploader.clearQueue()" ng-disabled="!uploader.queue.length">\n          Clear All\n        </button>\n            </div>\n        </div>\n    </div>\n</div>'}},2154:function(n,a){n.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">\'FileUploadCtrl\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'$scope\'</span><span class="token punctuation">,</span> <span class="token string">\'FileUploader\'</span><span class="token punctuation">,</span> FileUploadCtrl<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">FileUploadCtrl</span><span class="token punctuation">(</span>$scope<span class="token punctuation">,</span> FileUploader<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $scope<span class="token punctuation">.</span>uploader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileUploader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:"angular.module('app').controller('FileUploadCtrl', ['$scope', 'FileUploader', FileUploadCtrl]);\n\nfunction FileUploadCtrl($scope, FileUploader) {\n  $scope.uploader = new FileUploader();\n}"}},2155:function(n,a){n.exports={snippet:'<span class="token keyword">function</span> <span class="token function">FileUploadCtrl</span><span class="token punctuation">(</span>$scope<span class="token punctuation">,</span> FileUploader<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    $scope<span class="token punctuation">.</span>uploader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileUploader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},2156:function(n,a){n.exports='<uxd-file-upload-wrapper></uxd-file-upload-wrapper>\n\n<hr>\n\n\n<blockquote>\n  <p><strong>Note</strong>: Files will not be uploaded to the server by the demo control. Application teams must implement server\n    code.\n  </p>\n</blockquote>\n\n<p>Angular File Upload provides a control for uploading files. It supports native HTML5 uploads and degrades to an iframe target\n  implementation for legacy browsers.</p>\n\n<p>To create an area where files can be dragged for upload, use the <code>nv-file-drop</code> directive.</p>\n\n<p>If the <code>nv-file-over</code> directive is placed on an element, it will have a class added to it when a file is about\n  to be placed into the drop area. By default this class is <code>nv-file-over</code> but can be set with the parameter attribute\n  <code>over-class="className"</code>.</p>\n\n<p>Alternatively the <code>nv-file-select</code> attribute can be added to an <code>&lt;input type="file"&gt;</code> element\n  to create a button which will open a standard file browsing dialogue.</p>\n\n<p>When creating a control with <code>nv-file-drop</code> or <code>nv-file-select</code>, you must also pass an instance of\n  FileUploader to the uploader attribute. FileUploader at minimum should be instantiated with the url to upload to, but can\n  take additional parameters including formData for POST requests and filters to be applied to files before they are added\n  to the upload queue.</p>\n\n<p>Attributes are defined in the controller: <code>uploader</code> - mandatory, instance of FileUploader.</p>\n\n<uxd-snippet language="javascript" [content]="snippets.compiled.sampleSnippetJs"></uxd-snippet>\n\n<p>The FileUploader object has the following callbacks for adding custom logic:</p>\n\n<div class="demo-attributes table-responsive">\n  <table class="table">\n    <tbody>\n      <tr>\n        <th>Property</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td class="attribute">onWhenAddingFileFailed</td>\n        <td>Is called with the parameters <code>(item, filter, options)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onAfterAddingFile</td>\n        <td>Is called with the parameter <code>(item)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onAfterAddingAll</td>\n        <td>Is called with the parameter <code>(addedFileItems)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onBeforeUploadItem</td>\n        <td>Is called with the parameter <code>(item)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onProgressItem</td>\n        <td>Is called with the parameters <code>(item, progress)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onProgressAll</td>\n        <td>Is called with the parameter <code>(progress)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onSuccessItem</td>\n        <td>Is called with the parameters <code>(item, response, status, headers)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onErrorItem</td>\n        <td>Is called with the parameters <code>(item, response, status, headers)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onCancelItem</td>\n        <td>Is called with the parameters <code>(item, response, status, headers)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onCompleteItem</td>\n        <td>Is called with the parameters <code>(item, response, status, headers)</code>.</td>\n      </tr>\n      <tr>\n        <td class="attribute">onSuccessAll</td>\n        <td>Does not take any parameters.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p>Below you can see the methods available on the FileUploader object.</p>\n\n<div class="demo-attributes table-responsive">\n  <table class="table">\n    <tbody>\n      <tr>\n        <th>Property</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td class="attribute">addToQueue</td>\n        <td>Adds items to the queue. Takes parameters <code>(files, options, filters)</code> where files is a <code>FileList|File|HTMLInputElement</code>,\n          options is an object and filters is a string.</td>\n      </tr>\n      <tr>\n        <td class="attribute">removeFromQueue</td>\n        <td>Removes an item from the queue. Takes a parameter where the value is a <code>FileItem</code> or index of item.</td>\n      </tr>\n      <tr>\n        <td class="attribute">clearQueue</td>\n        <td>Removes all elements from the queue.</td>\n      </tr>\n      <tr>\n        <td class="attribute">uploadItem</td>\n        <td>Uploads an item. Takes a parameter where the value is a <code>FileItem</code> or index of item.</td>\n      </tr>\n      <tr>\n        <td class="attribute">cancelItem</td>\n        <td>Cancels uploading of item. Takes a parameter where the value is a <code>FileItem</code> or index of item.</td>\n      </tr>\n      <tr>\n        <td class="attribute">uploadAll</td>\n        <td>Uploads all pending items on the queue.</td>\n      </tr>\n      <tr>\n        <td class="attribute">cancelAll</td>\n        <td>Cancels all current uploads.</td>\n      </tr>\n      <tr>\n        <td class="attribute">getNotUploadedItems</td>\n        <td>Returns an array of all pending items on the queue</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p>Below is a brief description of the parameters:</p>\n\n<div class="demo-attributes table-responsive">\n  <table class="table">\n    <tbody>\n      <tr>\n        <th>Property</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td class="attribute">item</td>\n        <td>The file to be uploaded.</td>\n      </tr>\n      <tr>\n        <td class="attribute">filter</td>\n        <td>Filters to be applied to the files before adding them to the queue. If the filter returns true the file will be added\n          to the queue.</td>\n      </tr>\n      <tr>\n        <td class="attribute">options</td>\n        <td>Custom properties added to the file uploader.</td>\n      </tr>\n      <tr>\n        <td class="attribute">addedFileItems</td>\n        <td>The list of files to be uploaded.</td>\n      </tr>\n      <tr>\n        <td class="attribute">progress</td>\n        <td>Upload queue progress percentage.</td>\n      </tr>\n      <tr>\n        <td class="attribute">response</td>\n        <td>The response from the server.</td>\n      </tr>\n      <tr>\n        <td class="attribute">status</td>\n        <td>The status code from the server.</td>\n      </tr>\n      <tr>\n        <td class="attribute">headers</td>\n        <td>Headers to be sent along with the files.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p>These callbacks return FileItem objects, which contain the data of your uploaded file. You can then apply your own processing\n  or use the upload method on the FileItem object to send the file to the url you previously set.</p>\n\n<p>If creating a file drop zone, hide the file input with the <code>sr-only</code> class, as this will allow users of assistive\n  technologies to access it via the keyboard.</p>\n\n<p>File upload on click is also available in this drop area by adding the <code>&lt;input type="file"&gt;</code> element. The\n  <code>for</code> attribute of the <code>label</code> should refer to the <code>id</code> of the <code>input</code> element.</p>\n\n<p>Below you can see the sample code used in our example:</p>\n\n<tabset>\n  <tab heading="HTML">\n    <uxd-snippet language="html" [content]="snippets.compiled.appHtml"></uxd-snippet>\n  </tab>\n  <tab heading="Javascript">\n    <uxd-snippet language="javascript" [content]="snippets.compiled.appJs"></uxd-snippet>    \n  </tab>\n  <tab heading="CSS">\n    <uxd-snippet language="css" [content]="snippets.compiled.appCss"></uxd-snippet>    \n  </tab>\n</tabset>\n\n<blockquote>\n  <p>Refer to <a href="https://github.com/nervgh/angular-file-upload/">AngularFileUpload</a> for further details on methods\n    and options available.</p>\n</blockquote>'}});