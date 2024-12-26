import { IPlace } from "../../../interfaces/place.interface";

interface SearchResultsProps {
    places: IPlace[]; 
}

export function SearchResults({ places }: SearchResultsProps) {
    return (<div className="boder-solid border-2 flex-col nowrap">
        {places.map((place: IPlace, index:number) => (
            <div className="w-60" key={index}> {place.city}</div>
        ))}
    </div>)
}