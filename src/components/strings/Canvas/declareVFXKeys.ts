import FunctionTrigger from "../../../utils/FunctionTrigger"
import {
  functionToTriggers,
  functionToNonAvailableTriggers,
} from "./VFXDeclarations"

export default (data: { [index: string]: any }) => {
  const functionTrigger = new FunctionTrigger()

  Object.entries(functionToNonAvailableTriggers).forEach(([key, functions]) => {
    functions.forEach(functionItem => {
        functionTrigger.subscribeFunctionToNonAvailableTrigger(functionItem(data), key)
    })
  })
  Object.entries(functionToTriggers).forEach(([key, functions]) => {
    functions.forEach(functionItem => {
        functionTrigger.subscribeFunctionToTrigger(functionItem(data), key)
    })
  })

  functionTrigger.listenToTriggerKeysAvailability()

  return () => {
    functionTrigger.executeNonAvailableTriggers()
    functionTrigger.executeAvailableTriggers()
  }
}
