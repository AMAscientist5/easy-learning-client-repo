import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const topic = useLoaderData();
    console.log(topic)

    return (
        <div>
            <h2>Hello This is check out: {topic.title}</h2>
        </div>
    );
};

export default CheckOut;