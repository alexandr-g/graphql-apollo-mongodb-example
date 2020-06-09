import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const UsersQuery = gql`
  query Users {
    users {
      id
      firstName
    }
  }
`

const Users = () => {
  const { loading, error, data } = useQuery(UsersQuery)

  if (loading) return 'loading users...'
  if (error) return 'error while loading users'

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
