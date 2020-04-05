const express = require("express");
const subjectRoute = require("./features/subject/route");
const collegeRoute = require("./features/college/route");
const courseRoute = require("./features/course/route");
const sectionRoute = require("./features/section/route");
const designationRoute = require("./features/designation/route");
const employeeRoute = require("./features/employee/route");
const departmentRoute = require("./features/department/route");
const accountRoute = require("./features/account/route");
const pdsRoute = require("./features/personal-data-sheet/route");
const scheduleRoute = require("./features/schedule/route");

const application = express();

application.use("/subject", subjectRoute);
application.use("/college", collegeRoute);
application.use("/college", collegeRoute);
application.use("/course", courseRoute);
application.use("/section", sectionRoute);
application.use("/designation", designationRoute);
application.use("/employee", employeeRoute);
application.use("/department", departmentRoute);
application.use("/account", accountRoute);
application.use("/personal-data-sheet", pdsRoute);
application.use("/schedule", scheduleRoute);

module.exports = application;