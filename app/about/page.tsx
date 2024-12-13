import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
      bio: 'With over 20 years of experience in procurement, John founded Prime to revolutionize the industry.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300',
      bio: 'Sarah leads our technology initiatives, bringing innovation to procurement solutions.',
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300',
      bio: 'Michael ensures smooth delivery of our services to clients worldwide.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Client Success Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300',
      bio: 'Emily works closely with clients to ensure they achieve their procurement goals.',
    },
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Prime Procurement Solutions was established with a vision to transform procurement.',
    },
    {
      year: '2017',
      title: 'Platform Launch',
      description: 'Released our flagship procurement management platform.',
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia to serve international clients.',
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Introduced AI-powered features for enhanced procurement analytics.',
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as a leading procurement solutions provider globally.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            Leading the future of procurement with innovative solutions and
            exceptional service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To empower organizations with innovative procurement solutions that
                drive efficiency, reduce costs, and promote sustainable business
                practices.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the global leader in procurement solutions, setting industry
                standards for innovation, reliability, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 mb-12 relative"
              >
                <div className="md:w-1/4 text-2xl font-bold text-primary">
                  {event.year}
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}