goog.module('sv.bControlName.ControlName');
goog.declareLegacyNamespace();

goog.require('cl.iControl.Control');

const View = goog.require('sv.bControlName.View');

class ControlName extends cl.iControl.Control {
    /**
     * Modal control
     * @param {Object} view
     * @param {Object=} opt_params
     * @param {Object=} opt_domHelper
     * @constructor
     * @extends {cl.iControl.Control}
     */
    constructor(view, opt_params, opt_domHelper) {
        super(view, opt_params, opt_domHelper);
    };

    /** @override */
    enterDocument() {
        super.enterDocument();

        this.initListeners_();
    };

    /**
     * @override
     * @param {Element} element
     */
    decorateInternal(element) {
        super.decorateInternal(element);

        this.initChildElements_();
    };

    /** @private */
    initChildElements_() {};

    /** @private */
    initListeners_() {};
};

/** @constructor */
exports = ControlName;
