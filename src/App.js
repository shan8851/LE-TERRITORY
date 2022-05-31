import { useState } from 'react';
import { maps } from './data/maps';

export const App = () => {
  const [map, setMap] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 20 }}>
        {maps.map((item) => (
          <div key={item.title}>
            <p
              onClick={() => setMap(item.mapUrl)}
              style={{ margin: 5, cursor: 'pointer' }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {map && map}
    </div>
  );
};

export default App;
