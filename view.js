goog.provide('sv.bControlName.View');

goog.require('cl.iControl.View');



/**
 * Modal View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {cl.iControl.View}
 */
sv.bControlName.View = function(
    opt_params, opt_template, opt_modifier) {

    sv.bControlName.View.base(
        this, 'constructor', opt_params, opt_template, opt_modifier
    );

    this.setCssClass(
        sv.bControlName.View.CssClass.ROOT
    );
};
goog.inherits(sv.bControlName.View, cl.iControl.View);


goog.scope(function() {
    var View = sv.bControlName.View;

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-control-name',
    };


    /**
     * @override
     */
    View.prototype.enterDocument = function() {
        View.base(this, 'enterDocument');

        this.initDomElements_();
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        View.base(this, 'decorateInternal', element);

        this.initDomListeners_();
    };

    /**
     * @private
     */
    View.prototype.initDomElements_ = function() {};

    /**
     * @private
     */
    View.prototype.initDomListeners_ = function() {};


});  // goog.scope
