!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.classList="container homeContent";let n=document.createElement("h1");n.textContent="Atomic Café";let l=document.createElement("p");l.textContent="Experience the iconic 1960's American style diner. ";let o=document.createElement("button");o.classList="btn btn-primary",o.textContent="Reservation",t.appendChild(n),t.appendChild(l),t.appendChild(o),e.appendChild(t)};var o=()=>{let e=document.querySelector("#content"),t=[["CheeseBurger","$12,50","Pure beef, cheddar cheese, onions, tomatoes, sweet pickles"],["Bacon-cheese burger","$13,50","Pure beef, bacon, cheddar cheese, barbecue sauce, garnish"],["Crispy-Chicken Burger","$15,50","Crispy chicken filet, honey mustard sauce, garnish"],["Veggie-burger","$15,50","Veggie patties, tomato sauce, garnish"],["Black Salmon Burger","$17,50","Beef, cheese, salmon and garnish"],["Double Beef","$17,50","Double beef patties, double cheese, garnish"]],n=[["Vanilla Shake","$5"],["Chocolate Shake","$5"],["Strawberry Shake","$5"],["Banana Shake","$5"],["Double Deluxe Chocolate-banana Shake","$8"]],l=document.createElement("div");l.classList="container menuContent";let o=document.createElement("h1");o.textContent="Our Burgers",o.classList="menuTitle";let c=document.createElement("img"),a=document.createElement("ul");c.classList="burgerMenuImg",c.src="images/burger.jpg";for(let e=0;e<t.length;e++){let n=document.createElement("li"),l=document.createElement("h3");l.textContent=`${t[e][0]} - ${t[e][1]}`;let o=document.createElement("p");o.textContent=t[e][2],n.appendChild(l),n.appendChild(o),a.appendChild(n)}let r=document.createElement("h1");r.textContent="Our Shakes",r.classList="menuTitle";let d=document.createElement("img"),i=document.createElement("ul");d.classList="shakesMenuImg",d.src="images/shake.jpg";for(let e=0;e<n.length;e++){let t=document.createElement("li"),l=document.createElement("h3");l.textContent=`${n[e][0]} - ${n[e][1]}`,t.appendChild(l),i.appendChild(t)}l.appendChild(o),l.appendChild(c),l.appendChild(a),l.appendChild(r),l.appendChild(d),l.appendChild(i),e.appendChild(l)};var c=()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.classList="container contactContent";let n=document.createElement("h1");n.textContent="Contact";let l=document.createElement("p"),o=document.createElement("p"),c=document.createElement("p");l.textContent="Call us: xxx:xxx:xxxx",o.textContent="Visit us: 356, Nowhere Road, Narnia",c.textContent="Open 24/7",t.appendChild(n),t.appendChild(l),t.appendChild(o),t.appendChild(c),e.appendChild(t)};var a=()=>{let e=document.querySelector("#content"),t=document.createElement("footer"),n=document.createElement("p");n.textContent="Copyright © Atomic Café 2020",t.appendChild(n),e.appendChild(t)};(()=>{let e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div");n.classList="container";let l=document.createElement("h2");l.textContent="Atomic Café";let o=document.createElement("ul"),c=["Home","Menu","Contact"];for(let e=0;e<c.length;e++){let t=document.createElement("li");t.id=c[e],t.textContent=c[e],o.appendChild(t)}let a=document.createElement("div");a.id="layer",n.appendChild(l),n.appendChild(o),t.appendChild(n),e.append(a),e.appendChild(t)})(),l(),o(),c(),a(),(()=>{let e=document.querySelector("#Home"),t=document.querySelector("#Menu"),n=document.querySelector("#Contact"),l=document.querySelector(".btn"),o=document.querySelector(".homeContent"),c=document.querySelector(".menuContent"),a=document.querySelector(".contactContent");e.addEventListener("click",()=>{o.style.display="block",c.style.display="none",a.style.display="none"}),t.addEventListener("click",()=>{o.style.display="none",c.style.display="block",a.style.display="none"}),n.addEventListener("click",()=>{o.style.display="none",c.style.display="none",a.style.display="block"}),l.addEventListener("click",()=>{o.style.display="none",c.style.display="none",a.style.display="block"})})()}]);