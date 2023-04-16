import product from "./product";
import banner from "./banner";
export const schemaTypes = [product,banner]
import { createSchema } from "sanity";
// import { schemaTypes } from "@/ecommerce/schemas";

export default createSchema({
    name : 'default',
    types : schemaTypes.concat([product,banner]),
})
