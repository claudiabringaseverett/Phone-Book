import React, { Component } from 'react';
import { connect} from 'react-redux';

const styles = {
  formWrapper: {
    width: '66%',
    height: '100vh',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  innerForm: {
      padding: 100,
      border: '1px solid black',
  }
}

class Form extends Component {

    componentDidMount(){
      this.props.onListChange(this.props.match.params.listId);
    }

    submit(e) {
        e.preventDefault();
    }

    focus(e) {
        e.target.value = '';
    }

    render(){
      const {listId} = this.props.match.params,
          {title, task, phone, onInputChange, onUpdate, onDelete} = this.props;
      return(
          <form style={styles.formWrapper} onSubmit={this.submit}>
            <div style={styles.innerForm}>
                <div>
                    <label>Name: <input
                        type='text'
                        name='title'
                        onFocus={this.focus} 
                        value={title} 
                        onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                    <br />  
                    <label>Email: <textarea
                        type='text'
                        name='task'
                        onFocus={this.focus}
                        value={task}
                        onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                    <br />
                    <label>Phone: <textarea
                        type='text'
                        name='phone'
                        onFocus={this.focus}
                        value={phone}
                        onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                   
                </div>

                <div>
                    <input type='button' value ='Update' onClick={() => onUpdate(listId)} />  
                    <input type='button' value ='Delete' onClick={() => onDelete(listId)}/>
                    <input type='button' value = 'Add'   />
                </div> 
            </div>
          </form>
      );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list,
        title: state.title,
        task: state.task,
        phone: state.phone

    }
}

const mapDispatchToProps = dispatch => {
  return{
      onListChange: (id) => dispatch ({type: 'CHANGE_LIST', id}),
      onInputChange: (name, value) => dispatch ({type: 'CAPTURE_INPUT', payload: {name, value} }),
      onUpdate: (id) => dispatch({type: 'UPDATE', id}),
      onDelete: (id) => dispatch({type: 'DELETE', id}),
      onAdd: () => dispatch({type: 'ADD'}),
  
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Form);
