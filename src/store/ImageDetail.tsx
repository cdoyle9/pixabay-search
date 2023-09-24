"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import type { ImageData } from "@/queries/index";

export const imageDetailContext = createContext<{
  imageDetail: ImageData | null;
  setImageDetail: Dispatch<SetStateAction<ImageData | null>>;
} | null>(null);

export default function ImageDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imageDetail, setImageDetail] = useState<ImageData | null>(null);

  return (
    <imageDetailContext.Provider value={{ imageDetail, setImageDetail }}>
      {children}
    </imageDetailContext.Provider>
  );
}
