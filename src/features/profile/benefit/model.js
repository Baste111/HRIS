const db = require("../../../db");

module.exports = {
    create: async ({gsisId, pagibigId, philhealthId, sssNumber, tinNumber, agencyEmployeeNumber}) => {
        const query = `insert into benefit (gsis_id, pagibig_id, philhealth_id, sss_number, tin_number,
                                            agency_employee_number)
                       values (?, ?, ?, ?, ?, ?);`;
        const params = [
            gsisId,
            pagibigId,
            philhealthId,
            sssNumber,
            tinNumber,
            agencyEmployeeNumber
        ];
        const result = await db.executeQuery(query, params);
        return result[0].insertId;
    },

    update: async (benefitId, {gsisId, pagibigId, philhealthId, sssNumber, tinNumber, agencyEmployeeNumber}) => {
        const query = `update benefit
                       set gsis_id                = ?,
                           pagibig_id             = ?,
                           philhealth_id          = ?,
                           sss_number             = ?,
                           tin_number             = ?,
                           agency_employee_number = ?
                       where id = ?;`;
        const params = [
            gsisId,
            pagibigId,
            philhealthId,
            sssNumber,
            tinNumber,
            agencyEmployeeNumber,
            benefitId
        ];
        await db.executeQuery(query, params);
    }
};