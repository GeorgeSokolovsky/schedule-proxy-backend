const router = require('express').Router();

const publicSubjectsRoutes = require('./api/public/v1/subjects.routes');
const publicTeamsRoutes = require('./api/public/v1/teams.routes');
const publicFacultiesRoutes = require('./api/public/v1/faculties.routes');
const publicDepartmentsRoutes = require('./api/public/v1/departments.routes');

const publicApiUrl = '/api/public/v1';

router.use(`${publicApiUrl}/subject`, publicSubjectsRoutes);
router.use(`${publicApiUrl}/team`, publicTeamsRoutes);
router.use(`${publicApiUrl}/faculty`, publicFacultiesRoutes);
router.use(`${publicApiUrl}/department`, publicDepartmentsRoutes);

module.exports = router;
