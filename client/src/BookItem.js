import React from 'react';
import './App.css';

class BookItem extends React.Component{
    constructor(props){
        super(props)
        this.onDelete = this.onDelete.bind(this)
    }
    onDelete(){
        const {onDelete,name} = this.props
        onDelete(name)
    }
    
  render(){
    const {name ,author} = this.props
    return(
       <div>
              <span>{name}</span>{' | '}
              <span>{author}</span>{' | '}
              <button onClick={this.onDelete}>Delete</button>
            </div>
    )
  }
}

export default BookItem;
