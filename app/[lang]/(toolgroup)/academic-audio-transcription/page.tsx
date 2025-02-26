import { Metadata } from 'next';
import { Clock, FileText, Languages, Upload, ChevronDown, FileJson, FileSpreadsheet, Star } from 'lucide-react';
import React from 'react';



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
      <img
        src={`https://i.pravatar.cc/150?img=${index + 1}`}
        alt={name}
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

// Data
const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "Research Director, Linguistics Department",
    text: "The accuracy and speed of this platform have revolutionized our research process. We've transcribed hundreds of hours of interviews with remarkable precision."
  },
  {
    name: "Prof. Michael Rodriguez",
    title: "Department of Sociology",
    text: "The multilingual support has been invaluable for our international research projects. The timestamp feature makes it incredibly easy to reference specific parts of interviews."
  },
  {
    name: "Dr. Emily Thompson",
    title: "Educational Psychology Researcher",
    text: "This tool has significantly reduced the time we spend on transcription, allowing us to focus more on analysis and research outcomes."
  },
  {
    name: "Prof. James Wilson",
    title: "Department of Anthropology",
    text: "The quality of transcriptions for field interviews is exceptional. The platform handles background noise and accents remarkably well."
  },
  {
    name: "Dr. Lisa Kumar",
    title: "Clinical Research Coordinator",
    text: "The automated formatting and export options save us countless hours in post-processing. It's become an essential tool in our research workflow."
  },
  {
    name: "Prof. David Martinez",
    title: "Department of History",
    text: "Being able to transcribe historical recordings in multiple languages has opened up new possibilities for our archival research."
  },
  {
    name: "Dr. Rachel Foster",
    title: "Qualitative Research Specialist",
    text: "The platform's accuracy with technical terminology is impressive. It's clearly been well-trained on academic content."
  },
  {
    name: "Prof. Thomas Yang",
    title: "Department of Psychology",
    text: "The timestamp integration makes it incredibly easy to validate transcriptions against source recordings. A fantastic tool for ensuring research accuracy."
  },
  {
    name: "Dr. Anna Kowalski",
    title: "Research Methodology Professor",
    text: "This platform has become an integral part of our research methodology courses. Students particularly appreciate the user-friendly interface."
  },
  {
    name: "Prof. Robert Bennett",
    title: "Department of Political Science",
    text: "The ability to handle long recordings and maintain consistency throughout has been crucial for our interview-based research projects."
  }
];

const faqs = [
  {
    question: "What file formats are supported?",
    answer: "Our platform supports a wide range of audio formats including MP3, WAV, M4A, AAC, and WMA. Files can be up to 10 hours long or 5GB in size, making it suitable for lengthy academic recordings."
  },
  {
    question: "How accurate is the transcription?",
    answer: "We achieve 99.8% accuracy across 134+ languages, thanks to OpenAI's Whisper technology. The accuracy is particularly high for clear academic speech and professional recordings."
  },
  {
    question: "What languages are supported?",
    answer: "Our platform supports over 100 languages with high accuracy, including major academic languages such as English, Mandarin, Spanish, German, French, and Japanese, among many others."
  },
  {
    question: "How are timestamps implemented?",
    answer: "Timestamps are automatically generated for each paragraph, making it easy to navigate between your transcript and audio. This feature is particularly useful for citation and verification purposes."
  },
  {
    question: "What export formats are available?",
    answer: "You can export your transcripts in multiple formats including TXT, DOC, PDF, and SRT. Each format maintains proper formatting and includes timestamps where applicable."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we implement enterprise-grade security measures. All uploads are encrypted, and we adhere to strict academic data protection standards. Files are automatically deleted after processing if requested."
  },
  {
    question: "How long does transcription take?",
    answer: "Our system transcribes short files in seconds and longer files in just minutes with industry-leading speed."
  },
  {
    question: "Do you support batch processing?",
    answer: "Yes, you can upload multiple files simultaneously. Our system will process them in parallel, making it efficient for large-scale academic research projects."
  }
];

const universityLogos = [
  'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1592494804071-faea15d93a8a?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=100&fit=crop&q=80'
];

export type PageProps = {
  params: { lang: string }
}


export default async function Page({ params }: PageProps) {
  return (
    <>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] h-[calc(100vh-15rem)] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Academic Audio Transcription
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Transform your academic recordings into precise, formatted transcripts with our advanced AI-powered platform. Supporting 134+ languages with 99.8% accuracy for research interviews, lectures, and academic discussions.
            </p>
            <a href="/transcribe" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
              Start Free Trial
            </a>
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
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">6,358,298</h3>
                <p className="text-gray-300 mt-2">Hours Transcribed</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100+</h3>
                <p className="text-gray-300 mt-2">Languages Supported</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">99.8%</h3>
                <p className="text-gray-300 mt-2">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-500">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Comprehensive Features for Academic Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Clock className="w-8 h-8 text-indigo-600" />}
                title="Rapid Processing"
                description="Process long academic recordings quickly with our advanced AI technology. Handle files up to 10 hours long or 5GB in size with ease."
              />
              <FeatureCard
                icon={<FileText className="w-8 h-8 text-indigo-600" />}
                title="Intelligent Formatting"
                description="Automatic paragraph structuring and formatting optimized for academic content, making it easier to review and cite in your research."
              />
              <FeatureCard
                icon={<Languages className="w-8 h-8 text-indigo-600" />}
                title="Multilingual Support"
                description="Support for over 100 languages with high accuracy, perfect for international research and global academic collaboration."
              />
              <FeatureCard
                icon={<Upload className="w-8 h-8 text-indigo-600" />}
                title="Flexible File Handling"
                description="Upload various audio formats including MP3, WAV, M4A, and more. Perfect for different recording devices and situations."
              />
              <FeatureCard
                icon={<FileJson className="w-8 h-8 text-indigo-600" />}
                title="Multiple Export Formats"
                description="Export your transcripts in various formats including TXT, DOC, PDF, and SRT with timestamps for easy integration into your research workflow."
              />
              <FeatureCard
                icon={<FileSpreadsheet className="w-8 h-8 text-indigo-600" />}
                title="Timestamp Integration"
                description="Precise timestamps for every paragraph, making it easy to navigate between your transcript and audio recording."
              />
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Trusted by Leading Academic Institutions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {universityLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <img
                    src={logo}
                    alt={`University ${i + 1}`}
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
            <h2 className="text-4xl font-bold text-center mb-16 text-white">What Researchers Say</h2>
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI Logo"
                className="h-12 invert"
              />
            </div>
            <h2 className="text-4xl font-bold mb-8">Powered by Whisper Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages OpenAI's state-of-the-art Whisper technology, ensuring the highest quality transcriptions
              with remarkable accuracy across multiple languages and accents. This advanced AI model has been trained on
              thousands of hours of academic content to deliver superior results for research and educational purposes.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-500">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
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
            <h2 className="text-4xl font-bold mb-8">Start Transcribing Today</h2>
            <p className="text-xl mb-8">
              Join thousands of researchers and academics who trust our platform for their transcription needs.
            </p>
            <a href="/transcribe" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
              Begin Free Trial
            </a>
          </div>
        </section>
      </main>
    </>
  );
}