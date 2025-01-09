const store = {
    todos: [
      {
        id: "1",
        title: "Complete Task A",
        completed: false,
      },
      {
        id: "2",
        title: "Read Book",
        completed: true,
      },
      {
        id: "3",
        title: "Make Jurnal Book",
        completed: true,
      },
    ],
  };

  const storeHandler = {

  }

  const storeProxy = new Proxy(store, storeHandler)


export default storeProxy;