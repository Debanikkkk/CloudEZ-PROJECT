import { Play, Pause, Server } from 'lucide-react';
import React from 'react';

const instances = [
    { id: 'i-0123456789', name: "web-01", state: 'running', type: 't3.micro', publicIp: '3.120.45.2' },
    { id: 'i-0a1b2c3d4e', name: "api-02", state: 'running', type: 't3.small', publicIp: '3.121.12.45' },
    { id: 'i-0f1e2d3c4b', name: "worker-01", state: 'running', type: 't3.medium', publicIp: '3.122.33.99' },
    { id: 'i-0abc123def', name: "batch-01", state: 'running', type: 't3.large', publicIp: '3.123.200.5' }
];

const stateColor = (s: string) => s === 'running' ? 'bg-emerald-500/90' : 'bg-slate-500/80';

const Dashboard: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Instances</h2>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {instances.map((ins) => (
                    <article
                        key={ins.id}
                        className="group bg-white/5 border border-white/6 rounded-lg p-3 hover:scale-[1.01] transform transition-shadow duration-150 shadow-sm"
                    >
                        <div className="flex items-start gap-3 mb-2">
                            <div className="p-1 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-700">
                                <Server size={16} className="text-sky-300" />
                            </div>
                            <div className={`${stateColor(ins.state)} text-white text-xs px-2 py-1 rounded-full font-medium`}>{ins.state}</div>
                        </div>
                        <h3 className="text-white text-sm font-semibold">{ins.name}</h3>
                        <p className="text-xs text-slate-400">{ins.type}</p>
                        <p className="text-xs text-slate-400 mt-1">IP: {ins.publicIp}</p>
                        <div className="mt-2 flex items-center gap-2">
                            <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white text-xs shadow-sm hover:opacity-95">
                                <Play size={12} /> Start
                            </button>
                            <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-700 text-white text-xs hover:bg-slate-600">
                                <Pause size={12} /> Stop
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
                       