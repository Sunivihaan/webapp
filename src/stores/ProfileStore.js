import { decorate, observable } from 'mobx'

import ApiService from "../services/api";

class ProfileStore {
    api = new ApiService()

    detailsLoaded = false
    availabilityLoaded = false

    timeStates = new Array(12)
    dayStates = new Array(7)
    checkboxes = new Array(6)
    popups = new Array(5)

    uiStates = {
        timeStates: this.timeStates.fill(false),
        dayStates: this.dayStates.fill(false),
        allDayStates: false,
        checkboxes: this.checkboxes.fill(false),
        popups: this.popups.fill(false),
    }

    userDetails = {
        userName: 'Jane Green',
        userImage: 'path/to/img',
        userDesc: 'Helping the elderly in my neighborhood has been contributing a lot to my good mood and activity levels during this time. I love meeting my neighbors and hearing their stories!',
        helpDesc: 'I’m an art student in NYU with lots of extra time. Looking to help my local community.',
    }

    availability = {
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        timeslots: ['9:00 - 10:00', '10:00 - 11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00']
    }

    async loadAvailability( userId, token ) {
        if( !userId || !token )
            throw new Error( 'Invalid state. User not authenticated.' )

        this.days = this.days.fill(false);
        this.timeslots = this.days.fill(false);

        try {
            const response = await this.api.getAvailability( userId, token )

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
            this.availabilityLoaded = true
        }
    }

    async saveAvailability( userId, token ) {
        if( !userId || !token )
            throw new Error( 'Invalid state. User not authenticated.' )

        const availability = {
            userId: userId,
            days: this.availability.days,
            timeslots: this.availability.timeslots,
        }

        try {
            const response = await this.api.updateAvailability( availability, token )

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

    async loadUserDetails(userId, token) {

        if(!userId || !token)
            throw new Error( 'Invalid state. User not authenticated.' )

        try {
            const response = await this.api.getUserDetails( userId, token )

            if( response.id ) { // data was returned
                this.userDetails = [ response.userName, response.userImage, response.helpDesc, response.userDesc]

                return { success:true }
            }
            else {
                return { success: false, ...response }
            }
        } catch (error) {
            return { success: false, error }
        } finally {
            this.detailsLoaded = true
        }
    }

    async saveUserDetails(userId, token) {
        if(!userId || !token)
            throw new Error( 'Invalid state. User not authenticated.' )

        const userDetails = {
            userName: this.userDetails.userName,
            userImage: this.userDetails.userImage,
            userDesc: this.userDetails.userDesc,
            helpDesc: this.userDetails.helpDesc,
        }

        try {
            const response = await this.api.updateAvailability(userId, token, userDetails)

            if(response.id) { //data was returned
                return { success: true }
            } else {
                return { success: false, ...response }
            }
        } catch (error) {
            return { success: false, error }
        }
    }
}

decorate( ProfileStore, {
    userName: observable,
    userImage: observable,
    days: observable,
    timeslots: observable,
    helpDesc: observable,
    userDesc: observable,
    popups: observable,
})

export default ProfileStore;
