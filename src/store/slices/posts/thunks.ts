import { Dispatch } from 'redux';
import { setPosts, start } from './postsSlice';

export const getPosts = () => {
    return async (dispatch: Dispatch) => {
        dispatch(start());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            console.log(data);

            dispatch(setPosts(data));
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };
};