




    const users = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 24 },
      { id: 3, name: 'Charlie', age: 35 }
    ];



    const processedUsers = users.map(user => ({
      ...user,a : user.age > 25
    }));
    console.log(processedUsers);