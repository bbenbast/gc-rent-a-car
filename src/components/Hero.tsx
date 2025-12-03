import React from 'react';
import { ASSETS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-dark overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={ASSETS.cardBg} 
          alt="Road background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Explore Cabinda com <span className="text-brand-blue">Conforto</span> e Segurança
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mb-10">
          A sua escolha número um para aluguer de viaturas. De carros económicos a SUVs e Pickups robustas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#fleet"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-blue-600 md:text-lg transition-all transform hover:scale-105"
          >
            Ver Frota Disponível
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-md text-gray-100 hover:bg-white hover:text-brand-dark md:text-lg transition-all"
          >
            Fale Connosco <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;