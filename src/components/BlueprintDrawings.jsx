import React from 'react'

// Grinder Blueprint drawing
export const GrinderBlueprint = () => (
  <svg viewBox="0 0 200 150" className="blueprint-svg">
    <rect x="60" y="10" width="80" height="40" rx="3" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M70,50 L50,80 L150,80 L130,50 Z" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="100" cy="95" r="22" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M100,73 L100,117 M78,95 L122,95 M84,79 L116,111 M84,111 L116,79" fill="none" stroke="var(--primary-gold)" strokeWidth="1" strokeDasharray="3,3" />
    <circle cx="100" cy="95" r="5" fill="none" stroke="var(--primary-amber)" strokeWidth="2" />
    <path d="M85,95 L95,95 L100,90 L105,95 L115,95" fill="none" stroke="var(--primary-amber)" strokeWidth="1.5" />
    <rect x="40" y="120" width="120" height="15" rx="2" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="50" y1="120" x2="50" y2="80" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="150" y1="120" x2="150" y2="80" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="45" cy="30" r="1.5" fill="var(--primary-amber)" />
    <circle cx="155" cy="127.5" r="1.5" fill="var(--primary-amber)" />
  </svg>
)

// Ink Mixer Blueprint drawing
export const MixerBlueprint = () => (
  <svg viewBox="0 0 200 150" className="blueprint-svg">
    <rect x="60" y="55" width="80" height="65" rx="6" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="50" y1="20" x2="150" y2="20" stroke="var(--primary-gold)" strokeWidth="2" />
    <rect x="85" y="10" width="30" height="10" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <rect x="75" y="20" width="50" height="25" rx="3" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="90" y1="45" x2="90" y2="105" stroke="var(--primary-amber)" strokeWidth="2" />
    <line x1="110" y1="45" x2="110" y2="105" stroke="var(--primary-amber)" strokeWidth="2" />
    <path d="M80,105 L100,105 M100,105 L120,105" stroke="var(--primary-amber)" strokeWidth="2" />
    <path d="M85,95 C85,90 95,90 95,95" fill="none" stroke="var(--primary-gold)" strokeWidth="1.2" />
    <path d="M105,95 C105,90 115,90 115,95" fill="none" stroke="var(--primary-gold)" strokeWidth="1.2" />
    <rect x="40" y="130" width="120" height="10" rx="1" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="50" y1="130" x2="50" y2="20" stroke="var(--primary-gold)" strokeWidth="1.5" strokeDasharray="4,2" />
    <line x1="150" y1="130" x2="150" y2="20" stroke="var(--primary-gold)" strokeWidth="1.5" strokeDasharray="4,2" />
  </svg>
)

// Recoiler Blueprint drawing
export const RecoilerBlueprint = () => (
  <svg viewBox="0 0 200 150" className="blueprint-svg">
    <circle cx="80" cy="80" r="30" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="80" cy="80" r="10" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M80,80 L120,50 L180,50 L190,80" fill="none" stroke="var(--primary-amber)" strokeWidth="2" />
    <rect x="20" y="110" width="110" height="25" rx="3" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <rect x="140" y="90" width="40" height="45" rx="2" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="160" cy="112" r="8" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="80" y1="80" x2="160" y2="112" stroke="var(--primary-gold)" strokeWidth="1" strokeDasharray="4,3" />
    <line x1="80" y1="50" x2="80" y2="110" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M70,80 L90,80 M80,70 L80,90" stroke="var(--primary-gold)" strokeWidth="1" />
  </svg>
)

// Hydraulic Uncoiler Blueprint drawing
export const UncoilerBlueprint = () => (
  <svg viewBox="0 0 200 150" className="blueprint-svg">
    <circle cx="110" cy="70" r="35" fill="none" stroke="var(--primary-gold)" strokeWidth="2" />
    <circle cx="110" cy="70" r="22" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M110,35 L75,35 L40,65 L40,110" fill="none" stroke="var(--primary-amber)" strokeWidth="2" />
    <rect x="20" y="110" width="150" height="20" rx="2" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <rect x="50" y="70" width="30" height="40" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="110" y1="70" x2="110" y2="110" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="110" y1="70" x2="50" y2="70" stroke="var(--primary-amber)" strokeWidth="1.5" strokeDasharray="3,3" />
    <path d="M102,70 L118,70 M110,62 L110,78" stroke="var(--primary-gold)" strokeWidth="1" />
  </svg>
)

// Storage Tank Blueprint drawing
export const TankBlueprint = () => (
  <svg viewBox="0 0 200 150" className="blueprint-svg">
    <rect x="65" y="25" width="70" height="85" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M65,25 C65,15 135,15 135,25" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M65,110 L100,128 L135,110 Z" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="65" y1="110" x2="55" y2="135" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="135" y1="110" x2="145" y2="135" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="100" y1="110" x2="100" y2="135" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="100" y1="128" x2="100" y2="142" stroke="var(--primary-amber)" strokeWidth="1.5" />
    <circle cx="100" cy="142" r="3" fill="none" stroke="var(--primary-amber)" strokeWidth="1.5" />
    <circle cx="100" cy="65" r="10" fill="none" stroke="var(--primary-gold)" strokeWidth="1.2" />
    <line x1="100" y1="55" x2="100" y2="75" stroke="var(--primary-gold)" strokeWidth="1" />
    <line x1="90" y1="65" x2="110" y2="65" stroke="var(--primary-gold)" strokeWidth="1" />
    <line x1="45" y1="40" x2="65" y2="40" stroke="var(--primary-amber)" strokeWidth="1.5" />
    <circle cx="41" cy="40" r="4" fill="none" stroke="var(--primary-amber)" strokeWidth="1.5" />
  </svg>
)

// Carton Machine Blueprint drawing
export const CartonBlueprint = () => (
  <svg viewBox="0 0 200 150" className="blueprint-svg">
    <rect x="25" y="80" width="150" height="40" rx="3" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="50" cy="100" r="12" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="12" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="150" cy="100" r="12" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <path d="M15,80 L185,80" stroke="var(--primary-amber)" strokeWidth="2" />
    <rect x="75" y="30" width="50" height="50" rx="2" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <circle cx="100" cy="55" r="8" fill="none" stroke="var(--primary-amber)" strokeWidth="1.5" />
    <line x1="50" y1="100" x2="100" y2="100" stroke="var(--primary-gold)" strokeWidth="1" strokeDasharray="3,3" />
    <line x1="100" y1="100" x2="150" y2="100" stroke="var(--primary-gold)" strokeWidth="1" strokeDasharray="3,3" />
  </svg>
)
