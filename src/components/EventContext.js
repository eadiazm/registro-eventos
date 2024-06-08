// EventContext.js
import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEvent = () => {
    return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        setEvents(prevEvents => [...prevEvents, event]);
    };

    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
};
