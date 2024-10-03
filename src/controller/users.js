const getAllUser = (req, res) => {
  const data = {
    id: "1",
    name: "Rafly Aziz Abdillah",
    email: "raflyazizabdillah@gmail.com",
    address: "Jl Muara Bahari",
  };
  res.json({
    message: "GET all users Successfully",
    data: data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new users sucessfully",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log(`id ${idUser}`);
  res.json({
    message: "UPDATE users sucessfully",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  console.log(`id ${idUser}`);
  res.json({
    message: "DELETE users sucessfully",
    data: {
      id: idUser,
      name: "Rafly Aziz Abdillah",
      email: "raflyazizabdillah@gmail.com",
      address: "Jl Muara Bahari",
    },
  });
};

module.exports = { getAllUser, createNewUser, updateUser, deleteUser };
