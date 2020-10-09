import { decorate, observable } from 'mobx'

import ApiService from "../services/api";

class LooperProfileStore {
    api = new ApiService()

    detailsLoaded = false
    popups = new Array(3)

    uiStates = {
        popups: this.popups.fill(false)
    }

    userDetails = {
        userName: 'Agda Karlsson',
        userImage: 'path/to/img',
        userDesc: 'I need help with my groceries from time to time.',
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

decorate( LooperProfileStore, {
    userName: observable,
    userImage: observable,
    userDesc: observable,
    popups: observable,
})

export default LooperProfileStore;
