class PlaceHolderImg {
    paint(ctx, size) {
        ctx.rect(0, 0, size.width, size.height);
        ctx.fillStyle = "#eee";
        ctx.fill()

        ctx.width = 2;
        ctx.strokeStyle = '#ccc';
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
