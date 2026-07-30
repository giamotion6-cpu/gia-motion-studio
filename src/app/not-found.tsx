import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Error 404</p>
      <h1>Esta toma no estaba en el guion.</h1>
      <p>Regresa al inicio y sigamos creando algo memorable.</p>
      <Link className="button button--light" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
