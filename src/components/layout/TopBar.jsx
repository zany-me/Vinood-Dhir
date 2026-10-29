import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { openWhatsApp } from '../../utils/whatsapp';

export default function TopBar() {
  return (
    <div className="bg-[#EFEAE0] text-[#4A4C46] text-xs border-b border-[#E3DDD1] py-2 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Contact Details */}
        <div className="flex items-center flex-wrap gap-4 md:gap-6 font-medium">
          <a 
            href={`tel:${profileData.contact.primaryPhone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-1.5 hover:text-[#181816] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{profileData.contact.primaryPhone}</span>
          </a>
          <a 
            href={`mailto:${profileData.contact.primaryEmail}`} 
            className="hidden sm:flex items-center gap-1.5 hover:text-[#181816] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{profileData.contact.primaryEmail}</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5 text-[#6D7068]">
            <MapPin className="w-3.5 h-3.5 text-[#8D9088]" />
            <span>Dugri, Ludhiana, Punjab</span>
          </span>
        </div>

        {/* Right: Motto & Direct WhatsApp */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-[#6D7068] font-serif italic">
            "{profileData.moto}"
          </span>
          <button
            onClick={() => openWhatsApp("Hello Mr. Vinood Dhir, I am reaching out through your website regarding industrial consulting services.")}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 transition-colors bg-emerald-100/70 border border-emerald-300/60 px-3 py-0.5 rounded-full"
          >
            <MessageSquare className="w-3 h-3 text-emerald-700" />
            <span>Direct WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
