import {J as o, R as a, j as d, d as i} from "index-52500f5f.js";
const u = o.div.withConfig({
    componentId: "sc-o6az81-0"
})(["width:100%;height:100%;background-color:hsl(231deg 16% 15%);border-radius:6px;overflow:hidden;"])
  , g = e=>{
    const r = a.useRef(null)
      , t = a.useRef(null);
    return a.useEffect(()=>{
        const s = ()=>{
            const n = r.current
              , c = t.current;
            if (!n || !c)
                return;
            const l = e.value / e.max;
            c.style.width = `${l * n.clientWidth}px`
        }
        ;
        return s(),
        window.addEventListener("resize", s),
        ()=>{
            window.removeEventListener("resize", s)
        }
    }
    , [r, t, e.value, e.max]),
    d(u, {
        ref: r,
        style: e.backgroundStyle,
        className: e.backgroundClassName,
        children: d("div", {
            ref: t,
            id: "bar",
            style: e.barStyle,
            className: i("h-full", e.barClassName)
        })
    })
}
;
export {g as P};
