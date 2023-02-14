import Link from "next/link"
import { AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
  return (
  <footer 
  className="lead bg-dark text-center text-lg-start text-white"
  style={{
    position: 'relative',
    marginTop: '-150px',
    height: '200px',
    clear: 'both',
    paddingTop: '20px'
  }}
  >
    <div className="text-center p-3">
      You can find more projects like this here: 
      <Link href="http://latrell-dev.com/" style={{ textDecoration: 'none' }}>
        <p className="lead text-white"> latrell-dev.com</p>
      </Link>
      Connect with me on LinkedIn:
      <Link href="https://www.linkedin.com/in/latrell-lee-27801a154/" style={{ textDecoration: 'none' }}>
        <h3>
          <AiFillLinkedin />
        </h3>
      </Link>
    </div>
  </footer>
  )
}