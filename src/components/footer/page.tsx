import Link from "next/link";


export default function Footer(){
    return <footer className="footer p-10 rounded-bl-2xl rounded-br-2xl  w-screen" style={{
      backgroundColor: "#101828"
    }}>
    <nav>
      <h6 className="footer-title">Services</h6> 
      <Link href={'/'} className="link link-hover">Branding</Link>
      <Link href={'/'} className="link link-hover">Design</Link>
      <Link href={'/'} className="link link-hover">Marketing</Link>
      <Link href={'/'} className="link link-hover">Advertisement</Link>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <Link href={'/'} className="link link-hover">About us</Link>
      <Link href={'/'} className="link link-hover">Contact</Link>
      <Link href={'/'} className="link link-hover">Jobs</Link>
      <Link href={'/'} className="link link-hover">Press kit</Link>
    </nav> 
    <nav>
      <h6 className="footer-title">Legal</h6> 
      <Link href={'/'} className="link link-hover">Terms of use</Link>
      <Link href={'/'} className="link link-hover">Privacy policy</Link>
      <Link href={'/'} className="link link-hover">Cookie policy</Link>
    </nav> 
    <form className="hidden sm:block">
      <h6 className="footer-title">Newsletter</h6> 
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label> 
        <div className="join">
          <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
}