export default function toggleMenu(){
    const menuEl = document.querySelector(".js-menu");
    const triggerEl =
      document.querySelector(".js-menu-trigger");
    const openLabelEl = document.querySelector(
      ".js-menu-label-open"
    );
    const closeLabelEl = document.querySelector(
      ".js-menu-label-close"
    );
    triggerEl!.classList.toggle("is-active"),
      menuEl!.classList.toggle("is-open"),
      document
        .querySelector("html")!
        .classList.toggle("lock-scroll");
    var e = menuEl!.classList.contains("is-open");
    closeLabelEl!.setAttribute("aria-hidden", String(!e)),
      openLabelEl!.setAttribute("aria-hidden", String(e)),
      triggerEl!.setAttribute("aria-expanded", String(e));

}