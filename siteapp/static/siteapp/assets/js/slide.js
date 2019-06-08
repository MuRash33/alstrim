jQuery(document).ready( function() {
     jQuery('.cont-dop-slide').cubeportfolio({
        layoutMode: 'slider',
        gridAdjustment: 'responsive',
        fade: true,
        drag: true,
        singlePageStickyNavigation: true,
        auto: true,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: false,
        rewindNav: true,
        lightboxGallery: true,
        scrollByPage: false,
        mediaQueries: [{
            width: 1500,
            cols: 1,
        }, {
            width: 1100,
            cols: 1,
        }, {
            width: 800,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
                gapVertical: 10,
            }
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        displayType: 'fadeIn',
        displayTypeSpeed: 1000,
        // options
     });
     jQuery('.slide-akcii').cubeportfolio({
         layoutMode: 'slider',
        gridAdjustment: 'responsive',
        drag: true,
         singlePageStickyNavigation: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: true,
        rewindNav: true,
        lightboxGallery: true,
        scrollByPage: false,
        mediaQueries: [{
            width: 1500,
            cols: 1,
        }, {
            width: 1100,
            cols: 1,
        }, {
            width: 800,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
                gapVertical: 0,
            }
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        displayType: 'fadeIn',
        displayTypeSpeed: 1000,
        // options
     });
     jQuery('.slide-offer').cubeportfolio({
         layoutMode: 'slider',
        gridAdjustment: 'responsive',
        drag: true,
         singlePageStickyNavigation: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: true,
        rewindNav: true,
        lightboxGallery: true,
        scrollByPage: false,
        mediaQueries: [{
            width: 1500,
            cols: 1,
        }, {
            width: 1100,
            cols: 1,
        }, {
            width: 800,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
                gapVertical: 0,
            }
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        displayType: 'fadeIn',
        displayTypeSpeed: 1000,
        // options
     });
     jQuery('.country-slide').cubeportfolio({
         layoutMode: 'slider',
         gridAdjustment: 'responsive',
         drag: true,
         singlePageStickyNavigation: true,
         caption: 'fadeIn',
         auto: false,
         autoTimeout: 5000,
         autoPauseOnHover: true,
         showNavigation: true,
         showPagination: false,
         rewindNav: true,
         lightboxGallery: true,
         scrollByPage: false,
         mediaQueries: [{
            width: 1500,
            cols: 1,
        }, {
            width: 1100,
            cols: 1,
        }, {
            width: 800,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
                gapVertical: 10,
            }
        }],
        gapHorizontal: 30,
        gapVertical: 10,
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        // options
     });
});