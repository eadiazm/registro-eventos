import React, { useState } from 'react';
import { useEvent } from './EventContext';
import { v4 as uuidv4 } from 'uuid';

function AddEvent() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const { addEvent } = useEvent();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., save the new event
        const newEvent = { id: uuidv4(), name, date, description };
        addEvent(newEvent);
        // Limpia los campos del formulario después de agregar el evento
        setName('');
        setDate('');
        setDescription('');
    };

    return (
        <div>
            <h2>Agregar evento</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre del evento</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Fecha del evento</label>
                    <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Agregar Evento</button>
            </form>
        </div>
    );
}

export default AddEvent;
