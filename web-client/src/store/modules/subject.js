import {
    createSubject, deleteSubject,
    getAllSubjects,
    getSingleSubject,
    getSubjectCategories,
    searchSubjects,
    setCurrentSubject,
    setSubjectCategories,
    setSubjectErrors,
    setSubjects,
    updateSubject
} from "../types/subject";
import {subjectService} from "../../services/api";
import {setNotificationConfig} from "../types/notification";
import {setActionName} from "../types/action";

export default {
    state: {
        categories: [],
        errors: [],
        isActionStart: false,
        list: [],
        current: {}
    },

    mutations: {
        [setSubjectCategories]: (state, categories) => state.categories = categories,
        [setSubjectErrors]: (state, errors) => state.errors = errors,
        [setSubjects]: (state, subjects) => state.list = subjects,
        [setCurrentSubject]: (state, subject) => state.current = subject
    },

    actions: {
        [getSubjectCategories]: async ({commit}) => {
            try {
                const result = await subjectService.getCategories();
                const categories = result.data;
                commit(setSubjectCategories, categories);
            } catch (errors) {
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        },

        [createSubject]: async ({commit}, {code, title, description, units, categoryId, prerequisiteSubjectId}) => {
            try {
                const result = await subjectService.create({
                    code,
                    title,
                    description,
                    units,
                    categoryId,
                    prerequisiteSubjectId
                });
                const {errors, message} = result.data;
                commit(setActionName, updateSubject);
                if (errors.length > 0) {
                    commit(setSubjectErrors, errors);
                    return;
                }
                commit(setNotificationConfig, {message, type: "success"});
                commit(setActionName, createSubject);
            } catch (errors) {
                commit(setActionName, updateSubject);
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        },

        [getAllSubjects]: async ({commit}) => {
            try {
                const result = await subjectService.getAll();
                const subjects = result.data;
                commit(setSubjects, subjects);
                commit(setActionName, getAllSubjects);
            } catch (errors) {
                commit(setActionName, "");
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        },

        [getSingleSubject]: async ({commit}, subjectId) => {
            try {
                const result = await subjectService.getSingle(subjectId);
                const subject = result.data;
                commit(setCurrentSubject, subject);
                commit(setActionName, getSingleSubject);
            } catch (errors) {
                commit(setActionName, "");
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        },

        [searchSubjects]: async ({commit}, {option, value}) => {
            try {
                const result = await subjectService.search({option, value});
                const subjects = result.data;
                commit(setSubjects, subjects);
                commit(setActionName, searchSubjects);
            } catch (errors) {
                commit(setActionName, "");
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        },

        [updateSubject]: async ({commit}, {subjectId, details}) => {
            try {
                const result = await subjectService.update(subjectId, details);
                const {message, errors} = result.data;
                if (errors.length > 0) {
                    commit(setSubjectErrors, errors);
                    return;
                }
                commit(setNotificationConfig, {message, type: "success"});
                commit(setActionName, updateSubject);
            } catch (errors) {
                commit(setActionName, updateSubject);
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        },

        [deleteSubject]: async ({commit}, subjectId) => {
            try {
                const result = await subjectService.delete(subjectId);
                const {message, errors} = result.data;
                if (errors.length > 0) {
                    commit(setSubjectErrors, errors);
                    commit(setActionName, `${deleteSubject}-errors`);
                    return;
                }
                commit(setActionName, deleteSubject);
                commit(setNotificationConfig, {message, type: "success"});
            } catch (errors) {
                commit(setActionName, deleteSubject);
                throw new Error(`[RWV] ApiService ${errors}`);
            }
        }
    }
};