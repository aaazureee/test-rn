import React, { useState } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

const EditableTimer = ({
  id,
  title,
  description,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemovePress,
  onStartPress,
  onStopPress
}) => {
  const [isFormOpen, setFormOpen] = useState(false)

  const handleEditPress = () => {
    openForm()
  }

  const handleSubmit = timer => {
    closeForm()
    onFormSubmit(timer)
  }

  const openForm = () => setFormOpen(true)
  const closeForm = () => setFormOpen(false)

  if (isFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        description={description}
        onFormSubmit={handleSubmit}
        onFormClose={closeForm}
      />
    )
  }
  return (
    <Timer
      id={id}
      title={title}
      description={description}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={handleEditPress}
      onRemovePress={onRemovePress}
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  )
}

export default EditableTimer
