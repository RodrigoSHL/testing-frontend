import { Dispatch } from 'redux';
import { setPosts, start } from './postsSlice';
import postsApi from '../../../api/postsApi';

export const getPosts = () => {
    return async (dispatch: Dispatch) => {
        dispatch(start());
        try {
            const {data} = await postsApi.get('/posts')
            dispatch(setPosts(data));
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };
};