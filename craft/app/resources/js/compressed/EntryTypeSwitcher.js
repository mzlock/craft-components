/*
 Copyright (c) 2014, Pixel & Tonic, Inc.
 @license   http://buildwithcraft.com/license Craft License Agreement
 @see       http://buildwithcraft.com
 @package   craft.app.resources
*/
(function(a){Craft.EntryTypeSwitcher=Garnish.Base.extend({$form:null,$typeSelect:null,$spinner:null,$fields:null,init:function(){this.$form=a("#entry-form");this.$typeSelect=a("#entryType");this.$spinner=a('<div class="spinner hidden" style="position: absolute; margin-'+Craft.left+': 2px;"/>').insertAfter(this.$typeSelect.parent());this.$fields=a("#fields");this.addListener(this.$typeSelect,"change","onTypeChange")},onTypeChange:function(d){this.$spinner.removeClass("hidden");Craft.postActionRequest("entries/switchEntryType",
this.$form.serialize(),a.proxy(function(a,c){this.$spinner.addClass("hidden");if("success"==c){var b=this.$fields.data("pane");b.deselectTab();this.$fields.html(a.paneHtml);b.destroy();this.$fields.pane();Craft.initUiElements(this.$fields);Craft.appendHeadHtml(a.headHtml);Craft.appendFootHtml(a.footHtml);"undefined"!=typeof slugGenerator&&slugGenerator.setNewSource("#title");Garnish.$win.trigger("resize")}},this))}})})(jQuery);

//# sourceMappingURL=EntryTypeSwitcher.min.map
