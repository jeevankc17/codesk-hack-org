import { AxiosError } from 'axios';
import { axiosInstance } from './axios';

type FormType = 'hackathon' | 'organizer' | 'project' | 'builder';

interface ApiResponse<T = any> {
  data: T;
  message?: string;
}

const API_ENDPOINTS = {
  hackathon: '/hackathons',
  organizer: '/organizers',
  project: '/projects',
  builder: '/v1/builders',
} as const;

export class ApiService {
  static async createResource<T>(
    formType: FormType, 
    data: T
  ): Promise<ApiResponse<{ id: string }>> {
    try {
      const response = await axiosInstance.post<ApiResponse<{ id: string }>>(
        API_ENDPOINTS[formType],
        data
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || `Failed to create ${formType}`);
      }
      throw error;
    }
  }
} 