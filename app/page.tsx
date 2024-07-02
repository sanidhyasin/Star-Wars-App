import Homepage from "@/components/homepage";
import Navbar from "@/components/ui/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Homepage />
    </main>
  );
}
