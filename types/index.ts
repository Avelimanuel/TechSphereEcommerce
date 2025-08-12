//This is where all our types will be.
import {z} from 'zod'
import { insertProductSchema } from '@/lib/zodvalidators'

//This will infer the insertProductSchmea in the zodvalidators file
export type ProductType = z.infer<typeof insertProductSchema> & {
    id:string,
    rating:string,
    createdAt:Date
}