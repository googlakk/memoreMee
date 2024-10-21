import { FC, useState } from "react";

const SeacrhForm: FC = () => {
  const [searchState, setSearchState] = useState(true);
  const handleClickSearch = () => {
    setSearchState(!searchState);
  };
  return (
    <>
      <button
        onClick={handleClickSearch}
        className="btn btn-outline btn-primary"
      >
        {searchState ? "Поиск" : "Закрыть"}
      </button>
      {searchState ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      )}
    </>
  );
};
export default SeacrhForm;
