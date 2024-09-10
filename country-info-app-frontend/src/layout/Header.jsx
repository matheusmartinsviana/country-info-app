import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='p-5 flex justify-center gap-20 text-2xl outline-none'>
            <ul>
                <li title='Go to countries list' ><Link to='/countries'>Countries List</Link></li>
            </ul>
        </header>
    )
}