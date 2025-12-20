import { useState } from 'react';
import axios from 'axios';
import { Server, Play,  Wifi } from 'lucide-react';

type Props = { instanceId: string };

export function EC2Toggle({ instanceId }: Props) {
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    try {
      const res = isOn
        ? await axios.post('http://localhost:3000/ec2/stop', { instanceId })
        : await axios.post('http://localhost:3000/ec2/start', { instanceId });

      console.log(res.data);
      setIsOn(!isOn);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const shortId = instanceId.slice(0, 10);

  return (
    <div className="max-w-xs bg-white/5 border border-white/6 rounded-lg p-4 text-white">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700">
          <Server className="text-sky-300" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Instance</div>
              <div className="text-xs text-slate-300">{shortId}...</div>
            </div>
            <div className={`text-white text-xs px-2 py-1 rounded-full ${isOn ? 'bg-emerald-500' : 'bg-slate-600'}`}>
              {isOn ? 'running' : 'stopped'}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={toggle}
              disabled={loading}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white text-sm disabled:opacity-60"
            >
              <Play size={14} />
              {loading ? 'Processing' : isOn ? 'Stop' : 'Start'}
            </button>

            <button className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-700 text-white text-sm">
              <Wifi size={14} />
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
