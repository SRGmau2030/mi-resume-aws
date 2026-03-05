// Unified About section: Education, Certifications, What I Do, Technologies
// Combines former ServicesSection and TechnologiesSection into one cohesive section

import { Smartphone, Globe, Zap, GraduationCap, Award } from "lucide-react"

export function AboutSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Building native and cross-platform mobile apps with React Native",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Creating modern web applications with React, Next.js, and TypeScript",
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from backend APIs to frontend interfaces",
    },
  ]

  const technologies = [
    "React",
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "Supabase",
    "Firebase",
    "MySQL",
    "Node.js",
    "Tailwind CSS",
    "React Native",
  ]

  const certifications = [
    {
      name: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      institution: "Facultad de Matemáticas, Universidad Autónoma de Yucatán",
      date: "May 2025",
    },
    {
      name: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      institution: "Facultad de Matemáticas, Universidad Autónoma de Yucatán",
      date: "May 2025",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="text-lg font-bold">
              Licenciatura en Ingeniería de Software
            </h4>
            <p className="text-accent font-medium mt-1">
              Universidad Autónoma de Yucatán (UADY)
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Currently studying
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors"
              >
                <h4 className="text-lg font-bold">{cert.name}</h4>
                <p className="text-accent font-medium mt-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  {cert.institution}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Completed: {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            What I Do
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            I offer comprehensive development services across mobile and web
            platforms
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Technologies I Work With
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            A diverse toolkit for building scalable and modern applications
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-background border border-border rounded-full text-sm font-medium hover:border-accent transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
