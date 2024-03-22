'use client'
import { NextUIProvider } from "@nextui-org/react";
import { Children } from "react";

export default function MainProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <NextUIProvider>
            {
                children
            }
        </NextUIProvider>
    )
}