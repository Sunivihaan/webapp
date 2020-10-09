import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class RequestMessageStore {
  api = new ApiService()

  requestMessage = ''
  successMessage = ''

  requestDetailsLoaded = false
  
 
	async loadRequestDetails(userId, token) {

        if(!userId || !token)
            throw new Error( 'Invalid state. User not authenticated.' )

        try {
            const response = await this.api.getRequestDetails( userId, token )

            if( response.id ) { // data was returned
                this.requestMessage = [ response.requestMessage ]

                return { success:true }
            }
            else {
                return { success: false, ...response }
            }
        } catch (error) {
            return { success: false, error }
        } finally {
            this.requestDetailsLoaded = true
        }
    }
	
	async saveRequestDetails(userId, token) {
        if(!userId || !token)
            throw new Error( 'Invalid state. User not authenticated.' )

        const requestMessage = {
            message: this.requestMessagemessage,
          
        }

        try {
            const response = await this.api.updateRequestDetails(userId, requestMessage)

            if(response.id) { //data was returned
                return { success: true }
            } else {
                return { success: false, ...response }
            }
        } catch (error) {
            return { success: false, error }
        }
    }
	
   clearRequestMessage() {
    this.requestMessage = ""
  }


  clearSuccessMessage() {
    this.successMessage = ''
  }


}

decorate( RequestMessageStore, {
  requestMessage: observable,
  successMessage: observable,
 })

export default RequestMessageStore
