import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword} = props
  const {id, website, username, password, search} = passwordDetails
  const initial = website ? website[0].toUpperCase() : ''

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="password-container">
        <p className="initial">{initial}</p>
      </div>
      <div className="website-container">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        <p className="password">{password}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={onDeletePassword}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
