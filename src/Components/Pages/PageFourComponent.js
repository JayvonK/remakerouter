import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const PageFourComponent = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/')
  }

  const handlePageChange2 = () => {
    navigate('/pageThree')
  }
  return (
    <div>
      <h1>This page four</h1>
      <Button variant="primary" onClick={handlePageChange2}>Back</Button>
      <Button variant="primary" onClick={handlePageChange}>Foward</Button>
      
    </div>
  )
}

export default PageFourComponent
