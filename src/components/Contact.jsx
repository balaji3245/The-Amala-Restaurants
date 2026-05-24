import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white border-b-2 border-dashed border-brand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h4 className="text-brand italic font-serif text-xl mb-1">Get In Touch</h4>
          <h2 className="text-3xl font-bold text-brand-dark mb-2">Contact <span className="text-brand">Us</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-light border border-brand-beige">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/20">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-1 text-sm">Location</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Sonai Chowk, Ausa Ring Rd, Sona Nagar, Khadgaon, Latur, Maharashtra 413531</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-light border border-brand-beige">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/20">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-1 text-sm">Call Us</h4>
                <a href="tel:09923333989" className="text-brand text-xs font-bold hover:text-brand-green transition-colors">+91 99233 33989</a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-light border border-brand-beige">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/20">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-1 text-sm">Opening Hours</h4>
                <p className="text-gray-500 text-xs">Mon-Sun: 11:00 AM - 11:00 PM</p>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="h-full min-h-[300px] rounded-3xl overflow-hidden dashed-border-orange p-2 bg-white relative">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.498336338421!2d76.5710688746006!3d18.37021177505689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83a3af0fa1a1%3A0xc62bfebaf181cb28!2sThe%20Amala%20Restaurant%20%26%20Banquets!5e0!3m2!1sen!2sin!4v1714571981242!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
