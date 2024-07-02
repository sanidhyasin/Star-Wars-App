import { DataTableDemo } from "@/components/table";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Homepage() {
  return (
    <div className=" flex z-100 h-full flex-col w-full px-4 md:px-24 items-center justify-center py-4 md:py-12">
      <BackgroundBeams />
      <DataTableDemo />
    </div>
  );
}
