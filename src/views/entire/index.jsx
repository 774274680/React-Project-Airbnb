import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchEntireListAction } from "@/store/modules/entire";

import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
