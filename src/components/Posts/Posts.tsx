// Posts.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Post } from '../../store/slices/posts/postsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPost, getPosts, deletePost, findPost } from '../../store/slices/posts/thunks';

const Posts: React.FC = () => {
    const [newName, setNewName] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.posts.posts);

    useEffect(() => {
        dispatch(getPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleCreateNew = () => {
        const newPost: Post = {
            name: newName,
            description: newDescription
        };
        dispatch(createPost(newPost));
        setNewName('');
        setNewDescription('');
    };

    const handleDelete = (index: string) => {
        dispatch(deletePost(index));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        dispatch(findPost(search))
    }

    const handleClean = () => {
        setSearch('');
        dispatch(getPosts());
    }

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col">
                    <input type="text" className="form-control" value={search} onChange={handleSearchChange} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={handleClean}>Clean</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(item.id || '')}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success" onClick={handleCreateNew}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default Posts;
