import React from 'react'
import {useParams} from 'react-router-dom';

export default function SingleParticipant() {
    const params = useParams();
    
  return (
    <div>Participant ID: {params.participantid}</div>
  )
}
