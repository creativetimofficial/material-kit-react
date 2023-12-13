"use client"

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function name(params) {
    const name ='Guillermo Reyes';
    const description ='HOLA QUE HACE? YO AQUI ESCRIBIENDO UNA DESCRIPCIÓN';
    const url ='/profile.jpg';
    const alt ='Imagen de '+name;
    return (
      <div>
        <div className="relative bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <img
              src={url}
              alt={alt}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-white text-lg font-bold">{name}</h3>
              <p className="text-white text-sm">{description}</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between mt-4">
            <button
              className="text-4xl text-white"
              onClick={() => handleSwipe("left")}
            >
              {"<"}
            </button>
            <button
              className="text-4xl text-white"
              onClick={() => handleSwipe("right")}
            >
              {">"}
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="text-3xl text-red-500"
              onClick={() => handleReject()}
            >
              <CancelRoundedIcon />
            </button>
            <button
              className="text-3xl text-green-500"
              onClick={() => handleApprove()}
            >
              <CheckCircleRoundedIcon />
            </button>
          </div>
        </div>
      </div>
    );
}