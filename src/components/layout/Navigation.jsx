import React from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = [['home', 'Home'], ['work', 'Selected work'], ['capabilities', 'Capabilities'], ['education', 'Education'], ['about', 'About'], ['contact', 'Contact']];

export default function Navigation({ activeSection, mobileMenuOpen, setMobileMenuOpen, goTo }) {
  return <header className="site-header"><nav className="container flex items-center justify-between py-5" aria-label="Main navigation"><button onClick={() => goTo('home')} className="brand" aria-label="Go to homepage"><span className="brand-mark">AK</span><span> Kyaw Htet</span></button><div className="hidden items-center gap-7 md:flex">{navigation.map(([id, label]) => <button key={id} onClick={() => goTo(id)} className={`nav-link ${activeSection === id ? 'nav-link-active' : ''}`}>{label}</button>)}</div><a className="header-cta hidden md:inline-flex" href="mailto:kyawhtet1996.dev@gmail.com">Let&apos;s talk <ArrowUpRight size={16} /></a><button className="p-2 text-slate-200 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">{mobileMenuOpen ? <X /> : <Menu />}</button></nav>{mobileMenuOpen && <div className="mobile-menu md:hidden">{navigation.map(([id, label]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}</div>}</header>;
}
