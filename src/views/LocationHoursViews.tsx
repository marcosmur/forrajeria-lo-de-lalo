import perroMapa from "@/assets/perroMapa.jpg";

const LocationHoursViews = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12 flex items-center justify-center"
      style={{
        backgroundImage: `url(${perroMapa.src})`,
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">¿Dónde estamos?</h1>

        <p className="text-lg text-gray-700 mb-4">
          Nos podés encontrar en <strong>Calle 11 y 112, Mercedes, Buenos Aires</strong>.
          ¡Te esperamos!
        </p>

        <iframe
          title="Ubicación en Google Maps"
          className="w-full h-72 rounded-lg shadow-lg mb-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.3821004704595!2d-59.42868444584221!3d-34.66756423690822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7376d3bf1e3b%3A0x513045111ac09204!2sForrajeria%20%22Lo%20de%20Lalo%22!5e0!3m2!1ses!2sar!4v1746078436681!5m2!1ses!2sar"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <h2 className="text-3xl font-semibold text-green-700 mb-4">Horarios de atención</h2>
        <ul className="text-gray-700 text-lg space-y-1">
          <li><strong>Lunes a sábado:</strong> 9:00 - 13:00 y 17:00 - 21:00</li>
          <li><strong>Domingos:</strong> Cerrado</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationHoursViews;
