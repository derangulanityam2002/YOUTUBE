import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.jpg";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import axios from "axios";
const Navbar = ({ setSidebar }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchResults, setSearchResults] = useState([]); // State to hold the search results

  // Function to handle search
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=${API_KEY}`
      );

      // Extract video titles from the API response
      const results = response.data.items.map((item) => item.snippet.title);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <img src={search_icon} alt="" />
          </button>
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />

        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>

      {/* Display search results */}
      <div>
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
