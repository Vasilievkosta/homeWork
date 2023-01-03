import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sortState = [...state];
            sortState.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            if (action.payload === 'down') {
                return sortState.reverse()
            }
            return sortState // need to fix
        }
        case 'check': {
            let changeAge = state.filter(t => t.age > action.payload)
            return changeAge // need to fix
        }
        default:
            return state
    }
}
