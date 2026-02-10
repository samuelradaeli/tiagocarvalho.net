export function Footer() {
  return (
    <footer className="border-t border-surface-light px-4 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-heading text-sm text-gold">Tiago Carvalho</p>
        <p className="mt-2 text-xs text-muted">
          &copy; {new Date().getFullYear()} Tiago Carvalho Psicoterapeuta.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
