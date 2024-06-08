import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEvent } from './EventContext';

function EventDetail() {
    const { id } = useParams();
    const { events } = useEvent();
    const event = events.find(event => event.id === id);

    if (!event) {
        return <div>Evento no encontrado</div>;
    }

    return (
        <div>
            <h2>{event.name}</h2>
            <p><strong>Fecha:</strong> {event.date}</p>
            <p><strong>Descripción:</strong> {event.description}</p>
            <p><Link to={`/`}>Volver</Link></p>
        </div>
    );
}

export default EventDetail;
