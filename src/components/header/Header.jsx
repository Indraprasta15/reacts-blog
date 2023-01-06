import './header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
            <img className="headerImg" 
                src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="HeaderImages" />
    </div>
  )
}
