import React from 'react'

import NumberField from './fields/NumberField'
import TextField from './fields/TextField'
import ChoiceField from './fields/ChoiceField'
import BooleanField from './fields/BooleanField'
import PercentageField from './fields/PercentageField'
import { QuestionProps } from '../types'

function Question({
  question, onChange,
}: QuestionProps) {
  const renderField = (type: string) => {
    switch (type) {
      case 'percentage':
        return <PercentageField name={question.id.toString()} onChange={onChange} />
      case 'text':
        return <TextField name={question.id.toString()} onChange={onChange} />
      case 'number':
        return <NumberField name={question.id.toString()} onChange={onChange} />
      case 'boolean':
        return <BooleanField name={question.id.toString()} onChange={onChange} />
      case 'choice':
        return (
          <ChoiceField
            name={question.id.toString()}
            onChange={onChange}
            choices={question.choices as string[]}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl">
      <h2 className="question mb-10 text-3xl font-bold">{ question.title }</h2>
      { renderField(question.type) }
     { renderField(question.choice2) } 
      { question.description && (
        <>
          <p className="mt-10 text-gray-600">{ question.description }</p>
          <a className="mt-2 block font-medium text-gray-600" href="//nationalgeographic.org/education/what-is-geography/" target="_blank" rel="noreferrer">Learn More &rarr;</a>
        </>
      ) }
    </div>
  )
}

export default Question
