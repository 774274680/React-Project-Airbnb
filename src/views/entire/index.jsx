import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import { useDispatch } from "react-redux";
import { fetchEntireListAction } from "@/store/modules/entire";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
    </EntireWrapper>
  );
});

export default Entire;
