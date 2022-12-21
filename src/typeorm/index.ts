import { Products } from './products';
import { Categories } from './category';
import { Users } from './users';

//this one is for exporting individually
export { Products };
export { Categories };
export { Users };

//passing in this form will allow us to import all the entities
const entities = [Products, Categories, Users];

export default entities;
