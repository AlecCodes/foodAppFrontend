import {Link} from 'react-router-dom'

function Header(props){
    return <nav>
        <div className='navbar container'>
            <div className='row'></div>
            <div className='row'>
                <Link
                className='col'
                to='showyears'>Show</Link>
                <Link 
                className='col'
                to='create'>Create New</Link>
            </div>
            <div className='row'></div>
        </div>
    </nav>
}

export default Header;