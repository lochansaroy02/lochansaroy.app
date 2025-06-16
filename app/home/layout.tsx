import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>

                <main className="flex ">
                    <Sidebar />
                    {children}

                </main>
            </body>
        </html>
    )
}