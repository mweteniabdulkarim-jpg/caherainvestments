/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Truck, 
  Users, 
  CreditCard, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Mail, 
  ArrowRight,
  ShoppingBag,
  Building2,
  Handshake,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface NavLink {
  name: string;
  href: string;
}

interface Product {
  name: string;
  description: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Constants ---
const CONTACT = {
  whatsapp: '+255756774107',
  phone: '+255717047547',
  email: 'caherainvestments@gmail.com',
  location: 'Tegeta kwa ndevu, Dar es Salaam - Tanzania',
  whatsappLink: 'https://indeii.shop/s/cahera-investments'
};

const Mascot = () => {
  const [target, setTarget] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseClick = (e: MouseEvent) => {
      setTarget({ x: e.clientX - 50, y: e.clientY - 50 });
    };
    window.addEventListener('click', handleMouseClick);
    return () => window.removeEventListener('click', handleMouseClick);
  }, []);

  return (
    <motion.div
      animate={{ 
        x: target.x, 
        y: target.y,
        rotate: [0, -5, 5, 0],
      }}
      transition={{ 
        x: { type: "spring", stiffness: 50, damping: 10 },
        y: { type: "spring", stiffness: 50, damping: 10 },
        rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
      }}
      className="fixed z-[60] pointer-events-none w-24 h-24"
      style={{ left: 0, top: 0 }}
    >
      <img 
        src="/KAHERO.png" 
        alt="KAHERO Mascot" 
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </motion.div>
  );
};

const NAV_LINKS: NavLink[] = [
  { name: 'Nyumbani', href: '#home' },
  { name: 'Bidhaa zinazotengenezwa na CAHERA', href: '#in-house' },
  { name: 'Maduka ya Bei Poa', href: '#stores' },
  { name: 'Mkopo wa Bidhaa', href: '#credit' },
  { name: 'Mawasiliano', href: '#contact' },
];

const PRODUCTS: Product[] = [
  { name: 'Ngano Bora', description: 'Azam Ngano Bora - Ngano ya kiwango cha juu kwa mahitaji yote ya kuoka.', image: '/flour.png' },
  { name: 'Mahindi Meupe na ya Njano', description: 'Mahindi ya hali ya juu kwa ajili ya usambazaji wa taasisi na kusaga.', image: '/maize.png' },
  { name: 'Mchele Bora', description: 'Mchele mweupe wa daraja la 1 wenye harufu nzuri, uliosafishwa na kuchambuliwa kwa ajili ya usambazaji wa jumla.', image: '/rice.png' },
  { name: 'Sukari Safi', description: 'Bwana Sukari - Sukari ya kahawia ya kiwango cha juu kutoka Kampuni ya Sukari ya Kilombero.', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=400' },
  { name: 'Kunde na Maharage', description: 'Aina mbalimbali zikiwemo choroko, soya, na kunde.', image: '/beans.png' },
  { name: 'Nafaka za Asili', description: 'Ulezi na Mtama kwa ajili ya lishe bora na milo ya asili.', image: '/millet.png' },
  { name: 'Mtama', description: 'Mtama wa hali ya juu kwa matumizi mbalimbali ya viwandani na nyumbani.', image: '/sorghum.png' },
  { name: 'Vinywaji Baridi', description: 'Bidhaa zote za Coca-Cola na Pepsi kwa ajili ya rejareja na jumla.', image: '/soda.png' },
  { name: 'Maji ya Chupa ya Premium', description: 'Maji ya chupa ya hali ya juu ikiwemo chapa za Uhai, Hill, na GSM.', image: '/water.png' },
  { name: 'Mbegu za Lishe', description: 'Mbegu za Maboga - Zilizokaangwa na mbichi kwa ajili ya vitafunio vya afya.', image: '/seeds.png' },
  { name: 'Bidhaa Maalum ya CAHERA', description: 'Bidhaa yetu iliyo na mahitaji makubwa kwa msimu huu.', image: '/item.png' },
];

const IN_HOUSE_PRODUCTS: Product[] = [
  { name: 'Dagaa wa Dhahabu wa CAHERA', description: 'Dagaa wa kiwango cha juu waliosafishwa na kukaushwa kwa jua, wenye virutubisho vingi na tayari kupikwa.', image: '/CAHERA DAGAA.png' },
  { name: 'ToTo Boost', description: 'Mchanganyiko wa uji wa lishe ulioundwa maalum kwa ajili ya ukuaji na maendeleo ya afya ya mtoto.', image: '/CAHERA ToTo Boost.png' },
  { name: 'Afya Mix', description: 'Mchanganyiko wa uji wa afya kwa familia nzima, ukiwa na vitamini muhimu.', image: '/Afya mix.png' },
];

const TESTIMONIALS: Testimonial[] = [
  { name: 'Bi. Fatma', role: 'Mwanzilishi/Mmiliki wa City Wide Catering', content: 'CAHERA wamekuwa washirika wetu wanaoaminika kwa miaka 3 sasa. Ubora wa mchele wao ni thabiti na hawajawahi kuchelewa kufikisha mzigo.' },
  { name: 'Bw. Francis', role: 'Afisa Ununuzi katika Knowledge Academy', content: 'Huduma ya mkopo ilisaidia shule yetu kusimamia mzunguko wa fedha wakati wa miezi migumu. Hakika ni biashara inayoelewa wateja wake.' },
  { name: 'Bw. Silas', role: 'Muuzaji mwenye duka dogo Kunduchi', content: 'Kununua moja kwa moja kutoka kwao kunamaanisha bei bora kwangu. Naweza kushindana na maduka makubwa kwa sababu CAHERA inapunguza gharama zangu.' },
];

const FAQS: FAQItem[] = [
  { question: 'Je, mnasambaza kwa jumla?', answer: 'Ndiyo, tunajikita katika usambazaji wa jumla kwa shule, hospitali, hoteli, na wauzaji wakubwa kote Dar es Salaam.' },
  { question: 'Je, mnahudumia shule na taasisi?', answer: 'Hakika. Tuna mikataba maalum kwa wanunuzi wa taasisi yenye ratiba za uwasilishaji na masharti rahisi ya malipo.' },
  { question: 'Mpango wa mkopo unafanyaje kazi?', answer: 'Wateja waaminifu walioidhinishwa na wafanyakazi waliohakikiwa wanaweza kupata mkopo wa muda mfupi (siku 7-30) kusaidia kusimamia shughuli zao za biashara.' },
  { question: 'Ninawezaje kuweka oda?', answer: 'Njia ya haraka zaidi ni kupitia WhatsApp au kupiga simu moja kwa moja. Unaweza pia kutembelea ofisi yetu iliyopo Dar es Salaam.' },
  { question: 'Je, mnatoa huduma ya usafirishaji?', answer: 'Ndiyo, tunatoa huduma za usafirishaji zinazoaminika ndani ya Dar es Salaam kwa oda za jumla. Oda ndogo za rejareja zinaweza kuchukuliwa katika eneo letu.' },
  { question: 'Ni bidhaa gani mnazouza?', answer: 'Bidhaa zetu kuu ni mchele, maharage, mahindi, sukari, na mafuta ya kupikia, pamoja na bidhaa nyingine muhimu za walaji.' },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className={`flex items-center gap-1.5 ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
              <div className="p-0.5">
                <img 
                  src="/Company Logo.png" 
                  alt="CAHERA Logo" 
                  className="h-10 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-black tracking-tighter">
                <span className="text-2xl">CAHERA</span>
                <span className="text-lg ml-1">Investments</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={CONTACT.whatsappLink} 
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-all"
            >
              <MessageCircle size={18} />
              Oda Sasa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${scrolled ? 'text-gray-700' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href={CONTACT.whatsappLink} 
                  className="w-full bg-emerald-600 text-white px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle size={20} />
                  Oda Sasa
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: (url: string) => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
          alt="Internal Warehouse Storage for Agricultural and Consumer Goods" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Suluhisho la Biashara na Usambazaji Duniani
            </span>
            <h2 className="text-lg md:text-xl font-medium text-emerald-100 mb-2">
              Premium goods at affordable prices
            </h2>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6">
              <span className="text-amber-500">Bidhaa Bora Kwa Bei Nafuu.</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 mb-10 leading-relaxed opacity-90">
              CAHERA Investments ni mshirika wako mkuu kwa biashara ya jumla na usambazaji wa bidhaa muhimu za walaji. Tunaziba pengo kati ya uzalishaji bora na mahitaji ya biashara yako.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href={CONTACT.whatsappLink} 
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle size={24} />
              Oda Sasa
            </a>
            <button 
              onClick={() => onOpenModal('https://docs.google.com/forms/d/e/1FAIpQLSflZ9Wx79np1bfHRSFRTQM2Fqt5lwnsBsVXxcfYmlhL9waCtw/viewform?embedded=true')}
              className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-lg"
            >
              <CreditCard size={24} />
              Omba Mkopo wa Bidhaa
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-amber-500" />
              <span className="text-sm font-medium">Usambazaji Unaaminika</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-amber-500" />
              <span className="text-sm font-medium">Upatikanaji wa Jumla</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-amber-500" />
              <span className="text-sm font-medium">Huduma ya Kuaminika</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Handshake className="text-emerald-600" size={32} />, title: "Ununuzi wa Moja kwa Moja", desc: "Tunanunua moja kwa moja kutoka kwa wazalishaji ili kuondoa madalali, kuhakikisha unapata bidhaa bora kwa bei nzuri." },
    { icon: <Clock className="text-emerald-600" size={32} />, title: "Usambazaji Unaaminika", desc: "Usiishiwe na mzigo. Tunadumisha viwango thabiti vya bidhaa ili kusaidia mahitaji ya biashara yako." },
    { icon: <ShieldCheck className="text-emerald-600" size={32} />, title: "Bei Shindani", desc: "Mfumo wetu wa jumla umeundwa ili kuongeza faida yako na kupunguza gharama za nyumbani." },
    { icon: <Truck className="text-emerald-600" size={32} />, title: "Uwezo wa Oda za Jumla", desc: "Tumejipanga kushughulikia oda kubwa kwa shule, hospitali, na taasisi kubwa." },
    { icon: <CreditCard className="text-emerald-600" size={32} />, title: "Upatikanaji wa Mikopo", desc: "Wateja waaminifu walioidhinishwa wanaweza kupata mizunguko rahisi ya malipo ili kuendeleza biashara zao." },
    { icon: <MessageCircle className="text-emerald-600" size={32} />, title: "Msaada wa Haraka", desc: "Mawasiliano ya moja kwa moja kupitia WhatsApp na simu kwa ajili ya makadirio ya haraka na taarifa za oda." },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Kwa Nini Utuchague Sisi</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-emerald-950">Faida za Kufanya Kazi na CAHERA</p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-emerald-50/30 hover:shadow-xl transition-all group">
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCategories = () => {
  return (
    <>
      <section id="in-house" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Bidhaa zinazotengenezwa na CAHERA</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-950">Bidhaa Zetu za Kipekee</p>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IN_HOUSE_PRODUCTS.map((p, i) => (
              <div key={i} className="bg-emerald-50/30 rounded-3xl p-8 border border-emerald-100 hover:shadow-xl transition-all group">
                <div className="h-48 rounded-2xl overflow-hidden mb-6 shadow-md">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-3">{p.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{p.description}</p>
                <div className="flex items-center gap-2 text-emerald-700 font-bold cursor-pointer hover:gap-3 transition-all">
                  Jifunze Zaidi <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stores" className="py-24 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Mtandao wa Rejareja</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Tembelea Maduka Yetu ya <span className="text-emerald-950">"Bei Poa"</span>
              </h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Tunaleta ubora karibu nawe. Maduka yetu ya "Bei Poa" kote Dar es Salaam yanauza bidhaa zote za walaji, nafaka, na bidhaa muhimu kwa bei nafuu ambazo huwezi kuzipata kwingineko. Tunauza rejareja na jumla.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <MapPin className="mb-4" />
                  <h4 className="font-bold mb-2">Maeneo Mengi</h4>
                  <p className="text-sm opacity-70">Yapo katika maeneo rahisi kufika kote Dar es Salaam.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <CreditCard className="mb-4" />
                  <h4 className="font-bold mb-2">Bei Bora</h4>
                  <p className="text-sm opacity-70">Bei za rejareja zinazoshinda soko la mtaa.</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/CAHERA+Investments+Dar+Es+Salaam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-2xl inline-block text-center"
              >
                Tafuta Duka Karibu Nawe
              </a>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800" 
                  alt="Bei Poa Store" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CustomerSegments = ({ onOpenModal }: { onOpenModal: (url: string) => void }) => {
  const segments = [
    {
      title: "Taasisi na Shule",
      icon: <Building2 className="text-white" size={32} />,
      desc: "Mikataba ya usambazaji wa jumla inayoaminika kwa shule, hospitali, Taasisi na watoa huduma za chakula wa makampuni.",
      need: "Uthabiti na Uwezo wa Jumla",
      cta: "Omba Makadirio",
      color: "bg-emerald-800"
    },
    {
      title: "Wanunuzi wa Jumla",
      icon: <Handshake className="text-white" size={32} />,
      desc: "Wateja wa jumla na wamiliki wa maduka.",
      need: "Bei za Jumla na Uthabiti",
      cta: "Oda Sasa",
      color: "bg-amber-600"
    },
    {
      title: "Wanunuzi wa Rejareja",
      icon: <ShoppingBag className="text-white" size={32} />,
      desc: "Wateja wa kila siku wanaotafuta mazao, nafaka and bidhaa za nyumbani bora kwa bei nzuri kuliko za sokoni.",
      need: "Bei Nafuu na Ubora",
      cta: "Oda Sasa",
      color: "bg-emerald-700"
    },
    {
      title: "Mkopo wa Bidhaa",
      icon: <Users className="text-white" size={32} />,
      desc: "Huduma ya mikopo kwa watu waliohakikiwa, biashara ndogo ndogo na wauzaji.",
      need: "Msaada wa Mzunguko wa Fedha",
      cta: "Omba Mkopo wa Bidhaa",
      color: "bg-emerald-950"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Nani Tunawahudumia</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-emerald-950">Suluhisho Maalum na Usambazaji wa Jumla</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((s, i) => (
            <div key={i} className="flex flex-col rounded-3xl overflow-hidden shadow-lg">
              <div className={`${s.color} p-10 flex flex-col items-center text-center text-white h-full`}>
                <div className="mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="opacity-90 leading-relaxed mb-6 text-sm">{s.desc}</p>
                <div className="mt-auto bg-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  Lengo: {s.need}
                </div>
              </div>
              <div className="bg-gray-50 p-8">
                {s.title === "Mkopo wa Bidhaa" ? (
                  <button 
                    onClick={() => onOpenModal('https://docs.google.com/forms/d/e/1FAIpQLSflZ9Wx79np1bfHRSFRTQM2Fqt5lwnsBsVXxcfYmlhL9waCtw/viewform?embedded=true')}
                    className="w-full py-4 bg-white border border-gray-200 text-emerald-900 font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                  >
                    {s.cta}
                  </button>
                ) : s.title === "Taasisi na Shule" ? (
                  <button 
                    onClick={() => onOpenModal('https://docs.google.com/forms/d/e/1FAIpQLSczE1VPW3omV9K48ZVh6M4qxq1FuqUjqRxoKUV16GKVY78luw/viewform?embedded=true')}
                    className="w-full py-4 bg-white border border-gray-200 text-emerald-900 font-bold rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    {s.cta}
                  </button>
                ) : (
                  <a 
                    href={CONTACT.whatsappLink}
                    className="w-full py-4 bg-white border border-gray-200 text-emerald-900 font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                  >
                    {s.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstitutionalSupply = ({ onOpenModal }: { onOpenModal: (url: string) => void }) => {
  return (
    <section id="institutional" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/30 skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Biashara na Usambazaji wa Jumla</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Mshirika Anayeaminika kwa <span className="text-amber-500">Timu za Ununuzi</span>
            </h3>
            <p className="text-lg text-emerald-100/80 mb-10 leading-relaxed">
              Tunaelewa changamoto za kusimamia minyororo ya usambazaji kwa mashirika makubwa. CAHERA Investments inatoa msaada wa kitaalamu wa ununuzi, ubora wa bidhaa thabiti, na ahadi ya uwasilishaji kwa wakati inayofanya shughuli zako ziendelee vizuri.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Uwasilishaji wa jumla ulioratibiwa kote Dar es Salaam",
                "Udhibiti mkali wa ubora kwa kila mfuko wa mazao",
                "Ankara rasmi na bei zilizo wazi",
                "Nafasi ya ushirikiano wa usambazaji wa muda mrefu"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-amber-500 rounded-full p-1">
                    <CheckCircle2 size={16} className="text-emerald-950" />
                  </div>
                  <span className="text-emerald-50 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onOpenModal('https://docs.google.com/forms/d/e/1FAIpQLSczE1VPW3omV9K48ZVh6M4qxq1FuqUjqRxoKUV16GKVY78luw/viewform?embedded=true')}
              className="bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-xl"
            >
              Omba Makadirio
            </button>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-emerald-900/50">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
                alt="Institutional Supply" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Truck className="text-emerald-700" />
                </div>
                <span className="text-emerald-950 font-bold">Uwasilishaji kwa Wakati</span>
              </div>
              <p className="text-gray-500 text-sm">Kiwango cha 99% cha uwasilishaji wenye mafanikio kwa shule.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreditProgram = ({ onOpenModal }: { onOpenModal: (url: string) => void }) => {
  return (
    <section id="credit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-[3rem] p-8 md:p-16 border border-amber-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Wasiliana Nasi", desc: "Tuwasiliane kupitia WhatsApp au tembelea ofisi yetu." },
                  { step: "02", title: "Uhakiki", desc: "Toa maelezo ya msingi ya biashara kwa ajili ya uhakiki wa haraka." },
                  { step: "03", title: "Idhini", desc: "Pata ukomo wako wa mkopo uliothibitishwa ndani ya saa 48." },
                  { step: "04", title: "Biashara", desc: "Agiza kwa mkopo na ulipe kwa mzunguko mliokubaliana." },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                    <span className="text-amber-600 font-black text-2xl mb-2 block">{s.step}</span>
                    <h4 className="font-bold text-emerald-950 mb-2">{s.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Kuwezesha Ukuaji</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-6 leading-tight">
                <span className="text-amber-600">Mkopo wa Bidhaa</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Huduma ya mikopo kwa watu waliohakikiwa, biashara ndogo ndogo na wauzaji. Mpango wetu wa mkopo umeundwa kusaidia kusimamia mzunguko wa fedha kwa masharti rahisi ya malipo.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Mizunguko mifupi ya malipo (siku 7 - 30)",
                  "Hakuna riba kandamizi",
                  "Sifa rahisi kwa wanunuzi wa mara kwa mara",
                  "Ufuatiliaji wa wazi na taarifa za akaunti"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span className="text-emerald-950 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onOpenModal('https://docs.google.com/forms/d/e/1FAIpQLSflZ9Wx79np1bfHRSFRTQM2Fqt5lwnsBsVXxcfYmlhL9waCtw/viewform?embedded=true')}
                className="w-full sm:w-auto bg-emerald-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-950 transition-all shadow-lg inline-block text-center"
              >
                Omba Mkopo wa Bidhaa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Wasiliana Nasi", desc: "Tupigie simu au WhatsApp ukiwa na mahitaji yako.", icon: <Phone size={24} /> },
    { title: "Thibitisha Oda", desc: "Tunatoa makadirio na kuthibitisha idadi.", icon: <CheckCircle2 size={24} /> },
    { title: "Uwasilishaji/Kuchukua", desc: "Bidhaa zinafikishwa au zipo tayari kuchukuliwa.", icon: <Truck size={24} /> },
    { title: "Malipo", desc: "Lipa kwa pesa taslimu, pesa ya mtandao, au mkopo.", icon: <CreditCard size={24} /> },
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Mchakato Rahisi</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-emerald-950">Jinsi ya Kuanza</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-center border border-emerald-100">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-3">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Maswali?</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-emerald-950">Maswali Yanayoulizwa Mara kwa Mara</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all"
              >
                <span className="font-bold text-emerald-950 pr-4">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-amber-600" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'Mnunuzi wa Rejareja', message: '' });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Inatuma ombi lako...' });

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Asante! Ombi lako limetumwa kwa mafanikio. Tutakuwasiliana hivi karibuni.' 
        });
        setFormData({ name: '', phone: '', type: 'Mnunuzi wa Rejareja', message: '' });
      } else {
        throw new Error(data.error || 'Imeshindwa kutuma ombi. Tafadhali jaribu tena baadae.');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Hitilafu imetokea. Tafadhali wasiliana nasi kupitia WhatsApp.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Wasiliana Nasi</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-8 leading-tight">
              Uko Tayari Kuagiza?
            </h3>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Iwe wewe ni mnunuzi wa taasisi au mteja wa rejareja, tuko hapa kukuhudumia. Jaza fomu au tumia maelezo yetu ya mawasiliano hapa chini.
            </p>

              <div className="space-y-8">
                <a 
                  href="https://wa.me/255756774107" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 group"
                >
                  <div className="bg-emerald-600 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 mb-1">WhatsApp</h4>
                    <p className="text-gray-500 group-hover:text-emerald-600 transition-colors">{CONTACT.whatsapp}</p>
                  </div>
                </a>
                <a 
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-6 group"
                >
                  <div className="bg-amber-600 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 mb-1">Simu</h4>
                    <p className="text-gray-500 group-hover:text-amber-600 transition-colors">{CONTACT.phone}</p>
                  </div>
                </a>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-6 group"
                >
                  <div className="bg-emerald-950 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 mb-1">Barua Pepe</h4>
                    <p className="text-gray-500 group-hover:text-emerald-900 transition-colors">{CONTACT.email}</p>
                  </div>
                </a>
                <a 
                  href="https://www.google.com/maps/search/Tegeta+kwa+ndevu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 group"
                >
                  <div className="bg-emerald-950 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 mb-1">Mahali</h4>
                    <p className="text-gray-500 group-hover:text-emerald-900 transition-colors">{CONTACT.location}</p>
                  </div>
                </a>
              </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.type !== 'idle' && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                  status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' :
                  'bg-amber-50 text-amber-700 border border-amber-100'
                }`}>
                  {status.message}
                </div>
              )}
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-2">Jina Kamili</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  placeholder="Jina Lako"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-2">Namba ya Simu</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  placeholder="+255..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-2">Aina ya Mteja</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                >
                  <option>Mnunuzi wa Rejareja</option>
                  <option>Shule / Taasisi</option>
                  <option>Mpishi / Hoteli</option>
                  <option>Muuzaji Mdogo</option>
                  <option>Mwombaji wa Mkopo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-2">Ujumbe / Mahitaji</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  placeholder="Unahitaji bidhaa gani na kwa kiasi gani?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status.type === 'loading'}
                className="w-full bg-emerald-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? 'Inatuma...' : 'Tuma Ombi'} <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <img 
                src="/Company Logo.png" 
                alt="CAHERA Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-amber-600 p-1.5 rounded-lg">
                <ShoppingBag size={24} />
              </div>
            </div>
            <p className="text-emerald-100/60 leading-relaxed mb-8">
              Mshirika anayeaminika wa Tanzania kwa biashara ya jumla na usambazaji wa bidhaa muhimu za walaji. Upataji wa moja kwa moja, bei bora, na usambazaji wa kuaminika.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Viungo vya Haraka</h4>
            <ul className="space-y-4 text-emerald-100/60">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-amber-500 transition-all">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Maelezo ya Mawasiliano</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500" />
                <span>{CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-500" />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Saa za Kazi</h4>
            <ul className="space-y-4 text-emerald-100/60 text-xs">
              <li className="flex justify-between">
                <span>Jumatatu - Ijumaa:</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Jumamosi:</span>
                <span className="text-white">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Jumapili:</span>
                <span className="text-white text-amber-500">Imefungwa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-emerald-100/40 text-sm">
          <p>© {new Date().getFullYear()} CAHERA Investments. Haki zote zimehifadhiwa. Imeundwa kwa ajili ya ukuaji.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href={CONTACT.whatsappLink} 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
        Oda Sasa
      </span>
    </a>
  );
};

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-emerald-950 shadow-md transition-all"
        >
          <X size={24} />
        </button>
        <div className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; url: string }>({ isOpen: false, url: '' });

  const openModal = (url: string) => setModalConfig({ isOpen: true, url });
  const closeModal = () => setModalConfig({ isOpen: false, url: '' });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      <Mascot />
      <Navbar />
      <main>
        <Hero onOpenModal={openModal} />
        <WhyChooseUs />
        <ProductCategories />
        <CustomerSegments onOpenModal={openModal} />
        <InstitutionalSupply onOpenModal={openModal} />
        <CreditProgram onOpenModal={openModal} />
        <HowItWorks />
        
        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Shuhuda</h2>
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-950">Inaaminika na Biashara za Mitaa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-3xl relative">
                  <div className="text-amber-500 text-6xl font-serif absolute top-4 right-8 opacity-20">“</div>
                  <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
                  <div>
                    <h4 className="font-bold text-emerald-950">{t.name}</h4>
                    <p className="text-emerald-700 text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />

      <AnimatePresence>
        {modalConfig.isOpen && (
          <Modal isOpen={modalConfig.isOpen} onClose={closeModal}>
            <iframe 
              src={modalConfig.url} 
              className="w-full h-full border-none"
              title="Google Form"
            >
              Loading…
            </iframe>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
