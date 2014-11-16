// see ckeditor/_source/core/config.js for configuration options

CKEDITOR.editorConfig = function( config ) {

  // Define changes to default configuration here.
  
  //Adds node class to wysiwyg editor field so it inherits node styling
  config.bodyClass = 'node';

  // allow i tags to be empty (for font awesome)
  CKEDITOR.dtd.$removeEmpty['i'] = false;
  
}
