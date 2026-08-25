"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Church, Globe, Map, Stethoscope, Users, Heart, 
  TrendingUp, MapPin, Cross, Activity, Sparkles 
} from "lucide-react";

const missionsStats = [
  { value: "100+", label: "Churches Planted", sublabel: "54 by missions team, 46+ offspring", icon: Church },
  { value: "21", label: "Buildings Constructed", sublabel: "With more to be completed", icon: Cross },
  { value: "12+", label: "Medical Outreaches", sublabel: "In 11 communities", icon: Stethoscope },
  { value: "4,000+", label: "Lives Touched", sublabel: "Through medical services", icon: Heart },
];

const plantedChurches = [
  "Daboglu", "Jangbaryilli", "Sankpala", "Jeyayilli", "Inayili", "Belamposo",
  "Karigbinto", "Kusawgu", "Aduuyili", "Kachereshi", "Wambong", "Kpawumo",
  "Altar of Grace - Tolon", "Gburimani", "Kpaniyili", "Wantugu", "Chirifoy-ili",
  "Tangayili", "Tigriyaya", "Boanayili", "Sorugu", "Yong Duuni", "Diagu",
  "Kpalgu", "Tumonayili", "Kanshegu", "Nantong", "Taha", "Zuo", "Wayamba",
  "Kpentaung", "Na-moar", "Janfiuk", "Gbankuni Sinsab Jinna", "Tinkpang",
  "Nagboar", "Ark of Salvation", "Walewale", "CCC - Kogni",
  "Great Grace Gospel Center - Wa", "Tusik", "Nanpontibauk", "Nabulik AG"
];

const medicalCommunities = [
  "Tolon", "Guanarigu", "Sorugu", "Gbashe", "YongDuuni", "Dufa", "Taha",
  "Nanton-Kpawamo", "Kanvili", "Kyentaung", "Namoar"
];

export default function MissionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/slides/6.jpg"
            alt="Missions"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="text-5xl sm:text-6xl font-bold font-serif mb-3">
                Our History is His Story
              </div>
              <div className="text-7xl sm:text-8xl font-bold font-serif text-yellow-300">
                PLANTING OVER A<br />100 CHURCHES
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 mt-8 max-w-3xl mx-auto">
              Missions has always been the heartbeat of the ministry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Missions Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ten years of expanding God's kingdom across Northern Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {missionsStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-4xl font-bold font-serif text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over these ten years, we have planted <strong className="text-primary">54 rural churches</strong> — 
                43 by our missions teams and 11 by collaborating with other churches. Some of the churches 
                are non-Assemblies of God.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Besides these, some of our offspring churches have also planted more than 50 churches, 
                bringing the numbers to more than a <strong className="text-accent">100 churches in the Wind and Fire family tree of churches</strong>. 
                These figures include the Charismatic churches that sprung out of us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Church Planting Locations */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Assemblies of God Churches
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Churches We've Planted
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Across Northern Ghana regions — spreading the gospel to every community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4">
              {plantedChurches.map((church, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="flex items-center gap-2 group"
                >
                  <Church className="w-3.5 h-3.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {church}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gratitude Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-accent/5 rounded-2xl p-8 border border-accent/20"
          >
            <Heart className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Partners in Mission
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong className="text-foreground">Thanks to Cedar Mountain Chapel</strong> for 
                collaborating with us to plant the Kpaniyili and Chirifoyili churches. They also 
                put up the church building for Kpaniyili.
              </p>
              <p>
                <strong className="text-foreground">Thanks to Bishop Boniface Keelson and Aunti Evelyn Keelson</strong> for 
                their support to raise the Jangbaryili church.
              </p>
              <p>
                <strong className="text-foreground">Thanks to Mr Kelvin</strong> for helping us raise the Wantugu church.
              </p>
              <p>
                <strong className="text-foreground">God bless Mr Alec and Dr Priscilla Wobil</strong> for their continuous 
                support to our missionary endeavors.
              </p>
              <p className="mt-4 text-primary font-semibold">
                Thanks to the Bimbagu Central AG, Gbadaug AG and Bunkpurugu Central AG for collaborating with us. 
                God bless you abundantly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Medical Missions */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-600/10 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Activity className="w-3.5 h-3.5" />
              Healthcare Ministry
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Medical Missions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bringing healthcare and hope to underserved communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <Stethoscope className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Medical Fellowship Impact
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Since its inception in 2013, the medical fellowship has successfully 
                  carried out <strong className="text-foreground">twelve (12) outreaches</strong> in 
                  eleven (11) communities across the Northern and North-East regions.
                </p>
                <p>
                  Many of these outreaches preceded the planting of local churches in those communities. 
                  Overall, <strong className="text-teal-600">more than 4,000 people</strong> have 
                  benefited from our free medical services.
                </p>
                <p>
                  We have also collaborated with <strong className="text-foreground">Zoe Medical Center</strong> to 
                  provide free surgeries to some needy people. Thanks to Zoe medical center.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-8 text-white shadow-lg"
            >
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">
                Health Education & Services
              </h3>
              <div className="space-y-4">
                <p className="text-white/90">
                  The medical fellowship fulfills its core mandate to maintain a healthy church through:
                </p>
                <ul className="space-y-3">
                  {[
                    "Health education and promotion",
                    "Registration and renewal of Health Insurance for 500+ people",
                    "Well-equipped infirmary within church complex",
                    "First aid, basic testing, and counseling services",
                    "Support during church services and gatherings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-yellow-200 font-semibold pt-4">
                  Through the visionary leadership of our father, Rev A. L. Fant, 
                  the medical fellowship now serves both church members and the wider community.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Communities Reached */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
              Communities Reached with Medical Care
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {medicalCommunities.map((community, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium hover:bg-teal-100 transition-colors"
                >
                  {community}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Missions in Action
            </h2>
            <p className="text-muted-foreground">
              Planting churches and transforming communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/slides/5.jpg",
              "/slides/7.jpg",
              "/gallery/ministry-08.jpg",
              "/gallery/event-05.jpg",
              "/slides/8.jpg",
              "/gallery/sunday-07.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Missions ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reaching Out to Royals */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Reaching Out to Royals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personal ministry to traditional leaders bringing entire communities to Christ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <Users className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Chiefs for Christ
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We have ministered to <strong className="text-amber-600">8 rural chiefs</strong> at the personal level 
                  and led <strong className="text-primary">5 of them to Christ</strong>.
                </p>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <div className="text-4xl font-bold font-serif text-amber-700 mb-2">92</div>
                  <p className="text-sm text-muted-foreground">
                    Family members of these chiefs also came to Christ, creating a ripple effect 
                    of transformation throughout their communities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "/gallery/event-01.jpg",
                "/gallery/event-02.jpg",
                "/gallery/ministry-01.jpg",
                "/gallery/ministry-02.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src={img}
                    alt={`Ministry to royals ${i + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Missions */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Reaching Out to the Nations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              International missions impacting lives across continents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                flag: "🇳🇬",
                country: "Nigeria",
                title: "Boko Haram Zones",
                description: "Missionaries commissioned to minister in dangerous Boko Haram-controlled zones of Northern Nigeria",
                icon: Globe,
                color: "from-emerald-500 to-green-600",
              },
              {
                flag: "🇺🇦",
                country: "Ukraine",
                title: "2 Churches Planted",
                description: "Established 2 churches with about 56 members. Caretaker remained in Ghana during COVID-19",
                icon: Church,
                color: "from-blue-500 to-cyan-600",
              },
              {
                flag: "🇮🇱",
                country: "Israel",
                title: "Language Study",
                description: "Missionaries studying Hebrew to enhance Bible translation mandate",
                icon: Globe,
                color: "from-violet-500 to-purple-600",
              },
            ].map((mission, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{mission.flag}</div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mission.color} flex items-center justify-center mb-4 shadow-md`}>
                  <mission.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {mission.title}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold mb-3">
                  {mission.country}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bible Translation Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10 mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">
                Missionaries Naaza and Hannah Boate
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A missionary couple was commissioned three months after their wedding to start ministry in 
                the <strong className="text-foreground">Boko Haram controlled zones of Northern Nigeria</strong>. 
                Missionaries Naaza and Hannah Boate used one and a half years to learn the 
                <strong className="text-primary"> Cicipu language</strong> and translated the Bible into this language.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Their lives continue to impact the nations. They are currently in <strong className="text-accent">Israel 
                to study Hebrew</strong> to enhance their mandate of translating the Bible into several languages.
              </p>
              <div className="bg-white rounded-xl p-6 border border-border mt-6">
                <p className="text-sm text-muted-foreground italic text-center">
                  "We look forward to storming Europe soon" — A testament to the expanding vision for global missions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Missionary Impact Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              "/gallery/ministry-03.jpg",
              "/gallery/ministry-04.jpg",
              "/gallery/ministry-05.jpg",
              "/gallery/ministry-06.jpg",
              "/gallery/ministry-07.jpg",
              "/gallery/ministry-08.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={img}
                  alt={`Notable missionary impact ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Miracles & Testimonies */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Bizarre Miracles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have witnessed the visible power of God resulting in incredible testimonies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Healing Miracles",
                miracles: [
                  "Opening of blind eyes",
                  "Unstopping of deaf ears",
                  "Restoration of cripples",
                  "Healing of medically incurable diseases",
                  "Terminal cancers healed",
                  "HIV completely healed",
                  "Hepatitis B and C healed",
                ],
                icon: "✨",
                color: "from-violet-500 to-purple-600",
              },
              {
                title: "Reproductive Miracles",
                miracles: [
                  "Barren women conceiving children",
                  "Singlets and twins born",
                  "Women conceiving for the first time in their fifties",
                  "Dead babies breathing again",
                  "Decades of madness overturned",
                ],
                icon: "👶",
                color: "from-rose-500 to-pink-600",
              },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.miracles.map((miracle, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {miracle}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Miracle Photos Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={`/gallery/${num % 2 === 0 ? 'event' : 'sunday'}-0${((num - 1) % 8) + 1}.jpg`}
                  alt={`Miracle testimony ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white text-xs font-semibold">Testimony of God's Power</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
