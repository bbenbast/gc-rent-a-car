import React from 'react';
import { TEAM_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-6">
              Sobre a GC-RENT-A-CAR
            </h2>
            <div className="prose text-gray-500">
              <p className="mb-4">
                Somos uma empresa dedicada ao aluguer de viaturas em Cabinda, focada em oferecer 
                soluções de mobilidade com qualidade, segurança e preços competitivos.
              </p>
              <p className="mb-4">
                A nossa missão é garantir que cada cliente tenha uma experiência de condução 
                excepcional, seja para negócios, turismo ou necessidades do dia-a-dia.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Viaturas inspecionadas e seguras.</li>
                <li>Atendimento personalizado.</li>
                <li>Flexibilidade nos alugueres.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TEAM_DATA.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-brand-blue shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-brand-dark text-white text-xs px-2 py-1 rounded">
                    ID: {member.id === 't1' ? '001' : '002'}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-brand-blue font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;