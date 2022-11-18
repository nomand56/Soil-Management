import React from 'react'
import { useParams } from 'react-router-dom'
import { useWarehouseContext } from '../../context/warehouse_context'

function WarehouseProducts() {
const {specificPostal}= useWarehouseContext()
    const {id}=useParams()
     const data=specificPostal?.filter((item)=>item._id===id)
     console.log("data",data)   
  return (
    
    <div>WarehouseProducts</div>
  )
}

export default WarehouseProducts