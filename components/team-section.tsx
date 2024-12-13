import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
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
  );
}