import type { PageLoad } from './$types';
import { mongoDB } from '../lib/index'
export const load: PageLoad = async (event) => {
    const test = mongoDB.user.findMany()
    return {
        test: test
    };
};