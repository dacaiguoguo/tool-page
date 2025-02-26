import React from 'react';

type Props = {
  text: string;
};

const TryForFreeButton: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
      {text}
    </button>
  );
};

export default TryForFreeButton;
