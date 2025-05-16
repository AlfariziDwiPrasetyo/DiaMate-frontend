'use client';

import { useRef, useEffect } from "react";

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 feature-card"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="mb-6 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#00A8FF]/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll("[data-animate='true']");
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in");
                element.classList.remove("opacity-0");
              }, 200 * index); // Stagger the animations
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00A8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Analisis Berbasis AI",
      description: "Deteksi dan analisis risiko diabetes menggunakan teknologi kecerdasan buatan terbaik."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00A8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-time Monitoring",
      description: "Pantau kesehatan Anda secara real-time dengan visualisasi data yang mudah dipahami."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00A8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Great Insights",
      description: "Dapatkan wawasan kesehatan personal berdasarkan data anda untuk keputusan yang lebih baik."
    }
  ];

  return (
    <section id="fitur" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 text-gray-800" data-animate="true">
            Fitur Andalan untuk Bantu Jaga Kesehatanmu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0" data-animate="true">
            Cegah diabetes sejak dini dengan teknologi canggih yang membantu kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Features; 