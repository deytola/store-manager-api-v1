import express from 'express';
import bodyParser from 'body-parser';
import products from './products';
import sales from './sales';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1/products', products);
app.use('/api/v1/sales', sales);

app.listen(4000, () => {
  console.log('listening on port 4000...');
});
