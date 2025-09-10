import React from 'react';
import { MapPin, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Clock className="w-8 h-8" />, value: '5+', label: 'Années d\'expérience' },
    { icon: <Users className="w-8 h-8" />, value: '200+', label: 'Clients satisfaits' },
    { icon: <Award className="w-8 h-8" />, value: '500+', label: 'Projets réalisés' },
    { icon: <MapPin className="w-8 h-8" />, value: '100%', label: 'Auvergne-Rhône-Alpes' }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Les Débuts',
      description: 'Première formation en pilotage de drone et obtention des certifications professionnelles'
    },
    {
      year: '2020',
      title: 'Spécialisation',
      description: 'Focus sur la captation aérienne pour l\'audiovisuel et développement d\'une expertise technique'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Élargissement des services avec la création de contenus publicitaires et marketing'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Reconnaissance dans le secteur avec plus de 200 clients et partenariats stratégiques'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  À <span className="text-[#63c936]">Propos</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Passionné par l'image et les nouvelles technologies, je transforme vos idées en contenus visuels exceptionnels grâce à la captation aérienne par drone.
                </p>
                <div className="flex items-center space-x-2 text-[#63c936]">
                  <MapPin size={20} />
                  <span>Basé à Clermont-Ferrand, Auvergne-Rhône-Alpes</span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pilote professionnel avec drone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#63c936]/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#63c936]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#63c936]">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#63c936] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mon <span className="text-[#63c936]">Histoire</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-gray-800/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#63c936]">La Passion de l'Image</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tout a commencé par une fascination pour la photographie et la vidéo. Dès mon plus jeune âge, 
                  j'étais captivé par la capacité de l'image à raconter des histoires, à émouvoir et à créer des 
                  connexions authentiques avec le public.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  L'arrivée des drones dans le domaine audiovisuel a été une révélation. Soudain, il devenait possible 
                  de capturer des perspectives inédites, de révéler la beauté sous un angle totalement nouveau.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#63c936]">L'Expertise Technique</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Au-delà de la passion, j'ai développé une expertise technique solide. Formations spécialisées, 
                  certifications professionnelles, maîtrise des équipements dernière génération : chaque projet 
                  bénéficie d'un savoir-faire affiné au fil des années.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mon approche allie créativité artistique et rigueur technique pour garantir des résultats 
                  qui dépassent vos attentes.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#63c936]">Ma Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Je crois fermement que chaque projet mérite une approche unique et personnalisée. 
                  Mon objectif n'est pas simplement de livrer des images, mais de créer des contenus 
                  qui génèrent de l'engagement et des résultats concrets pour vos activités.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Que vous soyez une entreprise cherchant à moderniser sa communication ou un particulier 
                  souhaitant immortaliser un moment précieux, je m'engage à transformer votre vision en réalité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mon <span className="text-[#63c936]">Parcours</span>
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#63c936]" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-[#63c936] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Mes <span className="text-[#63c936]">Valeurs</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#63c936]">Excellence</h3>
                <p className="text-gray-300">
                  Recherche constante de la perfection dans chaque prise de vue et chaque livraison
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#63c936]">Innovation</h3>
                <p className="text-gray-300">
                  Adoption des dernières technologies et techniques pour rester à la pointe du secteur
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#63c936]">Proximité</h3>
                <p className="text-gray-300">
                  Relation de confiance et accompagnement personnalisé tout au long de votre projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;