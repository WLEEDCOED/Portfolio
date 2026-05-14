const navItems = [
  'About',
  'Education',
  'Skills',
  'Certifications',
  'Projects',
  'Languages',
  'Availability',
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-navy text-lg">Waleed Ghazwani</a>
        <ul className="hidden md:flex gap-5 text-sm text-slate-700">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
