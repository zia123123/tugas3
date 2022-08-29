const Todo = require("../../firebase");
const apiResponse = require("../helpers/apiResponse");
module.exports = {

  async create(req, res) {
    const data = req.body;
    let result = await Todo.add({ data })
      .then((result) => {
        return apiResponse.successResponseWithData(
          res,      
          "SUCCESS CREATE",
          data
        );
      })
      .catch(function (err) {
        return apiResponse.ErrorResponse(res, err);
      });
  },

  async find(req, res, next) {
    let result = await event.findByPk(req.params.id);
    if (!result) {
      return apiResponse.notFoundResponse(res, "Not Fond");
    } else {
      req.result = result;
      next();
    }
  },

  async index(req, res) {
    const snapshot = await Todo.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  },

 
  // Update
  async update(req, res) {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await Todo.doc(id).update(data).then(() => {
      return apiResponse.successResponseWithData(res, "SUCCESS", result);
    });
  },
};

// app.get("/", async (req, res) => {
//   const snapshot = await Todo.get();
 
//   res.send(list);
// });

// app.post("/create", async (req, res) => {
//   const data = req.body;
//   await Todo.add({ data });
//   res.send({ msg: "User Added" });
// });

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await Todo.doc(id).update(data);
//   res.send({ msg: "Updated" });
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await Todo.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });
