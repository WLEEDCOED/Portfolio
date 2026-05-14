export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
