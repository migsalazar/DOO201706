$(function(){

  var _applyBigSintax = function() {
    var $preList = $('pre');
    $preList.each(function(){
      var $pre = $(this);
      if ($pre.prev().hasClass('import-bs')) {
          $pre.addClass('big-sintax');
      }
    });
  };

  var
    revealConfig = {
      controls: true,
      progress: true,
      slideNumber: 'c/t',
      history: true,
      keyboard: true,
      overview: true,
      center: true,
      touch: true,
      loop: false,
      transition: 'slide',
      mouseWheel: true,
      hideAddressBar: true,
      previewLinks: false,
      transitionSpeed: 'default',
      zoomKey: 'shift',
      menu: {
        titleSelector: 'h1, h2, h3, h4, h5, h6',
        markers: true,
        themes: false,
        transitions: false,
        openSlideNumber: true,
        hideMissingTitles: true,
        keyboard: true
      },
      dependencies: [
          { src: '../static/revealjs/plugin/markdown/marked.js', async: false, condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '../static/revealjs/plugin/markdown/markdown.js', async: false, condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '../static/revealjs/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); _applyBigSintax(); } },
          { src: '../static/revealjs/plugin/zoom-js/zoom.js', async: true },
          { src: '../static/revealjs/plugin/menu/menu.js', async: true }
      ]
    };

  Reveal.initialize(revealConfig);
});
