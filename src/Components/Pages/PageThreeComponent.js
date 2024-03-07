import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const PageThreeComponent = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/pageFour')
  }

  const handlePageChange2 = () => {
    navigate('/pageTwo')
  }
  return (
    <div>
      <h1>This is page three</h1>
      <Button variant="primary" onClick={handlePageChange2}>Back</Button>
      <Button variant="primary" onClick={handlePageChange}>Foward</Button>
      
    </div>
  )
}

export default PageThreeComponent
