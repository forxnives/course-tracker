import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Search({departments, reduceMap, setReduceMap}) {

    let history = useHistory();

    const [dropDownToggle, setDropDownToggle] = useState(false)
  
    const [ searchInput, setSearchInput ] = useState('')
  
  
  
  
    function handleDeptClick(dept) {
  
      setReduceMap({...reduceMap, filters: {...reduceMap.filters, dept: dept}})
      setDropDownToggle(false)
  
    }
  
    function handleKeypress (e) {
      //it triggers by pressing the enter key
      // console.log(e.charC)
    if (e.charCode === 13) {
      history.push('/app/list')
    }
  };




    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                    <div className="input-group" id="adv-search">
                        <input onKeyPress={(e) => handleKeypress(e)} value={reduceMap?.search ? (reduceMap.search): ('')} onChange={(e)=> setReduceMap({...reduceMap, search:e.target.value})} type="text" className="form-control search-input" placeholder="Search for courses" />
                        <div className="input-group-btn">
                            <div className="btn-group" role="group">
                                <div className="dropdown dropdown-lg">
                                    <button onClick={()=> setDropDownToggle(!dropDownToggle)} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span style={{marginRight:'10px'}} className="caret"></span>{reduceMap?.filters.dept || 'Department'}</button>

                                    <div style={{opacity: dropDownToggle ? ('100%'): ('0%') }} className='customDropdown'>


                                      {departments?.map((dept, i) => (
                                      <div key={`dept${i}`} className='dropdown-dept' onClick={() => handleDeptClick(dept.name)} style={{cursor: 'pointer'}}><h5 style={{padding: '5px 10px', margin: '0px'}} >{dept.name}</h5></div>
                                      ))}
                                    
                                       </div>

                                </div>
                                <button style={{backgroundColor: '#003049', color: '#FF5C1A'}} onClick={() => history.push('/app/list/')} type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
          </div>
    )
}

export default Search
