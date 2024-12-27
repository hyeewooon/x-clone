"use client";

import { createContext, useState, type PropsWithChildren } from "react";

export const TabContext = createContext<{
  tab: "recommend" | "follow";
  setTab: (tab: "recommend" | "follow") => void;
}>({
  tab: "recommend",
  setTab: (tab) => {},
});

export default function TabProvider({ children }: PropsWithChildren) {
  const [tab, setTab] = useState<"recommend" | "follow">("recommend");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
