import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

const Modals = (param) => {
  const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  return (
    <CCardBody>
    <CButton onClick={() => setLarge(!large)} className="mr-1">
    View
    </CButton>
            <CModal 
            show={large} 
            onClose={() => setLarge(!large)}
            size="lg"
          >
            <CModalHeader closeButton>
              <CModalTitle>{param.subject}</CModalTitle>
            </CModalHeader>
            <CModalBody>
              {param.event}
            </CModalBody>
            <CModalFooter>
              <CButton color="primary" onClick={() => setLarge(!large)}>Do Something</CButton>{' '}
              <CButton color="secondary" onClick={() => setLarge(!large)}>Cancel</CButton>
            </CModalFooter>
          </CModal>
           
          </CCardBody>   
  )
}

export default Modals
