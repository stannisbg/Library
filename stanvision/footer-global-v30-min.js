"use strict";if(document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".autoplay-video");e.forEach(function(e){let t=e.querySelector("video");t&&(e.onmouseover=function(){t.play()},e.onmouseout=function(){t.pause()})})}),gsap.registerPlugin(ScrollTrigger),void 0===Webflow.env("editor")){function e(){let e=new Lenis({lerp:.1,wheelMultiplier:.8,infinite:!1,gestureOrientation:"vertical",normalizeWheel:!1,smoothTouch:!1});function t(o){e.raf(o),requestAnimationFrame(t)}requestAnimationFrame(t),$("[data-lenis-start]").on("click",function(){e.start()}),$("[data-lenis-stop]").on("click",function(){e.stop()}),$("[data-lenis-toggle]").on("click",function(){$(this).toggleClass("stop-scroll"),$(this).hasClass("stop-scroll")?e.stop():e.start()}),e.on("scroll",ScrollTrigger.update),gsap.ticker.add(t=>{e.raf(1e3*t)}),gsap.ticker.lagSmoothing(0)}window.location.href===window.location.origin+"/"?(document.body.classList.add("no-scroll"),setTimeout(()=>{document.body.classList.remove("no-scroll"),e()},2e3)):e()}window.addEventListener("DOMContentLoaded",e=>{function t(e,t){ScrollTrigger.create({trigger:e,start:"top 85%",onEnter:()=>t.play()})}document.querySelector("[text-split]")&&(new SplitType("[text-split]",{types:"words, chars",tagName:"span"}),gsap.set("[text-split]",{opacity:1})),document.querySelectorAll("[words-slide-up]").forEach(e=>{let o=gsap.timeline({paused:!0});o.from(e.querySelectorAll(".word"),{opacity:0,yPercent:100,duration:.5,ease:"back.out(2)",stagger:{amount:.5}}),t(e,o)}),document.querySelectorAll("[words-rotate-in]").forEach(e=>{let o=gsap.timeline({paused:!0});o.set(e.querySelectorAll(".word"),{transformPerspective:1e3}),o.from(e.querySelectorAll(".word"),{rotationX:-90,duration:.6,ease:"power2.out",stagger:{amount:.6}}),t(e,o)}),document.querySelectorAll("[words-slide-from-right]").forEach(e=>{let o=gsap.timeline({paused:!0});o.from(e.querySelectorAll(".word"),{opacity:0,x:"1em",duration:.6,ease:"power2.out",stagger:{amount:.2}}),t(e,o)}),document.querySelectorAll("[letters-slide-up]").forEach(e=>{let o=gsap.timeline({paused:!0});o.from(e.querySelectorAll(".char"),{yPercent:100,duration:.2,ease:"power1.out",stagger:{amount:.6}}),t(e,o)}),document.querySelectorAll("[letters-slide-down]").forEach(e=>{let o=gsap.timeline({paused:!0});o.from(e.querySelectorAll(".char"),{yPercent:-120,duration:.5,ease:"power1.out",stagger:{amount:.3}}),t(e,o)}),document.querySelectorAll("[letters-fade-in-random]").forEach(e=>{let o=gsap.timeline({paused:!0});o.from(e.querySelectorAll(".char"),{opacity:0,duration:.05,ease:"power1.out",stagger:{amount:.4,from:"random"}}),t(e,o)}),document.querySelectorAll("[scrub-each-word]").forEach(e=>{gsap.timeline({scrollTrigger:{trigger:e,start:"top 90%",end:"top center",scrub:!0}}).from(e.querySelectorAll(".word"),{opacity:.2,duration:.2,ease:"power1.out",stagger:{each:.4}})})}),window.addEventListener("DOMContentLoaded",e=>{if(document.querySelector("[text-split3]")){function t(e,t){ScrollTrigger.create({trigger:e,start:"top 95%",onEnter:()=>t.play()})}new SplitType("[text-split3]",{types:"words, chars",tagName:"span"}),document.querySelector("[letters-fade-in]")&&$("[letters-fade-in]").each(function(e){let o=gsap.timeline({paused:!0});o.from($(this).find(".char"),{opacity:0,duration:.2,ease:"power1.out",stagger:{amount:.3}}),t($(this),o)}),gsap.set("[text-split3]",{opacity:1})}}),document.querySelector("[hoverstagger='text']")&&(new SplitType("[hoverstagger='text']",{types:"words, chars",tagName:"span"}),$("[hoverstagger='link']").each(function(e){if($(this).find("[hoverstagger='text']").length>0){let t=$(this).find("[hoverstagger='text']").eq(0),o=$(this).find("[hoverstagger='text']").eq(1),r=gsap.timeline({paused:!0});r.to(t.find(".char"),{yPercent:-120,duration:.3,stagger:{amount:.2}}),r.from(o.find(".char"),{yPercent:100,duration:.3,stagger:{amount:.2}},0),$(this).on("mouseenter",function(){r.restart()})}}));var cursor=document.querySelector(".cursor-lines__wrapper");setTimeout(function(){cursor.style.opacity="1"},2e3);var cursorSelectors="a, .swiper-pagination, .hamburger__menu, .home-showreel-wrapper-parent, .swiper-wrapper, .projects__item";function getCookie(e){let t=e+"=",o=decodeURIComponent(document.cookie),r=o.split(";");for(let i=0;i<r.length;i++){let n=r[i];for(;" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}function setCookie(e,t,o){let r=new Date;r.setTime(r.getTime()+864e5*o);let i="expires="+r.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}$(cursorSelectors).hover(function(){$(".cursor-line-one, .cursor-line-two").addClass("no-width-height")},function(){$(".cursor-line-one, .cursor-line-two").removeClass("no-width-height")}),$('[mode="light"], [mode="dark"]').hover(function(){var e="light"===$(this).attr("mode")?"bg-black":"bg-white";$(".cursor-line-one, .cursor-line-two").addClass(e)},function(){var e="light"===$(this).attr("mode")?"bg-black":"bg-white";$(".cursor-line-one, .cursor-line-two").removeClass(e)}),Webflow.push(function(){$(".copyright-year").text(new Date().getFullYear())});const cookieBanner=document.querySelector("#cookie-banner"),hasCookieConsent=getCookie("cookies-consent");hasCookieConsent||cookieBanner.classList.remove("cookie-message");const consentCta=cookieBanner.querySelector("#consent-cookies");function setupStaggerAnimations(){staggerAnimation(".stagger-vertical","y",-40),staggerAnimation(".stagger-horizontal","x",40),staggerGridAnimation(".grid-item")}function staggerAnimation(e,t,o){let r=gsap.utils.toArray(e);r.forEach((e,i)=>{let n=r.length>1?.1*i:0,a={opacity:0};a[t]=o,gsap.fromTo(e,a,{scrollTrigger:{trigger:e,start:"top bottom-=100px",toggleActions:"play none none none"},opacity:1,x:"x"===t?0:null,y:"y"===t?0:null,delay:n,duration:.5,ease:"power2.out"})})}function staggerGridAnimation(e){let t=gsap.utils.toArray(e);t.forEach((e,t)=>{gsap.to(e,{scrollTrigger:{trigger:e,start:"top bottom-=100px",toggleActions:"play none none none"},opacity:1,y:0,duration:.5,ease:"power2.out",delay:.2*(t%3)})})}function setupCursorHoverEffects(){$(".swiper, .projects__item").each(function(){let e=$(".cursor-lines__wrapper"),t=$(this).hasClass("swiper"),o=t?"drag":"view-project",r=t?"drag":"view-project";$(this).hover(()=>e.addClass(o),()=>e.removeClass(r))})}function initializeSlider(e,t){$(e).each(function(){new Swiper($(this).find(".swiper")[0],t(this))})}function getGeneralSliderConfig(e){return{slidesPerView:1.1,speed:700,keyboard:!0,spaceBetween:16,loop:!1,slideActiveClass:"is-active",slideDuplicateClass:"is-active",breakpoints:{480:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1.5,spaceBetween:16},992:{slidesPerView:2.5,spaceBetween:16,simulateTouch:!1}},navigation:{nextEl:$(e).find(".swiper-next")[0],prevEl:$(e).find(".swiper-prev")[0],disabledClass:"is-disabled"}}}function getAwardsSliderConfig(e){return{slidesPerView:1.1,speed:700,keyboard:!0,spaceBetween:16,breakpoints:{480:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1.5,spaceBetween:16},992:{slidesPerView:3.5,spaceBetween:16,simulateTouch:!1}},navigation:{nextEl:$(e).find(".swiper-next")[0],prevEl:$(e).find(".swiper-prev")[0],disabledClass:"is-disabled"}}}function getProductsSliderConfig(e){return{slidesPerView:1,speed:700,keyboard:!0,spaceBetween:32,breakpoints:{480:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1,spaceBetween:16},992:{slidesPerView:1,spaceBetween:16,simulateTouch:!1}}}}consentCta.addEventListener("click",()=>{cookieBanner.classList.add("cookie-message"),setCookie("cookies-consent",1,365)}),document.addEventListener("DOMContentLoaded",function(){!function e(){let t=document.querySelector(".hamburger__menu"),o=document.querySelector(".section__navbar");t&&o&&t.addEventListener("click",function(){o.classList.toggle("open")})}()}),document.addEventListener("DOMContentLoaded",function(){gsap.set(".stagger-vertical, .stagger-horizontal, .grid-item",{opacity:0}),setupStaggerAnimations()}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".text-highlighted");e.length>0&&gsap.fromTo(".text-highlighted",{backgroundColor:"rgba(0,0,0,0)"},{backgroundColor:"rgba(29,31,32,1)",delay:1.5,duration:.2,ease:"Power2.easeOut"})}),$(".span-wrapper").each(function(e){$(".span-element").eq(e).appendTo($(this))}),document.addEventListener("DOMContentLoaded",setupCursorHoverEffects),document.addEventListener("DOMContentLoaded",function(){initializeSlider(".slider-main_component",getGeneralSliderConfig),initializeSlider(".slider-main_component-awards",getAwardsSliderConfig),initializeSlider(".slider-main_component-products",getProductsSliderConfig)}),document.addEventListener("DOMContentLoaded",function(){gsap.registerPlugin(ScrollTrigger);let e=document.querySelectorAll(".accordion-item");if(0===e.length)return;gsap.set(e,{opacity:0,y:50});let t=document.querySelectorAll(".accordion-content"),o=document.querySelectorAll(".accordion-title .icon");t.length>0&&(gsap.set(t,{height:0,opacity:0,display:"none"}),gsap.set(t[0],{height:"auto",opacity:1,display:"block"})),o.length>0&&gsap.set(o[0],{rotation:45}),document.querySelectorAll(".accordion-title").forEach((e,r)=>{e.addEventListener("click",function(){let e=this.nextElementSibling,i=this.querySelector(".icon"),n="block"===e.style.display;if(n)gsap.to(e,{height:0,opacity:0,duration:.3,ease:"power1.inOut",onComplete:()=>e.style.display="none"}),gsap.to(i,{rotation:0,duration:.3});else{e.style.display="block",e.style.height="auto";let a=e.offsetHeight;gsap.fromTo(e,{height:0,opacity:0},{height:a,opacity:1,duration:.3,ease:"power1.inOut",onComplete:()=>e.style.height="auto"}),gsap.to(i,{rotation:45,duration:.3})}t.forEach((e,t)=>{t!==r&&(gsap.to(e,{height:0,opacity:0,duration:.3,ease:"power1.inOut",onComplete:()=>e.style.display="none"}),gsap.to(o[t],{rotation:0,duration:.3}))})})}),ScrollTrigger.batch(e,{onEnter:e=>gsap.to(e,{opacity:1,y:0,stagger:.15,duration:.3,ease:"power1.out",overwrite:!0}),start:"top bottom-=100px"})});