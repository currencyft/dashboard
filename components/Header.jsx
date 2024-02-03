import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "Home"}
    }
    
    render() {
        return (
            <div className='flex justify-between px-4 pt-4'>
              <h2 className='font-bold text-[20px]'>{this.props.title}</h2>
              <h2 className='text-[20px]'>Welcome Back, Clint</h2>
            </div>
          )
    }
}

export default Header
