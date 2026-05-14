export function Tag({ children }) {
  return <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">{children}</span>;
}

export function InfoCard({ title, description, children }) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl p-5 shadow-corporate hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      {description && <p className="text-slate-600 mt-3 text-sm leading-6">{description}</p>}
      {children}
    </article>
  );
}
