import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Speed Wings Resume Builder and Parser",
  description:
    "Speed Wings Resume Builder and Parser is a  powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, Speed Wings Resume Builder and Parser also provides a resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
