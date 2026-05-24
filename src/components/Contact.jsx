import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-brand"></div>
            <span className="text-brand uppercase tracking-widest text-xs font-bold">Get In Touch</span>
            <div className="h-px w-8 bg-brand"></div>
          </div>
          <h2 className="text-4xl font-serif text-brand-dark">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-xl">
          
          <div className="p-12 border-r border-gray-100 flex flex-col justify-center">
            <h3 className="font-serif text-2xl text-brand-dark mb-8">Reach Out to Us</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark mb-2">Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Sonai Chowk, Ausa Ring Rd, Sona Nagar,<br/>Khadgaon, Latur, Maharashtra 413531</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark mb-2">Phone</h4>
                  <a href="tel:09923333989" className="text-gray-500 text-sm hover:text-brand transition-colors">+91 99233 33989</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark mb-2">Email</h4>
                  <a href="mailto:info@theamala.com" className="text-gray-500 text-sm hover:text-brand transition-colors">info@theamala.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark mb-2">Opening Hours</h4>
                  <p className="text-gray-500 text-sm">Everyday: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.498336338421!2d76.5710688746006!3d18.37021177505689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83a3af0fa1a1%3A0xc62bfebaf181cb28!2sThe%20Amala%20Restaurant%20%26%20Banquets!5e0!3m2!1sen!2sin!4v1714571981242!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
