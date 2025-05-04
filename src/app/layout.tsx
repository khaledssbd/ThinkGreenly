import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { Provider } from "@/Providers/Provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ThinkGreenly",
    description: "A Sustainable Idea Hub",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Provider>
                        <Toaster
                            //   richColors
                            //   position="top-center"
                            toastOptions={{
                                style: {
                                    background: "#2ecc71",
                                    border: "none",
                                },
                            }}
                        />
                        {children}
                    </Provider>
                </ThemeProvider>
            </body>
        </html>
    );
}
