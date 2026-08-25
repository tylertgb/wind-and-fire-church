"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, Sparkles, Target, Eye, Church, Users, Globe, TrendingUp } from "lucide-react";

export default function PastorMessagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-primary opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/leadership/fantself.jpg"
            alt="Rev. Aaron Lambon Fant"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              A Word from Our Pastor
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
              Head Pastor's Address
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              Rev. Aaron Lambon Fant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scripture Opening */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10 text-center"
          >
            <div className="text-4xl text-primary mb-6 font-serif">"</div>
            <p className="text-lg text-muted-foreground leading-relaxed italic mb-4">
              "For they got not the land in possession by their own sword, neither did their own arm save them: 
              but thy right hand, and thine arm, and the light of thy countenance, because thou hadst a favour unto them."
            </p>
            <p className="text-sm font-semibold text-primary">— Psalm 44:3 KJV</p>
          </motion.div>
        </div>
      </section>

      {/* Gratitude & Journey */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              To God Alone Be the Glory
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                First of all, my appreciation goes to God for the privilege of serving in his kingdom. We owe it all to him.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The Journey began ten years ago with God on the lead as some dedicated brethren and I blindly obeyed faithfully. 
                It has been a journey of faith all along. At first, the vision that God gave to me seemed impractical and impossible 
                especially given the fact that Tamale is a 90.6% Muslim dominated area but today, we are seeing glimpses of the 
                vision beginning to manifest by God's special grace and mercies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Within these ten years, we have endured valley-low moments and enjoyed Mountain-high experiences as well. 
                We have made mistakes and have learnt vital lessons from them. On the other side, we have also been misunderstood 
                and misrepresented. But just as we do not and will not hold any charge against those who have offended us, 
                we equally pray that all those that this ministry or I might have wrongfully offended find a place in their 
                hearts to forgive us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Church Growth Achievements */}
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
              What God Has Done
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of divine favor and exponential growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Church,
                title: "Multicultural Church",
                description: "Today, by the grace of God, Wind and Fire is a multicultural, multinational, and multi racial Church whose membership comprises of 15 nationalities.",
                color: "from-primary to-orange-500"
              },
              {
                icon: Users,
                title: "100+ Churches Planted",
                description: "Within these ten years, we have directly planted 43 churches, collaborated with other churches to plant 11 churches, and with our offspring churches we testify of more than 100 churches in the Wind and Fire family tree.",
                color: "from-accent to-blue-600"
              },
              {
                icon: Globe,
                title: "Minister Training",
                description: "We have not only served our mother church, AG, Ghana but at large, 29 of our men and women have graduated from the Bible school, supported 23 others, trained more than 42 through ministerial mentorship programs.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: Heart,
                title: "Conference Ministry",
                description: "By our second year as a Church, our conferences began to witness more than 3,000 people in attendance. Currently, we have witnessed crowds of 80,000 people in our outreaches with notable signs and wonders.",
                color: "from-violet-500 to-purple-600"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-linear-to-br from-slate-50 to-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10"
          >
            <p className="text-muted-foreground leading-relaxed text-center">
              These ministers are doing great exploits in their various ministries. Our offspring churches 
              (both AG and Charismatic churches) have also raised many pastors which puts the number of pastors 
              in our family tree to about <strong className="text-primary">170</strong>. It is good to note that 
              by God's Grace, and I say this with all humility, that this ministry has become a model for several 
              others in Africa, Asia, and Europe, with some of them subscribing to our mentorship. 
              <strong className="text-accent"> To God alone be the glory!!</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Dream - Land Testimony */}
      <section className="py-20 px-4 sm:px-6 bg-linear-to-br from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 text-emerald-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Testimony
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Dream: How God Gave Us the Land
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg"
            >
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  A few years ago, I went on a fast to seek the face of God. Through out the period of waiting on God, 
                  my singular prayer was for God to assess my work and see if I am on course. I didn't want to get to 
                  heaven to discover that I could have done better. After the prayer, I had a dream in which I was in 
                  an exam room writing a test relating to the ministry. When I was done, the examiner marked my work 
                  and sadly, I scored only 6%. I wept bitterly when I woke up. That encounter humbled me.
                </p>

                <div className="bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "And so as much as we are thankful to God for ten years of his blessings and mercies, often times 
                    I feel totally embarrassed that I haven't met the expectations of the caller. For unto whom much is 
                    given, much is required."
                  </p>
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">
                  The Prophetic Word
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  When we saw this parcel of land on which this church is now situated, we sought to buy it but the owner, 
                  Hajia Ayisha refused to sell it but rather offered to rent it to us for ten years. President XYZ 
                  (Name withheld) and the governor of the bank of Ghana at the time had made an offer to buy it. 
                  As we progressed in our negotiations one day, these words came out of my mouth: 
                  <strong className="text-primary"> "sometimes, God saves people from dying as they fly in aircrafts for a reason 
                  but they don't know that it is for a time like this. Hajia, this land belongs to God."</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Hearing these words, Hajia began to shed tears. "Did I say anything wrong?" I asked. She said 
                  <strong className="text-accent"> "no pastor."</strong> She went on to tell me that she cried because my 
                  statement is prophetic. She said she was involved in a place crush in 1992 in Europe and it was her 
                  insurance claims that she used to buy the land. My statement is therefore pointing out why she didn't die.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  She told me to give her time and went to her hotel to rest. The following day, she called and said 
                  <strong className="text-primary"> "Pastor, I won't rent the land again to you."</strong> I immediately 
                  interjected and asked "Oh Hajia, did I offend you?" "No" she replied. "I mean, I won't rent the land 
                  to you again but instead I want you to take it and build a beautiful church that will bring Honour to God."
                </p>

                <div className="bg-linear-to-br from-accent to-primary text-white rounded-2xl p-8 my-6">
                  <p className="text-lg leading-relaxed">
                    "Ah, Are you sure of what you are saying, Hajia? This is too much ooo," I exclaimed. She went on 
                    to explain to me that: "a man wearing white and shining like the sun appeared in my dream the previous 
                    night and told me the land belongs to the church and that I should give it to you to build a church." 
                    Thinking she was going to sell it to us, Hajia insisted that we take the land and give her any amount 
                    we deem fit as appreciation.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed font-semibold text-center text-lg">
                  Church, if this is not God, please tell me who is behind all these? 
                  <span className="text-primary"> To God alone be the glory!!</span>
                </p>

                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 mt-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Today, this wonderful multi-purpose church facility seating several thousands stands here as a proof 
                    of God's faithfulness. Not only did Hajia give us the land, she now worships with us anytime she is 
                    in Tamale. If this is not God, please tell me who it is!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Land Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-emerald-600 to-green-600 text-white rounded-3xl p-8 text-center shadow-2xl"
            >
              <Church className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-serif text-3xl font-bold mb-3">
                By God's grace, we have more than a
              </h3>
              <div className="text-7xl font-bold font-serif mb-3">100 ACRES</div>
              <p className="text-xl text-white/90">
                of Land for Assemblies of God, Ghana
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Future of the Church */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              <Target className="w-3.5 h-3.5" />
              Vision 2032
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Future of the Church
            </h2>
            <p className="text-muted-foreground">
              Where will this church be in the next ten years?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-slate-50 to-white rounded-3xl p-8 sm:p-12 border border-border shadow-lg mb-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 italic">
              I don't know and honestly, I don't really want to know. Our style over here is to daily follow his 
              instructions and wherever that leads us to, we are happy to be there. But in my mind's eyes, I have 
              often envisioned a church that is <strong className="text-primary">taking the world by storm.</strong>
            </p>

            <div className="space-y-6 mt-8">
              {[
                { icon: Globe, text: "I see a church that is taking untaken territories." },
                { icon: Target, text: "I see a church that is moving into difficult lands and seizing them for the Lord." },
                { icon: Users, text: "I see a church that goes to places where the people are not made and makes them." },
                { icon: TrendingUp, text: "I see a church that is drawing millions of people to Christ." },
                { icon: Church, text: "I see a church that is pregnant with churches and ministries." },
                { icon: Eye, text: "I see a church that is a CENTRE of light for the nations." },
                { icon: Sparkles, text: "I see a church that is the birthplace of champions." },
                { icon: Heart, text: "I see a church that is preparing the bride to meet the groom." },
              ].map((vision, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-linear-to-r hover:from-primary/5 hover:to-accent/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <vision.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-1.5">
                    {vision.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-linear-to-br from-accent/5 to-primary/5 rounded-2xl border-l-4 border-accent">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">I see a church whose influence and impact goes beyond the four corners 
                of this building</strong> to the market place, government, education, and every mountain of society.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground italic">
                It didn't take us one day to get to where we are and I know it may not take us one day to get to where 
                we are going, but one thing is sure; <strong className="text-primary">we will get there.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Prayer */}
      <section className="py-20 px-4 sm:px-6 bg-linear-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-8" />
            <div className="space-y-6">
              <p className="text-2xl font-serif leading-relaxed">
                So as we celebrate God's goodness over us, we also wish to use the opportunity to ask that 
                you remember in your prayers that God will use us to win more souls for his Kingdom.
              </p>
              
              <div className="pt-8 border-t border-white/20 mt-8">
                <p className="text-lg mb-2">Long live Sanctuary of Wind and Fire,</p>
                <p className="text-lg mb-6">Long live Assemblies of God</p>
                <p className="text-2xl font-bold font-serif">
                  Blessed be God Almighty both now and forever.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">With love and gratitude,</p>
                <p className="text-2xl font-serif font-bold">Rev. Aaron Lambon Fant</p>
                <p className="text-sm text-white/80">Senior Pastor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
