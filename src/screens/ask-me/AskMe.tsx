import React, { useState } from 'react';
import axios from 'axios';
import ExpandingTextarea from './ExpondingInput';

const AskMe = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (movie: string) => {
    setLoading(true);
    setResult('');
    try {
      const response = await axios.post('/api/predict-ott', { movie });
      setResult((response.data as { result: string }).result);
    } catch (error) {
      setResult('Error fetching prediction.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Ask Me: Which OTT platform is this movie on?</h2>
      <ExpandingTextarea onSend={handleAsk} loading={loading} />
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default AskMe;