import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Features/users/allJobs/allJobsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { totalJobs, numberOfPages, page } = useSelector(
    (store) => store.allJobs
  );
  const pageArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );
  const [pageNumber, setPageNumber] = React.useState(page);

  const nextPage = () => {
    let next = page + 1;
    if (next > numberOfPages) {
      next = numberOfPages;
    }
    setPageNumber(next);
    dispatch(changePage(next));
  };

  const prevPage = () => {
    let previous = page - 1;
    if (page <= 1) {
      previous = 1;
    }
    setPageNumber(previous);
    dispatch(changePage(previous));
  };
  return (
    <div className="my-4 flex justify-end items-center mr-6 gap-4 text-gray-500">
      <div className="flex justify-between items-center gap-4">
        <BiChevronLeft
          className="text-xl cursor-pointer"
          onClick={() => prevPage()}
        />
        {pageArray.map((item, i) => (
          <button
            key={item}
            onClick={() => {
              dispatch(changePage(item));
              setPageNumber(item);
            }}
            className={`${pageNumber === item && "bg-gray-100 border-[1px] border-gray-400 px-1 rounded"}`}
          >
            {item}
          </button>
        ))}
        <BiChevronRight
          className="text-xl cursor-pointer"
          onClick={() => nextPage()}
        />
      </div>
    </div>
  );
};

export default Pagination;
