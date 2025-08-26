import React from "react";
import { useAutocomplete } from "@mui/base";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { truncate } from "../../helpers/helpers";
import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg";

const Listbox = styled("ul")({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: 500,
  zIndex: 10,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflowY: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
});

export default function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "search-autocomplete",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    navigate(`/album/${value.slug}`);
  };

  return (
    <div style={{ position: "relative", flex: 1 }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <button className={styles.searchButton} type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs.flatMap((song) => song.artists);

            return (
              <li
                {...getOptionProps({ option, index })}
                key={option.slug}
                className={styles.listElement}
              >
                <p className={styles.albumTitle}>{option.title}</p>
                <p className={styles.albumArtists}>{truncate(artists.join(", "), 40)}</p>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}
