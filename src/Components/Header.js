import {Link} from 'react-router-dom'
import {useState} from 'react'


function Header(props){
    const [showTabState, setShowTabState] = useState('')
    const [createTabState, setCreateTabState] = useState('')
    const [homeTabState, setHomeTabState] = useState('')
///////////////////////////
// Click Handler
///////////////////////////
    function showClickHandler(){
        setShowTabState('active')
        setCreateTabState('')
        setHomeTabState('')
    }

    function createClickHandler(){
        setCreateTabState('active')
        setShowTabState('')
        setHomeTabState('')
    }

    function homeClickHandler(){
        setHomeTabState('active')
        setShowTabState('')
        setCreateTabState('')
    }


    return (
    <ul className='nav nav-tabs'>
        <li>
            <Link to='showyears'
            onClick={showClickHandler}
            className={`nav-link ${showTabState}`}
            > History </Link>
        </li>
        <li>
            <Link to='create'
            onClick={createClickHandler}
            className={`nav-link ${createTabState}`}
            > Create </Link>
        </li>
        <li>
            <Link to = ''
            onClick={homeClickHandler}
            className={`nav-link ${homeTabState}`}
            >
            Home</Link>
        </li>
    </ul>
    )
}

export default Header;