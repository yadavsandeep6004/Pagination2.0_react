function PageNumber(props) {
  let arr = [];
  for (let i = 1; i <= props.totolPage; i++) {
    arr.push(
      <span
        className={i === props.currentPage ? "active page" : "page"}
        onClick={() => props.setPage(i)}
        key={i}
      >
        {i}
      </span>
    );
  }
  return arr;
}

export default PageNumber;
