import * as api from '../services/api';

const productsController = {
  getProducts: async (req, res, next) => {
    const productList = await api.getProducts().catch((error) => {
      next(error);
    });

    res.locals.payload = productList;
    next({});
  },
};

export default productsController;
