'use client';

import { Carousel } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote:
      "Prime Procurement Solutions has transformed our procurement process. We've seen a 40% reduction in processing time.",
    author: 'Sarah Johnson',
    position: 'CPO, Tech Innovations Inc.',
  },
  {
    quote:
      'The level of service and support we receive is outstanding. Their platform is intuitive and powerful.',
    author: 'Michael Chen',
    position: 'Director of Operations, Global Manufacturing Co.',
  },
  {
    quote:
      'Implementing Prime has been a game-changer for our organization. The ROI was evident within months.',
    author: 'Emma Thompson',
    position: 'Procurement Manager, Healthcare Solutions',
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex-[0_0_100%] p-8">
              <blockquote className="text-xl italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-muted-foreground">{testimonial.position}</div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}