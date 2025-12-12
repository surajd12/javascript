function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "suraj", age: 20 },
        { name: "bishal", age: 22 },
        { name: "Rita", age: 25 }
      ]);
    }, 1000);
  });
}

async function getUsers() {
  const users = await fetchUsers();
  console.log("Users:", users);
}

getUsers();