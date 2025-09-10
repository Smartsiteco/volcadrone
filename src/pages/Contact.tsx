import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, Video } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@volcadrone.fr',
      link: 'mailto:contact@volcadrone.fr'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localisation',
      value: 'Clermont-Ferrand, Auvergne-Rhône-Alpes',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      value: 'Lun-Ven: 9h-18h | Sam: 9h-12h',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com', handle: '@volcadrone' },
    { name: 'YouTube', url: 'https://youtube.com', handle: 'Volcadrone' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'Volcadrone' },
    { name: 'Facebook', url: 'https://facebook.com', handle: 'Volcadrone' }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#63c936]">Contact</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discutons de votre projet et donnons vie à vos idées grâce à la captation aérienne
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#63c936]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#63c936]">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-400 hover:text-[#63c936] transition-colors"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-400">{info.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-[#63c936]/10 to-transparent p-8 rounded-xl border border-[#63c936]/20">
                <Calendar className="w-12 h-12 text-[#63c936] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Réserver un rendez-vous</h3>
                <p className="text-gray-400 mb-6">
                  Planifiez une consultation gratuite pour discuter de votre projet en détail
                </p>
                <button className="w-full px-6 py-3 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors">
                  Calendly - Programmer une consultation
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#63c936]/10 to-transparent p-8 rounded-xl border border-[#63c936]/20">
                <Video className="w-12 h-12 text-[#63c936] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Visioconférence</h3>
                <p className="text-gray-400 mb-6">
                  Échangez directement en visioconférence pour présenter votre projet
                </p>
                <button className="w-full px-6 py-3 border-2 border-[#63c936] text-[#63c936] font-semibold rounded-lg hover:bg-[#63c936] hover:text-black transition-colors">
                  Programmer une visio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Envoyez-nous un <span className="text-[#63c936]">message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#63c936] focus:outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#63c936] focus:outline-none"
                        placeholder="votre@email.fr"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#63c936] focus:outline-none"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#63c936] focus:outline-none"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="corporate">Vidéo corporate</option>
                        <option value="wedding">Mariage / Événement</option>
                        <option value="real-estate">Immobilier</option>
                        <option value="commercial">Publicité / Commercial</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#63c936] focus:outline-none resize-none"
                      placeholder="Parlez-nous de votre projet, vos attentes, le lieu de tournage, les délais souhaités..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#63c936] text-black font-semibold rounded-lg hover:bg-[#52a82b] transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              </div>

              {/* Map & Social */}
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Notre <span className="text-[#63c936]">zone d'intervention</span>
                </h2>

                {/* Map Placeholder */}
                <div className="aspect-video bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#63c936] mx-auto mb-4" />
                    <p className="text-gray-400">Auvergne-Rhône-Alpes</p>
                    <p className="text-gray-500 text-sm">Clermont-Ferrand et environs</p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Suivez-nous</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <div className="w-8 h-8 bg-[#63c936] rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">{social.name[0]}</span>
                        </div>
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-gray-400 text-sm">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Questions <span className="text-[#63c936]">fréquentes</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-[#63c936]">Quels sont vos délais de livraison ?</h4>
                  <p className="text-gray-400 text-sm">Entre 24h et 72h selon la complexité du projet et le forfait choisi.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-[#63c936]">Travaillez-vous en extérieur Auvergne ?</h4>
                  <p className="text-gray-400 text-sm">Oui, nous intervenons dans toute la région Auvergne-Rhône-Alpes.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-[#63c936]">Fournissez-vous les autorisations de vol ?</h4>
                  <p className="text-gray-400 text-sm">Oui, nous gérons toutes les démarches administratives nécessaires.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-[#63c936]">Proposez-vous des forfaits personnalisés ?</h4>
                  <p className="text-gray-400 text-sm">Absolument, nous adaptons nos services à vos besoins spécifiques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;