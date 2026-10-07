import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() { return <footer className="container flex flex-col justify-between gap-3 py-8 text-sm text-slate-500 sm:flex-row"><span>© 2025 Kyaw Htet</span><span className="flex items-center gap-2"><Terminal size={14} /> Built with React · Deployed on AWS</span></footer>; }
