(function (_) {
    /**
     * An editor for a layer
     * @param {GXGroup} group the group this editor works on
     * @class GXLayerEditor
     * @extends GXElementEditor
     * @constructor
     */
    function GXLayerEditor(group) {
        GXElementEditor.call(this, group);
    };
    GObject.inherit(GXLayerEditor, GXElementEditor);
    GXElementEditor.exports(GXLayerEditor, GXLayer);

    /** @override */
    GXLayerEditor.prototype.paint = function (transform, context) {
        // Setup outline colors if we have a color
        var oldSelOutlineColor = context.selectionOutlineColor;
        var layerColor = GXColor.parseColor(this._element.getProperty('color'));
        context.selectionOutlineColor = layerColor.asRGBInt();

        // Paint our children
        this._paintChildren(transform, context);

        // Reset outline colors if set
        context.selectionOutlineColor = oldSelOutlineColor;
    };

    /** @override */
    GXLayerEditor.prototype.toString = function () {
        return "[Object GXLayerEditor]";
    };

    _.GXLayerEditor = GXLayerEditor;
})(this);