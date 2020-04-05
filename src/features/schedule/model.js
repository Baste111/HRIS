const db = require("../../db");

module.exports = {
    createPersonnelSchedule: async ({employeeId, currentDate, startTime, endTime}) => {
        const query = `insert into personnel_schedule (employee_id, curr_date, start_time, end_time)
                       values (?, ?, ?, ?);`;
        const params = [employeeId, currentDate, startTime, endTime];
        await db.executeQuery(query, params);
    },

    searchPersonnelScheduleByDateRanges: async ({employeeId, fromDate, toDate}) => {
        const query = `select id, curr_date as date, start_time as startTime, end_time as endTime
                       from personnel_schedule where employee_id = ? AND (curr_date between ? AND ?);`;
        const params = [employeeId, fromDate, toDate];
        const results = await db.executeQuery(query, params);
        return results[0] ? results[0] : [];
    }
};