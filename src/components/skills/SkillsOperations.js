import React, { useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import AdminContext from '../../context/admin/adminContext';

const SkillsOperations = (props) => {
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    adminContext.getSkills();
  }, []);
  return (
    <div className="container admin-cards">
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header card-header-primary'>
              <div className='row'>
                <div className='col-md-8'>
                  <h4 className='card-title '>Skills</h4>
                  <p className='card-category'>
                    You can [Add | Delete | Update] Skills
                  </p>
                </div>
                <div className='col-md-4 text-right'>
                  <a
                    href='/admin/skills/create'
                    className='btn btn-primary btn-round'
                  >
                    <i className='fa fa-plus'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table'>
                  <thead className=' text-primary'>
                    <tr>
                      <th>Skill Name</th>
                      <th>Created at</th>
                      <th>Updated at</th>
                      <th>Questions</th>
                      <th className='text-right'>control</th>
                    </tr>
                  </thead>
                  {adminContext.skills.map((skill) => (
                    <tbody key={skill.id}>
                      <tr>
                        <td>{skill.name}</td>
                        <td>{skill.created_at}</td>
                        <td>{skill.updated_at}</td>
                        <td>
                          <a
                            href={`/admin/skills/${skill.id}/questions?skill=${skill.name}`}
                          >
                            Explore
                          </a>
                        </td>
                        <td className='td-actions text-right'>
                          <a
                            href={`/admin/skills/${skill.id}/update`}
                            rel='tooltip'
                            className='btn btn-white btn-link btn-sm'
                            data-original-title='Edit {{ $module_name }}'
                          >
                            <i className='fa fa-pencil-square-o'></i>
                          </a>

                          <button
                            onClick={() => adminContext.deleteSkill(skill.id)}
                            type='submit'
                            rel='tooltip'
                            className='btn btn-white btn-link btn-sm'
                          >
                            <i className='fa fa-trash'></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsOperations;
