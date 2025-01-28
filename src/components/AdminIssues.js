import {useState, useEffect} from 'react'
import axios from 'axios'
import {URL} from '../utils/URL'

function AdminIssues(props) {
  const [err, setErr] = useState(null)
  const [issue, setIssue] = useState(null)

  
  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      
      axios.post(`${URL}/get-issues`, {uId: user._id})
      .then((res) => setIssue(res.data))
      .catch(err => console.log(err.request))
      // .catch((err) => setErr(err.request.response))
      
    }, [])
    if(err) return <h1>Permission denied</h1>

    const map = issue?.map(ev => (
      <div key={ev._id} id='between'>
        <p>{ev.pId}</p>
        <p>{ev.issue}</p>
      </div>
    ))

  return (
    <>
    {issue ? 
    <>
    {map}
    </>
      :
      <h1>...</h1>
    }
    </>
  );
}

export default AdminIssues;
