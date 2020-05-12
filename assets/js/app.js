/**
 * HSCore -
 *
 * @author Monir Hossain
 * @version 1.0
 */
;
(function ($) {

  'use strict';

  $.MHCore = {

    /**
     *
     *
     * @param
     *
     * @return
     */
    init: function () {

      $(document).ready(function (e) {
        // Set Background Image Dynamically
        if ($('[data-bg-img-src]').length) $.MHCore.helpers.bgImage($('[data-bg-img-src]'));
      });

    },

  

    /**
     *
     *
     * @var
     */
    helpers: {

      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function (collection) {

        if (!collection || !collection.length) return;

        return collection.each(function (i, el) {

          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');

        });

      },
  

    },



  };

  $.MHCore.init();

})(jQuery);