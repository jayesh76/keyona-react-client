import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CRow,
  CListGroupItem,
  CListGroup
} from '@coreui/react';

const Collapses = (data) => {

  console.log("Data: "+JSON.stringify(data));
  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)
  const [fade, setFade] = useState(true)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    window.history.back();
  }

  return (
    <CRow>
 
      <CCol>
        <CCard>
          <CCardHeader>
          <h2 className="m-0 p-0">
          <center> <small>પુસ્તકનું નામ:</small> {data.bookName}   - 
            <small> આવૃત્તિ: {data.bookEdition}</small>
          </center>

          </h2>
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton  
                    className="text-left m-0 p-0" >
                    પાત્રનું નામ:<b>{data.actor} </b> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                    પાત્રનું ગામ: <b>{data.village}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                    પાત્રની જન્મ તારીખ:<b>{data.birthDate}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                    ગુજરાતી જન્મ તારીખ:<b>{data.birthDateGuj}</b>
                    <p>પાત્રની મૃત્યુ તારીખ:<b>{data.deathDate}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                    ગુજરાતી મૃત્યુ તારીખ:<b>{data.deathDateGuj}</b>
                    </p>
                    <p>મુખ્ય વિષય:<b>{data.subject} </b> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                    પેટા વિષય: <b>{data.subSubject}</b>
                    </p>
                    સંદર્ભ:<b>{data.reference} </b> 
                  </CButton>
                </CCardHeader>
              </CCard>
             
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    className="text-left m-0 p-0" >
                    <h5 className="m-0 p-0">શ્લોક / સાખી</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show="true">
                  <CCardBody>
                    {data.shlok}
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    className="text-left m-0 p-0" >
                    <h5 className="m-0 p-0">
                      <center>પ્રસંગ
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      <small>પ્રસંગની તારીખ:</small> {data.eventDate}   
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <small> ગુજરાતી તારીખ: </small>{data.eventDateGuj}
                      </center>

                    </h5>
                    
                  </CButton>
                </CCardHeader>
                <CCollapse show="true">
                  <CCardBody>
                    {data.event}
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    className="text-left m-0 p-0" >
                    <h5 className="m-0 p-0">વિશેષ નોંધ</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show="true">
                  <CCardBody>
                    {data.comments}
                  </CCardBody>
                </CCollapse>
              </CCard>
              
            </div>
          </CCardBody>
          <CCardFooter>
            <center>
              <CButton color="primary" onClick={toggleFade}>પાછળ  જવા</CButton>
            </center>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Collapses
