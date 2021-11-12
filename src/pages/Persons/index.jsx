import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/persons/list'

const Persons = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(list())
  }, [dispatch])

  const person = useSelector((store) => store.person)

  return (
    <>
      <div>
      Persons:
      <ul>
        {!person.loading && person.data.length > 0 ?
          person.data.map((d) => (
            <li>{`${d.nombres} ${d.apellidos}`}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
      </div>
          <div>
          Mascotas:
        </div>
    </>
  )
}

export default Persons
