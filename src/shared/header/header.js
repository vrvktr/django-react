import React from 'react'
import Avatar from 'react-avatar';
import './header.css';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate()

  const headerItems = [
    {
      name: "Home",
      onClick: () => navigate("/home")
    },
    {
      name: "Users",
      onClick: () => navigate("/users")
    },
    {
      name: "Settings",
      onClick: () => navigate("/settings")
    }
  ];


  return (
    <div className="header p-2">
      <div className='row'>
        <div className='col-2'>
          <div className='d-flex justify-content-between'>
            {headerItems && headerItems.map((items, index) => (
              <div className='' key={index + items.name}>
                <button className='btn btn-link' onClick={items.onClick}>{items.name}</button>
              </div>
            ))}

          </div>
        </div>
        <div className='col-2'></div>
        <div className='col-4 justify-content-center'>
          <div>
            <input type='text' className='form-control' placeholder='search' />
          </div>
        </div>
        <div className='col text-end pe-4'>
          <Avatar
            name={"Hell asas"}
            round
            size='35px'
          />
        </div>
      </div>

    </div>
  )
}

export default Header;