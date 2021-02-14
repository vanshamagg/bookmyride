import 'dotenv/config';
import express from 'express';
import './models';
import api from './routes';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT;

// MIDDLEWARES
app.use(morgan('dev'))
// ROUTERS

app.use('/api', api);

//  START THE SERVER
const server = app.listen(PORT, (_) => console.log(`Sever started at PORT ${server.address().port}`));
