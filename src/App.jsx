import { Routes, Route, Link } from 'react-router-dom';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import Exercise5 from './components/Exercise5';
import Exercise6 from './components/Exercise6';

function App() {
  return (
    <div>
      <ul style={{ display: 'grid', gridAutoFlow: 'column', gap: 12 }}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <li key={num}>
            <Link  to={`/exercise-${num}`}>
              Задание {num}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
        <Route path="/exercise-4" element={<Exercise4 />} />
        <Route path="/exercise-5" element={<Exercise5 />} />
        <Route path="/exercise-6" element={<Exercise6 />} />
      </Routes>
    </div>
  );
}

export default App;
