import React from 'react'

const Affiliates = ({setModel2}) => {

  return (

    <div style={{height:"500px",marginTop:"175px"}} className='modal'>
    <div className='register'>
        <div className='top_flex'>
            <div className='title'>Affiliates</div>
            <div onClick={()=>setModel2(false)} className='close_img'> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></div>

        </div>
        <div className='text_start mt-4'>
        <label className='modal_title' for="exampleInputEmail1">What is this?</label>
        <span class="modal_text"> 
        <br></br> 
        Invite a friend & tell them to use your affiliate code, you will receive 0.5% of their wagers forever. This means
        that for every 2x DL's wagered, you earn 1x WL.
        It is up to you to determine how & where to share your affiliate code.
        <br></br><br></br>
        </span>
        <label className='modal_title' for="exampleInputEmail1">How do I use an affiliate code?</label>
        <span class="modal_text"> 
        <br></br> 
        Upon account creation, you will be given an optional field to fill out a desired affiliate code. 
        <br></br><br></br>
        </span>
        <label className='modal_title' for="exampleInputEmail1">How do I create an affiliate code?</label>
        <span class="modal_text"> 
        <br></br> 
        Fill out the field below with your desired code name.
        <br></br><br></br>
        </span>
        <label className='input_title' for="exampleInputEmail1">Affiliate code:</label>
        <input class="form-control css_input"/>
        
        <button className="creat_accout">Create</button>
        
        </div>

        
    </div>
    </div>

    
  )
};

export default Affiliates;