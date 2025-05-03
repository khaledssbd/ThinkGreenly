import React from 'react'
import CreateIdeaForm from './CreateIdeaForm'
import { getAllCategories } from '../_action'

const CreateIdeaModule = async () => {
    const categories = await getAllCategories()

  return (
    <div>
      <CreateIdeaForm categories={categories?.data}/>
    </div>
  )
}

export default CreateIdeaModule
