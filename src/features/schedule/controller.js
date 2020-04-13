const scheduleService = require("./service");
const { toNumber, emptyValue } = require("../../customUtilities");

module.exports = {
  createPersonnelSchedule: async (req, res) => {
    const employeeId = toNumber(req.params.employeeId);
    const monthNumber = toNumber(req.body.monthNumber);
    const startTime = emptyValue(req.body.startTime);
    const endTime = emptyValue(req.body.endTime);
    const year = toNumber(req.body.year);

    try {
      const result = await scheduleService.createPersonnelSchedule({
        employeeId,
        monthNumber,
        startTime,
        endTime,
        year
      });
      res.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      res.status(400).json(errors);
    }
  },

  searchPersonnelSchedule: async (req, res) => {
    const employeeId = toNumber(req.params.employeeId);
    const fromDate = emptyValue(req.body.fromDate);
    const toDate = emptyValue(req.body.toDate);

    try {
      const result = await scheduleService.searchPersonnelSchedule({
        employeeId,
        fromDate,
        toDate
      });
      res.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      res.status(400).json(errors);
    }
  },

  updatePersonnelSchedule: async (req, res) => {
    const employeeId = toNumber(req.params.employeeId);
    const scheduleIdList = emptyValue(req.body.scheduleIdList);
    const startTime = emptyValue(req.body.startTime);
    const endTime = emptyValue(req.body.endTime);

    try {
      const result = await scheduleService.updatePersonnelSchedule({
        employeeId,
        scheduleIdList,
        startTime,
        endTime
      });
      res.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      res.status(400).json(errors);
    }
  },

  deletePersonnelSchedule: async (req, res) => {
    const employeeId = toNumber(req.params.employeeId);
    const scheduleIdList = emptyValue(req.body.scheduleIdList);

    try {
      const result = await scheduleService.deletePersonnelSchedule(
        employeeId,
        scheduleIdList
      );
      res.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      res.status(400).json(errors);
    }
  },

  getPersonalPersonnelSchedule: async (req, res) => {
    const employeeId = toNumber(req.user.id);
    const date = emptyValue(req.params.date);

    try {
      const result = await scheduleService.getPersonalPersonnelSchedule(
        employeeId,
        date
      );
      res.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      res.status(400).json(errors);
    }
  },

  createFacultySchedule: async (req, res) => {
    const sectionId = toNumber(req.body.sectionId);
    const subjectId = toNumber(req.body.subjectId);
    const employeeId = toNumber(req.body.employeeId);
    const dayTimeRoom = req.body.dayTimeRoom ? req.body.dayTimeRoom : [];
    const isToBeAnnounce = !!req.body.isToBeAnnounce;
    try {
      const result = await scheduleService.createFacultySchedule({
        sectionId,
        subjectId,
        employeeId,
        dayTimeRoom,
        isToBeAnnounce
      });
      res.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      res.status(400).json(errors);
    }
  }
};
