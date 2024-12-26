import { useEffect, useState } from 'react';
import './App.css';
const cities = [
  {
    "city": "New York",
    "country": "USA",
    "region": "North America",
    "population": 8419600
  },
  {
    "city": "New York1",
    "country": "Japan",
    "region": "Asia",
    "population": 37400068
  },
  {
    "city": "Paris",
    "country": "France",
    "region": "Europe",
    "population": 2148327
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Europe",
    "population": 8982000
  },
  {
    "city": "Mumbai",
    "country": "India",
    "region": "Asia",
    "population": 20667656
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "Oceania",
    "population": 5312163
  },
  {
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "region": "South America",
    "population": 6748000
  },
  {
    "city": "Cairo",
    "country": "Egypt",
    "region": "Africa",
    "population": 20484965
  },
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "North America",
    "population": 2930000
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Europe",
    "population": 3669491
  }
]

function TypeAhead() {
  const [searchkey, setSearchkey] = useState('')
  const [cityList, setCityList] = useState(cities);

  const throttleFunction = (cbFn: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null;;
    return function (...args: any[]) {
      if (!timer) {
        cbFn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay)
      }
    }
  }

   const filterData = () => {
    const filterData = cityList.filter((ct: any) => ct.city.toLowerCase().includes(searchkey));
    setCityList(filterData);
  }

  const throttledFilterData = throttleFunction(filterData, 300);


  useEffect(() => {
    if (searchkey === '') {
      setCityList(cities);
    } else {
      throttledFilterData();
    }
  }, [searchkey])




  function onSearch(eventData: any) {
    let data = eventData.target.value;
    setSearchkey(data);
  }


  return (
    <>
      <input type="text" onChange={onSearch} />
      <div className='search-results'>
        {searchkey && (cityList.map((citySerached: any) => (
          <ol key={citySerached.population}>
   
            <li>{citySerached.city}</li>
          </ol>
        ))

        )}

      </div>
    </>
  );
}

export default TypeAhead;
