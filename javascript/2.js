  const track = document.getElementById('track');
  const slides = track.children;
  const dots = document.getElementById('dots');
  let i = 0, t;
 
  Array.from(slides).forEach((_, j) => {
    const d = document.createElement('button');
    d.className = 'dot' + (j===0?' active':'');
    d.onclick = () => ir(j);
    dots.appendChild(d);
  });
 
  function ir(n) {
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i*100}%)`;
    dots.querySelectorAll('.dot').forEach((d,j) => d.classList.toggle('active', j===i));
    clearInterval(t);
    t = setInterval(() => ir(i+1), 5000);
  }
 
  let x0=0;
  track.addEventListener('touchstart', e => x0=e.touches[0].clientX, {passive:true});
  track.addEventListener('touchend',   e => { if(Math.abs(e.changedTouches[0].clientX-x0)>40) ir(i+(e.changedTouches[0].clientX<x0?1:-1)); });
 
  t = setInterval(() => ir(i+1), 5000);