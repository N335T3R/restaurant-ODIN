(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var d=n.getElementsByTagName("script");if(d.length)for(var c=d.length-1;c>-1&&!t;)t=d[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"d13457582d3e0b1fa4ac.png",n=e.p+"c9b83fa74385ea2947c7.png",d=e.p+"c0586831fe1306b4528f.png",c=document.getElementById("headerContent"),o=new Image;o.src=t,c.appendChild(o),console.log(c);const a=document.getElementById("homeBtn"),i=document.getElementById("menuBtn"),s=document.getElementById("aboutBtn");document.getElementById("content"),i.addEventListener("click",(()=>{!function(){console.log("Menu page activated");const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu"),e.appendChild(t);const c=document.createElement("div");c.classList.add("drinkMenu"),t.appendChild(c);const o=document.createElement("div");o.classList.add("drinksHead"),c.appendChild(o);const a=document.createElement("h1");a.classList.add("drinks"),a.textContent="Drinks",o.appendChild(a);const i=new Image;i.src=n,i.classList.add("drinkIcon"),o.appendChild(i);const s=document.createElement("div");s.classList.add("drinksContent"),c.appendChild(s);const l=document.createElement("ul");l.classList.add("drinkList"),s.appendChild(l);const r=document.createElement("li");r.textContent="mixed drinks",l.appendChild(r);const p=document.createElement("li");p.textContent="domestics",l.appendChild(p);const m=document.createElement("li");m.textContent="imports",l.appendChild(m);const u=document.createElement("ul");u.classList.add("priceList"),s.appendChild(u);const h=document.createElement("li");h.textContent="$7",u.appendChild(h);const g=document.createElement("li");g.textContent="$3.50",u.appendChild(g);const C=document.createElement("li");C.textContent="$4.50",u.appendChild(C);const E=document.createElement("div");E.classList.add("foodMenu"),t.appendChild(E);const f=document.createElement("div");f.classList.add("foodHeader"),E.appendChild(f);const v=document.createElement("h1");v.textContent="food",f.appendChild(v);const L=new Image;L.src=d,L.classList.add("plate"),f.appendChild(L)}()})),a.addEventListener("click",(()=>{console.log("Home page activated")})),s.addEventListener("click",(()=>{console.log("About page activated"),document.getElementById("content")}))})();