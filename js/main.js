(function() {

  Reveal.initialize({
    width: '100%',
    height: '100%',
    margin: 0,
    minScale: 1,
    maxScale: 1,
    transition: 'none',
    progress: false,
    dependencies: [
      { src: './js/reveal.js-3.6.0/plugin/markdown/marked.js' },
      { src: './js/reveal.js-3.6.0/plugin/markdown/markdown.js' },
      { src: './js/reveal.js-3.6.0/plugin/notes/notes.js', async: true },
      { src: './js/reveal.js-3.6.0/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
  });

  Reveal.addEventListener('slidechanged', function(event) {
    console.log(event);
  });

  var img;
  var imgSrc;
  var imgSrcset;

  Reveal.addEventListener('fragmentshown', function(event) {
    img = document.querySelector(".orders-detail .left-content-img")
    imgSrc = img.src;
    imgSrcset = img.srcset;

    if (event.fragment.classList.contains("fragment-sections")) {
      img.src = './img/orders-list-huge.png';
      img.srcset = './img/orders-list-huge@2x.png';
    }
    if (event.fragment.classList.contains("fragment-search")) {
      img.src = './img/orders-list-huge-search-default.png';
      img.srcset = './img/orders-list-huge-search-default@2x.png';
    }
    if (event.fragment.classList.contains("fragment-search-2")) {
      img.src = './img/orders-list-huge-search-results.png';
      img.srcset = './img/orders-list-huge-search-results@2x.png';
    }
    if (event.fragment.classList.contains("fragment-sort")) {
      img.classList.add("fragment-sort");
    }
    if (event.fragment.classList.contains("fragment-sort-2")) {
      var actionSheetImg = img.cloneNode(true);
      actionSheetImg.classList.add("action-sheet");
      actionSheetImg.src = './img/action-sheet-overlay.png';
      actionSheetImg.srcset = './img/action-sheet-overlay@2x.png';

      var actionSheetOverlay = document.createElement("div");
      actionSheetOverlay.classList.add("action-sheet-overlay");

      var parent = img.parentNode;
      parent.prepend(actionSheetOverlay);
      parent.prepend(actionSheetImg);
    }
    if (event.fragment.classList.contains("fragment-sort-3")) {
      img.src = './img/orders-list-huge-most-ordered.png';
      img.srcset = './img/orders-list-huge-most-ordered@2x.png';
    }
  });

  Reveal.addEventListener('fragmenthidden', function(event) {
    var classes = ['fragment-sections', 'fragment-search', 'fragment-search-2', 'fragment-sort', 'fragment-sort-2'];
    if (event.fragment.classList.contains('fragment-sort')) {
      img.classList.remove('fragment-sort');
    }
    if (event.fragment.classList.contains('fragment-sort-2')) {
      var actionSheet = document.querySelector('.action-sheet');
      var actionSheetOverlay = document.querySelector('.action-sheet-overlay');
      actionSheet.remove();
      actionSheetOverlay.remove();
    }
  });

})();
