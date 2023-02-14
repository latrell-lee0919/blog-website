import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'

export default function Header() {
    return (
      <div className="container-fluid bg-dark no-padding">
        <div className="row">
          <div className="text-center">
            <Image 
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="me"
              />
            <p className="lead text-white">TRELL-WRITES</p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h1 className="display-6 text-center text-white ps-4">HOME</h1>
              </Link>
          </div>
          <div className="col">
              <Link href="/blog" style={{ textDecoration: 'none' }}>
                <h1 className="display-6 text-center text-white pe-4">BLOGS</h1>
              </Link>
          </div>
        </div>
      </div>
    )
}