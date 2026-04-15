import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CuephoriaLiteAnnouncement from './CuephoriaLiteAnnouncement';

const Contact = () => {
  const { toast } = useToast();
  const [whatsappTarget, setWhatsappTarget] = useState<'chatbot' | 'human'>('chatbot');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare message for WhatsApp/email
      const smsContent = `New Message from Cuephoria Website:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'No Subject'}
Message: ${formData.message}`;

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(smsContent);

      // Choose WhatsApp recipient based on selection
      const phone = whatsappTarget === 'human' ? '917550025155' : '918637625155';

      // Create WhatsApp API URL (this will open WhatsApp with pre-filled message)
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

      // Also send email as backup
      await fetch('https://formsubmit.co/ajax/contact@cuephoria.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Message from Cuephoria Website',
          message: formData.message
        })
      });

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setWhatsappTarget('chatbot');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative bg-gaming-darker">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.07)_0,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(157,78,221,0.07)_0,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Heading ─────────────────────────────────────────────── */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-neon-blue/70 mb-3">Reach Us</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-neon-blue via-purple-300 to-neon-pink bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
            Have questions? Reach out to us directly or visit our gaming lounge.
          </p>
        </div>

        {/* Cuephoria Lite Announcement */}
        <div className="max-w-4xl mx-auto mb-8">
          <CuephoriaLiteAnnouncement variant="card" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Contact info ─────────────────────────────────────── */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gaming-darker/60 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 h-full">
              <h3 className="text-lg font-black text-white mb-6">Contact Information</h3>

              <div className="space-y-5">
                {/* Phone - Chatbot */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">WhatsApp Chatbot</h4>
                    <a href="tel:+918637625155" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">+91 86376 25155</a>
                    <p className="text-xs text-gray-500 mt-0.5">Automated assistant for quick help</p>
                  </div>
                </div>

                {/* Phone - Human */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Human Agent</h4>
                    <a href="tel:+917550025155" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">+91 75500 25155</a>
                    <p className="text-xs text-gray-500 mt-0.5">Call or WhatsApp a real person</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neon-pink/15 border border-neon-pink/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Email</h4>
                    <a href="mailto:contact@cuephoria.in" className="text-gray-400 hover:text-neon-pink transition-colors text-sm">contact@cuephoria.in</a>
                  </div>
                </div>

                {/* Location Main */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Main Branch</h4>
                    <p className="text-gray-400 text-sm">Roof Top, No.1, Shivani Complex, Vaithiyalingam St, Muthu Nagar, Thiruverumbur, TN 620013</p>
                  </div>
                </div>

                {/* Cuephoria Lite Location */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">
                      Cuephoria Lite{' '}
                      <span className="text-xs text-amber-400 font-normal">(Opening Sun Apr 12, 2026)</span>
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">QR64+CRV Electronics Bus Stop, Valavandankottai, TN 620015</p>
                    <a href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors text-xs">View on Google Maps →</a>
                    <p className="text-xs text-gray-500 mt-0.5">Opposite NIT Trichy • NIT students 50% off with NITLITE50</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neon-pink/15 border border-neon-pink/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Opening Hours</h4>
                    <p className="text-gray-400 text-sm">11:00 AM – 11:00 PM, Every Day</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-7 pt-6 border-t border-white/10">
                <h4 className="text-sm font-black text-white mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/profile.php?id=61574215405586&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-blue/20 hover:border-neon-blue/40 transition-colors">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/cuephoriaclub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-pink/20 hover:border-neon-pink/40 transition-colors">
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  {/* WhatsApp chatbot */}
                  <a href="https://wa.me/918637625155" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chatbot" title="WhatsApp Chatbot"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/40 transition-colors">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  </a>
                  {/* WhatsApp human */}
                  <a href="https://wa.me/917550025155" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Human Agent" title="WhatsApp Human Agent"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-400/20 hover:border-green-400/40 transition-colors">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact form ──────────────────────────────────────── */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gaming-darker/60 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 h-full">
              <h3 className="text-lg font-black text-white mb-6">Send us a Message</h3>

              {/* WhatsApp target selector */}
              <div className="mb-6">
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-widest">Send via WhatsApp to</label>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => setWhatsappTarget('chatbot')}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${whatsappTarget === 'chatbot' ? 'bg-neon-pink/20 border-neon-pink text-white' : 'bg-black/30 border-white/10 text-gray-300 hover:border-neon-pink/40'}`}>
                    Chatbot
                  </button>
                  <button type="button" onClick={() => setWhatsappTarget('human')}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${whatsappTarget === 'human' ? 'bg-neon-blue/20 border-neon-blue text-white' : 'bg-black/30 border-white/10 text-gray-300 hover:border-neon-blue/40'}`}>
                    Human Agent
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">Chatbot is faster for common questions; Human Agent for personalized help.</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold mb-1.5">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-neon-blue/60 transition-colors"
                      placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold mb-1.5">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-neon-blue/60 transition-colors"
                      placeholder="Your email" required />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-neon-blue/60 transition-colors"
                    placeholder="What's this about?" />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-neon-blue/60 transition-colors min-h-[110px] resize-none"
                    placeholder="Your message..." required />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-pink to-purple-500 text-white font-black hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Opens WhatsApp to {whatsappTarget === 'human' ? 'Human Agent (+91 75500 25155)' : 'Chatbot (+91 86376 25155)'}
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* ── Map ───────────────────────────────────────────────── */}
        <div className="mt-8 bg-gaming-darker/60 backdrop-blur-lg rounded-2xl border border-white/10 p-3 overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2163821337363!2d78.75949207292601!3d10.79473268935514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf30f1fabc2d9%3A0x83bd825f1d14931e!2sCuephoria%20Gaming%20Lounge%20%26%20Cafe!5e0!3m2!1sen!2sin!4v1744448248406!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
