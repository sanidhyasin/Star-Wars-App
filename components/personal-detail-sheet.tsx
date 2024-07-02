import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Character } from "@/utils/columns";
import PlanetLoader from "@/components/ui/Loader/PlanetLoader";

interface PersonDetailSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  person: Character | null;
}

interface Film {
  title: string;
  episode_id: number;
  release_date: string;
}

const PersonDetailSheet: React.FC<PersonDetailSheetProps> = ({
  isOpen,
  onOpenChange,
  person,
}) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch films when the sheet is opened and a person is selected
  useEffect(() => {
    const fetchFilms = async () => {
      if (person) {
        setLoading(true);
        try {
          const response = await fetch("https://www.swapi.tech/api/films");
          const data = await response.json();
          const allFilms = data.result;

          // Filter films to include only those featuring the selected character
          const characterFilms = allFilms.filter((film: any) =>
            film.properties.characters.includes(person.url)
          );

          // Process and format film data
          const processedFilms = characterFilms.map((film: any) => ({
            title: film.properties.title,
            episode_id: film.properties.episode_id,
            release_date: film.properties.release_date,
          }));

          setFilms(processedFilms);
        } catch (error) {
          // Error handling would go here
        } finally {
          setLoading(false);
        }
      }
    };

    if (isOpen && person) {
      fetchFilms();
    }
  }, [isOpen, person]);

  if (!isOpen) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{person?.name || "Character Details"}</SheetTitle>
          <SheetDescription>Person Details</SheetDescription>
        </SheetHeader>
        {person ? (
          <div className="mt-4">
            <dl className="space-y-2">
              {Object.entries(person).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-gray-500 capitalize">
                    {key.replace("_", " ")}:
                  </dt>
                  <dd className="col-span-2">
                    {key === "homeworld" || key === "url" ? (
                      <a
                        className=" md:pl-0 pl-10 underline"
                        href={value}
                        target="_blank"
                      >
                        {"Open"}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Films</h3>
              {loading ? (
                <div className="flex justify-center items-center h-full pb-4">
                  <PlanetLoader />
                </div>
              ) : films.length > 0 ? (
                <ul className="list-disc pl-5">
                  {films.map((film, index) => (
                    <li key={index}>
                      {film.title} (Episode {film.episode_id}) - Released:{" "}
                      {film.release_date}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No films found for this character.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full pb-4">
            <PlanetLoader />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default PersonDetailSheet;
