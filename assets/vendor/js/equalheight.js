var App = function () {
    $.fn.hasAttr = function (name) { return this.attr(name) !== undefined; }; function handleEqualHeightColumns() {
        var EqualHeightColumns = function () { $('.equal-height-row').each(function () { heights = []; $('.equal-height-column', this).each(function () { $(this).removeAttr('style'); heights.push($(this).height()); }); $('.equal-height-column', this).height(Math.max.apply(Math, heights)); }); }
        EqualHeightColumns(); $(window).resize(function () { EqualHeightColumns(); }); $(window).load(function () { EqualHeightColumns(); });
    }
    return { init: function () { handleEqualHeightColumns(); } };
}(); $(function () { App.init(); });