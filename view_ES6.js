goog.module('sv.bControlName.View');
goog.declareLegacyNamespace();

goog.require('cl.iControl.View');

/**
 * Css class enum
 * @enum {string}
 */
const CssClass = {
    ROOT: 'b-control-name',
};

/**
 * Modal View
 */
class View extends cl.iControl.View {
    /**
     * @param {Object=} opt_params
     * @param {Function=} opt_template
     * @param {string=} opt_modifier
     * @constructor
     * @extends {cl.iControl.View}
     */
    constructor(opt_params, opt_template, opt_modifier) {
        super(opt_params, opt_template, opt_modifier);

        this.setCssClass(CssClass.ROOT);
    };

    /** @override */
    enterDocument() {
        super.enterDocument();

        this.initDomElements_();
    };

    /**
     * @override
     * @param {Element} element
     */
    decorateInternal(element) {
        super.decorateInternal(element);

        this.initDomListeners_();
    };

    /** @private */
    initDomElements_() {};

    /** @private */
    initDomListeners_() {};
};

/** @constructor */
exports = View;

/** @enum {string} */
exports.CssClass = CssClass;
