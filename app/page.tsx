"use client";

import AboutSection from "@/components/pages/home/AboutSection";
import Footer from "@/components/pages/home/Footer";
import GiveSection from "@/components/pages/home/GiveSection";
import HeroSection from "@/components/pages/home/HeroSection";
import MediaSection from "@/components/pages/home/MediaSection";
import MinistriesSection from "@/components/pages/home/MinistriesSection";
import Navbar from "@/components/pages/home/Navbar";
import PrayerSection from "@/components/pages/home/PrayerSection";
import QuickActions from "@/components/pages/home/QuickActions";
import ScheduleSection from "@/components/pages/home/ScheduleSection";
import VisitorSection from "@/components/pages/home/VisitorSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickActions />
      <ScheduleSection />
      <AboutSection />
      <MinistriesSection />
      <MediaSection />
      <VisitorSection />
      <PrayerSection />
      <GiveSection />
      <Footer />
    </main>
  );
}




// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
//       <div className="text-center space-y-4 p-8">
//         <h1 className="text-6xl font-serif font-bold text-primary">
//           Wind and Fire Church A/G
//         </h1>
//         <p className="text-xl text-slate-600 dark:text-slate-300">
//           Experience the power of worship and revival
//         </p>
//         <div className="flex gap-4 justify-center mt-8">
//           <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
//             Visit Us
//           </button>
//           <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
//             Watch Live
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }