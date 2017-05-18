/**
 * 用来绘制多点的连线.
 * @module zrender/graphic/shape/Polyline
 */
define(function (require) {

    var polyHelper = require('../helper/poly');

    return require('../Path').extend({
        
        type: 'polyline',

        /**
         * points的结构. 数组.
         * let polyline = new Polyline({
                shape: {
                    points: [
                    [10, 10],
                    [20, 20],
                    [100, 30]
                    ]
                },
                style: {
                    stroke: '#ff0000'
                }
            });
         */

        shape: {
            points: null,

            smooth: false,

            smoothConstraint: null
        },

        style: {
            stroke: '#000',

            fill: null
        },

        buildPath: function (ctx, shape) {
            polyHelper.buildPath(ctx, shape, false);
        }
    });
});