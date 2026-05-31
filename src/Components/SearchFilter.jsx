"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SearchFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (e) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if(value){
            params.set("search", value);
        }
        else{
            params.delete("search");
        }

        router.push(`/all-facilities?${params.toString()}`);
    };

    const handlefilter = (e) => {
        const value = e.target.value;

        const params = new URLSearchParams(searchParams);

        if(value){
            params.set("sport", value);
        }else{
            params.delete("sport");
        }
        
        router.push(`/all-facilities?${params.toString()}`);
    };
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <input
        type="text"
        placeholder="Search Facility..."
        onChange={handleSearch}
        
        className="border border-orange-400 px-4 py-2 rounded-lg w-full"
      />

      <select onChange={handlefilter} className="border border-orange-400 text-gray-400 px-4 py-2 rounded-lg">
        <option className="text-gray-200" value="">All Sports</option>
        <option value="Football">Football</option>
        <option value="Cricket">Cricket</option>
        <option value="Tennis">Tennis</option>
        <option value="Badminton">Badminton</option>
        <option value="Basketball">Basketball</option>
        <option value="Multi-sport">Multi-sport</option>
        <option value="Swimming">Swimming</option>
      </select>
    </div>
  );
};

export default SearchFilter;
