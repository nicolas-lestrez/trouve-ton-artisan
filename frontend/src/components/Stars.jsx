// src/components/Stars.jsx
export default function Stars({ note }) {
  if (note === null || note === undefined) return null;

  const value = typeof note === 'string' ? parseFloat(note) : note;
  const rounded = Math.round(value); // 4.9 → 5
  const total = 5;

  const fullStars = '★'.repeat(rounded);
  const emptyStars = '☆'.repeat(total - rounded);

  return (
    <span
      className="stars"
      aria-label={`Note ${value}/5`}
    >
      <span className="stars-full">{fullStars}</span>
      <span className="stars-empty">{emptyStars}</span>
    </span>
  );
}
