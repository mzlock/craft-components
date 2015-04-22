module.exports = {

  $features: $('[data-feature]'),

  init: function() {
    // Trigger Global Features
    this.initPageFeatures();
  },


  initPageFeatures: function() {
    // Trigger Module Features
    this.$features.each(function(index, element){
      var $el = $(element);
      var modules = $el.data("feature").split(' ');
      var breaks = $el.data("break");

      var breakpoints = [];
      if(breaks) {
        breakpoints = breaks.split(' ');
      }

      for(var i=0; i < modules.length; i++){
        var module = modules[i];
        var breakpoint = breakpoints[i] || null;
        var feature = this[module];
        feature.init($el, breakpoint, this);
      }
    }.bind(this));
  }
};
