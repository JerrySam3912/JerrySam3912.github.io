
(function(){
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add("revealed");
        io.unobserve(e.target);
      }
    }
  }, { threshold: .15 });
  els.forEach(el => io.observe(el));
})();
