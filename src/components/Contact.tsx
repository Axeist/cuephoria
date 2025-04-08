
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
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
      // Prepare message for SMS
      const smsContent = `New Message from Cuephoria Website:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'No Subject'}
Message: ${formData.message}`;
      
      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(smsContent);
      
      // Create WhatsApp API URL (this will open WhatsApp with pre-filled message)
      const whatsappUrl = `https://wa.me/918637625155?text=${encodedMessage}`;
      
      // Also send email as backup
      await fetch('https://formsubmit.co/ajax/cuephoriaclub@gmail.com', {
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
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="neon-text-pink">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have questions or want to learn more about Cuephoria? Reach out to us directly or visit our gaming lounge.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <a 
                      href="tel:+918637625155" 
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                      +91 86376 25155
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a 
                      href="mailto:cuephoriaclub@gmail.com" 
                      className="text-gray-400 hover:text-neon-pink transition-colors"
                    >
                      cuephoriaclub@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-400">
                      Roof Top, No.1, Shivani Complex, Vaithiyalingam St, Muthu Nagar, Thiruverumbur, Tamil Nadu 620013
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Opening Hours</h4>
                    <p className="text-gray-400">
                      11:00 AM - 11:00 PM, Every day
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gaming-accent">
                <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center hover:bg-neon-blue/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center hover:bg-neon-pink/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.249 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.359 1.057.419 2.227.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.06 1.17-.249 1.805-.419 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.359-2.227.419-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.06-1.805-.249-2.227-.419-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.359-1.057-.419-2.227-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.06-1.17.249-1.805.419-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.359 2.227-.419 1.265-.058 1.689-.072 4.948-.072z" />
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/918637625155" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center hover:bg-green-500/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Name*</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email*</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Message*</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue min-h-[120px]"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-neon-pink text-white font-semibold hover:bg-neon-pink/80 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-4 relative overflow-hidden">
          <div className="aspect-video w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2238984935098!2d78.75926407557512!3d10.794156358865413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf3f2c7173895%3A0xf7d55d8ea7b7e770!2sTwilight%20Dance%20Studio%20Thiruverumbur!5e0!3m2!1sen!2sin!4v1744028465453!5m2!1sen!2sin&map_id=2ae58f26a0d86fcd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
