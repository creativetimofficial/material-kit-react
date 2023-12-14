"use client"
import React, { useState } from 'react';

const ContainerComponent = () => {
  const itemsRow1 = [...Array(100).keys()]; // Puedes cambiar la cantidad de elementos según tus necesidades
  const itemsCol1 = [...Array(100).keys()]; // Puedes cambiar la cantidad de elementos según tus necesidades

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    setScrollLeft(e.target.scrollLeft);
    setScrollTop(e.target.scrollTop);
  };

  return (
    <>
      {/*LISTA DE MATCHES*/}
      <div className="flex items-center overflow-x-auto">
        {itemsRow1.map((item) => (
          <div key={item} className="w-64 h-32 bg-gray-300 m-2">
            perfil {item}
          </div>
        ))}
      </div>

      <div className="border flex flex-grow max-h-screen">
        {/*Lista de mensajes*/}
        <div className="w-1/4 overflow-y-auto">
          {itemsCol1.map((item) => (
            <div key={item} className="w-full h-16 bg-gray-300 mb-2">
              mensaje {item}
            </div>
          ))}
        </div>
        {/*Contenido del mensaje*/}
        <div className="flex-grow overflow-y-auto">CONTENIDO</div>
      </div>
    </>
  );
};

export default ContainerComponent;