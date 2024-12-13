import { BarChart3, Clock, Shield, TrendingUp } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { FeaturesGrid } from '@/components/features-grid';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Data-Driven Insights',
      description:
        'Make informed decisions with our advanced analytics and reporting tools.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Platform',
      description:
        'Enterprise-grade security ensuring your procurement data stays protected.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Real-Time Updates',
      description:
        'Stay informed with instant notifications and real-time status tracking.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Cost Optimization',
      description:
        'Reduce procurement costs while maintaining quality and compliance.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Transform Your Procurement Process"
        description="Streamline your procurement operations with our innovative solutions powered by cutting-edge technology."
        showCTA={true}
      />
      <FeaturesGrid features={features} />
      <Testimonials />
    </div>
  );
}