import { useState, useEffect } from 'react';
// Making a Custome Hook name useFetch Hook.
// Custom hook that uses the useEffect hook to fetch data from an API.
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
}

// Using Custome hook in 2nd component
import React from 'react';
import { useFetch } from './useFetch'; //Importing custome hook.

function MyComponent() {
  const { data, loading } = useFetch('https://api.example.com/data');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
