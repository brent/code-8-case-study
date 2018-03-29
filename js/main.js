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
  });

  Reveal.addEventListener('fragmentshown', function(event) {

    var prevImgs = [];
    var prevOverlays = [];

    function removeFragmentSort() {
      if (img.classList.contains('fragment-sort')) {
        console.log('remove fragment-sort');
        img.classList.remove('fragment-sort');
      }
    }

    function removeOverlays() {
      if (document.querySelector('.action-sheet')) {
        document.querySelector('.action-sheet').remove();
        document.querySelector('.action-sheet-overlay').remove();
      }

      if (document.querySelector('.cart-bar')) {
        document.querySelector('.cart-bar').remove();
        document.querySelector('.cart-bar-overlay').remove();
      }
    }

    function imageForFragment(fragment, img, newImgSrc, newImgSrcset) {
      if (prevImgs[fragment] == img) {
        img.src = prevImgs[fragment].src;
        img.srcset = prevImgs[fragment].srcset;

        removeOverlays();
      } else {
        prevImgs.push(img);

        img.src = newImgSrc;
        img.srcset = newImgSrcset;
      }
    }

    function overlayForFragment(fragment, img, overlayImgSrc, overlayImgSrcset, overlayClass) {
      if (document.querySelector('.action-sheet') ||
          document.querySelector('.cart-bar')) {
        removeOverlays();
      }

      var newImgNode = img.cloneNode(true);
      newImgNode.classList.add(overlayClass);
      newImgNode.src = overlayImgSrc;
      newImgNode.srcset = overlayImgSrcset;

      var overlay = document.createElement("div");
      var overlayBgClass = `${overlayClass}-overlay`;
      overlay.classList.add(overlayBgClass);

      var parent = img.parentNode;

      var overlayEls = {
        img: {
          class: overlayClass,
          src: overlayImgSrc,
          srcset: overlaySrcset
        },
        overlay: {
          el: overlay,
          class: overlayBgClass
        },
        parent: parent
      };

      prevOverlays.push(overlayEls);

      parent.prepend(overlay);
      parent.prepend(newImgNode);
    }

    if (event.fragment.classList.contains("fragment-sections")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      var newImgSrc = './img/orders-list-huge.png';
      var newImgSrcset = './img/orders-list-huge@2x.png';

      removeFragmentSort();
      imageForFragment(0, img, newImgSrc, newImgSrcset);
    }

    if (event.fragment.classList.contains("fragment-search")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      var newImgSrc = './img/orders-list-huge-search-default.png';
      var newImgSrcset = './img/orders-list-huge-search-default@2x.png';

      if (img.classList.contains('fragment-sort')) {
        console.log('remove fragment-sort');
        img.classList.remove('fragment-sort');
      }

      removeFragmentSort();
      imageForFragment(1, img, newImgSrc, newImgSrcset);
    }

    if (event.fragment.classList.contains("fragment-search-2")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      var newImgSrc = './img/orders-list-huge-search-results.png';
      var newImgSrcset = './img/orders-list-huge-search-results@2x.png';

      if (img.classList.contains('fragment-sort')) {
        console.log('remove fragment-sort');
        img.classList.remove('fragment-sort');
      }

      removeFragmentSort();
      imageForFragment(2, img, newImgSrc, newImgSrcset);
    }

    if (event.fragment.classList.contains("fragment-sort-1")) {
      var img = document.querySelector('.orders-detail .left-content-img');
      img.classList.add("fragment-sort");
    }

    if (event.fragment.classList.contains("fragment-sort-2")) {
      var img = document.querySelector('.orders-detail .left-content-img');

      var actionSheetImgSrc = './img/action-sheet-overlay.png';
      var actionSheetImgSrcset = './img/action-sheet-overlay@2x.png';

      overlayForFragment(0, img, actionSheetImgSrc, actionSheetImgSrcset, 'action-sheet');
    }

    if (event.fragment.classList.contains("fragment-sort-3")) {
      document.querySelector('.action-sheet').remove();
      document.querySelector('.action-sheet-overlay').remove();
      var img = document.querySelector('.orders-detail .left-content-img');

      var newImgSrc = './img/orders-list-huge-most-ordered.png';
      var newImgSrcset = './img/orders-list-huge-most-ordered@2x.png';

      imageForFragment(4, img, newImgSrc, newImgSrcset);
    }

    if (event.fragment.classList.contains('fragment-slide-up')) {
    }

    if (event.fragment.classList.contains("fragment-cart-bar-1")) {
      var img = document.querySelector('.add-to-cart .left-content-img');
      var overlaySrc = './img/cart-bar-1.png';
      var overlaySrcset = './img/cart-bar-1@2x.png';

      overlayForFragment(1, img, overlaySrc, overlaySrcset, 'cart-bar');
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
