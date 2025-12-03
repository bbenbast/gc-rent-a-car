import type { Car, TeamMember, CompanyInfo } from './types';
import chevroletImg from './assets/chevrolet.jpg';
import hyundaiImg from './assets/hyundai.jpg';
import toyotaHiluxImg from './assets/hilux.jpg';
import toyotaHiAceImg from './assets/hiace.jpg';
import mainLogo from './assets/mainLogo.jpg';
import serafim from './assets/serafim.jpg';
import gabriel from './assets/gabriel.jpg';

// ==========================================
// INSTRUCTIONS FOR IMAGES:
// Place your images in a folder named 'assets' in your public directory.
// Rename them or update the paths below.
// ==========================================

export const ASSETS = {
  // Cars
  car1: chevroletImg, // Placeholder for Chevrolet Spark (White)
  car2: hyundaiImg, // Placeholder for Hyundai Venue
  car3: toyotaHiluxImg, // Placeholder for Toyota Hilux
  car4: toyotaHiAceImg, // Placeholder for Toyota HiAce
  
  // Brand
  logo: mainLogo, // Replace with Image 6
  
  // Team
  member1: serafim, 
  member2: gabriel, // Replace with Gabriel Conde Image
  
  // Branding Backgrounds
  cardBg: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1600', // Background texture
};

export const COMPANY_INFO: CompanyInfo = {
  name: "GC-RENT-A-CAR",
  phone1: "+244 935 346 875",
  phone2: "+244 939 755 246",
  email: "gbrl_conde@hotmail.com",
  address: "Rotunda do Cabassango, Cabinda",
  nif: "000131759CA015"
};

export const FLEET_DATA: Car[] = [
  {
    id: 'c1',
    name: 'Chevrolet Spark',
    category: 'Económico',
    image: ASSETS.car1, // Maps to Image 1
    plate: 'CDA-01-88-AA',
    description: 'Compacto e económico, perfeito para a cidade.',
    features: ['Ar Condicionado', '4 Lugares', 'Transmissão Manual', 'Gasolina']
  },
  {
    id: 'c2',
    name: 'Hyundai Venue',
    category: 'SUV',
    image: ASSETS.car2, // Maps to Image 2
    plate: 'CDA-04-09-AA',
    description: 'Conforto e estilo para viagens mais longas.',
    features: ['Ar Condicionado', '5 Lugares', 'Bluetooth', 'Espaçoso']
  },
  {
    id: 'c3',
    name: 'Toyota Hilux',
    category: 'Pickup',
    image: ASSETS.car3, // Maps to Image 3
    description: 'Potência e resistência para qualquer terreno.',
    features: ['4x4', 'Cabine Dupla', 'Diesel', 'Caixa de Carga']
  },
  {
    id: 'c4',
    name: 'Toyota HiAce',
    category: 'Van',
    image: ASSETS.car4, // Maps to Image 5
    plate: 'LDA-58-27-AG',
    description: 'Ideal para transporte de grupos e logística.',
    features: ['Muitos Lugares', 'Espaçoso', 'Confortável para Grupos']
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 't1',
    name: 'Gabriel Conde',
    role: 'Director Geral',
    image: ASSETS.member2 // Maps to Image 9
  },
  {
    id: 't2',
    name: 'Serafim Luemba',
    role: 'Gestor',
    image: ASSETS.member1 // Maps to Image 7
  }
];