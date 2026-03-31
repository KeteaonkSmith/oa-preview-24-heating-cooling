import { useState } from "react";

// ─── SAMPLE DATA ────────────────────────────────────────────────────────
const D = {
  biz: { name: "24 Heating & Cooling", phone: "(708) 229-2293", niche: "hvac", area: "Bridgeview, Chicago & the Western Suburbs", years: 25, license: "TGC137860", tag: "Your Comfort Is Our Mission", addr: "9008 S. Oketo Ave., Bridgeview, IL 60455", email: "info@24heatingcooling.com",
    socials: [{"label": "Facebook", "url": "https://www.facebook.com/24heatingcooling/", "icon": "fb"}],
  },
  hero: { h: "Bridgeview's Most Trusted HVAC Experts", sub: "Professional hvac services — 47 five-star reviews and counting.", emergency: "24/7 Emergency Service", cta: "Call Now", cta2: "Get a Free Quote" },
  services: [
    { t: "AC Repair & Installation", d: "Fast, reliable cooling solutions to keep you comfortable all summer. Same-day diagnostics available.", icon: "snowflake" },
    { t: "Furnace Repair", d: "Same-day furnace diagnostics and repairs when you need them most. Emergency service available 24/7.", icon: "flame" },
    { t: "HVAC Maintenance", d: "Preventive tune-ups that extend equipment life and cut energy bills. Annual maintenance plans available.", icon: "gauge" },
    { t: "Duct Cleaning & Sealing", d: "Professional air duct cleaning and sealing to improve indoor air quality and system efficiency.", icon: "fan" },
    { t: "Heat Pump Systems", d: "Energy-efficient heating and cooling in one system. Expert installation and ongoing support.", icon: "thermo" },
    { t: "Emergency Service", d: "24/7 availability for urgent heating and cooling breakdowns. Fast dispatch to your location.", icon: "shield" }
  ],
  reviews: { rating: 4.9, count: 47, list: [{"n": "Thomas E.", "t": "Excellent service. First and foremost they arrive on time and actually give you an appointment time vs a 4 hour window like other places. The staff is courteous, clean and responsible.", "s": 5}, {"n": "Tun Anh T.", "t": "Fast, friendly and effective. Called in the morning and they had someone out same day. My AC was up and running within the hour.", "s": 5}, {"n": "Breanne G.", "t": "Had my air conditioner repaired at a very reasonable price and in a very timely manner. Would definitely recommend.", "s": 5}, {"n": "Lizette S.", "t": "Jerry was great \u2014 explained everything clearly, completed the repair same day, and the price was fair. Excellent service start to finish.", "s": 5}] },
  why: [
    { t: "Same-Day Service",   d: "We show up when you need us — not three days later." },
    { t: "Upfront Pricing",    d: "No surprises. You approve the price before we start any work." },
    { t: "Licensed & Insured", d: "Fully licensed, bonded, and insured for your peace of mind." },
    { t: "5-Star Rated",       d: "47 five-star Google reviews from real customers." },
  ],
  cta: { h: "Ready to Get Started?", sub: "Whether it's an emergency or a routine service, we're here to help." },
  hrs: { wd: "Mon–Fri: 7AM – 4PM", we: "Sat–Sun: Closed", em: true },
  plan: "standard",
  serviceArea: { state: "IL", cities: [{"name": "Bridgeview", "state": "IL", "zip": "", "slug": "bridgeview", "description": "24 Heating & Cooling provides professional hvac services in Bridgeview, IL. Our local team delivers fast, reliable solutions for homeowners and businesses throughout the area \u2014 with same-day service, upfront pricing, and a satisfaction guarantee.", "highlights": ["Same-day hvac service available", "Licensed, bonded & insured", "Serving Bridgeview and surrounding neighborhoods"], "localCta": "Get HVAC Service in Bridgeview"}, {"name": "Chicago", "state": "IL", "zip": "", "slug": "chicago", "description": "24 Heating & Cooling provides professional hvac services in Chicago, IL. Our local team delivers fast, reliable solutions for homeowners and businesses throughout the area \u2014 with same-day service, upfront pricing, and a satisfaction guarantee.", "highlights": ["Same-day hvac service available", "Licensed, bonded & insured", "Serving Chicago and surrounding neighborhoods"], "localCta": "Get HVAC Service in Chicago"}, {"name": "Oak Lawn", "state": "IL", "zip": "", "slug": "oak-lawn", "description": "24 Heating & Cooling provides professional hvac services in Oak Lawn, IL. Our local team delivers fast, reliable solutions for homeowners and businesses throughout the area \u2014 with same-day service, upfront pricing, and a satisfaction guarantee.", "highlights": ["Same-day hvac service available", "Licensed, bonded & insured", "Serving Oak Lawn and surrounding neighborhoods"], "localCta": "Get HVAC Service in Oak Lawn"}, {"name": "Burbank", "state": "IL", "zip": "", "slug": "burbank", "description": "24 Heating & Cooling provides professional hvac services in Burbank, IL. Our local team delivers fast, reliable solutions for homeowners and businesses throughout the area \u2014 with same-day service, upfront pricing, and a satisfaction guarantee.", "highlights": ["Same-day hvac service available", "Licensed, bonded & insured", "Serving Burbank and surrounding neighborhoods"], "localCta": "Get HVAC Service in Burbank"}, {"name": "LaGrange", "state": "IL", "zip": "", "slug": "lagrange", "description": "24 Heating & Cooling provides professional hvac services in LaGrange, IL. Our local team delivers fast, reliable solutions for homeowners and businesses throughout the area \u2014 with same-day service, upfront pricing, and a satisfaction guarantee.", "highlights": ["Same-day hvac service available", "Licensed, bonded & insured", "Serving LaGrange and surrounding neighborhoods"], "localCta": "Get HVAC Service in LaGrange"}, {"name": "Riverside", "state": "IL", "zip": "", "slug": "riverside", "description": "24 Heating & Cooling provides professional hvac services in Riverside, IL. Our local team delivers fast, reliable solutions for homeowners and businesses throughout the area \u2014 with same-day service, upfront pricing, and a satisfaction guarantee.", "highlights": ["Same-day hvac service available", "Licensed, bonded & insured", "Serving Riverside and surrounding neighborhoods"], "localCta": "Get HVAC Service in Riverside"}] },
  images: {
    logo:   "/assets/logo.png",
    photo1: "/assets/photo-1.png",
    photo2: "/assets/photo-2.png",
  },
};



// ─── HELPERS ─────────────────────────────────────────────────────────────────
// Converts any phone format to a valid tel: URI (e.g. "(773) 484-3308" → "tel:+17734843308")

// ─── ICONS ──────────────────────────────────────────────────────────────
const Ic = {
  snowflake:(c,z=28)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4"/><line x1="18.4" y1="5.6" x2="5.6" y2="18.4"/><circle cx="12" cy="12" r="3"/></svg>,
  flame:(c,z=28)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z"/></svg>,
  gauge:(c,z=28)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  fan:(c,z=28)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="2"/><path d="M12 2C9 2 7 5 7 8c0 2 2 4 5 4"/><path d="M12 22c3 0 5-3 5-6 0-2-2-4-5-4"/><path d="M2 12c0 3 3 5 6 5 2 0 4-2 4-5"/><path d="M22 12c0-3-3-5-6-5-2 0-4 2-4 5"/></svg>,
  thermo:(c,z=28)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M14 4a2 2 0 00-4 0v10.5a4 4 0 104 0V4z"/><line x1="12" y1="10" x2="12" y2="16"/></svg>,
  shield:(c,z=28)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
  phone:(c,z=18)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"/></svg>,
  star:(c,z=16)=><svg width={z} height={z} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check:(c,z=18)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
  clock:(c,z=14)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  map:(c,z=14)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  mail:(c,z=18)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  menu:(c)=><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x:(c)=><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow:(c,z=16)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote:(c,z=32)=><svg width={z} height={z} viewBox="0 0 24 24" fill={c} opacity="0.15"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>,
  home:(c,z=20)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  users:(c,z=20)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  tool:(c,z=20)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  fb:(c,z=20)=><svg width={z} height={z} viewBox="0 0 24 24" fill={c}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  ig:(c,z=20)=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill={c} stroke="none"/></svg>,
  gg:(c,z=20)=><svg width={z} height={z} viewBox="0 0 24 24" fill={c}><path d="M21.8 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.5a4.7 4.7 0 01-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z"/><path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z"/><path d="M6.4 13.9A6 6 0 016.1 12c0-.7.1-1.3.3-1.9V7.5H3A10 10 0 002 12c0 1.6.4 3.1 1 4.5l3.4-2.6z"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2 8.1 2 4.7 4.1 3 7.5l3.4 2.6C7.2 7.7 9.4 5.9 12 5.9z"/></svg>,
};
const icon = (n,c,z) => (Ic[n]||Ic.tool)(c,z);
const Stars = ({n=5,c,z=16}) => <span style={{display:"inline-flex",gap:2}}>{Array.from({length:n},(_,i)=><span key={i}>{Ic.star(c,z)}</span>)}</span>;

// ─── TEMPLATES ──────────────────────────────────────────────────────────
const T = [
  { id:"trust-shield", label:"TrustShield", sub:"Navy + Orange · Badge-heavy trust", ff:"'Outfit',sans-serif", c:{p:"#1B365D",a:"#E8722A",bg:"#F8F9FB",sf:"#FFF",tx:"#1B365D",lt:"#5A6B80",ct:"#E8722A",ctT:"#FFF"}},
  { id:"emergency-first", label:"EmergencyFirst", sub:"Crimson + Slate · Split-hero urgency", ff:"'DM Sans',sans-serif", c:{p:"#C41E3A",a:"#2D3142",bg:"#FAFAFA",sf:"#FFF",tx:"#2D3142",lt:"#6B7280",ct:"#C41E3A",ctT:"#FFF"}},
  { id:"modern-comfort", label:"ModernComfort", sub:"Crimson + Slate · Rounded organic flow", ff:"'Plus Jakarta Sans',sans-serif", c:{p:"#C41E3A",a:"#2D3142",bg:"#FAFAFA",sf:"#FFF",tx:"#2D3142",lt:"#6B7280",ct:"#C41E3A",ctT:"#FFF"}},
  { id:"neighborhood-pro", label:"NeighborhoodPro", sub:"Navy + Orange · Community grid", ff:"'Nunito',sans-serif", c:{p:"#1B365D",a:"#E8722A",bg:"#F8F9FB",sf:"#FFF",tx:"#1B365D",lt:"#5A6B80",ct:"#E8722A",ctT:"#FFF"}},
  { id:"bold-craft", label:"BoldCraft", sub:"Purple + Gold · Dark premium luxe", ff:"'Sora',sans-serif", c:{p:"#4A1B6D",a:"#D4A843",bg:"#FAF9FC",sf:"#FFF",tx:"#2D1B3D",lt:"#7B6E8B",ct:"#D4A843",ctT:"#2D1B3D"}},
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=DM+Sans:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito:wght@400;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
.nav-d{display:flex;gap:20px;align-items:center}
.nav-mb{display:none;background:none;border:none;cursor:pointer}
.mob-menu{display:none}
.mob-cta{display:none}
.ph-d{display:flex}
@media(max-width:640px){
  .nav-d{display:none}
  .nav-mb{display:block}
  .mob-menu.open{display:flex;flex-direction:column;position:fixed;inset:0;z-index:200;padding:80px 24px;gap:8px}
  .mob-cta{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:90;padding:12px;align-items:center;justify-content:center;gap:8px;text-decoration:none;font-weight:700;font-size:16px}
  .ph-d{display:none}
  .hero-h{font-size:28px!important}
  .sec-h{font-size:22px!important}
  .split-hero{grid-template-columns:1fr!important}
  .split-hero .hero-right{display:none!important}
  .g3{grid-template-columns:1fr!important}
  .g2{grid-template-columns:1fr!important}
  .g4{grid-template-columns:1fr 1fr!important}
  .ctas{flex-direction:column}
  .ctas a{text-align:center;justify-content:center}
  .alt-row{flex-direction:column!important}
  .alt-img{width:100%!important;height:180px!important}
  .stat-bar{flex-direction:column!important;gap:16px!important}
  .big-quote{font-size:18px!important}
  .contact-grid{grid-template-columns:1fr!important}
}
@media(min-width:641px) and (max-width:900px){
  .g3{grid-template-columns:1fr 1fr!important}
  .g4{grid-template-columns:1fr 1fr!important}
  .contact-grid{grid-template-columns:1fr!important}
}
`;

// ─── SHARED BITS ────────────────────────────────────────────────────────
// Converts any phone format to tel:+1XXXXXXXXXX for reliable mobile dialing
const tel=phone=>`tel:+1${phone.replace(/\D/g,'')}`;
const Btn=({href,bg,color:cl,children,style:s,onClick:oc})=>(<a href={href} onClick={oc} style={{display:"inline-flex",alignItems:"center",gap:8,background:bg,color:cl,padding:"13px 26px",borderRadius:8,fontWeight:700,fontSize:15,textDecoration:"none",cursor:"pointer",border:"none",transition:"opacity .2s",...s}}>{children}</a>);

const Nav=({C,ff,page,go})=>{
  const [open,setOpen]=useState(false);
  const nav=p=>e=>{e.preventDefault();go(p);setOpen(false);window.scrollTo(0,0)};
  const lk=p=>({color:"#FFF",textDecoration:"none",fontSize:14,fontWeight:page===p?700:500,opacity:page===p?1:0.75,cursor:"pointer"});
  return(
    <header style={{position:"sticky",top:0,zIndex:100,background:C.p,color:"#FFF",fontFamily:ff}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 20px",display:"flex",justifyContent:"space-between",alignItems:"center",height:62}}>
        <a href="#" onClick={nav("home")} style={{textDecoration:"none",color:"#FFF"}}><div style={{fontWeight:800,fontSize:17,letterSpacing:-0.5}}>{D.biz.name}</div><div style={{fontSize:10,opacity:0.55,letterSpacing:1,textTransform:"uppercase"}}>{D.biz.tag}</div></a>
        <div className="nav-d">{(D.plan==="standard"?["home","services","service-area","contact"]:["home","services","contact"]).map(p=><a key={p} href="#" onClick={nav(p)} style={lk(p)}>{p==="home"?"Home":p==="services"?"Services":p==="service-area"?"Service Area":"Contact"}</a>)}</div>
        <div className="ph-d" style={{alignItems:"center",gap:10}}>
          {D.hrs.em&&<span style={{fontSize:11,background:"rgba(255,255,255,0.15)",padding:"4px 10px",borderRadius:20,fontWeight:600}}>24/7</span>}
          <Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT} style={{padding:"7px 14px",fontSize:13}}>{Ic.phone(C.ctT)} {D.biz.phone}</Btn>
        </div>
        <button className="nav-mb" onClick={()=>setOpen(!open)}>{open?Ic.x("#FFF"):Ic.menu("#FFF")}</button>
      </div>
      <div className={`mob-menu ${open?"open":""}`} style={{background:C.p}}>
        <button onClick={()=>setOpen(false)} style={{position:"absolute",top:20,right:20,background:"none",border:"none",cursor:"pointer"}}>{Ic.x("#FFF")}</button>
        {(D.plan==="standard"?["home","services","service-area","contact"]:["home","services","contact"]).map(p=><a key={p} href="#" onClick={nav(p)} style={{color:"#FFF",textDecoration:"none",fontSize:20,fontWeight:700,padding:"16px 0",borderBottom:"1px solid rgba(255,255,255,0.1)"}}>{p==="home"?"Home":p==="services"?"Services":p==="service-area"?"Service Area":"Contact"}</a>)}
        <Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT} style={{marginTop:20,justifyContent:"center",fontSize:18,padding:16,width:"100%"}}>{Ic.phone(C.ctT)} {D.biz.phone}</Btn>
      </div>
    </header>
  );
};

const Foot=({C,ff,go})=>{
  const nav=p=>e=>{e.preventDefault();go(p);window.scrollTo(0,0)};
  return(
    <footer style={{background:C.p,color:"rgba(255,255,255,0.8)",fontFamily:ff,padding:"44px 24px 28px"}}>
      <div className="g3" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:28}}>
        <div><div style={{fontWeight:800,fontSize:16,color:"#FFF",marginBottom:6}}>{D.biz.name}</div><p style={{fontSize:13,lineHeight:1.6}}>Serving {D.biz.area}.</p>{D.biz.license&&<p style={{fontSize:11,opacity:0.4,marginTop:4}}>License #{D.biz.license}</p>}</div>
        <div><div style={{fontWeight:700,fontSize:11,color:"#FFF",marginBottom:6,textTransform:"uppercase",letterSpacing:1}}>Pages</div><div style={{display:"flex",flexDirection:"column",gap:4}}>{(D.plan==="standard"?["home","services","service-area","contact"]:["home","services","contact"]).map(p=><a key={p} href="#" onClick={nav(p)} style={{color:"rgba(255,255,255,0.7)",textDecoration:"none",fontSize:13}}>{p==="service-area"?"Service Area":p[0].toUpperCase()+p.slice(1)}</a>)}</div></div>
        <div><div style={{fontWeight:700,fontSize:11,color:"#FFF",marginBottom:6,textTransform:"uppercase",letterSpacing:1}}>Contact</div><p style={{fontSize:14,fontWeight:700,margin:"3px 0"}}>{D.biz.phone}</p>{D.biz.addr&&<p style={{fontSize:12,margin:"3px 0"}}>{D.biz.addr}</p>}{D.hrs&&<><p style={{fontSize:11,margin:"6px 0 2px",opacity:0.5}}>{D.hrs.wd}</p><p style={{fontSize:11,opacity:0.5}}>{D.hrs.we}</p></>}</div>
      </div>
      <div style={{maxWidth:1100,margin:"28px auto 0",borderTop:"1px solid rgba(255,255,255,0.12)",paddingTop:16,fontSize:11,opacity:0.35,textAlign:"center"}}>© {new Date().getFullYear()} {D.biz.name}</div>
    </footer>
  );
};

const MobCTA=({C,ff})=>(<a className="mob-cta" href={tel(D.biz.phone)} style={{background:C.ct,color:C.ctT,fontFamily:ff,boxShadow:"0 -2px 12px rgba(0,0,0,0.15)"}}>{Ic.phone(C.ctT)} Call {D.biz.phone}</a>);

// Contact form (shared but each template can wrap differently)
const ContactForm=({C,ff})=>{
  const [f,setF]=useState({name:"",phone:"",email:"",service:"",msg:""});
  const [sent,setSent]=useState(false);
  const inp={fontFamily:ff,width:"100%",padding:"12px 14px",borderRadius:8,border:`1.5px solid ${C.p}22`,fontSize:14,outline:"none",background:C.sf,color:C.tx};
  if(sent) return(<div style={{background:`${C.p}0D`,borderRadius:12,padding:32,textAlign:"center"}}><div style={{width:52,height:52,borderRadius:"50%",background:`${C.p}1A`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>{Ic.check(C.p,26)}</div><h3 style={{fontFamily:ff,fontSize:20,fontWeight:700,color:C.tx,margin:"0 0 6px"}}>Message Sent!</h3><p style={{fontFamily:ff,fontSize:14,color:C.lt}}>We'll respond shortly. Need help now? <a href={tel(D.biz.phone)} style={{color:C.p,fontWeight:700}}>{D.biz.phone}</a></p></div>);
  return(<div style={{display:"flex",flexDirection:"column",gap:12}}>
    <input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Your Name *" style={inp}/>
    <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} placeholder="Phone *" style={inp}/><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="Email" style={inp}/></div>
    <select value={f.service} onChange={e=>setF({...f,service:e.target.value})} style={{...inp,color:f.service?C.tx:C.lt}}><option value="">Select Service...</option>{D.services.map((s,i)=><option key={i} value={s.t}>{s.t}</option>)}</select>
    <textarea value={f.msg} onChange={e=>setF({...f,msg:e.target.value})} placeholder="Describe your issue..." rows={4} style={{...inp,resize:"vertical"}}/>
    <button onClick={()=>f.name&&f.phone?setSent(true):alert("Name and phone required.")} style={{fontFamily:ff,background:C.ct,color:C.ctT,padding:14,borderRadius:8,fontWeight:700,fontSize:16,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>{Ic.mail(C.ctT)} Submit Request</button>
  </div>);
};

const InfoSidebar=({C,ff})=>{
  const socials=(D.biz.socials||[]).filter(s=>s.url);
  return(<div>
  <div style={{background:C.p,borderRadius:14,padding:28,color:"#FFF",marginBottom:16,display:"flex",gap:24}}>
    <div style={{flex:1}}>
      <h3 style={{fontFamily:ff,fontSize:17,fontWeight:700,margin:"0 0 18px"}}>Get In Touch</h3>
      {[[tel(D.biz.phone),Ic.phone("#FFF"),"Call",D.biz.phone],[`mailto:${D.biz.email}`,Ic.mail("#FFF"),"Email",D.biz.email],[null,Ic.map("#FFF"),"Visit",D.biz.addr]].map(([h,ic,lab,val],i)=>{const W=h?"a":"div";return <W key={i} href={h} style={{display:"flex",alignItems:"center",gap:12,color:"#FFF",textDecoration:"none",marginBottom:14}}><div style={{width:38,height:38,borderRadius:10,background:`${C.a}30`,display:"flex",alignItems:"center",justifyContent:"center"}}>{ic}</div><div><div style={{fontSize:11,opacity:0.55}}>{lab}</div><div style={{fontSize:14,fontWeight:600}}>{val}</div></div></W>})}
    </div>
    {socials.length>0&&(
      <div style={{borderLeft:"1px solid rgba(255,255,255,0.15)",paddingLeft:24,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
        <div style={{fontSize:11,opacity:0.55,fontFamily:ff,marginBottom:4}}>Follow Us</div>
        {socials.map((s,i)=>(
          <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
            style={{width:42,height:42,borderRadius:10,background:`${C.a}30`,display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.a}
            onMouseLeave={e=>e.currentTarget.style.background=`${C.a}30`}
          >{Ic[s.icon]?Ic[s.icon]("#FFF",20):Ic.arrow("#FFF",20)}</a>
        ))}
      </div>
    )}
  </div>
  <div style={{background:`${C.a}12`,borderRadius:14,padding:20,border:`1px solid ${C.a}30`}}><h3 style={{fontFamily:ff,fontSize:15,fontWeight:700,color:C.tx,margin:"0 0 10px"}}>Hours</h3>
    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.tx,padding:"5px 0",borderBottom:"1px solid rgba(0,0,0,0.05)"}}><span>Mon–Fri</span><span style={{fontWeight:600}}>{D.hrs.wd.replace("Mon–Fri: ","")}</span></div>
    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.tx,padding:"5px 0"}}><span>Sat–Sun</span><span style={{fontWeight:600}}>{D.hrs.we.replace("Sat–Sun: ","")}</span></div>
    {D.hrs.em&&<div style={{display:"flex",alignItems:"center",gap:6,marginTop:10,fontSize:13,color:C.ct,fontWeight:700}}>{Ic.clock(C.ct)} 24/7 Emergency Available</div>}
  </div>
</div>)};


// ══════════════════════════════════════════════════════════════════════════
// TEMPLATE 1: TRUST SHIELD
// Hero: Centered with trust badges row underneath
// Services: 3-col cards with icon in colored circle
// Why Us: Full-width stat counter bar
// Reviews: 3-col cards with large quote icon
// Contact: Side-by-side form + info
// ══════════════════════════════════════════════════════════════════════════
const T1Home=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    {/* Hero: centered, badge row */}
    <section style={{background:`linear-gradient(135deg,${C.p},#0F2440)`,color:"#FFF",padding:"72px 24px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-80,right:-80,width:320,height:320,borderRadius:"50%",background:`${C.a}0A`}}/>
      <div style={{maxWidth:680,margin:"0 auto",position:"relative"}}>
        <h1 className="hero-h" style={{fontFamily:ff,fontSize:42,fontWeight:800,lineHeight:1.12,letterSpacing:-1.5,marginBottom:14}}>{D.hero.h}</h1>
        <p style={{fontFamily:ff,fontSize:16,opacity:0.8,lineHeight:1.6,marginBottom:28}}>{D.hero.sub}</p>
        <div className="ctas" style={{display:"flex",gap:12,justifyContent:"center"}}>
          <Btn href={tel(D.biz.phone)} bg={C.a} color="#FFF">{Ic.phone("#FFF")} {D.hero.cta}</Btn>
          <Btn href="#" onClick={tc} bg="rgba(255,255,255,0.1)" color="#FFF" style={{border:"2px solid rgba(255,255,255,0.3)"}}>{D.hero.cta2}</Btn>
        </div>
      </div>
      {/* Trust badges row */}
      <div style={{display:"flex",justifyContent:"center",gap:32,marginTop:40,flexWrap:"wrap"}}>
        {[["⭐ 5.0 Rating",`${D.reviews.count} Google Reviews`],["🛡️ Licensed",`#${D.biz.license}`],["⏰ 24/7","Emergency Service"],[`${D.biz.years}+`,"Years Experience"]].map(([a,b],i)=>(
          <div key={i} style={{textAlign:"center"}}><div style={{fontSize:18,fontWeight:800}}>{a}</div><div style={{fontSize:11,opacity:0.6}}>{b}</div></div>
        ))}
      </div>
    </section>

    {/* Services: cards with icon circles */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 36px"}}>What We Do Best</h2>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {D.services.map((s,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:14,padding:28,boxShadow:"0 2px 8px rgba(0,0,0,0.05)",textAlign:"center",border:"1px solid rgba(0,0,0,0.04)"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:`${C.a}18`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>{icon(s.icon,C.a,28)}</div>
            <h3 style={{fontFamily:ff,fontSize:16,fontWeight:700,color:C.tx,margin:"0 0 8px"}}>{s.t}</h3>
            <p style={{fontFamily:ff,fontSize:13,color:C.lt,lineHeight:1.6}}>{s.d}</p>
          </div>
        ))}
      </div>
    </div></section>

    {/* Why Us: stat counter bar */}
    <section style={{background:C.p,padding:"44px 24px"}}>
      <div className="stat-bar" style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:24}}>
        {[[D.reviews.count+"+","5-Star Reviews"],[D.biz.years+"+","Years Experience"],["60","Min Response Time"],["100%","Satisfaction Rate"]].map(([num,lab],i)=>(
          <div key={i} style={{textAlign:"center",color:"#FFF"}}><div style={{fontSize:36,fontWeight:800,color:C.a}}>{num}</div><div style={{fontSize:13,opacity:0.7,marginTop:2}}>{lab}</div></div>
        ))}
      </div>
    </section>

    {/* Reviews: cards with quote icon */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 32px"}}>What Customers Say</h2>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {D.reviews.list.slice(0,3).map((r,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:14,padding:24,boxShadow:"0 2px 8px rgba(0,0,0,0.04)",border:"1px solid rgba(0,0,0,0.04)",position:"relative"}}>
            <div style={{position:"absolute",top:16,right:20}}>{Ic.quote(C.a,40)}</div>
            <Stars c={C.a}/><p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.65,margin:"12px 0",fontStyle:"italic"}}>"{r.t}"</p>
            <p style={{fontFamily:ff,fontSize:13,fontWeight:700,color:C.tx}}>— {r.n}</p>
          </div>
        ))}
      </div>
    </div></section>

    {/* CTA */}
    <section style={{background:`linear-gradient(135deg,${C.a},${C.a}CC)`,color:"#FFF",padding:"52px 24px",textAlign:"center"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,margin:"0 0 10px"}}>{D.cta.h}</h2>
      <p style={{fontFamily:ff,fontSize:15,opacity:0.9,margin:"0 0 24px"}}>{D.cta.sub}</p>
      <div className="ctas" style={{display:"flex",gap:12,justifyContent:"center"}}>
        <Btn href={tel(D.biz.phone)} bg={C.p} color="#FFF" style={{fontSize:17,padding:"15px 36px"}}>{Ic.phone("#FFF")} {D.biz.phone}</Btn>
        <Btn href="#" onClick={tc} bg="rgba(255,255,255,0.2)" color="#FFF" style={{border:"2px solid rgba(255,255,255,0.3)"}}>{Ic.mail("#FFF")} Contact Us</Btn>
      </div>
    </section>
  </>);
};
const T1Services=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    <section style={{background:C.p,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Our Services</h1><p style={{fontFamily:ff,fontSize:14,opacity:0.7,marginTop:6}}>Complete {D.biz.niche.toUpperCase()} solutions for {D.biz.area}</p></section>
    <section style={{padding:"60px 24px"}}><div className="svc-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 360px",gap:48,alignItems:"start"}}>
      <div>{D.services.map((s,i)=>(
        <div key={i} style={{display:"flex",gap:20,padding:"28px 0",borderBottom:i<D.services.length-1?`1px solid ${C.p}10`:"none",flexWrap:"wrap",alignItems:"flex-start"}}>
          <div style={{width:56,height:56,borderRadius:"50%",background:`${C.a}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{icon(s.icon,C.a,28)}</div>
          <div style={{flex:1,minWidth:220}}><h2 style={{fontFamily:ff,fontSize:19,fontWeight:700,color:C.tx,margin:"0 0 6px"}}>{s.t}</h2><p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.65,margin:"0 0 14px"}}>{s.d}</p>
            <div className="ctas" style={{display:"flex",gap:10}}><Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT} style={{padding:"9px 18px",fontSize:13}}>{Ic.phone(C.ctT,14)} Call Now</Btn><Btn href="#" onClick={tc} bg="transparent" color={C.p} style={{padding:"9px 18px",fontSize:13,border:`1.5px solid ${C.p}`}}>Get Quote</Btn></div>
          </div>
        </div>
      ))}</div>
      <div style={{borderRadius:16,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",alignSelf:"center"}}>
        <img src={D.images.photo2} alt={`${D.biz.name} at work`} style={{width:"100%",height:580,objectFit:"cover",objectPosition:"center center",display:"block"}} onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.style.display="none"}}/>
      </div>
    </div></section>
  </>);
};
const T1Contact=({C,ff})=>(<>
  <section style={{background:C.p,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Contact Us</h1><p style={{fontFamily:ff,fontSize:14,opacity:0.7,marginTop:6}}>We respond within 30 minutes during business hours</p></section>
  <section style={{padding:"60px 24px"}}><div className="contact-grid" style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
    <div><h2 style={{fontFamily:ff,fontSize:22,fontWeight:700,color:C.tx,margin:"0 0 20px"}}>Request a Free Quote</h2><ContactForm C={C} ff={ff}/></div>
    <InfoSidebar C={C} ff={ff}/>
  </div></section>
</>);


// ══════════════════════════════════════════════════════════════════════════
// TEMPLATE 2: EMERGENCY FIRST
// Hero: Split layout — left text, right rating panel
// Services: Left-bordered accent cards in 2-col grid
// Why Us: Horizontal check-bars in 2-col
// Reviews: Single large featured review + 2 smaller
// Contact: Full-width dark banner with embedded form
// ══════════════════════════════════════════════════════════════════════════
const T2Home=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    {/* Hero: split */}
    <section style={{background:C.a,color:"#FFF",padding:"0 24px"}}>
      <div className="split-hero" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:400}}>
        <div style={{padding:"64px 0",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{background:C.p,display:"inline-flex",alignSelf:"flex-start",padding:"5px 14px",borderRadius:6,fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,marginBottom:18}}>{D.hero.emergency}</div>
          <h1 className="hero-h" style={{fontFamily:ff,fontSize:44,fontWeight:800,lineHeight:1.08,letterSpacing:-2,marginBottom:14}}>{D.hero.h}</h1>
          <p style={{fontFamily:ff,fontSize:15,opacity:0.85,lineHeight:1.6,marginBottom:24}}>{D.hero.sub}</p>
          <Btn href={tel(D.biz.phone)} bg="#FFF" color={C.a} style={{alignSelf:"flex-start",fontSize:20,fontWeight:800,padding:"16px 36px"}}>{Ic.phone(C.a)} {D.biz.phone}</Btn>
        </div>
        <div className="hero-right" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",gap:16}}>
          <img src={D.images.logo} alt={D.biz.name} style={{width:370,height:200,objectFit:"contain",borderRadius:0, position: "relative", top: 20, padding:0}}/>
          <div style={{width:260,background:"rgba(255,255,255,0.08)",borderRadius:"16px 16px 0 0",padding:32,textAlign:"center"}}>
            <div style={{fontSize:68,fontWeight:800,lineHeight:1}}>{D.reviews.rating}</div>
            <Stars n={5} c="#FFC857" z={20}/><div style={{fontSize:14,opacity:0.85,marginTop:8}}>{D.reviews.count} Five-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>

    {/* Services: left-bordered in 2-col */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,color:C.tx,margin:"0 0 8px"}}>Our Services</h2>
      <p style={{fontFamily:ff,fontSize:14,color:C.lt,margin:"0 0 32px"}}>Fast, reliable solutions when you need them most</p>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        {D.services.map((s,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:"0 12px 12px 0",borderLeft:`4px solid ${C.p}`,padding:24,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
            <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{flexShrink:0,marginTop:2}}>{icon(s.icon,C.p,24)}</div>
              <div><h3 style={{fontFamily:ff,fontSize:15,fontWeight:700,color:C.tx,margin:"0 0 4px"}}>{s.t}</h3><p style={{fontFamily:ff,fontSize:13,color:C.lt,lineHeight:1.55}}>{s.d}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div></section>

    {/* Why Us: horizontal bars */}
    <section style={{background:"#F3F4F6",padding:"56px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,color:C.tx,margin:"0 0 28px"}}>The {D.biz.name} Difference</h2>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        {D.why.map((w,i)=>(
          <div key={i} style={{background:"#FFF",borderRadius:10,padding:"18px 22px",display:"flex",gap:14,alignItems:"center",border:"1px solid rgba(0,0,0,0.05)"}}>
            <div style={{width:34,height:34,borderRadius:8,background:`${C.p}12`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{Ic.check(C.p)}</div>
            <div><h3 style={{fontFamily:ff,fontSize:14,fontWeight:700,color:C.tx,margin:"0 0 2px"}}>{w.t}</h3><p style={{fontFamily:ff,fontSize:12,color:C.lt,margin:0}}>{w.d}</p></div>
          </div>
        ))}
      </div>
    </div></section>

    {/* Who We Are: 2-col photo + text */}
    <section style={{padding:"56px 24px",background:C.bg}}>
      <div className="contact-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}}>
        <div style={{borderRadius:16,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
          <img src={D.images.photo1} alt={`${D.biz.name} team`} style={{width:"100%",height:450,marginTop:-100,objectFit:"cover",objectPosition:"center",display:"block"}} onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.style.display="none"}}/>
        </div>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:C.p,marginBottom:10}}>Who We Are</div>
          <h2 style={{fontFamily:ff,fontSize:28,fontWeight:800,color:C.tx,margin:"0 0 14px",lineHeight:1.2}}>Local Experts You Can Trust</h2>
          <p style={{fontFamily:ff,fontSize:15,color:C.lt,lineHeight:1.7,marginBottom:20}}>{D.biz.name} has been serving {D.biz.area} for over {D.biz.years} years. We're a local team that takes pride in every job — from a quick furnace fix to a full system installation.</p>
          {D.why.map((w,i)=>(
            <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12}}>
              <div style={{width:24,height:24,borderRadius:"50%",background:`${C.p}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{Ic.check(C.p,13)}</div>
              <div><span style={{fontFamily:ff,fontSize:14,fontWeight:700,color:C.tx}}>{w.t}</span><span style={{fontFamily:ff,fontSize:13,color:C.lt}}> — {w.d}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews: 1 featured large + 2 small */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 32px"}}>Real Reviews</h2>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        <div style={{background:C.a,borderRadius:16,padding:36,color:"#FFF",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <Stars n={5} c="#FFC857" z={20}/>
          <p className="big-quote" style={{fontFamily:ff,fontSize:22,fontWeight:600,lineHeight:1.5,margin:"16px 0"}}>"{D.reviews.list[0].t}"</p>
          <p style={{fontFamily:ff,fontSize:14,fontWeight:700}}>— {D.reviews.list[0].n}</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          {D.reviews.list.slice(1,3).map((r,i)=>(
            <div key={i} style={{background:C.sf,borderRadius:12,padding:22,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",border:"1px solid rgba(0,0,0,0.04)",flex:1}}>
              <Stars c={C.p}/><p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.6,margin:"10px 0",fontStyle:"italic"}}>"{r.t}"</p>
              <p style={{fontFamily:ff,fontSize:13,fontWeight:700,color:C.tx}}>— {r.n}</p>
            </div>
          ))}
        </div>
      </div>
    </div></section>

    {/* CTA */}
    <section style={{background:C.a,color:"#FFF",padding:"52px 24px",textAlign:"center"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,margin:"0 0 10px"}}>{D.cta.h}</h2>
      <p style={{fontFamily:ff,fontSize:15,opacity:0.85,margin:"0 0 24px"}}>{D.cta.sub}</p>
      <Btn href={tel(D.biz.phone)} bg="#FFF" color={C.a} style={{fontSize:20,fontWeight:800,padding:"16px 44px"}}>{Ic.phone(C.a)} {D.biz.phone}</Btn>
    </section>
  </>);
};
const T2Services=T1Services; // Reuse list layout but inherits different colors
const T2Contact=({C,ff})=>(<>
  {/* Full-width dark contact section */}
  <section style={{background:C.a,color:"#FFF",padding:"56px 24px"}}>
    <div className="contact-grid" style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"start"}}>
      <div>
        <h1 style={{fontFamily:ff,fontSize:32,fontWeight:800,marginBottom:8}}>Need Help? Let's Talk.</h1>
        <p style={{fontFamily:ff,fontSize:15,opacity:0.8,lineHeight:1.6,marginBottom:20}}>Fill out this form and our team will call you back within 30 minutes. Or call us directly — we pick up 24/7.</p>
        <a href={tel(D.biz.phone)} style={{display:"inline-flex",alignItems:"center",gap:10,color:"#FFF",fontSize:28,fontWeight:800,textDecoration:"none"}}>{Ic.phone("#FFF",24)} {D.biz.phone}</a>
        <div style={{marginTop:28,padding:"20px 0",borderTop:"1px solid rgba(255,255,255,0.15)"}}>
          {[[Ic.map("#FFF"),"Location",D.biz.addr],[Ic.mail("#FFF"),"Email",D.biz.email],[Ic.clock("#FFF"),"Hours",`${D.hrs.wd} | ${D.hrs.we}`]].map(([ic,lab,val],i)=>(
            <div key={i} style={{display:"flex",gap:12,alignItems:"center",marginBottom:14}}><div style={{width:34,height:34,borderRadius:8,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center"}}>{ic}</div><div><div style={{fontSize:11,opacity:0.5}}>{lab}</div><div style={{fontSize:13,fontWeight:600}}>{val}</div></div></div>
          ))}
          {(D.biz.socials||[]).filter(s=>s.url).length>0&&(
            <div style={{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.15)"}}>
              <div style={{fontSize:11,opacity:0.5,marginBottom:10}}>Follow Us</div>
              <div style={{display:"flex",gap:10}}>
                {(D.biz.socials||[]).filter(s=>s.url).map((s,i)=>(
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                    style={{width:38,height:38,borderRadius:8,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s"}}
                    onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.2)"}
                    onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.1)"}
                  >{Ic[s.icon]?Ic[s.icon]("#FFF",18):Ic.arrow("#FFF",18)}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{background:"#FFF",borderRadius:16,padding:28}}><h2 style={{fontFamily:ff,fontSize:20,fontWeight:700,color:C.tx,margin:"0 0 16px"}}>Request a Quote</h2><ContactForm C={C} ff={ff}/></div>
    </div>
  </section>
</>);


// ══════════════════════════════════════════════════════════════════════════
// TEMPLATE 3: MODERN COMFORT
// Hero: Rounded, wave bottom, pill buttons, review above headline
// Services: Alternating image-placeholder + text rows
// Why Us: Floating feature "pills" strip
// Reviews: Large single quote rotator style
// Contact: Card-based centered layout
// ══════════════════════════════════════════════════════════════════════════
const T3Home=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  const [rIdx,setRIdx]=useState(0);
  return(<>
    {/* Hero: rounded pills, reviews above */}
    <section style={{background:`linear-gradient(170deg,${C.p},${C.a})`,color:"#FFF",padding:"72px 24px 80px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:50,background:C.bg,clipPath:"ellipse(55% 100% at 50% 100%)"}}/>
      <div style={{maxWidth:640,margin:"0 auto",textAlign:"center",position:"relative"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:6,marginBottom:20}}><Stars n={5} c={C.a}/><span style={{fontSize:13,opacity:0.75}}>{D.reviews.count} happy customers</span></div>
        <h1 className="hero-h" style={{fontFamily:ff,fontSize:40,fontWeight:800,lineHeight:1.18,letterSpacing:-1,marginBottom:14}}>{D.hero.h}</h1>
        <p style={{fontFamily:ff,fontSize:15,opacity:0.75,lineHeight:1.65,marginBottom:28}}>{D.hero.sub}</p>
        <div className="ctas" style={{display:"flex",gap:12,justifyContent:"center"}}>
          <Btn href={tel(D.biz.phone)} bg={C.a} color="#FFF" style={{borderRadius:50,boxShadow:`0 4px 14px ${C.a}60`}}>{Ic.phone("#FFF")} {D.hero.cta}</Btn>
          <Btn href="#" onClick={tc} bg="rgba(255,255,255,0.1)" color="#FFF" style={{borderRadius:50,border:"1.5px solid rgba(255,255,255,0.3)"}}>{D.hero.cta2}</Btn>
        </div>
      </div>
    </section>

    {/* Services: alternating rows */}
    <section style={{padding:"64px 24px"}}><div style={{maxWidth:1000,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 40px"}}>What We Do</h2>
      {D.services.map((s,i)=>(
        <div key={i} className="alt-row" style={{display:"flex",flexDirection:i%2===0?"row":"row-reverse",gap:28,marginBottom:32,alignItems:"center"}}>
          <div className="alt-img" style={{width:200,height:160,borderRadius:20,background:`linear-gradient(135deg,${C.p}15,${C.a}15)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            {icon(s.icon,C.p,48)}
          </div>
          <div style={{flex:1}}>
            <h3 style={{fontFamily:ff,fontSize:19,fontWeight:700,color:C.tx,margin:"0 0 8px"}}>{s.t}</h3>
            <p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.7,margin:"0 0 12px"}}>{s.d}</p>
            <Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT} style={{padding:"9px 20px",fontSize:13,borderRadius:50}}>{Ic.phone(C.ctT,14)} Book This Service</Btn>
          </div>
        </div>
      ))}
    </div></section>

    {/* Why Us: floating pills */}
    <section style={{background:C.p,color:"#FFF",padding:"44px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"}}>
        {D.why.map((w,i)=>(
          <div key={i} style={{background:"rgba(255,255,255,0.1)",borderRadius:50,padding:"12px 24px",display:"flex",alignItems:"center",gap:10,border:"1px solid rgba(255,255,255,0.15)"}}>
            {Ic.check(C.a)}<span style={{fontFamily:ff,fontSize:14,fontWeight:600}}>{w.t}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Reviews: single large quote rotator */}
    <section style={{padding:"68px 24px",background:C.bg}}><div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,color:C.tx,margin:"0 0 32px"}}>Loved by Our Neighbors</h2>
      <div style={{background:C.sf,borderRadius:24,padding:"40px 36px",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
        <Stars n={5} c={C.a} z={22}/>
        <p className="big-quote" style={{fontFamily:ff,fontSize:22,fontWeight:500,color:C.tx,lineHeight:1.6,margin:"20px 0",fontStyle:"italic"}}>"{D.reviews.list[rIdx].t}"</p>
        <p style={{fontFamily:ff,fontSize:15,fontWeight:700,color:C.tx}}>— {D.reviews.list[rIdx].n}</p>
        <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:20}}>
          {D.reviews.list.map((_,i)=>(
            <button key={i} onClick={()=>setRIdx(i)} style={{width:i===rIdx?28:10,height:10,borderRadius:5,background:i===rIdx?C.p:`${C.p}30`,border:"none",cursor:"pointer",transition:"all .3s"}}/>
          ))}
        </div>
      </div>
    </div></section>

    {/* CTA: rounded top */}
    <section style={{background:`linear-gradient(135deg,${C.a},${C.a}CC)`,color:"#FFF",padding:"56px 24px",textAlign:"center",borderRadius:"28px 28px 0 0"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,margin:"0 0 10px"}}>{D.cta.h}</h2>
      <p style={{fontFamily:ff,fontSize:15,opacity:0.85,margin:"0 0 24px"}}>{D.cta.sub}</p>
      <Btn href={tel(D.biz.phone)} bg={C.p} color="#FFF" style={{borderRadius:50,fontSize:17,padding:"15px 36px"}}>{Ic.phone("#FFF")} {D.biz.phone}</Btn>
    </section>
  </>);
};
const T3Services=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    <section style={{background:`linear-gradient(170deg,${C.p},${C.a})`,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Our Services</h1></section>
    <section style={{padding:"60px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {D.services.map((s,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:20,padding:28,textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:"1px solid rgba(0,0,0,0.04)"}}>
            <div style={{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg,${C.p}12,${C.a}12)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>{icon(s.icon,C.p,32)}</div>
            <h3 style={{fontFamily:ff,fontSize:17,fontWeight:700,color:C.tx,margin:"0 0 8px"}}>{s.t}</h3>
            <p style={{fontFamily:ff,fontSize:13,color:C.lt,lineHeight:1.65,margin:"0 0 16px"}}>{s.d}</p>
            <Btn href="#" onClick={tc} bg={C.ct} color={C.ctT} style={{borderRadius:50,padding:"9px 22px",fontSize:13}}>Get Quote</Btn>
          </div>
        ))}
      </div>
    </div></section>
  </>);
};
const T3Contact=({C,ff})=>(<>
  <section style={{background:`linear-gradient(170deg,${C.p},${C.a})`,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Get In Touch</h1></section>
  {/* Centered card */}
  <section style={{padding:"60px 24px"}}><div style={{maxWidth:560,margin:"0 auto",background:C.sf,borderRadius:24,padding:36,boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
    <h2 style={{fontFamily:ff,fontSize:22,fontWeight:700,color:C.tx,textAlign:"center",margin:"0 0 6px"}}>Request a Free Quote</h2>
    <p style={{fontFamily:ff,fontSize:13,color:C.lt,textAlign:"center",margin:"0 0 24px"}}>We'll get back to you within 30 minutes</p>
    <ContactForm C={C} ff={ff}/>
    <div style={{marginTop:24,padding:"20px 0 0",borderTop:`1px solid ${C.p}10`,display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:12}}>
      {[[Ic.phone(C.p,16),D.biz.phone],[Ic.mail(C.p,16),D.biz.email],[Ic.clock(C.p,14),"24/7 Emergency"]].map(([ic,val],i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:6,fontSize:13,fontFamily:ff,color:C.tx,fontWeight:600}}>{ic} {val}</div>
      ))}
    </div>
    {(D.biz.socials||[]).filter(s=>s.url).length>0&&(
      <div style={{marginTop:20,paddingTop:16,borderTop:`1px solid ${C.p}10`,display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
        <div style={{fontSize:11,color:C.lt,fontFamily:ff}}>Follow Us</div>
        <div style={{display:"flex",gap:10}}>
          {(D.biz.socials||[]).filter(s=>s.url).map((s,i)=>(
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
              style={{width:38,height:38,borderRadius:10,background:`${C.p}0D`,display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.background=`${C.p}20`}
              onMouseLeave={e=>e.currentTarget.style.background=`${C.p}0D`}
            >{Ic[s.icon]?Ic[s.icon](C.p,18):Ic.arrow(C.p,18)}</a>
          ))}
        </div>
      </div>
    )}
  </div></section>
</>);


// ══════════════════════════════════════════════════════════════════════════
// TEMPLATE 4: NEIGHBORHOOD PRO
// Hero: Full-width with trust bar underneath
// Services: 3-col with numbered top-left badge + top border
// Why Us: Numbered vertical timeline style
// Reviews: Side-by-side large cards with Google badge
// Contact: Two-col with map placeholder
// ══════════════════════════════════════════════════════════════════════════
const T4Home=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    {/* Hero */}
    <section style={{background:`linear-gradient(135deg,${C.p},#0F2440)`,color:"#FFF",padding:"64px 24px",textAlign:"center",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E\")"}}/>
      <div style={{maxWidth:700,margin:"0 auto",position:"relative"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 16px",fontSize:13,fontWeight:700,marginBottom:18}}>{Ic.map("#FFF")} Serving {D.biz.area}</div>
        <h1 className="hero-h" style={{fontFamily:ff,fontSize:40,fontWeight:800,lineHeight:1.15,marginBottom:14}}>{D.hero.h}</h1>
        <p style={{fontFamily:ff,fontSize:16,opacity:0.8,lineHeight:1.6,marginBottom:28}}>{D.hero.sub}</p>
        <div className="ctas" style={{display:"flex",gap:12,justifyContent:"center"}}><Btn href={tel(D.biz.phone)} bg={C.a} color="#FFF" style={{borderRadius:10}}>{Ic.phone("#FFF")} {D.hero.cta}</Btn><Btn href="#" onClick={tc} bg="transparent" color="#FFF" style={{borderRadius:10,border:"2px solid rgba(255,255,255,0.35)"}}>{D.hero.cta2}</Btn></div>
      </div>
    </section>
    {/* Trust bar */}
    <section style={{background:C.a,color:"#FFF",padding:"14px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap",fontSize:14,fontWeight:700}}>
        <span style={{display:"flex",alignItems:"center",gap:5}}>{Ic.star("#FFF")} {D.reviews.rating} Stars ({D.reviews.count} reviews)</span>
        <span>{D.biz.years}+ Years</span><span>Licensed & Insured</span>
      </div>
    </section>

    {/* Services: numbered cards with top border */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 36px"}}>How We Can Help</h2>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {D.services.map((s,i)=>(
          <div key={i} style={{background:C.sf,borderTop:`4px solid ${C.p}`,borderRadius:"0 0 12px 12px",padding:24,position:"relative",boxShadow:"0 2px 6px rgba(0,0,0,0.04)"}}>
            <div style={{position:"absolute",top:-16,left:20,width:32,height:32,borderRadius:"50%",background:C.p,color:"#FFF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800}}>{i+1}</div>
            <div style={{marginTop:12}}>{icon(s.icon,C.a,24)}</div>
            <h3 style={{fontFamily:ff,fontSize:16,fontWeight:700,color:C.tx,margin:"10px 0 6px"}}>{s.t}</h3>
            <p style={{fontFamily:ff,fontSize:13,color:C.lt,lineHeight:1.6}}>{s.d}</p>
          </div>
        ))}
      </div>
    </div></section>

    {/* Why Us: vertical timeline */}
    <section style={{background:`${C.p}0A`,padding:"60px 24px"}}><div style={{maxWidth:700,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 32px"}}>Why Your Neighbors Choose Us</h2>
      {D.why.map((w,i)=>(
        <div key={i} style={{display:"flex",gap:20,marginBottom:i<D.why.length-1?24:0,position:"relative"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:40,height:40,borderRadius:"50%",background:C.p,color:"#FFF",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:15,flexShrink:0}}>{i+1}</div>
            {i<D.why.length-1&&<div style={{width:2,flex:1,background:`${C.p}30`,marginTop:4}}/>}
          </div>
          <div style={{paddingBottom:8}}><h3 style={{fontFamily:ff,fontSize:16,fontWeight:700,color:C.tx,margin:"8px 0 4px"}}>{w.t}</h3><p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.55}}>{w.d}</p></div>
        </div>
      ))}
    </div></section>

    {/* Reviews: large cards with Google badge */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 32px"}}>From Your Neighbors</h2>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        {D.reviews.list.slice(0,4).map((r,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:14,padding:28,boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:"1px solid rgba(0,0,0,0.04)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <Stars c={C.a}/><span style={{fontSize:11,color:C.lt,fontWeight:600,background:`${C.p}0D`,padding:"3px 8px",borderRadius:4}}>Google Review</span>
            </div>
            <p style={{fontFamily:ff,fontSize:15,color:C.tx,lineHeight:1.65,margin:"0 0 12px"}}>"{r.t}"</p>
            <p style={{fontFamily:ff,fontSize:14,fontWeight:700,color:C.p}}>— {r.n}</p>
          </div>
        ))}
      </div>
    </div></section>

    {/* CTA */}
    <section style={{background:C.p,color:"#FFF",padding:"52px 24px",textAlign:"center"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,margin:"0 0 10px"}}>{D.cta.h}</h2>
      <p style={{fontFamily:ff,fontSize:15,opacity:0.8,margin:"0 0 24px"}}>{D.cta.sub}</p>
      <Btn href={tel(D.biz.phone)} bg={C.a} color="#FFF" style={{borderRadius:10,fontSize:18,padding:"15px 36px"}}>{Ic.phone("#FFF")} {D.biz.phone}</Btn>
    </section>
  </>);
};
const T4Services=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    <section style={{background:`linear-gradient(135deg,${C.p},#0F2440)`,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Our Services</h1></section>
    {/* Services as big cards with CTA inside each */}
    <section style={{padding:"60px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        {D.services.map((s,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:14,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:"1px solid rgba(0,0,0,0.04)"}}>
            <div style={{height:8,background:`linear-gradient(90deg,${C.p},${C.a})`}}/>
            <div style={{padding:28}}>
              <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:10}}>{icon(s.icon,C.p,24)}<h3 style={{fontFamily:ff,fontSize:18,fontWeight:700,color:C.tx}}>{s.t}</h3></div>
              <p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.65,margin:"0 0 16px"}}>{s.d}</p>
              <div className="ctas" style={{display:"flex",gap:10}}><Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT} style={{padding:"9px 18px",fontSize:13}}>{Ic.phone(C.ctT,14)} Call</Btn><Btn href="#" onClick={tc} bg="transparent" color={C.p} style={{padding:"9px 18px",fontSize:13,border:`1.5px solid ${C.p}`}}>Quote</Btn></div>
            </div>
          </div>
        ))}
      </div>
    </div></section>
  </>);
};
const T4Contact=({C,ff})=>(<>
  <section style={{background:`linear-gradient(135deg,${C.p},#0F2440)`,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Get In Touch</h1></section>
  <section style={{padding:"60px 24px"}}><div className="contact-grid" style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
    <div><h2 style={{fontFamily:ff,fontSize:22,fontWeight:700,color:C.tx,margin:"0 0 16px"}}>Send Us a Message</h2><ContactForm C={C} ff={ff}/></div>
    <div>
      {/* Map placeholder */}
      <div style={{background:`linear-gradient(135deg,${C.p}15,${C.a}10)`,borderRadius:14,height:200,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,border:`1px dashed ${C.p}30`}}>
        <div style={{textAlign:"center",color:C.lt}}>{Ic.map(C.p,28)}<div style={{fontFamily:ff,fontSize:13,marginTop:6}}>{D.biz.area}</div></div>
      </div>
      <InfoSidebar C={C} ff={ff}/>
    </div>
  </div></section>
</>);


// ══════════════════════════════════════════════════════════════════════════
// TEMPLATE 5: BOLD CRAFT
// Hero: Dark luxe gradient, gold badge, large phone CTA
// Services: Dark cards with gold bottom accent
// Why Us: Diamond-pattern background, gold icon boxes
// Reviews: Testimonial slider with gradient border
// Contact: Dark split with gold accents
// ══════════════════════════════════════════════════════════════════════════
const T5Home=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    {/* Hero: dark luxe */}
    <section style={{background:`linear-gradient(160deg,${C.p},#2E0E45,#1A0A2E)`,color:"#FFF",padding:"84px 24px 72px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"15%",right:"8%",width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle,${C.a}12,transparent 70%)`}}/>
      <div style={{maxWidth:680,margin:"0 auto",textAlign:"center",position:"relative"}}>
        <div style={{display:"inline-block",background:`linear-gradient(90deg,${C.a},#E8C96A)`,padding:"5px 20px",borderRadius:4,fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,marginBottom:24,color:C.p}}>{D.hero.emergency || "Premium Service"}</div>
        <h1 className="hero-h" style={{fontFamily:ff,fontSize:44,fontWeight:800,lineHeight:1.1,letterSpacing:-1.5,marginBottom:16}}>{D.hero.h}</h1>
        <p style={{fontFamily:ff,fontSize:15,opacity:0.7,lineHeight:1.65,marginBottom:28}}>{D.hero.sub}</p>
        <Btn href={tel(D.biz.phone)} bg={`linear-gradient(135deg,${C.a},#E8C96A)`} color={C.p} style={{fontSize:18,fontWeight:800,padding:"16px 40px",boxShadow:`0 4px 20px ${C.a}40`}}>{Ic.phone(C.p)} {D.hero.cta} — {D.biz.phone}</Btn>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:24,fontSize:13,opacity:0.55}}><Stars n={5} c={C.a}/> {D.reviews.count} Verified Reviews</div>
      </div>
    </section>

    {/* Services: dark cards, gold accent bottom */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 36px"}}>Our Expertise</h2>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {D.services.map((s,i)=>(
          <div key={i} style={{background:C.sf,borderRadius:12,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:`1px solid ${C.p}10`}}>
            <div style={{padding:24}}>
              <div style={{width:48,height:48,borderRadius:12,background:`linear-gradient(135deg,${C.a}25,${C.a}08)`,border:`1px solid ${C.a}30`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>{icon(s.icon,C.a,24)}</div>
              <h3 style={{fontFamily:ff,fontSize:16,fontWeight:700,color:C.tx,margin:"0 0 6px"}}>{s.t}</h3>
              <p style={{fontFamily:ff,fontSize:13,color:C.lt,lineHeight:1.6}}>{s.d}</p>
            </div>
            <div style={{height:4,background:`linear-gradient(90deg,${C.a},${C.a}40)`}}/>
          </div>
        ))}
      </div>
    </div></section>

    {/* Why Us: diamond pattern bg, gold boxes */}
    <section style={{background:C.p,color:"#FFF",padding:"56px 24px",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30 30 60 0 30z' fill='none' stroke='rgba(212,168,67,0.06)' stroke-width='1'/%3E%3C/svg%3E\")"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",position:"relative"}}>
        <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",margin:"0 0 36px"}}>The {D.biz.name} Standard</h2>
        <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
          {D.why.map((w,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{width:52,height:52,borderRadius:12,background:`${C.a}18`,border:`1px solid ${C.a}35`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}>{Ic.check(C.a)}</div>
              <h3 style={{fontFamily:ff,fontSize:14,fontWeight:700,margin:"0 0 4px"}}>{w.t}</h3>
              <p style={{fontFamily:ff,fontSize:12,opacity:0.6,lineHeight:1.5}}>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews: gradient bordered cards */}
    <section style={{padding:"68px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 32px"}}>Client Testimonials</h2>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {D.reviews.list.slice(0,3).map((r,i)=>(
          <div key={i} style={{background:`linear-gradient(135deg,${C.p}08,${C.a}08)`,borderRadius:14,padding:2}}>
            <div style={{background:C.sf,borderRadius:12,padding:24,height:"100%"}}>
              <Stars c={C.a}/><p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.65,margin:"12px 0",fontStyle:"italic"}}>"{r.t}"</p>
              <p style={{fontFamily:ff,fontSize:13,fontWeight:700,color:C.p}}>— {r.n}</p>
            </div>
          </div>
        ))}
      </div>
    </div></section>

    {/* CTA: dark luxe */}
    <section style={{background:`linear-gradient(135deg,${C.p},#2E0E45)`,color:"#FFF",padding:"56px 24px",textAlign:"center"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,margin:"0 0 10px"}}>{D.cta.h}</h2>
      <p style={{fontFamily:ff,fontSize:15,opacity:0.6,margin:"0 0 24px"}}>{D.cta.sub}</p>
      <Btn href={tel(D.biz.phone)} bg={`linear-gradient(135deg,${C.a},#E8C96A)`} color={C.p} style={{fontSize:18,fontWeight:800,padding:"16px 40px",boxShadow:`0 4px 20px ${C.a}40`}}>{Ic.phone(C.p)} {D.biz.phone}</Btn>
    </section>
  </>);
};
const T5Services=({C,ff,go})=>{
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  return(<>
    <section style={{background:`linear-gradient(160deg,${C.p},#2E0E45)`,color:"#FFF",padding:"52px 24px",textAlign:"center"}}><h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34}}>Our Expertise</h1></section>
    {/* Premium list style */}
    <section style={{padding:"60px 24px"}}><div className="svc-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 360px",gap:48,alignItems:"start"}}>
      <div>{D.services.map((s,i)=>(
        <div key={i} style={{display:"flex",gap:24,padding:"32px 0",borderBottom:i<D.services.length-1?`1px solid ${C.p}0D`:"none",alignItems:"flex-start",flexWrap:"wrap"}}>
          <div style={{width:60,height:60,borderRadius:14,background:`linear-gradient(135deg,${C.a}20,${C.a}08)`,border:`1px solid ${C.a}30`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{icon(s.icon,C.a,28)}</div>
          <div style={{flex:1,minWidth:220}}><h2 style={{fontFamily:ff,fontSize:20,fontWeight:700,color:C.tx,margin:"0 0 6px"}}>{s.t}</h2><p style={{fontFamily:ff,fontSize:14,color:C.lt,lineHeight:1.65,margin:"0 0 14px"}}>{s.d}</p>
            <Btn href="#" onClick={tc} bg={`linear-gradient(135deg,${C.a},#E8C96A)`} color={C.p} style={{padding:"9px 22px",fontSize:13,fontWeight:700}}>Request This Service</Btn>
          </div>
        </div>
      ))}</div>
      <div style={{borderRadius:16,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",alignSelf:"center"}}>
        <img src={D.images.photo2} alt={`${D.biz.name} at work`} style={{width:"100%",height:580,objectFit:"cover",objectPosition:"center center",display:"block"}} onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.style.display="none"}}/>
      </div>
    </div></section>
  </>);
};
const T5Contact=({C,ff})=>(<>
  {/* Dark split */}
  <section style={{background:`linear-gradient(135deg,${C.p},#2E0E45)`,color:"#FFF",padding:"60px 24px"}}>
    <div className="contact-grid" style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
      <div>
        <h1 style={{fontFamily:ff,fontSize:32,fontWeight:800,marginBottom:10}}>Let's Get Started</h1>
        <p style={{fontFamily:ff,fontSize:15,opacity:0.7,lineHeight:1.6,marginBottom:24}}>Premium service starts with a conversation. Tell us what you need and we'll handle the rest.</p>
        <a href={tel(D.biz.phone)} style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:26,fontWeight:800,color:C.a,textDecoration:"none"}}>{Ic.phone(C.a,22)} {D.biz.phone}</a>
        <div style={{marginTop:28,display:"flex",flexDirection:"column",gap:14}}>
          {[[Ic.map("#FFF"),D.biz.addr],[Ic.mail("#FFF"),D.biz.email],[Ic.clock("#FFF"),`${D.hrs.wd} | ${D.hrs.we}`]].map(([ic,val],i)=>(
            <div key={i} style={{display:"flex",gap:10,alignItems:"center",fontSize:13,opacity:0.75}}>{ic} {val}</div>
          ))}
        </div>
        {(D.biz.socials||[]).filter(s=>s.url).length>0&&(
          <div style={{marginTop:24,paddingTop:20,borderTop:`1px solid rgba(255,255,255,0.15)`}}>
            <div style={{fontSize:11,opacity:0.5,marginBottom:10}}>Follow Us</div>
            <div style={{display:"flex",gap:10}}>
              {(D.biz.socials||[]).filter(s=>s.url).map((s,i)=>(
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.18)"}
                  onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.08)"}
                >{Ic[s.icon]?Ic[s.icon]("#FFF",18):Ic.arrow("#FFF",18)}</a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div style={{background:C.sf,borderRadius:16,padding:28}}><h2 style={{fontFamily:ff,fontSize:20,fontWeight:700,color:C.tx,margin:"0 0 16px"}}>Request a Quote</h2><ContactForm C={C} ff={ff}/></div>
    </div>
  </section>
</>);


// ══════════════════════════════════════════════════════════════════════════
// SERVICE AREA PAGE (Standard+ plan — shared across all templates)
// Hub: map + city grid. City detail: description, services, call panel.
// ══════════════════════════════════════════════════════════════════════════
const ServiceAreaPage=({C,ff,go})=>{
  const [selectedCity,setSelectedCity]=useState(null);
  const cities=(D.serviceArea&&D.serviceArea.cities)||[];
  const tc=e=>{e.preventDefault();go("contact");window.scrollTo(0,0)};
  const nicheLabel=D.biz.niche==="plumbing"?"Plumbing":D.biz.niche==="hvac_plumbing"?"HVAC & Plumbing":"HVAC";

  // ── City detail view ───────────────────────────────────────────────────
  if(selectedCity){
    const city=cities.find(c=>c.slug===selectedCity);
    if(!city){setSelectedCity(null);return null;}
    return(<>
      <section style={{background:C.p,color:"#FFF",padding:"52px 24px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <button onClick={()=>setSelectedCity(null)} style={{background:"rgba(255,255,255,0.15)",border:"none",color:"#FFF",padding:"6px 14px",borderRadius:6,fontSize:13,fontWeight:600,cursor:"pointer",marginBottom:16,fontFamily:ff}}>
            ← All Service Areas
          </button>
          <h1 style={{fontFamily:ff,fontSize:34,fontWeight:800}}>{nicheLabel} Services in {city.name}, {city.state}</h1>
          <p style={{fontFamily:ff,fontSize:15,opacity:0.75,marginTop:6}}>{D.biz.name} proudly serves {city.name} and surrounding areas</p>
        </div>
      </section>
      <section style={{padding:"56px 24px"}}><div className="contact-grid" style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
        <div>
          <h2 style={{fontFamily:ff,fontSize:22,fontWeight:700,color:C.tx,margin:"0 0 14px"}}>About Our Service in {city.name}</h2>
          <p style={{fontFamily:ff,fontSize:15,color:C.lt,lineHeight:1.7,margin:"0 0 24px"}}>{city.description}</p>
          <div style={{margin:"0 0 28px"}}>
            {(city.highlights||[]).map((h,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0"}}>
                <div style={{width:28,height:28,borderRadius:"50%",background:`${C.a}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{Ic.check(C.a,14)}</div>
                <span style={{fontFamily:ff,fontSize:14,color:C.tx,fontWeight:500}}>{h}</span>
              </div>
            ))}
          </div>
          <h3 style={{fontFamily:ff,fontSize:18,fontWeight:700,color:C.tx,margin:"0 0 14px"}}>Services Available in {city.name}</h3>
          <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:28}}>
            {D.services.map((s,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",background:`${C.p}08`,borderRadius:8,fontSize:13,fontFamily:ff,color:C.tx,fontWeight:500}}>
                {icon(s.icon,C.a,18)} {s.t}
              </div>
            ))}
          </div>
          <div className="ctas" style={{display:"flex",gap:10}}>
            <Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT}>{Ic.phone(C.ctT)} {city.localCta}</Btn>
            <Btn href="#" onClick={tc} bg="transparent" color={C.p} style={{border:`1.5px solid ${C.p}`}}>{Ic.mail(C.p)} Get a Quote</Btn>
          </div>
        </div>
        <div>
          <div style={{background:`linear-gradient(135deg,${C.p}12,${C.a}08)`,borderRadius:16,height:220,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,border:`1px dashed ${C.p}25`}}>
            <div style={{textAlign:"center",color:C.lt}}>
              {Ic.map(C.p,32)}
              <div style={{fontFamily:ff,fontSize:16,fontWeight:600,color:C.tx,marginTop:8}}>{city.name}, {city.state}{city.zip?" "+city.zip:""}</div>
              <div style={{fontFamily:ff,fontSize:12,marginTop:4}}>Service Area</div>
            </div>
          </div>
          <div style={{background:C.p,borderRadius:14,padding:24,color:"#FFF"}}>
            <h3 style={{fontFamily:ff,fontSize:16,fontWeight:700,margin:"0 0 14px"}}>Need help in {city.name}?</h3>
            <a href={tel(D.biz.phone)} style={{display:"flex",alignItems:"center",gap:10,color:"#FFF",textDecoration:"none",fontSize:22,fontWeight:800,marginBottom:16}}>
              {Ic.phone("#FFF",20)} {D.biz.phone}
            </a>
            <p style={{fontSize:13,opacity:0.7,lineHeight:1.5}}>We dispatch to {city.name} fast for emergency calls. Same-day appointments available.</p>
          </div>
          {D.reviews.count>0&&(
            <div style={{background:C.sf,borderRadius:14,padding:20,marginTop:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)",border:"1px solid rgba(0,0,0,0.05)"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}><Stars n={5} c={C.a}/><span style={{fontFamily:ff,fontSize:14,fontWeight:700,color:C.tx}}>{D.reviews.rating}/5</span></div>
              <p style={{fontFamily:ff,fontSize:12,color:C.lt}}>Rated {D.reviews.rating} stars from {D.reviews.count} verified reviews across all service areas.</p>
            </div>
          )}
        </div>
      </div></section>
    </>);
  }

  // ── Hub view ───────────────────────────────────────────────────────────
  return(<>
    <section style={{background:C.p,color:"#FFF",padding:"56px 24px",textAlign:"center"}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <h1 className="hero-h" style={{fontFamily:ff,fontWeight:800,fontSize:34,marginBottom:8}}>Areas We Service</h1>
        <p style={{fontFamily:ff,fontSize:15,opacity:0.75,lineHeight:1.6}}>
          {D.biz.name} proudly serves {D.biz.area}. Select your city to learn more about our services in your area.
        </p>
      </div>
    </section>
    <section style={{padding:"48px 24px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <div style={{background:`linear-gradient(135deg,${C.p}08,${C.a}06)`,borderRadius:20,padding:40,display:"flex",alignItems:"center",justifyContent:"center",border:`1px dashed ${C.p}20`,marginBottom:20}}>
        <div style={{textAlign:"center"}}>
          {Ic.map(C.p,40)}
          <h2 style={{fontFamily:ff,fontSize:20,fontWeight:700,color:C.tx,margin:"12px 0 6px"}}>Our Service Area</h2>
          <p style={{fontFamily:ff,fontSize:14,color:C.lt}}>{D.biz.area}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginTop:16}}>
            {cities.map((city,i)=>(
              <span key={i} style={{background:`${C.p}10`,padding:"4px 12px",borderRadius:20,fontSize:13,fontFamily:ff,color:C.p,fontWeight:600}}>{city.name}, {city.state}</span>
            ))}
          </div>
        </div>
      </div>
    </div></section>
    <section style={{padding:"0 24px 64px"}}><div style={{maxWidth:1100,margin:"0 auto"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,textAlign:"center",color:C.tx,margin:"0 0 32px"}}>Select Your City</h2>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {cities.map((city,i)=>(
          <button key={i} onClick={()=>{setSelectedCity(city.slug);window.scrollTo(0,0)}}
            style={{background:C.sf,border:`1px solid ${C.p}10`,borderRadius:14,padding:24,cursor:"pointer",textAlign:"left",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",fontFamily:ff}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <div style={{width:36,height:36,borderRadius:10,background:`${C.a}18`,display:"flex",alignItems:"center",justifyContent:"center"}}>{Ic.map(C.a,18)}</div>
              <div>
                <div style={{fontSize:17,fontWeight:700,color:C.tx}}>{city.name}</div>
                <div style={{fontSize:12,color:C.lt}}>{city.state}{city.zip?" "+city.zip:""}</div>
              </div>
            </div>
            <p style={{fontSize:13,color:C.lt,lineHeight:1.5,margin:"0 0 14px"}}>{city.description.slice(0,110)}...</p>
            <div style={{display:"flex",alignItems:"center",gap:6,color:C.ct,fontSize:13,fontWeight:700}}>
              View services {Ic.arrow(C.ct,14)}
            </div>
          </button>
        ))}
      </div>
    </div></section>
    <section style={{background:C.p,color:"#FFF",padding:"48px 24px",textAlign:"center"}}>
      <h2 className="sec-h" style={{fontFamily:ff,fontWeight:800,margin:"0 0 8px"}}>Don't See Your City?</h2>
      <p style={{fontFamily:ff,fontSize:14,opacity:0.75,margin:"0 0 20px"}}>We may still be able to help. Call us to check if we serve your area.</p>
      <Btn href={tel(D.biz.phone)} bg={C.ct} color={C.ctT} style={{fontSize:17,padding:"15px 36px"}}>{Ic.phone(C.ctT)} {D.biz.phone}</Btn>
    </section>
  </>);
};

// ══════════════════════════════════════════════════════════════════════════
// MAP TEMPLATES TO PAGES
// ══════════════════════════════════════════════════════════════════════════
const PAGES = {
  "trust-shield":      { home:T1Home, services:T1Services, "service-area":ServiceAreaPage, contact:T1Contact },
  "emergency-first":   { home:T2Home, services:T2Services, "service-area":ServiceAreaPage, contact:T2Contact },
  "modern-comfort":    { home:T3Home, services:T3Services, "service-area":ServiceAreaPage, contact:T3Contact },
  "neighborhood-pro":  { home:T4Home, services:T4Services, "service-area":ServiceAreaPage, contact:T4Contact },
  "bold-craft":        { home:T5Home, services:T5Services, "service-area":ServiceAreaPage, contact:T5Contact },
};

const Site=({tmpl})=>{
  const [page,setPage]=useState("home");
  const C=tmpl.c;const ff=tmpl.ff;
  const P=PAGES[tmpl.id][page];
  return(
    <div style={{fontFamily:ff,background:C.bg,color:C.tx,minHeight:"100vh",paddingBottom:56}}>
      <Nav C={C} ff={ff} page={page} go={setPage}/>
      <P C={C} ff={ff} go={setPage}/>
      <Foot C={C} ff={ff} go={setPage}/>
      <MobCTA C={C} ff={ff}/>
    </div>
  );
};

// ═══════ APP ═══════
export default function App(){
  const tm = T[1];
  return(
    <div style={{fontFamily:tm.ff,background:tm.c.bg,color:tm.c.tx,minHeight:"100vh",paddingBottom:56}}>
      <style>{CSS}</style>
      <Site tmpl={tm}/>
    </div>
  );
}
