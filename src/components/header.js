import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'

export default function Header() {
    return (
      <div className="container-fluid bg-dark">
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
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-center">
          <div className="col-2">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h1 className="display-6 text-white">HOME</h1>
              </Link>
          </div>
          <div className="col-2">
              <Link href="/blog" style={{ textDecoration: 'none' }}>
                <h1 className="display-6 text-white">BLOGS</h1>
              </Link>
          </div>
        </div>
      </div>
    )
}