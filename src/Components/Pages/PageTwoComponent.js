import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const PageTwoComponent = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/pageThree')
  }

  const handlePageChange2 = () => {
    navigate('/pageOne')
  }

  return (
    <div>
      <h1>This is page two</h1>
      <Button variant="primary" onClick={handlePageChange2}>Back</Button>
      <Button variant="primary" onClick={handlePageChange}>Foward</Button>
      
    </div>
  )
}

export default PageTwoComponent
