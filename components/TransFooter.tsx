import React from 'react';

type Props = {
  pathname: string;
  dict: any;
  lang: string;
};

const TransFooter: React.FC<Props> = ({ dict }) => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">{dict.footer.copyright}</p>
          <p className="mt-2">
            <a href="/contact" className="text-blue-600 hover:text-blue-800">
              {dict.footer.contact}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TransFooter;
