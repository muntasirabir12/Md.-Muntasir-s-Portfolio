// Copy-to-clipboard for contact details
document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.getAttribute('data-copy');
    function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1500)}
    function fallback(){var s=b.previousElementSibling;var r=document.createRange();r.selectNodeContents(s);var sel=getSelection();sel.removeAllRanges();sel.addRange(r);b.textContent='Selected'}
    try{navigator.clipboard.writeText(t).then(done,fallback)}catch(e){fallback()}
  });
});
