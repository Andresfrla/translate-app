import { AUTO_LANGUAGE } from "@/constants/constants"
import React from "react"

const initialState = {
    fromLanguage: 'en',
    toLanguage: 'fr',
    fromText: 'Hello how are you?',
    result: 'Bonjour, comment allez-vous?',
    loading: false
  }

  function reducer (state, action){
    const { type, payload } = action

    if(type === 'INTERCHANGE_LANGUAGES'){
        if(state.fromLanguage === AUTO_LANGUAGE) return state

      return {
       ...state,
        fromLanguage: state.fromLanguage,
        toLanguage: state.toLanguage
      }
    }

    if(type == 'SET_FROM_LANGUAGE'){
      return {
        ...state,
        fromLanguage: payload
      }
    }

    if(type === 'SET_TO_LANGUAGE'){
      return {
        ...state,
        toLanguage: payload
      }
    }

    if(type === 'SET_FROM_TEXT'){
      return {
        ...state,
        loading: true,
        fromText: payload,
        result: ''
      }
    }

    if(type === 'SET_RESULT'){
      return {
        ...state,
        loading: false,
        result: payload
      }
    }
    return state
  }

export function useStore() {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
      }, dispatch] = React.useReducer(reducer, initialState)

      const interchangeLanguages = () => {
        dispatch({type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguage = (payload) => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload) => {
        dispatch({type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload) => {
        dispatch({type: 'SET_FROM_TEXT', payload})
    }

    const setResult = (payload) => {
        dispatch({type: 'SET_RESULT', payload})
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }
}