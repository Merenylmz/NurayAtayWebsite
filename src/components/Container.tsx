import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container mx-auto xl:px-0 ${
        props.className ? props.className : ""
      } p-4 md:p-8`} // <-- DEĞİŞİKLİK BURADA
      style={{ scrollBehavior: "smooth" }}
    >
      {props.children}
    </div>
  );
}

