webpackJsonp([66],{3542:function(t,e,n){"use strict";var d=this&&this.__decorate||function(t,e,n,d){var r,o=arguments.length,a=o<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,n):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,d);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(24),s=n(174),i=n(3543),l=n(410),h=n(409),u=[i.ChartsFlotOptionsNg1Component],c=[{path:"**",component:l.DocumentationCategoryComponent,data:{category:s.ResolverService.resolveCategoryData(s.DocumentationPage.Charts,"Flot Options")}}],b=function(){function t(t,e){e.registerResolver(t)}return t}();b=d([o.NgModule({imports:[h.DocumentationComponentsModule,a.RouterModule.forChild(c)],exports:u,declarations:u,entryComponents:u}),r("design:paramtypes",[o.ComponentFactoryResolver,s.ResolverService])],b),e.ChartsFlotOptionsModule=b},3543:function(t,e,n){"use strict";var d=this&&this.__decorate||function(t,e,n,d){var r,o=arguments.length,a=o<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,n):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,d);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(408),a=function(){function t(){}return t}();a=d([r.Component({selector:"uxd-charts-flot-options-ng1",template:n(3544),changeDetection:r.ChangeDetectionStrategy.OnPush}),o.DocumentationSectionComponent("ChartsFlotOptionsNg1Component")],a),e.ChartsFlotOptionsNg1Component=a},3544:function(t,e){t.exports='<p>Listed below are the options which can be specified in the controller for a chart:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">series</td>\n                <td>string</td>\n                <td>Defines the chart type and its layout. Values include \'lines\', \'bars\', \'points\', \'pie\' etc. E.g. If data\n                    represents a bar chart, then the value is set to \'bars\' etc.</td>\n                <td>false</td>\n            </tr>\n            <tr>\n                <td class="attribute">xaxis</td>\n                <td>array</td>\n                <td>Configures the X-axis with options like show, color, etc.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">yaxis</td>\n                <td>array</td>\n                <td>Configures the Y-axis with options.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">margin</td>\n                <td>object</td>\n                <td>Defined with "top", "left", "bottom" and "right", space in pixels between the canvas edge and the grid.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">markings</td>\n                <td>array</td>\n                <td>Markings, used to draw simple lines and rectangular areas in the background of the plot. It can be an array\n                    of ranges in the form of &#123; xaxis: &#123; from, to &#125;, yaxis: &#123; from, to &#125; &#125; or a function(above example) that\n                    returns this range (note: markings are only used for Live Charts).</td>\n            </tr>\n            <tr>\n                <td class="attribute">colors</td>\n                <td>array(colors)</td>\n                <td>Specifies colors used to represent a chart.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">grid</td>\n                <td>array</td>\n                <td>Helps configure the grid options</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">legend</td>\n                <td>array</td>\n                <td>Defines the data series labels and label boxes with the color of the series</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">tooltip</td>\n                <td>array</td>\n                <td>Defines how a tooltip should be shown</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">onPlotClick</td>\n                <td>function</td>\n                <td>Called when plot area is clicked. Parameters are event, the position and a nearby data item object. This\n                    option works when the "clickable" attribute is set to true</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">onPlotHover</td>\n                <td>function</td>\n                <td>Called when plot area is hovered. Parameters are event, the position and a nearby data item object. This\n                    option works when the "hoverable" attribute is set to true. If "autoHighlight" is true (the default),\n                    nearby data items are highlighted automatically.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<hr>\n\n<p>The following attributes should be defined within <code>series</code></p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">show</td>\n                <td>boolean</td>\n                <td>If set to true the chart is displayed.</td>\n                <td>false</td>\n            </tr>\n            <tr>\n                <td class="attribute">fillColor</td>\n                <td>array(colors)</td>\n                <td>Specifies the colors of the fill. If more than one color is specified this will produce a gradient.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">fill</td>\n                <td>boolean or number</td>\n                <td>If set to true fills the chart with colors in the fillColors property. A number between 0 and 1 defines the\n                    opacity of the fill.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">lineWidth</td>\n                <td>number</td>\n                <td>Defines the thickness of the line or outline in pixels.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">align</td>\n                <td>string</td>\n                <td>Centers the axis labels if set to `center`.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">highlightColor</td>\n                <td>color</td>\n                <td>Default color of the translucent overlay used to highlight on mouse hover.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">forecastFillColor</td>\n                <td>color</td>\n                <td>Defines the fill color for the portion representing forecast data.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">forecastColor</td>\n                <td>color</td>\n                <td>Defines the stroke color for the portion representing forecast data.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">forecastHighLightColor</td>\n                <td>color</td>\n                <td>Default color of the translucent overlay used to highlight on mouse hover for the portion representing forecast\n                    data.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">forecastDashStyle</td>\n                <td>array</td>\n                <td>Default is [5], defines a list of numbers that specifies distances to alternately draw a line and a gap (in\n                    coordinate space units). Similar to this property in HTML5 Canvas.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">shadowSize</td>\n                <td>number</td>\n                <td>Default size of shadows in pixels. Set it to 0 to remove shadows.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">horizontal</td>\n                <td>boolean</td>\n                <td>If true the bars will be presented horizontally (note: this can only be set for Bar Charts).</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">stack</td>\n                <td>boolean</td>\n                <td>If set to true shows the chart in stacked form (note: this can only be used to create Stacked Bar/Line Charts).</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">valueLabels</td>\n                <td>array</td>\n                <td>Allows labels to be displayed beside bars or data points.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<hr>\n\n<p>The following attributes should be defined within <code>valueLabels</code></p>\n\n<table class="table">\n    <tbody>\n        <tr>\n            <th>Property</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Optional</th>\n        </tr>\n        <tr>\n            <td class="attribute">show</td>\n            <td>boolean</td>\n            <td>When set to true labels will be displayed.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">valign</td>\n            <td>string</td>\n            <td>Defines the vertical alignment of the text. The available options are: \'top\', \'above\', \'below\', \'middle\' or \'bottom\'.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">plotAxis</td>\n            <td>string</td>\n            <td>Defines the axis you wish to display the values of. The available options are: \'x\' or \'y\'.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">xoffset</td>\n            <td>number</td>\n            <td>Defines the number of pixels the label should move to the left or right of its original position.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">yoffset</td>\n            <td>number</td>\n            <td>Defines the number of pixels the label should move up or down from its original position.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">font</td>\n            <td>string</td>\n            <td>Defines the font size and font family the labels should use.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">fontColor</td>\n            <td>color</td>\n            <td>Sets the text color of the labels.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">labelFormatter</td>\n            <td>function</td>\n            <td>Should accept one argument that will contain the axis position of the associated data. The function can be used\n                to change the text in the label and should do this by returning the desired text.</td>\n            <td>true</td>\n        </tr>\n    </tbody>\n</table>\n\n<hr>\n\n<p>The following attributes should be defined within <code>xaxis</code></p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">show</td>\n                <td>boolean</td>\n                <td>If set to true displays the axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">tickDecimals</td>\n                <td>null or number</td>\n                <td>Default is auto-detected, describes ticks of the axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">min</td>\n                <td>number</td>\n                <td>Set the start value of the x-axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">max</td>\n                <td>number</td>\n                <td>Set the end value of the x-axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">color</td>\n                <td>color</td>\n                <td>Defines the color of the axis lines.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">ticks</td>\n                <td>array</td>\n                <td>Sets the x-axis labels to a specified value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">tickFormatter</td>\n                <td>function</td>\n                <td>Defines how ticks are formatted.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">mode</td>\n                <td>null or time</td>\n                <td>Defines how data is represented on the x-axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">position</td>\n                <td>string</td>\n                <td>Set as "top" or "bottom", specifies the position of the axis.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<hr>\n\n<p>The following attributes should be defined within <code>yaxis</code></p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">show</td>\n                <td>boolean</td>\n                <td>If set to true displays the axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">min</td>\n                <td>number</td>\n                <td>Set the start value of the y-axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">max</td>\n                <td>number</td>\n                <td>Set the end value of the y-axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">tickFormatter</td>\n                <td>function</td>\n                <td>Defines how ticks are formatted.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">alignTicksWithAxis</td>\n                <td>null or number</td>\n                <td>Aligns the ticks of this axis with the ticks of the other axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">position</td>\n                <td>string</td>\n                <td>Set as "right" or "left", specifies the position of the axis.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<hr>\n\n<p>The following attributes should be defined within <code>grid</code></p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">color</td>\n                <td>color</td>\n                <td>Specifies the color of the grid lines.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">hoverable</td>\n                <td>boolean</td>\n                <td>If set to true enables interactivity in the grid.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">clickable</td>\n                <td>boolean</td>\n                <td>If set to true enables interactivity in the grid.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">borderWidth</td>\n                <td>number or object</td>\n                <td>Defines the width of the grid border.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">tickColor</td>\n                <td>null or color</td>\n                <td>Specifies the colors of the ticks in an axis.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">borderColor</td>\n                <td>color</td>\n                <td>Defines the border grid lines.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">preventOverlap</td>\n                <td>boolean</td>\n                <td>If set to true this will prevent any x-axis labels from overlapping.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">minBorderMargin</td>\n                <td>number or null</td>\n                <td>Specifies the default minimum margin around the border. Used to make sure that points aren\'t accidentally\n                    clipped by the canvas edge.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">backgroundColor</td>\n                <td>color or object</td>\n                <td>Specifies the background color or background gradient colors of the chart.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<hr>\n\n<p>The following attributes should be defined within <code>legend</code></p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">show</td>\n                <td>boolean</td>\n                <td>If set to true shows the legend.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">container</td>\n                <td>string</td>\n                <td>The id or class name of the container to hold the legend.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">noColumns</td>\n                <td>number</td>\n                <td>The number of columns for the legend.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">position</td>\n                <td>string</td>\n                <td>"ne" or "nw" or "se" or "sw", defines the position of the legend.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<hr>\n\n<p>The following attributes should be defined within <code>tooltip</code></p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">show</td>\n                <td>boolean</td>\n                <td>Set to true to show the tooltip.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">cssClass</td>\n                <td>string</td>\n                <td>Set to the name of a custom css class to style the tooltip.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">defaultTheme</td>\n                <td>boolean</td>\n                <td>Set to false if you are using a custom css class.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">snap</td>\n                <td>boolean</td>\n                <td>Set to true to have tooltip in fixed position. When set to false, the tooltip moves along with the mouse\n                    pointer.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">shifts</td>\n                <td>array</td>\n                <td>Values to shift tooltip position relative to the mouse pointer for x and y, negative values are allowed.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">content</td>\n                <td>string or function</td>\n                <td>Specifies the tooltip text e.g. "x : %x, y : %y" - displays x : x-value, y : y-value. Function can be used\n                    if you require more control over how the content is generated. Note that if you wish to access the axis\n                    labels rather than the number value (co-ordinates) assigned to them when using a function, you must use\n                    the "%" identifier followed by the axis (x or y) rather than the "xval" or "yval" parameters that are\n                    passed to the function.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">xDateFormat</td>\n                <td>String</td>\n                <td>provides the format of the x-axis Date.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>'}});