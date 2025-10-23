import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider uppercase text-white">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2
          className="max-w-2xl mt-3 font-bold leading-snug tracking-tight lg:leading-tight font-tangerine
          text-3xl sm:text-4xl lg:text-5xl" 
          style={{ color: "gold" }}
        >
          {props.title}
        </h2>
      )}

      {props.children && (
        <p
          className="max-w-2xl py-4 leading-normal text-gray-500 dark:text-gray-300
          text-base sm:text-lg lg:text-xl xl:text-xl" 
        >
          {props.children}
        </p>
      )}
    </Container>
  );
}

