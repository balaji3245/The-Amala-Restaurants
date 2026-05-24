import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
          <h2 className="text-5xl font-bold text-brand-dark tracking-tight">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bento-card p-6 md:p-8 flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 border border-brand/20">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark mb-2">Location</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Sonai Chowk, Ausa Ring Rd, Sona Nagar,<br className="hidden sm:block"/>Khadgaon, Latur, Maharashtra 413531</p>
              </div>
            </div>

            <div className="bento-card p-6 md:p-8 flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 border border-brand/20">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark mb-2">Phone</h4>
                <a href="tel:09923333989" className="text-gray-600 text-sm font-bold hover:text-brand transition-colors">+91 99233 33989</a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bento-card p-6 flex flex-col items-center text-center">
                <Mail size={24} className="text-brand mb-4" />
                <h4 className="font-bold text-xs tracking-wider uppercase text-brand-dark mb-2">Email</h4>
                <a href="mailto:info@theamala.com" className="text-gray-600 text-xs font-bold hover:text-brand">info@theamala.com</a>
              </div>
              <div className="rounded-[24px] p-6 bg-brand/90 text-white flex flex-col items-center text-center backdrop-blur-md border border-brand/20 shadow-lg shadow-brand/20">
                <Clock size={24} className="mb-4" />
                <h4 className="font-bold text-xs tracking-wider uppercase text-white/80 mb-2">Hours</h4>
                <p className="text-white text-xs font-bold">11 AM - 11 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bento-card p-2 h-[500px] lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.498336338421!2d76.5710688746006!3d18.37021177505689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83a3af0fa1a1%3A0xc62bfebaf181cb28!2sThe%20Amala%20Restaurant%20%26%20Banquets!5e0!3m2!1sen!2sin!4v1714571981242!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[20px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
