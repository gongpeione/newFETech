class PlaceHolderImg {
    static get inputProperties () {
        return [
            'border-top-width',
            'border-top-color'
        ]
    }
    
    paint(ctx, size, props) {
        ctx.rect(0, 0, size.width, size.height);
        ctx.fillStyle = "#eee";
        ctx.fill()

        ctx.lineWidth = props.get('border-top-width') && props.get('border-top-width').value || 2;
        ctx.strokeStyle = props.get('border-top-color') && props.get('border-top-color').toString() || '#ccc';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size.width, size.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size.width, 0);
        ctx.lineTo(0, size.height);
        ctx.stroke();
    }
}

registerPaint('placeholder-img', PlaceHolderImg);
