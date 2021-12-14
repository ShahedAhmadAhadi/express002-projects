const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')

const getAllJobs = async (req, res) => {


}
const getJob = async (req, res) => {

}
const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.bod)
    res.status(StatusCodes.CREATED).json({job})
}
const updateJob = async (req, res) => {

}
const deleteJob = async (req, res) => {

}

module.exports = {getAllJobs, getJob, createJob, updateJob, deleteJob}