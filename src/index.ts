import express, { Request, Response } from 'express';
import redis from 'redis';

const app = express();
const client = redis.createClient({
  host: 'redis-server'
});

client.set('visits', '0');

app.get('/', (req: Request, res: Response) => {
  client.get('visits', (err, visits) => {
    console.log(err);
    if (visits) {
      res.send('Number of visits is: ' + visits);
      client.set('visits', `${parseInt(visits) + 1}`);
    }
  });
});

app.listen('8080', () => console.log('App on port 8080'));
