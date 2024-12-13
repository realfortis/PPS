import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Building2,
  Clock,
  FileText,
  Settings,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Contract Management',
      description:
        'Streamline your contract lifecycle with our advanced management system. From creation to renewal, we ensure compliance and efficiency.',
      features: [
        'Automated contract generation',
        'Version control and tracking',
        'Renewal notifications',
        'Compliance monitoring',
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Spend Analytics',
      description:
        'Gain deep insights into your procurement spending patterns with our advanced analytics tools.',
      features: [
        'Real-time spend tracking',
        'Customizable dashboards',
        'Trend analysis',
        'Cost saving opportunities',
      ],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Supplier Management',
      description:
        'Build and maintain strong supplier relationships with our comprehensive management platform.',
      features: [
        'Supplier onboarding',
        'Performance tracking',
        'Risk assessment',
        'Communication portal',
      ],
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Process Automation',
      description:
        'Automate repetitive tasks and streamline your procurement workflow for maximum efficiency.',
      features: [
        'Workflow automation',
        'Approval routing',
        'Document processing',
        'Integration capabilities',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive procurement solutions designed to transform your business
            operations and drive efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="mb-6 text-primary">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description:
                  'We analyze your current procurement processes and identify areas for improvement.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Our team develops a customized implementation strategy aligned with your goals.',
              },
              {
                step: '03',
                title: 'Implementation',
                description:
                  'We execute the strategy with minimal disruption to your operations.',
              },
              {
                step: '04',
                title: 'Support',
                description:
                  'Ongoing support and optimization to ensure long-term success.',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}