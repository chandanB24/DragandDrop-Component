import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent';
import { DndContext, PointerSensor, closestCenter, useSensor } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy} from '@dnd-kit/sortable';

const App = () => {

const [items,setItems] = useState([
  {
    id:"1",
    title:"Featured-1",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
  },
  {
    id:"2",
    title:"Featured-2",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
  },
  {
    id:"3",
    title:"Featured-3",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
  },
  {
    id:"4",
    title:"Featured-4",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
  },
  {
    id:"5",
    title:"Featured-5",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
  },
])


const sensors = [useSensor(PointerSensor)];

const handleDragEnd = ({active,over})=>{
  if(active.id!==over.id){

    setItems((items)=>{

    const oldIndex = items.findIndex(item=>item.id === active.id)
    const newIndex = items.findIndex(item=>item.id === over.id)

    return arrayMove(items,oldIndex,newIndex)
  })

  }
}


  return (
    <div className='p-4'>
      <div className='w-100 bg-light shadow-sm p-2 text-center'>
        <h3>Draggable component</h3>
      </div>
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 p-4">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(item=>item.id)} strategy={rectSortingStrategy}>
      {items.map(
        item=>
        <CardComponent {...item} key={item.id} />
      )}
      </SortableContext>
      </DndContext>
   
    </div>

    </div>
  )
}

export default App