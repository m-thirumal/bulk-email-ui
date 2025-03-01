'use client';
import { useEffect, useState } from 'react';

export default function Error({ error }) {
    const [clientError, setClientError] = useState(null);

    useEffect(() => {
        setClientError(error);
    }, [error]);

    if (!clientError) return <div>Loading error...</div>; 

    return (
        <div>
            <h2>Error :</h2>
            <p>{clientError.message}</p>
        </div>
    );
}
