import React from 'react'
import { useForm } from 'react-hook-form';


const UpdateQuestion = () =>{

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div class="card">
          <div class="card-header">
            Edit Question
          </div>
          <div class="card-body">
            <div class="card-text">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-5">
    
                    <div className='form-group'>
                      <label>Question Body</label>
                      <input
                        type='text'
                        name='body'
                        className='form-control'
                        value="question_body_is_here?"
                        ref={register}
                      />
                    </div>
    
                  </div>
                
                  <div className="col-md-5">
                    <div className='form-group'>
                      <label>Skill</label>
                      <select name='skill' className='form-control ' ref={register}>
                        <option value='skill_id'>HTML</option>
                        <option value='skill_id'>CSS</option>
                        <option value='skill_id'>JS</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>Approved</label>
                      <select name='skill' className='form-control ' ref={register}>
                        <option value='1'>Yes</option>
                        <option value='0'>NO</option>
                      </select>
                    </div>

                  </div>

                </div>
    
                <div className="row">
    
                  <div className="col-md-12 text-right" >
                    <button type='submit' className='btn btn-primary'>
                      Update
                    </button>
                  </div>
                            
                </div>
        
              </form>
            </div>
          </div>
        </div>
    )
}

export default UpdateQuestion