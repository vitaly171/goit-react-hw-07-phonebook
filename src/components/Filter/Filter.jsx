import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import {filterContacts} from '../../redux/contactsRedux/actions';
import { connect } from 'react-redux';



const Filter = ({value, onChange}) => {

return (
  <label className={s.label}>
    Find contacts by name
      <input
         className={s.input}
        type="text"
        name="filter"
          value={value}
        onChange={onChange}
        placeholder="Enter name for Search"
          />  
      </label>)
}

const mapStateToProps = state => ({...state,
  value: state.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(filterContacts(event.target.value)),
})

Filter.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)