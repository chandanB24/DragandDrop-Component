import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';
import React from 'react'

const CardComponent = ({id,title,content}) => {

    const {setNodeRef,attributes,listeners,transition,transform,isDragging} = useSortable({id:id});

    const style = {
        transition,
        transform:CSS.Transform.toString(transform),
        zIndex:isDragging?2:1,
    }

  return (
    <div className="col" ref={setNodeRef} {...attributes} {...listeners} style={style}>
    <div className={`card  ${isDragging?"bg-success text-white":"bg-light text-dark"} mb-3`}>
    <div className="card-header">Draggable cards</div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
  </div>
  </div>
  )
}

export default CardComponent