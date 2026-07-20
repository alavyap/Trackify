import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";
import { FEATURES } from "@/data/features";

export default function Home() {
  const user = null;
  const products = [];

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-orange-50">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={"/mglass.png"}
              alt="Website Logo"
              width={600}
              height={200}
              className="h-10 w-auto"
              loading="eager"
            />
          </div>
          {/* Auth Button */}
          <Button
            variant="default"
            size="default"
            className="bg-orange-500 hover:bg-olive-500 gap-2"
          >
            <LogIn className="w-4 h-4" />
            Sign In{" "}
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center"></div>
      </section>
    </main>
  );
}
