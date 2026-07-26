import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Ananya Homestays',
      category: 'Hospitality & Travel',
      desc: 'A premium nature resort platform with elegant booking flow, immersive photo galleries, and mobile-first design.',
      url: 'https://www.ananyahomestays.com/',
      image: '/portfolio/ananya.png',
      color: '#00B14F',
    },
    {
      title: 'Zen Nuc Deco',
      category: 'Interior Design',
      desc: 'A minimalist, high-impact showcase for a contemporary interior design studio — clean UI with stunning visual storytelling.',
      url: 'https://zen-nuc-deco.vercel.app/',
      image: '/portfolio/zen_nuc.png',
      color: '#8B7355',
    },
    {
      title: 'Sree Shoba Concretes',
      category: 'Industrial & Corporate',
      desc: 'A strong, trust-inspiring corporate website for a high-quality concrete and building materials manufacturer in Karnataka.',
      url: 'https://sree-shoba-concretes.vercel.app/',
      image: '/portfolio/sree_shoba.png',
      color: '#0066cc',
    },
    {
      title: 'Alankaram',
      category: 'Luxury E-commerce',
      desc: 'An artisanal wooden furniture showcase platform with a rich, luxurious aesthetic and intuitive product browsing experience.',
      url: 'https://alankaram.vercel.app/',
      image: '/portfolio/alankaram.png',
      color: '#C8860A',
    },
    {
      title: 'Shree Varaha',
      category: 'Spiritual & Community',
      desc: 'A devotional community portal with event listings, online booking, and spiritual content for a trusted religious institution.',
      url: 'https://shreevaraha.vercel.app/',
      image: '/portfolio/shree_varaha.png',
      color: '#FF5500',
    },
  ];

  return (
    <div className="portfolio-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Our <span className="text-gradient">Portfolio</span></h2>
          <p>Real-world digital solutions we've built — explore live projects and success stories.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`glass-panel animate-fade-up delay-${(idx % 4) + 1}`}
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Project Image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Category Badge */}
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${project.color}`,
                  color: project.color,
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                }}>
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', margin: 0 }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6', flex: 1 }}>
                  {project.desc}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    color: project.color,
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    marginTop: '4px',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.75')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                  Visit Live Site <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
