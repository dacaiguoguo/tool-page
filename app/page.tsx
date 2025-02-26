import Link from 'next/link';
import { Globe, Wrench, FileAudio, FileText, Brain } from 'lucide-react';

const tools = [
  {
    id: 'academic-audio-transcription',
    name: 'Academic Audio Transcription',
    description: 'Convert academic lectures and seminars into text',
    icon: FileAudio,
  },
  {
    id: 'text-analysis',
    name: 'Text Analysis',
    description: 'Analyze academic papers and research documents',
    icon: FileText,
  },
  {
    id: 'ai-research',
    name: 'AI Research Assistant',
    description: 'AI-powered research and writing assistance',
    icon: Brain,
  },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];

export default function RootPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Choose Your Language</h1>
          <div className="flex justify-center space-x-4 mb-16">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Globe className="mr-2 h-5 w-5" />
                {lang.name}
              </Link>
            ))}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Tools</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      {tool.description}
                    </p>
                    <div className="mt-4 text-center">
                      <Link
                        href={`/en/${tool.id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        Try Now <Wrench className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
