import request from "./request"

const preUrl = process.env.NODE_ENV == "development" ? "/api" : "";

export const loginApi = data => request.post(preUrl + "/tokens", data)

export const getDepartments = params => request.get(preUrl + "/departments", {params})

export const addDepartments = data => request.post(preUrl + "/departments", data)

export const editDepartments = (data) => request.put(preUrl + "/departments/" + data.id, data)

export const deleteDepartments = (params) => request.delete(preUrl + "/departments/" + params.id, {params})

export const getPermissions = params => request.get(preUrl + "/permissions", {params})

export const getRoles = params => request.get(preUrl + "/roles", {params})

export const getEmployees = params => request.get(preUrl + "/employees", {params})

export const getSysdictionary = params => request.get(preUrl + "/systemDictionaries", {params})

export const addSystemDictionaries = data => request.post(preUrl + "/systemDictionaries", data)

export const editSystemDictionaries = (data) => request.put(preUrl + "/systemDictionaries/" + data.id, data)