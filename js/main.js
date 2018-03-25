(function() {

  Reveal.initialize({
    dependencies: [
      { src: './js/reveal.js-3.6.0/plugin/markdown/marked.js' },
      { src: './js/reveal.js-3.6.0/plugin/markdown/markdown.js' },
      { src: './js/reveal.js-3.6.0/plugin/notes/notes.js', async: true },
      { src: './js/reveal.js-3.6.0/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
  });

})();
