const e=document.querySelector(".gallery-open"),t=document.querySelector("#gallery"),n=document.querySelector(".modal-close");e.addEventListener("click",(function(){t.style.display="block"})),t.addEventListener("click",(function(e){e.target!==t||(t.style.display="none",e.target)})),n.addEventListener("click",(function(){t.style.display="none"}));for(var l=document.querySelectorAll(".item-link"),c=0;c<l.length;c++)l[c].getAttribute("href")===window.location.pathname&&l[c].classList.add("active");
//# sourceMappingURL=index.1e95722f.js.map
