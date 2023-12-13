"use client"

import Video from "@/components/video";

export default function name(params) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Acceder a los valores de los campos de entrada
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Realizar acciones con los valores (puedes enviarlos a un servidor, por ejemplo)
        console.log('Correo Electrónico:', email);
        console.log('Contraseña:', password);

        // Aquí iría la lógica de autenticación
        // Aquí iría la lógica de autenticación (por ejemplo, verificar credenciales)
      };
    return (
      <Video>
          <div className="max-w-md w-full p-8 bg-black/50 backdrop-blur-md rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">
              Iniciar Sesión
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-medium mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
      </Video>
    );
}