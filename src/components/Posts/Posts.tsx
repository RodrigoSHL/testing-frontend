import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Post {
  name: string;
  description: string;
}

const Posts: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<Post[]>([]);
  const [newName, setNewName] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCreateNew = () => {
    const newData: Post = {
      name: newName,
      description: newDescription
    };
    setData([...data, newData]);
    setNewName('');
    setNewDescription('');
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
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
