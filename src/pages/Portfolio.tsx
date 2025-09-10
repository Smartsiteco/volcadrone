import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'cinema', name: 'Plans cinématographiques' },
    { id: 'pme', name: 'PME' },
    { id: 'fashion', name: 'Mode & Lifestyle' },
    { id: 'gastronomy', name: 'Gastronomie' },
    { id: 'events', name: 'Événements' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Campagne Aérienne - Restaurant Le Panorama',
      category: 'gastronomy',
      description: 'Vidéo promotionnelle pour restaurant gastronomique avec vues aériennes spectaculaires',
      image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'video'
    },
    {
      id: 2,
      title: 'Collection Automne - Marque Urbaine',
      category: 'fashion',
      description: 'Série de contenus pour réseaux sociaux avec prises de vues aériennes urbaines',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'video'
    },
    {
      id: 3,
      title: 'Présentation Entreprise - Tech Startup',
      category: 'pme',
      description: 'Vidéo corporate avec survol des locaux et équipes en action',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'video'
    },
    {
      id: 4,
      title: 'Mariage - Château de Volcaneville',
      category: 'events',
      description: 'Captation complète de mariage avec moments clés en drone',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'video'
    },
    {
      id: 5,
      title: 'Plans cinématographiques - Court-métrage',
      category: 'cinema',
      description: 'Séquences aériennes pour production indépendante',
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'video'
    },
    {
      id: 6,
      title: 'Immobilier de Luxe - Villa Panorama',
      category: 'pme',
      description: 'Présentation immobilière avec survol architectural',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'video'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre <span className="text-[#63c936]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300">
              Découvrez nos réalisations et laissez-vous inspirer par la qualité de nos productions aériennes
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#63c936] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors">
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#63c936] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <button className="flex items-center space-x-2 text-[#63c936] hover:text-[#52a82b] transition-colors">
                    <ExternalLink size={16} />
                    <span>Voir le projet</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ce que disent nos <span className="text-[#63c936]">clients</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#63c936] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">ML</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Marie Lefebvre</h4>
                  <p className="text-gray-400 text-sm">Restaurant Le Panorama</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Les images aériennes ont transformé notre communication. Nos réservations ont augmenté de 40% depuis la diffusion de la vidéo !"
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#63c936] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Julien Dubois</h4>
                  <p className="text-gray-400 text-sm">TechStart Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Professionnalisme exemplaire. Les prises de vues aériennes ont donné une dimension exceptionnelle à notre présentation d'entreprise."
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#63c936] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sophie Martin</h4>
                  <p className="text-gray-400 text-sm">Mariée</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Des souvenirs magiques capturés avec une sensibilité artistique remarquable. Nous recommandons vivement !"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;