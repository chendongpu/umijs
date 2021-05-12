import {request} from 'umi';
import {yieldExpression} from "@babel/types";
const getTags=()=>{
    return request('/api/tags');
};

export default{
    namespace:'tags',
    state:{
        tagsList:[]
    },
    effects:{
        *fetchTags({payload,callback},{put,call}){
            const response= yield call(getTags);
            yield put({
                type:'setTagsList',
                payload:response
            })
        }
    },
    reducers:{
        setTagsList(state,action){
            return {...state,tagsList:action.payload};
        }
    },

}