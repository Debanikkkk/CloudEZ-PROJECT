import React from 'react';
import { FolderOpen,  ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  { id: 1, name: 'Project Apollo', owner: 'alice', activeInstances: 5, users: 8, status: 'active' },
  { id: 2, name: 'Project Boreas', owner: 'devops', activeInstances: 2, users: 5, status: 'active' },
  { id: 3, name: 'Project Cygnus', owner: 'infra', activeInstances: 0, users: 3, status: 'inactive' },
  { id: 4, name: 'Project Daedalus', owner: 'team-x', activeInstances: 8, users: 12, status: 'active' },
  { id: 5, name: 'Project Eurus', owner: 'backend', activeInstances: 3, users: 7, status: 'active' },
  { id: 6, name: 'Project Frostborn', owner: 'devops', activeInstances: 1, users: 4, status: 'inactive' }
];

const statusColor = (s: string) => s === 'active' ? 'bg-emerald-500/90' : 'bg-slate-500/80';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <article
            key={proj.id}
            onClick={() => navigate('/im')}
            className="group bg-white/5 border border-white/6 rounded-lg p-3 hover:scale-[1.01] transform transition-shadow duration-150 shadow-sm cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="p-1 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-700">
                <FolderOpen size={16} className="text-sky-300" />
              </div>

              <div className={`${statusColor(proj.status)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                {proj.status}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-white">{proj.name}</h3>
            <p className="text-xs text-slate-400 mt-1">Owner: {proj.owner}</p>

            <div className="mt-2 space-y-1">
              <p className="text-xs text-slate-300">Instances: <span className="text-white">{proj.activeInstances}</span></p>
              <p className="text-xs text-slate-300">Users: <span className="text-white">{proj.users}</span></p>
            </div>

            <button className="mt-2 w-full inline-flex items-center justify-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white text-xs shadow-sm hover:opacity-95">
              Open <ArrowRight size={12} />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
