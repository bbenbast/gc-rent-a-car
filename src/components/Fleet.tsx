import React from 'react';
import { FLEET_DATA, COMPANY_INFO } from '../constants';
import { CheckCircle } from 'lucide-react';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            A Nossa Frota
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Escolha o veículo perfeito para as suas necessidades em Cabinda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_DATA.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-56 overflow-hidden relative group">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm flex-1">{car.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    {car.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <CheckCircle size={12} className="text-brand-blue mr-1" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.phone1.replace(/\D/g,'')}?text=Olá, estou interessado em alugar o ${car.name}`}
                    className="w-full block text-center bg-brand-dark hover:bg-gray-800 text-white font-medium py-3 rounded transition-colors"
                  >
                    Reservar Agora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;