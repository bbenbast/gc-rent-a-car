import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Contacte-nos</h2>
          <p className="mt-4 text-xl text-gray-400">
            Estamos prontos para lhe atender em Cabinda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition duration-300">
              <div className="bg-brand-blue p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Telefones</h3>
                <p className="mt-1 text-gray-300">
                  <a href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`} className="hover:text-brand-blue transition block">{COMPANY_INFO.phone1}</a>
                  <a href={`tel:${COMPANY_INFO.phone2.replace(/\s/g, '')}`} className="hover:text-brand-blue transition block">{COMPANY_INFO.phone2}</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg">
              <div className="bg-brand-blue p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="mt-1 text-gray-300">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-blue transition">{COMPANY_INFO.email}</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg">
              <div className="bg-brand-blue p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Localização</h3>
                <p className="mt-1 text-gray-300">{COMPANY_INFO.address}</p>
                <p className="text-sm text-gray-500 mt-1">Cabinda, Angola</p>
              </div>
            </div>
          </div>

          {/* Visual Business Card Representation */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-white to-gray-200 text-brand-dark p-8 rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden">
               {/* Decorative Shapes */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-20 rounded-bl-full -mr-10 -mt-10"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-dark opacity-10 rounded-tr-full -ml-10 -mb-10"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-8">
                   <div className="font-bold text-2xl tracking-tighter text-brand-dark border-b-4 border-brand-blue pb-1">
                     GC
                   </div>
                   <div className="text-right">
                     <h3 className="font-bold text-lg">GABRIEL CONDE</h3>
                     <p className="text-sm text-brand-blue font-semibold">Director Geral</p>
                   </div>
                 </div>

                 <div className="space-y-3 text-sm font-medium">
                   <div className="flex items-center gap-3">
                     <Phone size={16} className="text-brand-blue" />
                     <span>{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Mail size={16} className="text-brand-blue" />
                     <span>{COMPANY_INFO.email}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <MapPin size={16} className="text-brand-blue" />
                     <span>{COMPANY_INFO.address}</span>
                   </div>
                 </div>

                 <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
                   GC-RENT-A-CAR | ALUGUER DE VIATURAS
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;