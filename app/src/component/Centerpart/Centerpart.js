import React from 'react'
import './Centerpart.css'
import { useState, useEffect } from 'react'

import { Delete, Edit } from '@mui/icons-material/';
import { IconButton } from '@mui/material';

import Contact from '../Contact/Contact';


function Centerpart({ addcontact, contactlist, removelist, editlist, edit, updateeditdata, removeupdatelist }) {
    console.log(edit)
    const { name, email } = contactlist
    const [updatedata, setUpdatedata] = useState(edit);
    const [removedata, setRemovedata] = useState(true);
    console.log(updatedata);
    const [reg, setReg] = useState({});
    const handleinputchange = (r) => {
        r.preventDefault();
        // console.log(r.target.value)
        const { name, value } = r.target
        setReg({
            ...reg,
            [name]: value
        })
        console.log(reg)

    }
    const Add = (e) => {
        e.preventDefault();
        addcontact(reg)
        setReg({ name: "", email: "" })
    }

    const update = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setUpdatedata({
            ...updatedata,
            [name]: value
        })
        //  const editdata =  localStorage.getItem("EDIT_DATA")
        console.log(updatedata);
    }

    const saveupdate = (e) => {
        e.preventDefault();
        setRemovedata(false)
        updateeditdata(updatedata)
    }

    useEffect(() => {
        removelist(edit[0]?.name)
        setUpdatedata("")
    }, [removedata]);
    
    const rendercontactlist = contactlist.map((cont) => {
        return (
            <div id='cd1' className="card">
                <div className="card-body">
                    <p>{cont.name}&nbsp;&nbsp;&nbsp;
                        {cont.email}</p>

                    <div>
                        <IconButton id="ed1" onClick={() => editlist(cont.name)}>

                            <Edit />
                        </IconButton>
                        <IconButton aria-label="delete" id="bt1" onClick={() => removelist(cont.name)}>

                            <Delete />
                        </IconButton>
                    </div>
                </div>
            </div>

        )
    })
    // const rendereditlist=contactlist.map((cntct)=>{
    return (
        <>
            {edit[0]?.name ? <div id="d2">
                <form onSubmit={saveupdate}>
                    <div>
                        <label>Username</label>

                        <input type="text" className="form-control" id="inputEmail3" name='name' value={updatedata[0]?.name} onChange={update} />
                    </div>
                    <div>
                        <label>email</label>
                        <input type="text" className="form-control" id="inputEmail3" name='email' value={updatedata[0]?.email} onChange={update} />


                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">update</button>
                    </div>
                    <div>
                        <button id="bb1" type="submit" className="btn btn-primary" onClick={() => window.location.reload()}>Add</button>
                    </div>
                </form>

            </div>


                //})

                :

                <div id="d2">
                    <form onSubmit={Add}>
                        <div>
                            <label>Username</label>

                            <input type="text" className="form-control" id="inputEmail3" name='name' value={reg.name} placeholder='your name' onChange={handleinputchange} />
                        </div>
                        <div>
                            <label>email</label>

                            <input type="email" className="form-control" id="inputPassword3" name='email' value={reg.email} placeholder='your email' onChange={handleinputchange} />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>

                </div>
            }
            <div>
                <div id="d3">

                    {rendercontactlist}
                    {/* {rendereditlist} */}
                </div>
            </div>
        </>
    )
}
export default Centerpart