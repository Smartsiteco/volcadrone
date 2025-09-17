import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Zap, Target } from 'lucide-react';

const Home: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Video Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <iframe
              src="https://drive.google.com/file/d/1jTl1EDe86A79e7Bb4kF1mh8DACZRd4ld/preview"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                border: 'none',
                pointerEvents: 'none',
                transform: 'scale(1.1)',
                transformOrigin: 'center center'
              }}
              onLoad={(e) => {
                const iframe = e.target as HTMLIFrameElement;
                try {
                  // Essayer de déclencher l'autoplay après le chargement
                  setTimeout(() => {
                    iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                  }, 1000);
                } catch (error) {
                  console.log('Autoplay attempt failed:', error);
                }
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Captation Aérienne
              <span className="block text-[#63c936]"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Nous créons des vidéos ciblées et stratégiques des phtoos authentiques et réalisons des missions techniques par drone pour accompagner les agences, entreprises et collectivités.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${
              showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="#secteurs"
                className="px-8 py-4 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors flex items-center justify-center space-x-2 group"
              >
                <Eye size={20} />
                <span>Découvrir nos services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#63c936] text-[#63c936] font-semibold rounded-lg hover:bg-[#63c936] hover:text-black transition-colors flex items-center justify-center space-x-2"
              >
                <span>Devis gratuit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Créateur de Contenus Visuels
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
             <strong>Prenez de la hauteur, donnez du sens à vos images</strong><br></br> Basé à Clermont-Ferrand et disponible partout en France, j’accompagne entreprises, collectivités et marques dans la création de contenus visuels uniques, qui marquent les esprits et révèlent l’essence de chaque projet. <br></br> À travers des prises de vues aériennes spectaculaires et des montages vidéo sur mesure, je transforme vos idées en expériences visuelles mémorables. Chaque image est pensée pour capturer l’émotion, chaque séquence est montée pour révéler l’intention. <br></br><br></br><strong>Un savoir-faire technique et artistique</strong><br></br> Pilote professionnel de drone, diplômé et certifié, j’allie une maîtrise technique pointue à une véritable sensibilité artistique en post-production. Ce double savoir-faire me permet de créer des contenus puissants, élégants et profondément authentiques : des vidéos qui racontent votre histoire avec justesse, rythme et intensité. <br></br><br></br> <strong>Un accompagnement sur mesure</strong> <br></br>De la préparation au tournage, du montage à la diffusion, je vous accompagne avec rigueur, créativité et engagement. <br></br> <br></br><strong>Chaque projet devient une collaboration personnalisée, guidée par l’exigence de qualité et l’envie de sublimer votre image.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#63c936]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#63c936]/30 transition-colors">
                  <Eye className="w-8 h-8 text-[#63c936]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vision Unique</h3>
                <p className="text-gray-400">
                  Perspective aérienne innovante pour capturer vos projets sous un angle exceptionnel
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#63c936]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#63c936]/30 transition-colors">
                  <Zap className="w-8 h-8 text-[#63c936]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technologie Avancée</h3>
                <p className="text-gray-400">
                  Équipements professionnels de dernière génération pour des résultats impeccables
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#63c936]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#63c936]/30 transition-colors">
                  <Target className="w-8 h-8 text-[#63c936]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Résultats Garantis</h3>
                <p className="text-gray-400">
                  Contenus optimisés pour maximiser l'engagement et atteindre vos objectifs marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="secteurs" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nos <span className="text-[#63c936]">Secteurs d'Activités</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                De l'immobilier au tourisme, nous accompagnons tous les secteurs avec des solutions aériennes sur mesure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Immobilier & Construction */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Immobilier & Construction
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Agences immobilières (photos/vidéos premium)</li>
                  <li>• Promoteurs immobiliers (projets neufs)</li>
                  <li>• Architectes & bureaux d'études</li>
                  <li>• Entreprises BTP (timelapse, suivi technique)</li>
                </ul>
              </div>

              {/* Tourisme & Loisirs */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Tourisme & Loisirs
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Offices de tourisme (valorisation territoire)</li>
                  <li>• Hôtels, resorts, campings</li>
                  <li>• Stations de ski, parcs d'attractions</li>
                  <li>• Événementiel sportif (courses, festivals)</li>
                </ul>
              </div>

              {/* Automobile & Transport */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Automobile & Transport
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Concessions automobiles (spots publicitaires)</li>
                  <li>• Marinas & bateaux (vente de yachts)</li>
                  <li>• Entreprises transport/logistique</li>
                </ul>
              </div>

              {/* Agriculture & Environnement */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Agriculture & Environnement
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Exploitations agricoles (agritech, cultures)</li>
                  <li>• Producteurs viticoles (domaines)</li>
                  <li>• Collectivités & ONG environnementales</li>
                </ul>
              </div>

              {/* Industrie & Énergie */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Industrie & Énergie
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Centrales solaires, éoliennes, barrages</li>
                  <li>• Usines & sites industriels</li>
                  <li>• Startups & entreprises green tech</li>
                </ul>
              </div>

              {/* Institutions & Collectivités */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Institutions & Collectivités
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Mairies & collectivités (territoire, patrimoine)</li>
                  <li>• Écoles/universités (communication)</li>
                  <li>• Associations culturelles (événements)</li>
                </ul>
              </div>

              {/* Communication & Médias */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Communication & Médias
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Agences de publicité & marketing</li>
                  <li>• Producteurs audiovisuels (spots TV, clips)</li>
                  <li>• Créateurs de contenu & influenceurs</li>
                </ul>
              </div>

              {/* Sports & Événements */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Sports & Événements
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Clubs sportifs (matchs, entraînements)</li>
                  <li>• Festivals, concerts, mariages</li>
                  <li>• Team building & événements corporate</li>
                </ul>
              </div>

              {/* Commerce & Luxe */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-[#63c936]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#63c936] transition-colors">
                  Commerce & Luxe
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Centres commerciaux (promotions)</li>
                  <li>• Marques de luxe (campagnes haut de gamme)</li>
                  <li>• Joaillerie, mode (shootings uniques)</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-300 mb-8">
                Votre secteur ne figure pas dans cette liste ? Contactez-nous pour discuter de votre projet spécifique.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors"
              >
                <span>Discuter de votre projet</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#63c936]/10 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à donner vie à vos projets ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise en captation aérienne peut transformer votre communication visuelle
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors"
          >
            <span>Commencer votre projet gratuitement</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
