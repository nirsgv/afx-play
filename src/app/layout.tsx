import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/nav-bar'
import { ThemeProvider } from "./context/theme-provider";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<ThemeProvider>
				<body className={inter.className}>
				<NavBar />
					{children}
				</body>
		</ThemeProvider>
    </html>
  );
}
