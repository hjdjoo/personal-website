// import { RefObject } from "react";

export default function getComponentSize(element: HTMLDivElement | HTMLElement) {

  const { width, height } = element.getBoundingClientRect();


  return { width, height };

}