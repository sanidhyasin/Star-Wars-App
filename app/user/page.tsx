import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";

async function fetchData() {
  const response = await fetch("https://www.swapi.tech/api/people/1");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function User() {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <h1>Data</h1>
      <Button>Click it </Button>
      {data.result.properties.height}
      <ModeToggle />
    </div>
  );
}
