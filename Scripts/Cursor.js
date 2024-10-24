let cursor=document.querySelector(".custom-cursor");
document.addEventListener("mousemove",e=>{cursor.style.left=e.pageX+"px",cursor.style.top=e.pageY+"px"}),
document.addEventListener("click",()=>{cursor.style.width="3rem",cursor.style.height="3rem",
    setTimeout(()=>
    {cursor.style.width="1.5rem",cursor.style.height="1.5rem"},5e3)}),document.querySelectorAll("a, img, i").forEach(e=>{e.addEventListener("mouseenter",()=>{cursor.style.zIndex="-1"}),e.addEventListener("mouseleave",()=>{cursor.style.zIndex="100"})});