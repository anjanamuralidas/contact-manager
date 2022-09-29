import React, { useState, useEffect } from 'react'
import Centerpart from '../../component/Centerpart/Centerpart'
import Contact from '../../component/Contact/Contact'
import Topbar from '../../component/Topbar/Topbar'



function Home() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [])
  const [edit, setEdit] = useState([])
  const inputchangehandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { ...contact }])
  }
  const removecontacthandler = (name) => {
    console.log(name)
    const newcontactlist = contacts.filter(contact => {
      return contact.name !== name;
    });
    setContacts(newcontactlist)

  };
  const editcontacthandler = (name) => {
    console.log(name)
    const editcontactlist = contacts.filter(contact => {
      return contact.name === name;
    });
  //  console.log(editcontactlist);
    // localStorage.setItem("EDIT_DATA", JSON.stringify(editcontactlist))

    setEdit(editcontactlist)
  }
  
  // const editData = (dd) => {
  //   console.log(dd)
  //   setContacts([...contacts, { ...dd }])
  //   console.log(contacts);
    


  // }
  const updateHandler =(data) =>{
    console.log(data)
    setContacts([...contacts,{...data}])
    console.log(contacts)
  }
  const removeupdatehandler = (name) => {
    console.log(name)
    const newcontactlist = contacts.filter(contact => {
      return contact.name !== name;
    });
    setContacts(newcontactlist)

  };



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
  // useEffect(() => {
  //   const retrivecontacts = );
  //   if (retrivecontacts) setContacts(retrivecontacts);


  // }, []);





  return (
    <div>

      <div>
        <Topbar />
      </div>
      <div>
        <Centerpart addcontact={inputchangehandler} contactlist={contacts} removelist={removecontacthandler} editlist={editcontacthandler} edit={edit} updateeditdata={updateHandler} removeupdatelist={removeupdatehandler}/>
      </div>

    </div>
  )
}

export default Home