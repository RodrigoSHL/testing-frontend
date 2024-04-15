// Posts.tsx
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Post, addPost, deletePost } from '../../store/slices/posts/postsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
const Posts: React.FC = () => {
    const [newName, setNewName] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.posts.posts);

    const handleCreateNew = () => {
        const newPost: Post = {
            name: newName,
            description: newDescription
        };
        dispatch(addPost(newPost));
        setNewName('');
        setNewDescription('');
    };

    const handleDelete = (index: number) => {
        dispatch(deletePost(index));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };

    return (
        <div className="container mt-4">
        <div className="row mb-3">
          <div className="col">
            <input type="text" className="form-control" value={search} onChange={handleSearchChange} />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Search</button>
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
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
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
