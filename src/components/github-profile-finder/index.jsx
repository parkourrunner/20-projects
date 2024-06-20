import React, { useEffect, useState } from 'react'
import UserCard from './card';
import "./style.css"
function GithubProfileFinder() {
  const [profileData, setProfileData] = useState(null);
  const [username, setUsername] = useState("parkourrunner");
  const [isLoading, setIsLoading] = useState(false);
  function handleClick(params) {
    fetchGithubUserData()

  }

  const fetchGithubUserData = async () => {
    setIsLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data?.id) {
      setProfileData(data);
      setUsername('')
    }
    setIsLoading(false)
  };
  useEffect(() => {
    fetchGithubUserData()
  }, []);

  if (isLoading) {
    return <h1>Loading, please wait</h1>
  }



  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input type="text" name="search-by-username" placeholder='serach Github username ...' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
      {profileData !== null ? <UserCard user={profileData}></UserCard> : null}
    </div>
  )
}

export default GithubProfileFinder
