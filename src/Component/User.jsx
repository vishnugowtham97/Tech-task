import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";
import "./User.css";

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const perPage = 10;
  const value = useSelector((state) => state.user.value);

  // Function to filter posts based on search query
  const filteredPosts = value.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the index of the first and last post to display on the current page
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to export data to XLSX file
  const exportToXLSX = () => {
    const data = currentPosts.map((post) => [post.id, post.title, post.body]);
    const ws = XLSX.utils.aoa_to_sheet([["ID", "Title", "Body"], ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Posts");
    XLSX.writeFile(wb, "posts.xlsx");
  };

  return (
    <div>
      <h1>
        Redux render data with Pagination & search funcionality and export the
        data to local download
      </h1>
      <input
        type="text"
        className="input"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {Array.from(
          { length: Math.ceil(filteredPosts.length / perPage) },
          (_, i) => (
            <li key={i + 1}>
              <button
                style={{
                  marginTop: "2rem",
                  padding: "25px",
                  borderRadius: "25px",
                }}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          )
        )}
      </ul>
      <button
        style={{ marginTop: "2rem", padding: "25px", borderRadius: "25px" }}
        onClick={exportToXLSX}
      >
        Export to XLSX
      </button>
    </div>
  );
};

export default User;
