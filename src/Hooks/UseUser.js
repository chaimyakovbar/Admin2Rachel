import { useQuery } from 'react-query'
import { useAtom } from 'jotai'
import { getUsers } from '../api/user'
import { queryAtom } from './ProductsList'

const defaultTodos = []

export const useUsers = () => {
  const [query] = useAtom(queryAtom)

  const retrieveUsers = async () => {  
    const response = await getUsers(query)
    return response.data
  }

  const { data: usersList, isError: error, isLoading, refetch } = useQuery({
    queryKey: ['users', query],
    queryFn: retrieveUsers,
  })

  return {
    isLoading,
    error,
    users: usersList || defaultTodos,
    refetch
  }
}
