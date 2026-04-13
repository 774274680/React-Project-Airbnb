import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";

import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireListAction } from "@/store/modules/entire";

const EntirePagination = memo(() => {
  const dispatch = useDispatch();
  const { totalCount } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
    };
  }, shallowEqual);

  const totalPage = Math.ceil(totalCount / 20);

  function handlePagination(event, page) {
    window.scroll(0, 0);
    dispatch(fetchEntireListAction(page));
  }

  return (
    <PaginationWrapper>
      <Pagination count={totalPage} onChange={handlePagination} />
    </PaginationWrapper>
  );
});

export default EntirePagination;
