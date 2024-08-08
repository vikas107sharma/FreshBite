import { useState } from "react";
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const handleCityClick = (city: string) => {
    setSearchInput(city);
  };

  const cities = [
    'Delhi', 'Bengaluru', 'Mumbai', 'Kanpur', 'Surat', 'Pune', 'Ahmedabad', 'Hyderabad',
    'Chennai', 'Kolkata', 'New Delhi', 'Lucknow', 'Kushinagar'
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-orange-600">
          Around the Clock Cravings, Delivered to Your Door
        </h1>
        <span className="text-xl">One Click, Endless Options - Order Food with Ease!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
          searchQuery={searchInput}
        />
        <span className="flex flex-col">
          <p className="text-xl">The restaurants can be found in:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityClick(city)}
                className="text-blue-500 hover:underline"
              >
                {city}
              </button>
            ))}
          </div>
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-2xl tracking-tighter">
            Quicker Cravings, Faster Delivery Order Takeaway Now!
          </span>
          <span>
            Download the FreshBite App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
