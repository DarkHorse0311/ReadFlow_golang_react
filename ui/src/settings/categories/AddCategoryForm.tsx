import React, { useCallback, useState } from 'react'

import { useFormState } from 'react-use-form-state'
import { useMutation } from 'react-apollo-hooks'
import { RouteComponentProps } from 'react-router'

import Panel from '../../common/Panel'
import Button from '../../common/Button'
import { usePageTitle } from '../../hooks'
import FormInputField from '../../common/FormInputField'
import { CreateOrUpdateCategory } from '../../categories/queries'
import { Category } from '../../categories/models'
import ErrorPanel from '../../error/ErrorPanel'
import { getGQLError, isValidForm } from '../../common/helpers'
import { updateCacheAfterCreate } from '../../categories/cache'
import { IMessageDispatchProps, connectMessageDispatch } from '../../containers/MessageContainer'

interface AddCategoryFormFields {
  title: string
}

type AllProps = RouteComponentProps<{}> & IMessageDispatchProps

export const AddCategoryForm = ({history, showMessage }: AllProps) => {
  usePageTitle('Settings - Add new category')

  const [errorMessage, setErrorMessage] = useState<string | null>(null) 
  const [formState, { text }] = useFormState<AddCategoryFormFields>()
  const addCategoryMutation = useMutation<Category>(CreateOrUpdateCategory)

  const addNewCategory = async (category: Category) => {
    try{
      const res = await addCategoryMutation({
        variables: category,
        update: updateCacheAfterCreate
      })
      showMessage(`New category: ${category.title}`)
      // console.log('New category', res)
      history.goBack()
    } catch (err) {
      setErrorMessage(getGQLError(err))
    }
  }

  const handleOnClick = useCallback(() => {
    if (!isValidForm(formState)) {
      setErrorMessage("Please fill out correctly the mandatory fields.")
      return
    }
    addNewCategory(formState.values)
  }, [formState])

  return (
    <Panel>
      <header>
        <h1>Add new category</h1>
      </header>
      <section>
        {errorMessage != null &&
          <ErrorPanel title="Unable to add new category">
            {errorMessage}
          </ErrorPanel>
        }
        <form>
          <FormInputField label="Title"
            {...text('title')}
            error={!formState.validity.title}
            required />
        </form>
      </section>
      <footer>
        <Button title="Back to categories" to="/settings/categories">
          Cancel
        </Button>
        <Button
          title="Add category"
          onClick={handleOnClick}
          primary>
          Add
        </Button>
      </footer>
    </Panel>
  )
}

export default connectMessageDispatch(AddCategoryForm)
