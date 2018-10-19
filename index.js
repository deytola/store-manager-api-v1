import express from 'express';
import products from './products';
import sales from './sales';

// const port = process.env.port || 4000;
const app = express();
app.use('/api/v1/products', products);
app.use('/api/v1/sales', sales);


app.listen(process.env.PORT || 4000, () => {
  console.log('listening on port 4000...');
});
/*
app.listen(port, () => {
  console.log('listening on port 4000...');
});*/
