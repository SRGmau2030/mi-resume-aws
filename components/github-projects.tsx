import { Github, Star, Code2 } from "lucide-react"

// Static data for featured GitHub projects
// To update, edit the entries below with your project information
interface Project {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  topics: string[]
}

const PROJECTS: Project[] = [
  {
    id: 1173701476,
    name: "mi-resume-aws",
    description: "Repositorio personal - Portafolio web desplegado en AWS",
    html_url: "https://github.com/SRGmau2030/mi-resume-aws",
    stargazers_count: 0,
    language: "TypeScript",
    topics: ["nextjs", "portfolio", "aws"],
  },
  {
    id: 1066659703,
    name: "kaxanly",
    description: "Aplicación web desarrollada con TypeScript",
    html_url: "https://github.com/SRGmau2030/kaxanly",
    stargazers_count: 0,
    language: "TypeScript",
    topics: ["typescript", "web-app"],
  },
  {
    id: 1063644680,
    name: "fitclub-412",
    description: "Landing page para un club de fitness",
    html_url: "https://github.com/SRGmau2030/fitclub-412",
    stargazers_count: 0,
    language: "CSS",
    topics: ["css", "landing-page"],
  },
  {
    id: 1077365532,
    name: "dag-store",
    description: "Tienda de mascotas DAG - Aplicación web full-stack",
    html_url: "https://github.com/SRGmau2030/dag-store",
    stargazers_count: 0,
    language: "TypeScript",
    topics: ["typescript", "e-commerce"],
  },
  {
    id: 1091383622,
    name: "dcvs-landing",
    description: "Landing page para DCVS",
    html_url: "https://github.com/SRGmau2030/dcvs-landing",
    stargazers_count: 0,
    language: "JavaScript",
    topics: ["javascript", "landing-page"],
  },
  {
    id: 1156513024,
    name: "salon-laubet",
    description: "Sitio web para Salón Laubet - Estética y belleza",
    html_url: "https://github.com/SRGmau2030/salon-laubet",
    stargazers_count: 0,
    language: "TypeScript",
    topics: ["typescript", "nextjs"],
  },
]

/**
 * GitHubProjects Component
 * Displays a static grid of featured GitHub repositories
 * No API calls needed - all data is hardcoded for fully static rendering
 */
export default function GitHubProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project) => (
        <a
          key={project.id}
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 border border-slate-700 hover:border-purple-500/50"
        >
          {/* Project Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors truncate">
                {project.name}
              </h3>
            </div>
            <Github size={20} className="text-slate-400 flex-shrink-0 ml-2" />
          </div>

          {/* Project Description */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 min-h-10">
            {project.description}
          </p>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.language && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                <Code2 size={12} />
                {project.language}
              </span>
            )}
            {project.topics &&
              project.topics.slice(0, 2).map((topic) => (
                <span key={topic} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                  {topic}
                </span>
              ))}
          </div>

          {/* Stars and Link */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <div className="flex items-center gap-1 text-slate-400">
              <Star size={16} />
              <span className="text-sm">{project.stargazers_count}</span>
            </div>
            <span className="text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              View →
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
