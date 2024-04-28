export const corsConfig = {
  origin: function (origin, callback) {
    const whiteList = [process.env.CLIENT_URL];

    if (process.argv[2] === "--api") {
      whiteList.push(undefined);
    }

    if (!origin || whiteList.includes(origin)) {
      // Permitir todas las solicitudes si el origen es undefined o está en la lista blanca
      callback(null, true);
    } else {
      // Rechazar la solicitud con un error de CORS si el origen no está permitido
      callback(new Error("Error de cors"));
    }
  },
};
