import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
    { id: 1, title: 'Manage EC2 with ease', subtitle: 'List, start, stop and create instances from a simple UI', colorFrom: '#0f172a', colorTo: '#021024' },
    { id: 2, title: 'Automate scheduling', subtitle: 'Start/stop instances on a schedule to save costs', colorFrom: '#082032', colorTo: '#0b2447' },
    { id: 3, title: 'Teams & Permissions', subtitle: 'Role-based access and project scoping', colorFrom: '#021024', colorTo: '#06223a' }
];

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIndex((i) => (i + 1) % banners.length), 5000);
        return () => clearInterval(t);
    }, []);

    const active = banners[index];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-sky-900 text-white">
            {/* Carousel / Hero */}
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <div className="h-56 sm:h-72 md:h-96 flex items-center justify-center"
                        style={{ background: `linear-gradient(90deg, ${active.colorFrom}, ${active.colorTo})` }}>
                        <div className="text-center px-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{active.title}</h1>
                            <p className="mt-2 text-slate-200 max-w-2xl mx-auto">{active.subtitle}</p>
                            <div className="mt-4 flex items-center justify-center gap-3">
                                <button onClick={() => navigate('/pricing')} className="px-4 py-2 rounded-md bg-white text-slate-900 font-semibold">Pricing</button>
                                <button onClick={() => navigate('/login')} className="px-4 py-2 rounded-md border border-white/20 text-white">Get started</button>
                            </div>
                        </div>
                    </div>

                    {/* Carousel controls */}
                    <button onClick={() => setIndex((i) => (i - 1 + banners.length) % banners.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20">
                        <ChevronLeft className="text-white" />
                    </button>
                    <button onClick={() => setIndex((i) => (i + 1) % banners.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20">
                        <ChevronRight className="text-white" />
                    </button>
                </div>
            </section>

            {/* Content sections to make page a bit lengthy */}
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    <div className="bg-white/5 border border-white/6 rounded-lg p-4">
                        <h3 className="text-lg font-semibold">Fast actions</h3>
                        <p className="text-slate-300 mt-2">Start or stop instances with a single click — ideal for ad-hoc operations.</p>
                    </div>
                    <div className="bg-white/5 border border-white/6 rounded-lg p-4">
                        <h3 className="text-lg font-semibold">Scheduling</h3>
                        <p className="text-slate-300 mt-2">Define schedules to automatically power down idle environments and save costs.</p>
                    </div>
                    <div className="bg-white/5 border border-white/6 rounded-lg p-4">
                        <h3 className="text-lg font-semibold">Teams & Roles</h3>
                        <p className="text-slate-300 mt-2">Grant least-privilege access to team members and manage projects centrally.</p>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="bg-white/5 border border-white/6 rounded-lg p-6">
                        <h3 className="text-xl font-semibold">How it works</h3>
                        <ol className="list-decimal ml-5 mt-3 text-slate-300 space-y-2">
                            <li>Connect your AWS account (read-only recommended).</li>
                            <li>Create projects and attach instances.</li>
                            <li>Use the dashboard to control instances or schedule changes.</li>
                        </ol>
                    </div>

                    <div className="bg-white/5 border border-white/6 rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Testimonials</h3>
                        <div className="mt-3 space-y-3 text-slate-300">
                            <blockquote className="italic">"CloudEZ saved us hours daily by automating instance schedules." — Ops Lead</blockquote>
                            <blockquote className="italic">"Simple UI and powerful controls." — Platform Engineer</blockquote>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white/5 border border-white/6 rounded-lg p-6">
                    <h3 className="text-xl font-semibold">FAQ</h3>
                    <div className="mt-3 text-slate-300 space-y-2">
                        <details className="bg-transparent p-2 rounded-md"><summary className="cursor-pointer">Is this safe to connect to AWS?</summary><div className="mt-2">Yes — use IAM least-privilege and read-only where appropriate.</div></details>
                        <details className="bg-transparent p-2 rounded-md"><summary className="cursor-pointer">Can I schedule instance stops?</summary><div className="mt-2">Yes — scheduling is built-in and configurable per project.</div></details>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button onClick={() => navigate('/pricing')} className="px-6 py-2 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white font-semibold">View Pricing</button>
                </div>
            </section>
        </div>
    );
};

export default Welcome;