import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const PageOneComponent = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/pageTwo')
  }

  const handlePageChange2 = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>This is page one</h1>
      <Button variant="primary" onClick={handlePageChange2}>Back</Button>
      <Button variant="primary" onClick={handlePageChange}>Foward</Button>
      
    </div>
  )
}

export default PageOneComponent
