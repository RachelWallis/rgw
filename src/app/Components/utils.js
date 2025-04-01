import { gsap } from "gsap";
import $ from 'jquery';

let navigation_overflow;

// Convert hex to RGBA
export function hexa_to_rgba(h, alpha = null) {
  if (!h.includes("#")) return h;

  let r = 0, g = 0, b = 0, a = 1;

  if (h.length === 7) {
    r = parseInt(h.slice(1, 3), 16);
    g = parseInt(h.slice(3, 5), 16);
    b = parseInt(h.slice(5, 7), 16);
  } else if (h.length === 9) {
    r = parseInt(h.slice(1, 3), 16);
    g = parseInt(h.slice(3, 5), 16);
    b = parseInt(h.slice(5, 7), 16);
    a = parseInt(h.slice(7, 9), 16) / 255;
  }

  if (alpha != null) a = alpha;

  return `rgba(${r},${g},${b},${a})`;
}

// Add Scrollbar for Navigation Menu
export const add_nav_menu_scroll = () => {
  const menuInnerWrapper = document.querySelector(".navigation .navigation-menu-menu--wrapper");

  if (menuInnerWrapper) {
    if (window.innerWidth > 992) {
      menuInnerWrapper.style.setProperty("width", `${window.innerWidth * 0.48}px`);
    }

    window.addEventListener("resize", nav_menu_width);
    nav_menu_width();
  }
};

const nav_stick_scroll = () => {
  let scrollPosition;

  scrollPosition = window.scrollY;

  let nav_el = $('.navigation.enabled-sticky');
  let is_scrolled = nav_el.hasClass('scrolled');
  let is_shown = nav_el.hasClass('shown');
  let height = nav_el.height();

  if (scrollPosition > height && !is_scrolled && !is_shown) {
      nav_el.addClass('scrolled');
      $('.placeholder').css('position', 'relative');
      // $('.navigation').removeClass('mid');
      $('.navigation .navigation-menu').css({
          'margin-top': 0,
      });
  } else if (scrollPosition <= height && scrollPosition > 0 && !is_shown) {
      nav_el.removeClass('scrolled');
      $('.placeholder').css('position', 'absolute');
  } else if (scrollPosition <= height && scrollPosition === 0 && !is_shown) {
      $('.navigation.enabled-sticky').removeClass('scrolled');
      $('.placeholder').css('position', 'absolute');
      // $('.navigation').removeClass('mid');
      $('.navigation .navigation-menu').css({
          'margin-top': 0,
      });
  }
};

// Adjust Navigation Menu Scroll
export const nav_menu_scroll = () => {
  const navigation = document.querySelector(".navigation");
  const menuInnerWrapper = document.querySelector(".navigation .navigation-menu-menu--wrapper");
  const menu = document.querySelector(".navigation .menu");

  if (!navigation || !menuInnerWrapper || !menu) return;

  const elementHeight =
    parseFloat(getComputedStyle(menuInnerWrapper).paddingTop) +
    parseFloat(getComputedStyle(menu).paddingTop) +
    menu.offsetHeight;

  const containerHeight =
    document.querySelector(".navigation-menu-social") ? window.innerHeight * 0.75 : window.innerHeight * 0.85;

  if (elementHeight >= containerHeight) {
    menuInnerWrapper.style.setProperty(
      "height",
      document.querySelector(".navigation-menu-social") ? "75%" : "95%"
    );
    add_nav_menu_scroll();
    navigation.addEventListener("navigationOpened", add_nav_menu_scroll);
  } else {
    navigation.removeEventListener("navigationOpened", add_nav_menu_scroll);
  }
};

// Adjust Navigation Menu Width
export const nav_menu_width = () => {
  const menuInnerWrapper = document.querySelector(".navigation .navigation-menu-menu--wrapper");

  if (!menuInnerWrapper || !navigation_overflow) return;

  if (window.innerWidth > 992) {
    menuInnerWrapper.style.setProperty("width", `${window.innerWidth * 0.48}px`);
  }
};

// Replace Non-Breaking Spaces
export const p_nbsp = () => {
  document.querySelectorAll("p").forEach((p) => {
    if (p.innerHTML === "&nbsp;") {
      p.style.height = window.innerWidth < 1025 ? "1.6rem" : "auto";
    }
  });
};

// Navigation Timeline Driver
export const nav_tl_driver = () => {
  // all the related elements
  let nav = $('.navigation-menu');
  let navImage = $('.navigation-menu .navigation-menu-image');
  let navMenu = $('.navigation-menu .navigation-menu-menu');
  let navLI = $('.navigation-menu .navigation-menu-menu .navigation-menu-menu--wrapper .menu > li');

  if (nav === null || nav === undefined) return;

  let nav_tl;

  const tl_inside = () => {
      // initializing the timeline
      nav_tl = new gsap.timeline({
          defaults: {
              duration: 0.4,
              ease: 'power4.out',
          },
          paused: true,
          onReverseComplete: () => {
              $('.navigation').removeClass('shown');
              $('.navigation:not(.scrolled)').trigger('classChange');
              $('body').trigger('navigationClosed');
              $('.navigation .hamburger').removeClass('align');
          },
      });

      // animating
      nav_tl.fromTo(
          nav,
          {
              top: '50%',
              opacity: 0,
              visibility: 'hidden',
              height: '0',
          },
          {
              top: 0,
              opacity: 1,
              visibility: 'visible',
              height: window.innerHeight,
          }
      );

      if (navImage.length > 0) {
          nav_tl.fromTo(
              navImage,
              {
                  y: '5%',
                  opacity: 0,
              },
              {
                  y: 0,
                  opacity: 1,
              }
          );
      }

      nav_tl
          .fromTo(
              navMenu,
              {
                  y: '5%',
                  opacity: 0,
              },
              {
                  y: 0,
                  opacity: 1,
                  delay: $(navImage).length ? -0.2 : -0.3,
              }
          )
          .fromTo(
              navLI,
              {
                  y: '100px',
                  opacity: 0,
                  visibility: 'hidden',
                  stagger: 0.1,
              },
              {
                  y: 0,
                  opacity: 1,
                  visibility: 'visible',
                  stagger: 0.1,
                  delay: -0.2,
              }
          );

      nav_tl.reversed(true);
  };

  tl_inside();

  // handle opening and closing navigation menu
  $('.hamburger').on('click', 'a', (e) => {
      e.preventDefault();

      if (nav_tl.reversed()) {
          $('.navigation').addClass('shown');
          $('.navigation:not(.scrolled)').trigger('classChange');
          $('.navigation').trigger('navigationOpened');
          nav_tl.play();
      } else {
          nav_tl.reverse();
      }
  });

  $('.sub-menu .menu-item').on('click', (e) => {
      nav_tl.reverse();
  });

  const clear_tl = () => {
      if (!$('.navigation').hasClass('shown')) {
          nav_tl.clear();
          tl_inside();
      }
  };

  $(window).on('resize', clear_tl);
  $('body').on('navigationClosed', clear_tl);
};

// Project Animation
export const project_anim = (e) => {
  const item = e.target.closest(".project-list-single--wrapper");
  if (!item) return;

  const itemContent = item.querySelector(".project-list-single--content");
  const itemImage = item.querySelector("img");
  const itemContentInner = itemContent.querySelector(".project-list-single--content-inner");

  const tl = gsap.timeline({ defaults: { duration: 0.15, ease: "Sine.easeOut" } });

  tl.fromTo(itemContent, { y: 100, opacity: 0, visibility: "hidden" }, { y: 0, opacity: 1, visibility: "visible" })
    .fromTo(
      itemContentInner.querySelectorAll(".project-single-service-1, h2, .project-single-service-2, .project-single-button"),
      { y: 50, opacity: 0, visibility: "hidden" },
      { y: 0, opacity: 1, visibility: "visible" }
    )
    .fromTo(itemImage, { scale: 1 }, { scale: 1.2 }, 0);

  item.addEventListener("mouseleave", () => tl.reverse());
};

export const team_member_anim = (e) => {
  const item = e.target.closest(".team-member");
  if (!item) return;

  const listWrapper = item.querySelector(".team-member-image .team-member-social");
  const listItems = listWrapper.querySelectorAll("li");

  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "Sine.easeOut" } });

  tl.fromTo(listWrapper, { top: "50%", opacity: 0, visibility: "hidden" }, { top: "0", opacity: 1, visibility: "visible" })
    .fromTo(
      listItems,
      { top: "5rem", opacity: 0, visibility: "hidden", stagger: 0.1 },
      { top: "0", opacity: 1, visibility: "visible", stagger: 0.1 }
    );

  item.addEventListener("mouseleave", () => tl.reverse());
};

export const nav_scroll_disable = () => {
  const $navigation = $('.navigation:not(.scrolled)');
  let previousScrollY = 0; // Store the previous scroll position

  $navigation.on('classChange', function () {
      if ($navigation.hasClass('shown')) {
          // Save the current scroll position
          previousScrollY = window.scrollY;

          // Disable scrolling
          $('html').css('overflow', 'hidden'); // Prevent scrolling on the main document
          $('body').css({
              position: 'fixed',            // Fix the body position to prevent scrolling
              top: `-${previousScrollY}px`, // Offset the body by the current scroll position
              width: '100%'                // Prevent content shifting
          });

          // Adjust navigation elements
          const scrollY = previousScrollY + 'px';
          $navigation.find('.navigation-menu').css('margin-top', scrollY);
          $navigation.find('.navigation-bar').css('top', scrollY);
      } else {
          // Re-enable scrolling
          const scrollY = Math.abs(parseInt($('body').css('top') || '0', 10));

          // Reset styles
          $('html').css('overflow', '');
          $('body').css({
              position: '',
              top: '',
              width: ''
          });

          // Restore the scroll position
          window.scrollTo(0, scrollY);

          // Reset navigation elements
          $navigation.find('.navigation-menu').css('margin-top', '0px');
          $navigation.find('.navigation-bar').css('top', '0px');
      }
  });
};