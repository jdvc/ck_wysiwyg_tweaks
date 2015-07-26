// see ckeditor/_source/core/config.js for configuration options

CKEDITOR.editorConfig = function( config ) {

  // Define changes to default configuration here.
  
  //Adds node class to wysiwyg editor field so it inherits node styling
  config.bodyClass = 'node';
  config.bodyId = 'primary';  
  config.extraCss = "body{background:#FFF;padding:20px;}";

  // allow i tags to be empty (for font awesome)
  CKEDITOR.dtd.$removeEmpty['i'] = false;
 
  // Stops scayt spellchecker and uses browser default
  config.disableNativeSpellChecker = false;
  config.removePlugins = 'scayt,menubutton,liststyle,tabletools,contextmenu';
  config.browserContextMenuOnCtrl = true;
  // kills empty paragraphs i.e. <p>&nbsp;</p>
  config.autoParagraph = false
  
  
  config.stylesSet =
  [
    // Configures the styles available in the styles dropdown menu

    // Each style is an object whose properties define how it is displayed
    // in the dropdown, as well as what it outputs as html into the editor.
    { name : 'BIG', element : 'span', attributes : { 'class' : 'big' } },
    { name : 'Float Right', element : 'div', attributes : { 'style' : 'float:right;' } },
    { name : 'Float Left', element : 'div', attributes : { 'style' : 'float:left;' } },
  ];

}
