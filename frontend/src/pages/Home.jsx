import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopArtisans } from "../services/api";


// Petit composant pour afficher les étoiles
function Stars({ note }) {
  // si pas de note (undefined, null, etc.), on n'affiche rien
  if (!note && note !== 0) return null;

  const rounded = Math.round(note); // 4.9 → 5
  const total = 5;
  const fullStars = "★".repeat(rounded);
  const emptyStars = "☆".repeat(total - rounded);

  return (
    <span className="text-warning fw-bold" aria-label={`Note ${note}/5`}>
      {fullStars}
      <span className="text-muted">{emptyStars}</span>
    </span>
  );
}

// URL d’embed Google Maps sans clé API, basé sur la ville
function getMapUrl(ville) {
  if (!ville) return "";
  const query = encodeURIComponent(`${ville}, France`);
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export default function Home() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTopArtisans(); // ✅ on garde ton ancienne fonction
        setArtisans(data);
      } catch (err) {
        setError(err.message || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="home container py-5">
      {/* Bloc : Comment trouver mon artisan ? */}
      <section className="home-steps mb-5">
        <h1 className="home-section-title mb-4">
          Comment trouver mon artisan ?
        </h1>
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <div className="card home-step-card h-100">
              <img
                src="/images/etape-1.png"
                alt="Choisir la catégorie d'artisanat"
                className="home-step-img"
              />
              <div className="card-body">
                <p className="home-step-number">1</p>
                <p className="card-text">
                  Choisir la catégorie d&apos;artisanat dans le menu.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card home-step-card h-100">
              <img
                src="/images/etape-2.png"
                alt="Choisir un artisan"
                className="home-step-img"
              />
              <div className="card-body">
                <p className="home-step-number">2</p>
                <p className="card-text">Choisir un artisan.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card home-step-card h-100">
              <img
                src="/images/etape-3.png"
                alt="Le contacter"
                className="home-step-img"
              />
              <div className="card-body">
                <p className="home-step-number">3</p>
                <p className="card-text">
                  Le contacter via le formulaire de contact.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card home-step-card h-100">
              <img
                src="/images/etape-4.png"
                alt="Une réponse sous 48h"
                className="home-step-img"
              />
              <div className="card-body">
                <p className="home-step-number">4</p>
                <p className="card-text">
                  Une réponse sera apportée sous 48h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc : Les artisans du mois */}
      <section className="home-top-artisans">
        <h2 className="home-section-title mb-4">Les artisans du mois</h2>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-danger">Erreur : {error}</p>}

        {!loading && !error && (
          <div className="row g-4">
            {artisans.map((artisan) => (
              <div key={artisan.id_artisan} className="col-12 col-md-4">
                <div className="card home-artisan-card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{artisan.nom}</h5>
                    <p className="card-subtitle mb-1 text-muted">
                      {artisan.Specialite?.nom}{" "}
                      {artisan.note && (
                        <>
                          &nbsp;<Stars note={artisan.note} />
                        </>
                      )}
                    </p>
                    <p className="card-text small mb-3">
                      {artisan.Ville?.nom}
                    </p>

                    {/* Carte Google Maps à la place de l'image statique */}
                    <div className="home-artisan-map mb-3 artisan-map-wrapper">
                      <iframe
                        title={`Carte de ${artisan.Ville?.nom}`}
                        src={getMapUrl(artisan.Ville?.nom)}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0, width: "100%", height: "100%" }}
                      ></iframe>
                    </div>

                    <Link
                      to={`/artisans/${artisan.id_artisan}`}
                      className="btn btn-primary"
                    >
                      Voir la fiche
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {artisans.length === 0 && (
              <p>Aucun artisan du mois pour le moment.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
