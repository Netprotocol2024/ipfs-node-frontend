import { Outlet, useNavigate } from "react-router-dom";
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa";
import { SiBinance, SiRipple, SiSolana, SiTether } from "react-icons/si";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
const watchlist = [
  {
    name: "Bitcoin",
    icon: <FaBitcoin />,
    price: "$78,750.60",
    change: "-1.2%",
    color: "bg-yellow-500",
  },
  {
    name: "Ethereum",
    icon: <FaEthereum />,
    price: "$1,494.80",
    change: "4.1%",
    color: "bg-purple-500",
  },
  {
    name: "XRP",
    icon: <SiRipple />,
    price: "$1.94",
    change: "-1.2%",
    color: "bg-blue-500",
  },
  {
    name: "BNB",
    icon: <SiBinance />,
    price: "$571.92",
    change: "4.1%",
    color: "bg-yellow-400",
  },
  {
    name: "USDC",
    icon: <SiTether />,
    price: "$1,494.80",
    change: "-1.2%",
    color: "bg-green-500",
  },
  {
    name: "Solana",
    icon: <SiSolana />,
    price: "$109.36",
    change: "4.1%",
    color: "bg-indigo-500",
  },
  {
    name: "Dogecoin",
    icon: <FaDog />,
    price: "$0.1512",
    change: "4.1%",
    color: "bg-orange-400",
  },
];

export default function UserDashboardLayout() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (item) => {
    setSelectedItem(item);
    navigate("/coins");
  };
  return (
    <div>
      <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-50 z-0"
      />
      <div
        className=" text-white mt-24 max-w-7xl mx-auto relative h-full flex flex-auto gap-2  w-screen   "
      
      >
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(90vh-30px)] ml-4 p-4 shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] hidden md:block border rounded-3xl  border-[#343442]">
          <h2 className="text-xl font-semibold mb-6 ">My Watchlist</h2>
          <ul className="space-y-3">
            {watchlist.map((coin, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center px-2 py-2 border rounded-2xl border-[#343442] transition-all hover:border-cyan-500 cursor-pointer ${
                  selectedItem?.name === coin.name ? "border-cyan-500" : ""
                }`}
                onClick={() => handleSelect(coin)}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-lg ${coin.color} rounded-full p-2`}>
                    {coin.icon}
                  </span>
                  <span>{coin.name}</span>
                </div>
                <div className="text-sm text-right">
                  <p className="text-gray-300">{coin.price}</p>
                  <p
                    className={
                      coin.change.includes("-")
                        ? "text-red-500"
                        : "text-green-400"
                    }
                  >
                    {coin.change}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Button
            className="mt-6 w-full py-2  text-white bg-transparent border-cyan-400  rounded-xl shadow-md transition"
            variant="outline"
            onClick={()=>navigate('/manage')}
          >
            Manage
          </Button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto h-full w-full ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
