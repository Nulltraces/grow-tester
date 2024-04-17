import socket from "@/utils/constants";
import { domMax } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

export default function Chart() {
  // const data = useData();
  const [data, setData] = useState<any[]>([]);

  const [multiplier, setMultiplier] = useState(0);

  useEffect(() => {
    socket.emit("crash:get_graph");

    socket.on("crash:start", (data) => {
      console.log("STARTED: ", data);
      setMultiplier(0);
      setData([]);
    });

    socket.on("crash:end", (data) => {
      console.log("CRASH:End", { data });
      setMultiplier(data);
    });

    // socket.on("crash:multiplier", (data) => {
    //   const { elapsedTime, multiplier } = data;
    //   setMultiplier(multiplier);
    //   const currentValue = {
    //     name: Math.round(elapsedTime / 1000) + "s",
    //     uv: elapsedTime / 1000,
    //     pv: multiplier,
    //     amt: 1000,
    //   };

    //   console.log("CRASH:Multiplier", { data });
    //   setData((prev) => [...prev, currentValue]);
    // });

    socket.on("crash:graph", (data, multiplier) => {
      //  console.log("CRASH:End", { data });
      setMultiplier(multiplier);
      console.log("GET_GRAPH: ", data);
      setData(data);
    });
    // return () => {
    //   socket.off("join_chat");
    // };
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
            // type="number"
            // domain={([dataMin, dataMax]) => {
            //   if (!(dataMin && dataMax)) return [1, 1];
            //   const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax));
            //   return [-absMax, absMax];
            // }}
            allowDataOverflow
            // allowDuplicatedCategory={false}
          />
          <YAxis scale={"linear"} />
          <CartesianGrid strokeDasharray="3 3" horizontal={{}} opacity={0.3} />
          {/* <Tooltip /> */}
          {/* <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        /> */}
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

function useData() {
  //   const data = [];

  const [data, setData] = useState([]);

  // Function to generate a random number within a range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to generate an array of objects representing pages
  function generatePagesArray(numPages) {
    const pagesArray = [];
    let uv = 1890;
    let pv = 4800;
    let amt = 2181;

    for (let i = 0; i < numPages; i++) {
      const pageName = String.fromCharCode(65 + i); // ASCII code for 'A' is 65
      uv *= getRandomNumber(110, 120) / 100; // Increment uv exponentially
      pv *= getRandomNumber(110, 120) / 100; // Increment pv exponentially
      amt *= getRandomNumber(110, 120) / 100; // Increment amt exponentially

      const pageObject = {
        name: "Page " + pageName,
        uv: uv,
        pv: pv,
        amt: amt,
      };

      //   pagesArray.push(pageObject);
      //   @ts-ignore COMEBACK
      setData((prev) => [...prev, pageObject]);
    }

    return pagesArray;
  }

  // Generate pages array with 26 pages from Page A to Page Z
  //   const pages = generatePagesArray(26);

  useEffect(() => {
    const pagesArray = [];
    let uv = 10;
    let pv = 10;
    let amt = 0;
    let i = 0;
    setInterval(() => {
      //  for (let i = 0; i < numPages; i++) {
      const pageName = String.fromCharCode(65 + i); // ASCII code for 'A' is 65
      uv *= getRandomNumber(110, 120) / 100; // Increment uv exponentially
      pv *= getRandomNumber(110, 120) / 100; // Increment pv exponentially
      amt *= getRandomNumber(110, 120) / 100; // Increment amt exponentially

      const pageObject = {
        name: "Page " + pageName,
        uv: uv,
        pv: pv,
        amt: amt,
      };

      //   pagesArray.push(pageObject);
      //   @ts-ignore COMEBACK
      setData((prev) => [...prev, pageObject]);

      i++;
      //  }
    }, 1000);
  }, []);
  return data;
}

// These multiplier values are just meant to form the graph, and not to replace the game multiplier value
