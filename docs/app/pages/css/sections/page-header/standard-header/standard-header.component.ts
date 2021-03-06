import { Component } from '@angular/core';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';

@Component({
    selector: 'uxd-css-page-header-standard-header',
    templateUrl: './standard-header.component.html'
})
@DocumentationSectionComponent('CssStandardHeaderComponent')
export class CssStandardHeaderComponent extends BaseDocumentationSection {

    constructor() {
        super(require.context('./snippets/', false, /(html|css|js|ts)$/));
    }

}