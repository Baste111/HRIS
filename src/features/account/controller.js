const accountService = require("./service");

const accountController = {
  login: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const result = await accountService.login(username, password);
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
};

module.exports = accountController;
