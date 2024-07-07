// "use client"

// import { createContext, useState } from "react";
// import { useRouter } from "next/router";

// interface RouteContext {
//   route: string,
//   getRoute: () => void
// }

// export const RouteContext = createContext<RouteContext | null>(null)

// export default function RouteProvider({ children }: { children: React.ReactNode }) {

//   const [route, setRoute] = useState<string>("")

//   const router = useRouter();

//   const getRoute = () => {
//     const path = router.pathname;
//     setRoute(path);
//   }

//   return (
//     <RouteContext.Provider value={{ route, getRoute }}>
//       {children}
//     </RouteContext.Provider>
//   )

// }