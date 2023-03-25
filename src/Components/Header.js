import {Link} from 'react-router-dom'

function Header(props){
    return <nav>
        <Link to='showyears'>Show</Link>
        <Link to='create'>Create New</Link>
    </nav>
}

export default Header;