// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type Instance = {
//   instanceId: string;
//   state: string;
//   instanceType?: string;
//   availabilityZone?: string;
//   publicIp?: string;
//   privateIp?: string;
//   launchTime?: string;
// };

// export default function InstanceManager() {
//   const [instances, setInstances] = useState<Instance[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [creating, setCreating] = useState(false);
//   const [imageId, setImageId] = useState("");
//   const [instanceType, setInstanceType] = useState("t3.micro");
//   const api = "http://localhost:3000";

//   const fetchList = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${api}/ec2/list`);
//       setInstances(res.data);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   const create = async () => {
//     if (!imageId) return;
//     setCreating(true);
//     try {
//       await axios.post(`${api}/ec2/create`, { imageId, instanceType });
//       await fetchList();
//       setImageId("");
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setCreating(false);
//     }
//   };

//   const start = async (id: string) => {
//     try {
//       await axios.post(`${api}/ec2/start`, { instanceId: id });
//       await fetchList();
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const stop = async (id: string) => {
//     try {
//       await axios.post(`${api}/ec2/stop`, { instanceId: id });
//       await fetchList();
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <div style={{ marginBottom: 20 }}>
//         <input placeholder="AMI ImageId" value={imageId} onChange={e => setImageId(e.target.value)} style={{ marginRight: 8 }} />

        
//         <select value={instanceType} onChange={e => setInstanceType(e.target.value)} style={{ marginRight: 8 }}>
//           <option value="t3.micro">t3.micro</option>
//           <option value="t3.small">t3.small</option>
//           <option value="t3.medium">t3.medium</option>
//         </select>
//         <button onClick={create} disabled={creating || !imageId}>{creating ? "Creating..." : "Create Instance"}</button>
//       </div>
//       <div>
//         <button onClick={fetchList} disabled={loading} style={{ marginBottom: 12 }}>{loading ? "Refreshing..." : "Refresh List"}</button>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th>InstanceId</th>
//               <th>State</th>
//               <th>Type</th>
//               <th>AZ</th>
//               <th>Public IP</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {instances.map(i => (
//               <tr key={i.instanceId}>
//                 <td style={{ padding: 8, border: "1px solid #ddd" }}>{i.instanceId}</td>
//                 <td style={{ padding: 8, border: "1px solid #ddd" }}>{i.state}</td>
//                 <td style={{ padding: 8, border: "1px solid #ddd" }}>{i.instanceType}</td>
//                 <td style={{ padding: 8, border: "1px solid #ddd" }}>{i.availabilityZone}</td>
//                 <td style={{ padding: 8, border: "1px solid #ddd" }}>{i.publicIp || i.privateIp}</td>
//                 <td style={{ padding: 8, border: "1px solid #ddd" }}>
//                   <button onClick={() => start(i.instanceId)} style={{ marginRight: 8 }}>Start</button>
//                   <button onClick={() => stop(i.instanceId)}>Stop</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import { Server, Play, Pause, RefreshCw } from 'lucide-react';

const AMI_OPTIONS = [
  { id: 'ami-0001bd5c2cc5202fa', name: 'amazon-eks-node-al2023-x86_64-nvidia-1.29-v20251002' },
  { id: 'ami-04e63e08d32a79f', name: 'GitLab EE 18.5.1' },
  { id: 'ami-01e153d8828d420c', name: '(SupportedImages) - PostgreSQL 16.3' },
  { id: 'ami-018123c2107f95f', name: 'SDC_CSP_AMI_RG_3.0-SNAPSHOT' },
  { id: 'ami-04ee06c0486c048c', name: 'aws-elasticsearch-2021' }
];

export interface InstanceBody {
  instanceId: string;
  state: string;
  name: string;
  instanceType: string;
  availabilityZone: string;
  publicIp: string;
  privateIp: string;
  launchTime: string;
}

export function InstanceManager() {
  const [instanceType, setInstanceType] = useState('t3.micro');
  const [ami, setAmi] = useState(AMI_OPTIONS[0].id);
  const [instances, setInstances] = useState<InstanceBody[]>([]);
  const [loading, setLoading] = useState(false);

  const createInstance = async () => {
    if (!ami) return;
    setLoading(true);
    try {
      const createInstanceBody2 = {
        imageId: ami,
        instanceType: instanceType,
        maxCount: 1,
        minCount: 1
      };
      const res = await axios.post('http://localhost:3000/ec2/create', createInstanceBody2);
      // If API returns created instances array, refresh list instead
      if (Array.isArray(res.data)) {
        await fetchInstances();
      } else {
        setInstances((s) => [res.data, ...s]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchInstances = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/ec2/list');
      setInstances(res.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const startInstance = async (id: string) => {
    try {
      await axios.post('http://localhost:3000/ec2/start', { instanceId: id });
      await fetchInstances();
    } catch (e) {
      console.error(e);
    }
  };

  const stopInstance = async (id: string) => {
    try {
      await axios.post('http://localhost:3000/ec2/stop', { instanceId: id });
      await fetchInstances();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-sky-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">EC2 Instance Manager</h2>
          <div className="flex items-center gap-2">
            <button onClick={fetchInstances} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/6 hover:bg-white/8 text-sm">
              <RefreshCw size={16} /> Refresh
            </button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-6">
          <div className="bg-white/5 border border-white/6 rounded-lg p-4">
            <label className="text-sm text-slate-300">AMI</label>
            <select value={ami} onChange={(e) => setAmi(e.target.value)} className="mt-2 w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white">
              {AMI_OPTIONS.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
          </div>

          <div className="bg-white/5 border border-white/6 rounded-lg p-4">
            <label className="text-sm text-slate-300">Instance Type</label>
            <input value={instanceType} onChange={(e) => setInstanceType(e.target.value)} className="mt-2 w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white" />
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <button onClick={createInstance} disabled={loading} className="px-4 py-2 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white font-semibold">
            {loading ? 'Creating...' : 'Create Instance'}
          </button>
          <button onClick={fetchInstances} disabled={loading} className="px-4 py-2 rounded-md bg-slate-700 text-white">
            {loading ? 'Loading...' : 'List Instances'}
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-3">Instances</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {instances.length === 0 && <div className="text-slate-300">No instances found. Click "List Instances" to load.</div>}
          {instances.map((i) => (
            <div key={i.instanceId} className="bg-white/5 border border-white/6 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold">{i.name || i.instanceId}</div>
                  <div className="text-xs text-slate-300">{i.instanceId}</div>
                </div>

                <div className={`text-xs px-2 py-1 rounded-full ${i.state === 'running' ? 'bg-emerald-500' : 'bg-slate-600'}`}>{i.state}</div>
              </div>

              <div className="mt-3 text-sm text-slate-300 grid grid-cols-2 gap-2">
                <div>Type: <span className="text-white">{i.instanceType}</span></div>
                <div>IP: <span className="text-white">{i.publicIp || i.privateIp || '-'}</span></div>
                <div>AZ: <span className="text-white">{i.availabilityZone || '-'}</span></div>
                <div>Launched: <span className="text-white">{i.launchTime || '-'}</span></div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button onClick={() => startInstance(i.instanceId)} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 text-white text-sm">
                  <Play size={14} /> Start
                </button>
                <button onClick={() => stopInstance(i.instanceId)} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-700 text-white text-sm">
                  <Pause size={14} /> Stop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
