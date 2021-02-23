import moment from 'moment'

import response from '../utils/response'
import { event as Event } from '../models'

const validateEventLink = async (req, res, next) => {
  try {
    const { eventLink } = req.query

    if (!eventLink) {
      response(res, false, 400, 'eventLink is required')
      return
    }
    const existingEvent = await Event.findOne({
      where: {
        eventLink
      },
      raw: true
    })

    if (existingEvent) {
      const eventDate = moment(existingEvent.eventDate).utc().format('YYYY-MM-DD')
      const currentDate = moment().format('YYYY-MM-DD')

      if (currentDate === eventDate) {
        req.existingEvent = existingEvent
        next()
        return
      }
      response(res, false, 400, 'Invalid eventLink')
    } else {
      response(res, false, 400, 'Invalid eventLink')
    }
  } catch (e) {
    console.log(e)
    response(res, false, 400, e.message)
  }
}

const validateParticipantCode = async (req, res, next) => {
  const { participantCode } = req.query

  if (participantCode) {
    const existingEvent = req.existingEvent
    const index = existingEvent.participantCodes.split(',').findIndex((x) => x === participantCode)
    if (index > -1) {
      next()
      return
    }
    response(res, false, 400, 'Invalid participantCode')
  } else {
    next()
  }
}

export default {
  validateEventLink,
  validateParticipantCode
}
