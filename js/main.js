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
    document.querySelector('.action-sheet').remove();
    document.querySelector('.action-sheet-overlay').remove();
    document.querySelector('.cart-bar').remove();
    document.querySelector('.cart-bar-overlay').remove();
  });

  Reveal.addEventListener('fragmentshown', function(event) {

    if (event.fragment.classList.contains("fragment-sections")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      var currentImgSrc = './img/orders-list-huge.png';
      var currentImgSrcset = './img/orders-list-huge@2x.png';
      img.src = currentImgSrc;
      img.srcset = currentImgSrcset;
    }

    if (event.fragment.classList.contains("fragment-search")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      var currentImgSrc = './img/orders-list-huge-search-default.png';
      var currentImgSrcset = './img/orders-list-huge-search-default@2x.png';
      img.src = currentImgSrc;
      img.srcset = currentImgSrcset;
    }

    if (event.fragment.classList.contains("fragment-search-2")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      if (img.classList.contains('fragment-sort')) {
        img.classList.remove('fragment-sort');
      }

      var currentImgSrc = './img/orders-list-huge-search-results.png';
      var currentImgSrcset = './img/orders-list-huge-search-results@2x.png';
      img.src = currentImgSrc;
      img.srcset = currentImgSrcset;
    }

    if (event.fragment.classList.contains("fragment-sort-1")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      img.classList.add("fragment-sort");
    }

    if (event.fragment.classList.contains("fragment-sort-2")) {
      var img = document.querySelector('.orders-detail .left-content-img');

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
      document.querySelector('.action-sheet').remove();
      document.querySelector('.action-sheet-overlay').remove();
      var img = document.querySelector('.orders-detail .left-content-img');

      var currentImgSrc = './img/orders-list-huge-most-ordered.png';
      var currentImgSrcset = './img/orders-list-huge-most-ordered@2x.png';
      img.src = currentImgSrc;
      img.srcset = currentImgSrcset;
    }

    if (event.fragment.classList.contains('fragment-slide-up')) {
    }

    if (event.fragment.classList.contains("fragment-cart-bar-1")) {
      var img = document.querySelector('.add-to-cart .left-content-img');

      var cartBarImg = img.cloneNode(true);
      cartBarImg.classList.add("cart-bar");
      cartBarImg.src = './img/cart-bar-1.png';
      cartBarImg.srcset = './img/cart-bar-1@2x.png';

      var actionSheetOverlay = document.createElement("div");
      actionSheetOverlay.classList.add("cart-bar-overlay");

      var parent = img.parentNode;
      parent.prepend(actionSheetOverlay);
      parent.prepend(cartBarImg);
    }

    if (event.fragment.classList.contains("fragment-cart-bar-2")) {
      var img = document.querySelector('.add-to-cart .left-content-img');
      img.src = './img/cart-bar-2.png';
      img.srcset = './img/cart-bar-2@2x.png';
    }

    if (event.fragment.classList.contains("fragment-cart-bar-3")) {
      var img = document.querySelector('.add-to-cart .left-content-img');
      img.src = './img/cart-bar-3.png';
      img.srcset = './img/cart-bar-3@2x.png';
    }
  });

  Reveal.addEventListener('fragmenthidden', function(event) {
  });

})();
