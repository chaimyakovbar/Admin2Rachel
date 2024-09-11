import { useMemo } from 'react'

import { useAtom } from 'jotai'
import { getTodo } from '../api/todos'
import { useQuery } from 'react-query'
import { queryAtom } from './filterCompletedAndDelete'

const defaultTodos = []

export const useTodo = ({ enabled } = {}) => {
    
    const [query] = useAtom(queryAtom)

    const queryParams = useMemo(() =>
        Object.entries(query).map(([key, value]) => `${key}=${value}`, [query]).join('&'),
        [query])

    const retrievePosts = async () => {
        try {
            const response = await getTodo(queryParams)
            return response.data
        } catch (err) {
        }
    }
    const { data: todoList, isError: error, isLoading, refetch } = useQuery({
        queryKey: [`todos_${queryParams}`],
        queryFn: retrievePosts,
        enabled,
    })

    return {
        isLoading,
        error,
        todoList: todoList || defaultTodos,
        refetch
    }
};