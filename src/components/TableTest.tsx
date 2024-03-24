export default function TableTest() {
  return (
    <table className="border-separate overflow-y-auto overflow-x-scroll table-fixed border-spacing-0 border-spacing-y-1 pr-1 sm:w-full">
      <thead className="uppercase text-gray-500 text-[0.85rem] bg-dark-850">
        <tr>
          <th className="rounded-l-sm py-3 pl-3 text-left w-[1/2]">Game</th>
          <th className="py-2 text-left">Player</th>
          <th className="py-2 text-center">Bet</th>
          <th className="py-2 text-center">Profit</th>
          <th className="py-2 text-center w-2/12">Multiplier</th>
          <th className="rounded-r-sm py-2 pr-3 text-right">Time</th>
        </tr>
      </thead>
      <tbody className="border-spacing-y-3">
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Limbo
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Mihaylovic</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.30
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              0.30
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">2.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:09
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Keno
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">MrOIXC</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.02
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.02
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:09
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Plinko
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">rynganteng</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.10
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">1.10×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:09
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Reme
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Sluagh</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.50
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.50
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:08
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Mines
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">dogi61</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              0.34
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">2.71×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:08
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Mines
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">PoorProfit</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">2.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:08
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Towers
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">ZaneeGOD</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.80
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              1.02
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">2.28×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:07
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Cross the Road
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Hayabusan</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.10
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.10
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:07
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Limbo
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Mihaylovic</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:06
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Mines
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Ratrixalex</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.25
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.25
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Mines
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">BROKH</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Slots
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Iamthetopg</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Keno
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">MrOIXC</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.02
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.02
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Mines
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Olgaybeytk</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              2.10
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              2.68
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">2.28×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Mines
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">BayCino</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.05
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.05
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Limbo
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Mihaylovic</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Slots
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Iamthetopg</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.20
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              0.70
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">4.50×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Reme
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Sluagh</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              1.00
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -1.00
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:05
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Cross the Road
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">RonBernthal</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.04
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-400">
            <span className="flex gap-1 justify-center items-center">
              0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px] text-green-500">1.26×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:04
          </td>
        </tr>
        <tr className="bg-dark-850 text-sm text-light overflow-hidden">
          <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
            Limbo
          </td>
          <td className="text-left text-white overflow-hidden min-w-[130px]">
            <a className="cursor-pointer">Mihaylovic</a>
          </td>
          <td className="text-center  min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">
            <span className="flex gap-1 justify-center items-center">
              -0.01
              <img
                src="/assets/dl-2a39d38a.webp"
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </td>
          <td className="text-center min-w-[80px]">0.00×</td>
          <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
            12:00:04
          </td>
        </tr>
      </tbody>
    </table>
  );
}
