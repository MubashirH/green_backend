import { Products } from './products';
import { Categories } from './category';

//this one is for exporting individually
export { Products };
export { Categories };

//passing in this form will allow us to import all the entities
const entities = [Products, Categories];

export default entities;
