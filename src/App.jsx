import { BriefcaseBusiness, GraduationCap, Languages, Mail, MapPin, Phone, ShieldCheck, Download, Github, Linkedin } from 'lucide-react';
import NavBar from './components/NavBar';
import SectionTitle from './components/SectionTitle';
import { InfoCard, Tag } from './components/CardGrid';

// Update portfolio content from this data object.
const profile = {
  name: 'Waleed Ghazwani',
  title: 'Computer Science Graduate | IT Systems | Data Analysis | Digital Transformation',
  intro:
    'Motivated Computer Science graduate passionate about IT systems, backend development, data-driven solutions, and digital transformation initiatives.',
  location: 'Mecca, Saudi Arabia',
  email: 'waleedghazwani.m@gmail.com',
  phone: '+966 53 314 6012',
  linkedin: 'https://linkedin.com/in/waleed-assad',
  github: 'https://github.com/WLEEDCOED',
};

const skills = [
  'SQL', 'Python', 'Pandas', 'NumPy', 'Excel', 'Power BI', 'Microsoft Office', 'Data Analysis',
  'Data Handling', 'Reporting and Documentation', 'Database Fundamentals', 'Basic Cybersecurity Concepts',
  'Node.js', 'Express.js', 'Backend Development', 'Relational Databases', 'IT Systems', 'Digital Transformation Concepts',
];

const certifications = [
  'IBM Data Analyst Professional Certificate',
  'SQL for Data Analysis – Udacity',
  'Governance Fundamentals',
  'Internal Auditing Fundamentals',
  'Cybersecurity Fundamentals',
  'Data Engineering with AWS Nanodegree – Udacity',
];

const projects = [
  {
    title: 'University Excuse Management Platform',
    description:
      'Designed and developed a web-based academic excuse management system. Enabled students to submit academic excuses digitally and implemented multi-level approval workflows for supervisors and administrators. Built backend services using Node.js and Express, managed records in a relational database with secure handling, and improved administrative efficiency by reducing paperwork.',
    tech: ['Node.js', 'Express.js', 'SQL', 'Backend Development'],
  },
  {
    title: 'Company Revenue and Growth Analysis Dashboard',
    description:
      'Analyzed financial and operational data for over 4,000 companies. Built dashboards using Excel and Power BI and generated data-driven insights to strengthen reporting and business decision-making.',
    tech: ['Excel', 'Power BI', 'Data Analysis'],
  },
  {
    title: 'STC TV User Behavior Analysis',
    description:
      'Analyzed user behavior and viewing patterns, evaluated SD versus HD usage, and proposed improvements to user experience and platform performance.',
    tech: ['Excel', 'Data Analysis', 'Reporting'],
  },
];

export default function App() {
  return (
    <div>
      <NavBar />
      <main id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 md:py-20">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-accent font-semibold mb-4"><BriefcaseBusiness size={16} /> Open to Graduate & Technology Roles</p>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">{profile.name}</h1>
              <p className="mt-4 text-lg text-slate-700">{profile.title}</p>
              <p className="mt-5 text-slate-600 max-w-3xl">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-lg bg-navy text-white text-sm hover:bg-slate-800 transition">Email</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-slate-300 text-sm hover:border-accent hover:text-accent transition inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-slate-300 text-sm hover:border-accent hover:text-accent transition inline-flex items-center gap-2"><Github size={16} /> GitHub</a>
                <a href="/Waleed-Ghazwani-CV.pdf" className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:bg-blue-700 transition inline-flex items-center gap-2"><Download size={16} /> Download CV</a>
              </div>
            </div>
            <div className="bg-slateBg border border-slate-200 rounded-2xl p-6 shadow-corporate">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> {profile.location}</li>
                <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> {profile.email}</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /> {profile.phone}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="py-14 border-t border-slate-100">
          <SectionTitle title="About" subtitle="Professional profile tailored for IT and digital transformation graduate opportunities." />
          <p className="text-slate-700 leading-7 max-w-4xl">
            I am a Computer Science graduate with a strong foundation in information technology, backend systems, and data management. I bring a structured approach to problem-solving, analytical thinking, and reporting, with practical experience in building technology-driven solutions that support operational efficiency. I am motivated by digital transformation initiatives and thrive in collaborative, fast-paced technical environments where IT systems, data insights, and business objectives intersect.
          </p>
        </section>

        <section id="education" className="py-14 bg-slateBg -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl">
          <SectionTitle title="Education" />
          <InfoCard title="Al Baha University" description="Bachelor of Computer Science">
            <div className="mt-4 flex flex-wrap gap-3">
              <Tag>Graduation Year: 2025</Tag>
              <Tag>GPA: 3.56 / 4.00</Tag>
            </div>
          </InfoCard>
        </section>

        <section id="skills" className="py-14">
          <SectionTitle title="Technical Skills" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => <InfoCard key={skill} title={skill} />)}
          </div>
        </section>

        <section id="certifications" className="py-14 bg-slateBg -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl">
          <SectionTitle title="Certifications" />
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((item) => (
              <InfoCard key={item} title={item}>
                <div className="mt-4"><Tag>Professional Certification</Tag></div>
              </InfoCard>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14">
          <SectionTitle title="Projects" />
          <div className="grid lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <InfoCard key={project.title} title={project.title} description={project.description}>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </InfoCard>
            ))}
          </div>
        </section>

        <section id="languages" className="py-14 bg-slateBg -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl">
          <SectionTitle title="Languages" />
          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard title="Arabic"><p className="mt-2 text-slate-600">Native</p></InfoCard>
            <InfoCard title="English"><p className="mt-2 text-slate-600">Proficient</p></InfoCard>
          </div>
        </section>

        <section id="availability" className="py-14">
          <SectionTitle title="Availability" />
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 flex items-start gap-3">
            <ShieldCheck className="text-emerald-600 mt-0.5" size={20} />
            <p className="text-emerald-900 font-medium">Available to join immediately.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Waleed Ghazwani. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
