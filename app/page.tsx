"use client"

import { Building2, Hammer, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)

  if (element) {
    const yOffset = -110
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }
}

export default function ConstructionWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden scroll-smooth">
      <style>{`
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          animation: logoMarquee 38s linear infinite;
          align-items: center;
        }
          .logo-fade-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%);
          } 
        .logo-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <button
              onClick={() => scrollToSection('anasayfa')}
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-black/20 border border-yellow-400/20 backdrop-blur-md transition-all duration-500 hover:border-yellow-400/50 hover:bg-black/30"
              aria-label="AKSAS İnşaat Anasayfa"
            >
              <img
                src="/aksas-logo.png"
                alt="AKSAS Logo"
                className="w-[105%] h-[105%] object-contain scale-[1.32] drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]"
              />
            </button>

            <div>
              <h1 className="font-bold text-2xl tracking-wide text-white">AKSAS</h1>
              <p className="text-xs text-gray-300">İNŞAAT & MİMARLIK</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-white text-sm font-medium">
            <button onClick={() => scrollToSection('anasayfa')} className="group relative px-5 py-2.5 rounded-2xl text-[15px] tracking-wide font-semibold text-white/90 backdrop-blur-sm transition-all duration-500 hover:text-yellow-300 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/0 before:transition-all before:duration-500 hover:before:border-yellow-400/20 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:transition-all after:duration-500 hover:after:w-[70%]">
              Anasayfa
            </button>
            <button onClick={() => scrollToSection('projeler')} className="group relative px-5 py-2.5 rounded-2xl text-[15px] tracking-wide font-semibold text-white/90 backdrop-blur-sm transition-all duration-500 hover:text-yellow-300 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/0 before:transition-all before:duration-500 hover:before:border-yellow-400/20 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:transition-all after:duration-500 hover:after:w-[70%]">
              Projeler
            </button>
            <button onClick={() => scrollToSection('hizmetler')} className="group relative px-5 py-2.5 rounded-2xl text-[15px] tracking-wide font-semibold text-white/90 backdrop-blur-sm transition-all duration-500 hover:text-yellow-300 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/0 before:transition-all before:duration-500 hover:before:border-yellow-400/20 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:transition-all after:duration-500 hover:after:w-[70%]">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection('referanslar')} className="group relative px-5 py-2.5 rounded-2xl text-[15px] tracking-wide font-semibold text-white/90 backdrop-blur-sm transition-all duration-500 hover:text-yellow-300 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/0 before:transition-all before:duration-500 hover:before:border-yellow-400/20 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:transition-all after:duration-500 hover:after:w-[70%]">
              Referanslar
            </button>
            <button onClick={() => scrollToSection('iletisim')} className="group relative px-5 py-2.5 rounded-2xl text-[15px] tracking-wide font-semibold text-white/90 backdrop-blur-sm transition-all duration-500 hover:text-yellow-300 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/0 before:transition-all before:duration-500 hover:before:border-yellow-400/20 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:transition-all after:duration-500 hover:after:w-[70%]">
              İletişim
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="anasayfa" className="relative min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-5 py-2 rounded-full text-yellow-400 mb-8">
              <Hammer className="w-4 h-4" />
              <span className="text-sm">Modern Yapılar • Güçlü Temeller</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
              Geleceği
              <span className="block text-yellow-400">Birlikte İnşa</span>
              Ediyoruz
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8 max-w-2xl">
              Lüks konut projeleri, ticari yapılar ve modern mimari çözümlerle
              güvenilir ve estetik yaşam alanları oluşturuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button 
                onClick={() => scrollToSection('projeler')}
                className="group px-8 py-4 bg-yellow-500 hover:bg-yellow-400 rounded-2xl text-black font-bold flex items-center gap-3 transition shadow-2xl shadow-yellow-500/30">
                Projeleri İncele
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => scrollToSection('iletisim')}
                className="px-8 py-4 border border-white/30 hover:bg-white hover:text-black rounded-2xl text-white font-semibold transition"
              >
                Teklif Al
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
              {[
                ['30+', 'Yıllık Deneyim'],
                ['120+', 'Tamamlanan Proje'],
                ['98%', 'Memnuniyet'],
              ].map(([num, text], i) => (
                <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-yellow-400">{num}</div>
                  <div className="text-sm text-gray-300 mt-2">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
                alt="Modern yapı"
                className="w-[520px] h-[700px] object-cover rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/10"
              />

              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl w-72">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500 p-3 rounded-2xl">
                    <CheckCircle2 className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Premium Kalite</h3>
                    <p className="text-sm text-gray-500">Uluslararası standartlarda işçilik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 md:px-20 bg-[#f8f8f8] relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
              alt="İnşaat"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-10 right-10 bg-black text-white p-8 rounded-3xl shadow-2xl">
              <div className="text-5xl font-black text-yellow-400">30+</div>
              <p className="mt-2 text-gray-300">Yıllık Sektör Tecrübesi</p>
            </div>
          </div>

          <div>
            <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm">
              Hakkımızda
            </span>

            <h2 className="text-5xl font-black mt-5 leading-tight">
              Modern Mimari ile
              <span className="block text-yellow-500">Güvenli Yapılar</span>
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              AKSAS olarak estetik, dayanıklılık ve fonksiyonelliği bir araya getiriyoruz.
              Her projede yüksek kalite standartlarını uygulayarak müşterilerimize uzun ömürlü
              yaşam alanları sunuyoruz.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                'Depreme dayanıklı yapılar',
                'Premium malzeme kalitesi',
                'Modern mimari çözümler',
                'Zamanında teslim garantisi',
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    group
                    flex items-center gap-3
                    bg-white
                    p-5
                    rounded-[28px]
                    border border-gray-200
                    shadow-[0_6px_20px_rgba(0,0,0,0.04)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-yellow-400/30
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  "
                >
                  <CheckCircle2 className="text-yellow-500 transition-transform duration-500 group-hover:scale-110" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* References */}
      <section id="referanslar" className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-[#f5f5f5] border-y border-gray-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-yellow-500 tracking-[0.35em] uppercase text-sm font-bold">
              Referanslar
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              Birlikte Çalıştığımız Markalar
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-2xl mx-auto">
              Sektörün önde gelen markalarına yönelik gerçekleştirdiğimiz projelerle kalite ve güven odaklı çözümler sunuyoruz.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto overflow-hidden logo-fade-mask py-6">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent"></div>
            
            

            <div className="flex w-max logo-marquee-track gap-7 px-6">
              {[...[
                '/logos/onkoloji.png',
                '/logos/acibadem.png',
                '/logos/egm.png',
                '/logos/iskender.png',
                '/logos/sabanci.png',
                '/logos/zorlu.png',
                '/logos/lider.png',
                '/logos/volvo.png',
                '/logos/skyland.png',
              ], ...[
                '/logos/onkoloji.png',
                '/logos/acibadem.png',
                '/logos/egm.png',
                '/logos/iskender.png',
                '/logos/sabanci.png',
                '/logos/zorlu.png',
                '/logos/lider.png',
                '/logos/volvo.png',
                '/logos/skyland.png',
              ]].map((brand, index) => (
                <div
                  key={index}
                  className="h-32 min-w-[290px] rounded-[32px] border border-gray-200 bg-gradient-to-b from-white to-gray-50 flex items-center justify-center hover:bg-black hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] hover:-translate-y-1"
                >
                  <img 
                  src={brand}
                  alt="Referans Logo"
                  className={`
                    object-contain
                    transition-all
                    duration-500

                    ${
                      brand.includes('egm')
                        ? 'max-h-24'
                        : brand.includes('acibadem')
                        ? 'max-h-8 max-w-[230px]'
                        : brand.includes('onkoloji')
                        ? 'max-h-28 max-w-[230px]'
                        : brand.includes('sabanci')
                        ? 'max-h-28 max-w-[230px]'
                        : brand.includes('zorlu')
                        ? 'max-h-14'
                        : brand.includes('lider')
                        ? 'max-h-32 max-w-[230px]'
                        : brand.includes('volvo')
                        ? 'max-h-24 max-w-[230px]'
                        : brand.includes('skyland')
                        ? 'max-h-24 max-w-[230px]'
                        : brand.includes('iskender')
                        ? 'max-h-22 max-w-[230px]'
                        : 'max-h-16 max-w-[230px]'
                        
  }
`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="py-28 px-6 md:px-20 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-yellow-400 tracking-[0.3em] uppercase text-sm font-bold">
              Hizmetler
            </span>
            <h2 className="text-5xl font-black mt-5">
              İnşaat • Tadilat • Dekorasyon
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-8">
              Anahtar teslim projelerden premium iç mekan tasarımlarına kadar geniş hizmet ağı.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Konut Projeleri',
                desc: 'Modern mimariyle estetik ve güvenli yaşam alanları inşa ediyoruz.',
                img: '/images/konut-projesi.webp',
              },
              {
                title: 'Daire Tadilatı',
                desc: 'Komple daire yenileme, mutfak & banyo dönüşümü ve anahtar teslim tadilat çözümleri.',
                img:'/images/daire-renovasyon.webp',
              },
              {
                title: 'İtalyan Boya & Dekorasyon',
                desc: 'Dekoratif italyan boya, LED tavan ve premium iç mimari uygulamaları.',
                img: '/images/italyan-boya.webp',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/5 hover:-translate-y-3 transition duration-500 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.01] ${
                      service.title === 'Daire Tadilatı'
                      ? 'object-center brightness-[1.03]'
                      : service.title === 'İtalyan Boya & Dekorasyon'
                      ? 'object-center'
                      : service.title === 'Konut Projeleri'
                      ? 'object-[38%_center]'
                      : ''
                  }`}
                  />
                </div>

                <div className="p-10 relative z-10 flex flex-col flex-1">
                  <div className="w-20 h-20 rounded-3xl bg-yellow-500 flex items-center justify-center mb-8 shadow-2xl shadow-yellow-500/20">
                    <Building2 className="text-black w-10 h-10" />
                  </div>

                  <h3 className="text-3xl font-bold mb-5">{service.title}</h3>
                  <p className="text-gray-400 leading-8 text-lg">{service.desc}</p>

                  <button className="mt-auto pt-8 flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-4 transition-all">
                    Detayları İncele
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Renovation Banner */}
          <div className="mt-24 rounded-[40px] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
              alt="Tadilat"
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-10 md:px-16 text-white">
                <span className="text-yellow-400 tracking-[0.3em] uppercase text-sm font-bold">
                  Premium Tadilat
                </span>

                <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
                  Yaşam Alanlarını
                  <span className="block text-yellow-400">
                    Baştan Tasarlıyoruz
                  </span>
                </h2>

                <p className="mt-6 text-lg text-gray-300 leading-8 max-w-2xl">
                  Modern daire tadilatları, dekoratif italyan boya uygulamaları,
                  alçı & LED tavan sistemleri ve anahtar teslim dekorasyon çözümleri sunuyoruz.
                </p>

                <button className="mt-10 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-2xl transition shadow-2xl shadow-yellow-500/20">
                  Tadilat Projelerini İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projeler" className="py-28 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-bold">
                Projeler
              </span>
              <h2 className="text-5xl font-black mt-4">Öne Çıkan Yapılar</h2>
            </div>

            <button className="px-7 py-4 rounded-2xl bg-black text-white hover:bg-gray-800 transition font-semibold">
              Tüm Projeler
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                img: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
                title: 'Lüks Konut Projesi',
                desc: 'Modern mimari ve sosyal yaşam alanlarıyla premium konut projeleri.',
                tag: 'Konut Projesi',
              },
              {
                img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
                title: 'Özel Villa Tasarımı',
                desc: 'Modern mimariyle lüks ve prestijli yaşam alanları tasarlıyoruz.',
                tag: 'Villa Projesi',
              },
              {
                img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop',
                title: 'Fabrika & Ticari Yapı',
                desc: 'Yüksek mühendislik standartlarında endüstriyel ve ticari tesisler.',
                tag: 'Ticari Proje',
              },
            ].map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[36px] bg-white shadow-2xl border border-gray-100">
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt="Proje"
                    className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {project.tag}
                    </span>
                    <span className="text-gray-400">2026</span>
                  </div>

                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-gray-500 mt-4 leading-7">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="py-28 px-6 md:px-20 bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <span className="text-yellow-400 tracking-[0.3em] uppercase text-sm font-bold">
              İletişim
            </span>

            <h2 className="text-5xl font-black mt-5 leading-tight">
              Projenizi
              <span className="block text-yellow-400">Birlikte Planlayalım</span>
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
              Yeni yaşam alanları ve ticari projeler için profesyonel ekibimizle iletişime geçin.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-5">
                <div className="bg-yellow-500 p-4 rounded-2xl">
                  <Phone className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400">Telefon</p>
                  <h3 className="text-xl font-bold">+90 532 424 92 91</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-yellow-500 p-4 rounded-2xl">
                  <Mail className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400">E-Posta</p>
                  <h3 className="text-xl font-bold">info@aksasinsaat.com</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-yellow-500 p-4 rounded-2xl">
                  <MapPin className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400">Lokasyon</p>
                  <h3 className="text-xl font-bold">İstanbul / Ümraniye</h3>
                </div>
              </div>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/mykakela"
            method="POST"
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[40px] shadow-2xl space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Ad Soyad"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              name="email"
              placeholder="E-posta"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Mesajınız"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500"
            ></textarea>

            <button 
              type="submit"
              className="w-full py-5 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition shadow-2xl shadow-yellow-500/20">
              Teklif Gönder
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 border-t border-white/10 py-8 text-center">
        <p>© 2026 AKSAS İnşaat. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

