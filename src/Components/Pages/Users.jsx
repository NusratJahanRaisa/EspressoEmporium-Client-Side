import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers] = useState(loadedUsers)

  const handleDelete = (id) =>{


  const newUsers = users.filter(u=>u._id!==id)



  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    
    fetch(`https://espresso-emporium-server-side-beige.vercel.app/users/${id}`,{
    method: 'DELETE',
    headers:{
       "content-type": "application/json",
    },
    body: JSON.stringify(newUsers)
  })
  .then(res=>res.json())
  .then(data=>{
    // console.log(data)


    if(data.deletedCount>0){
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    setUsers(newUsers)
    }
  })


  }
)}



//   if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
//   }

//   fetch(`https://espresso-emporium-server-side-beige.vercel.app/users/${id}`,{
//     method: 'DELETE',
//     headers:{
//        "content-type": "application/json",
//     },
//     body: JSON.stringify(newUsers)
//   })
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data)

//     if(deletedCount>0){

//     }
//   })
//   }



  return (
    <div className="min-h-screen bg-[url('/images/cups/3.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center p-6">
        {/* <img src="" alt="" /> */}
      <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-2xl w-full max-w-5xl overflow-x-auto text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Espresso Emporium Users</h2>

        <table className="table w-full text-left">
          <thead>
            <tr className="bg-[#1f1f1f] text-white">
              <th className="p-3">Serial</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Creation Time</th>
              <th className="p-3">Last Sign-In</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-[#f3f3f3]/20 border-b"
              >
                <td className="p-3 font-semibold">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  {user.creationTime ? user.creationTime : 'Not Available'}
                </td>
                <td className="p-3">
                  {user.lastSignInTime ? user.lastSignInTime : 'Not Available'}
                </td>

                <td className='flex justify-center items-center gap-3'>
                    <button className='btn btn-sm'>Edit</button>


                    <button onClick={()=>handleDelete(user._id)} className='btn btn-sm bg-red-500 text-white'>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
