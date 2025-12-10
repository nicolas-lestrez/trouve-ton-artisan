// src/pages/ArtisansList.jsx
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchArtisans } from '../services/api';
import Stars from '../components/Stars';

export default function ArtisansList() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('categorie'); // ex : ?categorie=Bâtiment
  const search = searchParams.get('search');
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalizedSearch = search?.trim().toLowerCase();
  const filteredArtisans = normalizedSearch
    ? artisans.filter((artisan) => {
        const fields = [artisan.nom, artisan.Specialite?.nom, artisan.Ville?.nom];
        return fields.some((field) =>
          field?.toLowerCase().includes(normalizedSearch)
        );
      })
    : artisans;

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArtisans(category);
        setArtisans(data);
      } catch (err) {
        setError('Erreur lors du chargement des artisans');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [category]);

  return (
    <div className="artisans-page container-fluid py-5">
      <div className="container">
        <h1 className="artisans-title mb-4">
          {category ? `Artisans de ${category}` : 'Tous les artisans'}
        </h1>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-danger">Erreur : {error}</p>}

        {!loading && !error && (
          <div className="row g-4">
            {filteredArtisans.map((artisan) => (
              <div
                key={artisan.id_artisan}
                className="col-12 col-md-6 col-lg-4"
              >
                {/* Toute la carte est cliquable */}
                <Link
                  to={`/artisans/${artisan.id_artisan}`}
                  className="artisan-card card h-100"
                >
                  <div className="card-body">
                    <h2 className="artisan-name card-title">
                      {artisan.nom}
                    </h2>

                    <p className="artisan-speciality mb-1">
                      {artisan.Specialite?.nom}{' '}
                      {artisan.note !== null &&
                        artisan.note !== undefined && (
                          <Stars note={artisan.note} />
                        )}
                    </p>

                    <p className="artisan-city mb-0">
                      {artisan.Ville?.nom}
                    </p>
                  </div>
                </Link>
              </div>
            ))}

            {filteredArtisans.length === 0 && (
              <p>Aucun artisan trouvé.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
