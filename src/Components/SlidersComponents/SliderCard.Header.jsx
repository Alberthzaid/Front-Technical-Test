import React, { useState } from 'react';
import './SliderHeader.css';

export const SliderCardHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const panels = [
        {
            title: 'Explore The World',
            imageUrl: 'https://media.istockphoto.com/id/1470048338/es/foto/mujer-usando-el-tel%C3%A9fono-con-pantalla-blanca-mientras-est%C3%A1-acostada-en-el-sof%C3%A1-de-su-casa.jpg?s=1024x1024&w=is&k=20&c=WVutVh-E9jp08DLu66Zbly3nWpHiC4ir4bXaCXYO0q0=',
        },
        {
            title: 'Wild Forest',
            imageUrl: 'https://media.istockphoto.com/id/1347685599/es/foto/joven-asi%C3%A1tico-con-los-ojos-cerrados-disfrutando-de-la-m%C3%BAsica-con-auriculares-mientras-se.jpg?s=1024x1024&w=is&k=20&c=Wv9H_Peq0ffBHCxsAliEp4qlHCcUM7FsNipE04H-b3c=',
    },
        {
            title: 'Sunny Beach',
            imageUrl: 'https://media.istockphoto.com/id/1263901830/es/foto/joven-emocionada-bailando-y-escuchando-la-m%C3%BAsica-despu%C3%A9s-del-trabajo.jpg?s=1024x1024&w=is&k=20&c=jpP8_cp8ZC7YwMI9oKErzwunSoxRcIrwb3HkebyMKOI=',
        },
        {
            title: 'City on Winter',
            imageUrl: 'https://media.istockphoto.com/id/1208670144/es/foto/retrato-de-atractiva-joven-americana-con-auriculares-inal%C3%A1mbricos-escuchando-m%C3%BAsica.jpg?s=1024x1024&w=is&k=20&c=mCCHuuOS_6-L9blQk39qjJsW6oSV_1zvyJhtoqNTeWw=',
        },
        {
            title: 'Mountains - Clouds',
            imageUrl: 'https://media.istockphoto.com/id/1373017594/es/foto/auriculares-sobre-fondo-de-color-naranja.jpg?s=1024x1024&w=is&k=20&c=LGG4dNZpoACIjoYV3rUCQcA4d93R3otVuqMxOFDCwus=',
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
