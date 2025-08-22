import heroImage from '@/assets/hero-background.jpg';

const Portfolio = () => {
  const skills = {
    languages: ['Python', 'PHP', 'SQL', 'JavaScript'],
    frameworks: ['Django', 'Laravel', 'Flask', 'React.js'],
    cloud: ['Azure (ADF, Functions, Blob, CI/CD)', 'Docker', 'GitHub', 'GitLab'],
    databases: ['MySQL', 'MongoDB', 'Azure SQL', 'PostgreSQL'],
    tools: ['HTML', 'CSS', 'Bootstrap', 'REST APIs', 'Git']
  };

  const projects = [
    {
      title: "DR.ERP Software",
      description: "An ERP solution for managing inventory, sales, purchases, accounts, and reporting.",
      tech: ["Laravel", "PHP", "SQL", "Docker", "GitLab CI", "JavaScript", "jQuery"],
      role: "Junior Software Engineer at Nexa Tech Solutions",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Personal Diary Web App",
      description: "A secure diary web application with CRUD operations, login, and cloud deployment.",
      tech: ["Flask", "SQLite", "Bootstrap", "Azure App Services", "Azure Blob Storage"],
      features: "Authentication, search, responsive design, Azure deployment",
      liveDemo: "#",
      github: "#"
    }
  ];

  const reviews = [
    {
      name: "John Smith",
      role: "Senior Developer",
      rating: 5,
      text: "Ambala delivered exceptional work on our full-stack project. His expertise in Azure and backend development really impressed our team."
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      rating: 5,
      text: "Professional, reliable, and highly skilled. Ambala's attention to detail and problem-solving abilities make him an asset to any project."
    },
    {
      name: "Mike Chen",
      role: "Tech Lead",
      rating: 4,
      text: "Great communication and technical skills. Ambala's work on our ERP system exceeded expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="floating-shapes"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text animate-pulse-glow">
            Ambala Venkata Ramana
          </h1>
          <h2 className="text-2xl md:text-4xl font-mono mb-8 text-secondary">
            Full-Stack Developer | Software Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into scalable, secure, and futuristic web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/resume.pdf" download className="btn-neon inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-text">
            About Me
          </h2>
          
          <div className="glass-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Full-Stack Developer & Problem Solver
                </h3>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  I'm a Full-Stack Developer with 3 years of professional experience in building scalable and secure applications. Skilled in backend engineering, cloud-native development, and modern frontend frameworks, I specialize in delivering efficient solutions that bridge business needs and technology.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently working at Bigapple Life Style Pvt Ltd, Hyderabad, I thrive on solving complex problems and creating impactful digital products.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="glass p-4 rounded-lg glow-border">
                  <h4 className="font-semibold text-neon-cyan mb-2">3 Years Experience</h4>
                  <p className="text-sm text-muted-foreground">Professional Development</p>
                </div>
                <div className="glass p-4 rounded-lg glow-border">
                  <h4 className="font-semibold text-neon-purple mb-2">Azure Cloud & Data Engineering</h4>
                  <p className="text-sm text-muted-foreground">Cloud-Native Solutions</p>
                </div>
                <div className="glass p-4 rounded-lg glow-border">
                  <h4 className="font-semibold text-neon-blue mb-2">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">React, Laravel, Django, REST APIs</p>
                </div>
                <div className="glass p-4 rounded-lg glow-border">
                  <h4 className="font-semibold text-neon-pink mb-2">Automation & DevOps</h4>
                  <p className="text-sm text-muted-foreground">CI/CD, Docker, GitLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-text">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass-card hover-glow">
                <h3 className="text-xl font-bold mb-6 text-primary capitalize">
                  {category === 'cloud' ? 'Cloud/DevOps' : category === 'tools' ? 'Other Tools' : category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div key={skill} className="glass p-3 rounded-lg hover:glow-border transition-all duration-300">
                      <span className="font-mono text-sm text-secondary">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card group hover-glow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.role && (
                    <p className="text-sm text-secondary mb-4 font-mono">
                      {project.role}
                    </p>
                  )}
                  {project.features && (
                    <p className="text-sm text-accent mb-4">
                      <strong>Features:</strong> {project.features}
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-secondary">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="glass px-3 py-1 rounded-full text-sm font-mono text-neon-cyan glow-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveDemo} className="btn-neon flex-1 text-center text-sm">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn-ghost flex-1 text-center text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-text">
            What People Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <div key={index} className="glass-card hover-glow">
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-5 h-5 ${star <= review.rating ? 'text-neon-cyan' : 'text-muted'} glow-star`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-primary">{review.name}</h3>
                  <p className="text-sm text-secondary font-mono">{review.role}</p>
                </div>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </div>
            ))}
          </div>

          {/* Review Submission Form */}
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Leave a Review</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Name</label>
                  <input type="text" name="reviewName" className="glass-input" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
                  <input type="email" name="reviewEmail" className="glass-input" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-secondary">Rating</label>
                <div className="star-rating flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="star-label cursor-pointer">
                      <input type="radio" name="rating" value={star} className="hidden star-input" />
                      <svg className="w-8 h-8 text-muted hover:text-neon-cyan transition-all duration-300 star-svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Review</label>
                <textarea name="reviewText" rows={4} className="glass-input resize-none" placeholder="Share your experience..." required></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  formAction="mailto:amabalavenkataramana2@gmail.com?subject=Portfolio Review"
                  className="btn-neon inline-flex items-center gap-2"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 neon-text">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8">Download my resume to see my complete background and experience.</p>
          <a href="/resume.pdf" download className="btn-neon inline-flex items-center gap-2 text-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-text">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:amabalavenkataramana2@gmail.com" className="text-secondary hover:text-primary transition-colors">
                    amabalavenkataramana2@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-secondary">+91-7386326635</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-neon-cyan" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a href="https://linkedin.com/in/ambala-venkata-ramana-abb050234" className="text-secondary hover:text-primary transition-colors">
                    linkedin.com/in/ambala-venkata-ramana-abb050234
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
              <form className="space-y-6" action="mailto:amabalavenkataramana2@gmail.com" method="post" encType="text/plain">
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Name</label>
                  <input type="text" name="name" className="glass-input" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
                  <input type="email" name="email" className="glass-input" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Message</label>
                  <textarea name="message" rows={5} className="glass-input resize-none" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="btn-neon w-full inline-flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">
            Connect With Me
          </h3>
          
          <div className="flex justify-center gap-6">
            {[{
              icon: 'github',
              url: 'https://github.com',
              label: 'GitHub'
            }, {
              icon: 'linkedin',
              url: 'https://linkedin.com/in/ambala-venkata-ramana-abb050234',
              label: 'LinkedIn'
            }, {
              icon: 'twitter',
              url: 'https://twitter.com',
              label: 'Twitter'
            }, {
              icon: 'email',
              url: 'mailto:amabalavenkataramana2@gmail.com',
              label: 'Email'
            }].map(social => (
              <a key={social.icon} href={social.url} className="glass p-4 rounded-full neon-glow hover:scale-110 transition-all duration-300 hover-glow" aria-label={social.label}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                  {social.icon === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                  {social.icon === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />}
                  {social.icon === 'email' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.81L12 10.773l9.554-6.952h.81c.904 0 1.636.732 1.636 1.636z" />}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-4">
            &copy; 2025 Ambala Venkata Ramana. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;