
  // Typing animation in the search box
  const q = "Esra Rizvi software engineer";
  const input = document.getElementById("searchInput");
  let i = 0;
  (function type(){
    if(i <= q.length){ input.value = q.slice(0,i); i++; setTimeout(type, 70); }
    else { setTimeout(()=>{ input.value = q; }, 400); }
  })();

  // Enter in search box = scroll to about
  input.addEventListener("keydown", e => { if(e.key === "Enter") scrollToId("about"); });

  function scrollToId(id){
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
  }
  function lucky(){ document.getElementById("luckyModal").classList.add("show"); }
  function closeLucky(){ document.getElementById("luckyModal").classList.remove("show"); }
  document.getElementById("luckyModal").addEventListener("click", e => {
    if(e.target.id === "luckyModal") closeLucky();
  });

  // Contact form -> POST /api/contact
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    const data = Object.fromEntries(new FormData(form));
    status.style.color = "var(--sub)";
    status.textContent = "Sending...";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      status.style.color = "var(--green)";
      status.textContent = "Message sent. Esra will get back to you soon.";
      form.reset();
    } catch {
      status.style.color = "var(--red)";
      status.innerHTML = 'Server unreachable. <a href="mailto:esrarizvi789@gmail.com">Email directly</a>.';
    }
  });
