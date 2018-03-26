(function() {

  Reveal.initialize({
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    dependencies: [
      { src: './js/reveal.js-3.6.0/plugin/markdown/marked.js' },
      { src: './js/reveal.js-3.6.0/plugin/markdown/markdown.js' },
      { src: './js/reveal.js-3.6.0/plugin/notes/notes.js', async: true },
      { src: './js/reveal.js-3.6.0/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
  });

})();
