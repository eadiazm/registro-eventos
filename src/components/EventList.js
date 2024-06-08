import React from 'react';
import { Link } from 'react-router-dom';
import { useEvent } from './EventContext';

function EventList() {
    // Placeholder events
    const { events } = useEvent();

    return (
        <div>
            <h2>Lista de eventos</h2>
            <ul className="list-group">
                {events.map(event => (
                    <li key={event.id} className="list-group-item">
                        <Link to={`/event/${event.id}`}>{event.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;