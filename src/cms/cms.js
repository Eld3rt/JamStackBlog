import CMS from 'netlify-cms-app';
import { Figure } from 'netlify-cms-editor-component-figure';
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate);

CMS.registerEditorComponent(Figure);