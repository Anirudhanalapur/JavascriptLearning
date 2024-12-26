import React, { useCallback, useEffect, useRef, useState } from "react"
import { Debounce } from "../../utility/utility";
import { getPlaces } from "../../API/search.service";
import { SearchResults } from "./searchResults/searchResults";
import { IPlace } from "../../interfaces/place.interface";

function Places() {
    const [searchedPlace, setSearchedPlace] = useState('');
    const [searchResult, setSearchResult] = useState<IPlace[]>([]);
    const focusInput = useRef<HTMLInputElement>(null);

    const debounceSetSearchedPlace = useCallback(Debounce((value: string) => setSearchedPlace(value), 500), [])

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceSetSearchedPlace(e.target.value)
    }

    useEffect(() => {
        focusInput?.current?.focus()
    }, [])

    // search for 
    useEffect(() => {
        if (searchedPlace) {
            getPlaces(searchedPlace).then((placeData: any) => {
                setSearchResult(placeData);
            })
        }
    }, [searchedPlace])



    return (<>
        <div className="my-2.5 flex justify-center">
            <input onChange={handleSearchInputChange} className="rounded p-2 text-lg outline outline-1 w-60" ref={focusInput} type="text" placeholder="Where do you want to stay" />
        </div>
        <div className="flex justify-center w-full align-center">
            <SearchResults places={searchResult} />
        </div>
    </>)
}

export default Places