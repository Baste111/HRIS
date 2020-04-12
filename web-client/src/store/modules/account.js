import { setActionName } from "../types/action";
import { createCourse } from "../types/course";
import {
  checkAccountToken,
  loginAccount,
  purgeAccountToken,
  setAccountAuthenticated,
  setAccountError,
  setAccountToken
} from "../types/account";
import tokenService from "../../services/token";
import apiService from "../../services/api";

const actions = [
  {
    name: "Personal Data Sheet",
    icon: "file-account",
    route: { name: "personal-data-sheet" },
    subActions: []
  },
  {
    name: "Schedule",
    icon: "calendar-month",
    route: { name: "personal-personnel-schedule" },
    subActions: []
  },
  {
    name: "Employee Maintenance",
    icon: "account-cog",
    route: {},
    subActions: [
      {
        name: "Employee Management",
        icon: "chevron-right",
        route: { name: "employee-list" },
        subActions: []
      },
      {
        name: "Department Management",
        icon: "chevron-right",
        route: { name: "department-list" },
        subActions: []
      },
      {
        name: "Designation Management",
        icon: "chevron-right",
        route: { name: "designation-management" },
        subActions: []
      },
      {
        name: "Schedule Tagger",
        icon: "chevron-right",
        route: { name: "personnel-schedule-tagger" },
        subActions: []
      },
      {
        name: "Schedule",
        icon: "chevron-right",
        route: { name: "faculty-schedule-list" },
        subActions: []
      }
    ]
  },
  {
    name: "Academic Maintenance",
    icon: "folder-settings",
    route: {},
    subActions: [
      {
        name: "Subject Management",
        icon: "chevron-right",
        route: { name: "subject-list" },
        subActions: []
      },
      {
        name: "College Management",
        icon: "chevron-right",
        route: { name: "college-list" },
        subActions: []
      },
      {
        name: "Course Management",
        icon: "chevron-right",
        route: { name: "course-list" },
        subActions: []
      },
      {
        name: "Section Management",
        icon: "chevron-right",
        route: { name: "section-list" },
        subActions: []
      }
    ]
  },
  {
    name: "Utilities",
    icon: "tools",
    route: {},
    subActions: [
      {
        name: "Building Management",
        icon: "chevron-right",
        route: { name: "building-list" },
        subActions: []
      },
      {
        name: "Room Management",
        icon: "chevron-right",
        route: { name: "room-list" },
        subActions: []
      }
    ]
  },
  {
    name: "System Settings",
    icon: "cog-transfer-outline",
    route: {},
    subActions: [
      {
        name: "Semester Setting",
        icon: "chevron-right",
        route: { name: "semester-list" },
        subActions: []
      },
      {
        name: "School Year Setting",
        icon: "chevron-right",
        route: { name: "school-year-form" },
        subActions: []
      },
      {
        name: "Year Level Setting",
        icon: "chevron-right",
        route: { name: "year-level-list" },
        subActions: []
      }
    ]
  }
];

const { accountService } = require("../../services/api");

export default {
  state: {
    isAuthenticated: false,
    user: {},
    error: {}
  },

  mutations: {
    [setAccountAuthenticated]: (state, isAuth) =>
      (state.isAuthenticated = isAuth),
    [setAccountError]: (state, error) => (state.error = error),
    [setAccountToken]: (state, token) => {
      state.isAuthenticated = true;
      tokenService.insert(token);
      state.user = tokenService.getDecodedToken();
      state.user.actions = actions;
    },
    [purgeAccountToken]: state => {
      state.isAuthenticated = false;
      tokenService.remove();
    }
  },

  actions: {
    [loginAccount]: async ({ commit }, { username, password }) => {
      try {
        const result = await accountService.login({ username, password });
        const { error, token } = result.data;
        if (Object.keys(error).length > 0) {
          commit(setActionName, `${loginAccount}-error`);
          commit(setAccountError, error);
          return;
        }
        commit(setAccountToken, token);
        apiService.setHeader();
        commit(setActionName, loginAccount);
      } catch (errors) {
        commit(setActionName, createCourse);
        throw new Error(`[RWV] ApiService ${errors}`);
      }
    },

    [checkAccountToken]: ({ commit }) => {
      const token = tokenService.get() ? tokenService.get() : null;
      if (token) {
        apiService.setHeader();
        commit(setAccountToken, token);
      } else {
        commit(purgeAccountToken);
      }
    }
  }
};
