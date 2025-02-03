import Navbar from "@/components/Navbar";
import PlanCard from "@/components/PlanCard";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const plans = [
    {
      title: "NET PÓS",
      category: "Plano Premium",
      price: 119.90,
      gb: 50,
      sales: 1200,
      features: [
        { text: "Passaporte Américas para usar seu celular no exterior" },
        { text: "GB para redes sociais e vídeos" },
        { text: "WhatsApp ilimitado" },
        { text: "Internet de uso livre" }
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500"
    },
    {
      title: "NET CONTROLE",
      category: "Plano Essencial",
      price: 54.90,
      gb: 25,
      sales: 800,
      features: [
        { text: "5G mais rápido do Brasil" },
        { text: "Ligações ilimitadas" },
        { text: "YouTube ilimitado" },
        { text: "+2GB bônus todo mês" }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#051A2D] to-[#0D0745] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index} 
              {...plan} 
              isPopular={index === 0}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#0D0745]/80 backdrop-blur-lg border border-[#5E72EB] shadow-[0_0_20px_#438BD3] rounded-xl p-6"
              buttonClassName="bg-[#5E72EB] hover:bg-[#438BD3] text-white shadow-[0_0_10px_#438BD3]"
              salesText={plan.sales >= 1000 ? 
                `${(plan.sales/1000).toFixed(1).replace('.', ',')} mil vendas` : 
                `${plan.sales} vendas`}
            />
          ))}
        </div>
      </main>
      
      <div className="fixed bottom-6 right-6 animate-pulse">
        <a 
          href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de suporte.")}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-[#438BD3] hover:bg-[#5E72EB] text-white shadow-[0_0_15px_#438BD3] rounded-full w-16 h-16 flex items-center justify-center">
            <MessageCircle className="w-7 h-7" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Index;
