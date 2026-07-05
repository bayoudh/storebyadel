"use client";

import { useEffect, useState } from "react";
import {
  Cpu,
  Wrench,
  ShieldCheck,
  Zap,
  MapPin,
  Phone,
  Mail,
  Laptop,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { animate, stagger, splitText } from 'animejs';


const products = [
  {
    img: "/images/product-laptop.jpg",
    name: "Ordinateurs Portables",
    desc: "Vente, upgrade & réparation",
  },
  {
    img: "/images/product-desktop.jpg",
    name: "PC Bureau & Gaming",
    desc: "Montage sur mesure",
  },
  {
    img: "/images/product-components.jpg",
    name: "Composants & SSD",
    desc: "RAM, disques, cartes graphiques",
  },
  {
    img: "/images/product-accessories.jpg",
    name: "Accessoires",
    desc: "Claviers, souris, périphériques",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Diagnostic complet",
    desc: "Identification précise des pannes matérielles et logicielles.",
  },
  {
    icon: Zap,
    title: "Intervention rapide",
    desc: "Réparation express sous 24–48h pour la majorité des cas.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie service",
    desc: "Toutes nos interventions sont garanties 3 mois.",
  },
  {
    icon: Cpu,
    title: "Upgrade hardware",
    desc: "Mise à niveau SSD, RAM, refroidissement, alimentation.",
  },
];

export default function Home() {
  const [recovery, setRecovery] = useState({
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    machineBrand: "",
    machineModel: "",
    machineSerial: "",
    machineIssue: "",
  });
  
  useEffect(() => {
   const { chars } = splitText('span', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});
    
  }, []);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitRecovery = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !recovery.clientName ||
      !recovery.clientPhone ||
      !recovery.machineBrand
    ) {
      alert("Merci de remplir les champs obligatoires.");
      return;
    }

    alert("Demande de récupération enregistrée. Nous vous contactons bientôt.");

    setRecovery({
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      machineBrand: "",
      machineModel: "",
      machineSerial: "",
      machineIssue: "",
    });
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contact.name || !contact.email || !contact.message) {
      alert("Merci de remplir les champs obligatoires.");
      return;
    }

    alert("Message envoyé ! Réponse sous 24h.");

    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-bl-xl rounded-tr-xl bg-cyan-500 flex items-center justify-center">
              <Cpu className="h-5 w-5 text-black" />
            </div>

            <span className="font-bold text-xl">
              ByAdel Store<span className="text-cyan-400">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#products" className="hover:text-white transition">
              Produits
            </a>

            <a href="#recovery" className="hover:text-white transition">
              Récupération
            </a>

            <a href="#expertise" className="hover:text-white transition">
              Expertise
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 transition px-4 py-2 rounded-bl-lg text-black font-medium"
          >
            Devis gratuit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1 text-sm text-white/70 mb-6">
              <MapPin className="h-4 w-4 text-cyan-400" />
              Teboulba, Tunisie
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Votre ordinateur mérite mieux qu'un simple dépannage.
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Atelier spécialisé en maintenance informatique : diagnostic
              précis, réparation rapide, et conseils experts pour ordinateurs
              portables, fixes et gaming.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#recovery"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-bl-xl rounded-tr-xl text-black font-semibold flex items-center gap-2"
              >
                <Laptop className="h-5 w-5" />
                Déposer ma machine
              </a>

              <a
                href="#expertise"
                className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-br-xl rounded-tl-xl"
              >
                Notre expertise
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                +500 machines réparées
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                Délai 24–48h
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/hero-tech.jpg"
              alt="Réparation ordinateur"
              width={1200}
              height={800}
              loading="eager"
              priority
              className="rounded-3xl w-full object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-cyan-400 uppercase text-sm mb-3">
              Galerie produits
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Du matériel prêt à performer.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-square object-cover"
                  width={1200}
                  height={800}
                />

                <div className="p-5">
                  <h3 className="font-semibold">{p.name}</h3>

                  <p className="text-sm text-white/60 mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section
        id="recovery"
        className="py-24 px-6 border-y border-white/10 bg-white/5"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-cyan-400 uppercase text-sm mb-3">
              Récupération machine
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Déposez votre PC, on s'occupe du reste.
            </h2>

            <p className="text-white/70 text-lg mb-8">
              Remplissez le formulaire avec les informations de votre machine.
            </p>
          </div>

          <form
            onSubmit={submitRecovery}
            className="bg-black border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom complet *"
                value={recovery.clientName}
                onChange={(e) =>
                  setRecovery({
                    ...recovery,
                    clientName: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
              />

              <input
                type="tel"
                placeholder="Téléphone *"
                value={recovery.clientPhone}
                onChange={(e) =>
                  setRecovery({
                    ...recovery,
                    clientPhone: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                value={recovery.clientEmail}
                onChange={(e) =>
                  setRecovery({
                    ...recovery,
                    clientEmail: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none sm:col-span-2"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Marque *"
                value={recovery.machineBrand}
                onChange={(e) =>
                  setRecovery({
                    ...recovery,
                    machineBrand: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Modèle"
                value={recovery.machineModel}
                onChange={(e) =>
                  setRecovery({
                    ...recovery,
                    machineModel: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Description de la panne"
                value={recovery.machineIssue}
                onChange={(e) =>
                  setRecovery({
                    ...recovery,
                    machineIssue: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none sm:col-span-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold py-4 rounded-b-xl flex items-center justify-center gap-2"
            >
              Demander la récupération
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-cyan-400 uppercase text-sm mb-3">
              Notre expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Une maintenance pensée par des passionnés.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 border border-white/10 rounded-bl-3xl rounded-tr-3xl p-6 hover:border-cyan-400 transition"
              >
                <div className="h-14 w-14 rounded-xl bg-cyan-500 flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-black" />
                </div>

                <h3 className="font-semibold text-lg">{s.title}</h3>

                <p className="text-sm text-white/60 mt-3">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-white/5 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-cyan-400 uppercase text-sm mb-3">Contact</p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Demandez votre devis gratuit.
            </h2>

            <div className="space-y-4">
              <div className="bg-black border border-white/10 rounded-2xl p-5 flex gap-4">
                <MapPin className="text-cyan-400" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-white/60">
                    Teboulba, Monastir, Tunisie
                  </div>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-2xl p-5 flex gap-4 ">
                <Phone className="text-cyan-400" />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <a href="tel:+21623420640" className="text-white/60 select-none transition">+216 23 420 640</a>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-2xl p-5 flex gap-4">
                <Mail className="text-cyan-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mail:byadelstore@gmail.com"  className="text-white/60  transition select-none ">byadelstore@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitContact}
            className="bg-black border border-white/10 rounded-3xl p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom *"
                value={contact.name}
                onChange={(e) =>
                  setContact({
                    ...contact,
                    name: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
              />

              <input
                type="tel"
                placeholder="Téléphone"
                value={contact.phone}
                onChange={(e) =>
                  setContact({
                    ...contact,
                    phone: e.target.value,
                  })
                }
                className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email *"
              value={contact.email}
              onChange={(e) =>
                setContact({
                  ...contact,
                  email: e.target.value,
                })
              }
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Votre message *"
              value={contact.message}
              onChange={(e) =>
                setContact({
                  ...contact,
                  message: e.target.value,
                })
              }
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold py-4 rounded-b-xl flex items-center justify-center gap-2"
            >
              Envoyer
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-white/50">
        © {new Date().getFullYear()} ByAdel Store Teboulba — Maintenance
        informatique
      </footer>
    </div>
  );
}
