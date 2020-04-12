import Vue from "vue";
import Vuex from "vuex";
import account from "./modules/account";
import subject from "./modules/subject";
import college from "./modules/college";
import course from "./modules/course";
import section from "./modules/section";
import designation from "./modules/designation";
import employee from "./modules/employee";
import notification from "./modules/notification";
import action from "./modules/action";
import department from "./modules/department";
import personalDataSheet from "./modules/personalDataSheet";
import schedule from "./modules/schedule";
import semester from "./modules/semester";
import schoolYear from "./modules/schoolYear";
import yearLevel from "./modules/yearLevel";
import building from "./modules/building";
import room from "./modules/room";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    subject,
    college,
    course,
    section,
    designation,
    employee,
    notification,
    action,
    department,
    personalDataSheet,
    schedule,
    semester,
    schoolYear,
    yearLevel,
    building,
    room
  }
});
