"use server"
import { headers } from "next/headers";

export const isMobile = async (): Promise<boolean> => {

  const userAgent = headers().get("user-agent") || "";

  const checkMobile = (userAgent: string): boolean => {
    return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
  }

  const isMobile = checkMobile(userAgent);

  return isMobile;

};