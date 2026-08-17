import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The TOS Travel Journal | TravelOStyle",
  description: "Stories, guides and inspiration from TravelOStyle.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
