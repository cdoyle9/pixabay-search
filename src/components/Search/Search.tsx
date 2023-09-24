"use client";
import { queryImages } from "@/queries/index";
import { imageDetailContext } from "@/store/ImageDetail";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useContext, useState } from "react";
import "./search.scss";

const Search = () => {
  const context = useContext(imageDetailContext);
  const [q, setQ] = useState("");
  const imageQuery = useQuery({
    queryKey: ["images", { q }],
    queryFn: queryImages,
    enabled: false,
  });

  const handleSearch = () => {
    imageQuery.refetch();
  };

  return (
    <>
      <div>
        <label htmlFor="search-input" className="search-label">
          Search images:
        </label>
        <input
          id="search-input"
          className="search-input"
          onInput={(e) => setQ(e.currentTarget.value)}
        ></input>
        <button className="search-button" onClick={handleSearch}>
          Go
        </button>
      </div>
      <div className="results">
        {imageQuery.data &&
          imageQuery.data.hits.map((imageData) => (
            <Link key={imageData.id} href={"/detail"}>
              <img
                className="image"
                src={imageData.webformatURL}
                onClick={() => {
                  if (context?.setImageDetail) {
                    context?.setImageDetail(imageData);
                  }
                }}
              ></img>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Search;
