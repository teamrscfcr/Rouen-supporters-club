(function(){
  try{
    var stored = localStorage.getItem('drs-theme');
    if(stored === 'dark'){
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }catch(e){}
})();

document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('theme-toggle');
  if(!btn) return;
  btn.setAttribute('aria-pressed', document.documentElement.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
  btn.addEventListener('click', function(){
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    if(next === 'dark'){
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
    try{ localStorage.setItem('drs-theme', next); }catch(e){}
  });
});
