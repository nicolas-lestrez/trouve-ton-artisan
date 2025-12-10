import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtisanById } from '../services/api';

// URL d’embed Google Maps sans clé API, basé sur la ville
function getMapUrl(ville) {
  if (!ville) return "";
  const query = encodeURIComponent(`${ville}, France`);
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export default function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await getArtisanById(id);
        setArtisan(data);
      } catch (err) {
        setError(err.message || 'Erreur de chargement');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <div className="container py-5">Chargement…</div>;
  if (error) return <div className="container py-5 text-danger">Erreur : {error}</div>;
  if (!artisan) return <div className="container py-5">Artisan introuvable.</div>;

  return (
    <div className="container py-5">
            <Link to="/artisans" className="btn btn-primary mb-3">
        ← Retour à la liste
      </Link>

      <div className="row g-4">
        <div className="col-12 col-lg-7">
          <div className="card shadow-sm h-100">
            <div className="card-body card-left">
              <h1 className="h3 mb-1">{artisan.nom}</h1>
              <p className="text-muted mb-2">
                {artisan.Specialite?.nom} • {artisan.Ville?.nom}
              </p>

              <h2 className="h3 mt-4 mb-2">À propos de nous</h2>
              <p>{artisan.a_propos}</p>

              <h2 className="h6 mt-4 mb-2">{artisan.Ville?.nom}</h2>
              <div className="home-artisan-map mb-3 artisan-map-wrapper">
                      <iframe
                        title={`Carte de ${artisan.Ville?.nom}`}
                        src={getMapUrl(artisan.Ville?.nom)}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0, width: "100%", height: "100%" }}
                      ></iframe>
                    </div>
              

              {artisan.url_site && (
                <div className="mt-3 mb-0 card-left">
                  <h3>En savoir plus</h3>
                  <a
                    href={artisan.url_site}
                    target="_blank"
                    rel="noreferrer"
                    className="site-link"
                  >
                    {artisan.url_site}
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card bg-primary text-white shadow-sm h-100 card-right">
            <div className="card-body">
              <h2 className="h4 mb-4">Nous contacter</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Nom<span className="text-warning">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    E-mail<span className="text-warning">*</span>
                  </label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Message<span className="text-warning">*</span>
                  </label>
                  <textarea className="form-control" rows="4" required />
                </div>
                <button type="submit" className="btn btn-light text-primary fw-semibold">
                  Envoyer
                </button>
                <p className="mt-2 mb-0 small">
                  <span className="text-warning">*</span> Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
