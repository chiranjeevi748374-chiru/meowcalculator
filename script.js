/* ---------------- ROUTER ---------------- */
const TITLES = {
  'home':'MeowCalculator — Free EMI, GST, SIP, Tax & 20+ Financial Calculators for India',
  'emi-calculator':'EMI Calculator — Calculate Loan EMI Online | MeowCalculator',
  'gst-calculator':'GST Calculator — Add or Remove GST Online | MeowCalculator',
  'sip-calculator':'SIP Calculator — Estimate Mutual Fund Returns | MeowCalculator',
  'fd-calculator':'FD Calculator — Fixed Deposit Maturity Value | MeowCalculator',
  'ppf-calculator':'PPF Calculator — Public Provident Fund Maturity Value | MeowCalculator',
  'rd-calculator':'RD Calculator — Recurring Deposit Maturity Value | MeowCalculator',
  'lumpsum-calculator':'Lumpsum Calculator — Mutual Fund Lumpsum Returns | MeowCalculator',
  'car-loan-calculator':'Car Loan EMI Calculator — Auto Loan Instalment | MeowCalculator',
  'home-loan-calculator':'Home Loan EMI Calculator — Housing Loan Instalment | MeowCalculator',
  'gold-loan-calculator':'Gold Loan Calculator — EMI & Interest-Only Payment | MeowCalculator',
  'education-loan-calculator':'Education Loan EMI Calculator — With Moratorium | MeowCalculator',
  'personal-loan-calculator':'Personal Loan EMI Calculator | MeowCalculator',
  'salary-calculator':'Salary Calculator — CTC to In-Hand Take-Home Pay | MeowCalculator',
  'hra-calculator':'HRA Calculator — House Rent Allowance Exemption | MeowCalculator',
  'income-tax-calculator':'Income Tax Calculator — Old vs New Regime (India) | MeowCalculator',
  'gratuity-calculator':'Gratuity Calculator — Payment of Gratuity Act | MeowCalculator',
  'nps-calculator':'NPS Calculator — National Pension System Corpus | MeowCalculator',
  'inflation-calculator':'Inflation Calculator — Future Value of Money | MeowCalculator',
  'retirement-calculator':'Retirement Calculator — Corpus & SIP Needed | MeowCalculator',
  'mf-returns-calculator':'Mutual Fund Returns Calculator — Absolute Return & CAGR | MeowCalculator',
  'currency-calculator':'Currency Converter — Live Exchange Rates | MeowCalculator',
  'age-calculator':'Age Calculator — Exact Age in Years, Months, Days | MeowCalculator',
  'percentage-calculator':'Percentage Calculator — Percent, Increase & Decrease | MeowCalculator',
  'about':'About MeowCalculator — Free Indian Financial Calculators',
  'contact':'Contact MeowCalculator',
  'privacy-policy':'Privacy Policy | MeowCalculator',
  'terms-conditions':'Terms & Conditions | MeowCalculator',
  'disclaimer':'Disclaimer | MeowCalculator',
  'sitemap':'Sitemap | MeowCalculator',
  'not-found':'Page Not Found (404) | MeowCalculator'
};
const DESCRIPTIONS = {
  'home':'20+ free Indian financial calculators — EMI, GST, SIP, FD, income tax, HRA, PPF and more. Instant results, formulas, real examples and PDF downloads.',
  'emi-calculator':'Calculate your monthly loan EMI instantly. Enter loan amount, interest rate and tenure to see EMI, total interest and a payment breakdown chart.',
  'gst-calculator':'Add or remove GST from any amount in seconds. Supports all Indian GST slabs — 3%, 5%, 12%, 18% and 28% — with instant results.',
  'sip-calculator':'Estimate the future value of your monthly, quarterly or yearly SIP mutual fund investments with a compound-growth chart.',
  'fd-calculator':'Calculate the maturity value and interest earned on a fixed deposit, with monthly, quarterly, half-yearly or yearly compounding.',
  'ppf-calculator':'Estimate your PPF maturity value over the 15-year lock-in based on your yearly contribution and the current interest rate.',
  'rd-calculator':'Calculate the maturity value of a recurring deposit based on your monthly instalment, interest rate and tenure.',
  'lumpsum-calculator':'Project the future value of a one-time mutual fund or investment lumpsum based on an expected annual return.',
  'car-loan-calculator':'Work out your monthly car loan EMI, total interest and total payment for any car loan amount, rate and tenure.',
  'home-loan-calculator':'Work out your monthly home loan EMI, total interest and total payment for any housing loan amount, rate and tenure.',
  'gold-loan-calculator':'Calculate your gold loan EMI, or estimate an interest-only monthly payment with principal due at the end of tenure.',
  'education-loan-calculator':'Estimate your education loan EMI, accounting for the moratorium period during your course and any grace period.',
  'personal-loan-calculator':'Work out your personal loan EMI, total interest and total repayment amount instantly.',
  'salary-calculator':'Convert your CTC into estimated monthly and annual in-hand salary, accounting for PF, gratuity and other deductions.',
  'hra-calculator':'Calculate your HRA tax exemption under Indian income tax rules based on your basic salary, HRA received, rent paid and city type.',
  'income-tax-calculator':'Estimate your income tax liability for FY 2025-26 under both the old and new tax regimes and compare which saves more.',
  'gratuity-calculator':'Calculate your gratuity amount under the Payment of Gratuity Act, 1972 based on your last drawn salary and years of service.',
  'nps-calculator':'Project your National Pension System (NPS) corpus at retirement, along with an estimated lumpsum withdrawal and monthly pension.',
  'inflation-calculator':'See how inflation erodes the purchasing power of money over time, and what a given amount will be worth in the future.',
  'retirement-calculator':'Estimate the retirement corpus you will need and the monthly SIP required to reach it, based on your current age and expenses.',
  'mf-returns-calculator':'Calculate the absolute return and CAGR (compound annual growth rate) of any mutual fund or investment.',
  'currency-calculator':'Convert between Indian Rupees and major world currencies using live, up-to-date exchange rates.',
  'age-calculator':'Calculate your exact age in years, months and days from your date of birth, plus a countdown to your next birthday.',
  'percentage-calculator':'Quickly calculate percentages, percentage increase or percentage decrease between two numbers.',
  'about':'Learn about MeowCalculator — a free set of Indian financial calculators built for students, salaried employees, business owners and investors.',
  'contact':'Get in touch with the MeowCalculator team for feedback, feature requests or support — via form, email or phone.',
  'privacy-policy':'Read the MeowCalculator Privacy Policy — how we handle cookies, analytics, advertising and any information you share with us.',
  'terms-conditions':'Read the Terms & Conditions for using MeowCalculator, including important notes on calculator accuracy and liability.',
  'disclaimer':'MeowCalculator calculators provide educational estimates only. Read our full disclaimer before making financial decisions.',
  'sitemap':'A complete list of every calculator and page available on MeowCalculator.',
  'not-found':'The page you were looking for could not be found on MeowCalculator.'
};
function pageMeta(target){
  const el = document.getElementById(target);
  const h2 = el ? el.querySelector('.calc-header h2, .hero h1, h1') : null;
  return { title: TITLES[target] || TITLES['home'], desc: DESCRIPTIONS[target] || DESCRIPTIONS['home'] };
}
function updateSchema(target){
  const faqKey = target.replace(/-calculator$/, '').replace(/-/g,'-') + '_faq';
  const faqItems = FAQS[faqKey];
  const schemas = [];
  if(target.endsWith('-calculator')){
    schemas.push({
      "@context":"https://schema.org",
      "@type":"SoftwareApplication",
      "name": (TITLES[target]||'').split(' — ')[0],
      "applicationCategory":"FinanceApplication",
      "operatingSystem":"Any",
      "url": 'https://www.meowcalculator.com/' + (target === 'home' ? '' : target + '/'),
      "offers":{"@type":"Offer","price":"0","priceCurrency":"INR"}
    });
  }
  if(faqItems){
    schemas.push({
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity": faqItems.map(([q,a])=>({
        "@type":"Question","name": q,
        "acceptedAnswer":{"@type":"Answer","text": a}
      }))
    });
  }
  const el = document.getElementById('pageSchema');
  if(el) el.textContent = JSON.stringify(schemas.length===1 ? schemas[0] : schemas);
}
/* ---------------- CLEAN URL ROUTING ----------------
   Every page's full content already lives in the HTML on first load (no lazy
   fetching), so search engines and link-preview bots see complete markup
   even before JavaScript runs. On top of that, this router uses the History
   API so URLs look like /emi-calculator instead of /#emi-calculator — the
   old hash links (#emi-calculator) still work and are transparently
   upgraded to the clean URL, so no bookmark or external link breaks.
   Direct loads of a clean URL (e.g. someone opens meowcalculator.com/emi-calculator
   straight from Google) are handled by the SPA-fallback rules shipped in
   _redirects / vercel.json / .htaccess, which serve index.html for any
   unknown path so this router can take over. */
function currentTarget(){
  let path = location.pathname.replace(/^\/|\/$/g, '');
  if(!path && location.hash) path = location.hash.slice(1); // legacy #hash visit
  if(!path) path = 'home';
  return document.getElementById(path) ? path : null;
}
function route(){
  const requested = currentTarget();
  const target = requested || 'not-found';
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  document.getElementById(target).classList.remove('hidden');

  // Upgrade legacy hash URLs (or the bare "/") to a clean, bookmarkable path.
  const cleanPath = target === 'home' ? '/' : '/' + target + '/';
  if(location.pathname !== cleanPath || location.hash){
    history.replaceState({route: target}, '', cleanPath);
  }

  const meta = pageMeta(target);
  document.title = meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if(metaDesc) metaDesc.setAttribute('content', meta.desc);
  const canonical = document.getElementById('canonicalLink');
  if(canonical) canonical.setAttribute('href', 'https://www.meowcalculator.com' + cleanPath);
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if(robotsMeta) robotsMeta.setAttribute('content', target === 'not-found' ? 'noindex, follow' : 'index, follow');
  updateSchema(target);
  document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active', a.dataset.route===target));
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navSearchResults').classList.remove('open');
  window.scrollTo(0,0);
}
// Intercept clicks on any in-site [data-route] link and navigate via the
// History API instead of a full page reload or a hash jump.
document.addEventListener('click', (e)=>{
  const link = e.target.closest && e.target.closest('[data-route]');
  if(!link) return;
  if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let "open in new tab" etc. work normally
  e.preventDefault();
  const target = link.dataset.route;
  const cleanPath = target === 'home' ? '/' : '/' + target + '/';
  if(location.pathname !== cleanPath){
    history.pushState({route: target}, '', cleanPath);
  }
  route();
});
window.addEventListener('popstate', route);
window.addEventListener('hashchange', route);
document.getElementById('burger').addEventListener('click', ()=>document.getElementById('navLinks').classList.toggle('open'));

// Little tactile "pop" on every Calculate button press, purely cosmetic.
document.addEventListener('click', (e)=>{
  const btn = e.target.closest && e.target.closest('.btn-primary');
  if(!btn) return;
  btn.classList.remove('btn-pop');
  void btn.offsetWidth;
  btn.classList.add('btn-pop');
});

/* ---------------- CALCULATOR SEARCH ---------------- */
function buildSearchIndex(){
  return Object.keys(TITLES)
    .filter(id => id.endsWith('-calculator'))
    .map(id => ({
      id,
      label: (TITLES[id] || '').split(/ — | \| /)[0],
      desc: DESCRIPTIONS[id] || ''
    }));
}
function initCalcSearch(){
  const input = document.getElementById('calcSearchInput');
  const resultsBox = document.getElementById('navSearchResults');
  if(!input || !resultsBox) return;
  const index = buildSearchIndex();
  let activeIdx = -1;
  function render(list){
    if(list.length===0){
      resultsBox.innerHTML = '<div class="nav-search-empty">No calculators found</div>';
      resultsBox.classList.add('open');
      return;
    }
    resultsBox.innerHTML = list.map((c,i)=>
      `<a href="#${c.id}" data-route="${c.id}" data-idx="${i}"><span>${c.label}</span><small>${c.desc}</small></a>`
    ).join('');
    resultsBox.classList.add('open');
    activeIdx = -1;
  }
  input.addEventListener('input', ()=>{
    const q = input.value.trim().toLowerCase();
    if(q===''){ resultsBox.classList.remove('open'); resultsBox.innerHTML=''; return; }
    const matches = index.filter(c => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)).slice(0,8);
    render(matches);
  });
  input.addEventListener('focus', ()=>{ if(input.value.trim()!=='') resultsBox.classList.add('open'); });
  input.addEventListener('keydown', (e)=>{
    const items = [...resultsBox.querySelectorAll('a')];
    if(items.length===0) return;
    if(e.key==='ArrowDown'){ e.preventDefault(); activeIdx=(activeIdx+1)%items.length; }
    else if(e.key==='ArrowUp'){ e.preventDefault(); activeIdx=(activeIdx-1+items.length)%items.length; }
    else if(e.key==='Enter'){ if(activeIdx>=0){ e.preventDefault(); items[activeIdx].click(); } return; }
    else return;
    items.forEach(a=>a.classList.remove('active-result'));
    items[activeIdx].classList.add('active-result');
    items[activeIdx].scrollIntoView({block:'nearest'});
  });
  resultsBox.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    input.value = '';
    resultsBox.classList.remove('open');
    resultsBox.innerHTML = '';
  });
  document.addEventListener('click', (e)=>{
    if(!document.getElementById('navSearch').contains(e.target)) resultsBox.classList.remove('open');
  });
}
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const html = document.documentElement;
  html.setAttribute('data-theme', html.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
});

/* ---------------- TOAST ---------------- */
const Toast = {
  show(msg){
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(this._h); this._h = setTimeout(()=>t.classList.remove('show'), 2200);
  }
};

/* ---------------- CHIP SELECTORS ---------------- */
document.querySelectorAll('.chip-row').forEach(row=>{
  const target = row.dataset.target;
  const values = row.dataset.values.split(',');
  values.forEach(v=>{
    const chip = document.createElement('button');
    chip.type='button'; chip.className='chip'; chip.textContent = row.id==='' ? v : (target.includes('rate')? v+'%': v);
    chip.addEventListener('click', ()=>{
      document.getElementById(target).value = v;
      row.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
    });
    row.appendChild(chip);
  });
});

/* ---------------- VALIDATION HELPERS ---------------- */
function fmt(n){ return '₹' + Number(n).toLocaleString('en-IN', {maximumFractionDigits:0}); }
function fmt2(n){ return '₹' + Number(n).toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2}); }
function validNum(fieldId, {min=0.01, allowZero=false, max=1e10}={}){
  const el = document.getElementById(fieldId);
  const wrap = document.getElementById(fieldId+'_f') || el.closest('.field');
  const v = parseFloat(el.value);
  let ok = true;
  if (el.value.trim()==='' || isNaN(v)) ok=false;
  else if (!allowZero && v<=0) ok=false;
  else if (allowZero && v<0) ok=false;
  else if (v>max) ok=false;
  wrap.classList.toggle('invalid', !ok);
  return ok ? v : null;
}
function clearInvalid(prefix){
  document.querySelectorAll('#'+prefix+'-calculator .field, #'+prefix+'_amount_f').forEach(f=>f.classList.remove('invalid'));
}

/* ---------------- CHARTS ---------------- */
let charts = {};
function pieChart(canvasId, principal, interest){
  if(charts[canvasId]) charts[canvasId].destroy();
  const ctx = document.getElementById(canvasId);
  const style = getComputedStyle(document.documentElement);
  charts[canvasId] = new Chart(ctx, {
    type:'doughnut',
    data:{ labels:['Principal','Interest'], datasets:[{ data:[principal, interest],
      backgroundColor:[style.getPropertyValue('--color-primary'), style.getPropertyValue('--color-success')], borderWidth:0 }]},
    options:{ plugins:{ legend:{ position:'bottom', labels:{ color: style.getPropertyValue('--color-text'), boxWidth:12, font:{size:11} } } }, cutout:'62%' }
  });
}
function lineChart(canvasId, labels, invested, value){
  if(charts[canvasId]) charts[canvasId].destroy();
  const ctx = document.getElementById(canvasId);
  const style = getComputedStyle(document.documentElement);
  charts[canvasId] = new Chart(ctx, {
    type:'line',
    data:{ labels, datasets:[
      { label:'Invested', data:invested, borderColor:style.getPropertyValue('--color-text-mute'), backgroundColor:'transparent', tension:.2 },
      { label:'Value', data:value, borderColor:style.getPropertyValue('--color-primary'), backgroundColor:'transparent', tension:.2 }
    ]},
    options:{ plugins:{ legend:{ position:'bottom', labels:{ color: style.getPropertyValue('--color-text'), boxWidth:12, font:{size:11} } } },
      scales:{ x:{ ticks:{ color: style.getPropertyValue('--color-text-mute') }, grid:{ display:false } },
               y:{ ticks:{ color: style.getPropertyValue('--color-text-mute') }, grid:{ color: style.getPropertyValue('--color-border') } } } }
  });
}

/* ---------------- MEOW SOUND EFFECT ---------------- */
/* Real recorded cat "meow" (embedded as base64 so the file stays a single, portable
   .html with no external audio file to lose) that plays right after a calculation
   finishes. Independent of the MeowCat voice/joke feature. */
const MEOW_SOUND_SRC = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAjAAA3zAAODhgYGB8fHycnJy4uLjU1NTw8RERES0tLU1NTWlpaYmJiaWlpcXF4eHiAgICHh4eOjo6VlZWcnJykpKurq7Ozs7m5ucHBwcjIyNDQ0NfX39/f5eXl6+vr8fHx+Pj4/v7+//8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJARjAAAAAAAAN8zgj4FpAAAAAAAAAAAAAAAAAAAAAP/7sGQAAACBAMYAAAAAAAAP8AAAAQmszSEnjGABFpEj5BGCKP/5z/////pif////+t///R81f9/UgMSGGSQn3fJkCYzutJ0pUK/P/qaXzXCCUNzojsFVMlzQ86XGInmvl+fCRISsbLiwIwKpFACbECZyhsYSXF//JWbtF2PVo7evpRFRn/VQZ6XI+v3KUn7qZv1EdCCOhqeI7mQeCDSAnrEIP4fbMqFEunz4MEjdA8Wl6FlGOblFmbDUW6HuXlXr13Vv4f/4zUq0l3dldkbRJBvCqLRcgtYCAifBc8AgTKmzcLDXAjPyTFiQcDceAFhFyLHZGhLZvKYw0hlhITrtsEBhCjBxEAgkDDsN7pYUNkCBHE4SBNRRpAKGG8bGCBAz256jQMI10CBlGogVTRo13r+kEdhcr0DZENkP/FmggqfXFIgCWVEIYBN5cmfHA+KPUYKGUPSUFNxfyH8uyUOScajjcUsiaBJCoe72DmBx5BCM2dyDJ8spYQkOPuGMlYqVDjG8jixxu89fs0zoHUEpaxzKq9v6LRT9FBDU5HZ7rfuoxRzmVQbxMOSGkjQJJJ0oLAEOKrFQDmv12YNE5i4qmFxuaYOhgEcmSFKaqGZccxqCDDIcZE/UDP0WwL8JrB+G6tGdlopCRGrOJEioToLJOZSgrUoxl87iPzBalX3KxYQqzE23q96FffZzrdTspOpNTq5vswtxn94bOXCBw+a1BAGAwr8Fl7vtFNYc91ojd4ppuhGhfwspmDcq6eaI94z+nEOh+cJ8+LRg4YmwpxXSnHbamuxJJBEh7bc4CQNhWLgjwAkDKxpF8z2vDAMhgBpHC71//ugZNUABLk6yWtJHOBFhLktGGKIFVWPK+4wccD0haV09hiQqY6QkRo+AOhy3urV2O1f+xTUJ/R7v9/7+nHVWlSVKtTEsYOBD6DADMBB8wIGzk4DEAkMXkZHNHRh9lxnKESDJN1E53eTQWbUq/Rw1agB/Yq6lqnyoX3ugRIkD6/CxoU6ZbKIKsvS0y2ls17BfFSdKdGJpIvdPuW/1+3imagoNNJTfLi7cOgPBnuP5lrABn/vaGq/1u4Xm4jn0MHUtnyKwLlZ3GnUmA5jd3f/9TiLSEjVaiB2MTQVAYCVTIg55hNMJ07GqqnLymv121mhUOJ7K1EDN1yvK//9ByMZuxRfoUgpdqsaglFN0U65UYwjpDA07gTQIzKpDTFhEOSdE/SR4kYJYX41mdLVLczlElaTI21sLpr08Ygx5iKUpcyvBDNhS8pTPoZtZBZOXD1uCGIFT7ehlkWhxchDhs4SNWNVUNV8z3b6934zgH1eKl5znGulfWrfB0rJ5funPnr5rwbXOTDOCK/f52yUGFRnk63ztWRcu4S9gnSbySrv2yim1KiqRdPAtFvO9T9q2/7kNqtVq02NdrWaCWZzOHakRJTIrkRguNyiARWFVEFCpUP2ae4kABUyhGVnad8htS2DhgT8fYnYcgKbkHlTQJfc0UPwpk816PdNnMWi7FUtSKc5CdiM+UxdSPly//uQZOWABIY2zOOYMfI3gPmsDgMRD5TjQcwkcujOgei0EYAM0HJMYZzbpY/29Ct+yUrSnMrKpWvRUoxSbJVAXGITrahFnTeL/+MObWAY1MRSNPt7IEigxiCnydW1qdlWSX2ein7VAKI6Vp10/Z/b//sngx6o2h2pU0TDvKS8MYAGJJLEwYVAdeIKYprtfTTWHQCjxE7brDgoQREY4/rWi6+sY83ZnesCoeH1uHlXFgJVspkT6DB5du70aH4pc1bL1bH1AukZqPc9vV7oY1Eh+8nykNNJcdqYmlem1TvfqhG72cq19HdKLdDK6mXjJu8GiGy037uutLk1BCzAEr+z3SwCa9BjBgwoi+RzkSVH5fb9XG/cUput23IT6a6WmnKdeoju/rV7CJZkWHslJKUBe2rMeC4o0TGTjBABpqEIS+rKGw0QjHA9bKJjB+JZoDUByyHIYK0RMNgq/oi8TgqZJhOS37kO3jRU9inhFJVidHTuG68ra+4ap4GTkWoooZFHk67i2CKg3BcGh/tWMle8YImb84CBiba7bbfusgmjQEbS//uQZOeAA85WUfsGFTolgGo/BCIBEN13SeygVaixgej8MYQMiCgno9U/+meP9sf/oO6MVqsZ3nbLcP28JyP+W1Okv7/ZllE7euHQOyuJM1tZl3DZYzHdxGUvKmj4KmQQiQwffyX9TiIfB/9Yf/SGPo47/37c/RnH1LIxhyQuVMj+eQToIKOgVRChAE1L8K6SLKArORQSqij6Dw6S9deGBpa+knT2PwajhBNClBN2pGrlkKkm1NkqJAT9d9VyvRFJpIoE0MTihKrb7xKDhhIpJX+izeyfKdZi4GuyugbVx43TY0dzm9UNak1EnZhi9U+vVJy947dmei7XPU8y/vhyC5b7f893clPqwUE4kP7/6uofw3GpOQNn2YAOoXljgSLGmHXLzT5/6/+5P8Kd3yC98VzX4mP/+9iEMf3qV+t9KvblJm2IAm2LRRhHws9ihiNTYkzFiyeQHef4CXG5SoTFO4cuwy5+/tmk2hCiUxKJ6uQ1i2//39jlE9/EgQQUYSEpcvgECC1kjibQ1Omh3ZcReftnkIBeaKiRE4wxUf6+1kXm//uQZPyABQ0z0vsPTwovRBpvCCJfExTRQ8wnEsiuEak8MIk8pQ86672ONpPSZu3Z5rJdTrsj2RKsa5RXdA9C8qcguBIElfsALUBLtDk4ATSMhsHlaSP8niuxRYkvo/rc1/930Czv9Oe2+0vEPuwAd+DkL9DiUuRVMcwL9biMlgERyDWSXVcLHAxBIedmnUxZvG7XNRJ22HHu35JEns+s7SREK1fa/kloqJpyCmFk7ytjMmdOygIRTpCU15BmRbJ//V1e7ospVTBXJPPByCxojFjxZUJgVva6HHZJbCgtStawDUCiRv+yCtg7zDRKg+I3SGDFFpUcnit3NoLNd+Fdvm//6e3ff/Uh6s9Y6HV3b0ABXdkSAEsAIbYofAIvFlANEcERji/jsSDLBuwJUDiK9auvFIiMGILyGgoejEQmxQYzaRJo/62HhSzjdXOLLSBudEQfNpTsUlItvrPOLKrpQXXuebnqrCQuMYBTK+r/9p35Hn/dJUMZKuY9FUralTqhqP077FZl1pxTPU/3KxokCggIUbVAFbgxQzBrQfEr4jTW//uAZPCABANb1HsGPOAmwBpfBAABDxkrW+wYU2Ckg6m8EJRM+QD/3ybvKkJZv6vXV/+77+oiKc8wKoaP3aXqTDWKwADbwEVOBZSW8ZCsjCR8mDlAoaLQDqmx3GuswalVFAqx38dwYpsizAdv5olDnd/Nxs8WdlHqr35sdG4HDAntlUmnVX5zkydefwlUmlY3WZeBdErfYexE/S02iu5TMu4A5QtQ6YTiBJl/1ZipdfTMY9lVnYq0F2mV/Xafqt/7jC7Rrc0xGgsyLe+7UQgSwSBHKAEvwJ7BLcF65DDerUH/gMPKf8iS9CenUr/3+l5jk0MV66mvs9wtXFkAAM3MYZMIANhWGRlKoZCvdFcdU1h0gaZSBkPLAFeSMjIOIUDTVB2egBLPlLLnM/qsNSoZpU5qPRaE5Xv3jGGHyPl2VLmWwMvdpYaNig3XQiUNAYMOTJQJEQIIOrGKBPYxQsNzfcNKpCgxQiRJrMOhcrr/+5Bk8IAEJmFWeyks6itA2m8EIhMSDS1X7DC1aKGAafwQAASGf//7Nb7K/dlNRFBnUKLBAYwh8RJ0kL5+mSVLpLN6d39Oo/sK8jXIS4SEEYCCuAnYsmRXoU20zvFf5vmn+RuUGmSJUgPHn/+l7f/+Zl4u34NOFgxIgAGXgrO8/AtOw5GQkDaZQIdlYEvKqyBokCYBUtumsllAUMm+SELiFtLzci9cN37Ny9ZQmp8Z09PRu0wZmlukhyGJQFTgUxCX/fqAEvi9SAyETcbf/NsUT1hRgrHYEB/QljBW8sZ3ccGS1/846XN/NvdB0uqmOzT+d7n9IIAHD+OSUC4z+eTJhLdNQ91gPDW944APmJfZp3qxvPL4LHvhDhIKJIAR/CpBXn036OHT+oM7vt+Z/Vn+FF+USf27Q9pxLr6v/PzG5DXN7PQqn9O9BFI0QAA5icWawid7XEB0RKwIDFAAKsgX80kkoRNwy7VG8QhAJPrfS45rRMAnyl1q1nEhwbN8Oa1iOBY/SUsZluUOnAzQH+jLjFjiDi1stoXRRxFgesLC9mP/+5Bk+oAE8UzV+wkWuijDio8MInkUYPFN7LEcSLkOajwRiHz4Tdbq9e5Q5SgsHtnCzmK0XMHs3qv+0tPX940eSopQlML/S2FKmJqHu7l1gyL+DRe6SdMNeMJjV3JctKmOqWmyDwAAAAAAO8KMVW6JiX+oj6H/KN8o33B27eUIawHrDGEn///IWs6f+KgSlK4/hqAMACAAER5WaWhw0AaiwwrJAeTHYWu6/qOlTbA5VQ95pu4saV87vVUQxh+TvHGGBvCMFHp7xv7t0h8Azu+77yT1IUqKaNnrvs/FISJJ7O/89TdlqHOfnpuTU1BMjx9/ljKdiuuWfJ5YbreLVetsbNX+Pni/Uz5ubD4PTx4rFhgcyG2XisQ09gsY2JdhhlQqainpzwl/NQ6MuqTvD+rKMvap/2p+zZui37AigMQBAAGbg4SM6UvGJ9G/EP0Hfg/4w7eCG7O7V//+7/39ump/0KgAAAQABT3QpqoBEhUxxGBQqUCQMAIEpThmFgSI+xvuObdQhiQ09j7FoDEJRQJjUpIFRdKG5H+9Zxw2VUVKHGP/+5Bk7IAE003V+w9GmC1j2o8ER0sVMZdR7D0eKJQPKrwSiTxX4bKnJN5G9QZLbif5oCOJnyzzUID3ZBKRQdyb3WiEEYNvOjwPqbY1+6K/zNO1nMVafrMqJ5xZP/GPcY90CN79levePLOStLxSh0Rsy5iyzvZEvztn+m6ghgAQAAACbh4pzd8w30F/nb6FvweH/BQZ10Et+jUd1//6v/K9vOfqr/OdQDACAAkpxNLU0Ey6UuSheJKEeHTB5lDNzCqSJffyxzlCi+dvW91FpA5affeUMtgFpqV89+7jpoYjjQ4cs3LZcX1OSVXyhwy9mXg/RM2fNsMSKNNV3xhrOVGK+fWLECGCwxNegVDjzKyr6//hL4VhcgyI37Su4k0+55qJiouGcOz5eTdyLLyxW8nbVI6UVzXFVT2rd+ysw6ptsGkgYAAAM34dOpKuo3zp+UQ33J6GGCniQGbgxrOZHl+3/dQT+1HX3U3PqGpyYAQABc3R5RbTjMwi4BiMwQyOGx1Qch5KF4FXIdLWFM4eM+2EFIgTf1/zChwO6Bc8YXy5Ki7/+5Bk34AEwFdT+y1HIikDyp8ER1kTYTdZ7D0aaKaNqzwRFWScj52VxF4gax8rGFqk0qis5NSzlVt2oZYE0//+nUHhpj0BE7+oIzJ99hRp///5Gxp53ChxY51wYUXfXVry5KlfdRJMAIwqDZ6ihkOB9VrVezkKx0JlBgAAAOXgSQxjjV9L00A3+GFv8g3RQhf5QsT1Ap3f+7/4oYUoh+rIvL7GXvOmQjkQAAIT5Mqy5Sw1YhCYHnKMJGCQc8cNI2C6kvpSEhieUpZ3Wh+iLrEREos3MY06IAPAAifE3/1aVgiTdFRy7dV4gCAlOXzhc7qZgFEEuQwR+KXmcpcKH9a96hBEqb3fWlEaly0U5cRKV2/v5ypPdVIHwoc5hweHsPITazoQkzmKdyxYpEvt/+TfY+QZP7HvJ13NUoEuDgIABtnD3AVZ1aADvryWlf6AMA4v8431AQQhugYDD+d57/2P/soFLf/kKK+oL7FwIAAAFc6CU+h2QOUBYC8iKyVUiL0iR10PNCY8IwSFIuXTsqu3kpi66Xc3f3BVd0QBkOW6+eH/+5Bk2wAEVEvV+wYfAC2jiq8ER2cSqW9b7KS8ILqOavwiiWyFPMBYY4QvRS5S2HJE0gIkBkL8y7DsQTmWOg47ksy3jS1QQN1cwEBCAb2kzGp5krSxP///tNYiZ7EZBUFEgYHTQc+swfFxKRCxgNETgp/gd8yKGLhVWreObJYLoFAAAJbOBxhEUJxIdwwfKjjfQIiDfDAxf1Egb5UE368sFTn6xX/W+1MqEk/9KW/IBaBxAEvgpFeiDKdpKWDAICRlJW2CJ0u0mIv5huUBEzZiuQJL3c7ZiygwBGXG9uHLlZP81JSLtUju1MHSl0qAmbEkJDkUEgkkdixiLg5dWC/auWWwFtkJKsc53Lvrg6FY7xXmnHqwzfyZ1kxJCVvf/Mzp/T2KYWCIsBByK4kYcMDgcPMJCRXZuyORGPdWchGb/l1t2dHRrDDYBFc5Hjs2NN1OC0CkAAAKfAo0aWgJ3q3GL+UrfQRhg/8LMf+IxB9YLO1kP6//1J6xf/7w//vVv94LgCYAAAADjkfFjU9yENXKRS8AoESAr9BgicrcqdXepsn/+5Bk24IEkEFWewM3KDEDSr8E4oUUPW1N7LC8SLmNqnwxHLwHNMt7r3YpYekUFCwZrgsHywzyppeYzIFPR/kWOFLDQ4CbDprxgodt7FNHpRTrJEAoRtC8sCTYGZPGK/n8yntYAInn6bUSkYTbvGZ0idVVdw///9/+l25ygVpcmguuvGEVyIhE+vKkqxeWUMmn/7ByTikrUprqaG6Y/dCoAEAAB+TgTBajJjLWhP0MIb8MEJ9AIATiI5/LO45wGYG2/+q7yH/X39gRIAYoFcBAVGlbAytBbNUhhfBIsseXOySSNz+vAJCik5+fewxOBY486ntcq40NKxkLMZp3+9j78q2jwQWOLY8+vZ6TEfzjPWXyySKqI+7ruaRX7ncOShaBePnZqII/d//f/t/KIoAZj+twCB4bEd4KrQxkmQrWCDvW/klHgXG/u3MrzbkFkQYAAJpOBp6SRDdNAf6zN/QO/5hxHU7/NeZ8//ifrZq/6r2v/gqSAAAAYAeDM4PW0X2lwODipd2kAxEbaNLmJwnK45xIoohz+fuA5mUC4MKw7bz/+5Bk0AIE3EHVey9OiCpi+t8EQ2sQhQlZ7DzaIJcMK3wQiAQl2o+QlEVFnVyxdnWtQQBclw3LtP9aU0xIK1D8rnP5+MFwIHk6chloBQVRnDzDzTRjT8wWXp8gWzqiKMhMNZTLj5wnCyy3PdUs3pONSYkiI3JbKiV2MNsbz7K6vQ31qrE+0frHNm6FyQCCAEaPC9qbYuWZ2E7/TDX2oVGf1ga/8o//FPZ7/9Pt//cmv7g2yAAQASBXGo3aV4X6VXg1bqCHMumjcyJyEq3e+ge8kMc3+f+45x9wkK1q5K5VbymBgweBysfT25ZTqoGI6x3us+67QjIMV3hnf/PWUwSiF2L2SA8RHg4qrgXAGn/+R9X//3dw8UOoQFXdgCQwooUTjl8demkO3JXiDDG/c7MNJMBsaEQ83Diib13NvYGUYGFAHkvCwkCUBnLoa/1wXouo1/6gM/8F/6aSUCPRlf/6/U7/6c7vBpIABgAEF9TkHBp+BYARAKvV8gxECyi9YHkrlMsrxyDxUhcFr/329FUyQjSK5Q7foFOmupymem2sSx//+5Bk1oAEoV/VeylXCCajmq8EZwkRlS1Z7KB8oKKTK3wSieyvTUVcsDEf0DZau2+8LAKibp0aMzKpH15tkSVZI4aTISvDTO46RNt1/kWvf2gwCK1EsjyHUmhMUI1LvUpxP7fjmtXeup/++LSbv+69I2R5aNPHSAowixdU1dgkmCAQBEXxpXf7gb0OaIX+8oJ/1oIh/5UON/L/bva0jV//v67Xf70/9tblHdGAAwEW3eNJn0imVlzVKl/oCF5iKY0h+WtN4pldmnSQzb3L//U1dWgLlvdn91GeycgEN4t44/jDdM+xgwGqr1sdZ/sZAo4mJP9+6R376x/5VTW/pq+ZS7R83hU3d+xrOLeu9YUldf21rOyRpqmL40oSAz3V0l9z1N83/WeZ+fDTSbNmRHZ9dvH/aPv6+YO/lw4/ita09chNqCgQFZOA4QFnJzZ5g/Wo/9R/8OJ63f6fb//ZxAq+2QbHAAAAQCfEAcramIBRQIvWygLgywWSVHOtia4wOIQbE0BtHzv/uDPUOK0p7HPPCfgYhCBWceobVXT0UTRzvSr/+5Bk3QAEpV7V+zBGiCuDmq8MKkUS8V1b7Dza6H8MLDwQiORM7Geu6rAgCJNZPlMd0w1SqlBoAaWRaqiis3Rtipf+eMp0dUCAktTOAseInGlxvc0YRdKGnZrnHIYOPbaz99KL9XVEnpnOKzLXd8jJLpiqYFqAEAAGlOJ8pcxJfyyEv1qM/sVFn1oDn/D/9Ps//t6vT/j6/pBoMABABEKcieRLUMCYIDUeVorvT8BWAcV1oMbknJO3H5NKMP5n3b1QwYt2JMaaWwNnLlsteFQw97l0dlF7CVw6ykXOKwz0O0daY+8jlCMt8xw7ulo9jx0XQ4QByMLEYcyhzJiZ3HPR/Gvka0YK1VbOIig8gRF1UhQmVaNaVqKqLZTEX/T6fmZ2Z75jChD5OP9cZtAkKBAABIpwRUzZkot+u41/WEBL6VBn9wzfzv+Su27P/fyNmz+xVe7JGbMBAAAEBctUqoP/WwKHUYbqDCO2DugojzNEgVNC9XcILFn//98n3cIH6Ocaxx5Xqy1HcTFvPUpa1aHtqPGHRufM01PvmVUcAxe5jj//+5Bk34AEfGLWezA+iCUDms8M4nsSZYlT7GixQJ8L6vwzrTz/9yT57RxsJ5ea6fCfQePHnQ4PX8f40e/CRbEAzQ2x70Ofkg0TIeXBKTfWmnFXe6OVT//9fH/F/16IXcR3cULim1bJkmr8uoCLUFAACV3g6ljiHOPCL9RA39A7/Qns/0ezr/7vWb/+v//Ce0AwQARBPJhoTk62hKKJuvQDVt1D5kwoFbdIhsV668I4Cmx7zV2q9ox0i/P/KqR8GgsREUwB5muVXW472eEEG+sZ9/HvYi1Pv61r/+tirqk1K3ObKzYgj7sw+F4av/8QT5RXTwdBolmOhiqNckYORvJ5gyGjWb0iVaq///71ZisdXJIzAIX1hru+gWlCAAA0e4KoVbTGWfov0Rwod/QJv/E293/vq//qb1KJ7L/SrvoGYAAAACAFCIYRrDA5S1c6az/qcrQMYHgwNa05rfuzXeCfBJIPFFvDWr61A4NAi+aIeOi+0CxZ8Uz5lQ0GW5WBwBbv3X+5MCFSd/GfpJTZ1lQFrLlTk1d5h2bsOfFtju7OZUv/+5Bk5gAEpGHWexpEWCIC+v8E45URWXdd7CBc4JaMK/wwlQTxJrO6za6uCE/2zyTJ3NVZTRWQmo9Va7Tm+0Ts+Uuq3mtVtjcgWK3p1bp6+39xjKrqmNZ1134D0oGBAGimDhdVG7TnN/bhQf+1AYb+L/T/9v6f9T/9n5Gu/AeSAAQAqDnBQyIrPYIn0jiy4EAn/JBKmUMqmaawyrBlAIwKLNrmt1OzLQCeo1G/KZXtXsBKVGMrP9jWz7GrJ0E6E/pI1NuIJoPtUxZoH2s6Jip0zjqX6DtVmBqpveU/8xb4ZGEAb5FUUnFqwfWOhNozWHl/////vv1op0a3uQriS6t+2gaDBAAA8D4fRibfBLqdrCD+u4a396IN9H+TXcp++qv+T9nV2//g6M++n+oJggAEAGQpQ5r5JGDAFKVRugARwIZ4AI7kRFuq0uUbXB2d3e//bLU1rDswV3eilcqijCR0JWFPFUoleaitbprGKhw9PPby339+nxPcw5h+OVD0zHlsoqhyyoU7msS5xdAf9EEB7VyVDGTdReLgggdUIJuICRj/+5Bk8QAEyV5Te2svMCLi+u8EqpEQgWtX7Uh5AKsL6rwxNZRpZOd400yMt1/2/K+yq9hwfuh3VdXHfKRKgIEAeKcOYxqDQRJoucZ+zDQh9cCD/6jvT/3/0I/7/f/1X+2EUYABAVZUxgAtGnyupwUJjKwQKowEZFhD9UbY1D7j7toVCqhfP/U3DGBf8Bymrzv1pG4LyqdmCftvYx5vDLTSxIFfy/D/11AFJt4dx3/KGxSI4mMKYniNIQ7q9RjoT/4Um+ZxAOtVmIZSqhzVKZRZ5OUxNaCBirZH//7l+qi5kjibsrvjLgFgwIAAPS6DX1rAnykxc31mAdb0dANN/Ql87/o9Ht6//9366t/XA3AAAAUPHkNy20BwMFAkwsDZgIQVyQieRjol/PwrHUaPDphACPJUmtZ2IulwHDIxAmiIywcujMdbiw17kyjKnwWJorLru5NksEPyw7rWt5gAU01W1WsdZO1XWzqKratTFkvGLG9TOsu+vMx6PJXXuOh0t0nVWHOrqUqCB3sYhnCLcLgoIGVwxjXp9NUe1jNYV1TUnrz/+4Bk+gAEYVpU+xkrcCUDGt8FJTEQxWlX7Qy8QJQMKvwgqRQb+r/6AWnAgIA2V4EQyicxlVShxzfdxMN/6hG38p5b/v6v+7r/5rr9v5zgbAAAAHDiYUMKA5xFOiIHsRdNDgk4ZSCyEMDM9a0uW08LSwYVhIPQ7fu3YAizBTCAxOnCQeDLQnRc5/FAsGkHFLjxSL4fhCe7EB9MClyq67/XqQiwu/Z5Y1tsM/e9OqIKzoMgZB4GLdA3aOyf++MaCFRtFeCoPLu6uiZEREueZqEuKTk0ovQaTaFnhwk+ldMv8foO6m2qLEJeJ4XkTdK9V2UbQ+n96gJyAwAApCoFS/ZWOYqoTvSlEC7evJIDm/o1jwP/ycf6PZ7Ov/v6/T//Xc/MBIAAAAKEF04y5MlegPWGLUN2Q1a2cMK4rDguDB3brQxlGVgnc+U0pQWZMMjhkM+ND05AUEuFesPCYMdqb03NV9/6+SYspP/8v3igzP/7kGTwAgTKY1LzcxZAJiL63wwnQxTVjUnuaRTArovqPPO0PD9vmq+OXYBcgxqJKhECQ7mHmugWn0Mgd8x//4hC99f0xwpPzE2VTMlQrM5Cqj39n9EMeu7zdf1//8013EQs1AtAzLi6gQklFdySlftgtCAAgBorwmCQnvgCkT0L3+bKhMaqG6CCb+hf2f6/Lf6//9dG4uUf6gEkAAACmCFC0cKLghAYhgLAbKVFXyMkJlvUTTmsqx8htOIhTAEFzG5jKogNiwyFGYdC1p+klkgikqmiwlfVnv5Z/uIBUy3LeG9/zJjYYCrfxrXrOqsNhVt3To4Tvlinw4hD6x1f731X5WPiGja8Bvusd6DvmeuSbp6bj0YkVWEaZ6+5+P+f5bni7joNA2VDKj266qOqQaAHxzAm9qQNdaF5n3qBuk3Ffb7/f9m3/+r/s+IrxRXf+wixAAABqTnBT4aFplq4UpQBWk9J8xoUSCyp9WBCw7cBtCITgtHrb7XsMComem70sVmDxkZmNw+hCN92A3lH6mNAXabptUx00VbtYILo+CzuKv/7kGTlgETDW9N7O0NwKOMKrwwqRRKhbUvt4RTAhAdq/CCpFMJteVT+3/n4IO9efkFU85KXGrRUD51KopJXtLVeiHJThWR/nx3//lvSPjbsSCtu46m7n9f6x7V+Z1+0CuAADAGSmAkggHC7Lj9tisgfXUE0e600H/wXp9P7q//87/r/HijRZt19d9AkAAAA5Ek4oGTATEEHiYGdVtUl5wyIGV9ZWGi1262NvguMCWXPXsbMZQEzC8zdoAmApAtSPr2yrQatN/P9XwTgWc1r6hWjBTBtwqQM11bbUG9nng6hNrLa2hA71mfxN0lfaDP4vm1ARZLJjns2+7rbLqI/nGG1Iu0KVu1d3HUmx/z9X/y0wI9y3E/fX9IJJAAMFbK4JASs9JNpvRh0O+lAA3O0+a62e7p8n7/9Xp9nv1oV79kEcQABHO1JjLAxKEXOL0L3C4J9SqArjStqNGkQ7csrthlCR4uzeaUw/YmGvQ8vA2ZFJiXwxXsX7FlQ5ntNZxtfvOgGQkNY59z5yfjyEWc9UvUna+5IBS5wkUwzBwFyStSK8v/7kGToAARfZNT7TUUyK8MKnw2iPRGpbU3tvRTAmYdqvBGcBITRdxVvi08uv7V/8+Ezc0LkMQpNd1XG49Vp+6s8e6JRE06T/F04ufX8dDB/3MWsiAcS9qeKhrK12QCuQECYWr3DQ2g1jPP0oDPm1Eh7cW9vu93+n/+vOf+8xtR3FL/pA4EBASSpp8VAv4v0gKIkMSgBLfSCrn8pmDs0tyxtSw8Hql/08js3d0Iim4+Gq2OWvmEut9v2sefwPBhLMM/++Sb1OUsFHOaHeNYw6zuacWz5+Kgv7rtoJMq1O/GP1fPTsS40XuKW9K0n7+Okv9UuR+s3J9W7xcLJVd3/hNO5PyihLlw9PVTE6VHbFIQpfLYCYAIIXbd8LrWLmKWnsTBL28LHFro8n56zd/q8j/2Mm/Rr2Kc+7dcq37kFcAAAmEEljDAxpiC6JksLIOGWQhkwEoUEvt61Rrs0yxHEAFpxRIoK98ukUMz0qjQcGERVLZul7N46xajjz8v5+2qPL++73WwlIMMU+cDPqrLEL1+Jbe0F1RL1/WoMgoKHIKMPEP/7kGTwgATbW1R7SUcAJaHavwRHJxHhl1nsMRigpIdqvDCdFLOZZqHLteU490MZWZS2mctUBaf4xs3RhXxwgbXANCJe8HBqJyfRYADBlupyAe43hO7Dlf3Lu3FQG3dU78+sqy/rf1+V9v/f/o9v//6Z/6B3EAAyogAUmLRoDRHTNLUqGLoQDy4dHUqWySK82GSN2csAEwaUrNyklvlNakgjGne3Zy7zLF4n/3nLeY5WdrafLt3v3aagfK4mGTDHEQSj1ZnD7emgKnW0a1lX00+Nc7MdisomqF6XHrduoDuqPbi0mznUY3/F0lvmkICp2dtdRHoLPv0DyYIH19mtDSx9MFP51BmET1+Vv2+32Xrv/0//1f9HnPd11Z+8BsADAv2MEYuYPAwQNgoDV2zF9yIAioEGEupajcpYFgDTMkuzBoIDZtvlJ5FNWCCbQO/j03qAqv6YznFVUQ2JbW9X8qIf5b87h0qfpS6tTUucUTWqb9rCZ0MnNuKV/2/oaZMueeQPCRHmu8xT7szK0aN36fS7itjk+4lKxikzDWEcSS5BFP/7gGTyAARSXNN7ZU7QKUHqjwXrIxCVc1HtlRtgkAdq/BGobJrtNHH1kl6hZoCUAABBcEgDOqfVs7jBniVYtcjR2ARTgibN63UMoW/X2/7/5QjdBSGUvQ0/p9vs9/Tbp/7f8AX+cEOAGD2lgLwXMwUkOvskK6ZKUQql5hagY3GCH3UOoVtKmNXMBUVtp2XUtNEeugUAMdc3Vx/cXaFzcsy5lbgaJkVh6dQK1i0TVhIABCGs6KmgBJZp43kTzUR1aULd//H//ojfVopBguHtR0/MXfH3pawP0tz2p0bfGScMiY/eKu/49TSCVWeVkM+t6Gp5BDAEDzeWvBZyJRYLH6+WorqO120qG700t/p/za+NDz+33e3+sSsNSYi/91je1fcqz6UEYAEPI3AFTDCkBEqbpgYWhMXO+hecQAABIFd1qGSMepYeBIMYRXuO60tpvymp8YEnhtfDUvjr6UkhU0p7vMKXXci83HudJq6H//uQZOgABHReVHtvPGo4JDnvPolfEY1zU+xpCeDEkOm8d5WMVFoDeAVbNbXjQ2BEiE1LsdbVMS6IH5ta/wKHRzEvkJNz+WCsBYPirqk4WiVeoRA8OjqnxgoIKrVau5hw9spuXqvfqpFue5oeCy/+FjDXB9HZ2DA1AFDvu6KgTIB5WJbtmIPTNXrndTU+z/K+n/Q/kv8r//V66L/ZA4AHKXRsqY0KgNWkO7iPpf5PcuowIfpUjLmUwOpnUbuWoM3gmSouvBGLzoS4ePcK1n8428FvH7e7XJqSVUKJ/EpfePfX/v6XUhbYtnlqogRTRSKj9r/quEH9f8Q9tNTYwyVq5icoKFSa6pNkMwylulEJkuP2a6eeUFjBBD026RRBQSNeUO5PjDIcvey+n+Equ3G3QCwA4Oeb1gFpDsowtQZfBwmGK1q0eGen/sRpN/XS7q/XJ23GCHAKJduMJ0DJkohggWULrpeOOoIIyol9Ww60PypjdmUkK4fwSG/OuMxFxkAQwCVFGbG4LfcUB4EJipZEET0ZqG/xWz8y9NzOmdgD7L1d//uQZOQABNxc0vtrRholgcpvBM0xEm1LT+y9FOiOBSm8gK0MHgXAHHQm9yNNuJtm0EenWa/Zrbu8g7v1uKATCqiPI+3LFRU2ox8jg7UVFs2JFxNNU5bxY80yyV95HTU/C26vCdr9axHFX1/+OWv6skmlB3AIB9y5UBafh9yASXpiEL8a7k393+7q9nR//IoxR/cwqlQaABQPiAABIiuLMybHEy8ruCMBFF8bGV/rAsYYGn3GYCMAljrhNlUVrQ4sFKmICoMrHrDuV7UqHARkrc6J30nFGVdum/aZ0RhFSgjlu/hm5c7BvZMG4Os20/krPFrjzuHybTOzrTmO7nexYtfOO/uqnOFSJph03EZamZ/jS6h1Rs96bi1rHY30Klt/W3tSZ0BAcOiIRFipqTFUdkms0n6WsHg8ECMAIAy7gIA3dZwQwR2VUhg9gTy+twrf1dJCkZEb/kmOzOFEzlX5dMVRV/2bUkyoBnAFFX1oBwZCeBgoOFlxFA1MACRLyj2USDOK/0UQ8lbcApuBxmHrNY4XNCWsYaOe/7xqg+p39KqS//uQZOaABOBk0ntMRToiwTpfIOtFFH0jPe2t+qC9ECe8NojkLWg7XOdSunLcR3DmzNt3NfYsseeXckmtMtaWhZ3uGxHZvd48tKeJbPOmHEn+RqgpnJaqgmL/++TF8S0ELZKEIdi3MYtOHwqgSkQmK3sJoekp5+RGYQDUAUDO7nADiQ8lg63XWH82pSr29Vmnq18Wr5239X70+19+AeQCD1/1b2FTNQV4CisZSN6qYRIHihwmktOetWbOMGdQetb6gPdXwx6a2/04ZkC9f03mlbSpvO7RJsvW+zzcW/v0QXrz/Vs2UnmrEvPrlXFde14RqtKvAq3jZQStV3q4E1vGONnWyMAO874sZLK1QOMYoU0QQJrpFFqHDqDIql6AsNcm+k/WUSoE4A4ueyygHtihGzTaLgNLYWce5bxln7v6v9X+u/bsbrUmK4QGgDI0/EiVED5Mr8sAiwDXY3MQCh2Yu9S6TRZIBLuo9ZgI5fp+Y1Vq3q1tDa9L6uF5qwQbXGMesC5ckQBItxgiH0P6TeuWCqzm5Gc+R2Q6qhqLE0ETLfIS//uQZNwABHJP0ftPHGgjATo/BS0xERVRT+w8b+CPhSj8FJzE2R0EOKplK4GMP+j0FuhcS+6hJMJott8l9PD5lpCRbjdFyuqg0oBQB2nusbD531Y71B4zBAzgLFJtfaAsycwLRe7YWdtd0dXinX7kdb0ydFHV/716I22BqBCdTxMlQAiJiDAREBAguO+iabxpJKCzz5MGg7BbZjkDoMhXyaxUw0fDJYm613hstV9akB4pBiQYcSMrImGdDmZygmyGaGQw7ZaEKx33t0ciJNW8+2fWLNfHfvj6hEK23Vum2GYN0eh62IRedX9x8eTSl2VjOIM4tKfPu593tr95v/6Vm1BqAjjP+60BT6pbABCtCoAvyBfW7v6Pf39Oi6tKfoUOTfR/Xb73DKA2q//SOdTISSthjxeV3clFi6NVVNIpvnRYR6h6kYeimuc5ACxcq7rzcTy5Yx5Ym9YZ211vzSanlkCILPZaHzRI456SECQXRJSWGUJpSe+sB2Eq5Wk5g0qkSYW1QASUBSndfOmf3mdyu3rTxmOBF21FZYigMm9LA6TF//uQZOuABF9Q0XtLHUoiYSpPBQczEMjpSew8z2iUhOl8MIkM0mXJZcJVmyCGAiez+5yCxpEqE1CtWEAYN6bmJvznNe++r6viif2fZ7vMceu+OxyiwVGmtsLmMg3LCBISVgW6PiO4EzUqA6EK+bs/TwFtYdeHutqthcusfpb0/8grtG3wXAUut7WwU25EUQAz1JSCiTIcK5MQukHSJsJSzEUshZOf853v9hfnYU0M0VbeQjLNC/vgoeCQMZCoGAXZfBXfCiuff/mfmf+mjqgC3BGrz7WUAVEA5meBl7agZ6dBpXYSTsiHVO9v1XO/vo/9zfVbm5zYDHB0b+6It4tcrANHTvS0LmxJAQx66qVrFLhBCSi9p6A6VqdLnAbJbFnii2o7VOORORBUDSFG2dTphFN74ZoAzqwHZAggtYiLFNjXFBkU/U9WJLff4sda3u6VRIkr7ZabhZXaFupd7/8zf25tbbM3/R5Oy2eOsfykZ5QJYFJ/v9cAAtFFNY30GJopj7hUhEPQjus7fRs2aMupImW09O4a04Mr+uRpTDUVWFkg//uAZP0ABBRK1PsIHignQSo/BOUVD3ErUewwbyifB6k8FJTMtgLKDm3EOg8aqyBQyHJ9lDAo14mlUj/gHXH2DF9tkhGnrm2G9AlWODrJjwkWWAjZyZWL+sYoiCKXF7Achm9eC5+dwvGmapLUdgzKQ9c35nu8yjVpNt5e29P5f/Lf//9Hffn0w6yqQ4A6gpt3trIA2EZua2+4UlInrJOy3jeSV9D/1in+zs79jW161ZqybGBlWONoJ0BVR5X4DTCoWv0BUAGH4NTTvr3GytVkH08EJ1W5WyaK1aSK0u8gUrQa0HNNzzWUpGkkogO5V5i4ufDqkaZR3lQ0KPL0lkO5NOS0vV5nDzWGcIKufSalzIiLT96x/pjUFRUY8nCrSKSz2uGkDr0RfjVZwKEBEa766Sg8ti3BCKPnUU1XKFH3vNHUM3bdq7UC2b/bvnKmr9SOvVYf0kE4AXrN6YEQk3GknDAukB5C8KdCF+kL1BH/+3Bk+wAD0CjT+wkcuiShGk8EIwcOgJVP7DBvKJKEaPwQjFSkJ1O+T3RpEjaOtlXBxJK33poYknzvyyWdHlViRKzLm0GBxxhUzKJ+PWy0f2nhJK0on/5mv7qZjvWyX0Mrb7N0C5Md9mlg4DZwI4aOMSeCYHeB0JYGgMWYwweGNtW+3Mj/UMwDSoqj73eygCSFWAMSn1H6lMUsLjF8fu1kG9DbhQODRt69t5BB5df0JKKeNLgfQjdyaFJUPFVoMw17o0vgt96lO0CQ8mna2uJKuDACJooPoDsaBCNlb+aKT1e0/V977v69XnFrBmJWBKopypE4CbNkzO0ddtpMyXOsS8j5ZyNNjlnF9RKF8Im8hJECprOkNunwmqf/WtG//BaARYOpWyyNAAVmAduV2LYkWJGwpU8YoqS0//uAZOmAA8ZN0vsGHSgvAAo/AAABDvzzR+wwyuDAAGi8EAAEgh62DYtyulEXC0r+0bUnZ/9hTCNDmhnFs2F4FCkvQqRCFOaOqVowu8XelLpPStqFRaq9FPGZ2TQuk0kP5LIUxznHdMGSqRqbF2UdlohkiaCVJOv1zW4Y8nL0Y3y3u1hKCZrc29FvkR89eypfuDr2Lhc5NkO5gOOZ9e/m4i9O2f3vpAGijUnD3Rg4gHGjUL2t18wJevKyyINu0ZC2/aiKUtond3iGlUobbTYAqmucp+suiQgDkTF2N1UIklrmkDraEkm1poYGw6sJEZcxIjPeZZ2qjQDMnb5tIEKPYyiX1L0TJjY5WjWa/SqN6km36284x/zszR1BZhSeJV2alRpGNaBpcAZmZ1h3jejQAKSYYl4KcqquJAgSGGz70VJfRxagaLi4NhsPniBCaOrUXSoVX4CYNJ3SRUPfyqIkAGESYIlQu91ZuBlM3Q//+4Bk5gADSEBN8wwa4iuhqd8EJg0NSQUzzBhxSJKE5nAQmDSkRko6NsEC5DChZ5+ficmWN1Qh0ksJGXmwA++PrfAiIilngznOyx1nX43+1fV0f12xgAYEUlksiIANfDRYLftWhha4wgSzEmhZh9DR5VYSwUmjwodpnQnT3IPFUIcDCQ091x95vZSmmtG/f7v/7///+upMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqAEQBf/Ev/6wVAQAAdd+Iv//////qTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7cGT4gAMMQcx55hxAMuFZnwQDAQiggSNHhGEA/5PktBAMyKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBE6A/wSADGqCAACAwACNUAAAAAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==";
let meowSoundOn = true;
let meowAudioPool = [];
let meowAudioPoolIdx = 0;
const MEOW_POOL_SIZE = 3; // lets rapid successive clicks overlap cleanly instead of cutting off

function getMeowAudioPool(){
  if(meowAudioPool.length) return meowAudioPool;
  for(let i=0;i<MEOW_POOL_SIZE;i++){
    const a = new Audio(MEOW_SOUND_SRC);
    a.preload = 'auto';
    a.volume = 0.85;
    meowAudioPool.push(a);
  }
  return meowAudioPool;
}
function playMeowSound(){
  if(!meowSoundOn) return;
  try{
    const pool = getMeowAudioPool();
    const player = pool[meowAudioPoolIdx];
    meowAudioPoolIdx = (meowAudioPoolIdx + 1) % pool.length;
    player.currentTime = 0;
    const p = player.play();
    if(p && p.catch) p.catch(()=>{ /* autoplay can be blocked before first user gesture — safe to ignore */ });
  }catch(e){ /* fail silently — sound is a nice-to-have, never blocks a calculation */ }
}

/* ---------------- RESULT RENDER ---------------- */
function renderLedger(containerId, {headline, headlineLbl, rows, canvasId}){
  const el = document.getElementById(containerId);
  el.innerHTML = `
    <h4>Result</h4>
    <div class="headline">${headline}</div>
    <div class="headline-lbl">${headlineLbl}</div>
    ${rows.map(r=>`<div class="ledger-row"><span class="lbl">${r[0]}</span><span class="fill"></span><span class="val">${r[1]}</span></div>`).join('')}
    ${canvasId ? `<div class="chart-wrap"><canvas id="${canvasId}"></canvas></div>` : ''}
    <div class="actions">
      <button class="icon-btn" onclick="Actions.copy('${containerId}')">📋 Copy</button>
      <button class="icon-btn" onclick="Actions.share('${containerId}')">🔗 Share</button>
      <button class="icon-btn" onclick="Actions.pdf('${containerId}')">⬇ PDF</button>
      <button class="icon-btn" onclick="window.print()">🖨 Print</button>
    </div>`;
  el.classList.remove('meow-result-in');
  void el.offsetWidth; // restart animation if the same panel is recalculated
  el.classList.add('meow-result-in');
  playMeowSound();
  if(typeof MeowCat !== 'undefined'){ MeowCat.attachTeaser(containerId, {headline, headlineLbl, rows}); }
}

const Actions = {
  textOf(containerId){
    const el = document.getElementById(containerId);
    const rows = [...el.querySelectorAll('.ledger-row')].map(r=>`${r.querySelector('.lbl').textContent}: ${r.querySelector('.val').textContent}`);
    return `${el.querySelector('.headline-lbl').textContent}: ${el.querySelector('.headline').textContent}\n` + rows.join('\n');
  },
  copy(containerId){
    navigator.clipboard.writeText(this.textOf(containerId)).then(()=>Toast.show('Result copied to clipboard'));
  },
  share(containerId){
    const text = this.textOf(containerId);
    if(navigator.share){ navigator.share({ title:'MeowCalculator result', text }).catch(()=>{}); }
    else { navigator.clipboard.writeText(text); Toast.show('Sharing not supported here — result copied instead'); }
  },
  pdf(containerId){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const el = document.getElementById(containerId);
    doc.setFontSize(16); doc.text('MeowCalculator', 14, 18);
    doc.setFontSize(11); doc.text(el.querySelector('.headline-lbl').textContent, 14, 30);
    doc.setFontSize(20); doc.text(el.querySelector('.headline').textContent, 14, 40);
    let y = 54;
    doc.setFontSize(11);
    el.querySelectorAll('.ledger-row').forEach(r=>{
      doc.text(r.querySelector('.lbl').textContent, 14, y);
      doc.text(r.querySelector('.val').textContent, 140, y);
      y += 9;
    });
    doc.setFontSize(9); doc.setTextColor(140);
    doc.text('Estimates only. Confirm with your bank / CA before deciding.', 14, y+10);
    doc.save('meowcalculator-result.pdf');
    Toast.show('PDF downloaded');
  }
};

/* ================= MEOW TALK — Cat Advisor with Voice, Jokes & Laugh ================= */
const MeowCat = (function(){

  const CAT_FACE = '🐈\u200d⬛'; // cute black cat

  /* ---- 5 moods ---- */
  const MOOD_META = {
    savage:{label:'😼 Savage', pitch:1.1, rate:0.98},
    smart:{label:'🤓 Smart', pitch:1.02, rate:0.95},
    friendly:{label:'😊 Friendly', pitch:1.15, rate:0.97},
    meme:{label:'😂 Meme', pitch:1.2, rate:1.0},
    sleepy:{label:'😴 Sleepy', pitch:0.92, rate:0.85}
  };
  const MOOD_KEYS = Object.keys(MOOD_META);

  /* ---- context-aware joke templates per financial topic. {amt} is swapped for the
     actual calculated figure. Jokes target the numbers/banks/market — never the user. ---- */
  const TOPIC_TEMPLATES = {
    interest:[
      '{amt} in interest? Wow… the bank just added you to their favourite customer list.',
      'The bank is charging {amt} in interest. Somewhere, a loan officer just smiled.',
      '{amt} in pure interest. That\'s basically a second EMI for the bank\'s coffee fund.',
      'Interest bill: {amt}. The bank didn\'t even have to work for that one.',
      'That\'s {amt} in interest — the bank\'s favourite kind of math.',
      '{amt} going straight to interest. The bank says thank you very much.',
      'Paying {amt} extra, just for the privilege of borrowing money. Bold industry, banking.',
      'The interest alone is {amt}. Somewhere a bank branch just got new curtains.'
    ],
    emi:[
      'Your EMI works out to {amt} a month. The bank has already marked its calendar.',
      '{amt} every month, same day, forever-ish. The bank\'s favourite kind of loyalty.',
      'That\'s a monthly EMI of {amt}. Consistent income, meet consistent outgo.',
      '{amt} a month — future-you already has a standing appointment with the bank.',
      'EMI locked at {amt}. The bank\'s calendar just got one more recurring event.',
      'That\'s {amt} a month, on time, every time. The bank barely has to lift a finger.'
    ],
    loan:[
      'A loan of {amt}? That\'s a big number to invite to dinner every month.',
      'Borrowing {amt}. The bank\'s risk team is somewhere, quietly pleased.',
      'That\'s {amt} of borrowed money now doing important adult things.',
      '{amt} borrowed — may your EMI reminders always arrive politely.',
      'A {amt} loan. Somewhere, a spreadsheet just got a lot more interesting.'
    ],
    sip:[
      'Projected to grow to {amt}. Somewhere, compound interest is doing a little dance.',
      'That SIP could turn into {amt} over time. Patience: 1, Impulse spending: 0.',
      '{amt} at maturity. Future-you is going to send present-you a thank-you note.',
      'Your money is projected to become {amt}. Not bad for showing up every month.',
      'That\'s {amt} of future value, built one small instalment at a time.'
    ],
    savings:[
      'Total maturity value: {amt}. That\'s discipline finally paying interest — literally.',
      '{amt} at the end of this. Somewhere, a piggy bank is retiring in style.',
      'That\'s {amt} saved up. Compound interest says: keep going.',
      'Ending balance: {amt}. Not bad for money that just sat there being patient.'
    ],
    gst:[
      'That\'s {amt} in GST. The government thanks you for your service.',
      '{amt} added straight to the tax kitty. Someone\'s road repair budget says hi.',
      'GST works out to {amt}. Small print, big number.',
      'That\'s {amt} going to GST — the silent partner in every purchase.'
    ],
    salary:[
      'Take-home comes to {amt}. The bank account is already planning its exit strategy.',
      'That\'s {amt} landing in the account. Rent and groceries are already waving.',
      '{amt} take-home. Adulting fee not included.',
      'Net salary: {amt}. It arrives fast and leaves faster.'
    ],
    generic:[
      'The number here is {amt}. Somewhere, a spreadsheet felt something.',
      'That works out to {amt}. Math has once again been undefeated.',
      '{amt} is the final answer. The calculator did not even break a sweat.',
      'Result: {amt}. Numbers really do talk, don\'t they.'
    ]
  };

  const MOOD_PUNCHLINES = {
    savage:['The bank must think it\'s your birthday every month.','Even compound interest is impressed.','That number just got its own zip code.','The bank sent a virtual thank-you card, probably.','This is peak banking-industry behaviour.'],
    smart:['Small tweaks here can save a surprising amount later.','Worth revisiting this number once a year.','A little discipline now changes this a lot later.','Comparing this against one more option rarely hurts.','This is exactly the kind of math that rewards patience.'],
    friendly:['Nice, you\'re clearly on top of this.','That\'s a solid number to plan around.','Good on you for actually checking this.','This looks like a healthy, manageable plan.','You\'re doing better than most people who never run these numbers.'],
    meme:['Somewhere a spreadsheet just felt something.','This number deserves its own theme song.','Plot twist: math is undefeated, again.','Even my whiskers are impressed.','I\'d frame this number if cats had walls to hang things on.'],
    sleepy:['...anyway, that\'s the number. Yawn.','Interesting... zzz... very interesting.','I almost dozed off calculating that.','Numbers are exhausting. So is this nap I\'m about to take.','Cool number. Can I nap now?']
  };

  const LAUGH_LINES = ['HAHAHAHAHA! 😹','HAHA HAHAHA! 😹','HA HA HA HA! 😹','HAHAHAHAHAHA! 😹'];
  const LAUGH_SPEECH = ['Ha ha ha ha ha!','Ha ha ha, ha ha!','Ha ha ha ha!'];

  const EASTER_EGGS = [
    {emoji:'🤧', text:'*Sneezes* Sorry — allergic to bad interest rates.'},
    {emoji:'😴', text:'Zzz... wake me when the market recovers.'},
    {emoji:'🔴', text:'Ooh, a laser pointer! Be right back—'},
    {emoji:'🐾', text:'*knocks the calculator off the table* ...it was already like that.'}
  ];

  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function seededMood(){
    const d = new Date();
    const seed = d.getFullYear()*372 + d.getMonth()*31 + d.getDate();
    return MOOD_KEYS[seed % MOOD_KEYS.length];
  }
  function parseNum(str){
    if(str==null) return null;
    const n = parseFloat(String(str).replace(/[^0-9.\-]/g,''));
    return isNaN(n) ? null : n;
  }
  function indianAmount(n){
    if(n==null || isNaN(n)) return '₹0';
    const abs = Math.abs(n);
    if(abs>=1e7) return '₹'+(n/1e7).toFixed(abs%1e7===0?0:2).replace(/\.00$/,'')+' crore';
    if(abs>=1e5) return '₹'+(n/1e5).toFixed(abs%1e5===0?0:2).replace(/\.00$/,'')+' lakh';
    return '₹'+Math.round(n).toLocaleString('en-IN');
  }

  /* Read the calculator's own result rows to figure out which financial topic this is
     about, and pull out the headline figure to build a context-aware joke around. */
  function deriveContext(headline, headlineLbl, rows){
    let interest=null, principal=null, savings=null, gst=null;
    rows.forEach(([lbl,val])=>{
      const l = lbl.toLowerCase();
      const n = parseNum(val);
      if(n==null) return;
      if(/interest/.test(l)) interest = n;
      if(/principal|loan amount|original amount/.test(l)) principal = n;
      if(/maturity|corpus|total value|estimated returns|total investment/.test(l)) savings = n;
      if(/gst/.test(l)) gst = n;
    });
    const headlineNum = parseNum(headline);
    const hl = (headlineLbl||'').toLowerCase();
    let topic='generic', amount = headlineNum;
    if(/emi/.test(hl)){ topic='emi'; amount = headlineNum; }
    else if(/gst/.test(hl) || /final amount/.test(hl)){ topic='gst'; amount = gst!=null?gst:headlineNum; }
    else if(/maturity|value at maturity/.test(hl)){ topic='sip'; amount = headlineNum; }
    else if(/take.?home|salary/.test(hl)){ topic='salary'; amount = headlineNum; }
    else if(/loan/.test(hl)){ topic='loan'; amount = principal!=null?principal:headlineNum; }
    else if(savings!=null){ topic='savings'; amount = savings; }
    // Sometimes lead with the interest figure instead, since that's usually the funnier number
    if(interest!=null && (topic==='emi'||topic==='loan') && Math.random()<0.55){ topic='interest'; amount=interest; }
    if(amount==null) amount = 0;
    return {topic, amount};
  }

  function buildJoke(topic, amount, mood){
    const templates = TOPIC_TEMPLATES[topic] || TOPIC_TEMPLATES.generic;
    const template = pick(templates);
    const amtStr = indianAmount(amount);
    const line = template.replace(/\{amt\}/g, amtStr);
    const punch = pick(MOOD_PUNCHLINES[mood]);
    return `${line} ${punch}`;
  }

  /* ---- voice (browser Web Speech API — no backend, no API keys) ----
     True "cat voice" synthesis isn't possible from the browser alone, so instead of
     brute-forcing an extreme pitch (which turns cheap/robotic system voices into a
     warped, uncanny sound) this picks a genuinely warm, higher-quality voice first and
     only nudges pitch/rate gently — the cartoon-cat character comes from voice choice
     and prosody, not from maxing out the pitch slider. Known "novelty" system voices
     (e.g. macOS's Zarvox/Whisper/Junior-style joke voices) are explicitly avoided since
     they're the main source of the sketchy, disturbing sound. */
  const MUTE_KEY = 'meow_muted_v1';
  let muted = (function(){ try{ return localStorage.getItem(MUTE_KEY)==='1'; }catch(e){ return false; } })();
  function setMuted(v){
    muted = v;
    try{ localStorage.setItem(MUTE_KEY, v?'1':'0'); }catch(e){}
    if(v && 'speechSynthesis' in window) speechSynthesis.cancel();
    if(muteBtn) muteBtn.textContent = muted ? '🔇 Unmute' : '🔊 Mute';
  }

  let cachedVoices = [];
  function refreshVoices(){
    if('speechSynthesis' in window){
      try{ cachedVoices = speechSynthesis.getVoices() || []; }catch(e){ cachedVoices = []; }
    }
  }
  if('speechSynthesis' in window){
    refreshVoices();
    speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', refreshVoices);
  }
  // Ordered from most-preferred to least — real, high-quality, warm-sounding voices
  // available across Chrome, Edge and Safari/macOS. Neural/"Online"/"Natural" voices
  // sound noticeably smoother than default local ones, so they're listed first.
  const GOOD_VOICE_HINTS = [
    'google us english', 'google uk english female', 'microsoft aria online', 'microsoft jenny online',
    'microsoft ana online', 'samantha', 'karen', 'moira', 'tessa', 'victoria', 'serena', 'kate',
    'fiona', 'susan', 'veena', 'zira', 'google'
  ];
  // Known novelty/joke or low-quality system voices — these are the ones that sound
  // warped and unsettling once pitch is adjusted, so they're never selected.
  const BAD_VOICE_HINTS = [
    'zarvox','trinoids','whisper','bells','boing','bubbles','cellos','wobble','albert','bad news',
    'bahh','deranged','hysterical','pipe organ','organ','junior','ralph','rocko','shelley',
    'superstar','bruce','fred','grandma','grandpa','eddy','flo','reed','sandy','jester'
  ];
  function pickCatVoice(){
    if(!cachedVoices.length) refreshVoices();
    if(!cachedVoices.length) return null;
    const isBad = v => BAD_VOICE_HINTS.some(hint => v.name.toLowerCase().includes(hint));
    const english = cachedVoices.filter(v=> /^en/i.test(v.lang) && !isBad(v));
    const pool = english.length ? english : cachedVoices.filter(v=> !isBad(v));
    const finalPool = pool.length ? pool : cachedVoices; // last resort: don't return nothing
    for(const hint of GOOD_VOICE_HINTS){
      const match = finalPool.find(v=> v.name.toLowerCase().includes(hint));
      if(match) return match;
    }
    // Prefer non-local (cloud/neural) voices as a quality tiebreaker, then just take the first.
    const cloud = finalPool.find(v=> v.localService===false);
    return cloud || finalPool[0];
  }

  function catify(text){
    // Light meow flavoring on the spoken line only — keeps it audibly cat-like
    // without cluttering the readable text in the speech bubble.
    return `Meow~ ${text}`;
  }

  // Tiny randomised jitter keeps repeated lines from sounding flat/robotic without
  // ever pushing pitch into the warped, "disturbing" range.
  function jitter(v, amount){ return v + (Math.random()*amount*2 - amount); }

  function speakText(text, {pitch=1.15, rate=1, onend}={}){
    let fired = false;
    const done = ()=>{ if(fired) return; fired=true; onend && onend(); };
    if(muted || !('speechSynthesis' in window)){
      setTimeout(done, Math.max(900, text.length*45)); // keep timing consistent even when silent
      return;
    }
    try{
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(catify(text));
      const voice = pickCatVoice();
      if(voice) u.voice = voice;
      // Cap pitch well below the API's max (2) — a gentle lift reads as cute; maxing it
      // out is what turns a normal voice into a warped, sketchy-sounding one.
      u.pitch = Math.min(1.45, Math.max(0.75, jitter(pitch, 0.03)));
      u.rate = Math.min(1.15, Math.max(0.75, jitter(rate, 0.02)));
      u.volume = 1;
      u.onend = done; u.onerror = done;
      speechSynthesis.speak(u);
      // Safety net only — some browsers occasionally never fire onend. Set generously long
      // so it essentially never fires before real speech genuinely finishes.
      setTimeout(done, Math.max(6000, text.length*260));
    }catch(e){ done(); }
  }

  /* ---- DOM / stage ---- */
  let overlayEl, avatarEl, bubbleEl, tagEl, moodBadgeEl, cardEl, muteBtn, faceInner, controlsWrap;
  let seq = 0; // increments per open()/another-tip so stale timers can no-op
  let current = null; // {topic, amount, mood}

  function ensureOverlay(){
    if(overlayEl) return;
    overlayEl = document.createElement('div');
    overlayEl.className = 'meow-overlay';
    overlayEl.innerHTML = `
      <div class="meow-card" role="dialog" aria-label="Meow the cat advisor">
        <button class="meow-card-close" aria-label="Close">✕</button>
        <div class="meow-stage">
          <div class="meow-avatar meow-blink">
            <span class="meow-face">${CAT_FACE}</span>
            <span class="meow-tail">〜</span>
            <span class="meow-mouth"></span>
          </div>
          <div class="meow-mood-badge"></div>
          <div class="meow-bubble"><span class="meow-intensity-tag"></span><div class="meow-bubble-text"></div></div>
          <div class="meow-controls">
            <button class="meow-ctrl-btn" data-act="another">🔄 Another tip</button>
            <button class="meow-ctrl-btn" data-act="like">❤️ I like this</button>
            <button class="meow-ctrl-btn" data-act="share">📤 Share</button>
            <button class="meow-ctrl-btn" data-act="mute">${muted?'🔇 Unmute':'🔊 Mute'}</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlayEl);
    cardEl = overlayEl.querySelector('.meow-card');
    avatarEl = overlayEl.querySelector('.meow-avatar');
    faceInner = overlayEl.querySelector('.meow-face');
    bubbleEl = overlayEl.querySelector('.meow-bubble-text');
    tagEl = overlayEl.querySelector('.meow-intensity-tag');
    moodBadgeEl = overlayEl.querySelector('.meow-mood-badge');
    controlsWrap = overlayEl.querySelector('.meow-controls');
    muteBtn = overlayEl.querySelector('[data-act="mute"]');
    overlayEl.querySelector('.meow-card-close').addEventListener('click', close);
    overlayEl.addEventListener('click', (e)=>{ if(e.target===overlayEl) close(); });
    overlayEl.querySelector('[data-act="another"]').addEventListener('click', ()=>{ if(current) playSequence(current.containerId, {topic: current.topic, amount: current.amount}); });
    overlayEl.querySelector('[data-act="share"]').addEventListener('click', shareCurrent);
    overlayEl.querySelector('[data-act="like"]').addEventListener('click', (e)=>{
      e.currentTarget.classList.add('meow-liked'); e.currentTarget.textContent='❤️ Liked!';
      Toast.show('Glad Meow could help!');
    });
    muteBtn.addEventListener('click', ()=> setMuted(!muted));
  }

  function typewrite(text, mySeq, speedMs, onDone){
    bubbleEl.innerHTML = '<span class="meow-typed"></span><span class="meow-cursor"></span>';
    const typedEl = bubbleEl.querySelector('.meow-typed');
    let i=0;
    const step = ()=>{
      if(seq!==mySeq) return;
      typedEl.textContent = text.slice(0, i+1);
      i++;
      if(i<text.length) setTimeout(step, speedMs||42);
      else {
        const c = bubbleEl.querySelector('.meow-cursor'); if(c) c.remove();
        onDone && onDone();
      }
    };
    step();
  }

  /* Runs one spoken/typed line and only advances once BOTH the typewriter has finished
     AND the browser has actually finished speaking it (or immediately, if speech is
     muted/unsupported) — this is what guarantees the voice is never cut off mid-sentence. */
  function runLine(text, mySeq, {speedMs=42, ttsOpts={}, pauseAfter=700, speechText, onAdvance}){
    let doneCount = 0;
    const need = 2;
    const maybeAdvance = ()=>{
      doneCount++;
      if(doneCount>=need){
        if(seq!==mySeq) return;
        setTimeout(()=>{ if(seq===mySeq) onAdvance(); }, pauseAfter);
      }
    };
    typewrite(text, mySeq, speedMs, maybeAdvance);
    speakText(speechText || text, {...ttsOpts, onend: maybeAdvance});
  }

  function resetStage(){
    avatarEl.className = 'meow-avatar';
    // force reflow so the entrance animation can replay
    void avatarEl.offsetWidth;
    avatarEl.classList.add('meow-blink','meow-enter');
    cardEl.classList.remove('meow-legendary');
    const likeBtn = overlayEl.querySelector('[data-act="like"]');
    likeBtn.classList.remove('meow-liked'); likeBtn.textContent='❤️ I like this';
  }

  function playSequence(containerId, ctx){
    ensureOverlay();
    const mySeq = ++seq;
    resetStage();
    if('speechSynthesis' in window) speechSynthesis.cancel();

    // 5% chance of a quick, harmless easter egg instead of the usual joke
    if(Math.random() < 0.05){
      const egg = pick(EASTER_EGGS);
      tagEl.textContent = ''; tagEl.className = 'meow-intensity-tag';
      moodBadgeEl.textContent = '✨ ' + egg.emoji;
      setTimeout(()=>{
        if(seq!==mySeq) return;
        runLine(egg.text, mySeq, {
          ttsOpts:{pitch:1.08, rate:0.96},
          pauseAfter:1200,
          onAdvance: ()=> doExit(mySeq)
        });
      }, 900);
      current = { ...ctx, containerId, mood:'meme' };
      return;
    }

    const mood = pick(MOOD_KEYS);
    current = { ...ctx, containerId, mood };
    moodBadgeEl.textContent = MOOD_META[mood].label;
    tagEl.textContent = mood; tagEl.className = 'meow-intensity-tag meow-intensity-'+mood;

    // Cat walks in, looks at the result, pauses ~1s, then speaks.
    setTimeout(()=>{
      if(seq!==mySeq) return;
      const joke = buildJoke(ctx.topic, ctx.amount, mood);
      avatarEl.classList.add('meow-talk');
      runLine(joke, mySeq, {
        speedMs:42,
        ttsOpts:{pitch:MOOD_META[mood].pitch, rate:MOOD_META[mood].rate},
        pauseAfter:600, // brief pause after speech genuinely finishes so the punchline can land
        onAdvance: ()=> doLaugh(mySeq)
      });
    }, 1050);
  }

  function doLaugh(mySeq){
    if(seq!==mySeq) return;
    avatarEl.classList.remove('meow-talk');
    avatarEl.classList.add('meow-laugh');
    const laughText = pick(LAUGH_LINES);
    runLine(laughText, mySeq, {
      speedMs:55,
      ttsOpts:{pitch:1.18, rate:1.04},
      speechText: pick(LAUGH_SPEECH),
      pauseAfter:1200, // laugh lingers ~2-3s total before the cat leaves
      onAdvance: ()=> doExit(mySeq)
    });
  }

  function doExit(mySeq){
    if(seq!==mySeq) return;
    avatarEl.classList.remove('meow-laugh');
    avatarEl.classList.add('meow-exit');
    setTimeout(()=>{
      if(seq!==mySeq) return;
      close();
    }, 950);
  }

  function open(containerId, ctx){
    playSequence(containerId, ctx);
    ensureOverlay();
    overlayEl.classList.add('open');
  }

  function close(){
    if(!overlayEl) return;
    overlayEl.classList.remove('open');
    seq++; // invalidate any pending timers
    if('speechSynthesis' in window) speechSynthesis.cancel();
  }

  function shareCurrent(){
    if(!current) return;
    const text = bubbleEl ? bubbleEl.textContent : '';
    const canvas = document.createElement('canvas');
    canvas.width = 640; canvas.height = 360;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1E56E3'; ctx.fillRect(0,0,640,360);
    ctx.fillStyle = '#ffffff';
    ctx.font = '64px sans-serif'; ctx.fillText('🐈\u200d⬛', 24, 90);
    ctx.font = '600 22px sans-serif';
    wrapText(ctx, text, 24, 150, 592, 30);
    ctx.font = '600 16px sans-serif';
    ctx.fillText('MeowCalculator.com', 24, 330);
    canvas.toBlob(async (blob)=>{
      const file = new File([blob], 'meow-joke.png', {type:'image/png'});
      if(navigator.canShare && navigator.canShare({files:[file]})){
        try{ await navigator.share({files:[file], title:'Meow roasted my finances', text}); return; }catch(e){}
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download='meow-joke.png'; a.click();
      URL.revokeObjectURL(url);
      Toast.show('Image downloaded — share it anywhere!');
    }, 'image/png');
  }
  function wrapText(ctx, text, x, y, maxWidth, lineHeight){
    const words = text.split(' ');
    let line='';
    for(let n=0;n<words.length;n++){
      const test = line + words[n] + ' ';
      if(ctx.measureText(test).width > maxWidth && n>0){
        ctx.fillText(line, x, y); line = words[n]+' '; y += lineHeight;
      } else { line = test; }
    }
    ctx.fillText(line, x, y);
  }

  /* Attach a small, non-autoplaying teaser under a freshly rendered result panel. */
  function attachTeaser(containerId, {headline, headlineLbl, rows}){
    const container = document.getElementById(containerId);
    if(!container) return;
    const old = container.querySelector('.meow-teaser');
    if(old) old.remove();
    const ctx = deriveContext(headline, headlineLbl, rows);
    const teaser = document.createElement('div');
    teaser.className = 'meow-teaser';
    teaser.innerHTML = `
      <span class="meow-teaser-face">${CAT_FACE}</span>
      <div class="meow-teaser-text"><b>🐱 Meow has something to say…</b><span>Tap to hear its take on this result.</span></div>
      <button class="meow-teaser-btn" type="button">Hear Meow</button>`;
    teaser.addEventListener('click', ()=> open(containerId, ctx));
    container.appendChild(teaser);
  }

  return { attachTeaser, open, close };
})();


/* ---------------- CALCULATORS ---------------- */
const Calc = {
  emi(){
    const P = validNum('emi_amount');
    const rate = validNum('emi_rate');
    const tenureVal = validNum('emi_tenure');
    if(P===null || rate===null || tenureVal===null) return;
    const unit = document.getElementById('emi_tenure_unit').value;
    const n = unit==='years' ? tenureVal*12 : tenureVal;
    const r = rate/12/100;
    const emi = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const totalPayment = emi*n;
    const totalInterest = totalPayment - P;
    renderLedger('emi_result', {
      headline: fmt(emi), headlineLbl: 'Monthly EMI',
      rows:[['Principal amount', fmt(P)], ['Total interest', fmt(totalInterest)], ['Total payment', fmt(totalPayment)], ['Tenure', n+' months']],
      canvasId:'emiChart'
    });
    pieChart('emiChart', P, totalInterest);
  },
  gst(){
    const mode = document.getElementById('gst_mode').value;
    const amount = validNum('gst_amount');
    const rate = validNum('gst_rate');
    if(amount===null || rate===null) return;
    let original, gstAmt, final;
    if(mode==='add'){ original=amount; gstAmt=amount*rate/100; final=amount+gstAmt; }
    else { final=amount; original=amount/(1+rate/100); gstAmt=amount-original; }
    renderLedger('gst_result', {
      headline: fmt2(final), headlineLbl: 'Final amount',
      rows:[['Original amount', fmt2(original)], ['GST amount', fmt2(gstAmt)], ['GST rate', rate+'%']]
    });
  },
  sip(){
    const freq = parseInt(document.getElementById('sip_type').value);
    const P = validNum('sip_amount');
    const rate = validNum('sip_rate');
    const years = validNum('sip_period');
    if(P===null || rate===null || years===null) return;
    const n = Math.round(years*freq);
    const i = rate/100/freq;
    const fv = i===0 ? P*n : P*((Math.pow(1+i,n)-1)/i)*(1+i);
    const invested = P*n;
    const gains = fv - invested;
    renderLedger('sip_result', {
      headline: fmt(fv), headlineLbl: 'Total value at maturity',
      rows:[['Total investment', fmt(invested)], ['Estimated returns', fmt(gains)], ['Instalments', n]],
      canvasId:'sipChart'
    });
    const labels=[], investedSeries=[], valueSeries=[];
    for(let y=1; y<=years; y++){
      const ny = y*freq;
      labels.push('Yr '+y);
      investedSeries.push(Math.round(P*ny));
      valueSeries.push(Math.round(i===0? P*ny : P*((Math.pow(1+i,ny)-1)/i)*(1+i)));
    }
    lineChart('sipChart', labels, investedSeries, valueSeries);
  },
  fd(){
    const P = validNum('fd_amount');
    const rate = validNum('fd_rate');
    if(P===null || rate===null) return;
    const t = parseFloat(document.getElementById('fd_tenure').value);
    const n = parseInt(document.getElementById('fd_compound').value);
    const maturity = P*Math.pow(1+(rate/100)/n, n*t);
    const interest = maturity - P;
    renderLedger('fd_result', {
      headline: fmt2(maturity), headlineLbl: 'Maturity amount',
      rows:[['Principal', fmt2(P)], ['Interest earned', fmt2(interest)], ['Tenure (years)', t.toFixed(2)]],
      canvasId:'fdChart'
    });
    pieChart('fdChart', P, interest);
  },
  reset(prefix){
    document.querySelectorAll('#'+prefix+'-calculator input').forEach(i=>i.value='');
    document.querySelectorAll('#'+prefix+'-calculator select').forEach(s=>s.selectedIndex=0);
    document.querySelectorAll('#'+prefix+'-calculator .chip').forEach(c=>c.classList.remove('active'));
    document.querySelectorAll('#'+prefix+'-calculator .field').forEach(f=>f.classList.remove('invalid'));
    const result = document.getElementById(prefix+'_result');
    result.innerHTML = '<h4>Result</h4><div class="empty">Fill in the details and calculate to see your results here.</div>';
  }
};

/* ---------------- FAQ ---------------- */
const FAQS = {
  emi_faq:[
    ['Does the EMI include insurance or processing fees?','No — this is the pure principal-and-interest EMI. Banks may add processing fees, insurance or other charges separately.'],
    ['What happens if I make a part-prepayment?','A part-prepayment reduces the outstanding principal, which lowers either your EMI or your tenure depending on what your lender allows.'],
    ['Is the interest rate always fixed?','Not necessarily — many loans use a floating rate that changes with market conditions, which would change your EMI over time.']
  ],
  gst_faq:[
    ['What is the difference between adding and removing GST?','Adding GST starts from a base price and adds tax on top. Removing GST starts from a final, tax-inclusive price and works out the base price.'],
    ['Which GST rate should I use?','Use the slab that applies to your goods or service — common Indian slabs are 3%, 5%, 12%, 18% and 28%.'],
    ['Can I use a custom GST rate?','Yes — type any rate directly into the rate field if it is not one of the common slabs.']
  ],
  sip_faq:[
    ['Is the expected return guaranteed?','No — mutual fund and market-linked returns are never guaranteed. The expected return is only an assumption for projection purposes.'],
    ['What is the difference between SIP and lumpsum?','A SIP spreads your investment across regular instalments, while a lumpsum is a single, one-time investment.'],
    ['Does this account for inflation?','No — the projected value is in today\'s rupee terms and does not adjust for future inflation.']
  ],
  fd_faq:[
    ['What is compounding frequency?','It is how often the bank adds earned interest back into your principal — more frequent compounding gives a slightly higher maturity value.'],
    ['Is FD interest taxable?','Yes, interest earned on a fixed deposit is added to your income and taxed as per your income tax slab, subject to TDS rules.'],
    ['Can I withdraw before maturity?','Most banks allow premature withdrawal, usually with a penalty or a reduced interest rate.']
  ]
};
Object.entries(FAQS).forEach(([id, items])=>{
  const el = document.getElementById(id);
  if(!el) return;
  items.forEach(([q,a])=>{
    const item = document.createElement('div'); item.className='faq-item';
    item.innerHTML = `<button class="faq-q" type="button">${q}<span>+</span></button><div class="faq-a"><p>${a}</p></div>`;
    item.querySelector('.faq-q').addEventListener('click', ()=>item.classList.toggle('open'));
    el.appendChild(item);
  });
});

/* ---------------- REAL-WORLD EXAMPLES ---------------- */
const EXAMPLES = {
  emi_example: "Ravi takes a ₹25,00,000 home loan at 8.5% p.a. for 20 years. Using the EMI formula, his monthly instalment works out to about <strong>₹21,700</strong>, with total interest of roughly ₹27,00,000 over the full tenure.",
  gst_example: "A shopkeeper sells a chair priced at ₹5,000 (excluding GST) and applies 18% GST. Adding GST gives a tax amount of ₹900, so the customer pays a final <strong>₹5,900</strong>.",
  sip_example: "Priya invests ₹5,000 every month in an SIP expecting 12% annual returns for 15 years. Her total investment of ₹9,00,000 is projected to grow to around <strong>₹25,25,000</strong> — an estimated gain of about ₹16,25,000.",
  fd_example: "Depositing ₹2,00,000 in a fixed deposit at 7% p.a., compounded quarterly, for 5 years grows to about <strong>₹2,82,000</strong>, earning roughly ₹82,000 in interest.",
  ppf_example: "Investing the maximum ₹1,50,000 every year in a PPF account at 7.1% for the full 15-year tenure builds a maturity corpus of roughly <strong>₹40,68,000</strong> from a total investment of ₹22,50,000.",
  rd_example: "Depositing ₹5,000 every month in a recurring deposit at 6.5% p.a. for 3 years (36 months) grows to about <strong>₹1,92,000</strong>, on a total deposit of ₹1,80,000.",
  lumpsum_example: "A one-time investment of ₹1,00,000 growing at an expected 12% annual return for 10 years is projected to be worth about <strong>₹3,10,600</strong> — a projection only, not a guaranteed return.",
  "car-loan_example": "A ₹6,00,000 car loan at 9.5% p.a. for 5 years works out to an EMI of about <strong>₹12,540</strong> a month, with total interest of roughly ₹1,52,400 over the loan.",
  "home-loan_example": "A ₹40,00,000 home loan at 8.5% p.a. for 20 years has an EMI of around <strong>₹34,700</strong>, with total interest of about ₹43,30,000 paid over the tenure.",
  "gold-loan_example": "Pledging gold for a ₹2,00,000 loan at 10% p.a. for 1 year as a standard EMI loan gives a monthly instalment of about <strong>₹17,590</strong>; as an interest-only loan, you'd pay roughly ₹1,667 a month and the ₹2,00,000 principal at the end.",
  "education-loan_example": "A ₹10,00,000 education loan at 9% p.a., with a 1-year moratorium and repaid over 10 years, could mean an EMI of about <strong>₹12,700</strong> once repayment begins — after moratorium interest is added to the principal.",
  "personal-loan_example": "A ₹3,00,000 personal loan at 13% p.a. for 3 years works out to an EMI of about <strong>₹10,165</strong> a month, with total interest of roughly ₹65,940 over the tenure.",
  salary_example: "With a CTC of ₹12,00,000 a year, after typical deductions like employer PF, professional tax and gratuity accrual, the estimated monthly take-home comes to around <strong>₹85,000–₹90,000</strong>, depending on the exact salary structure.",
  hra_example: "An employee in Mumbai with a Basic salary of ₹40,000/month, HRA of ₹20,000/month and actual rent of ₹22,000/month can claim the least of: HRA received (₹20,000), rent minus 10% of basic (₹18,000), or 50% of basic for a metro (₹20,000) — so <strong>₹18,000</strong> is exempt each month.",
  "income-tax_example": "Under the new regime, a taxable income of ₹12,50,000 after the standard deduction attracts roughly <strong>₹71,500</strong> in tax before cess, once slab-wise rates and the Section 87A rebate are applied.",
  gratuity_example: "An employee with a last-drawn Basic+DA of ₹50,000 and 12 years of service is eligible for a gratuity of (15×50,000×12)/26 ≈ <strong>₹3,46,150</strong> under the Payment of Gratuity Act.",
  nps_example: "Contributing ₹5,000 a month to NPS from age 30 to 60 at an assumed 10% return builds a corpus of roughly <strong>₹1.13 crore</strong>; taking 60% as lumpsum and annuitising the rest at 6% could generate a monthly pension of about ₹22,600.",
  inflation_example: "At 6% average annual inflation, something that costs ₹1,00,000 today would cost roughly <strong>₹1,79,000</strong> in 10 years — showing how purchasing power erodes over time.",
  retirement_example: "A 30-year-old planning to retire at 60, with ₹50,000 of monthly expenses today, may need to invest roughly <strong>₹15,000–₹20,000</strong> a month depending on the assumed pre- and post-retirement returns.",
  "mf-returns_example": "An investment of ₹1,00,000 that grew to ₹1,80,000 over 5 years has an absolute return of 80%, but a CAGR of about <strong>12.5% per year</strong> — the difference between total and annualised growth.",
  currency_example: "Converting ₹1,00,000 to US Dollars at a rate of ₹83.20 per USD gives approximately <strong>$1,201.92</strong>.",
  age_example: "Someone born on 15 August 1995 would be exactly <strong>30 years, 10 months and 19 days</strong> old on 4 July 2026.",
  percentage_example: "If your marks went from 60 to 75 out of 100, that's an increase of 15 percentage points, or a <strong>25% increase</strong> relative to your original score of 60."
};
Object.entries(EXAMPLES).forEach(([id, html])=>{
  const el = document.getElementById(id);
  if(el) el.innerHTML = `<strong>Example:</strong> ${html}`;
});

/* GST label swap */
document.getElementById('gst_mode').addEventListener('change', (e)=>{
  document.getElementById('gst_amount_lbl').textContent = e.target.value==='add' ? 'Amount (₹, excluding GST)' : 'Amount (₹, including GST)';
});
document.getElementById('sip_type').addEventListener('change', (e)=>{
  const map = {'12':'Investment per month (₹)','4':'Investment per quarter (₹)','1':'Investment per year (₹)'};
  document.getElementById('sip_amount_lbl').textContent = map[e.target.value];
});


/* ---------------- ADDITIONAL CALCULATORS (auto-added) ---------------- */
const NEW_TITLES = {
  'ppf-calculator': 'PPF Calculator — Public Provident Fund Maturity Value | MeowCalculator',
  'rd-calculator': 'RD Calculator — Recurring Deposit Maturity Value | MeowCalculator',
  'lumpsum-calculator': 'Lumpsum Calculator — Mutual Fund Lumpsum Returns | MeowCalculator',
  'car-loan-calculator': 'Car Loan EMI Calculator | MeowCalculator',
  'home-loan-calculator': 'Home Loan EMI Calculator | MeowCalculator',
  'gold-loan-calculator': 'Gold Loan EMI Calculator | MeowCalculator',
  'education-loan-calculator': 'Education Loan EMI Calculator | MeowCalculator',
  'personal-loan-calculator': 'Personal Loan EMI Calculator | MeowCalculator',
  'salary-calculator': 'Salary Calculator — CTC to In-hand Salary | MeowCalculator',
  'hra-calculator': 'HRA Calculator — HRA Tax Exemption | MeowCalculator',
  'income-tax-calculator': 'Income Tax Calculator (FY 2025-26) | MeowCalculator',
  'gratuity-calculator': 'Gratuity Calculator — Payment of Gratuity Act | MeowCalculator',
  'nps-calculator': 'NPS Calculator — National Pension Scheme Corpus | MeowCalculator',
  'inflation-calculator': 'Inflation Calculator — Future Value of Money | MeowCalculator',
  'retirement-calculator': 'Retirement Calculator — Retirement Corpus Planning | MeowCalculator',
  'mf-returns-calculator': 'Mutual Fund Returns Calculator — CAGR & Absolute Return | MeowCalculator',
  'currency-calculator': 'Currency Converter — Live Exchange Rates | MeowCalculator',
  'age-calculator': 'Age Calculator — Calculate Exact Age Online | MeowCalculator',
  'percentage-calculator': 'Percentage Calculator Online | MeowCalculator',
};
Object.assign(TITLES, NEW_TITLES);
const NEW_DESCRIPTIONS = {
  'ppf-calculator': 'Calculate your PPF maturity value and total interest earned over a 15-year (or extended) tenure, based on the current PPF interest rate.',
  'rd-calculator': 'Work out the maturity amount of your recurring deposit based on the monthly instalment, interest rate and tenure.',
  'lumpsum-calculator': 'Project the future value of a one-time mutual fund lumpsum investment using an expected annual rate of return.',
  'car-loan-calculator': 'Calculate your car loan EMI, total interest and total payment instantly based on loan amount, rate and tenure.',
  'home-loan-calculator': 'Calculate your home loan EMI, total interest payable and amortisation breakdown for any loan amount and tenure.',
  'gold-loan-calculator': 'Calculate EMI for a standard gold loan or the monthly interest for an interest-only (bullet repayment) gold loan.',
  'education-loan-calculator': 'Estimate your education loan EMI after the moratorium period, including interest accrued during your course.',
  'personal-loan-calculator': 'Calculate the EMI, total interest and total repayment for a personal loan based on amount, rate and tenure.',
  'salary-calculator': 'Convert your CTC into an estimated monthly in-hand salary after typical deductions like PF, gratuity and professional tax.',
  'hra-calculator': 'Calculate how much of your HRA is exempt from income tax based on your basic salary, HRA received and rent paid.',
  'income-tax-calculator': 'Estimate your income tax liability under the old and new tax regimes for FY 2025-26, including the Section 87A rebate.',
  'gratuity-calculator': 'Calculate your gratuity amount based on last drawn salary and years of service under the Payment of Gratuity Act.',
  'nps-calculator': 'Estimate your NPS retirement corpus, lumpsum withdrawal and expected monthly pension from the annuity portion.',
  'inflation-calculator': 'Find out how much a given amount of money today will be worth in the future after accounting for inflation.',
  'retirement-calculator': 'Estimate the retirement corpus you will need and the monthly SIP required to reach your retirement goal.',
  'mf-returns-calculator': 'Compare a mutual fund investment\'s absolute return with its CAGR (compound annual growth rate) over any holding period.',
  'currency-calculator': 'Convert Indian Rupees to and from major world currencies using live, up-to-date exchange rates.',
  'age-calculator': 'Calculate your exact age in years, months and days from your date of birth to any given date.',
  'percentage-calculator': 'Calculate percentages, percentage change and what percentage one number is of another — instantly and free.'
};
Object.assign(DESCRIPTIONS, NEW_DESCRIPTIONS);
initCalcSearch();

Object.assign(Calc, {
  ppf(){
    const P = validNum('ppf_amount');
    const rate = validNum('ppf_rate');
    const years = validNum('ppf_years', {min:15});
    if(P===null || rate===null || years===null) return;
    let balance = 0;
    const labels=[], investedSeries=[], valueSeries=[];
    let invested = 0;
    for(let y=1; y<=years; y++){
      balance = (balance + P) * (1 + rate/100);
      invested += P;
      labels.push('Yr '+y); investedSeries.push(Math.round(invested)); valueSeries.push(Math.round(balance));
    }
    const interest = balance - invested;
    renderLedger('ppf_result', {
      headline: fmt(balance), headlineLbl: 'Maturity value',
      rows:[['Total invested', fmt(invested)], ['Total interest earned', fmt(interest)], ['Tenure', years+' years']],
      canvasId:'ppfChart'
    });
    lineChart('ppfChart', labels, investedSeries, valueSeries);
  },
  rd(){
    const R = validNum('rd_amount');
    const rate = validNum('rd_rate');
    const n = validNum('rd_tenure');
    if(R===null || rate===null || n===null) return;
    const i = rate/12/100;
    const maturity = i===0 ? R*n : R*((Math.pow(1+i,n)-1)/i)*(1+i);
    const invested = R*n;
    const interest = maturity - invested;
    renderLedger('rd_result', {
      headline: fmt(maturity), headlineLbl: 'Maturity value',
      rows:[['Total deposited', fmt(invested)], ['Interest earned', fmt(interest)], ['Tenure', n+' months']],
      canvasId:'rdChart'
    });
    pieChart('rdChart', invested, interest);
  },
  lumpsum(){
    const P = validNum('lumpsum_amount');
    const rate = validNum('lumpsum_rate');
    const years = validNum('lumpsum_years');
    if(P===null || rate===null || years===null) return;
    const fv = P*Math.pow(1+rate/100, years);
    const gains = fv - P;
    renderLedger('lumpsum_result', {
      headline: fmt(fv), headlineLbl: 'Future value',
      rows:[['Amount invested', fmt(P)], ['Estimated gains', fmt(gains)], ['Investment period', years+' years']],
      canvasId:'lumpsumChart'
    });
    pieChart('lumpsumChart', P, gains);
  },
  car_loan(){
    const P = validNum('car_amount');
    const rate = validNum('car_rate');
    const tenureVal = validNum('car_tenure');
    if(P===null || rate===null || tenureVal===null) return;
    const unit = document.getElementById('car_tenure_unit').value;
    const n = unit==='years' ? tenureVal*12 : tenureVal;
    const r = rate/12/100;
    const emi = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const totalPayment = emi*n;
    const totalInterest = totalPayment - P;
    renderLedger('car-loan_result', {
      headline: fmt(emi), headlineLbl: 'Monthly EMI',
      rows:[['Principal amount', fmt(P)], ['Total interest', fmt(totalInterest)], ['Total payment', fmt(totalPayment)], ['Tenure', n+' months']],
      canvasId:'carLoanChart'
    });
    pieChart('carLoanChart', P, totalInterest);
  },
  home_loan(){
    const P = validNum('home_amount');
    const rate = validNum('home_rate');
    const tenureVal = validNum('home_tenure');
    if(P===null || rate===null || tenureVal===null) return;
    const unit = document.getElementById('home_tenure_unit').value;
    const n = unit==='years' ? tenureVal*12 : tenureVal;
    const r = rate/12/100;
    const emi = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const totalPayment = emi*n;
    const totalInterest = totalPayment - P;
    renderLedger('home-loan_result', {
      headline: fmt(emi), headlineLbl: 'Monthly EMI',
      rows:[['Principal amount', fmt(P)], ['Total interest', fmt(totalInterest)], ['Total payment', fmt(totalPayment)], ['Tenure', n+' months']],
      canvasId:'homeLoanChart'
    });
    pieChart('homeLoanChart', P, totalInterest);
  },
  gold_loan(){
    const P = validNum('gold_amount');
    const rate = validNum('gold_rate');
    const n = validNum('gold_tenure');
    if(P===null || rate===null || n===null) return;
    const r = rate/12/100;
    const emi = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const totalPayment = emi*n;
    const totalInterest = totalPayment - P;
    const interestOnly = P*r;
    renderLedger('gold-loan_result', {
      headline: fmt(emi), headlineLbl: 'Monthly EMI',
      rows:[['Principal amount', fmt(P)], ['Total interest (EMI mode)', fmt(totalInterest)], ['Interest-only monthly payment', fmt(interestOnly)], ['Tenure', n+' months']],
      canvasId:'goldLoanChart'
    });
    pieChart('goldLoanChart', P, totalInterest);
  },
  education_loan(){
    const P = validNum('edu_amount');
    const rate = validNum('edu_rate');
    const moratorium = validNum('edu_moratorium', {allowZero:true, min:0});
    const years = validNum('edu_tenure');
    if(P===null || rate===null || moratorium===null || years===null) return;
    const accrued = P * (rate/100/12) * moratorium;
    const adjustedP = P + accrued;
    const n = years*12;
    const r = rate/12/100;
    const emi = r===0 ? adjustedP/n : adjustedP*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const totalPayment = emi*n;
    const totalInterest = (totalPayment - adjustedP) + accrued;
    renderLedger('education-loan_result', {
      headline: fmt(emi), headlineLbl: 'Monthly EMI (after moratorium)',
      rows:[['Principal disbursed', fmt(P)], ['Interest accrued in moratorium', fmt(accrued)], ['Principal at EMI start', fmt(adjustedP)], ['Total interest over loan', fmt(totalInterest)]],
      canvasId:'eduLoanChart'
    });
    pieChart('eduLoanChart', P, totalInterest);
  },
  personal_loan(){
    const P = validNum('personal_amount');
    const rate = validNum('personal_rate');
    const n = validNum('personal_tenure');
    if(P===null || rate===null || n===null) return;
    const r = rate/12/100;
    const emi = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const totalPayment = emi*n;
    const totalInterest = totalPayment - P;
    renderLedger('personal-loan_result', {
      headline: fmt(emi), headlineLbl: 'Monthly EMI',
      rows:[['Principal amount', fmt(P)], ['Total interest', fmt(totalInterest)], ['Total payment', fmt(totalPayment)], ['Tenure', n+' months']],
      canvasId:'personalLoanChart'
    });
    pieChart('personalLoanChart', P, totalInterest);
  },
  salary(){
    const ctc = validNum('salary_ctc');
    const basicPct = validNum('salary_basic_pct');
    if(ctc===null || basicPct===null) return;
    const ptax = parseFloat(document.getElementById('salary_ptax').value);
    const basic = ctc*basicPct/100;
    const employerPF = basic*0.12;
    const gratuityAccrual = basic*0.0481;
    const grossSalary = ctc - employerPF - gratuityAccrual;
    const employeePF = basic*0.12;
    const netAnnual = grossSalary - employeePF - ptax;
    const monthly = netAnnual/12;
    renderLedger('salary_result', {
      headline: fmt(monthly), headlineLbl: 'Estimated monthly take-home',
      rows:[['Basic salary (monthly)', fmt(basic/12)], ['Employer PF (annual)', fmt(employerPF)], ['Employee PF (annual)', fmt(employeePF)], ['Professional tax (annual)', fmt(ptax)], ['Net annual take-home', fmt(netAnnual)]]
    });
  },
  hra(){
    const basic = validNum('hra_basic');
    const received = validNum('hra_received');
    const rent = validNum('hra_rent', {allowZero:true, min:0});
    if(basic===null || received===null || rent===null) return;
    const city = document.getElementById('hra_city').value;
    const pct = city==='metro' ? 0.5 : 0.4;
    const a = received;
    const b = Math.max(0, rent - 0.10*basic);
    const c = pct*basic;
    const exemption = Math.max(0, Math.min(a,b,c));
    const taxable = received - exemption;
    renderLedger('hra_result', {
      headline: fmt(exemption), headlineLbl: 'Exempt HRA (monthly)',
      rows:[['HRA received', fmt(received)], ['Rent paid', fmt(rent)], ['Taxable HRA (monthly)', fmt(taxable)], ['Annual exempt HRA', fmt(exemption*12)]]
    });
  },
  income_tax(){
    const income = validNum('tax_income');
    if(income===null) return;
    const regime = document.getElementById('tax_regime').value;
    let stdDeduction, slabs, rebateLimit, rebateMax;
    if(regime==='new'){
      stdDeduction = 75000;
      slabs = [[400000,0],[400000,0.05],[400000,0.10],[400000,0.15],[400000,0.20],[400000,0.25],[Infinity,0.30]];
      rebateLimit = 1200000; rebateMax = 60000;
    } else {
      stdDeduction = 50000;
      slabs = [[250000,0],[250000,0.05],[500000,0.20],[Infinity,0.30]];
      rebateLimit = 500000; rebateMax = 12500;
    }
    const taxable = Math.max(0, income - stdDeduction);
    let remaining = taxable, tax = 0;
    for(const [width, rate] of slabs){
      const slice = Math.min(remaining, width);
      if(slice<=0) break;
      tax += slice*rate;
      remaining -= slice;
    }
    let rebate = 0;
    if(taxable <= rebateLimit){ rebate = Math.min(tax, rebateMax); }
    const taxAfterRebate = tax - rebate;
    const cess = taxAfterRebate*0.04;
    const totalTax = taxAfterRebate + cess;
    const netIncome = income - totalTax;
    renderLedger('income-tax_result', {
      headline: fmt(totalTax), headlineLbl: 'Estimated total tax payable',
      rows:[['Taxable income', fmt(taxable)], ['Tax before rebate', fmt(tax)], ['Section 87A rebate', fmt(rebate)], ['Health & education cess (4%)', fmt(cess)], ['Estimated net annual income', fmt(netIncome)]],
      canvasId:'incomeTaxChart'
    });
    pieChart('incomeTaxChart', netIncome, totalTax);
  },
  gratuity(){
    const basic = validNum('gratuity_basic');
    const years = validNum('gratuity_years');
    if(basic===null || years===null) return;
    const wholeYears = Math.floor(years);
    const fraction = years - wholeYears;
    const roundedYears = fraction >= 0.5 ? wholeYears+1 : wholeYears;
    let gratuityAmt = (basic*15/26)*roundedYears;
    const cap = 2000000;
    const capped = gratuityAmt > cap;
    gratuityAmt = Math.min(gratuityAmt, cap);
    renderLedger('gratuity_result', {
      headline: fmt(gratuityAmt), headlineLbl: 'Estimated gratuity amount',
      rows:[['Years counted', roundedYears+' years'], ['Statutory cap applied', capped ? 'Yes (₹20,00,000)' : 'No'], ['Last drawn Basic + DA', fmt(basic)]]
    });
  },
  nps(){
    const P = validNum('nps_amount');
    const rate = validNum('nps_rate');
    const years = validNum('nps_years');
    const annuityPct = validNum('nps_annuity_pct', {min:40, max:100});
    const annuityRate = validNum('nps_annuity_rate');
    if(P===null || rate===null || years===null || annuityPct===null || annuityRate===null) return;
    const i = rate/12/100;
    const n = years*12;
    const corpus = i===0 ? P*n : P*((Math.pow(1+i,n)-1)/i)*(1+i);
    const annuityCorpus = corpus*annuityPct/100;
    const lumpsum = corpus - annuityCorpus;
    const monthlyPension = (annuityCorpus*annuityRate/100)/12;
    renderLedger('nps_result', {
      headline: fmt(corpus), headlineLbl: 'Total corpus at retirement',
      rows:[['Lumpsum withdrawal', fmt(lumpsum)], ['Annuity investment', fmt(annuityCorpus)], ['Estimated monthly pension', fmt(monthlyPension)]],
      canvasId:'npsChart'
    });
    pieChart('npsChart', lumpsum, annuityCorpus);
  },
  inflation(){
    const P = validNum('inflation_amount');
    const rate = validNum('inflation_rate');
    const years = validNum('inflation_years');
    if(P===null || rate===null || years===null) return;
    const future = P*Math.pow(1+rate/100, years);
    const labels=[], todaySeries=[], futureSeries=[];
    for(let y=1;y<=years;y++){
      labels.push('Yr '+y);
      todaySeries.push(Math.round(P));
      futureSeries.push(Math.round(P*Math.pow(1+rate/100,y)));
    }
    renderLedger('inflation_result', {
      headline: fmt(future), headlineLbl: `Future cost of today's ${fmt(P)}`,
      rows:[["Today's amount", fmt(P)], ['Inflation rate', rate+'%'], ['Years', years]],
      canvasId:'inflationChart'
    });
    lineChart('inflationChart', labels, todaySeries, futureSeries);
  },
  retirement(){
    const curAge = validNum('retire_current_age');
    const retAge = validNum('retire_age');
    const lifeExp = validNum('retire_life_exp');
    const expense = validNum('retire_expense');
    const inflation = validNum('retire_inflation');
    const preRate = validNum('retire_pre_rate');
    const postRate = validNum('retire_post_rate');
    if([curAge,retAge,lifeExp,expense,inflation,preRate,postRate].some(v=>v===null)) return;
    if(retAge<=curAge || lifeExp<=retAge){
      Toast.show('Please check your ages — retirement age must be after current age, and life expectancy after retirement age.');
      return;
    }
    const yearsToRetirement = retAge - curAge;
    const yearsInRetirement = lifeExp - retAge;
    const futureMonthlyExpense = expense*Math.pow(1+inflation/100, yearsToRetirement);
    const futureAnnualExpense = futureMonthlyExpense*12;
    const r = postRate/100, g = inflation/100;
    let corpus;
    if(Math.abs(r-g) < 1e-6){
      corpus = futureAnnualExpense*yearsInRetirement/(1+r);
    } else {
      corpus = futureAnnualExpense * (1 - Math.pow((1+g)/(1+r), yearsInRetirement)) / (r-g);
    }
    const i = preRate/100/12, nm = yearsToRetirement*12;
    const sipFactor = i===0 ? nm : ((Math.pow(1+i,nm)-1)/i)*(1+i);
    const requiredSIP = corpus / sipFactor;
    renderLedger('retirement_result', {
      headline: fmt(corpus), headlineLbl: 'Retirement corpus required',
      rows:[['Years to retirement', yearsToRetirement], ['Future monthly expense at retirement', fmt(futureMonthlyExpense)], ['Required monthly SIP from today', fmt(requiredSIP)], ['Years the corpus must last', yearsInRetirement]]
    });
  },
  mf_returns(){
    const initial = validNum('mf_initial');
    const current = validNum('mf_current', {allowZero:true, min:0});
    const years = validNum('mf_years');
    if(initial===null || current===null || years===null) return;
    const gain = current - initial;
    const absoluteReturn = (gain/initial)*100;
    const cagr = (Math.pow(current/initial, 1/years) - 1)*100;
    renderLedger('mf-returns_result', {
      headline: cagr.toFixed(2)+'%', headlineLbl: 'Annualised return (CAGR)',
      rows:[['Absolute return', absoluteReturn.toFixed(2)+'%'], ['Gain / loss amount', fmt(gain)], ['Holding period', years+' years']],
      canvasId:'mfReturnsChart'
    });
    pieChart('mfReturnsChart', initial, Math.max(gain,0));
  },
  async currency(){
    const amount = validNum('currency_amount');
    if(amount===null) return;
    const from = document.getElementById('currency_from').value;
    const to = document.getElementById('currency_to').value;
    const FALLBACK_RATES_USD = { INR:83.5, USD:1, EUR:0.92, GBP:0.79, AED:3.67, SGD:1.34, AUD:1.52, JPY:151, CAD:1.36 };
    const el = document.getElementById('currency_result');
    el.innerHTML = '<h4>Result</h4><div class="empty">Fetching live exchange rate…</div>';
    let rate, live = true;
    try{
      const res = await fetch('https://open.er-api.com/v6/latest/'+from);
      const data = await res.json();
      if(data && data.rates && data.rates[to]){ rate = data.rates[to]; }
      else { throw new Error('missing rate'); }
    } catch(e){
      live = false;
      rate = FALLBACK_RATES_USD[to] / FALLBACK_RATES_USD[from];
    }
    const converted = amount*rate;
    renderLedger('currency_result', {
      headline: to+' '+Number(converted).toLocaleString('en-IN', {maximumFractionDigits:2}), headlineLbl: 'Converted amount',
      rows:[['Exchange rate', '1 '+from+' = '+rate.toFixed(4)+' '+to], ['Rate source', live ? 'Live rate' : 'Stored approximate rate (offline)'], ['Amount', from+' '+fmt2(amount).replace('₹','')]]
    });
  },
  age(){
    const dobEl = document.getElementById('age_dob');
    const wrap = document.getElementById('age_dob_f');
    if(!dobEl.value){ wrap.classList.add('invalid'); return; }
    const dob = new Date(dobEl.value);
    const today = new Date();
    if(dob > today){ wrap.classList.add('invalid'); return; }
    wrap.classList.remove('invalid');
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
    if(days < 0){
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if(months < 0){ months += 12; years -= 1; }
    const totalDays = Math.floor((today - dob) / 86400000);
    let nextBday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if(nextBday < today) nextBday = new Date(today.getFullYear()+1, dob.getMonth(), dob.getDate());
    const daysToBday = Math.ceil((nextBday - today) / 86400000);
    renderLedger('age_result', {
      headline: years+' yrs '+months+' mo '+days+' d', headlineLbl: 'Your exact age',
      rows:[['Total days lived', totalDays.toLocaleString('en-IN')], ['Days to next birthday', daysToBday], ['Date of birth', dobEl.value]]
    });
  },
  percentage(){
    const mode = document.getElementById('pct_mode').value;
    const x = validNum('pct_x', {allowZero:true});
    const y = validNum('pct_y', {allowZero:true});
    if(x===null || y===null) return;
    let headline, headlineLbl, rows;
    if(mode==='of'){
      const result = (x/100)*y;
      headline = Number(result).toLocaleString('en-IN', {maximumFractionDigits:2});
      headlineLbl = `${x}% of ${y}`;
      rows = [['Value X', x], ['Value Y', y]];
    } else if(mode==='iswhat'){
      const result = (x/y)*100;
      headline = result.toFixed(2)+'%';
      headlineLbl = `X is what percent of Y`;
      rows = [['Value X', x], ['Value Y', y]];
    } else {
      const result = ((y-x)/x)*100;
      headline = (result>=0? '+':'')+result.toFixed(2)+'%';
      headlineLbl = result>=0 ? 'Percentage increase' : 'Percentage decrease';
      rows = [['From (X)', x], ['To (Y)', y]];
    }
    renderLedger('percentage_result', { headline, headlineLbl, rows });
  },
});

const NEW_FAQS = {
  'ppf_faq': [["What is the minimum and maximum PPF tenure?", "The PPF account has a minimum lock-in of 15 years, extendable in blocks of 5 years after maturity."], ["Is the PPF interest rate fixed?", "No — the government revises the PPF interest rate every quarter, so your actual returns may vary from this estimate."], ["Is PPF interest taxable?", "No, PPF falls under the EEE (Exempt-Exempt-Exempt) category — contributions, interest and maturity proceeds are all tax-free."]],
  'rd_faq': [["How is RD interest compounded?", "Most banks compound RD interest quarterly, though this calculator uses a monthly-compounding approximation that closely matches most bank calculators."], ["Is RD interest taxable?", "Yes, interest earned on a recurring deposit is taxable as per your income tax slab, and TDS may apply above the prescribed threshold."], ["Can I withdraw an RD before maturity?", "Most banks allow premature withdrawal, usually with a penalty or a lower interest rate than originally offered."]],
  'lumpsum_faq': [["Is the expected return guaranteed?", "No — market-linked investments never guarantee returns. This is only a projection based on the rate you enter."], ["How is lumpsum different from SIP?", "A lumpsum is a single, one-time investment, while a SIP spreads your investment across regular instalments."], ["Does this account for taxes on gains?", "No, this shows the gross projected value before any capital gains tax that may apply when you withdraw."]],
  'car-loan_faq': [["Does this include the down payment?", "No — enter only the amount you are borrowing (loan amount), not the full car price."], ["Do car loan rates differ from home loan rates?", "Yes, car loans are usually unsecured against the vehicle and often carry a slightly higher rate than home loans."], ["Can I prepay a car loan?", "Most lenders allow part-prepayment or foreclosure, sometimes with a small penalty — check your loan agreement."]],
  'home-loan_faq': [["Does this include processing fees or stamp duty?", "No — this is a pure principal-and-interest EMI. Processing fees, stamp duty and registration charges are separate one-time costs."], ["Is home loan interest tax deductible?", "Under the old tax regime, interest and principal repayment can qualify for deductions under Sections 24(b) and 80C — check current rules or ask a CA."], ["What if my home loan has a floating rate?", "A floating rate changes with market conditions, so your EMI or tenure may be revised periodically by your lender."]],
  'gold-loan_faq': [["What is an interest-only gold loan?", "Some lenders let you pay only the monthly interest and repay the principal as a lump sum (bullet payment) at the end of tenure — we show this alongside the standard EMI."], ["What happens if I default on a gold loan?", "The lender can auction the pledged gold to recover the outstanding amount, since it is a secured loan."], ["Are gold loan rates lower than personal loans?", "Usually yes, since gold loans are secured against collateral, they typically carry lower rates than unsecured personal loans."]],
  'education-loan_faq': [["What is a moratorium period?", "It's the period during your course (plus a grace period, often 6-12 months) when you don't have to start repaying — interest may still accrue on the loan."], ["Does interest accrue during the moratorium?", "Yes, in most cases simple interest accrues during the moratorium and gets added to your principal before EMIs begin."], ["Is education loan interest tax deductible?", "Yes, under Section 80E, the entire interest paid on an education loan is deductible from taxable income for up to 8 years, with no upper limit."]],
  'personal-loan_faq': [["Why are personal loan rates higher than home loans?", "Personal loans are usually unsecured (no collateral), so lenders charge a higher rate to offset the added risk."], ["Does this include processing fees?", "No — this is a pure EMI on the principal. Lenders typically deduct a one-time processing fee before disbursal."], ["Can I foreclose a personal loan early?", "Most lenders allow foreclosure after a lock-in period, often with a prepayment penalty of 2-5% of the outstanding amount."]],
  'salary_faq': [["Why is my take-home lower than my CTC?", "CTC includes employer PF contribution, gratuity accrual and other benefits that never reach your bank account as cash — only the net salary does."], ["Does this include income tax (TDS)?", "No — this estimates take-home before income tax. Use the Income Tax Calculator separately to estimate your TDS and factor it in."], ["Why do I need the Basic salary percentage?", "Many salary components — PF, gratuity, and often HRA — are calculated as a percentage of Basic, so it drives most deductions."]],
  'hra_faq': [["Is HRA exemption available under the new tax regime?", "No, HRA exemption can only be claimed under the old tax regime — the new regime does not allow this deduction."], ["Do I need rent receipts to claim HRA?", "Yes, and if annual rent exceeds ₹1 lakh, your landlord's PAN is also required for the exemption claim."], ["What if I don't pay rent but receive HRA?", "If you don't pay rent, your entire HRA received becomes fully taxable — there's no exemption without actual rent payment."]],
  'income-tax_faq': [["Which regime should I choose?", "The new regime has lower rates but no deductions (HRA, 80C, etc.); the old regime allows deductions but has higher rates. Compare both using this calculator based on your actual deductions."], ["Is this calculation exact?", "This is a simplified estimate using FY 2025-26 slabs, standard deduction and Section 87A rebate. It excludes surcharge (applicable above ₹50 lakh) and other special-rate incomes — consult a CA for a precise figure."], ["What is the Section 87A rebate?", "It's a rebate that brings tax liability to zero for taxable income up to ₹12 lakh (new regime) or ₹5 lakh (old regime), after the standard deduction."]],
  'gratuity_faq': [["Who is eligible for gratuity?", "Employees who have completed 5 or more years of continuous service with the same employer are generally eligible under the Payment of Gratuity Act, 1972."], ["How is a part year rounded?", "If the service in the final year exceeds 6 months, it is rounded up to a full year; otherwise it is dropped."], ["Is gratuity taxable?", "Gratuity received is exempt from tax up to ₹20 lakh for employees covered under the Act; any amount above that is taxable."]],
  'nps_faq': [["How much of my NPS corpus can I withdraw as lumpsum?", "At retirement, up to 60% of the accumulated corpus can be withdrawn tax-free as a lumpsum; the remaining minimum 40% must go into an annuity."], ["Is the monthly pension guaranteed?", "No — the pension depends on the annuity rate offered by the insurer at the time of purchase, which can vary from the assumption used here."], ["Are NPS returns guaranteed?", "No, NPS returns are market-linked (for equity and corporate debt schemes), so actual returns will vary from the assumed rate."]],
  'inflation_faq': [["What inflation rate should I use?", "India's long-term average retail inflation has generally been in the 5-7% range, but you can enter any assumption you'd like to test."], ["What does this number tell me?", "It tells you how much money you'd need in the future to have the same purchasing power that your entered amount has today."], ["Does this account for taxes on investment returns?", "No — this purely models the erosion of purchasing power due to inflation, not investment growth or taxes."]],
  'retirement_faq': [["Why do pre- and post-retirement returns differ?", "Before retirement you can typically invest more aggressively (higher expected return); after retirement, portfolios usually shift to safer, lower-return instruments."], ["Does this account for existing savings?", "No — this estimates the total corpus and monthly SIP needed from today, assuming you start with zero. Subtract your existing retirement savings' future value separately."], ["Is this a guarantee I'll have enough?", "No — it's a planning estimate based on your assumptions. Actual inflation, returns and life expectancy will vary, so review and adjust your plan periodically."]],
  'mf-returns_faq': [["What is the difference between absolute return and CAGR?", "Absolute return is the total percentage gain over the whole period, while CAGR (compound annual growth rate) shows the equivalent annualised growth rate — useful for comparing investments over different time periods."], ["Does this work for SIP investments?", "No — this compares a single initial value to a single current value. Use the SIP Calculator to project a series of regular instalments instead."], ["Is CAGR the same as actual year-on-year return?", "Not necessarily — CAGR smooths out volatility into a single average annual rate; actual yearly returns may have been higher or lower in different years."]],
  'currency_faq': [["How current are these rates?", "Rates are fetched live from a free public exchange-rate API when you click Convert. If the live fetch fails (e.g. no internet), a stored approximate rate is used instead and clearly labelled."], ["Can I use this for bank transfers?", "No — banks and remittance services add their own margin and fees on top of the market rate, so use this only as a rough reference, not for actual transactions."], ["Why is my converted amount slightly different from my bank's rate?", "Banks and card networks apply a markup over the interbank/market rate shown here, so a small difference is expected."]],
  'age_faq': [["How is the age calculated?", "It's calculated as the exact calendar difference between today and your date of birth, in whole years, months and days."], ["Does this account for leap years?", "Yes, the calculation uses actual calendar dates, so leap years are automatically accounted for."], ["Can I calculate age as of a different date?", "This calculator uses today's date. For a different reference date, temporarily change your device's date or use a spreadsheet with a fixed date."]],
  'percentage_faq': [["What does 'X is what % of Y' mean?", "It tells you what percentage the first number (X) represents of the second number (Y) — for example, 25 is 50% of 50."], ["What does percentage change mean?", "It shows how much a value has increased or decreased from X to Y, expressed as a percentage — a positive result means an increase, negative means a decrease."], ["Can I use decimals?", "Yes, all fields accept decimal values for more precise calculations."]],
};
Object.entries(NEW_FAQS).forEach(([id, items])=>{
  const el = document.getElementById(id);
  if(!el) return;
  items.forEach(([q,a])=>{
    const item = document.createElement('div'); item.className='faq-item';
    item.innerHTML = `<button class="faq-q" type="button">${q}<span>+</span></button><div class="faq-a"><p>${a}</p></div>`;
    item.querySelector('.faq-q').addEventListener('click', ()=>item.classList.toggle('open'));
    el.appendChild(item);
  });
});

/* ---------------- ADVANTAGES & TIPS (expanded original content) ---------------- */
const ADV_TIPS = {
  emi: {
    adv: ["Instantly compare how tenure and interest rate each change your monthly outgo, without opening a spreadsheet.", "See total interest paid over the loan, which is often more revealing than the EMI figure alone.", "Works for any lender or loan type — banks, NBFCs or informal lenders — since it uses the standard reducing-balance EMI formula.", "No sign-up or personal loan-application data required, unlike most bank EMI calculators."],
    tips: ["A slightly shorter tenure often costs only a little more per month but saves a large amount in total interest — try a few tenures before deciding.", "Round up your EMI payment or make an annual part-prepayment to cut years off a long loan.", "Compare EMIs across 2-3 lenders' quoted rates before signing — even 0.5% makes a real difference over 20 years.", "Factor in processing fees and insurance add-ons separately; this calculator shows only principal and interest."]
  },
  gst: {
    adv: ["Switch instantly between adding GST to a base price and extracting GST from an inclusive price — most tools only do one direction.", "Covers every standard Indian GST slab (3%, 5%, 12%, 18%, 28%) in one place.", "Useful for shopkeepers, freelancers and accountants who need a quick invoice check without opening billing software.", "Shows the exact tax amount separately from the final price, useful for bookkeeping."],
    tips: ["Double-check which slab applies to your specific goods or service on the official GST portal — rates vary by HSN/SAC code.", "When quoting customers, always clarify whether your listed price is GST-inclusive or exclusive to avoid billing disputes.", "For interstate sales, remember GST is usually split as IGST rather than CGST+SGST — the total tax amount stays the same either way.", "Keep this calculator handy while reconciling GSTR filings against your invoice register."]
  },
  sip: {
    adv: ["Visualises how small, regular investments compound into a large corpus over long horizons.", "Supports monthly, quarterly and yearly SIP frequencies, not just the common monthly case.", "Helps you reverse-engineer the SIP amount needed for a target corpus by trying different inputs.", "Free of the account-opening prompts that most fund-house SIP calculators push you through."],
    tips: ["Starting a SIP even a few years earlier usually matters more than chasing a slightly higher return rate — try the calculator with different start dates to see the effect.", "Use a conservative return assumption (10-12%) rather than an optimistic one to avoid under-saving for your goal.", "Increase your SIP amount by 5-10% every year (a 'step-up' SIP) to keep pace with rising income and inflation.", "Remember this is a projection, not a promise — actual mutual fund returns fluctuate with the market."]
  },
  fd: {
    adv: ["Models monthly, quarterly, half-yearly and yearly compounding separately, matching how banks actually calculate FD interest.", "Lets you quickly compare maturity value across different tenures and rates before booking a deposit.", "Shows total interest earned clearly, useful when estimating your annual taxable interest income.", "No branch visit or login required to get an estimate."],
    tips: ["Interest earned on an FD is fully taxable at your income tax slab rate — factor this into your real, post-tax return.", "Banks may deduct TDS if your total FD interest across accounts exceeds the prescribed annual threshold — submit Form 15G/15H if eligible to avoid this.", "Laddering FDs across multiple maturities (rather than one large FD) can improve liquidity without sacrificing much return.", "Compare quarterly-compounding FD rates across a few banks — small compounding differences add up on larger amounts."]
  },
  ppf: {
    adv: ["Projects your full 15-year PPF maturity value from a single yearly contribution figure.", "Reflects PPF's actual annual (not monthly) compounding convention used by the government.", "Handy for comparing PPF against other tax-saving instruments like ELSS or NPS at a glance.", "Requires no PPF account login — useful for planning before you even open an account."],
    tips: ["Deposit before 5th April each year (or the 5th of the month) to earn interest on that month's balance — timing your contribution earlier in the year noticeably improves the final corpus.", "PPF's EEE tax status (contribution, interest and maturity all tax-free) makes it one of the most tax-efficient long-term debt options available in India.", "You can extend a matured PPF account in blocks of 5 years, with or without further contributions — plan ahead for this choice.", "Remember the government revises the PPF rate quarterly, so treat this projection as an estimate, not a guarantee."]
  },
  rd: {
    adv: ["Estimates recurring deposit maturity value using a monthly-compounding approximation close to what most banks quote.", "Useful for comparing an RD against an equivalent SIP in a debt fund for a short-term goal.", "Works for any bank or post-office RD scheme since it uses the standard RD formula, not a bank-specific tool.", "Instant results without needing to log into net banking."],
    tips: ["RDs suit short, fixed savings goals (1-5 years) where you want a guaranteed, low-risk return rather than market-linked growth.", "Missing an instalment usually attracts a small penalty — set up an auto-debit to avoid this.", "Interest on RDs is taxable and TDS may apply, similar to fixed deposits — plan for this in your post-tax calculations.", "Compare RD rates across banks and post office schemes, since post office RDs sometimes offer a marginally better rate."]
  },
  lumpsum: {
    adv: ["Projects the growth of a one-time investment using compound growth, ideal for bonuses, maturity payouts or inheritance.", "Lets you quickly test how different expected-return assumptions change your outcome.", "Complements the SIP calculator for comparing a lumpsum vs staggered investment strategy.", "No fund-house login needed for a rough projection."],
    tips: ["If you're investing a large lumpsum in equity, consider staggering it over 3-6 months (STP) to reduce the risk of investing right before a market dip.", "Use a realistic, long-term average return rather than a recent bull-market return when projecting equity lumpsum growth.", "Revisit and rebalance a lumpsum investment periodically rather than leaving it untouched for the entire tenure.", "Remember this projection excludes exit load, expense ratio and capital gains tax, all of which reduce your real return."]
  },
  'car-loan': {
    adv: ["Gives a lender-agnostic EMI estimate before you walk into a dealership or bank, improving your negotiating position.", "Shows total interest cost, which helps you judge whether a longer tenure 'low EMI' offer is actually more expensive overall.", "Useful for comparing a bank loan against a dealer/NBFC finance scheme on equal terms.", "Quick enough to re-run with different down payments to see the EMI impact instantly."],
    tips: ["A larger down payment reduces both your EMI and total interest paid — even 10-15% extra upfront makes a visible difference.", "Car loan interest rates are usually higher than home loan rates since the vehicle depreciates quickly as collateral — shop around before accepting the dealer's in-house financing.", "Keep tenure under 5 years where possible; cars lose value faster than a long loan gets paid off.", "Factor in insurance, registration and extended warranty costs separately — this calculator covers only the loan EMI."]
  },
  'home-loan': {
    adv: ["Handles large principal amounts and long tenures (up to 30 years) accurately using the standard reducing-balance formula.", "Shows total interest paid over the full tenure, which on a home loan is often larger than the principal itself.", "Useful for testing how extra tenure or a rate change affects affordability before you lock in a loan.", "No CIBIL check or personal data required for a quick estimate."],
    tips: ["Even a small extra monthly payment (prepayment) early in the loan can cut years off the tenure and save lakhs in interest, since home loan interest is front-loaded.", "Under the old tax regime, home loan interest and principal repayment can qualify for deductions under Sections 24(b) and 80C — check current rules with a CA.", "If you have a floating-rate loan, re-run this calculator whenever your bank revises the rate to see the updated EMI or tenure impact.", "Compare the total cost (EMI × tenure) across lenders, not just the advertised interest rate, since processing fees and other charges vary."]
  },
  'gold-loan': {
    adv: ["Covers both standard EMI and interest-only (bullet repayment) gold loan structures in a single tool.", "Useful for quickly comparing a gold loan against a personal loan for short-term liquidity needs.", "Shows the monthly cash outflow difference between the two repayment structures clearly.", "No need to visit a lender to get a ballpark estimate before pledging gold."],
    tips: ["An interest-only gold loan keeps monthly payments low but requires you to have the full principal ready at the end of tenure — plan for that lump sum in advance.", "Gold loans are usually approved faster and at lower rates than personal loans since they're secured against collateral — but you risk losing the pledged gold on default.", "Check the loan-to-value (LTV) ratio your lender offers, since RBI caps this and it affects how much you can borrow against your gold's value.", "Compare processing fees and valuation charges across lenders, not just the headline interest rate."]
  },
  'education-loan': {
    adv: ["Accounts for the moratorium period (course duration plus grace period) that most other loan calculators ignore.", "Shows how moratorium interest gets added to your principal before EMIs begin, which is a common source of confusion.", "Useful for students and parents comparing loan offers from different banks before applying.", "Free to use while researching, unlike bank pre-approval tools that require documentation."],
    tips: ["Paying at least the interest during the moratorium period (if you can afford to) prevents it from compounding into your principal and keeps your eventual EMI lower.", "Under Section 80E, the entire interest paid on an education loan is tax-deductible for up to 8 years with no upper limit — a benefit not available on most other loan types.", "Public sector banks often offer better education loan rates and longer moratoriums for recognised institutions — compare a few before choosing a lender.", "Check whether a moratorium-period interest subsidy scheme applies to your family's income bracket, which can meaningfully reduce your total cost."]
  },
  'personal-loan': {
    adv: ["Gives a quick, lender-agnostic estimate before you compare offers, since personal loan rates vary widely between lenders.", "Shows total interest cost clearly, which matters more on personal loans given their typically higher rates.", "Useful for judging whether a personal loan or a cheaper secured alternative (like a gold loan) suits your need better.", "No credit check or documentation needed just to see an estimate."],
    tips: ["Personal loans are unsecured, so rates are meaningfully higher than home or car loans — borrow only what you need and repay as fast as comfortably possible.", "Watch out for processing fees (often 1-3% of the loan amount) which aren't reflected in the EMI figure alone.", "Check the prepayment/foreclosure penalty before signing — many lenders charge 2-5% of the outstanding amount for early closure.", "A higher credit score typically unlocks a meaningfully lower rate — checking and improving your score before applying can be worth the wait."]
  },
  salary: {
    adv: ["Breaks down how a CTC figure translates into real monthly take-home pay, which most offer letters don't clearly show.", "Accounts for common deductions like employer PF, gratuity accrual and professional tax in one estimate.", "Useful for comparing two job offers with different CTC structures on an apples-to-apples, in-hand basis.", "Runs instantly without needing your actual payslip or HR system access."],
    tips: ["Always ask for a full salary breakup (not just CTC) when evaluating a job offer — the same CTC can result in very different take-home pay depending on the structure.", "Remember this estimate excludes income tax (TDS) — use the Income Tax Calculator alongside this one for a fuller picture.", "A higher Basic salary usually means higher PF and gratuity contributions, which reduce take-home pay now but build retirement savings.", "Negotiate flexible benefits (like meal cards or LTA) where possible, since these can be more tax-efficient than an equivalent cash allowance."]
  },
  hra: {
    adv: ["Applies the correct 'least of three' HRA exemption rule automatically, which is easy to get wrong by hand.", "Accounts for metro vs non-metro city status, which changes the exemption percentage.", "Useful for salaried employees deciding how much rent receipt documentation to gather before tax filing.", "Gives an instant estimate without needing to consult a CA for a simple case."],
    tips: ["HRA exemption is only available under the old tax regime — if you've opted for the new regime, this exemption won't apply to your return.", "If your annual rent exceeds ₹1 lakh, you'll need your landlord's PAN to claim the exemption — collect this early in the financial year.", "Paying rent to a family member (like a parent) can still qualify for HRA exemption if it's genuine and documented, but keep clear payment records.", "If you don't pay rent but receive HRA as part of your salary, remember the entire amount becomes taxable — plan your salary structure accordingly."]
  },
  'income-tax': {
    adv: ["Compares the old and new tax regimes side by side, helping you pick whichever saves more based on your actual numbers.", "Applies current FY 2025-26 slabs, the standard deduction and the Section 87A rebate automatically.", "Useful for quick what-if planning — for example, seeing how an additional 80C investment changes your old-regime liability.", "Saves time compared to manually working through slab-wise tax calculations."],
    tips: ["The new regime usually suits those with few deductions to claim, while the old regime tends to favour people with significant 80C, HRA or home loan interest deductions — run both scenarios before deciding.", "This is a simplified estimate excluding surcharge (applicable above ₹50 lakh) and special-rate incomes like capital gains — consult a CA for a precise figure if your income is complex.", "You can typically switch between regimes each year if you're a salaried employee without business income — reassess annually as your deductions change.", "File your return before the deadline even if your tax liability is zero after rebate, to keep your compliance record clean for loan or visa applications."]
  },
  gratuity: {
    adv: ["Applies the exact formula from the Payment of Gratuity Act, 1972, including the standard rounding rule for part years.", "Useful for employees planning a resignation date or estimating retirement benefits in advance.", "Shows the tax-exempt threshold context so you know when gratuity might become taxable.", "No HR system access needed to get a ballpark figure."],
    tips: ["You generally need 5+ years of continuous service to be eligible for gratuity under the Act — check your specific employment terms if you're close to that mark.", "Gratuity is exempt from tax up to ₹20 lakh for employees covered under the Act; anything above that is taxable — relevant if you have a very high last-drawn salary and long tenure.", "If your final year of service exceeds 6 months, it typically rounds up to a full year for the calculation — timing your exit date can matter.", "Confirm with HR whether your organisation is covered under the Payment of Gratuity Act, as some smaller employers may follow different internal policies."]
  },
  nps: {
    adv: ["Projects both the lumpsum-at-retirement and estimated monthly pension in one calculation, which most NPS tools split across two steps.", "Useful for comparing NPS against other long-term retirement options like PPF or mutual funds.", "Lets you test different contribution amounts and expected returns to see the impact on your eventual pension.", "No NPS account or PRAN login required to get an estimate."],
    tips: ["Up to 60% of your NPS corpus can be withdrawn tax-free as a lumpsum at retirement; the remaining 40%+ must go into an annuity — plan your other retirement savings around this rule.", "NPS returns are market-linked for equity and corporate debt schemes, so treat any projected corpus as an estimate rather than a guarantee.", "Consider your asset allocation (equity vs debt) within NPS based on your years to retirement — younger contributors can typically afford a higher equity allocation.", "NPS contributions under Section 80CCD(1B) offer an additional ₹50,000 deduction over and above the 80C limit — a benefit worth factoring into your tax planning."]
  },
  inflation: {
    adv: ["Shows in concrete rupee terms how inflation erodes purchasing power, which is often more intuitive than an abstract percentage.", "Useful for setting realistic future targets for goals like education, weddings or retirement.", "Lets you test multiple inflation assumptions quickly to stress-test your financial plan.", "Pairs naturally with the Retirement and SIP calculators for fuller goal planning."],
    tips: ["Use a higher inflation assumption (8-10%) for goals like education or healthcare, which have historically outpaced general retail inflation.", "Remember this calculator models purchasing-power erosion only — pair it with the SIP or Lumpsum calculator to see if your planned investment growth can outpace it.", "Revisit your inflation assumption periodically, since actual inflation varies year to year and across categories.", "When setting a long-term goal amount, always target the future inflated value, not today's cost, to avoid under-saving."]
  },
  retirement: {
    adv: ["Combines pre- and post-retirement return assumptions in one model, reflecting how portfolios typically shift to safer assets after retirement.", "Converts a large, abstract 'retirement corpus' target into a concrete, actionable monthly SIP figure.", "Useful for testing how retiring a few years earlier or later changes the required monthly savings.", "Free to re-run as often as you like while refining your retirement plan."],
    tips: ["Starting even 5 years earlier can dramatically reduce the monthly SIP needed to reach the same retirement corpus, thanks to compounding — don't delay starting, even with a small amount.", "This estimate assumes you start with zero existing savings — subtract the projected future value of your current retirement savings for a more accurate required SIP.", "Revisit and adjust your plan every few years as your expenses, income and market returns evolve — a retirement plan isn't a one-time calculation.", "Consider healthcare inflation separately, since medical costs in retirement often rise faster than general living expenses."]
  },
  'mf-returns': {
    adv: ["Calculates both absolute return and CAGR, helping you understand the difference between total gain and annualised growth rate.", "Useful for comparing two mutual funds or investments held for different time periods on a fair, annualised basis.", "Works for any investment type (stocks, mutual funds, real estate) since it only needs the initial and final values plus the holding period.", "Instant results without needing to log into a fund house or brokerage portal."],
    tips: ["Always compare CAGR, not absolute return, when judging investments held over different time periods — a 50% absolute return over 5 years is very different from 50% over 1 year.", "Remember CAGR smooths out year-to-year volatility into a single average rate; your actual yearly returns may have swung well above or below that number.", "This calculator only works for single-value-to-single-value comparisons — for SIP investments, use the SIP Calculator instead, since instalments complicate a simple CAGR calculation.", "Factor in exit load and capital gains tax separately, since neither is included in this raw return calculation."]
  },
  currency: {
    adv: ["Uses a live exchange rate fetched at the time of conversion, rather than a stale, hardcoded rate.", "Falls back to a clearly labelled approximate rate if the live fetch fails, so you're never left without an answer.", "Supports all major currencies commonly needed by Indian travellers, students and businesses.", "No account or app download needed for a quick conversion check."],
    tips: ["Use this for reference only — your bank, card network or remittance service will apply their own markup over the market rate shown here.", "For large international transfers, compare rates and fees across a few remittance providers, since the difference can be significant on bigger amounts.", "Exchange rates move throughout the day — if timing matters for a large transaction, check again close to when you actually plan to convert.", "When travelling, factor in your card's foreign transaction fee on top of the exchange rate for a true cost comparison."]
  },
  age: {
    adv: ["Calculates exact age down to the day, accounting automatically for leap years and varying month lengths.", "Shows a countdown to your next birthday alongside your current age.", "Useful for filling out forms, eligibility checks (age limits for exams, schemes, etc.) or simple curiosity.", "Works entirely offline in your browser — no data about your birth date is ever sent anywhere."],
    tips: ["Many government scheme and exam age-eligibility rules use a specific cut-off date (not 'today') — double check the relevant notification's exact reference date if applying for something age-restricted.", "Use this alongside a specific target date (by temporarily setting your device's date) if you need your age as of a future application deadline.", "Keep a note of your exact age in days if you're tracking a milestone like 10,000 days — small details like these are easy to lose track of otherwise.", "Double-check your date of birth against your official documents (Aadhaar, birth certificate) before relying on any age-based calculation for legal or official purposes."]
  },
  percentage: {
    adv: ["Handles all three common percentage problems — 'X% of Y', 'X is what % of Y', and percentage change — in one tool.", "Clearly labels increases vs decreases, avoiding the sign confusion that trips people up in manual percentage-change calculations.", "Useful for quick checks on discounts, marks, salary hikes or any other everyday percentage question.", "Accepts decimal values for more precise results than typical mental-math estimates."],
    tips: ["When comparing a 'percentage increase' to a 'percentage point' change (common in interest rate or inflation discussions), remember they mean different things — this calculator computes percentage increase, not percentage points.", "For discount calculations, remember that a 20% discount followed by another 10% discount is not the same as a flat 30% discount — apply them sequentially instead.", "Double-check whether a percentage change should be calculated on the original (base) value or the new value — this calculator uses the original value as the base, the standard convention.", "For salary hikes, remember a 20% increase followed by a 20% decrease does not bring you back to your original number — the base changes each time."]
  }
};
Object.entries(ADV_TIPS).forEach(([key, data])=>{
  const faqEl = document.getElementById(key + '_faq');
  if(!faqEl) return;
  const block = faqEl.closest('.info-block');
  if(!block) return;
  const section = document.createElement('div');
  section.innerHTML =
    '<h2>Advantages of using this calculator</h2>' +
    '<ul class="adv-list">' + data.adv.map(a=>'<li>'+a+'</li>').join('') + '</ul>' +
    '<h2>Tips</h2>' +
    '<ul class="adv-list">' + data.tips.map(t=>'<li>'+t+'</li>').join('') + '</ul>';
  const related = block.querySelector('.related');
  if(related) block.insertBefore(section, related);
  else block.appendChild(section);
});

route();
