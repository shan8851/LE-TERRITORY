import {maps} from './data/maps'

export const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
     <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {maps.map(item => (
        <p style={{margin: 5, cursor: 'pointer'}} key={item.title}>{item.title}</p>
      ))}
    </div>
    </div>
  );
}

export default App;
