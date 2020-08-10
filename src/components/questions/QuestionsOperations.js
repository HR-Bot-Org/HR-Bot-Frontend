import React from 'react';


const QuesionsOperations = () => {

    return (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="card-title ">Questions</h4>
                        <p className="card-category">You can [Add | Delete | Update] Questions</p>
                    </div>
                    <div className="col-md-4 text-right">
                      <a href="/admin/questions/create" className="btn btn-primary btn-round">
                          <i className="fa fa-plus" ></i>
                      </a>
                    </div>
                </div>
              </div>
              <div className="card-body">
                

                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>Questions Body</th>
                        <th>Skill</th>
                        <th>Model Answers</th>
                        <th>Approved</th>
                        <th className="text-right">control</th>
                      </tr>
                    </thead>
                    <tbody>


                      <tr>
                        <td>Here is the Question Body ?</td>
                        <td>HTML</td>
                        <td><a href="/admin/questions/1/answers">Explore(5)</a></td>
                        <td>NO</td>
                        <td className="td-actions text-right">
                          <a href={`/admin/questions/1/update`} rel="tooltip" className="btn btn-white btn-link btn-sm" data-original-title="Edit {{ $module_name }}">
                            <i className="fa fa-pencil-square-o"></i>
                          </a>


                            <button type="submit" rel="tooltip" className="btn btn-white btn-link btn-sm">
                              <i className="fa fa-trash"></i>
                            </button>

                        </td>
                      </tr>



                    </tbody>
                  </table>
                </div>



              </div>
            </div>
          </div>
        </div>
      
    );
};
export default QuesionsOperations;
