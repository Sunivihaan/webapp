import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class RequestAvailabiltyStore {
  api = new ApiService()

  requestAvailabilityLoaded = false
  
  timeStates = new Array(12)
  dayStates = new Array(7)
 
	availStates = {
        timeStates: this.timeStates.fill(false),
        dayStates: this.dayStates.fill(false),
    }
	
	 availability = {
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        timeslots: ['9:00 - 10:00', '10:00 - 11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00']
    }
	
	async loadRequestAvailability( userId, token ) {
        if( !userId || !token )
            throw new Error( 'Invalid state. User not authenticated.' )

        this.days = this.days.fill(false);
        this.timeslots = this.days.fill(false);

        try {
            const response = await this.api.getRequestAvailability( userId, token )

            if( response.availability ) { // data was returned
                this.availability = [ ...response.days, ...response.timeslots ]

                return { success: true }
            }
            else {
                return { success: false, ...response }
            }
        } catch (error) {
            return { success: false, error }
        } finally {
            this.requestAvailabilityLoaded = true
        }
    }
	
	async saveRequestAvailability( userId, token ) {
        if( !userId || !token )
            throw new Error( 'Invalid state. User not authenticated.' )

        const availability = {
            userId: userId,
            days: this.availability.days,
            timeslots: this.availability.timeslots,
        }

        try {
            const response = await this.api.updateRequestAvailability( availability, token )

            if( response.id ) { // data was returned
                return { success: true }
            }
            else {
                return { success: false, ...response }
            }
        } catch (error) {
            return { success: false, error }
        }
    }
	
}

decorate( RequestAvailabiltyStore, {
	days: observable,
    timeslots: observable,
 })

export default RequestAvailabiltyStore
