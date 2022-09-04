import React from 'react'
import {useParams} from 'react-router-dom';

export default function SingleIncident() {
    const params = useParams();
    
  return (
    <div>Incident ID: {params.incidentid}</div>
  )
}
 