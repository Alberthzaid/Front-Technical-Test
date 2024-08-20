import React, { useState } from 'react';
import './SliderHeader.css';

export const SliderCardHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const panels = [
        {
            title: 'Explore The World',
            imageUrl: 'https://media.istockphoto.com/id/888300636/es/foto/blanco-y-negro-retrato-de-un-apuesto-joven-en-un-traje-sonriendo-y-mirando-a-la-c%C3%A1mara.jpg?s=1024x1024&w=is&k=20&c=WugTvNd_P6riDKGiEphjMbu4ak91xJbr-nqRxbnRMCU=',
        },
        {
            title: 'Wild Forest',
            imageUrl: 'https://media.istockphoto.com/id/819661904/es/foto/j%C3%B3venes-y-gente-elegante.jpg?s=1024x1024&w=is&k=20&c=iWBekQpB-13Izh2NS6vjD04aniW02dvTHXrgZ7gbTGQ=',
    },
        {
            title: 'Sunny Beach',
            imageUrl: 'https://media.istockphoto.com/id/1202142519/es/foto/macho-hombre.jpg?s=1024x1024&w=is&k=20&c=Ew8hHqr7ERoK5hVURLeVUQeda_nQILWB3leNfgg5s5U=',
        },
        {
            title: 'City on Winter',
            imageUrl: 'https://media.istockphoto.com/id/152500536/es/foto/los-joven-contempor%C3%A1neo.jpg?s=1024x1024&w=is&k=20&c=D508PgxPylS1getVlfCe7lPMYXEajf9G4Y8diLvKqEw=',
        },
        {
            title: 'Mountains - Clouds',
            imageUrl: 'https://media.istockphoto.com/id/488062206/es/foto/modelo-masculino-en-blanco-y-negro.jpg?s=1024x1024&w=is&k=20&c=g_OOeCEZ2QtXGf7qEGOxmL1RnDfV4OVxCCy0nio-DQM=',
        }
    ];

    const handlePanelClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="Slider_Header">
            <div className="container">
                {panels.map((panel, index) => (
                    <div
                        
                        key={index}
                        className={`panel ${activeIndex === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${panel.imageUrl})` }}
                        onClick={() => handlePanelClick(index)}
                    >
                        <h3>{panel.title}</h3>

                    </div>
                ))}
            </div>
        </div>
    );
};
