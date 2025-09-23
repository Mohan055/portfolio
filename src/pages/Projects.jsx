import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">My Projects</h1>
    
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {project.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
