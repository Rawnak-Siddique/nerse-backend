import Express from 'express';
import {createsProfile, getsProfile, createsStaffs, findStaffs, getsStaffs} from '../Controller/Controller.js';

const routes = Express.Router();

routes.post('/create-profile', createsProfile);

routes.get('/get-profile', getsProfile);

routes.post('/create-staffs', createsStaffs);

routes.get('/find-staffs',findStaffs);

routes.get('/get-staffs/:id',getsStaffs);

export default routes;