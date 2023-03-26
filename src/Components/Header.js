import {Link} from 'react-router-dom'
import {useState} from 'react'


function Header(props){
    // <nav className='navbar'>
    //     <div className='container nav nav-tabs'>
    //         <div className='row'></div>
    //         <div className='row'>
    //             <div className='col nav-item'>
    //             <Link
    //             className='nav-link active'
    //             to='showyears'>Show</Link>
    //             </div>

    //             <div className='col'></div>
    //             <div className='col'></div>
    //             <div className='col'></div>
    //             <div className='col'></div>
    //             <div className='col'></div>
    //             <div className='col'></div>
    //             <div className='col'></div>
    //             <div className='col'></div>


    //             <Link 
    //             className='col'
    //             to='create'>Create New</Link>
    //         </div>
    //         <div className='row'></div>
    //     </div>
    // </nav>

    const [showTabState, setShowTabState] = useState('')
    const [createTabState, setCreateTabState] = useState('')
///////////////////////////
// Click Handler
///////////////////////////
    function showClickHandler(){
        setShowTabState('active')
        setCreateTabState('')
    }

    function createClickHandler(){
        setCreateTabState('active')
        setShowTabState('')
    }

    return (
    <ul className='nav nav-tabs'>
        <li>
            <Link to='showyears'
            onClick={showClickHandler}
            className={`nav-link ${showTabState}`}
            > Show </Link>
        </li>
        <li>
            <Link to='create'
            onClick={createClickHandler}
            className={`nav-link ${createTabState}`}
            > Create </Link>
        </li>
    </ul>
    )
}

export default Header;