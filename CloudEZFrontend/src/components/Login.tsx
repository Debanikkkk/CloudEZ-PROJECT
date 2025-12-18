import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder: call your auth API here
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-sky-900 flex items-center justify-center">
            <div className="w-full max-w-md bg-white/5 backdrop-blur rounded-xl border border-white/6 p-8 text-white shadow-lg">
                <h2 className="text-2xl font-semibold">Sign in to CloudEZ</h2>
                <p className="text-sm text-slate-300 mt-1">Manage your AWS EC2 instances securely.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm text-slate-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // required
                            className="mt-2 w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                            className="mt-2 w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-slate-300">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-sky-500 bg-slate-800 rounded" />
                            Remember me
                        </label>
                        <button type="button" onClick={() => navigate('/')} className="text-sm text-slate-300 hover:underline">Back</button>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white font-semibold shadow-md hover:opacity-95"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-slate-400">
                    Don't have an account? <button onClick={() => navigate('/pricing')} className="text-sky-300 underline ml-1">Check pricing</button>
                </div>
            </div>
        </div>
    );
};

export default Login;