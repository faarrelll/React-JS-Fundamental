import React, { useEffect, useRef, useState } from "react";
import CenterContainer from "../../../components/CenterContainer";
import { Input, Pagination } from "@nextui-org/react";
import TodoAPI from "../../../api/TodoAPI";

const INITIAL_PAGE = 1;
const INITIAL_PAGE_SIZE = 10;

const FetchPaginationDemo = () => {
  const [query, setQuery] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const previousQueryRef = useRef("");

  const [pageSize, setPageSize] = useState(INITIAL_PAGE_SIZE);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    if (query !== previousQueryRef.current) {
      setPage(INITIAL_PAGE);
    }
    previousQueryRef.current = query;

    const getAllTodosByQueryAndPagination = async () => {
      const params = {
        query,
        size: Number(pageSize),
        page: Number(page),
      };
      console.log("params", params);
      const { todoList, metaData } = await TodoAPI.getTodosPagination(params);

      setTodoList(todoList);
      setTotalCount(metaData.totalCount);
    };

    getAllTodosByQueryAndPagination();
  }, [query, pageSize, page]);

  return (
    <CenterContainer>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          onValueChange={setPageSize}
          label="Page Size"
          placeholder="Customize the Page Size"
          type="text"
          defaultValue={INITIAL_PAGE_SIZE}
        />
        <Pagination
          //   variant="primary"
          showControls
          initialPage={INITIAL_PAGE}
          total={Math.ceil(totalCount / pageSize)} // total halaman = jumlah item dibagi size per halaman
          onChange={setPage}
        />

        <Input
          onValueChange={setQuery}
          label="Search"
          placeholder="Search To Do List"
          type="search"
        />
        <ul className="list-inside">
          {todoList.map((item) => (
            <li key={item.id}>
              ID: {item.id} - {item.title}
            </li>
          ))}
        </ul>
      </div>
    </CenterContainer>
  );
};

export default FetchPaginationDemo;
