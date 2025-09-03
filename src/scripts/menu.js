export default class Menu {
    constructor() {
        const $html = document.querySelector("html");
        const $trg_menufs = document.querySelector(".menu__trg");
        $trg_menufs.addEventListener("click", () => {
            $html.classList.toggle("is-menu-open");
        });
    }
}
