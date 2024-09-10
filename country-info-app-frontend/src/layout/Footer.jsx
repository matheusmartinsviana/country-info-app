import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='flex justify-center items-center mt-10'>
            <p title='Developed by Matheus Martins Viana'>&copy;2024 Developed by <Link to={'https://www.linkedin.com/in/matheusmartinsviana/'} target='_blank'>Matheus Martins Viana</Link></p>
        </footer>
    )
}