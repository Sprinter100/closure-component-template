goog.provide('sv.bControlName.ControlName');

goog.require('cl.iControl.Control');
goog.require('sv.bControlName.View');



/**
 * Modal control
 * @param {Object} view
 * @param {Object=} opt_params
 * @param {Object=} opt_domHelper
 * @constructor
 * @extends {cl.iControl.Control}
 */
sv.bControlName.ControlName = function(
    view, opt_params, opt_domHelper) {

    sv.bControlName.ControlName.base(
        this, 'constructor', view, opt_params, opt_domHelper
    );
};
goog.inherits(
    sv.bControlName.ControlName,
    cl.iControl.Control
);


goog.scope(function() {
    var ControlName = sv.bControlName.ControlName,
        View = sv.bControlName.View;

    /** @override */
    ControlName.prototype.enterDocument = function() {
        ControlName.base(this, 'enterDocument');

        this.initChildElements_();
    };

    /**
     * @override
     * @param {Element} element
     */
    ControlName.prototype.decorateInternal = function(element) {
        ControlName.base(this, 'decorateInternal', element);

        this.initListeners_();
    };

    /**
     * @private
     */
    ControlName.prototype.initChildElements_ = function() {};

    /**
     * @private
     */
    ControlName.prototype.initListeners_ = function() {};
});  // goog.scope
