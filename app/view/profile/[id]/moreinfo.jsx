export default function name(params) {
    const gender = 'Masculino';
    const status = 'Soltero';
    const looking = 'diversión';
    const interest = ["Tomar un cafe", "Bailar", "Tomar unas cervezas"];
    const fulldesc = `Hola que hace? esto es mi descricion pero mas grande, con mas texto y
        haciendolo sufientemente grande paraque se desborde, quiero que sea muy grande
        muy muy grande
    `
    return (
      <div className="text-gray-800 p-4 bg-white rounded-lg shadow-md">
        <p className="text-lg font-semibold">
          {gender}, {status}
        </p>
        <p className="text-gray-600">Busco {looking}</p>
        <div className="mt-2">
          <span className="font-semibold">Me interesa:</span>
          <ul className="list-disc pl-4">
            {interest.map((element, index) => (
              <li key={index} className="text-gray-600">
                {element}
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <p className="text-gray-700">
          <span className="font-semibold">Sobre mí:</span>
          <br />
          {fulldesc}
        </p>
      </div>
    );
}