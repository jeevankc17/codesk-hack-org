import { 
  useMutation as useReactQuery,
  UseMutationOptions 
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export function useMutation<
  TData = unknown,
  TError = AxiosError,
  TVariables = void,
  TContext = unknown
>(
  options: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationFn'
  > & {
    mutationFn: (variables: TVariables) => Promise<TData>;
    successMessage?: string;
    errorMessage?: string;
    onSuccess?: (data: TData, variables: TVariables, context: TContext) => Promise<void> | void;
    onError?: (error: TError, variables: TVariables, context: TContext) => Promise<void> | void;
  }
) {
  const { successMessage, errorMessage, onSuccess, onError, ...mutationOptions } = options;

  return useReactQuery({
    ...mutationOptions,
    onSuccess: async (data: TData, variables: TVariables, context: TContext) => {
      if (successMessage) {
        toast.success(successMessage);
      }
      if (onSuccess) {
        await onSuccess(data, variables, context);
      }
    },
    onError: async (error: TError, variables: TVariables, context?: TContext) => {
      if (errorMessage) {
        toast.error(errorMessage);
      } else if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
      if (onError) {
        await onError(error, variables, context as TContext);
      }
    },
  });
} 