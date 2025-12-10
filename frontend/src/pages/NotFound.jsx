export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "80vh", padding: "40px" }}
    >
      <h1 className="mt-4">Page en construction</h1>
      <img
        src="/images/ERREUR 404-visu.png"
        alt="Page en construction"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto"
        }}
      />


    </div>
  );
}