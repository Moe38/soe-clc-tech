/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Factory, 
  ShieldCheck, 
  Leaf, 
  Thermometer, 
  Flame, 
  Weight, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  HardHat,
  Truck,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from './translations';

// Import local images
import heroImg from './assets/images/hero-construction.jpg';
import clcBlockImg from './assets/images/clc-block.jpg';
import clcPanelImg from './assets/images/clc-panel.jpg';
import clcFloorImg from './assets/images/clc-floor.jpg';
import factoryImg from './assets/images/factory-automation.jpg';

type Language = 'en' | 'my';

const NavItem = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ProductCard = ({ image, title, description, specs, buttonText }: { image: string, title: string, description: string, specs: string[], buttonText: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      <div className="absolute bottom-4 left-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="p-8">
      <p className="text-slate-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center text-sm text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
            {spec}
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group">
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'my' : 'en');
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${lang === 'my' ? 'font-sans' : 'font-sans'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Building2 className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white md:text-slate-900'}`}>
              SOE CLC<span className="text-emerald-600"> Tech</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#about">{t.nav.about}</NavItem>
            <NavItem href="#products">{t.nav.products}</NavItem>
            <NavItem href="#benefits">{t.nav.benefits}</NavItem>
            <NavItem href="#process">{t.nav.process}</NavItem>
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${scrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-bold">{lang === 'en' ? 'မြန်မာ' : 'EN'}</span>
            </button>

            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-emerald-200"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLang}
              className={`p-2 rounded-lg border transition-all ${scrolled ? 'border-slate-200 text-slate-600' : 'border-white/20 text-white'}`}
            >
              <Languages className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</NavItem>
                <NavItem href="#products" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</NavItem>
                <NavItem href="#benefits" onClick={() => setIsMenuOpen(false)}>{t.nav.benefits}</NavItem>
                <NavItem href="#process" onClick={() => setIsMenuOpen(false)}>{t.nav.process}</NavItem>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold text-center"
                >
                  {t.nav.contact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Construction site" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-emerald-500/30">
                {t.hero.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
                {t.hero.title.split('{highlight}')[0]}
                <span className="text-emerald-400">{t.hero.highlight}</span>
                {t.hero.title.split('{highlight}')[1]}
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
                  {t.hero.explore}
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                  {t.hero.quote}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: t.stats.capacity, value: '500k m³' },
              { label: t.stats.projects, value: '1,200+' },
              { label: t.stats.weight, value: '60%' },
              { label: t.stats.experience, value: '25+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">{t.benefits.badge}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{t.benefits.title}</h3>
            <p className="text-lg text-slate-600">{t.benefits.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Weight}
              title={t.benefits.items[0].title}
              description={t.benefits.items[0].desc}
            />
            <FeatureCard 
              icon={Thermometer}
              title={t.benefits.items[1].title}
              description={t.benefits.items[1].desc}
            />
            <FeatureCard 
              icon={Flame}
              title={t.benefits.items[2].title}
              description={t.benefits.items[2].desc}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title={t.benefits.items[3].title}
              description={t.benefits.items[3].desc}
            />
            <FeatureCard 
              icon={Leaf}
              title={t.benefits.items[4].title}
              description={t.benefits.items[4].desc}
            />
            <FeatureCard 
              icon={HardHat}
              title={t.benefits.items[5].title}
              description={t.benefits.items[5].desc}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">{t.products.badge}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">{t.products.title}</h3>
            </div>
            <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              {t.products.viewCatalog} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ProductCard 
              image={clcBlockImg}
              title={t.products.items[0].title}
              description={t.products.items[0].desc}
              specs={t.products.items[0].specs}
              buttonText={t.products.button}
            />
            <ProductCard 
              image={clcPanelImg}
              title={t.products.items[1].title}
              description={t.products.items[1].desc}
              specs={t.products.items[1].specs}
              buttonText={t.products.button}
            />
            <ProductCard 
              image={clcFloorImg}
              title={t.products.items[2].title}
              description={t.products.items[2].desc}
              specs={t.products.items[2].specs}
              buttonText={t.products.button}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">{t.process.badge}</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8">{t.process.title}</h3>
              <p className="text-slate-400 text-lg mb-12">{t.process.desc}</p>
              
              <div className="space-y-8">
                {t.process.steps.map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-emerald-500/30">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src={factoryImg} 
                  alt="Factory automation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-emerald-600 p-8 rounded-3xl hidden md:block">
                <Factory className="w-12 h-12 text-white mb-4" />
                <div className="text-2xl font-bold">{t.process.automated}</div>
                <div className="text-emerald-100/70">{t.process.quality}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-16">
                <h3 className="text-3xl font-black text-slate-900 mb-6">{t.contact.title}</h3>
                <p className="text-slate-600 mb-10">{t.contact.desc}</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.name}</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder={t.contact.form.placeholderName} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.email}</label>
                      <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder={t.contact.form.placeholderEmail} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.type}</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                      {t.contact.form.options.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.contact.form.message}</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder={t.contact.form.placeholderMessage}></textarea>
                  </div>
                  <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                    {t.contact.form.submit}
                  </button>
                </form>
              </div>
              
              <div className="bg-slate-900 p-12 md:p-16 text-white flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-8">{t.contact.info.title}</h4>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">{t.contact.info.hq}</div>
                        <div className="text-slate-400 whitespace-pre-line">{t.contact.info.address}</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">{t.contact.info.phone}</div>
                        <div className="text-slate-400">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">{t.contact.info.email}</div>
                        <div className="text-slate-400">sales@soeclctech.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Truck className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">{t.contact.info.logistics}</div>
                      <div className="text-sm text-slate-400">{t.contact.info.logisticsDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                  <Building2 className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  SOE CLC<span className="text-emerald-600"> Tech</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">{t.footer.links}</h5>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">{t.nav.about}</a></li>
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">{t.nav.about}</a></li>
                <li><a href="#products" className="hover:text-emerald-600 transition-colors">{t.nav.products}</a></li>
                <li><a href="#benefits" className="hover:text-emerald-600 transition-colors">{t.nav.benefits}</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">{t.footer.resources}</h5>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Technical Docs</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.designed}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
