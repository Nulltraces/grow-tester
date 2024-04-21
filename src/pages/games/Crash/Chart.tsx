import socket from "@/utils/constants";
import { domMax } from "framer-motion";
import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Chart() {
  const [data, setData] = useState<any[]>([]);

  const [multiplier, setMultiplier] = useState(0);

  useEffect(() => {
    socket.emit("CRASH:get_graph");

    socket.on("CRASH:start", (data) => {
      console.log("STARTED: ", data);
      setMultiplier(0);
      setData([]);
    });

    socket.on("CRASH:end", (data) => {
      console.log("CRASH:End", { data });
      setMultiplier(data);
    });

    socket.on("CRASH:graph", (data, multiplier) => {
      setMultiplier(multiplier);
      setData(data);
    });
  }, []);

  return (
    <>
      <div className="absolute z-10 flex font-bold text-white -translate-y-12 text-7xl">
        <p>{multiplier}</p>
        <span className="text-6xl">×</span>
      </div>
      <ResponsiveContainer
        width={"100%"}
        height={450}
        className="relative flex items-center justify-center"
      >
        <AreaChart
          // width={1000}
          // height={450}
          data={data}
          // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            accumulate="sum"
            allowDataOverflow
            // allowDuplicatedCategory={false}
          />
          <YAxis scale={"linear"} />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
