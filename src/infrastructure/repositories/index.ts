import ApiClient from '../clients/ApiClient'
import ActivityRepository from './Activity/Activity.repository'

export const activityRepository = ActivityRepository(ApiClient)
