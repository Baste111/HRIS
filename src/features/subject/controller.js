const subjectService = require("./service");

module.exports = {
    create: async (req, res) => {
        const subjectData = req.body;
        try {
            const result = await subjectService.create(subjectData);
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },

    update: async (req, res) => {
        const subjectId = req.params.subjectId;
        const subjectData = req.body;
        try {
            const result = await subjectService.update(subjectId, subjectData);
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },

    getAll: async (req, res) => {
        try {
            const result = await subjectService.getAll();
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },

    getSingle: async (req, res) => {
        const subjectId = req.params.subjectId;
        try {
            const result = await subjectService.getSingle(subjectId);
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },

    search: async (req, res) => {
        const searchOption = req.params.searchOption;
        const searchValue = req.params.searchValue;
        try {
            const result = await subjectService.search(searchOption, searchValue);
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },

    delete: async (req, res) => {
        const subjectId = req.params.subjectId;
        try {
            const result = await subjectService.delete(subjectId);
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    },

    getCategories: async (req, res) => {
        try {
            const result = await subjectService.getCategories();
            res.status(200).json(result);
        } catch (errors) {
            console.log(errors);
            res.status(400).json(errors);
        }
    }
};