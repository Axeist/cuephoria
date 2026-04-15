import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import SEOMetadata from '../components/SEOMetadata';
import { CHOCO_LOCA_LAUNCH, useChocoCountdown } from '../components/ChocoLocaAnnouncement';

const ChocoLoca = () => {
  const countdown = useChocoCountdown();

  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-x-hidden">
      <SEOMetadata
        title="Choco Loca × Cuephoria | Café Menu & Launch"
        description="Choco Loca Cakes & Café partners with Cuephoria in Trichy. Official launch April 17, 2026 at 6 PM. Burgers, fries, pizza, shakes & desserts — order on Zomato & Swiggy."
        keywords="Choco Loca Trichy, Cuephoria cafe, gaming lounge food Trichy, student cafe NIT Trichy, milkshake Trichy"
      />

      <section className="relative pt-24 pb-12 md:pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(233,150,149,0.12)_0,transparent_100%)]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#F7D08A]/80 hover:text-[#F7D08A] text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="text-center mb-8">
            <img
              src="/choco-loca-logo.png"
              alt="Choco Loca Cakes and Café"
              className="h-32 md:h-40 mx-auto object-contain drop-shadow-[0_0_24px_rgba(233,150,149,0.35)]"
            />
            <h1 className="mt-6 text-3xl md:text-5xl font-black text-[#FEFBE7]">
              Choco Loca <span className="text-[#E99695]">×</span> Cuephoria
            </h1>
            <p className="text-[#F7D08A] mt-2 font-semibold">Cakes &amp; Café — at Cuephoria Gaming Lounge, Thiruverumbur</p>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
              We&apos;ve partnered with the Choco Loca team to bring a full café menu to the lounge. Lineup is set; individual prices may be updated on apps.
            </p>
          </div>

          {!countdown.expired && (
            <div className="mb-10 rounded-2xl border border-[#E99695]/40 bg-[#6B5446]/20 p-6 text-center">
              <p className="text-[#F7D08A] text-xs font-black uppercase tracking-[0.2em] mb-3">Official launch</p>
              <p className="text-[#FEFBE7] text-lg font-bold mb-4">
                {CHOCO_LOCA_LAUNCH.toLocaleString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' })}
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                {[
                  { v: countdown.d, l: 'Days' },
                  { v: countdown.h, l: 'Hours' },
                  { v: countdown.m, l: 'Mins' },
                  { v: countdown.s, l: 'Secs' },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-black/40 border border-[#E99695]/30 rounded-xl px-4 py-3 min-w-[72px]">
                    <div className="text-2xl font-black text-[#FEFBE7] tabular-nums">{String(v).padStart(2, '0')}</div>
                    <div className="text-[10px] text-[#F7D08A]/70 uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {countdown.expired && (
            <div className="mb-8 text-center rounded-xl border border-green-500/40 bg-green-500/10 py-4 px-4 text-green-300 font-bold">
              We&apos;re live — visit us at Cuephoria or order on Zomato &amp; Swiggy.
            </div>
          )}

          <div className="rounded-2xl overflow-hidden border border-[#E99695]/35 shadow-[0_0_40px_rgba(0,0,0,0.4)] mb-8">
            <img
              src="/choco-loca-menu.png"
              alt="Choco Loca menu at Cuephoria — loaded fries, hot dogs, burgers, pizza, drinks and desserts"
              className="w-full h-auto object-top bg-[#FEFBE7]"
              loading="eager"
            />
          </div>
          <p className="text-center text-gray-500 text-xs mb-10">Images are for illustration purposes only.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a
              href="https://www.instagram.com/chocoloca_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E99695] hover:text-[#F7D08A] transition-colors"
            >
              <Instagram className="h-4 w-4" /> @chocoloca_cafe
            </a>
            <span className="hidden sm:inline text-gray-600">·</span>
            <a
              href="https://www.instagram.com/cuephoriaclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4EB3D3] hover:text-[#7EC8E3] transition-colors"
            >
              <Instagram className="h-4 w-4" /> @cuephoriaclub
            </a>
            <span className="hidden sm:inline text-gray-600">·</span>
            <a
              href="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <MapPin className="h-4 w-4" /> Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChocoLoca;
