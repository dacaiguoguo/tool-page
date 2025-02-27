import { Metadata } from 'next';
import { Clock, FileText, Languages, Upload, ChevronDown, FileJson, FileSpreadsheet, Star } from 'lucide-react';
import React from 'react';
import { getDictionary } from '../../../dictionaries';
import Link from 'next/link';
import Image from 'next/image';

// Component definitions
interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQProps) => (
  <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-3">{question}</h3>
    <p className="text-gray-600 dark:text-gray-300">{answer}</p>
  </div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

interface TestimonialProps {
  name: string;
  title: string;
  text: string;
  index: number;
}

const TestimonialCard = ({ name, title, text, index }: TestimonialProps) => (
  <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center mb-4">
      <Image
        src={`https://i.pravatar.cc/150?img=${index + 1}`}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 dark:text-gray-300">{text}</p>
  </div>
);



type Props = {
  params: Promise<{ lang: string }>
}


export default async function Page(props: Props) {
  const params = await props.params;
  const lang = params.lang;
  const pathPefix = lang == 'en' ? '' : `/${lang}`;

  const dict = await getDictionary(lang, 'academic-audio-transcription');
  // Data
  const testimonials = dict.testimonials.items;

  const faqs = dict.faqs.items;

  const universityLogos = dict.universityLogos;
  return (
    <>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] h-[calc(100vh-15rem)] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              {dict.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {dict.hero.description}
            </p>
            <Link href={`${pathPefix}/transcribe`} className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
              {dict.hero.startButton}
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{dict.stats.hoursTranscribedValue}</h3>
                <p className="text-gray-300 mt-2">{dict.stats.hoursTranscribed}</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{dict.stats.supportedLanguagesValue}</h3>
                <p className="text-gray-300 mt-2">{dict.stats.supportedLanguages}</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{dict.stats.accuracyRateValue}</h3>
                <p className="text-gray-300 mt-2">{dict.stats.accuracyRate}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-500">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">{dict.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Clock className="w-8 h-8 text-indigo-600" />}
                title={dict.features.cards.speed.title}
                description={dict.features.cards.speed.description}
              />
              <FeatureCard
                icon={<FileText className="w-8 h-8 text-indigo-600" />}
                title={dict.features.cards.accuracy.title}
                description={dict.features.cards.accuracy.description}
              />
              <FeatureCard
                icon={<Languages className="w-8 h-8 text-indigo-600" />}
                title={dict.features.cards.format.title}
                description={dict.features.cards.format.description}
              />
              <FeatureCard
                icon={<Upload className="w-8 h-8 text-indigo-600" />}
                title={dict.features.cards.timestamps.title}
                description={dict.features.cards.timestamps.description}
              />
              <FeatureCard
                icon={<FileJson className="w-8 h-8 text-indigo-600" />}
                title={dict.features.cards.export.title}
                description={dict.features.cards.export.description}
              />
              <FeatureCard
                icon={<FileSpreadsheet className="w-8 h-8 text-indigo-600" />}
                title={dict.features.cards.integration.title}
                description={dict.features.cards.integration.description}
              />
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">{dict.trustedBy.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {universityLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Image
                    src={logo}
                    alt={`University ${i + 1}`}
                    width={200}
                    height={100}
                    className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">{dict.testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Whisper Technology Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-8">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI Logo"
                width={48}
                height={48}
                className="h-12 invert"
              />
            </div>
            <h2 className="text-4xl font-bold mb-8">{dict.whisperTech.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {dict.whisperTech.description}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-500">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">{dict.faqs.title}</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">{dict.cta.title}</h2>
            <p className="text-xl mb-8">
              {dict.cta.description}
            </p>
            <a href="/transcribe" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
              {dict.cta.buttonText}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}