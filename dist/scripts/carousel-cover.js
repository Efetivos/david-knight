export default class CarouselCover {
    constructor() {
        const $medias = document.querySelectorAll(".cover-media");

        $medias.forEach(($media, index) => {
            const $imgs = $media.querySelectorAll(".cover-media__each");
            const $trgs = $media.querySelectorAll(".cover-media__bullet");
            $imgs[0].classList.add("media-active");
            $trgs[0].classList.add("bullet-active");
            $trgs.forEach(($trg, trgIndex) => {
                $trg.addEventListener("mouseenter", () => {
                    $trgs.forEach(($t, tIndex) => {
                        $t.classList.toggle("bullet-active", tIndex === trgIndex);
                    });
                    $imgs.forEach(($img, imgIndex) => {
                        $img.classList.toggle("media-active", imgIndex === trgIndex);
                    });
                });
            });
        });
    }
}
