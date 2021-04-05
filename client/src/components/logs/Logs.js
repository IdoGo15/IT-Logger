import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import TechSelectOptions from '../techs/TechSelectOptions'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs, filterByTechnican } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs, filterByTechnican }) => {

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if(loading || logs === null){
    return <Preloader/>
  }

  const filterByTech = (e) => {
    filterByTechnican(e);
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
        <div className="row">
        <label>Technician:</label>
          <select name="tech" className='browser-default' onChange={e => filterByTech(e.target.value)}>
            <option value="" defaultValue>Select Technician</option>
            <TechSelectOptions/>
          </select>
        </div>
      </li>
      {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : (
        logs.map(log =><LogItem log={log} key ={log._id}/>)
      )} 
    </ul>
  )
};

Logs.propTypes = {
  log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired,
  filterByTechnican: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getLogs, filterByTechnican })(Logs);
