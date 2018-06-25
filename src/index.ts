import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { userRouter } from './routers/user.router'
import { tokenGuard } from './middlewares/token-guard'
const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', userRouter);

app.get('/some-resource', async ( req, res, next ) => {
    await res.status(200).json({ message: 'hello world' });
});

app.get('/some-protected-resource', async ( req, res, next ) => {
    await res.status(200).json('Protected hello world');
});
app.listen(port, async() => console.log(`Server starting at port: ${port}`));



