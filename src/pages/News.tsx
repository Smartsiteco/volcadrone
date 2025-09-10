import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Nouvelle réglementation drone 2024 : Ce qui change',
      excerpt: 'Découvrez les dernières évolutions de la réglementation française pour les drones professionnels et leur impact sur nos services.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 Mars 2024',
      category: 'Réglementation',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Nouveau partenariat avec les Offices de Tourisme',
      excerpt: 'Volcadrone étend ses services aux professionnels du tourisme pour promouvoir les destinations auvergnates.',
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '02 Mars 2024',
      category: 'Partenariats',
      readTime: '3 min'
    },
    {
      id: 3,
      title: 'Technologies 4K : L\'évolution de nos équipements',
      excerpt: 'Investissement dans les dernières technologies de captation pour offrir une qualité d\'image exceptionnelle à nos clients.',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '20 Février 2024',
      category: 'Technologie',
      readTime: '4 min'
    },
    {
      id: 4,
      title: 'Success Story : Campagne virale pour restaurant',
      excerpt: 'Comment notre approche créative a généré plus de 2 millions de vues pour la campagne d\'un restaurant clermontois.',
      image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '10 Février 2024',
      category: 'Étude de cas',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Formation pilotage drone : Nos conseils',
      excerpt: 'Guide complet pour débuter dans le pilotage de drone professionnel et obtenir les certifications nécessaires.',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '28 Janvier 2024',
      category: 'Formation',
      readTime: '8 min'
    },
    {
      id: 6,
      title: 'Tendances 2024 : Marketing vidéo et drones',
      excerpt: 'Analyse des tendances émergentes dans l\'utilisation des drones pour le marketing digital et la communication d\'entreprise.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 Janvier 2024',
      category: 'Tendances',
      readTime: '7 min'
    }
  ];

  const categories = ['Tous', 'Réglementation', 'Partenariats', 'Technologie', 'Étude de cas', 'Formation', 'Tendances'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredArticles = selectedCategory === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#63c936]">Actualités</span>
            </h1>
            <p className="text-xl text-gray-300">
              Suivez les dernières nouvelles de Volcadrone, nos projets récents et les évolutions du secteur drone
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
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#63c936] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-8 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-square">
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-[#63c936]/20 text-[#63c936] text-xs font-medium rounded-full">
                        {filteredArticles[0].category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{filteredArticles[0].date}</span>
                        <span>•</span>
                        <span>{filteredArticles[0].readTime} de lecture</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#63c936] transition-colors cursor-pointer">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <button className="flex items-center space-x-2 text-[#63c936] hover:text-[#52a82b] transition-colors self-start">
                      <span>Lire l'article</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <article key={article.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Tag size={14} className="text-[#63c936]" />
                      <span className="text-[#63c936] text-xs font-medium">{article.category}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#63c936] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500 text-xs">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <button className="text-[#63c936] hover:text-[#52a82b] transition-colors text-sm font-medium">
                      Lire plus →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#63c936]/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Restez informé de nos actualités
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Recevez nos derniers articles, conseils et offres exclusives directement dans votre boîte mail
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#63c936] focus:outline-none"
              />
              <button className="px-6 py-3 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;