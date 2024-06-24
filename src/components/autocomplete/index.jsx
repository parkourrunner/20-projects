import React, { useEffect, useState } from 'react'

function Autocomplete() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    try {
      const data = await fetch('http://dummyjson.com/users').then(res => res.json());
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map(user => user.firstName));
        setIsLoading(false);
        setError(null)
      }
    } catch (error) {
      setError(error)
    }
  }

  function handlechange(e) {
    const query = e.target.value.toLowerCase();
    setInput(query);
    if (query.length > 1) {
      const filteredData = users && users.length > 0 ?
        users.filter(user => user.toLowerCase().indexOf(query) > -1)
        : [];
      setFilteredUsers(filteredData);
    }
  }
  function handleclick(e) {
    setInput(e.target.innerText);
    setFilteredUsers([])
  }
  if (error) {
    return <div>Has error {error}</div>
  }
  if (isLoading) {
    return <div>Is loading please wait....</div>;
  }

  return (
    <div className='search-autocomplete-container'>
      <input type="text" name="search-users"
        placeholder='search users here...'
        value={input}
        onChange={handlechange}
      />
      {filteredUsers && filteredUsers.length > 0 ?
        <ul>
          {filteredUsers.map((item, index) => <li key={index} onClick={handleclick}>{item}</li>)}
        </ul>
        : null}
    </div>
  )
}

export default Autocomplete
