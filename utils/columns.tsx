import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "height",
    header: "Height",
    cell: ({ row }) => <div>{row.getValue("height")} cm</div>,
  },
  {
    accessorKey: "mass",
    header: "Mass",
    cell: ({ row }) => <div>{row.getValue("mass")} kg</div>,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("gender")}</div>
    ),
  },
  {
    accessorKey: "birth_year",
    header: "Birth Year",
  },
  {
    accessorKey: "hair_color",
    header: "Hair Color",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("hair_color")}</div>
    ),
  },
];
