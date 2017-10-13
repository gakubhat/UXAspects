webpackJsonp([65],{3143:function(n,o,s){"use strict";var e=this&&this.__decorate||function(n,o,s,e){var r,a=arguments.length,t=a<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(n,o,s,e);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(t=(a<3?r(t):a>3?r(o,s,t):r(o,s))||t);return a>3&&t&&Object.defineProperty(o,s,t),t},r=this&&this.__metadata||function(n,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,o)};Object.defineProperty(o,"__esModule",{value:!0});var a=s(0),t=s(24),c=s(409),l=s(174),p=s(410),i=s(3144),g=[i.CssColorPaletteComponent],d=[{path:"**",component:p.DocumentationCategoryComponent,data:{category:l.ResolverService.resolveCategoryData(l.DocumentationPage.Css,"Color Palette")}}],v=function(){function n(n,o){o.registerResolver(n)}return n}();v=e([a.NgModule({imports:[c.DocumentationComponentsModule,t.RouterModule.forChild(d)],exports:g,declarations:g,entryComponents:g}),r("design:paramtypes",[a.ComponentFactoryResolver,l.ResolverService])],v),o.CssColorPaletteModule=v},3144:function(n,o,s){"use strict";var e=this&&this.__decorate||function(n,o,s,e){var r,a=arguments.length,t=a<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(n,o,s,e);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(t=(a<3?r(t):a>3?r(o,s,t):r(o,s))||t);return a>3&&t&&Object.defineProperty(o,s,t),t},r=this&&this.__metadata||function(n,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,o)};Object.defineProperty(o,"__esModule",{value:!0});var a=s(102),t=s(0),c=s(408),l=function(){function n(n){this._colorService=n,this.colors={primary:this._colorService.getColor("primary"),accent:this._colorService.getColor("accent"),secondary:this._colorService.getColor("secondary"),alternate1:this._colorService.getColor("alternate1"),alternate2:this._colorService.getColor("alternate2"),alternate3:this._colorService.getColor("alternate3"),vibrant1:this._colorService.getColor("vibrant1"),vibrant2:this._colorService.getColor("vibrant2"),grey1:this._colorService.getColor("grey1"),grey2:this._colorService.getColor("grey2"),grey3:this._colorService.getColor("grey3"),grey4:this._colorService.getColor("grey4"),grey5:this._colorService.getColor("grey5"),grey6:this._colorService.getColor("grey6"),grey7:this._colorService.getColor("grey7"),grey8:this._colorService.getColor("grey8"),chart1:this._colorService.getColor("chart1"),chart2:this._colorService.getColor("chart2"),chart3:this._colorService.getColor("chart3"),chart4:this._colorService.getColor("chart4"),chart5:this._colorService.getColor("chart5"),chart6:this._colorService.getColor("chart6"),ok:this._colorService.getColor("ok"),warning:this._colorService.getColor("warning"),critical:this._colorService.getColor("critical")}}return n}();l=e([t.Component({selector:"uxd-css-color-palette",template:s(3145)}),c.DocumentationSectionComponent("CssColorPaletteComponent"),r("design:paramtypes",[a.ColorService])],l),o.CssColorPaletteComponent=l},3145:function(n,o){n.exports='<div class="color-box-container">\n    <p class="m-t-sm">Primary</p>\n    <div class="color-box primary-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.primary.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.primary.getRed() }}</span>, \n        <span>{{ colors.primary.getGreen() }}</span>, \n        <span>{{ colors.primary.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Accent</p>\n    <div class="color-box accent-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.accent.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.accent.getRed() }}</span>, \n        <span>{{ colors.accent.getGreen() }}</span>, \n        <span>{{ colors.accent.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Secondary</p>\n    <div class="color-box secondary-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.secondary.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.secondary.getRed() }}</span>, \n        <span>{{ colors.secondary.getGreen() }}</span>, \n        <span>{{ colors.secondary.getBlue() }}</span>\n    </p>\n</div>\n<hr>\n<h4>Alternative Colors</h4>\n<div class="color-box-container">\n    <p class="m-t-sm">Alternate1</p>\n    <div class="color-box alternate1-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.alternate1.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.alternate1.getRed() }}</span>, \n        <span>{{ colors.alternate1.getGreen() }}</span>, \n        <span>{{ colors.alternate1.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Alternate2</p>\n    <div class="color-box alternate2-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.alternate2.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.alternate2.getRed() }}</span>, \n        <span>{{ colors.alternate2.getGreen() }}</span>, \n        <span>{{ colors.alternate2.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Alternate3</p>\n    <div class="color-box alternate3-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.alternate3.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.alternate3.getRed() }}</span>, \n        <span>{{ colors.alternate3.getGreen() }}</span>, \n        <span>{{ colors.alternate3.getBlue() }}</span>\n    </p>\n</div>\n<hr>\n<h4>Vibrant Colors</h4>\n<div class="color-box-container">\n    <p class="m-t-sm">Vibrant1</p>\n    <div class="color-box vibrant1-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.vibrant1.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.vibrant1.getRed() }}</span>, \n        <span>{{ colors.vibrant1.getGreen() }}</span>, \n        <span>{{ colors.vibrant1.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Vibrant2</p>\n    <div class="color-box vibrant2-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.vibrant2.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.vibrant2.getRed() }}</span>,\n        <span>{{ colors.vibrant2.getGreen() }}</span>, \n        <span>{{ colors.vibrant2.getBlue() }}</span>\n    </p>\n</div>\n<hr>\n<h4>Grey Colors</h4>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey1</p>\n    <div class="color-box grey1-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey1.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey1.getRed() }}</span>,\n        <span>{{ colors.grey1.getGreen() }}</span>,\n        <span>{{ colors.grey1.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey2</p>\n    <div class="color-box grey2-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey2.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey2.getRed() }}</span>,\n        <span>{{ colors.grey2.getGreen() }}</span>,\n        <span>{{ colors.grey2.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey3</p>\n    <div class="color-box grey3-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey3.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey3.getRed() }}</span>,\n        <span>{{ colors.grey3.getGreen() }}</span>,\n        <span>{{ colors.grey3.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey4</p>\n    <div class="color-box grey4-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey4.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey4.getRed() }}</span>,\n        <span>{{ colors.grey4.getGreen() }}</span>,\n        <span>{{ colors.grey4.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey5</p>\n    <div class="color-box grey5-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey5.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey5.getRed() }}</span>,\n        <span>{{ colors.grey5.getGreen() }}</span>,\n        <span>{{ colors.grey5.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey6</p>\n    <div class="color-box grey6-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey6.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey6.getRed() }}</span>,\n        <span>{{ colors.grey6.getGreen() }}</span>,\n        <span>{{ colors.grey6.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey7</p>\n    <div class="color-box grey7-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey7.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey7.getRed() }}</span>,\n        <span>{{ colors.grey7.getGreen() }}</span>,\n        <span>{{ colors.grey7.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Grey8</p>\n    <div class="color-box grey8-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.grey8.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.grey8.getRed() }}</span>,\n        <span>{{ colors.grey8.getGreen() }}</span>,\n        <span>{{ colors.grey8.getBlue() }}</span>\n    </p>\n</div>\n<hr>\n<h4>Chart Colors</h4>\n<div class="color-box-container">\n    <p class="m-t-sm">Chart1</p>\n    <div class="color-box chart1-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.chart1.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.chart1.getRed() }}</span>,\n        <span>{{ colors.chart1.getGreen() }}</span>,\n        <span>{{ colors.chart1.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Chart2</p>\n    <div class="color-box chart2-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.chart2.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.chart2.getRed() }}</span>,\n        <span>{{ colors.chart2.getGreen() }}</span>,\n        <span>{{ colors.chart2.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Chart3</p>\n    <div class="color-box chart3-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.chart3.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.chart3.getRed() }}</span>,\n        <span>{{ colors.chart3.getGreen() }}</span>,\n        <span>{{ colors.chart3.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Chart4</p>\n    <div class="color-box chart4-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.chart4.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.chart4.getRed() }}</span>,\n        <span>{{ colors.chart4.getGreen() }}</span>,\n        <span>{{ colors.chart4.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Chart5</p>\n    <div class="color-box chart5-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.chart5.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.chart5.getRed() }}</span>,\n        <span>{{ colors.chart5.getGreen() }}</span>,\n        <span>{{ colors.chart5.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Chart6</p>\n    <div class="color-box chart6-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.chart6.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.chart6.getRed() }}</span>,\n        <span>{{ colors.chart6.getGreen() }}</span>,\n        <span>{{ colors.chart6.getBlue() }}</span>\n    </p>\n</div>\n<hr>\n<h4>Status Colors</h4>\n<div class="color-box-container">\n    <p class="m-t-sm">OK</p>\n    <div class="color-box ok-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.primary.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.primary.getRed() }}</span>,\n        <span>{{ colors.primary.getGreen() }}</span>,\n        <span>{{ colors.primary.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Warning</p>\n    <div class="color-box warning-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.warning.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.warning.getRed() }}</span>,\n        <span>{{ colors.warning.getGreen() }}</span>,\n        <span>{{ colors.warning.getBlue() }}</span>\n    </p>\n</div>\n<div class="color-box-container">\n    <p class="m-t-sm">Critical</p>\n    <div class="color-box critical-color"></div>\n    <p class="m-t-sm">HEX <span>{{ colors.critical.toHex() }}</span></p>\n    <p>RGB \n        <span>{{ colors.critical.getRed() }}</span>,\n        <span>{{ colors.critical.getGreen() }}</span>,\n        <span>{{ colors.critical.getBlue() }}</span>\n    </p>\n</div>'}});