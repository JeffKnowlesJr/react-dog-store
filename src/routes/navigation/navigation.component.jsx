import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as DogLogo } from '../../assets/dog-russel-logo.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="navigation-logo__container" to="/">
          <div>
            <DogLogo className="navigation-logo" />
          </div>
        </Link>
        <div className="navigation__container">
          <Link className="navigation__link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
