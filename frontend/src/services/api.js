const API_BASE_URL = "http://localhost:4000";

export async function fetchArtisans(category) {
  let url = `${API_BASE_URL}/artisans`;
  if (category) {
    url += `?categorie=${encodeURIComponent(category)}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erreur lors du chargement des artisans");
  return res.json();
}

export async function getArtisanById(id) {
  const res = await fetch(`${API_BASE_URL}/artisans/${id}`);
  if (!res.ok) throw new Error("Artisan introuvable");
  return res.json();
}

// 🔽 NOUVELLE FONCTION
export async function fetchTopArtisans() {
  const res = await fetch(`${API_BASE_URL}/artisans-du-mois`);
  if (!res.ok)
    throw new Error("Erreur lors du chargement des artisans du mois");
  return res.json();
}
