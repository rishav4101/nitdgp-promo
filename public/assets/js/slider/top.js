(function (w) {
    w.F = w.F || {};
    w.F.CONFIG = {
        PATH_URL: '/',
    };
    F.HEIGHT_STICKY = 27;
    F.HEIGHT_HEADER = 72;
    w.F._ = {wW: w.innerWidth, wH: w.innerHeight || document.documentElement.offsetHeight, scrollTop: 0};
    F.breakpoints = {SMALL_DESKTOP: 1150, TABLETTE: 1024, MOBILE: 840};
    w.F.isSmallDesktop = function () {
        return F._.wW <= F.breakpoints.SMALL_DESKTOP;
    };
    w.F.isTablette = function () {
        return F._.wW <= F.breakpoints.TABLETTE;
    };
    w.F.isMobile = function () {
        return F._.wW <= F.breakpoints.MOBILE;
    };

    w.F.PAGES_VIEWS = {
        home: 'Home',
        post: 'Post',
        search: 'Search',
        festivals: 'Festivals',
        archive: 'List',
        corporate: 'Corpo'
    };
})(window);
