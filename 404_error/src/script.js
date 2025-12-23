window.onload = function () {
    var error = Snap.select("#error"),
        hole = Snap.select("#svg-hole"),
        hand = Snap.select("#svg-hand"),
        mask = Snap.select("#svg-mask");

    function onSVGLoaded() {
        function animOn() {
            hand.animate({
                transform: "t10,-300, r0"
            }, 4800, mina.easeinout, animOut);

            mask.animate({
                transform: "t-10,300, r0"
            }, 4800, mina.easeinout);
        }

        function animOut() {
            hand.animate({
                transform: "t-10,-305, r0"
            }, 4800, mina.easeinout, animOn);

            mask.animate({
                transform: "t10,305, r0"
            }, 4800, mina.easeinout);
        }

        function open() {
            clearTimeout(timer);
            hand.animate({
                transform: "t0,-300"
            }, 1100, mina.easeinout, animOn);

            mask.animate({
                transform: "t0,300"
            }, 1100, mina.easeinout);
        }
        
        timer = setTimeout(open, 800);

        hand.attr({
            mask: mask
        });
    }

    onSVGLoaded();
};