import { decorate, observable } from 'mobx'

import ApiService from "../services/api";

class UserStatsStore {
    api = new ApiService()

    statsLoaded = false

    userStats = {
        tasksTotal: 30,
        tasksPeriod: 8,
        rank: 3
    }

    async loadUserStats(userId, token) {
        if(!userId || !token)
            throw new Error( 'Invalid state. User not authenticated.' )

        try {
            const response = await this.api.getUserStats(userId, token)

            if(response.id){ //data was returned
                this.userStats = [ response.tasksTotal, response.tasksPeriod ]

                return { success: true }
            } else {
                return { success: false, ...response}
            }
        } catch(error) {
            return { success: false, error }
        } finally {
            this.statsLoaded = true
        }
    }
}

decorate( UserStatsStore, {
    tasksTotal: observable,
    tasksPeriod: observable,
    rank: observable
})

export default UserStatsStore;
