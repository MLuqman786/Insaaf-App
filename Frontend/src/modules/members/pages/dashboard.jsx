import React from 'react'
import AxiosInstnace from '../../../utils/Axios/Axiox';
import { useEffect ,useState  } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-toastify';

function  MemberDashboard() {
const [info ,setinfo]=useState([])
    const {id}=useParams()

    
    const showMember = async () => {
return await AxiosInstnace.get(`/members/${id}`);
      };
    
      const handleSubmit = async () => {
        try {
          const response = await showMember();
        setinfo([response.data.response])
            
          
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      };

useEffect(()=>{
handleSubmit()
},[id])

  return (
    <>
        <div className="max-w-2xl mx-auto">

    <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b">Profile Picture</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
        </tr>
      </thead>
      <tbody>
      {info.map((e,index)=>{
        return ( <>
        <tr>
          <td className="py-3 px-4 border-b">
          
        <img src={e.picture} alt="Profile" className="rounded-full h-10 w-10 object-cover"/>
          </td>
          <td className="py-3 px-4 border-b">{e.name}</td>
          <td className="py-3 px-4 border-b">{e.email}</td>
        </tr>
        </>)})}
      </tbody>
    </table>

  </div>

    </>
  )
}

export default MemberDashboard