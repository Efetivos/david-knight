export default class HighlightImage {
    constructor() {
        this.DOM = {
            $body: document.body,
            $hl: document.querySelector(".hl-img"),
            $img: document.querySelector(".hl-img img"),
            $caption: document.querySelector(".hl-img figcaption"),
            $close: document.querySelector(".hl-img__close"),
            $fader: document.querySelector(".hl-img__fader"),
            $imgs_trg: document.querySelectorAll(".article-page .img-text__media, .article-page .two-imgs__media")
        }

        this.DOM.$imgs_trg.forEach($img => {
            $img.addEventListener("click", () => {
                this.show($img);
            });
        });

        this.DOM.$close.addEventListener("click", () => this.hide());
        this.DOM.$fader.addEventListener("click", () => this.hide());

        let that = this
        document.onkeydown = function (evt) {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }
            if (isEscape) {
                if (that.DOM.$body.classList.contains('is-hl-img-open')) {
                    that.hide();
                }
            }
        }
    }

    show($img_ctn) {
        const $img = $img_ctn.querySelector("img")
        this.DOM.$img.src = $img.src;
        this.DOM.$caption.textContent = $img.getAttribute("alt");
        this.DOM.$fader.classList.add("is-active");
        this.DOM.$body.classList.add("is-hl-img-open");
    }

    hide() {
        this.DOM.$body.classList.remove("is-hl-img-open");
    }
}
