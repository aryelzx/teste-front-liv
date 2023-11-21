import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { Button } from "../../../../shared/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../../../shared/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../../shared/components/ui/select";
import { useFavoritesMoviesContext } from "../../../../shared/contexts/favoritesMoviesContext";

function FilterFavoriteMovies() {
  const { filterValue, favsMovies } = useFavoritesMoviesContext()
  const [haveFilter, setHaveFilter] = useState(false)

  useEffect(() => {
    if (favsMovies.value.length > 0) {
      setHaveFilter(true)
    }
  }, [favsMovies.value])

  return (
    <>
      {
        haveFilter && (
          <Popover>
            <PopoverTrigger>
              <Button variant={"outline"} className="text-black flex gap-3 items-center">
                <FaFilter size={15} />
                Filtrar
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Select
                value={filterValue?.value}
                onValueChange={(value) => filterValue?.set(value)}>
                <SelectTrigger>
                  <SelectValue placeholder={filterValue?.value ? filterValue.value : 'Filtrar...'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem className="cursor-pointer" value="0">Sem Filtro</SelectItem>
                    <SelectItem className="cursor-pointer" value="1">Decrescente</SelectItem>
                    <SelectItem className="cursor-pointer" value="2">Crescente</SelectItem>
                    <SelectItem className="cursor-pointer" value="3">Recentes</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </PopoverContent>
          </Popover>
        )
      }
    </>
  )
}

export { FilterFavoriteMovies };

