define(function(require) {
    'use strict';

    var zrUtil = require('../core/util');

    var Gradient = require('./Gradient');

    /**
     * x, y, r are all percent from 0 to 1
     * @param {number} [x=0.5] 渐变的百分比中心位置x,y.
     * @param {number} [y=0.5]
     * @param {number} [r=0.5] 渐变的百分比半径.
     * @param {Array.<Object>} [colorStops] [{
                offset: 0,
                color: 'rgba(255, 255, 0, 0)'
       }]
     *  
     * @param {boolean} [globalCoord=false]
     * 
     * let gradient = new RadialGradient(0.5, 0.5, 0.5, [{
                offset: 0,
                color: 'rgba(255, 255, 0, 0)'
            },
        ]);
     */
    var RadialGradient = function (x, y, r, colorStops, globalCoord) {
        // Should do nothing more in this constructor. Because gradient can be
        // declard by `color: {type: 'radial', colorStops: ...}`, where
        // this constructor will not be called.

        this.x = x == null ? 0.5 : x;

        this.y = y == null ? 0.5 : y;

        this.r = r == null ? 0.5 : r;

        // Can be cloned
        this.type = 'radial';

        // If use global coord
        this.global = globalCoord || false;

        Gradient.call(this, colorStops);
    };

    RadialGradient.prototype = {

        constructor: RadialGradient
    };

    zrUtil.inherits(RadialGradient, Gradient);

    return RadialGradient;
});