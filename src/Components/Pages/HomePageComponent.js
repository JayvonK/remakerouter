import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const HomePageComponent = () => {
    const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/pageOne')
  }

  const handlePageChange2 = () => {
    navigate('/pageFour')
  }
  return (
    <div>
      <h1>This is the home page</h1>
      <Button variant="primary" onClick={handlePageChange2}>Back</Button>
      <Button variant="primary" onClick={handlePageChange}>Foward</Button>
      
    </div>
  )
}

export default HomePageComponent
