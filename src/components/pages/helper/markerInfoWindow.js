import React, { useState, useEffect } from 'react'
import { InfoWindow } from '@react-google-maps/api'
import Badge from 'react-bootstrap/Badge'
import { Button } from 'react-bootstrap'
import GreenTick from '../../../assets/img/green-check.png'
import { withRouter } from 'react-router-dom'

const MarkerInfoWindow = ({ marker, onCloseClick, history }) => {
  const { lat, lng, title, description, owner, type } = marker
  const [step, setStep] = useState(0)
  const [stepContent, setStepContent] = useState(null)

  const renderCurrentStepContent = (currentStep) => {
    switch (currentStep) {
      case 0:
        return setStepContent(description)
      case 1:
        return setStepContent(
          <div className='step-2-content'>{`We've just pinged ${owner}, We'll notify you as soon as we hear back!\n\nOnce confirmed on both ends, you'll see this task on your "My tasks" list.`}</div>
        )
      case 2:
        let text = `Sending response to ${owner}...`
        setTimeout(() => {
          setStepContent(
            <div className='step-3-content'>
              <img
                src={GreenTick}
                alt='tick'
                width='25px'
                style={{ marginRight: 10 }}
              />
              {owner} accepted your help
            </div>
          )
        }, 3000)
        return setStepContent(text)
      // return (
      //   <>
      //     <DeliveryTimeSlot timeSlots={marker.timeSlots} />
      //     <p
      //       style={{
      //         fontWeight: '600',
      //         fontSize: '16px',
      //         lineHeight: '24px',
      //         marginTop: '15px',
      //       }}
      //     >
      //       Would you like to add anything?
      //     </p>
      //     <Form.Control
      //       className='response-textarea'
      //       as='textarea'
      //       rows='3'
      //       placeholder={`Type your response to ${marker.owner}`}
      //     />
      //   </>
      // )
      default:
        return
    }
  }

  useEffect(() => {
    renderCurrentStepContent(step)
  }, [step]) // eslint-disable-line react-hooks/exhaustive-deps

  const renderButtonContent = () => {
    switch (step) {
      case 0:
        return 'I can do this'
      case 1:
        return 'Sounds good!'
      case 2:
        return 'See My Tasks'
      default:
        break
    }
  }

  return (
    <InfoWindow
      position={{ lat, lng }}
      onCloseClick={onCloseClick}
    >
      <>
        <div className='marker-info-window-container'>
          <div className='h4'>
            <span className='mr-3'>
              <img
                src={require(`../../../assets/img/tasks/${type}.svg`)}
                alt='React Logo'
                width='35px'
              />
            </span>
            {title}
          </div>
          <p className='text-right'>
            <Badge
              className={`marker-type-${type} text-white fs-15`}
            >
              {owner}
            </Badge>
          </p>
          <div className='content-container mb-2'>
            {stepContent}
          </div>
        </div>
        <div className='marker-info-window-container-footer'>
          <Button
            className='helper-btn w-100 '
            onClick={() => {
              if (step < 2) return setStep(step + 1)
              history.push('/tasks')
            }}
          >
            {renderButtonContent()}
          </Button>
        </div>
      </>
    </InfoWindow>
  )
}

export default withRouter(MarkerInfoWindow)
