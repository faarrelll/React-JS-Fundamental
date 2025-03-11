import axiosInstance from "./axiosInstance";

const TodoAPI = {
  async getAllTodos(limitParam = 10) {
    // HTTP #3 cara pakainya bisa dengan axiosInstance.httpMethodnya misal axiosInstance.post atau axiosInstance.get
    // contoh dari HTTP method get untuk mengambil data ke jsonPlaceholder todo list
    //  dan karena axiosInstance.get itu return promise maka kita harus await untuk dapat datanya
    const todosResponse = await axiosInstance.get(
      "/todos",
      // `/todos?_limit=${limitParam}}`,
      // untuk query param bisa di parameter kedua dengan key params
      {
        params: {
          _limit: limitParam,
        },
      }
    );

    console.log("todosResponse", todosResponse);

    return todosResponse.data;
  },

  async getTodosPagination(params) {
    const { query, page = 1, size = 10 } = params;
    let todoList = [];
    try {
      const data = await this.getAllTodos(1000);

      console.log("DEBUG", {
        params,
        data,
      });

      todoList = data || [];

      const metaData = {
        totalCount: todoList.length,
      };

      if (query) {
        todoList = data.filter((item) => {
          return item.title?.includes(query);
        });
        metaData.totalCount = todoList.length;
      }

      // kalau page 1, maka mulai dari index 0,
      // nah gimana supaya 0, (page - 1) dan angka berapapun dikali 0 akan sama dengan 0
      const offset = (page - 1) * size;
      // page * size = slice upperIndex
      todoList = todoList.slice(offset, page * size);

      return { todoList, metaData };
    } catch (_e) {
      console.log("getTodosPagination: ERROR", _e);

      return { todoList };
    }
  },
};

export default TodoAPI;
