import React, { useState } from "react";
import NextButton from "./NextButton";
import PageNumber from "./PageNumber";
import PrevButton from "./PrevButton";

function Page() {
  let Pagedata = 10;
  let totoldata = 100;
  let totolPage = Math.ceil(totoldata / Pagedata);
  let [currentPage, setCurrentPage] = useState(1);

  function setPage(data) {
    setCurrentPage(data);
  }

  function prevButton() {
    if (currentPage > 1) {
      setCurrentPage(--currentPage);
    }
  }

  function nextButton() {
    if (currentPage < totolPage) {
      setCurrentPage(++currentPage);
    }
  }

  return (
    <>
      <h1>Pagination</h1>

      <PrevButton prevButton={prevButton} />
      <PageNumber
        totolPage={totolPage}
        setPage={setPage}
        currentPage={currentPage}
      />
      <NextButton nextButton={nextButton} />
    </>
  );
}

export default Page;
