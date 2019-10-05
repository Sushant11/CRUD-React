import React from 'react';
import './App.css';
import BookItem from './BookItem';

const books = [
  {
    name: 'Sapiens',
    author: 'Yuval Noah Harrri'
  },
  {
    name: 'Subtle Art',
    author: 'Mark Manson'
  }
]

localStorage.setItem('books', JSON.stringify(books))
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      books: []
    }

    this.onDelete = this.onDelete.bind(this)
  }
 
  componentWillMount(){
    const books = this.getBooks()
    this.setState({books})
  }
  getBooks(){
    return JSON.parse(localStorage.getItem('books'));
  }
  onDelete(name){
    const books = this.getBooks()
    const readBooks = books.filter(book =>{
        return book.name !== name
    })
    this.setState({books: readBooks})
    // this.setState
  }
  render(){
    return(
      <div className='App'>
        <h1>Book Manager</h1>
        {this.state.books.map(book =>{
          return(
           <BookItem key={book.name}
           {...book}
           onDelete={this.onDelete}/>
          )
        })}
      </div>
    )
  }
}

export default App;
