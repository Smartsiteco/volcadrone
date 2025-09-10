import React from 'react';
import { Check, Camera, Video, Palette, Calendar, Building, Heart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Captation Aérienne',
      description: 'Prises de vues aériennes professionnelles par drone pour tous types de projets'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Montage Vidéo',
      description: 'Post-production complète avec étalonnage, effets et sonorisation'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Création Publicitaire',
      description: 'Conception de contenus marketing impactants pour vos campagnes'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Couverture Événements',
      description: 'Documentation complète de vos événements professionnels et privés'
    }
  ];

  const packages = [
    {
      name: 'Essentiel',
      price: '299€',
      description: 'Parfait pour débuter avec la captation aérienne',
      features: [
        '2 heures de tournage',
        '10 photos haute résolution',
        'Vidéo courte (30s)',
        'Retouches de base',
        'Livraison 48h'
      ],
      popular: false
    },
    {
      name: 'Professionnel',
      price: '599€',
      description: 'Solution complète pour vos besoins marketing',
      features: [
        '4 heures de tournage',
        '25 photos haute résolution',
        '2 vidéos (30s + 60s)',
        'Post-production avancée',
        'Étalonnage professionnel',
        'Musique libre de droits',
        'Livraison 72h'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '999€',
      description: 'Package complet pour projets d\'envergure',
      features: [
        'Journée complète de tournage',
        '50 photos haute résolution',
        'Vidéo longue format',
        'Plusieurs formats de diffusion',
        'Révisions illimitées',
        'Consultation créative',
        'Support technique 1 mois',
        'Livraison express 24h'
      ],
      popular: false
    }
  ];

  const sectors = [
    {
      icon: <Building className="w-12 h-12 text-[#63c936]" />,
      title: 'BtoB - Entreprises',
      services: [
        'Présentation corporate',
        'Immobilier commercial',
        'Sites industriels',
        'Événements professionnels',
        'Communication interne'
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-[#63c936]" />,
      title: 'BtoC - Particuliers',
      services: [
        'Mariages & célébrations',
        'Baptêmes & communions',
        'Anniversaires',
        'Immobilier résidentiel',
        'Souvenirs de famille'
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#63c936]">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Des solutions professionnelles adaptées à vos besoins, pour donner vie à vos projets avec la captation aérienne
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#63c936]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#63c936]/30 transition-colors">
                  <div className="text-[#63c936]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-[#63c936]">Forfaits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choisissez le package qui correspond le mieux à vos besoins et à votre budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 rounded-xl p-8 ${
                  pkg.popular
                    ? 'ring-2 ring-[#63c936] scale-105'
                    : 'hover:bg-gray-800/70'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#63c936] text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Plus Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#63c936] mb-4">{pkg.price}</div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#63c936] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-[#63c936] text-black hover:bg-[#52a82b]'
                    : 'border-2 border-[#63c936] text-[#63c936] hover:bg-[#63c936] hover:text-black'
                }`}>
                  Choisir ce forfait
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-[#63c936]">Secteurs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nous accompagnons aussi bien les professionnels que les particuliers dans leurs projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{sector.title}</h3>
                <ul className="space-y-3">
                  {sector.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center space-x-3 justify-center">
                      <Check className="w-4 h-4 text-[#63c936] flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#63c936]/10 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <button className="px-8 py-4 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors">
            Demander un devis gratuit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;