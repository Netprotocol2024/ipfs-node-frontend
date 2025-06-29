import { Card, CardContent } from "@/components/ui/card";
import { healthCheck } from "@/services/backend.api";
import { Network, Cpu, ActivitySquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isNetworkActive, setIsNetworkActive] = useState(null);
  const peerId = import.meta.env.VITE_IPFS_NODE_ID || "QmYwAPJzv5CZsnAztbCQHC5q8cY3Zz3q3iGd1mXSExk8sB";
  const [copied, setCopied] = useState(false);

const copyToClipboard = async (e) => {
  e.preventDefault(); // ✅ correct spelling
  try {
    await navigator.clipboard.writeText(peerId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Failed to copy Peer ID:", err);
  }
};

  useEffect(() => {
    const checkHealth = async () => {
      const { data, error } = await healthCheck();
      if (data && !error) {
        setIsNetworkActive(true);
      } else {
        setIsNetworkActive(false);
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-orbitron">
      {/* Quantum Network */}
      <Card className="bg-[#0b0b0b] border border-cyan-400 rounded-xl p-6 shadow-[0_0_30px_#00ffff80] hover:scale-[1.015] transition-transform duration-300">
        <CardContent className="space-y-4 text-cyan-300">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold tracking-wide uppercase">Peer ID</span>
            <Network className="h-6 w-6 text-cyan-400" />
          </div>
          <p className="text-4xl font-extrabold text-cyan-200 tracking-wider">
              <div className="flex items-center gap-2">
      <p className="text-4xl font-extrabold text-cyan-200 tracking-wider">
        {peerId.slice(0, 4)}...{peerId.slice(-4)}
      </p>
      <button
        onClick={copyToClipboard}
        className="text-xs font-semibold bg-cyan-700 hover:bg-cyan-800 text-white px-2 py-1 rounded"
      >
        {copied ? "Done" : "Copy"}
      </button>
    </div>
          </p>
          <p className="text-base text-cyan-100">
             
             Unique IPFS Node identifier
          </p>
        </CardContent>
      </Card>

      {/* IPFS Node */}
      <Card className="bg-[#0b0b0b] border border-emerald-400 rounded-xl p-6 shadow-[0_0_30px_#00ffaa80] hover:scale-[1.015] transition-transform duration-300">
        <CardContent className="space-y-4 text-emerald-300">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold tracking-wide uppercase">IPFS Status</span>
            <Cpu className="h-6 w-6 text-emerald-400" />
          </div>
          <p className="text-4xl font-extrabold text-emerald-200 tracking-wider">  {isNetworkActive === null
              ? "Loading..."
              : isNetworkActive
              ? "Connected"
              : "Offline"}</p>
          <p className="text-base text-emerald-100">
          The node is currently online and reachable
          </p>
        </CardContent>
      </Card>

      {/* Network Health */}
      <Card className="bg-[#0b0b0b] border border-pink-400 rounded-xl p-6 shadow-[0_0_30px_#ff00c880] hover:scale-[1.015] transition-transform duration-300">
        <CardContent className="space-y-4 text-pink-300">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold tracking-wide uppercase">Network</span>
            <ActivitySquare className="h-6 w-6 text-pink-400" />
          </div>
          <p className="text-4xl font-extrabold text-pink-200 tracking-wider">99.99%</p>
          <p className="text-base text-pink-100">Optimal performance</p>
        </CardContent>
      </Card>
    </div>
  );
}
