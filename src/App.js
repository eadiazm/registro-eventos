import { Routes, Route } from 'react-router-dom';
import { EventProvider } from './components/EventContext.js';
import Navbar from './components/Navbar.js';
import EventList from './components/EventList.js';
import AddEvent from './components/AddEvent.js';
import EventDetail from './components/EventDetail.js';

function App() {
  return (
    <div className="container">
      <EventProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </EventProvider>
    </div>
  );
}

export default App;
