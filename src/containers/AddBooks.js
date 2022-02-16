import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBooks, deleteBooks } from '../redux/actions/actionAddBooks';
import FlipMove from 'react-flip-move';

const AddBooks = ({ libraryData, addBook, deleteBook }) => {

    /* console.log(libraryData) */

    const initialState = {
        title: '',
        author: ''
    }

    const [newData, setNewData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(newData)

        setNewData(initialState)
    }

    const displayData = libraryData.length > 0 ?
    <FlipMove>
    {
        libraryData.map((data) => {
            return (
                <li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between'>
                    <span><strong>Titre: </strong>{data.title}</span>
                    <span><strong>Auteur: </strong>{data.author}</span>
                    <span onClick={() => deleteBook(data.id)} className='btn btn-danger'>x</span>
                </li>
            )
        })
    }
    </FlipMove>
        : <p className='text-center'>Aucune data à afficher</p>

    const deleteAllBooksBtn = libraryData.length > 0 &&
        <div className='d-flex justify-content-center'>
            <button className='btn btn-danger my-4'>Effacer tous les livres</button>
        </div>
    
        
    return (
        <main role="main">
            <div className='jumbotron jumbotron-fluid'>
                <div className='container-fluid text-center bg-light p-3'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Ajouter un libre à votre bibliothèque</p>

                    <form className='form-inline d-flex justify-content-center'>
                        <div className='form-group mr-3'>
                            <input
                                value={newData.title}
                                type="text"
                                className='form-control'
                                placeholder='titre'
                                required
                                onChange={(e) => setNewData({...newData, title: e.target.value})}
                            />
                        </div>
                        <div className='form-group mx-3'>
                            <input
                                value={newData.author}
                                type="text"
                                className='form-control'
                                placeholder='Auteur'
                                required
                                onChange={(e) => setNewData({...newData, author: e.target.value})}
                            />
                        </div>
                        <div className='form-group ml-3'>
                            <button className='btn btn-outline-secondary' onClick={handleSubmit}>Ajouter un livre</button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className='container mt-5 w-50'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='list-group'>
                            {displayData}
                        </ul>
                        {deleteAllBooksBtn}
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => { //le state de redux
    return {
        libraryData: state.library
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (param) => dispatch(addBooks(param)),
        deleteBook: (id) => dispatch(deleteBooks(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks)