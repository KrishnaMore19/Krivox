import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTASection } from '@/components/home/CTASection';
import { Button } from '@/components/ui/button';
import { servicePillars } from '@/lib/data/services';

export const metadata = {
  title: 'Business Automation & Operations - KRIVOX',
  description: 'Virtual assistants, management systems, data handling, and automation',
};

export default function BusinessAutomationPage() {
  const pillar = servicePillars.find(p => p.id === '3');
  if (!pillar) return null;

  return (
    <div className="pt-24">
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {pillar.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">{pillar.description}</p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {pillar.services.map((service) => (
              <FadeIn key={service.id}>
                <ServiceDetail service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}