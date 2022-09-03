import React from 'react'
import {useParams} from 'react-router-dom';

export default function SingleEmployee() {
    const params = useParams();
    
  return (
    <div>Employee ID: {params.employeeid}</div>
  )
}
